import { LAYOUTS, getLayoutConfig } from './layoutConfig.js';
import { renderLayout } from './renderer.js';

// --- STATE MANAGER ---
const App = {
    view: 'layout',
    config: null,
    stream: null,
    photos: [],
    fabricCanvas: null,
    
    // DOM Elements cache
    dom: {},

    init() {
        // Cache DOM
        this.dom = {
            views: {
                layout: document.getElementById('view-layout'),
                booth: document.getElementById('view-booth'),
                customize: document.getElementById('view-customize')
            },
            grid: document.getElementById('layout-grid'),
            video: document.getElementById('live-video'),
            countdown: document.getElementById('countdown-display'),
            shutter: document.getElementById('shutter-btn'),
            flash: document.getElementById('flash-overlay'),
            galleryRail: document.getElementById('gallery-rail'),
            layoutTitle: document.getElementById('layout-title-span')
        };

        // Initialize Icons
        lucide.createIcons();

        // Start at Layout
        this.LayoutController.init();
        
        // Listeners
        window.startBooth = (layoutId) => this.BoothController.start(layoutId);
        window.navTo = (view) => this.switchView(view);
        window.triggerShutter = () => this.BoothController.capture();
        window.undo = () => this.StudioController.undo();
        window.redo = () => this.StudioController.redo();
        window.print = () => this.StudioController.print();
    },

    switchView(viewName) {
        // Lifecycle: Exit current
        if (this.view === 'booth') this.BoothController.stop();
        
        // Hide all
        Object.values(this.dom.views).forEach(el => {
            el.classList.remove('active');
            el.style.display = 'none'; // Force hide for Fabric safety
        });

        // Show new
        const activeEl = this.dom.views[viewName];
        activeEl.style.display = (viewName === 'customize' ? 'flex' : 'block');
        // Trigger reflow
        activeEl.offsetHeight; 
        activeEl.classList.add('active');
        
        this.view = viewName;

        // Lifecycle: Enter new
        if (viewName === 'booth') {
             // Already handled by startBooth usually, but if navigating back...
        }
        if (viewName === 'customize') this.StudioController.init();
        if (viewName === 'layout') this.LayoutController.render();
    }
};

// --- LAYOUT CONTROLLER ---
App.LayoutController = {
    init() {
        this.render();
        // Filter handlers
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.onclick = () => {
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.render(btn.dataset.filter);
            };
        });
    },

    render(filter = 'all') {
        const grid = App.dom.grid;
        grid.innerHTML = '';
        
        Object.entries(LAYOUTS).forEach(([id, config], index) => {
             if (filter !== 'all' && !this.matchCategory(id, filter)) return;

             const card = document.createElement('div');
             card.className = 'layout-card';
             card.onclick = () => startBooth(id); // Global hook
             
             // Canvas Preview
             const canvas = document.createElement('canvas');
             canvas.width = 500; canvas.height = 1000; // Preview res
             const ctx = canvas.getContext('2d');
             renderLayout(ctx, config);

             const info = document.createElement('div');
             info.className = 'card-info';
             info.innerHTML = `<span>${id.replace(/_/g, ' ')}</span><i data-lucide="arrow-right" style="width:16px"></i>`;

             card.appendChild(canvas);
             card.appendChild(info);
             grid.appendChild(card);
        });
        lucide.createIcons();
    },

    matchCategory(id, filter) {
        if (id.includes('vogu') || id.includes('film')) return filter === 'editorial';
        if (id.includes('cute') || id.includes('pink')) return filter === 'cute';
        if (id.includes('vintage')) return filter === 'vintage';
        return filter === 'aesthetic';
    }
};

