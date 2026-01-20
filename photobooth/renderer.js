// Gradient Parser
function drawGradient(ctx, width, height, cssStr) {
    try {
        const content = cssStr.replace(/^(repeating-)?(linear|radial)-gradient\(/, '').replace(/\)$/, '');
        const parts = content.split(/,(?![^(]*\))/).map(s => s.trim());

        let angle = 180;
        let stops = [];
        let startIndex = 0;

        const first = parts[0];
        if (first.includes('deg')) {
            angle = parseFloat(first);
            startIndex = 1;
        } else if (first.startsWith('to ')) {
            if (first.includes('bottom')) angle = 180;
            if (first.includes('top')) angle = 0;
            if (first.includes('right')) angle = 90;
            if (first.includes('left')) angle = 270;
            startIndex = 1;
        } else if (cssStr.includes('radial')) {
            const grad = ctx.createRadialGradient(width / 2, height / 2, 10, width / 2, height / 2, Math.max(width, height) / 2);
            const colors = parts.filter(p => !p.startsWith('circle') && !p.startsWith(' at '));
            colors.forEach((c, i) => {
                try { grad.addColorStop(i / (colors.length - 1 || 1), c.split(' ')[0]); } catch (e) { }
            });
            ctx.fillStyle = grad;
            ctx.fillRect(0, 0, width, height);
            return;
        }

        for (let i = startIndex; i < parts.length; i++) stops.push(parts[i]);

        const rad = (angle - 90) * (Math.PI / 180);
        const x1 = width / 2 - Math.cos(rad) * width / 2;
        const y1 = height / 2 - Math.sin(rad) * height / 2;
        const x2 = width / 2 + Math.cos(rad) * width / 2;
        const y2 = height / 2 + Math.sin(rad) * height / 2;

        const grad = ctx.createLinearGradient(x1, y1, x2, y2);
        stops.forEach((stop, idx) => {
            const match = stop.match(/^(.*?)\s+([\d\.]+%?)$/);
            let color = stop;
            let pos = idx / Math.max(1, stops.length - 1);
            if (match) {
                color = match[1];
                pos = match[2].includes('%') ? parseFloat(match[2]) / 100 : parseFloat(match[2]);
            }
            try { grad.addColorStop(Math.min(1, Math.max(0, pos)), color.trim()); } catch (e) { }
        });
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, width, height);
    } catch (err) {
        ctx.fillStyle = '#fff';
        ctx.fillRect(0, 0, width, height);
    }
}