// --- BOOTH CONTROLLER ---
App.BoothController = {
    async start(layoutId) {
        App.config = getLayoutConfig(layoutId);
        App.photos = [];
        
        // Update UI
        App.dom.layoutTitle = layoutId; 
        document.getElementById('gallery-rail').innerHTML = ''; // Clear rail
        document.getElementById('gallery-rail').classList.remove('show');
        document.getElementById('shutter-btn').classList.remove('hidden');

        // Switch View
        App.switchView('booth');

        // Start Camera
        try {
            App.stream = await navigator.mediaDevices.getUserMedia({ 
                video: { width: 1920, height: 1080, facingMode: 'user' }, 
                audio: false 
            });
            App.dom.video.srcObject = App.stream;
        } catch (e) {
            alert("Camera Access Denied");
            App.switchView('layout');
        }
    },

    stop() {
        if (App.stream) {
            App.stream.getTracks().forEach(t => t.stop());
            App.stream = null;
        }
    },

    async capture() {
        const btn = App.dom.shutter;
        if (btn.classList.contains('processing')) return;
        
        const count = App.config.slots.length || 3;
        btn.classList.add('processing');

        App.photos = [];
        const rail = document.getElementById('gallery-rail');
        rail.innerHTML = '';
        rail.classList.add('show');

        for (let i = 0; i < count; i++) {
            // Count
            const cd = App.dom.countdown;
            cd.style.display = 'block';
            for(let t=3; t>0; t--) {
                cd.textContent = t;
                await new Promise(r => setTimeout(r, 1000));
            }
            cd.style.display = 'none';

            // Flash
            const f = App.dom.flash;
            f.classList.add('flash-active');
            setTimeout(() => f.classList.remove('flash-active'), 300);

            // Snap
            const blob = await this.takeSnap();
            App.photos.push(blob);

            // Thumb
            const img = document.createElement('img');
            img.src = blob;
            img.className = 'rail-thumb';
            rail.appendChild(img);

            if(i < count - 1) await new Promise(r => setTimeout(r, 1500));
        }

        btn.classList.remove('processing');
        btn.classList.add('hidden');
        
        // Auto nav to Studio
        setTimeout(() => App.switchView('customize'), 1000);
    },

    async takeSnap() {
         const vid = App.dom.video;
         const cvs = document.createElement('canvas');
         cvs.width = vid.videoWidth;
         cvs.height = vid.videoHeight;
         const ctx = cvs.getContext('2d');
         // Mirror
         ctx.translate(cvs.width, 0);
         ctx.scale(-1, 1);
         ctx.drawImage(vid, 0, 0);
         return cvs.toDataURL('image/jpeg', 0.9);
    }
};

// --- STUDIO CONTROLLER ---
App.StudioController = {
    canvas: null,
    history: [],
    historyStep: -1,

    init() {
        // Init Fabric if not exists
        if (!this.canvas) {
            this.canvas = new fabric.Canvas('c', { backgroundColor: '#fff' });
            this.resizeCanvas();
            window.addEventListener('resize', () => this.resizeCanvas());
            
            // History Hooks
            this.canvas.on('object:added', () => this.saveHistory());
            this.canvas.on('object:modified', () => this.saveHistory());
        } else {
            this.canvas.clear();
            this.canvas.backgroundColor = '#fff';
        }

        // Load Project
        this.loadComposition();
        
        // Setup UI Logic for mobile/desktop tools (Global funcs)
        window.openTool = (tool, el) => this.setTool(tool, el);
        window.openMetricTool = (tool) => this.setTool(tool, null, true);
        window.closeSheet = () => document.getElementById('mobile-sheet').classList.remove('open');
        
        this.setTool('stickers'); // Default
    },

    async loadComposition() {
        const layout = App.config;
        const photos = App.photos; // from memory, not localStorage!
        
        if(!photos.length && localStorage.getItem('capturedPhotos')) {
             // Fallback for reload dev
             try { App.photos = JSON.parse(localStorage.getItem('capturedPhotos')); } catch(e){}
        }

        const c = this.canvas;
        c.setWidth(layout.width);
        c.setHeight(layout.height);
        c.backgroundColor = layout.backgroundColor || '#fff';

        // Load Photos
        const loadImage = (src) => new Promise(r => fabric.Image.fromURL(src, img => r(img)));

        for (let i = 0; i < Math.min(layout.slots.length, App.photos.length); i++) {
            const slot = layout.slots[i];
            const img = await loadImage(App.photos[i]);
            
            const slotW = slot.w * layout.width;
            const slotH = slot.h * layout.height;
            const scale = Math.max(slotW / img.width, slotH / img.height);
            
            img.set({
                left: (slot.x * layout.width) - ((img.width*scale - slotW)/2),
                top: (slot.y * layout.height) - ((img.height*scale - slotH)/2),
                scaleX: scale,
                scaleY: scale,
                selectable: true
            });
            
            // Clip
            const clip = new fabric.Rect({
                left: slot.x*layout.width, top: slot.y*layout.height,
                width: slotW, height: slotH,
                absolutePositioned: true,
                rx: layout.slotRadius||0, ry: layout.slotRadius||0
            });
            img.clipPath = clip;
            c.add(img);

            // Border
            if(layout.slotBorderWidth) {
                 const frame = new fabric.Rect({
                     left: slot.x*layout.width, top: slot.y*layout.height,
                     width: slotW, height: slotH,
                     fill: 'transparent',
                     stroke: layout.slotBorderColor || '#fff', borderWidth: layout.slotBorderWidth,
                     rx: layout.slotRadius, ry: layout.slotRadius,
                     evented: false, selectable: false
                 });
                 c.add(frame);
            }
        }
        
        this.saveHistory(true);
        this.resizeCanvas();
    },
    
    resizeCanvas() {
        const wrapper = document.getElementById('canvas-wrapper');
        const container = document.getElementById('studio-stage-area'); // Need to ensure IDs match HTML
        if(!container || !this.canvas) return;
        
        const pad = 40;
        const scale = Math.min(
            (container.offsetWidth - pad) / this.canvas.width,
            (container.offsetHeight - pad) / this.canvas.height
        );
        wrapper.style.transform = `scale(${Math.min(scale, 1)})`;
    },

    setTool(tool, el, isMobile) {
        // UI Handling logic for active states
        if(!isMobile) {
             document.querySelectorAll('.tool-tab').forEach(t => t.classList.remove('active'));
             if(el) el.classList.add('active');
             // Inject content to desktop panel (requires HTML structure matching customize.html logic)
             document.getElementById('desktop-panel-content').innerHTML = this.getToolContent(tool);
             document.getElementById('desktop-panel-title').innerText = tool;
        } else {
             document.getElementById('mobile-sheet-content').innerHTML = this.getToolContent(tool);
             document.getElementById('mobile-sheet').classList.add('open');
        }
    },

    getToolContent(tool) {
        // Reuse string generation from customize.html
        // For brevity, putting partial logic here. 
        if(tool === 'stickers') return `<div class="grid-options">${['✨','🔥','💖','💀'].map(s=>`<div class="option-card" onclick="addSticker('${s}')">${s}</div>`).join('')}</div>`;
        return `<div>Tool: ${tool}</div>`;
    },

    // History & Actions
    saveHistory(force){
        if(this.processing && !force) return;
        this.history = this.history.slice(0, this.historyStep+1);
        this.history.push(JSON.stringify(this.canvas));
        this.historyStep++;
    },
    undo(){ if(this.historyStep>0){ this.historyStep--; this.canvas.loadFromJSON(this.history[this.historyStep], ()=>this.canvas.renderAll()); } },
    redo(){ if(this.historyStep<this.history.length-1){ this.historyStep++; this.canvas.loadFromJSON(this.history[this.historyStep], ()=>this.canvas.renderAll()); } },
    
    print() {
        const d = this.canvas.toDataURL({format:'png', multiplier:2});
        window.top.postMessage({ action: 'print', image: d }, '*');
        // Show modal in parent or alert
    }
};

// Global Helpers for inline HTML onclicks 
// (Quick and dirty for migration, would normally bind in JS)
window.addSticker = (s) => {
    const t = new fabric.Text(s, { left:100, top:100, fontSize:100 });
    App.fabricCanvas.add(t);
};

// Boot
window.onload = () => App.init();