// Texture & Pattern Drawing
function drawTexture(ctx, width, height, type, opacity = 1, color1 = '#fff', color2 = '#000') {
    if (!type) return;
    ctx.save();
    ctx.globalAlpha = opacity;

    if (type === 'grain') {
        for (let i = 0; i < 500; i++) {
            ctx.fillStyle = Math.random() > 0.5 ? '#fff' : '#000';
            ctx.fillRect(Math.random() * width, Math.random() * height, 2, 2);
        }
    } else if (type === 'grid') {
        ctx.strokeStyle = 'rgba(255,255,255,0.5)';
        ctx.lineWidth = 1;
        for (let x = 0; x <= width; x += 50) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, height); ctx.stroke(); }
        for (let y = 0; y <= height; y += 50) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(width, y); ctx.stroke(); }
    } else if (type === 'dots') {
        ctx.fillStyle = 'rgba(0,0,0,0.15)';
        for (let x = 0; x <= width; x += 30) {
            for (let y = 0; y <= height; y += 30) {
                ctx.beginPath(); ctx.arc(x, y, 3, 0, Math.PI * 2); ctx.fill();
            }
        }
    } else if (type === 'checks' || type === 'checkerboard') {
        // Classic checkerboard pattern
        const size = 60;
        for (let y = 0; y < height; y += size) {
            for (let x = 0; x < width; x += size) {
                ctx.fillStyle = ((x / size + y / size) % 2 === 0) ? color1 : color2;
                ctx.fillRect(x, y, size, size);
            }
        }
    } else if (type === 'gingham') {
        // Gingham plaid pattern
        const size = 40;
        ctx.fillStyle = color1;
        ctx.fillRect(0, 0, width, height);
        ctx.globalAlpha = 0.5;
        ctx.fillStyle = color2;
        // Horizontal stripes
        for (let y = 0; y < height; y += size * 2) {
            ctx.fillRect(0, y, width, size);
        }
        // Vertical stripes
        for (let x = 0; x < width; x += size * 2) {
            ctx.fillRect(x, 0, size, height);
        }
    } else if (type === 'stripes') {
        // Diagonal stripes
        const size = 30;
        ctx.strokeStyle = color2;
        ctx.lineWidth = size / 2;
        for (let i = -height; i < width + height; i += size) {
            ctx.beginPath();
            ctx.moveTo(i, 0);
            ctx.lineTo(i + height, height);
            ctx.stroke();
        }
    } else if (type === 'hearts') {
        // Scattered hearts
        ctx.fillStyle = color2;
        ctx.font = '30px serif';
        ctx.textAlign = 'center';
        for (let y = 20; y < height; y += 80) {
            for (let x = 20; x < width; x += 80) {
                ctx.fillText('♡', x + (y % 160 === 0 ? 0 : 40), y);
            }
        }
    } else if (type === 'bows') {
        // Scattered bows
        ctx.fillStyle = color2;
        ctx.font = '25px serif';
        ctx.textAlign = 'center';
        for (let y = 30; y < height; y += 100) {
            for (let x = 30; x < width; x += 100) {
                ctx.fillText('🎀', x + (y % 200 === 0 ? 0 : 50), y);
            }
        }
    } else if (type === 'stars') {
        // Scattered stars
        ctx.fillStyle = color2;
        ctx.font = '20px serif';
        for (let y = 20; y < height; y += 60) {
            for (let x = 20; x < width; x += 60) {
                ctx.fillText('✦', x + (y % 120 === 0 ? 0 : 30), y);
            }
        }
    }
    ctx.restore();
}

// MAIN RENDERER - Uses config.width/height for ALL calculations
export function renderLayout(ctx, config, photos = [], state = {}) {
    // USE LAYOUT DIMENSIONS, NOT CANVAS DIMENSIONS
    const W = config.width;
    const H = config.height;

    // 1. Background
    let bgFill = config.backgroundColor || '#ffffff';
    if (state.frameType === 'color' && state.frameValue) bgFill = state.frameValue;

    if (bgFill.includes('gradient')) {
        drawGradient(ctx, W, H, bgFill);
    } else {
        ctx.fillStyle = bgFill === 'transparent' ? '#fff' : bgFill;
        ctx.fillRect(0, 0, W, H);
    }

    // Texture/Pattern
    if (config.texture) {
        drawTexture(ctx, W, H, config.texture, config.textureOpacity || 1, config.textureColor1 || '#fff', config.textureColor2 || '#000');
    }

    // 2. Decorations (behind photos)
    if (config.decorations) {
        config.decorations.forEach(dec => {
            ctx.save();
            ctx.font = `${dec.size || 50}px ${dec.font || 'serif'}`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.translate(dec.x * W, dec.y * H);
            if (dec.rotation) ctx.rotate(dec.rotation * Math.PI / 180);
            ctx.globalAlpha = dec.opacity || 1;
            ctx.fillText(dec.content, 0, 0);
            ctx.restore();
        });
    }

    // 3. Photo Slots
    if (config.slots) {
        config.slots.forEach((slot, i) => {
            const sx = slot.x * W;
            const sy = slot.y * H;
            const sw = slot.w * W;
            const sh = slot.h * H;
            const radius = config.slotRadius || 0;

            // Shadow
            if (config.slotShadow) {
                ctx.save();
                ctx.shadowColor = 'rgba(0,0,0,0.25)';
                ctx.shadowBlur = 15;
                ctx.shadowOffsetX = 5;
                ctx.shadowOffsetY = 5;
                ctx.fillStyle = '#fff';
                ctx.beginPath();
                if (radius > 0) ctx.roundRect(sx, sy, sw, sh, radius);
                else ctx.rect(sx, sy, sw, sh);
                ctx.fill();
                ctx.restore();
            }

            // Photo or Placeholder
            const src = photos[i % (photos.length || 1)];
            if (src) {
                const img = new Image();
                img.src = src;
                // Pass config.filter or individual slot filter if we had one
                if (img.complete) drawPhoto(ctx, img, sx, sy, sw, sh, state.shape, radius, config.filter);
                else drawPlaceholder(ctx, sx, sy, sw, sh, radius);
            } else {
                drawPlaceholder(ctx, sx, sy, sw, sh, radius);
            }

            // Border
            if (config.slotBorderColor && config.slotBorderWidth) {
                ctx.save();
                ctx.strokeStyle = config.slotBorderColor;
                ctx.lineWidth = config.slotBorderWidth;
                ctx.beginPath();
                if (radius > 0) ctx.roundRect(sx, sy, sw, sh, radius);
                else ctx.rect(sx, sy, sw, sh);
                ctx.stroke();
                ctx.restore();
            }
        });
    }

    // 4. Overlay Text
    if (config.overlayText) {
        config.overlayText.forEach(ot => {
            ctx.save();
            ctx.fillStyle = ot.color || '#000';
            const fontSize = parseInt(ot.font) || 40;
            ctx.font = `${ot.weight || 'bold'} ${fontSize}px ${ot.fontFamily || 'Syne'}`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            if (ot.shadow) { ctx.shadowColor = 'rgba(0,0,0,0.5)'; ctx.shadowBlur = 4; }
            if (ot.rotation) {
                ctx.translate(ot.x * W, ot.y * H);
                ctx.rotate(ot.rotation * Math.PI / 180);
                ctx.fillText(ot.text, 0, 0);
            } else {
                ctx.fillText(ot.text, ot.x * W, ot.y * H);
            }
            ctx.restore();
        });
    }
}

function drawPlaceholder(ctx, x, y, w, h, radius = 0) {
    ctx.save();
    ctx.beginPath();
    if (radius > 0) ctx.roundRect(x, y, w, h, radius);
    else ctx.rect(x, y, w, h);
    ctx.clip();

    // Gradient fill
    const grd = ctx.createLinearGradient(x, y, x + w, y + h);
    grd.addColorStop(0, '#e8e8e8');
    grd.addColorStop(1, '#d0d0d0');
    ctx.fillStyle = grd;
    ctx.fillRect(x, y, w, h);

    // Plus icon
    ctx.fillStyle = '#aaa';
    ctx.font = `bold ${Math.min(w, h) * 0.3}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('+', x + w / 2, y + h / 2);
    ctx.restore();
}

function drawPhoto(ctx, img, x, y, w, h, shape, radius = 0, filter = 'none') {
    ctx.save();
    ctx.beginPath();
    if (shape === 'circle') ctx.ellipse(x + w / 2, y + h / 2, w / 2, h / 2, 0, 0, Math.PI * 2);
    else if (radius > 0) ctx.roundRect(x, y, w, h, radius);
    else ctx.rect(x, y, w, h);
    ctx.clip();

    // Apply Filter
    if (filter && filter !== 'none') {
        ctx.filter = filter;
    }

    const imgRatio = img.width / img.height;
    const slotRatio = w / h;
    let dw, dh, dx, dy;
    if (imgRatio > slotRatio) {
        dh = h; dw = h * imgRatio; dx = x - (dw - w) / 2; dy = y;
    } else {
        dw = w; dh = w / imgRatio; dx = x; dy = y - (dh - h) / 2;
    }
    ctx.drawImage(img, dx, dy, dw, dh);
    ctx.restore();
}
