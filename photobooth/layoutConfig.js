
// Helper for standard 4-photo vertical strip
const createStrip = (id, bg, textColor, text, category, extraConfig = {}) => ({
    id,
    width: 600,
    height: 1800,
    category,
    backgroundColor: bg,
    slots: [
        { x: 0.1, y: 0.05, w: 0.8, h: 0.2 },
        { x: 0.1, y: 0.28, w: 0.8, h: 0.2 },
        { x: 0.1, y: 0.51, w: 0.8, h: 0.2 },
        { x: 0.1, y: 0.74, w: 0.8, h: 0.2 }
    ],
    overlayText: text ? [{ text, x: 0.5, y: 0.965, color: textColor, font: '50px', fontFamily: 'Syne', weight: '800' }] : undefined,
    slotShadow: true,
    slotRadius: 15,
    ...extraConfig
});

export const LAYOUTS = {
    // ========== 1. NORMAL / BASIC (3) ==========
    'classic_white': {
        ...createStrip('classic_white', '#ffffff', '#000', 'PHOTOBOOTH', 'normal'),
        slotShadow: false, slotRadius: 0,
        filter: 'contrast(1.05) brightness(1.05)'
    },
    'classic_black': {
        ...createStrip('classic_black', '#111', '#fff', 'PHOTOBOOTH', 'normal'),
        slotShadow: false, slotRadius: 0,
        filter: 'grayscale(1) contrast(1.2)'
    },
    'simple_gray': {
        ...createStrip('simple_gray', '#e0e0e0', '#333', 'memories', 'normal'),
        slotRadius: 10
    },

    // ========== 2. AESTHETIC / VIBES (4) - DESIGNER PATTERNS ==========
    'pink_gingham': {
        id: 'pink_gingham', width: 600, height: 1800, category: 'aesthetic',
        backgroundColor: '#fff',
        texture: 'gingham', textureOpacity: 1, textureColor1: '#FFE4EC', textureColor2: '#FF69B4',
        slots: [
            { x: 0.1, y: 0.08, w: 0.8, h: 0.2 },
            { x: 0.1, y: 0.31, w: 0.8, h: 0.2 },
            { x: 0.1, y: 0.54, w: 0.8, h: 0.2 },
            { x: 0.1, y: 0.77, w: 0.8, h: 0.2 }
        ],
        filter: 'saturate(1.1) brightness(1.05) contrast(0.95)',
        slotRadius: 15, slotBorderColor: '#fff', slotBorderWidth: 6, slotShadow: true,
        overlayText: [{ text: 'COQUETTE', x: 0.5, y: 0.98, color: '#FF69B4', font: '50px', fontFamily: 'Syne', weight: '800' }]
    },
    'sage_checks': {
        id: 'sage_checks', width: 600, height: 1800, category: 'aesthetic',
        backgroundColor: '#fff',
        texture: 'checks', textureOpacity: 1, textureColor1: '#E8F5E9', textureColor2: '#81C784',
        slots: [
            { x: 0.12, y: 0.06, w: 0.76, h: 0.22 },
            { x: 0.12, y: 0.3, w: 0.76, h: 0.22 },
            { x: 0.12, y: 0.54, w: 0.76, h: 0.22 },
            { x: 0.12, y: 0.78, w: 0.76, h: 0.18 }
        ],
        filter: 'sepia(0.2) grayscale(0.2) contrast(0.95)',
        slotRadius: 0, slotBorderColor: '#fff', slotBorderWidth: 8, slotShadow: true,
        overlayText: [{ text: 'AESTHETIC', x: 0.5, y: 0.98, color: '#2E7D32', font: '45px', fontFamily: 'Syne', weight: '800' }]
    },
    'heart_pattern': {
        id: 'heart_pattern', width: 600, height: 1800, category: 'aesthetic',
        backgroundColor: '#FFF0F5',
        texture: 'hearts', textureOpacity: 0.4, textureColor2: '#FFB6C1',
        slots: [
            { x: 0.15, y: 0.1, w: 0.7, h: 0.2 },
            { x: 0.15, y: 0.34, w: 0.7, h: 0.2 },
            { x: 0.15, y: 0.58, w: 0.7, h: 0.2 }
        ],
        filter: 'saturate(1.2) brightness(1.05) contrast(1.05)',
        decorations: [
            { content: '♡', x: 0.5, y: 0.88, size: 80, opacity: 0.8 }
        ],
        slotRadius: 30, slotBorderColor: '#FF69B4', slotBorderWidth: 4, slotShadow: true,
        overlayText: [{ text: 'LOVEY', x: 0.5, y: 0.95, color: '#FF1493', font: '50px', fontFamily: 'Syne', weight: '700' }]
    },
    'coquette_bows': {
        id: 'coquette_bows', width: 600, height: 1800, category: 'aesthetic',
        backgroundColor: '#FFF5EE',
        texture: 'bows', textureOpacity: 0.6, textureColor2: '#FFB6C1',
        slots: [
            { x: 0.08, y: 0.1, w: 0.84, h: 0.2 },
            { x: 0.08, y: 0.34, w: 0.84, h: 0.2 },
            { x: 0.08, y: 0.58, w: 0.84, h: 0.2 }
        ],
        filter: 'brightness(1.1) contrast(0.9) saturate(1.1)',
        decorations: [
            { content: '🎀', x: 0.5, y: 0.05, size: 60 },
            { content: '🎀', x: 0.15, y: 0.88, size: 40 },
            { content: '🎀', x: 0.85, y: 0.88, size: 40 }
        ],
        slotRadius: 20, slotBorderColor: '#FFB6C1', slotBorderWidth: 5, slotShadow: true,
        overlayText: [{ text: 'COQUETTE', x: 0.5, y: 0.95, color: '#DB7093', font: '45px', fontFamily: 'Syne', weight: '800' }]
    },

    // ========== 3. VINTAGE (3) ==========
    'film_strip': {
        id: 'film_strip', width: 600, height: 1800, category: 'vintage',
        backgroundColor: '#1a1a1a', texture: 'grain', textureOpacity: 0.12,
        slots: [
            { x: 0.08, y: 0.03, w: 0.84, h: 0.22 }, { x: 0.08, y: 0.27, w: 0.84, h: 0.22 },
            { x: 0.08, y: 0.51, w: 0.84, h: 0.22 }, { x: 0.08, y: 0.75, w: 0.84, h: 0.22 }
        ],
        filter: 'contrast(1.3) grayscale(0.3) sepia(0.2)',
        overlayText: [
            { text: 'KODAK', x: 0.95, y: 0.2, color: '#f1c40f', font: '20px', fontFamily: 'Courier New', weight: 'bold', rotation: 90 },
            { text: '400', x: 0.95, y: 0.6, color: '#f1c40f', font: '20px', fontFamily: 'Courier New', weight: 'bold', rotation: 90 }
        ],
        slotRadius: 4, slotBorderColor: '#333', slotBorderWidth: 1
    },
    'polaroid_retro': {
        id: 'polaroid_retro', width: 600, height: 1000, category: 'vintage',
        backgroundColor: '#FAFAFA',
        texture: 'grain',
        // ID Badge Look: Hole punch at top + Photo Frame
        decorations: [
            { type: 'circle', x: 0.5, y: 0.08, size: 20, color: '#333' }, // Lanyard Hole
            { type: 'text', text: 'OFFICIAL ID', x: 0.5, y: 0.85, color: '#000', font: 'bold 40px Helvetica' }
        ],
        slots: [{ x: 0.15, y: 0.2, w: 0.7, h: 0.55 }],
        overlayText: [], // Removed old text to use decoration text for better control
        slotShadow: true, slotRadius: 0, slotBorderColor: '#eee', slotBorderWidth: 2,
        filter: 'contrast(1.1) brightness(1.1) saturate(1.2) sepia(0.2)'
    },
    'sepia_classic': createStrip('sepia_classic', '#D2B48C', '#3E2723', 'VINTAGE', 'vintage', { texture: 'grain', textureOpacity: 0.1, filter: 'sepia(0.8) contrast(1.2)' }),
    // ========== 4. RETRO (3) - SOFT & ELEGANT AESTHETIC ==========
    'vintage_cream': {
        id: 'vintage_cream', width: 600, height: 1800, category: 'retro',
        backgroundColor: 'linear-gradient(180deg, #F5E6D3 0%, #E8D5C4 50%, #DCC8B5 100%)',
        texture: 'grain', textureOpacity: 0.08,
        slots: [
            { x: 0.1, y: 0.06, w: 0.8, h: 0.21 },
            { x: 0.1, y: 0.29, w: 0.8, h: 0.21 },
            { x: 0.1, y: 0.52, w: 0.8, h: 0.21 },
            { x: 0.1, y: 0.75, w: 0.8, h: 0.21 }
        ],
        filter: 'sepia(0.4) contrast(0.9) brightness(1.05)',
        overlayText: [{ text: 'memories', x: 0.5, y: 0.98, color: '#8B7355', font: '45px', fontFamily: 'Georgia' }],
        slotRadius: 8, slotBorderColor: '#fff', slotBorderWidth: 8, slotShadow: true
    },
    'dusty_rose': {
        id: 'dusty_rose', width: 600, height: 1800, category: 'retro',
        backgroundColor: 'linear-gradient(180deg, #E8D5D5 0%, #DEB8B8 50%, #D4A5A5 100%)',
        slots: [
            { x: 0.12, y: 0.08, w: 0.76, h: 0.2 },
            { x: 0.12, y: 0.31, w: 0.76, h: 0.2 },
            { x: 0.12, y: 0.54, w: 0.76, h: 0.2 },
            { x: 0.12, y: 0.77, w: 0.76, h: 0.2 }
        ],
        filter: 'sepia(0.3) saturate(0.8) brightness(1.05)',
        overlayText: [{ text: 'moments', x: 0.5, y: 0.98, color: '#8B6969', font: '45px', fontFamily: 'Georgia' }],
        slotRadius: 20, slotBorderColor: '#fff', slotBorderWidth: 6, slotShadow: true
    },
    'sage_minimal': {
        id: 'sage_minimal', width: 600, height: 1800, category: 'retro',
        backgroundColor: 'linear-gradient(180deg, #D4DDD4 0%, #B8C9B8 50%, #9DB89D 100%)',
        slots: [
            { x: 0.15, y: 0.08, w: 0.7, h: 0.2 },
            { x: 0.15, y: 0.32, w: 0.7, h: 0.2 },
            { x: 0.15, y: 0.56, w: 0.7, h: 0.2 }
        ],
        filter: 'grayscale(0.4) contrast(0.95)',
        overlayText: [{ text: 'captured', x: 0.5, y: 0.85, color: '#4A5D4A', font: '40px', fontFamily: 'Georgia' }],
        slotRadius: 25, slotBorderColor: '#fff', slotBorderWidth: 5, slotShadow: true
    },

    // ========== 5. CUTE / KIDS (4) ==========
    'cute_clouds': {
        id: 'cute_clouds', width: 600, height: 1800, category: 'cute',
        backgroundColor: '#87CEEB',
        decorations: [
            { content: '☁️', x: 0.1, y: 0.04, size: 60 }, { content: '☁️', x: 0.9, y: 0.15, size: 80 },
            { content: '☁️', x: 0.2, y: 0.88, size: 70 }, { content: '✨', x: 0.5, y: 0.5, size: 40 }
        ],
        slots: [{ x: 0.15, y: 0.12, w: 0.7, h: 0.2 }, { x: 0.15, y: 0.35, w: 0.7, h: 0.2 }, { x: 0.15, y: 0.58, w: 0.7, h: 0.2 }],
        filter: 'brightness(1.1) saturate(1.2)',
        overlayText: [{ text: 'DREAMY', x: 0.5, y: 0.85, color: '#fff', font: '50px', fontFamily: 'Comic Sans MS' }],
        slotRadius: 30, slotBorderColor: '#fff', slotBorderWidth: 4
    },
    'kids_dinos': {
        id: 'kids_dinos', width: 600, height: 1800, category: 'cute',
        backgroundColor: '#C1E1C1',
        decorations: [
            { content: '🦖', x: 0.1, y: 0.08, size: 60 }, { content: '🦕', x: 0.9, y: 0.25, size: 60 },
            { content: '🥚', x: 0.2, y: 0.85, size: 50 }, { content: '🌴', x: 0.85, y: 0.9, size: 60 }
        ],
        slots: [{ x: 0.1, y: 0.15, w: 0.8, h: 0.2 }, { x: 0.1, y: 0.4, w: 0.8, h: 0.2 }, { x: 0.1, y: 0.65, w: 0.8, h: 0.2 }],
        filter: 'saturate(1.5) contrast(1.1)',
        overlayText: [{ text: 'ROAR!', x: 0.5, y: 0.05, color: '#2E8B57', font: '60px', fontFamily: 'Impact' }],
        slotRadius: 20, slotBorderColor: '#2E8B57', slotBorderWidth: 4
    },
    'rainbow_fun': {
        id: 'rainbow_fun', width: 600, height: 1800, category: 'cute',
        backgroundColor: 'linear-gradient(180deg, #FF0000 0%, #FF7F00 17%, #FFFF00 33%, #00FF00 50%, #0000FF 67%, #4B0082 83%, #8F00FF 100%)',
        slots: [{ x: 0.15, y: 0.1, w: 0.7, h: 0.18 }, { x: 0.15, y: 0.32, w: 0.7, h: 0.18 }, { x: 0.15, y: 0.54, w: 0.7, h: 0.18 }, { x: 0.15, y: 0.76, w: 0.7, h: 0.18 }],
        filter: 'saturate(2.0) contrast(1.1)',
        slotRadius: 20, slotBorderColor: '#fff', slotBorderWidth: 5
    },
    'unicorn_sparkle': {
        id: 'unicorn_sparkle', width: 600, height: 1800, category: 'cute',
        backgroundColor: 'linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)',
        decorations: [
            { content: '🦄', x: 0.5, y: 0.05, size: 80 },
            { content: '✨', x: 0.1, y: 0.3, size: 40 }, { content: '✨', x: 0.9, y: 0.5, size: 40 },
            { content: '💖', x: 0.15, y: 0.9, size: 50 }, { content: '💖', x: 0.85, y: 0.9, size: 50 }
        ],
        slots: [{ x: 0.15, y: 0.15, w: 0.7, h: 0.2 }, { x: 0.15, y: 0.4, w: 0.7, h: 0.2 }, { x: 0.15, y: 0.65, w: 0.7, h: 0.2 }],
        filter: 'brightness(1.15) saturate(1.3) contrast(1.05)',
        slotRadius: 40, slotBorderColor: '#fff', slotBorderWidth: 4
    },

    // ========== 6. EMOJI (4) ==========
    'emoji_hearts': {
        id: 'emoji_hearts', width: 600, height: 1800, category: 'emoji',
        backgroundColor: '#FFC0CB',
        decorations: [
            { content: '💖', x: 0.1, y: 0.05, size: 50 }, { content: '💖', x: 0.9, y: 0.05, size: 50 },
            { content: '💕', x: 0.1, y: 0.95, size: 50 }, { content: '💕', x: 0.9, y: 0.95, size: 50 },
            { content: '🥰', x: 0.5, y: 0.5, size: 60, opacity: 0.3 }
        ],
        slots: [{ x: 0.2, y: 0.1, w: 0.6, h: 0.18 }, { x: 0.2, y: 0.32, w: 0.6, h: 0.18 }, { x: 0.2, y: 0.54, w: 0.6, h: 0.18 }, { x: 0.2, y: 0.76, w: 0.6, h: 0.18 }],
        filter: 'saturate(1.4) contrast(1.1)',
        slotRadius: 50, slotBorderColor: '#FF69B4', slotBorderWidth: 3
    },
    'emoji_stars': {
        id: 'emoji_stars', width: 600, height: 1800, category: 'emoji',
        backgroundColor: '#191970',
        decorations: [
            { content: '✨', x: 0.1, y: 0.05, size: 40 }, { content: '⭐', x: 0.85, y: 0.1, size: 50 },
            { content: '💫', x: 0.15, y: 0.5, size: 50 }, { content: '🌟', x: 0.9, y: 0.55, size: 45 },
            { content: '🌙', x: 0.5, y: 0.92, size: 70 }
        ],
        slots: [{ x: 0.15, y: 0.12, w: 0.7, h: 0.22 }, { x: 0.15, y: 0.38, w: 0.7, h: 0.22 }, { x: 0.15, y: 0.64, w: 0.7, h: 0.22 }],
        filter: 'brightness(1.2) contrast(1.1)',
        overlayText: [{ text: 'STARRY', x: 0.5, y: 0.06, color: '#FFD700', font: '40px', fontFamily: 'Syne' }],
        slotBorderColor: '#FFD700', slotBorderWidth: 2, slotRadius: 10
    },
    'emoji_party': {
        id: 'emoji_party', width: 600, height: 1800, category: 'emoji',
        backgroundColor: '#FFFACD',
        decorations: [
            { content: '🎉', x: 0.1, y: 0.05, size: 60 }, { content: '🎊', x: 0.9, y: 0.08, size: 55 },
            { content: '🥳', x: 0.5, y: 0.5, size: 50, opacity: 0.4 },
            { content: '🎈', x: 0.1, y: 0.9, size: 50 }, { content: '🎁', x: 0.88, y: 0.92, size: 50 }
        ],
        slots: [{ x: 0.15, y: 0.15, w: 0.7, h: 0.2 }, { x: 0.15, y: 0.4, w: 0.7, h: 0.2 }, { x: 0.15, y: 0.65, w: 0.7, h: 0.2 }],
        filter: 'saturate(1.5) contrast(1.1)',
        overlayText: [{ text: 'PARTY!', x: 0.5, y: 0.92, color: '#FF1493', font: '50px', fontFamily: 'Comic Sans MS' }],
        slotRadius: 25, slotBorderColor: '#FF1493', slotBorderWidth: 4
    },
    'emoji_food': {
        id: 'emoji_food', width: 600, height: 1800, category: 'emoji',
        backgroundColor: '#FFF5EE',
        decorations: [
            { content: '🍕', x: 0.08, y: 0.05, size: 50 }, { content: '🍔', x: 0.92, y: 0.1, size: 50 },
            { content: '🍟', x: 0.1, y: 0.5, size: 45 }, { content: '🌮', x: 0.9, y: 0.55, size: 45 },
            { content: '🍩', x: 0.15, y: 0.9, size: 50 }, { content: '🍦', x: 0.85, y: 0.92, size: 50 }
        ],
        slots: [{ x: 0.18, y: 0.12, w: 0.64, h: 0.22 }, { x: 0.18, y: 0.38, w: 0.64, h: 0.22 }, { x: 0.18, y: 0.64, w: 0.64, h: 0.22 }],
        filter: 'saturate(1.3) brightness(1.1)',
        overlayText: [{ text: 'YUMMY', x: 0.5, y: 0.05, color: '#D2691E', font: '45px', fontFamily: 'Syne' }],
        slotRadius: 15, slotBorderColor: '#D2691E', slotBorderWidth: 3
    },

    // ========== 7. CARTOON / POP (2) ==========
    'comic_pop': {
        id: 'comic_pop', width: 800, height: 1200, category: 'cartoon',
        backgroundColor: '#fff', texture: 'dots',
        slots: [
            { x: 0.05, y: 0.05, w: 0.45, h: 0.45 }, { x: 0.55, y: 0.05, w: 0.4, h: 0.4 },
            { x: 0.05, y: 0.55, w: 0.4, h: 0.4 }, { x: 0.5, y: 0.5, w: 0.45, h: 0.45 }
        ],
        filter: 'contrast(1.4) saturate(1.6) brightness(1.1)',
        decorations: [
            { content: 'POW!', x: 0.85, y: 0.12, size: 50, rotation: 10 },
            { content: 'BOOM!', x: 0.15, y: 0.88, size: 45, rotation: -8 }
        ],
        slotBorderColor: '#000', slotBorderWidth: 6, slotShadow: true
    },
    'kawaii_pink': {
        id: 'kawaii_pink', width: 600, height: 1800, category: 'cartoon',
        backgroundColor: '#FFB6C1',
        decorations: [
            { content: '(◕‿◕)', x: 0.5, y: 0.05, size: 40 },
            { content: '♡', x: 0.1, y: 0.3, size: 30 }, { content: '♡', x: 0.9, y: 0.5, size: 30 },
            { content: '★', x: 0.15, y: 0.85, size: 35 }, { content: '★', x: 0.85, y: 0.9, size: 35 }
        ],
        slots: [{ x: 0.12, y: 0.1, w: 0.76, h: 0.2 }, { x: 0.12, y: 0.35, w: 0.76, h: 0.2 }, { x: 0.12, y: 0.6, w: 0.76, h: 0.2 }],
        filter: 'brightness(1.1) saturate(1.2) contrast(1.05)',
        overlayText: [{ text: 'KAWAII', x: 0.5, y: 0.88, color: '#fff', font: '50px', fontFamily: 'Arial' }],
        slotRadius: 40, slotBorderColor: '#fff', slotBorderWidth: 5
    },

    // ========== 8. ICONIC / EDITORIAL (5) ==========
    'editorial_vogue': {
        id: 'editorial_vogue', width: 900, height: 1200, category: 'class',
        backgroundColor: '#fff',
        slots: [{ x: 0.0, y: 0.2, w: 1.0, h: 0.8 }],
        overlayText: [
            { text: 'VOGUE', x: 0.5, y: 0.12, color: '#000', font: '120px', fontFamily: 'Didot', weight: 'bold' },
            { text: 'SUMMER ISSUE', x: 0.5, y: 0.04, color: '#777', font: '22px', fontFamily: 'Arial' }
        ],
        slotShadow: false,
        filter: 'grayscale(100%) contrast(1.2)'
    },
    'time_magazine': {
        id: 'time_magazine', width: 900, height: 1200, category: 'class',
        backgroundColor: '#E31B23',
        slots: [{ x: 0.05, y: 0.18, w: 0.9, h: 0.75 }],
        overlayText: [
            { text: 'TIME', x: 0.5, y: 0.1, color: '#fff', font: '100px', fontFamily: 'Georgia', weight: 'bold' },
            { text: 'PERSON OF THE YEAR', x: 0.5, y: 0.96, color: '#fff', font: '24px', fontFamily: 'Georgia' }
        ],
        slotShadow: false, slotBorderColor: '#fff', slotBorderWidth: 3,
        filter: 'contrast(1.1) saturate(1.1)'
    },
    'cinema_poster': {
        id: 'cinema_poster', width: 800, height: 1200, category: 'class',
        backgroundColor: 'linear-gradient(180deg, #1a1a2e 0%, #0a0a15 100%)',
        slots: [{ x: 0.1, y: 0.15, w: 0.8, h: 0.55 }],
        filter: 'contrast(1.2) sepia(0.3) saturate(1.2)',
        overlayText: [
            { text: 'A FILM BY YOU', x: 0.5, y: 0.05, color: '#C0C0C0', font: '20px', fontFamily: 'Arial' },
            { text: 'THE MAIN CHARACTER', x: 0.5, y: 0.78, color: '#FFD700', font: '35px', fontFamily: 'Georgia', weight: 'bold' },
            { text: '★★★★★', x: 0.5, y: 0.85, color: '#FFD700', font: '30px', fontFamily: 'serif' },
            { text: 'NOW PLAYING', x: 0.5, y: 0.95, color: '#C0C0C0', font: '18px', fontFamily: 'Arial' }
        ],
        slotRadius: 5, slotShadow: true, slotBorderColor: '#333', slotBorderWidth: 2
    },
    'trading_card': {
        id: 'trading_card', width: 700, height: 1000, category: 'class',
        backgroundColor: 'linear-gradient(135deg, #FFD700 0%, #FFA500 50%, #FF8C00 100%)',
        slots: [{ x: 0.1, y: 0.12, w: 0.8, h: 0.55 }],
        overlayText: [
            { text: 'LEGENDARY', x: 0.5, y: 0.05, color: '#fff', font: '28px', fontFamily: 'Arial Black' },
            { text: '★ RARE ★', x: 0.5, y: 0.73, color: '#fff', font: '22px', fontFamily: 'Arial Black' },
            { text: 'COLLECTOR EDITION', x: 0.5, y: 0.95, color: '#8B4513', font: '18px', fontFamily: 'Arial' }
        ],
        slotRadius: 15, slotBorderColor: '#fff', slotBorderWidth: 8, slotShadow: true,
        filter: 'contrast(1.2) saturate(1.4)'
    },
    'id_badge': {
        id: 'id_badge', width: 600, height: 900, category: 'class',
        backgroundColor: '#f0f0f0',
        slots: [{ x: 0.2, y: 0.15, w: 0.6, h: 0.45 }],
        decorations: [
            { content: '📛', x: 0.5, y: 0.68, size: 40 }
        ],
        overlayText: [
            { text: 'OFFICIAL BADGE', x: 0.5, y: 0.05, color: '#333', font: '25px', fontFamily: 'Arial', weight: 'bold' },
            { text: 'VIP ACCESS', x: 0.5, y: 0.78, color: '#1a1a1a', font: '30px', fontFamily: 'Arial Black' },
            { text: 'AUTHORIZED', x: 0.5, y: 0.92, color: '#666', font: '16px', fontFamily: 'Arial' }
        ],
        slotRadius: 10, slotBorderColor: '#333', slotBorderWidth: 3, slotShadow: true,
        filter: 'grayscale(0.5) contrast(1.1)'
    },

    // ========== 9. CYBER / Y2K (4) ==========
    'cyber_grid': {
        id: 'cyber_grid', width: 600, height: 1800, category: 'cyber',
        backgroundColor: '#000',
        // renderer.js needs to support 'grid' texture or we simulate it
        texture: 'dots', textureOpacity: 0.2, textureColor1: '#00FF00',
        slots: [
            { x: 0.1, y: 0.1, w: 0.8, h: 0.2 }, { x: 0.1, y: 0.33, w: 0.8, h: 0.2 },
            { x: 0.1, y: 0.56, w: 0.8, h: 0.2 }, { x: 0.1, y: 0.79, w: 0.8, h: 0.15 }
        ],
        overlayText: [{ text: 'SYSTEM_ONLINE', x: 0.5, y: 0.05, color: '#0F0', font: '30px', fontFamily: 'Courier New' }],
        slotBorderColor: '#0F0', slotBorderWidth: 2, slotShadow: false,
        filter: 'contrast(1.5) saturate(1.8) hue-rotate(90deg)'
    },
    'y2k_butterfly': {
        id: 'y2k_butterfly', width: 600, height: 1800, category: 'cyber',
        backgroundColor: 'linear-gradient(180deg, #D4AF37 0%, #C0C0C0 100%)', // Metallic
        decorations: [
            { content: '🦋', x: 0.1, y: 0.05, size: 50 }, { content: '🦋', x: 0.9, y: 0.15, size: 60 },
            { content: '✨', x: 0.5, y: 0.9, size: 40 }
        ],
        slots: [{ x: 0.15, y: 0.12, w: 0.7, h: 0.2 }, { x: 0.15, y: 0.35, w: 0.7, h: 0.2 }, { x: 0.15, y: 0.58, w: 0.7, h: 0.2 }],
        overlayText: [{ text: '2000s VIBE', x: 0.5, y: 0.85, color: '#fff', font: '40px', fontFamily: 'Arial Black' }],
        slotRadius: 0, slotBorderColor: '#fff', slotBorderWidth: 4,
        filter: 'saturate(1.5) contrast(1.2)'
    },
    'vaporwave_sunset': {
        id: 'vaporwave_sunset', width: 600, height: 1800, category: 'cyber',
        backgroundColor: 'linear-gradient(180deg, #FF71CE 0%, #01CDFE 100%)',
        decorations: [
            { content: '🌴', x: 0.2, y: 0.9, size: 80 }, { content: '🌴', x: 0.8, y: 0.9, size: 80 },
            { content: '💾', x: 0.5, y: 0.05, size: 50 }
        ],
        slots: [{ x: 0.15, y: 0.15, w: 0.7, h: 0.2 }, { x: 0.15, y: 0.4, w: 0.7, h: 0.2 }, { x: 0.15, y: 0.65, w: 0.7, h: 0.2 }],
        overlayText: [{ text: 'A E S T H E T I C', x: 0.5, y: 0.12, color: '#fff', font: '30px', fontFamily: 'Arial' }],
        filter: 'hue-rotate(-20deg) contrast(1.1) saturate(1.3)',
        slotRadius: 5, slotBorderColor: '#fff', slotBorderWidth: 2
    },
    'glitch_mode': {
        id: 'glitch_mode', width: 600, height: 1800, category: 'cyber',
        backgroundColor: '#111',
        decorations: [
            { content: '👾', x: 0.9, y: 0.05, size: 50 }, { content: '⚠️', x: 0.1, y: 0.95, size: 50 }
        ],
        slots: [
            { x: 0.12, y: 0.1, w: 0.76, h: 0.18 }, { x: 0.1, y: 0.32, w: 0.78, h: 0.18 }, // Slight misalignment intentional
            { x: 0.14, y: 0.54, w: 0.74, h: 0.18 }, { x: 0.12, y: 0.76, w: 0.76, h: 0.18 }
        ],
        overlayText: [{ text: 'E R R O R', x: 0.5, y: 0.5, color: '#F00', font: '80px', fontFamily: 'Impact', rotation: -10 }],
        slotBorderColor: '#0FF', slotBorderWidth: 2,
        filter: 'contrast(2.0) saturate(0) sepia(1) hue-rotate(180deg)'
    },

    // ========== 10. MINIMAL / MODERN (4) ==========
    'minimal_mono': {
        id: 'minimal_mono', width: 600, height: 1800, category: 'minimal',
        backgroundColor: '#fff',
        slots: [
            { x: 0.0, y: 0.0, w: 1.0, h: 0.25 }, { x: 0.0, y: 0.25, w: 1.0, h: 0.25 },
            { x: 0.0, y: 0.5, w: 1.0, h: 0.25 }, { x: 0.0, y: 0.75, w: 1.0, h: 0.25 }
        ],
        slotShadow: false, slotRadius: 0,
        filter: 'grayscale(100%) contrast(1.1)'
    },
    'clean_slate': {
        id: 'clean_slate', width: 600, height: 1800, category: 'minimal',
        backgroundColor: '#F5F5F5',
        slots: [
            { x: 0.15, y: 0.08, w: 0.7, h: 0.2 }, { x: 0.15, y: 0.31, w: 0.7, h: 0.2 },
            { x: 0.15, y: 0.54, w: 0.7, h: 0.2 }, { x: 0.15, y: 0.77, w: 0.7, h: 0.2 }
        ],
        overlayText: [{ text: 'pure.', x: 0.5, y: 0.95, color: '#999', font: '30px', fontFamily: 'Helvetica' }],
        slotRadius: 0, slotShadow: true,
        filter: 'contrast(0.95) brightness(1.05)'
    },
    'gallery_frame': {
        id: 'gallery_frame', width: 800, height: 1000, category: 'minimal',
        backgroundColor: '#fff',
        slots: [{ x: 0.2, y: 0.2, w: 0.6, h: 0.6 }], // Large single photo
        overlayText: [
            { text: 'EXHIBIT A', x: 0.5, y: 0.85, color: '#000', font: '20px', fontFamily: 'Times New Roman', letterSpacing: '5px' }
        ],
        slotBorderColor: '#eee', slotBorderWidth: 20, slotShadow: true,
        filter: 'grayscale(100%) contrast(1.2)'
    },
    'modern_art': {
        id: 'modern_art', width: 600, height: 1800, category: 'minimal',
        backgroundColor: '#EAEAEA',
        decorations: [
            { type: 'circle', x: 0.1, y: 0.1, size: 100, color: '#FF4757', opacity: 0.5 },
            { type: 'text', text: '■', x: 0.9, y: 0.9, color: '#3742FA', font: '100px Arial' }
        ],
        slots: [{ x: 0.2, y: 0.15, w: 0.6, h: 0.2 }, { x: 0.2, y: 0.4, w: 0.6, h: 0.2 }, { x: 0.2, y: 0.65, w: 0.6, h: 0.2 }],
        slotRadius: 0, slotShadow: true,
        filter: 'saturate(1.5) contrast(1.2)'
    },

    // ========== 11. VINTAGE EXTENDED (4) ==========
    'wanted_poster': {
        id: 'wanted_poster', width: 600, height: 900, category: 'vintage',
        backgroundColor: '#D2B48C', // Tan paper
        texture: 'grain',
        slots: [{ x: 0.15, y: 0.25, w: 0.7, h: 0.5 }],
        overlayText: [
            { text: 'WANTED', x: 0.5, y: 0.15, color: '#3E2723', font: '80px', fontFamily: 'Impact' },
            { text: 'REWARD: $1,000,000', x: 0.5, y: 0.85, color: '#3E2723', font: '30px', fontFamily: 'Courier New' }
        ],
        slotBorderColor: '#3E2723', slotBorderWidth: 4, slotRadius: 0,
        filter: 'sepia(1) contrast(1.2) brightness(0.8)'
    },
    'newspaper_clip': {
        id: 'newspaper_clip', width: 600, height: 1800, category: 'vintage',
        backgroundColor: '#F0E68C', // Khaki
        texture: 'grain',
        slots: [
            { x: 0.05, y: 0.2, w: 0.45, h: 0.3 }, { x: 0.5, y: 0.2, w: 0.45, h: 0.3 },
            { x: 0.05, y: 0.55, w: 0.9, h: 0.3 }
        ],
        overlayText: [
            { text: 'THE DAILY NEWS', x: 0.5, y: 0.08, color: '#000', font: '60px', fontFamily: 'Times New Roman' },
            { text: 'BREAKING: YOU LOOK GOOD', x: 0.5, y: 0.14, color: '#333', font: '20px', fontFamily: 'Times New Roman', weight: 'italic' }
        ],
        slotRadius: 0,
        filter: 'grayscale(1) contrast(1.3) sepia(0.2)'
    },
    'vinyl_record': {
        id: 'vinyl_record', width: 1000, height: 1000, category: 'vintage',
        backgroundColor: '#111',
        decorations: [
            { type: 'circle', x: 0.5, y: 0.5, size: 480, color: '#222' }, // Record Groove
            { type: 'circle', x: 0.5, y: 0.5, size: 150, color: '#FF6347' } // Label
        ],
        slots: [{ x: 0.5, y: 0.5, w: 0.3, h: 0.3, radius: 1000 }], // Circular photo (renderer needs to handle radius masking or we accept box)
        overlayText: [{ text: 'GREATEST HITS', x: 0.5, y: 0.4, color: '#000', font: '25px', fontFamily: 'Arial Bold' }],
        slotRadius: 150,
        filter: 'contrast(1.2) saturation(1.1)'
    },
    'postage_stamp': {
        id: 'postage_stamp', width: 600, height: 800, category: 'vintage',
        backgroundColor: '#eee',
        slots: [{ x: 0.1, y: 0.1, w: 0.8, h: 0.8 }],
        overlayText: [{ text: '25¢', x: 0.85, y: 0.85, color: '#444', font: '40px', fontFamily: 'Courier New' }],
        slotBorderColor: '#fff', slotBorderWidth: 15, slotRadius: 0,
        // Dotted border simulation via small circles? or just simple
        decorations: [
            { type: 'text', text: '〰️〰️〰️〰️', x: 0.5, y: 0.02, color: '#aaa', font: '30px Arial' },
            { type: 'text', text: '〰️〰️〰️〰️', x: 0.5, y: 0.98, color: '#aaa', font: '30px Arial' }
        ]
    },

    // ========== 12. CUTE EXTENDED (4) ==========
    'cherry_blossom': {
        id: 'cherry_blossom', width: 600, height: 1800, category: 'cute',
        backgroundColor: '#FFEEEE',
        decorations: [
            { content: '🌸', x: 0.1, y: 0.05, size: 50 }, { content: '🌸', x: 0.9, y: 0.1, size: 60 },
            { content: '💮', x: 0.15, y: 0.9, size: 50 }, { content: '🌸', x: 0.85, y: 0.92, size: 50 }
        ],
        slots: [{ x: 0.15, y: 0.15, w: 0.7, h: 0.2 }, { x: 0.15, y: 0.4, w: 0.7, h: 0.2 }, { x: 0.15, y: 0.65, w: 0.7, h: 0.2 }],
        overlayText: [{ text: 'SPRING', x: 0.5, y: 0.06, color: '#FF69B4', font: '45px', fontFamily: 'Georgia' }],
        slotRadius: 20, slotBorderColor: '#FFB7C5', slotBorderWidth: 4,
        filter: 'saturate(1.2) brightness(1.1)'
    },
    'teddy_bear': {
        id: 'teddy_bear', width: 600, height: 1800, category: 'cute',
        backgroundColor: '#F5DEB3',
        decorations: [
            { content: '🧸', x: 0.5, y: 0.06, size: 70 },
            { content: '🍯', x: 0.1, y: 0.9, size: 50 }
        ],
        slots: [{ x: 0.15, y: 0.15, w: 0.7, h: 0.2 }, { x: 0.15, y: 0.4, w: 0.7, h: 0.2 }, { x: 0.15, y: 0.65, w: 0.7, h: 0.2 }],
        slotRadius: 30, slotBorderColor: '#8B4513', slotBorderWidth: 4,
        filter: 'saturate(1.1) sepia(0.2)'
    },
    'pixel_pet': {
        id: 'pixel_pet', width: 600, height: 900, category: 'cute',
        backgroundColor: '#E6E6FA',
        decorations: [
            { content: '🐱', x: 0.5, y: 0.7, size: 60 } // Pixel cat
        ],
        slots: [{ x: 0.2, y: 0.15, w: 0.6, h: 0.45 }],
        overlayText: [{ text: 'FEED ME', x: 0.5, y: 0.85, color: '#333', font: '30px', fontFamily: 'Courier New' }],
        slotBorderColor: '#000', slotBorderWidth: 4, slotRadius: 0,
        filter: 'contrast(1.2) saturate(1.3)'
    },
    'candy_land': {
        id: 'candy_land', width: 600, height: 1800, category: 'cute',
        backgroundColor: '#FFF',
        texture: 'checks', textureOpacity: 0.1, textureColor1: '#FFF', textureColor2: '#FF69B4',
        decorations: [
            { content: '🍭', x: 0.1, y: 0.05, size: 60 }, { content: '🍬', x: 0.9, y: 0.05, size: 60 },
            { content: '🍩', x: 0.5, y: 0.9, size: 70 }
        ],
        slots: [{ x: 0.15, y: 0.15, w: 0.7, h: 0.2 }, { x: 0.15, y: 0.4, w: 0.7, h: 0.2 }, { x: 0.15, y: 0.65, w: 0.7, h: 0.2 }],
        slotRadius: 15, slotBorderColor: '#FF69B4', slotBorderWidth: 6,
        filter: 'saturate(1.8) contrast(1.05)'
    },

    // ========== 13. SEASONAL (4) ==========
    'winter_frost': {
        id: 'winter_frost', width: 600, height: 1800, category: 'aesthetic',
        backgroundColor: '#E3F2FD',
        decorations: [
            { content: '❄️', x: 0.1, y: 0.1, size: 40 }, { content: '❄️', x: 0.9, y: 0.2, size: 50 },
            { content: '☃️', x: 0.5, y: 0.9, size: 60 }
        ],
        slots: [{ x: 0.15, y: 0.15, w: 0.7, h: 0.2 }, { x: 0.15, y: 0.4, w: 0.7, h: 0.2 }, { x: 0.15, y: 0.65, w: 0.7, h: 0.2 }],
        slotRadius: 10, slotBorderColor: '#fff', slotBorderWidth: 4,
        filter: 'brightness(1.1) saturate(0.8)'
    },
    'summer_beach': {
        id: 'summer_beach', width: 600, height: 1800, category: 'aesthetic',
        backgroundColor: '#FFF8E1',
        decorations: [
            { content: '☀️', x: 0.5, y: 0.06, size: 70 },
            { content: '🌊', x: 0.2, y: 0.9, size: 60 }, { content: '🏖️', x: 0.8, y: 0.9, size: 60 }
        ],
        slots: [{ x: 0.15, y: 0.15, w: 0.7, h: 0.2 }, { x: 0.15, y: 0.4, w: 0.7, h: 0.2 }, { x: 0.15, y: 0.65, w: 0.7, h: 0.2 }],
        slotRadius: 15, slotBorderColor: '#FFD700', slotBorderWidth: 4,
        filter: 'saturate(1.5) brightness(1.1)'
    },
    'spooky_night': {
        id: 'spooky_night', width: 600, height: 1800, category: 'cartoon',
        backgroundColor: '#2D1B3E',
        decorations: [
            { content: '🦇', x: 0.1, y: 0.05, size: 50 }, { content: '👻', x: 0.9, y: 0.08, size: 55 },
            { content: '🕸️', x: 0.5, y: 0.9, size: 60 }
        ],
        slots: [{ x: 0.15, y: 0.15, w: 0.7, h: 0.2 }, { x: 0.15, y: 0.4, w: 0.7, h: 0.2 }, { x: 0.15, y: 0.65, w: 0.7, h: 0.2 }],
        overlayText: [{ text: 'BOO!', x: 0.5, y: 0.5, color: '#FF7F50', font: '60px', fontFamily: 'Creepster, Impact' }],
        slotRadius: 20, slotBorderColor: '#9370DB', slotBorderWidth: 3,
        filter: 'hue-rotate(270deg) contrast(1.2)'
    },
    'festive_holiday': {
        id: 'festive_holiday', width: 600, height: 1800, category: 'aesthetic',
        backgroundColor: '#8B0000',
        decorations: [
            { content: '🎄', x: 0.1, y: 0.05, size: 60 }, { content: '🎁', x: 0.9, y: 0.05, size: 60 },
            { content: '🎅', x: 0.5, y: 0.92, size: 60 }
        ],
        slots: [{ x: 0.15, y: 0.15, w: 0.7, h: 0.2 }, { x: 0.15, y: 0.4, w: 0.7, h: 0.2 }, { x: 0.15, y: 0.65, w: 0.7, h: 0.2 }],
        slotRadius: 15, slotBorderColor: '#FFD700', slotBorderWidth: 5,
        filter: 'saturate(1.4) contrast(1.2)'
    },

    // ========== 14. OTHERS (5) ==========
    'fashion_mag': {
        id: 'fashion_mag', width: 900, height: 1200, category: 'class',
        backgroundColor: '#fff',
        slots: [{ x: 0.05, y: 0.05, w: 0.9, h: 0.75 }],
        overlayText: [
            { text: 'STYLE', x: 0.5, y: 0.85, color: '#000', font: '80px', fontFamily: 'Didot' },
            { text: 'ISSUE 01', x: 0.5, y: 0.92, color: '#555', font: '20px', fontFamily: 'Arial' }
        ],
        slotRadius: 0,
        filter: 'contrast(1.2) grayscale(0.2)'
    },
    'indie_zine': {
        id: 'indie_zine', width: 600, height: 900, category: 'class',
        backgroundColor: '#eee',
        texture: 'grain',
        slots: [{ x: 0.1, y: 0.15, w: 0.8, h: 0.5 }],
        overlayText: [{ text: 'underground', x: 0.5, y: 0.8, color: '#000', font: '40px', fontFamily: 'Courier New' }],
        slotBorderColor: '#000', slotBorderWidth: 2, slotRadius: 0,
        filter: 'grayscale(1) contrast(1.5)'
    },
    'galaxy_stars': {
        id: 'galaxy_stars', width: 600, height: 1800, category: 'aesthetic',
        backgroundColor: '#0B0B45',
        decorations: [
            { content: '🌌', x: 0.5, y: 0.5, size: 300, opacity: 0.2 },
            { content: '⭐', x: 0.1, y: 0.1, size: 30 }, { content: '🌠', x: 0.9, y: 0.2, size: 50 },
            { content: '🪐', x: 0.2, y: 0.8, size: 50 }
        ],
        slots: [{ x: 0.2, y: 0.1, w: 0.6, h: 0.2 }, { x: 0.2, y: 0.35, w: 0.6, h: 0.2 }, { x: 0.2, y: 0.6, w: 0.6, h: 0.2 }],
        slotRadius: 50, slotBorderColor: '#4B0082', slotBorderWidth: 3,
        filter: 'brightness(0.9) contrast(1.4) saturate(1.5)'
    },
    'underwater_blue': {
        id: 'underwater_blue', width: 600, height: 1800, category: 'aesthetic',
        backgroundColor: 'linear-gradient(180deg, #E0F7FA 0%, #0288D1 100%)',
        decorations: [
            { content: '🫧', x: 0.2, y: 0.1, size: 30 }, { content: '🫧', x: 0.8, y: 0.3, size: 40 },
            { content: '🐠', x: 0.5, y: 0.9, size: 50 }
        ],
        slots: [{ x: 0.15, y: 0.15, w: 0.7, h: 0.2 }, { x: 0.15, y: 0.4, w: 0.7, h: 0.2 }, { x: 0.15, y: 0.65, w: 0.7, h: 0.2 }],
        slotRadius: 20, slotBorderColor: '#fff', slotBorderWidth: 3,
        filter: 'sepia(0.3) hue-rotate(180deg) saturate(1.5)'
    },
    'checkerboard_ska': {
        id: 'checkerboard_ska', width: 600, height: 1800, category: 'retro',
        backgroundColor: '#fff',
        texture: 'checks', textureOpacity: 1, textureColor1: '#000', textureColor2: '#fff',
        slots: [{ x: 0.15, y: 0.1, w: 0.7, h: 0.2 }, { x: 0.15, y: 0.35, w: 0.7, h: 0.2 }, { x: 0.15, y: 0.6, w: 0.7, h: 0.2 }],
        slotBorderColor: '#fff', slotBorderWidth: 10, slotShadow: true,
        filter: 'contrast(1.5) grayscale(1)'
    },

    // ========== 20. SOPHISTICATED / WEDDING (5) ==========
    'wedding_classic': {
        id: 'wedding_classic', width: 600, height: 1800, category: 'class',
        backgroundColor: '#FAFAFA',
        decorations: [
            { type: 'text', text: 'Mr. & Mrs.', x: 0.5, y: 0.08, color: '#D4AF37', font: 'italic 50px "Playfair Display"' },
            { type: 'text', text: 'Date: _______', x: 0.5, y: 0.95, color: '#ccc', font: '30px "Playfair Display"' }
        ],
        slots: [{ x: 0.15, y: 0.15, w: 0.7, h: 0.2 }, { x: 0.15, y: 0.4, w: 0.7, h: 0.2 }, { x: 0.15, y: 0.65, w: 0.7, h: 0.2 }],
        slotBorderColor: '#D4AF37', slotBorderWidth: 2, slotRadius: 0,
        filter: 'contrast(1.1) brightness(1.05)'
    },
    'midnight_gala': {
        id: 'midnight_gala', width: 600, height: 1800, category: 'class',
        backgroundColor: '#000033',
        decorations: [
            { type: 'circle', x: 0.1, y: 0.1, size: 5, color: '#fff' }, { type: 'circle', x: 0.9, y: 0.2, size: 3, color: '#fff' }, // Stars
            { type: 'text', text: 'GALA', x: 0.5, y: 0.9, color: '#fff', font: '40px "Montserrat"' }
        ],
        slots: [{ x: 0.15, y: 0.15, w: 0.7, h: 0.2 }, { x: 0.15, y: 0.4, w: 0.7, h: 0.2 }, { x: 0.15, y: 0.65, w: 0.7, h: 0.2 }],
        slotBorderColor: '#C0C0C0', slotBorderWidth: 1, slotRadius: 0, slotShadow: true,
        filter: 'contrast(1.1) brightness(1.05)'
    },
    'botanical_green': {
        id: 'botanical_green', width: 600, height: 1800, category: 'aesthetic',
        backgroundColor: '#F0FFF0',
        decorations: [
            { content: '🌿', x: 0.1, y: 0.05, size: 50 }, { content: '🌿', x: 0.9, y: 0.15, size: 60 },
            { content: '🍃', x: 0.5, y: 0.92, size: 40 }
        ],
        slots: [{ x: 0.15, y: 0.15, w: 0.7, h: 0.2 }, { x: 0.15, y: 0.4, w: 0.7, h: 0.2 }, { x: 0.15, y: 0.65, w: 0.7, h: 0.2 }],
        slotBorderColor: '#556B2F', slotBorderWidth: 4, slotRadius: 2,
        filter: 'contrast(1.05) saturate(1.1)'
    },
    'marble_gold_hex': {
        id: 'marble_gold_hex', width: 600, height: 1800, category: 'class',
        backgroundColor: '#fff',
        // Simulate hexagon slots via masking if possible, else rects with borders
        // Using standard rects for reliability but adding hex decoration
        decorations: [
            { type: 'text', text: '⬡', x: 0.5, y: 0.1, color: '#D4AF37', font: '100px Arial' }
        ],
        slots: [{ x: 0.2, y: 0.2, w: 0.6, h: 0.2 }, { x: 0.2, y: 0.45, w: 0.6, h: 0.2 }, { x: 0.2, y: 0.7, w: 0.6, h: 0.2 }],
        slotBorderColor: '#D4AF37', slotBorderWidth: 6, slotRadius: 0,
        filter: 'contrast(1.1) brightness(1.05)'
    },
    'silk_noir': {
        id: 'silk_noir', width: 600, height: 1800, category: 'class',
        backgroundColor: '#1C1C1C',
        decorations: [],
        slots: [{ x: 0.1, y: 0.1, w: 0.8, h: 0.25 }, { x: 0.1, y: 0.4, w: 0.8, h: 0.25 }, { x: 0.1, y: 0.7, w: 0.8, h: 0.2 }],
        overlayText: [{ text: 'Noir.', x: 0.85, y: 0.95, color: '#333', font: 'italic 30px "Playfair Display"' }],
        slotBorderColor: '#333', slotBorderWidth: 1, slotRadius: 0, slotShadow: false,
        filter: 'contrast(1.2) brightness(0.9)'
    },

    // ========== 21. CINEMATIC / MOODY (5) ==========
    'cyberpunk_neon': {
        id: 'cyberpunk_neon', width: 600, height: 1800, category: 'cyber',
        backgroundColor: '#050510',
        decorations: [
            { type: 'rect', x: 0.1, y: 0.1, w: 0.02, h: 0.8, color: '#0FF', blur: 5 },
            { type: 'rect', x: 0.9, y: 0.1, w: 0.02, h: 0.8, color: '#F0F', blur: 5 }
        ],
        slots: [{ x: 0.15, y: 0.15, w: 0.7, h: 0.2 }, { x: 0.15, y: 0.4, w: 0.7, h: 0.2 }, { x: 0.15, y: 0.65, w: 0.7, h: 0.2 }],
        overlayText: [{ text: 'NIGHT CITY', x: 0.5, y: 0.9, color: '#0FF', font: '40px "Orbitron"' }],
        slotBorderColor: '#F0F', slotBorderWidth: 2, slotRadius: 5,
        filter: 'contrast(1.3) saturate(1.5) hue-rotate(20deg)'
    },
    'wes_anderson': {
        id: 'wes_anderson', width: 600, height: 900, category: 'aesthetic',
        backgroundColor: '#F5DEB3', // Pastel yellow/wheat
        slots: [{ x: 0.1, y: 0.1, w: 0.8, h: 0.6 }],
        overlayText: [
            { text: 'THE GRAND', x: 0.5, y: 0.75, color: '#CD5C5C', font: '40px "Futura"' },
            { text: 'ADVENTURE', x: 0.5, y: 0.82, color: '#CD5C5C', font: '40px "Futura"' }
        ],
        slotBorderColor: '#fff', slotBorderWidth: 10, slotRadius: 0,
        filter: 'saturate(1.4) contrast(1.1) sepia(0.2)'
    },
    'film_negative': {
        id: 'film_negative', width: 600, height: 1800, category: 'vintage',
        backgroundColor: '#000',
        // Inverting logic isn't here, but visuals are
        slots: [{ x: 0.05, y: 0.05, w: 0.9, h: 0.22 }, { x: 0.05, y: 0.28, w: 0.9, h: 0.22 }, { x: 0.05, y: 0.51, w: 0.9, h: 0.22 }, { x: 0.05, y: 0.74, w: 0.9, h: 0.22 }],
        overlayText: [{ text: 'NEGATIVE', x: 0.5, y: 0.98, color: '#fff', font: '25px Arial' }],
        slotBorderColor: '#fff', slotBorderWidth: 2, slotRadius: 0,
        filter: 'invert(1)',
        // Film sprocket holes simulation
        decorations: [
            { type: 'circle', x: 0.02, y: 0.1, size: 5, color: '#fff' }, { type: 'circle', x: 0.98, y: 0.1, size: 5, color: '#fff' },
            { type: 'circle', x: 0.02, y: 0.3, size: 5, color: '#fff' }, { type: 'circle', x: 0.98, y: 0.3, size: 5, color: '#fff' },
            { type: 'circle', x: 0.02, y: 0.5, size: 5, color: '#fff' }, { type: 'circle', x: 0.98, y: 0.5, size: 5, color: '#fff' },
            { type: 'circle', x: 0.02, y: 0.7, size: 5, color: '#fff' }, { type: 'circle', x: 0.98, y: 0.7, size: 5, color: '#fff' }
        ]
    },
    'director_cut': {
        id: 'director_cut', width: 800, height: 600, category: 'class', // Horizontal
        backgroundColor: '#111',
        slots: [{ x: 0.05, y: 0.2, w: 0.4, h: 0.6 }, { x: 0.55, y: 0.2, w: 0.4, h: 0.6 }],
        overlayText: [
            { text: 'SCENE 1', x: 0.25, y: 0.1, color: '#fff', font: '20px Courier' },
            { text: 'TAKE 1', x: 0.75, y: 0.1, color: '#fff', font: '20px Courier' },
            { text: 'ACTION', x: 0.5, y: 0.9, color: '#fff', font: '40px Impact' }
        ],
        slotBorderColor: '#fff', slotBorderWidth: 1, slotRadius: 0,
        filter: 'grayscale(1) contrast(1.2)'
    },
    'faded_memory': {
        id: 'faded_memory', width: 600, height: 1800, category: 'vintage',
        backgroundColor: '#E6E6FA',
        slots: [{ x: 0.12, y: 0.12, w: 0.76, h: 0.22 }, { x: 0.12, y: 0.38, w: 0.76, h: 0.22 }, { x: 0.12, y: 0.64, w: 0.76, h: 0.22 }],
        overlayText: [{ text: 'faded.', x: 0.5, y: 0.9, color: '#aaa', font: 'italic 40px "Times New Roman"' }],
        slotBorderColor: '#fff', slotBorderWidth: 15, slotRadius: 0, slotShadow: true,
        texture: 'grain', textureOpacity: 0.3
    },

    // ========== 22. EDITORIAL / MAGAZINE II (5) ==========
    'the_interview': {
        id: 'the_interview', width: 800, height: 1200, category: 'class',
        backgroundColor: '#fff',
        slots: [{ x: 0.0, y: 0.15, w: 1.0, h: 0.5 }],
        overlayText: [
            { text: 'THE INTERVIEW', x: 0.5, y: 0.08, color: '#000', font: 'bold 60px "Helvetica Neue"' },
            { text: '"Groundbreaking."', x: 0.5, y: 0.7, color: '#000', font: 'italic 40px serif' },
            { text: 'pg 42', x: 0.9, y: 0.95, color: '#000', font: '20px Arial' }
        ],
        slotRadius: 0,
        filter: 'grayscale(1) contrast(1.2)'
    },
    'nyc_street': {
        id: 'nyc_street', width: 600, height: 1800, category: 'modern',
        backgroundColor: '#2c3e50',
        decorations: [
            { type: 'rect', x: 0.5, y: 0.5, w: 0.02, h: 1, color: '#f1c40f' } // Yellow line
        ],
        slots: [{ x: 0.1, y: 0.1, w: 0.35, h: 0.25 }, { x: 0.55, y: 0.3, w: 0.35, h: 0.25 }, { x: 0.1, y: 0.6, w: 0.35, h: 0.25 }],
        overlayText: [{ text: 'NYC', x: 0.8, y: 0.9, color: '#fff', font: 'bold 80px Arial' }],
        slotBorderColor: '#fff', slotBorderWidth: 5, slotRadius: 0,
        filter: 'grayscale(1) contrast(1.2)'
    },
    'art_gallery_triptych': {
        id: 'art_gallery_triptych', width: 1000, height: 600, category: 'class',
        backgroundColor: '#f5f5f5',
        slots: [
            { x: 0.05, y: 0.2, w: 0.26, h: 0.6 },
            { x: 0.37, y: 0.2, w: 0.26, h: 0.6 },
            { x: 0.69, y: 0.2, w: 0.26, h: 0.6 }
        ],
        slotBorderColor: '#333', slotBorderWidth: 10, slotShadow: true, slotRadius: 0,
        filter: 'grayscale(1) contrast(1.2)'
    },
    'minimal_arch': {
        id: 'minimal_arch', width: 600, height: 1800, category: 'minimal',
        backgroundColor: '#E0E0E0',
        slots: [
            { x: 0.15, y: 0.1, w: 0.7, h: 0.25, radius: 200 }, // Attempting arch via radius? Renderer might square it if not fully circular logic
            { x: 0.15, y: 0.4, w: 0.7, h: 0.25, radius: 200 }
        ],
        // If renderer only does uniform radius, these are rounded rectangles/circles.
        slotRadius: 300, slotBorderColor: '#fff', slotBorderWidth: 0,
        filter: 'contrast(0.95) brightness(1.05)'
    },
    'brutalist_bold': {
        id: 'brutalist_bold', width: 600, height: 1800, category: 'modern',
        backgroundColor: '#FF4500', // Orange red
        slots: [{ x: 0.1, y: 0.1, w: 0.8, h: 0.3 }, { x: 0.1, y: 0.45, w: 0.8, h: 0.3 }],
        overlayText: [
            { text: 'WARNING', x: 0.5, y: 0.9, color: '#000', font: 'bold 80px Arial' }
        ],
        slotBorderColor: '#000', slotBorderWidth: 10, slotRadius: 0, slotShadow: false,
        filter: 'contrast(1.5) grayscale(1)'
    },

    // ========== 23. INNOVATIVE / EXPERIMENTAL (5) ==========
    'glitch_vhs': {
        id: 'glitch_vhs', width: 600, height: 1800, category: 'cyber',
        backgroundColor: '#1a1a1a',
        slots: [{ x: 0.12, y: 0.12, w: 0.76, h: 0.22 }, { x: 0.1, y: 0.38, w: 0.76, h: 0.22 }, { x: 0.14, y: 0.64, w: 0.76, h: 0.22 }],
        decorations: [
            { type: 'text', text: 'PLAY ►', x: 0.15, y: 0.05, color: '#fff', font: '30px Arial' },
            { type: 'text', text: 'SP', x: 0.85, y: 0.05, color: '#fff', font: '30px Arial' }
        ],
        overlayText: [{ text: '1998', x: 0.8, y: 0.95, color: '#fff', font: '30px VCR OSD Mono, monospace' }],
        slotBorderColor: 'rgba(255,0,0,0.5)', slotBorderWidth: 2,
        filter: 'contrast(1.4) saturate(1.5) sepia(0.3)'
    },
    'barcode_identity': {
        id: 'barcode_identity', width: 600, height: 1000, category: 'cyber',
        backgroundColor: '#fff',
        slots: [{ x: 0.15, y: 0.1, w: 0.7, h: 0.5 }],
        decorations: [
            { type: 'text', text: '║▌║█║▌│║▌║▌█', x: 0.5, y: 0.8, color: '#000', font: '60px Arial' }
        ],
        overlayText: [{ text: 'SUBJECT 001', x: 0.5, y: 0.9, color: '#000', font: '25px Courier New' }],
        slotBorderColor: '#000', slotBorderWidth: 4, slotRadius: 0,
        filter: 'grayscale(1) contrast(1.5)'
    },
    'security_cam': {
        id: 'security_cam', width: 800, height: 600, category: 'cyber',
        backgroundColor: '#000',
        slots: [{ x: 0.05, y: 0.05, w: 0.9, h: 0.9 }],
        overlayText: [
            { text: 'REC ●', x: 0.1, y: 0.1, color: '#F00', font: '30px Arial' },
            { text: 'CAM 04', x: 0.9, y: 0.1, color: '#fff', font: '30px Arial' }
        ],
        slotBorderColor: 'transparent', slotBorderWidth: 0,
        filter: 'grayscale(1) contrast(1.5)',
        texture: 'lines', textureOpacity: 0.1, textureColor1: '#fff'
    },
    'double_exposure_sim': {
        id: 'double_exposure_sim', width: 600, height: 1800, category: 'aesthetic',
        backgroundColor: '#222',
        // Visually simulating by close stacking
        slots: [
            { x: 0.1, y: 0.1, w: 0.8, h: 0.25 },
            { x: 0.1, y: 0.3, w: 0.8, h: 0.25, opacity: 0.8 }, // Renderer doesn't support opacity yet usually
            { x: 0.1, y: 0.5, w: 0.8, h: 0.25 }
        ],
        overlayText: [{ text: 'layers', x: 0.5, y: 0.9, color: '#fff', font: '30px Arial' }],
        slotBorderColor: '#fff', slotBorderWidth: 2, slotRadius: 0,
        filter: 'contrast(1.2) opacity(0.8)'
    },
    'broken_glass': {
        id: 'broken_glass', width: 600, height: 1800, category: 'modern',
        backgroundColor: '#000',
        slots: [
            { x: 0.1, y: 0.1, w: 0.5, h: 0.2, rotation: -5 },
            { x: 0.4, y: 0.35, w: 0.5, h: 0.2, rotation: 5 },
            { x: 0.1, y: 0.6, w: 0.5, h: 0.2, rotation: -10 },
            { x: 0.4, y: 0.8, w: 0.5, h: 0.15, rotation: 10 }
        ],
        decorations: [
            { type: 'text', text: '⚡', x: 0.3, y: 0.3, color: '#fff', size: 50 },
            { type: 'text', text: '⚡', x: 0.7, y: 0.7, color: '#fff', size: 50 }
        ],
        slotBorderColor: '#fff', slotBorderWidth: 2, slotRadius: 0,
        filter: 'contrast(1.3)'
    },

    // ========== 24. OTHERS BATCH 3 (5) ==========
    'music_player': {
        id: 'music_player', width: 600, height: 1000, category: 'modern',
        backgroundColor: '#222',
        slots: [{ x: 0.2, y: 0.2, w: 0.6, h: 0.4 }], // Album art
        decorations: [
            { type: 'rect', x: 0.2, y: 0.7, w: 0.6, h: 0.01, color: '#555' }, // Progress bar bg
            { type: 'rect', x: 0.2, y: 0.7, w: 0.3, h: 0.01, color: '#fff' }, // Progress bar fill
            { type: 'text', text: '⏮  ▶  ⏭', x: 0.5, y: 0.85, color: '#fff', font: '40px Arial' }
        ],
        overlayText: [{ text: 'Now Playing', x: 0.5, y: 0.1, color: '#fff', font: '25px Arial' }],
        slotBorderColor: '#000', slotBorderWidth: 0, slotShadow: true,
        filter: 'sepia(0.4) contrast(1.1)'
    },
    'tarot_card': {
        id: 'tarot_card', width: 600, height: 1000, category: 'vintage',
        backgroundColor: '#1a1a1a',
        slots: [{ x: 0.2, y: 0.2, w: 0.6, h: 0.5 }],
        overlayText: [
            { text: 'THE LOVERS', x: 0.5, y: 0.85, color: '#D4AF37', font: '30px "Times New Roman"' },
            { text: 'VI', x: 0.5, y: 0.1, color: '#D4AF37', font: '30px "Times New Roman"' }
        ],
        slotBorderColor: '#D4AF37', slotBorderWidth: 2, slotRadius: 10,
        filter: 'sepia(0.4) contrast(1.1)'
    },
    'caution_hazard': {
        id: 'caution_hazard', width: 600, height: 1800, category: 'modern',
        backgroundColor: '#FFD700',
        texture: 'lines', textureColor1: '#000', // Striped hazard feel
        slots: [{ x: 0.15, y: 0.1, w: 0.7, h: 0.2 }, { x: 0.15, y: 0.35, w: 0.7, h: 0.2 }, { x: 0.15, y: 0.6, w: 0.7, h: 0.2 }],
        overlayText: [{ text: 'DANGER', x: 0.5, y: 0.9, color: '#000', font: 'bold 50px Arial' }],
        slotBorderColor: '#000', slotBorderWidth: 6, slotRadius: 0,
        filter: 'contrast(1.5) grayscale(1)'
    },
    'passport_stamp': {
        id: 'passport_stamp', width: 600, height: 900, category: 'vintage',
        backgroundColor: '#FFE4C4',
        slots: [{ x: 0.1, y: 0.2, w: 0.35, h: 0.45 }],
        decorations: [
            { type: 'text', text: 'APPROVED', x: 0.6, y: 0.3, color: 'green', font: 'bold 30px Courier', rotation: -10 },
            { type: 'text', text: 'VISA', x: 0.6, y: 0.5, color: 'navy', font: 'bold 30px Courier', rotation: 5 }
        ],
        overlayText: [{ text: 'TRAVELER', x: 0.5, y: 0.85, color: '#333', font: '30px Courier New' }],
        slotBorderColor: '#333', slotBorderWidth: 2, slotRadius: 0,
        filter: 'sepia(0.4) contrast(1.1)'
    },
    'wanted_western': {
        id: 'wanted_western', width: 600, height: 900, category: 'vintage',
        backgroundColor: '#D2691E',
        slots: [{ x: 0.2, y: 0.3, w: 0.6, h: 0.4 }],
        overlayText: [
            { text: 'DEAD OR ALIVE', x: 0.5, y: 0.15, color: '#3E2723', font: '40px "Rye", serif' },
            { text: 'The Outlaw', x: 0.5, y: 0.8, color: '#3E2723', font: '30px serif' }
        ],
        slotBorderColor: '#3E2723', slotBorderWidth: 5, slotRadius: 0,
        filter: 'sepia(0.4) contrast(1.1)'
    },

    // ========== 15. LUXURY & GOLD (5) ==========
    'gilded_marble': {
        id: 'gilded_marble', width: 600, height: 1800, category: 'aesthetic',
        backgroundColor: '#fff',
        // Creating a marble-like effect with decoration layers if texture not avail, or just simple
        decorations: [
            { type: 'text', text: '〰️', x: 0.2, y: 0.2, color: '#eee', font: '100px Arial', rotation: 45 },
            { type: 'text', text: '〰️', x: 0.8, y: 0.8, color: '#eee', font: '100px Arial', rotation: 45 }
        ],
        slots: [{ x: 0.15, y: 0.1, w: 0.7, h: 0.2 }, { x: 0.15, y: 0.35, w: 0.7, h: 0.2 }, { x: 0.15, y: 0.6, w: 0.7, h: 0.2 }],
        overlayText: [{ text: 'LUXE', x: 0.5, y: 0.9, color: '#DAA520', font: '50px', fontFamily: 'Didot' }],
        slotBorderColor: '#DAA520', slotBorderWidth: 8, slotRadius: 0, slotShadow: true,
        filter: 'contrast(1.1) brightness(1.05)'
    },
    'royal_obsidian': {
        id: 'royal_obsidian', width: 600, height: 1800, category: 'class',
        backgroundColor: '#111',
        slots: [{ x: 0.15, y: 0.15, w: 0.7, h: 0.2 }, { x: 0.15, y: 0.4, w: 0.7, h: 0.2 }, { x: 0.15, y: 0.65, w: 0.7, h: 0.2 }],
        overlayText: [{ text: 'ROYAL', x: 0.5, y: 0.9, color: '#FFD700', font: '40px', fontFamily: 'Times New Roman', letterSpacing: '4px' }],
        slotBorderColor: 'linear-gradient(45deg, #FFD700, #FDB931)', slotBorderWidth: 4, slotRadius: 5,
        filter: 'contrast(1.1) brightness(1.05)'
    },
    'champagne_toast': {
        id: 'champagne_toast', width: 600, height: 1800, category: 'aesthetic',
        backgroundColor: '#F7E7CE',
        decorations: [
            { content: '🥂', x: 0.5, y: 0.05, size: 60 },
            { content: '✨', x: 0.1, y: 0.2, size: 30 }, { content: '✨', x: 0.9, y: 0.5, size: 30 }
        ],
        slots: [{ x: 0.12, y: 0.12, w: 0.76, h: 0.22 }, { x: 0.12, y: 0.38, w: 0.76, h: 0.22 }, { x: 0.12, y: 0.64, w: 0.76, h: 0.22 }],
        slotBorderColor: '#fff', slotBorderWidth: 6, slotRadius: 0,
        filter: 'brightness(1.1) saturate(1.1)'
    },
    'platinum_grid': {
        id: 'platinum_grid', width: 600, height: 1800, category: 'minimal',
        backgroundColor: '#E5E4E2',
        slots: [{ x: 0.1, y: 0.1, w: 0.8, h: 0.2 }, { x: 0.1, y: 0.32, w: 0.8, h: 0.2 }, { x: 0.1, y: 0.54, w: 0.8, h: 0.2 }, { x: 0.1, y: 0.76, w: 0.8, h: 0.2 }],
        slotBorderColor: '#C0C0C0', slotBorderWidth: 1, slotRadius: 0, slotShadow: false,
        filter: 'grayscale(1) brightness(1.1)'
    },
    'rose_gold_glam': {
        id: 'rose_gold_glam', width: 600, height: 1800, category: 'aesthetic',
        backgroundColor: '#B76E79',
        slots: [{ x: 0.15, y: 0.15, w: 0.7, h: 0.2 }, { x: 0.15, y: 0.4, w: 0.7, h: 0.2 }, { x: 0.15, y: 0.65, w: 0.7, h: 0.2 }],
        overlayText: [{ text: 'GLAMOUR', x: 0.5, y: 0.9, color: '#fff', font: '40px', fontFamily: 'Playfair Display', weight: 'italic' }],
        slotBorderColor: '#fff', slotBorderWidth: 4, slotRadius: 50,
        filter: 'sepia(0.2) saturate(1.2)'
    },

    // ========== 16. HOLOGRAPHIC / IRIDESCENT (5) ==========
    'holographic_dream': {
        id: 'holographic_dream', width: 600, height: 1800, category: 'cyber',
        backgroundColor: 'linear-gradient(135deg, #FF9A9E 0%, #FECFEF 20%, #E0C3FC 40%, #D4FC79 60%, #96E6A1 80%, #84FAB0 100%)',
        slots: [{ x: 0.15, y: 0.1, w: 0.7, h: 0.2 }, { x: 0.15, y: 0.33, w: 0.7, h: 0.2 }, { x: 0.15, y: 0.56, w: 0.7, h: 0.2 }],
        overlayText: [{ text: 'HOLO', x: 0.5, y: 0.85, color: '#fff', font: '50px', fontFamily: 'Arial Black', stroke: '#000', strokeWidth: 2 }],
        slotRadius: 15, slotBorderColor: '#fff', slotBorderWidth: 4,
        filter: 'brightness(1.1) saturate(1.3)'
    },
    'iridescent_bubble': {
        id: 'iridescent_bubble', width: 600, height: 1800, category: 'cute',
        backgroundColor: 'linear-gradient(45deg, #a18cd1 0%, #fbc2eb 100%)',
        decorations: [
            { content: '🫧', x: 0.1, y: 0.05, size: 60 }, { content: '🫧', x: 0.8, y: 0.15, size: 40 },
            { content: '✨', x: 0.5, y: 0.9, size: 50 }
        ],
        slots: [{ x: 0.2, y: 0.2, w: 0.6, h: 0.2, radius: 200 }, { x: 0.2, y: 0.45, w: 0.6, h: 0.2, radius: 200 }, { x: 0.2, y: 0.7, w: 0.6, h: 0.2, radius: 200 }],
        slotRadius: 300, slotBorderColor: 'rgba(255,255,255,0.5)', slotBorderWidth: 10,
        filter: 'brightness(1.1) saturate(1.3)'
    },
    'cyber_angel': {
        id: 'cyber_angel', width: 600, height: 1800, category: 'cyber',
        backgroundColor: '#E0FFFF',
        decorations: [
            { content: '👼', x: 0.5, y: 0.05, size: 60 },
            { content: '💻', x: 0.5, y: 0.9, size: 50 }
        ],
        slots: [{ x: 0.15, y: 0.15, w: 0.7, h: 0.2 }, { x: 0.15, y: 0.4, w: 0.7, h: 0.2 }, { x: 0.15, y: 0.65, w: 0.7, h: 0.2 }],
        overlayText: [{ text: 'ANGEL', x: 0.5, y: 0.82, color: '#00BFFF', font: '40px', fontFamily: 'Courier New' }],
        slotBorderColor: '#00BFFF', slotBorderWidth: 2, slotRadius: 10,
        filter: 'brightness(1.2) contrast(0.9) saturate(1.1)'
    },
    'prism_shard': {
        id: 'prism_shard', width: 600, height: 1800, category: 'cyber',
        backgroundColor: '#000',
        decorations: [
            { type: 'text', text: '▲', x: 0.5, y: 0.05, color: '#fff', font: '50px Arial' }
        ],
        // Triangle masks not natively supported easily without custom shape, stick to rects with odd radius
        slots: [{ x: 0.2, y: 0.1, w: 0.6, h: 0.2 }, { x: 0.2, y: 0.35, w: 0.6, h: 0.2 }, { x: 0.2, y: 0.6, w: 0.6, h: 0.2 }],
        overlayText: [{ text: 'PRISM', x: 0.5, y: 0.85, color: '#fff', font: '40px', fontFamily: 'Arial', letterSpacing: '10px' }],
        slotBorderColor: 'linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet)', slotBorderWidth: 4, slotRadius: 0,
        filter: 'contrast(1.3) saturate(1.3)'
    },
    'neon_storm': {
        id: 'neon_storm', width: 600, height: 1800, category: 'cyber',
        backgroundColor: '#0f0c29',
        decorations: [
            { content: '⚡', x: 0.1, y: 0.1, size: 60 }, { content: '⚡', x: 0.9, y: 0.5, size: 60 }
        ],
        slots: [{ x: 0.1, y: 0.15, w: 0.8, h: 0.2 }, { x: 0.1, y: 0.4, w: 0.8, h: 0.2 }, { x: 0.1, y: 0.65, w: 0.8, h: 0.2 }],
        slotBorderColor: '#bc4e9c', slotBorderWidth: 2, slotShadow: true,
        filter: 'contrast(1.4) hue-rotate(10deg)'
    },

    // ========== 17. SCRAPBOOK / PAPER (5) ==========
    'kraft_paper': {
        id: 'kraft_paper', width: 600, height: 1800, category: 'vintage',
        backgroundColor: '#d2b48c', // Paper bag color
        texture: 'grain',
        decorations: [
            { type: 'rect', x: 0.4, y: 0.08, w: 0.2, h: 0.05, color: 'rgba(255,255,255,0.4)', rotation: -5 } // Tape
        ],
        slots: [{ x: 0.1, y: 0.15, w: 0.75, h: 0.18, rotation: -2 }, { x: 0.15, y: 0.38, w: 0.75, h: 0.18, rotation: 2 }, { x: 0.1, y: 0.61, w: 0.75, h: 0.18, rotation: -1 }],
        slotBorderColor: '#fff', slotBorderWidth: 10, slotShadow: true
    },
    'washi_tape': {
        id: 'washi_tape', width: 600, height: 1800, category: 'cute',
        backgroundColor: '#fff',
        decorations: [
            { type: 'rect', x: 0.5, y: 0.1, w: 0.15, h: 0.04, color: '#FFB6C1', rotation: 0 },
            { type: 'rect', x: 0.5, y: 0.34, w: 0.15, h: 0.04, color: '#87CEEB', rotation: 0 },
            { type: 'rect', x: 0.5, y: 0.58, w: 0.15, h: 0.04, color: '#98FB98', rotation: 0 }
        ],
        slots: [{ x: 0.15, y: 0.12, w: 0.7, h: 0.2 }, { x: 0.15, y: 0.36, w: 0.7, h: 0.2 }, { x: 0.15, y: 0.6, w: 0.7, h: 0.2 }],
        slotBorderColor: '#eee', slotBorderWidth: 0, slotShadow: true,
        filter: 'sepia(0.3) contrast(0.95) brightness(1.02)'
    },
    'polaroid_scatter': {
        id: 'polaroid_scatter', width: 800, height: 1200, category: 'vintage',
        backgroundColor: '#333',
        slots: [
            { x: 0.1, y: 0.1, w: 0.4, h: 0.4, rotation: -5 },
            { x: 0.5, y: 0.5, w: 0.4, h: 0.4, rotation: 5 },
            { x: 0.1, y: 0.55, w: 0.35, h: 0.35, rotation: 10 }
        ],
        slotBorderColor: '#fff', slotBorderWidth: 15, slotShadow: true,
        filter: 'sepia(0.3) contrast(0.95) brightness(1.02)'
    },
    'torn_notebook': {
        id: 'torn_notebook', width: 600, height: 1800, category: 'minimal',
        backgroundColor: '#fff',
        // Creating lines
        texture: 'lines', textureColor1: '#a1c4fd',
        slots: [{ x: 0.1, y: 0.1, w: 0.8, h: 0.25 }, { x: 0.1, y: 0.4, w: 0.8, h: 0.25 }, { x: 0.1, y: 0.7, w: 0.8, h: 0.2 }],
        overlayText: [{ text: 'notes', x: 0.8, y: 0.95, color: '#000', font: '40px Zapfino, cursive' }],
        slotBorderColor: '#000', slotBorderWidth: 1, slotRadius: 0,
        filter: 'sepia(0.3) contrast(0.95) brightness(1.02)'
    },
    'love_letters': {
        id: 'love_letters', width: 600, height: 1800, category: 'cute',
        backgroundColor: '#FFF0F5',
        decorations: [
            { content: '💌', x: 0.5, y: 0.06, size: 60 },
            { content: '💋', x: 0.8, y: 0.9, size: 40 }
        ],
        slots: [{ x: 0.2, y: 0.15, w: 0.6, h: 0.2 }, { x: 0.2, y: 0.4, w: 0.6, h: 0.2 }, { x: 0.2, y: 0.65, w: 0.6, h: 0.2 }],
        overlayText: [{ text: 'xo cc', x: 0.5, y: 0.9, color: '#D81B60', font: '30px Courier' }],
        slotBorderColor: '#D81B60', slotBorderWidth: 1, slotRadius: 0,
        filter: 'saturate(1.2) contrast(1.1)'
    },

    // ========== 18. NATURE / COTTAGECORE (5) ==========
    'forest_fairy': {
        id: 'forest_fairy', width: 600, height: 1800, category: 'aesthetic',
        backgroundColor: '#2E8B57',
        decorations: [
            { content: '🍄', x: 0.1, y: 0.9, size: 50 }, { content: '🧚', x: 0.9, y: 0.1, size: 50 },
            { content: '🌿', x: 0.1, y: 0.5, size: 40 }
        ],
        slots: [{ x: 0.15, y: 0.15, w: 0.7, h: 0.2 }, { x: 0.15, y: 0.4, w: 0.7, h: 0.2 }, { x: 0.15, y: 0.65, w: 0.7, h: 0.2 }],
        slotBorderColor: '#8FBC8F', slotBorderWidth: 6, slotRadius: 20,
        filter: 'saturate(1.2) contrast(1.05)'
    },
    'sunflower_field': {
        id: 'sunflower_field', width: 600, height: 1800, category: 'cute',
        backgroundColor: '#FFEB3B',
        decorations: [
            { content: '🌻', x: 0.1, y: 0.05, size: 60 }, { content: '🌻', x: 0.9, y: 0.05, size: 60 },
            { content: '🌻', x: 0.5, y: 0.92, size: 80 }
        ],
        slots: [{ x: 0.15, y: 0.15, w: 0.7, h: 0.2 }, { x: 0.15, y: 0.4, w: 0.7, h: 0.2 }, { x: 0.15, y: 0.65, w: 0.7, h: 0.2 }],
        slotBorderColor: '#8B4513', slotBorderWidth: 4, slotRadius: 15,
        filter: 'saturate(1.2) contrast(1.05)'
    },
    'cloudy_sky': {
        id: 'cloudy_sky', width: 600, height: 1800, category: 'aesthetic',
        backgroundColor: '#87CEEB',
        decorations: [
            { content: '☁️', x: 0.2, y: 0.1, size: 100, opacity: 0.6 },
            { content: '☁️', x: 0.8, y: 0.3, size: 80, opacity: 0.6 }
        ],
        slots: [{ x: 0.15, y: 0.15, w: 0.7, h: 0.2 }, { x: 0.15, y: 0.4, w: 0.7, h: 0.2 }, { x: 0.15, y: 0.65, w: 0.7, h: 0.2 }],
        slotBorderColor: '#fff', slotBorderWidth: 8, slotRadius: 30,
        filter: 'saturate(1.2) contrast(1.05)'
    },
    'desert_vibes': {
        id: 'desert_vibes', width: 600, height: 1800, category: 'aesthetic',
        backgroundColor: '#EDC9AF',
        decorations: [
            { content: '🌵', x: 0.1, y: 0.9, size: 60 }, { content: '🦂', x: 0.9, y: 0.9, size: 40 }
        ],
        slots: [{ x: 0.15, y: 0.1, w: 0.7, h: 0.2 }, { x: 0.15, y: 0.35, w: 0.7, h: 0.2 }, { x: 0.15, y: 0.6, w: 0.7, h: 0.2 }],
        overlayText: [{ text: 'OASIS', x: 0.5, y: 0.85, color: '#8B4513', font: '40px Courier' }],
        slotBorderColor: '#A0522D', slotBorderWidth: 4,
        filter: 'saturate(1.2) contrast(1.05)'
    },
    'ocean_breeze': { // Distinct from underwater
        id: 'ocean_breeze', width: 600, height: 1800, category: 'aesthetic',
        backgroundColor: '#E0FFFF',
        slots: [{ x: 0.1, y: 0.1, w: 0.8, h: 0.25 }, { x: 0.1, y: 0.4, w: 0.8, h: 0.25 }, { x: 0.1, y: 0.7, w: 0.8, h: 0.2 }],
        overlayText: [{ text: 'WAVES', x: 0.5, y: 0.95, color: '#008B8B', font: '40px Arial', letterSpacing: '8px' }],
        slotBorderColor: '#B0E0E6', slotBorderWidth: 10, slotRadius: 5,
        filter: 'saturate(1.2) hue-rotate(-10deg)'
    },

    // ========== 19. ABSTRACT / ART (5) ==========
    'mondrian_style': {
        id: 'mondrian_style', width: 600, height: 900, category: 'modern',
        backgroundColor: '#fff',
        decorations: [
            { type: 'rect', x: 0.1, y: 0.1, w: 0.2, h: 0.2, color: '#f00' },
            { type: 'rect', x: 0.8, y: 0.8, w: 0.1, h: 0.1, color: '#ff0' },
            { type: 'rect', x: 0.1, y: 0.8, w: 0.15, h: 0.15, color: '#00f' }
        ],
        slots: [{ x: 0.2, y: 0.2, w: 0.6, h: 0.5 }],
        slotBorderColor: '#000', slotBorderWidth: 8, slotRadius: 0,
        filter: 'saturate(2.0) contrast(1.2)'
    },
    'pop_art_dots': {
        id: 'pop_art_dots', width: 600, height: 1800, category: 'cartoon',
        backgroundColor: '#fff',
        texture: 'dots', textureOpacity: 0.4, textureColor1: '#FF00FF',
        slots: [{ x: 0.15, y: 0.1, w: 0.7, h: 0.2 }, { x: 0.15, y: 0.35, w: 0.7, h: 0.2 }, { x: 0.15, y: 0.6, w: 0.7, h: 0.2 }],
        overlayText: [{ text: 'WOW', x: 1.0, y: 0.9, color: '#000', font: 'bold 20px Arial' }], // purposeful misalignment
        slotBorderColor: '#000', slotBorderWidth: 4, slotShadow: true,
        filter: 'saturate(1.5) contrast(1.3)'
    },
    'blueprint_draft': {
        id: 'blueprint_draft', width: 800, height: 1200, category: 'class',
        backgroundColor: '#0047AB', // Blueprint blue
        texture: 'grid', textureOpacity: 0.2, textureColor1: '#fff',
        slots: [{ x: 0.1, y: 0.1, w: 0.8, h: 0.6 }],
        overlayText: [
            { text: 'FIG 1.0', x: 0.85, y: 0.75, color: '#fff', font: '20px Courier' },
            { text: 'PROJECT: MEMORY', x: 0.5, y: 0.85, color: '#fff', font: '30px Courier' }
        ],
        slotBorderColor: '#fff', slotBorderWidth: 2, slotRadius: 0
    },
    'film_noir_bw': {
        id: 'film_noir_bw', width: 600, height: 1800, category: 'vintage',
        backgroundColor: '#222',
        slots: [{ x: 0.1, y: 0.1, w: 0.8, h: 0.2 }, { x: 0.1, y: 0.33, w: 0.8, h: 0.2 }, { x: 0.1, y: 0.56, w: 0.8, h: 0.2 }],
        overlayText: [{ text: 'DETECTIVE', x: 0.5, y: 0.85, color: '#ccc', font: '40px Courier New', weight: 'bold' }],
        slotBorderColor: '#555', slotBorderWidth: 1, slotRadius: 0,
        filter: 'grayscale(1) contrast(1.5) brightness(0.8)'
    },
    'checkerboard_ska': {
        id: 'checkerboard_ska', width: 600, height: 1800, category: 'retro',
        backgroundColor: '#fff',
        texture: 'checks', textureOpacity: 1, textureColor1: '#000', textureColor2: '#fff',
        slots: [{ x: 0.15, y: 0.1, w: 0.7, h: 0.2 }, { x: 0.15, y: 0.35, w: 0.7, h: 0.2 }, { x: 0.15, y: 0.6, w: 0.7, h: 0.2 }],
        slotBorderColor: '#fff', slotBorderWidth: 10, slotShadow: true
    },

    // ========== 25. GRAPHICS-HEAVY / INNOVATIVE (15) ==========
    'cosmic_explosion': {
        id: 'cosmic_explosion', width: 600, height: 1800, category: 'cyber',
        backgroundColor: '#0a0a2a',
        decorations: [
            { content: '🌟', x: 0.1, y: 0.05, size: 40 }, { content: '✨', x: 0.3, y: 0.1, size: 30 },
            { content: '💫', x: 0.7, y: 0.08, size: 45 }, { content: '⭐', x: 0.9, y: 0.12, size: 35 },
            { content: '🌠', x: 0.2, y: 0.88, size: 50 }, { content: '✨', x: 0.5, y: 0.92, size: 40 },
            { content: '💥', x: 0.8, y: 0.9, size: 55 }, { content: '🔮', x: 0.5, y: 0.5, size: 80, opacity: 0.3 }
        ],
        slots: [{ x: 0.15, y: 0.18, w: 0.7, h: 0.2 }, { x: 0.15, y: 0.42, w: 0.7, h: 0.2 }, { x: 0.15, y: 0.66, w: 0.7, h: 0.2 }],
        overlayText: [{ text: 'COSMIC', x: 0.5, y: 0.95, color: '#FFD700', font: '40px Arial Black' }],
        slotRadius: 15, slotBorderColor: '#4B0082', slotBorderWidth: 3,
        filter: 'contrast(1.3) saturate(1.4)'
    },
    'emoji_explosion': {
        id: 'emoji_explosion', width: 600, height: 1800, category: 'emoji',
        backgroundColor: '#FFFACD',
        decorations: [
            { content: '😍', x: 0.05, y: 0.05, size: 40 }, { content: '🤩', x: 0.2, y: 0.08, size: 35 },
            { content: '😎', x: 0.4, y: 0.03, size: 45 }, { content: '🥳', x: 0.6, y: 0.06, size: 40 },
            { content: '😜', x: 0.8, y: 0.04, size: 38 }, { content: '🤪', x: 0.95, y: 0.08, size: 42 },
            { content: '💖', x: 0.1, y: 0.9, size: 50 }, { content: '🎉', x: 0.3, y: 0.92, size: 45 },
            { content: '🌈', x: 0.5, y: 0.88, size: 55 }, { content: '🦄', x: 0.7, y: 0.91, size: 48 },
            { content: '🎊', x: 0.9, y: 0.89, size: 44 }
        ],
        slots: [{ x: 0.15, y: 0.15, w: 0.7, h: 0.2 }, { x: 0.15, y: 0.4, w: 0.7, h: 0.2 }, { x: 0.15, y: 0.65, w: 0.7, h: 0.2 }],
        slotRadius: 25, slotBorderColor: '#FF69B4', slotBorderWidth: 5,
        filter: 'saturate(1.5) contrast(1.1)'
    },
    'neon_city_lights': {
        id: 'neon_city_lights', width: 600, height: 1800, category: 'cyber',
        backgroundColor: '#0D0D0D',
        decorations: [
            { content: '🌃', x: 0.5, y: 0.92, size: 100, opacity: 0.5 },
            { content: '💜', x: 0.1, y: 0.1, size: 30 }, { content: '💙', x: 0.9, y: 0.15, size: 35 },
            { content: '💗', x: 0.15, y: 0.5, size: 25 }, { content: '💚', x: 0.85, y: 0.55, size: 28 }
        ],
        slots: [{ x: 0.12, y: 0.12, w: 0.76, h: 0.22 }, { x: 0.12, y: 0.38, w: 0.76, h: 0.22 }, { x: 0.12, y: 0.64, w: 0.76, h: 0.22 }],
        overlayText: [{ text: 'CITY LIGHTS', x: 0.5, y: 0.05, color: '#FF00FF', font: '35px "Orbitron"' }],
        slotBorderColor: '#0FF', slotBorderWidth: 2,
        filter: 'saturate(1.5) contrast(1.1)'
    },
    'tropical_paradise': {
        id: 'tropical_paradise', width: 600, height: 1800, category: 'cute',
        backgroundColor: 'linear-gradient(180deg, #87CEEB 0%, #98FB98 100%)',
        decorations: [
            { content: '🌴', x: 0.05, y: 0.05, size: 70 }, { content: '🌴', x: 0.95, y: 0.08, size: 65 },
            { content: '🌺', x: 0.15, y: 0.3, size: 40 }, { content: '🌸', x: 0.85, y: 0.35, size: 45 },
            { content: '🦩', x: 0.1, y: 0.85, size: 60 }, { content: '🍹', x: 0.5, y: 0.9, size: 55 },
            { content: '🥥', x: 0.9, y: 0.88, size: 50 }, { content: '☀️', x: 0.5, y: 0.02, size: 60 }
        ],
        slots: [{ x: 0.18, y: 0.15, w: 0.64, h: 0.2 }, { x: 0.18, y: 0.4, w: 0.64, h: 0.2 }, { x: 0.18, y: 0.65, w: 0.64, h: 0.2 }],
        slotRadius: 20, slotBorderColor: '#fff', slotBorderWidth: 6,
        filter: 'saturate(1.4) contrast(1.1)'
    },
    'retro_arcade': {
        id: 'retro_arcade', width: 600, height: 1800, category: 'retro',
        backgroundColor: '#1a1a2e',
        decorations: [
            { content: '👾', x: 0.1, y: 0.05, size: 50 }, { content: '🕹️', x: 0.5, y: 0.03, size: 55 },
            { content: '🎮', x: 0.9, y: 0.06, size: 48 }, { content: '💎', x: 0.15, y: 0.45, size: 35 },
            { content: '🪙', x: 0.85, y: 0.5, size: 40 }, { content: '🏆', x: 0.5, y: 0.88, size: 60 },
            { content: '⬆️', x: 0.2, y: 0.92, size: 30 }, { content: '⬇️', x: 0.8, y: 0.92, size: 30 }
        ],
        slots: [{ x: 0.15, y: 0.12, w: 0.7, h: 0.22 }, { x: 0.15, y: 0.38, w: 0.7, h: 0.22 }, { x: 0.15, y: 0.64, w: 0.7, h: 0.22 }],
        overlayText: [{ text: 'INSERT COIN', x: 0.5, y: 0.95, color: '#FFD700', font: '30px "Press Start 2P", monospace' }],
        slotBorderColor: '#FF00FF', slotBorderWidth: 3,
        filter: 'contrast(1.3) saturate(1.2)'
    },
    'sushi_roll': {
        id: 'sushi_roll', width: 600, height: 1800, category: 'cute',
        backgroundColor: '#FFF5EE',
        decorations: [
            { content: '🍣', x: 0.1, y: 0.05, size: 50 }, { content: '🍱', x: 0.5, y: 0.03, size: 55 },
            { content: '🍙', x: 0.9, y: 0.06, size: 48 }, { content: '🥢', x: 0.15, y: 0.5, size: 40 },
            { content: '🍥', x: 0.85, y: 0.45, size: 45 }, { content: '🍵', x: 0.1, y: 0.9, size: 50 },
            { content: '🎎', x: 0.5, y: 0.92, size: 55 }, { content: '🌸', x: 0.9, y: 0.88, size: 45 }
        ],
        slots: [{ x: 0.15, y: 0.15, w: 0.7, h: 0.2 }, { x: 0.15, y: 0.4, w: 0.7, h: 0.2 }, { x: 0.15, y: 0.65, w: 0.7, h: 0.2 }],
        overlayText: [{ text: 'OISHI!', x: 0.5, y: 0.85, color: '#FF6B6B', font: '40px Arial Black' }],
        slotRadius: 30, slotBorderColor: '#000', slotBorderWidth: 2,
        filter: 'saturate(1.3)'
    },
    'space_odyssey': {
        id: 'space_odyssey', width: 600, height: 1800, category: 'cyber',
        backgroundColor: '#000020',
        decorations: [
            { content: '🚀', x: 0.1, y: 0.05, size: 60 }, { content: '🛸', x: 0.9, y: 0.08, size: 55 },
            { content: '🪐', x: 0.2, y: 0.4, size: 70, opacity: 0.4 }, { content: '🌍', x: 0.8, y: 0.6, size: 65, opacity: 0.4 },
            { content: '👨‍🚀', x: 0.5, y: 0.9, size: 60 }, { content: '🌕', x: 0.15, y: 0.85, size: 50 },
            { content: '⭐', x: 0.3, y: 0.2, size: 20 }, { content: '⭐', x: 0.7, y: 0.3, size: 25 },
            { content: '⭐', x: 0.85, y: 0.8, size: 22 }
        ],
        slots: [{ x: 0.18, y: 0.15, w: 0.64, h: 0.2 }, { x: 0.18, y: 0.45, w: 0.64, h: 0.2 }, { x: 0.18, y: 0.7, w: 0.64, h: 0.15 }],
        overlayText: [{ text: '2001', x: 0.5, y: 0.95, color: '#fff', font: '50px "Orbitron"' }],
        slotBorderColor: '#4169E1', slotBorderWidth: 2,
        filter: 'contrast(1.4)'
    },
    'enchanted_garden': {
        id: 'enchanted_garden', width: 600, height: 1800, category: 'aesthetic',
        backgroundColor: '#F0FFF0',
        decorations: [
            { content: '🦋', x: 0.1, y: 0.05, size: 45 }, { content: '🌷', x: 0.3, y: 0.08, size: 50 },
            { content: '🌹', x: 0.5, y: 0.03, size: 55 }, { content: '🌻', x: 0.7, y: 0.07, size: 48 },
            { content: '🐝', x: 0.9, y: 0.1, size: 40 }, { content: '🍀', x: 0.15, y: 0.5, size: 35 },
            { content: '🌼', x: 0.85, y: 0.55, size: 42 }, { content: '🧚', x: 0.1, y: 0.88, size: 50 },
            { content: '🌿', x: 0.5, y: 0.92, size: 45 }, { content: '🪻', x: 0.9, y: 0.9, size: 48 }
        ],
        slots: [{ x: 0.15, y: 0.15, w: 0.7, h: 0.2 }, { x: 0.15, y: 0.4, w: 0.7, h: 0.2 }, { x: 0.15, y: 0.65, w: 0.7, h: 0.2 }],
        slotRadius: 25, slotBorderColor: '#228B22', slotBorderWidth: 4,
        filter: 'saturate(1.2) brightness(1.05)'
    },
    'casino_royale': {
        id: 'casino_royale', width: 600, height: 1800, category: 'class',
        backgroundColor: '#0d1b2a',
        decorations: [
            { content: '🎰', x: 0.1, y: 0.05, size: 55 }, { content: '🃏', x: 0.5, y: 0.03, size: 60 },
            { content: '🎲', x: 0.9, y: 0.06, size: 50 }, { content: '💎', x: 0.15, y: 0.45, size: 40 },
            { content: '♠️', x: 0.3, y: 0.5, size: 35 }, { content: '♥️', x: 0.7, y: 0.48, size: 35 },
            { content: '♦️', x: 0.85, y: 0.52, size: 35 }, { content: '🏆', x: 0.5, y: 0.9, size: 60 },
            { content: '💰', x: 0.2, y: 0.88, size: 45 }, { content: '💵', x: 0.8, y: 0.92, size: 42 }
        ],
        slots: [{ x: 0.15, y: 0.12, w: 0.7, h: 0.22 }, { x: 0.15, y: 0.38, w: 0.7, h: 0.22 }, { x: 0.15, y: 0.64, w: 0.7, h: 0.2 }],
        overlayText: [{ text: 'ALL IN', x: 0.5, y: 0.95, color: '#FFD700', font: '40px "Times New Roman"' }],
        slotBorderColor: '#FFD700', slotBorderWidth: 3,
        filter: 'contrast(1.3) saturate(1.2)'
    },
    'kawaii_overload': {
        id: 'kawaii_overload', width: 600, height: 1800, category: 'cute',
        backgroundColor: '#FFB6C1',
        decorations: [
            { content: '🎀', x: 0.1, y: 0.03, size: 45 }, { content: '🍰', x: 0.3, y: 0.06, size: 50 },
            { content: '🧁', x: 0.5, y: 0.02, size: 48 }, { content: '🍭', x: 0.7, y: 0.05, size: 52 },
            { content: '🍬', x: 0.9, y: 0.08, size: 44 }, { content: '💕', x: 0.15, y: 0.4, size: 35 },
            { content: '💗', x: 0.85, y: 0.45, size: 38 }, { content: '🐰', x: 0.1, y: 0.88, size: 55 },
            { content: '🌸', x: 0.5, y: 0.9, size: 50 }, { content: '🐱', x: 0.9, y: 0.86, size: 52 }
        ],
        slots: [{ x: 0.18, y: 0.12, w: 0.64, h: 0.22 }, { x: 0.18, y: 0.38, w: 0.64, h: 0.22 }, { x: 0.18, y: 0.64, w: 0.64, h: 0.2 }],
        overlayText: [{ text: 'かわいい', x: 0.5, y: 0.95, color: '#FF1493', font: '35px Arial' }],
        slotRadius: 40, slotBorderColor: '#fff', slotBorderWidth: 5
    },
    'haunted_mansion': {
        id: 'haunted_mansion', width: 600, height: 1800, category: 'cartoon',
        backgroundColor: '#1a0a1a',
        decorations: [
            { content: '🏚️', x: 0.5, y: 0.02, size: 70 }, { content: '👻', x: 0.1, y: 0.15, size: 50 },
            { content: '🦇', x: 0.9, y: 0.1, size: 45 }, { content: '🕷️', x: 0.2, y: 0.45, size: 40 },
            { content: '🕸️', x: 0.8, y: 0.5, size: 55 }, { content: '💀', x: 0.15, y: 0.85, size: 50 },
            { content: '⚰️', x: 0.5, y: 0.9, size: 55 }, { content: '🎃', x: 0.85, y: 0.88, size: 52 },
            { content: '🌙', x: 0.9, y: 0.02, size: 40 }
        ],
        slots: [{ x: 0.15, y: 0.18, w: 0.7, h: 0.2 }, { x: 0.15, y: 0.42, w: 0.7, h: 0.2 }, { x: 0.15, y: 0.66, w: 0.7, h: 0.18 }],
        overlayText: [{ text: 'ENTER IF YOU DARE', x: 0.5, y: 0.95, color: '#8B0000', font: '25px "Creepster"' }],
        slotBorderColor: '#4B0082', slotBorderWidth: 3,
        filter: 'contrast(1.4) grayscale(0.5)'
    },
    'music_festival': {
        id: 'music_festival', width: 600, height: 1800, category: 'modern',
        backgroundColor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        decorations: [
            { content: '🎤', x: 0.1, y: 0.05, size: 55 }, { content: '🎸', x: 0.5, y: 0.02, size: 60 },
            { content: '🥁', x: 0.9, y: 0.06, size: 50 }, { content: '🎹', x: 0.15, y: 0.45, size: 45 },
            { content: '🎺', x: 0.85, y: 0.5, size: 48 }, { content: '🎧', x: 0.1, y: 0.88, size: 55 },
            { content: '🎵', x: 0.3, y: 0.9, size: 40 }, { content: '🎶', x: 0.7, y: 0.92, size: 42 },
            { content: '🔥', x: 0.9, y: 0.86, size: 50 }
        ],
        slots: [{ x: 0.15, y: 0.12, w: 0.7, h: 0.22 }, { x: 0.15, y: 0.38, w: 0.7, h: 0.22 }, { x: 0.15, y: 0.64, w: 0.7, h: 0.2 }],
        overlayText: [{ text: 'LIVE', x: 0.5, y: 0.95, color: '#fff', font: '50px Arial Black' }],
        slotBorderColor: '#fff', slotBorderWidth: 4,
        filter: 'saturate(1.5) contrast(1.2)'
    },
    'coffee_lover': {
        id: 'coffee_lover', width: 600, height: 1800, category: 'aesthetic',
        backgroundColor: '#F5DEB3',
        decorations: [
            { content: '☕', x: 0.1, y: 0.05, size: 55 }, { content: '🫘', x: 0.5, y: 0.02, size: 50 },
            { content: '🥐', x: 0.9, y: 0.06, size: 48 }, { content: '🍩', x: 0.15, y: 0.45, size: 42 },
            { content: '📖', x: 0.85, y: 0.5, size: 45 }, { content: '🧋', x: 0.1, y: 0.88, size: 55 },
            { content: '🍪', x: 0.5, y: 0.9, size: 50 }, { content: '☕', x: 0.9, y: 0.86, size: 52 }
        ],
        slots: [{ x: 0.15, y: 0.15, w: 0.7, h: 0.2 }, { x: 0.15, y: 0.4, w: 0.7, h: 0.2 }, { x: 0.15, y: 0.65, w: 0.7, h: 0.2 }],
        overlayText: [{ text: 'BUT FIRST, COFFEE', x: 0.5, y: 0.95, color: '#3E2723', font: '25px Georgia' }],
        slotRadius: 15, slotBorderColor: '#8B4513', slotBorderWidth: 4,
        filter: 'sepia(0.4) contrast(1.1)'
    },
    'royal_crown': {
        id: 'royal_crown', width: 600, height: 1800, category: 'class',
        backgroundColor: '#4B0082',
        decorations: [
            { content: '👑', x: 0.5, y: 0.02, size: 80 }, { content: '💎', x: 0.1, y: 0.1, size: 45 },
            { content: '💎', x: 0.9, y: 0.12, size: 42 }, { content: '🏰', x: 0.15, y: 0.45, size: 50 },
            { content: '⚜️', x: 0.85, y: 0.5, size: 48 }, { content: '🦁', x: 0.1, y: 0.88, size: 55 },
            { content: '🗡️', x: 0.5, y: 0.9, size: 50 }, { content: '🛡️', x: 0.9, y: 0.86, size: 48 }
        ],
        slots: [{ x: 0.15, y: 0.15, w: 0.7, h: 0.2 }, { x: 0.15, y: 0.4, w: 0.7, h: 0.2 }, { x: 0.15, y: 0.65, w: 0.7, h: 0.2 }],
        overlayText: [{ text: 'ROYALTY', x: 0.5, y: 0.95, color: '#FFD700', font: '45px "Times New Roman"' }],
        slotBorderColor: '#FFD700', slotBorderWidth: 5,
        filter: 'contrast(1.2) saturation(1.2)'
    },
    'pixel_world': {
        id: 'pixel_world', width: 600, height: 1800, category: 'cartoon',
        backgroundColor: '#5DADE2',
        decorations: [
            { content: '🟥', x: 0.1, y: 0.05, size: 30 }, { content: '🟧', x: 0.2, y: 0.08, size: 30 },
            { content: '🟨', x: 0.3, y: 0.04, size: 30 }, { content: '🟩', x: 0.4, y: 0.07, size: 30 },
            { content: '🟦', x: 0.5, y: 0.03, size: 30 }, { content: '🟪', x: 0.6, y: 0.06, size: 30 },
            { content: '⬛', x: 0.7, y: 0.05, size: 30 }, { content: '⬜', x: 0.8, y: 0.08, size: 30 },
            { content: '🎮', x: 0.5, y: 0.9, size: 60 }, { content: '🕹️', x: 0.2, y: 0.88, size: 45 },
            { content: '👾', x: 0.8, y: 0.92, size: 50 }
        ],
        slots: [{ x: 0.15, y: 0.15, w: 0.7, h: 0.22 }, { x: 0.15, y: 0.42, w: 0.7, h: 0.22 }, { x: 0.15, y: 0.68, w: 0.7, h: 0.18 }],
        overlayText: [{ text: '8-BIT', x: 0.5, y: 0.95, color: '#000', font: '35px "Press Start 2P", monospace' }],
        slotBorderColor: '#000', slotBorderWidth: 4, slotRadius: 0,
        filter: 'contrast(1.3) saturate(1.3)'
    },

    // ========== 26. UNIQUE SIZES (5) ==========
    'square_classic': {
        id: 'square_classic', width: 800, height: 800, category: 'minimal', // Perfect Square
        backgroundColor: '#fff',
        slots: [{ x: 0.1, y: 0.1, w: 0.8, h: 0.8 }], // Single large photo
        overlayText: [{ text: '1:1', x: 0.9, y: 0.95, color: '#ccc', font: '30px Arial' }],
        slotBorderColor: '#000', slotBorderWidth: 2, slotRadius: 0, slotShadow: true,
        filter: 'contrast(1.05)'
    },
    'ultra_wide': {
        id: 'ultra_wide', width: 1600, height: 400, category: 'modern', // Cinema Ultra Wide 4:1
        backgroundColor: '#111',
        slots: [{ x: 0.02, y: 0.1, w: 0.3, h: 0.8 }, { x: 0.35, y: 0.1, w: 0.3, h: 0.8 }, { x: 0.68, y: 0.1, w: 0.3, h: 0.8 }],
        overlayText: [{ text: 'CINEMATIC', x: 0.5, y: 0.95, color: '#fff', font: '25px Arial' }],
        slotBorderColor: '#fff', slotBorderWidth: 2, slotRadius: 0,
        filter: 'contrast(1.3) saturation(0.8)'
    },
    'tall_banner': {
        id: 'tall_banner', width: 400, height: 1200, category: 'minimal', // Tall Vertical Banner
        backgroundColor: '#F5F5F5',
        slots: [{ x: 0.1, y: 0.05, w: 0.8, h: 0.25 }, { x: 0.1, y: 0.35, w: 0.8, h: 0.25 }, { x: 0.1, y: 0.65, w: 0.8, h: 0.25 }],
        overlayText: [{ text: 'BANNER', x: 0.5, y: 0.95, color: '#999', font: '25px Arial' }],
        filter: 'grayscale(0.5)',
        slotRadius: 5, slotBorderColor: '#ddd', slotBorderWidth: 1
    },
    'mini_card': {
        id: 'mini_card', width: 300, height: 400, category: 'cute', // Small Trading Card Size
        backgroundColor: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
        slots: [{ x: 0.15, y: 0.1, w: 0.7, h: 0.5 }],
        decorations: [{ content: '⭐', x: 0.1, y: 0.7, size: 30 }, { content: '⭐', x: 0.9, y: 0.75, size: 25 }],
        overlayText: [{ text: 'MINI', x: 0.5, y: 0.85, color: '#fff', font: '30px Arial Black' }],
        slotBorderColor: '#fff', slotBorderWidth: 5, slotRadius: 10,
        filter: 'saturate(1.3)'
    },
    'panorama_view': {
        id: 'panorama_view', width: 2000, height: 600, category: 'aesthetic', // Extra Wide Panorama
        backgroundColor: 'linear-gradient(90deg, #a1c4fd 0%, #c2e9fb 50%, #a1c4fd 100%)',
        slots: [{ x: 0.02, y: 0.15, w: 0.96, h: 0.7 }], // Single ultra-wide photo
        overlayText: [{ text: '— PANORAMA —', x: 0.5, y: 0.92, color: '#fff', font: '35px Georgia' }],
        slotBorderColor: '#fff', slotBorderWidth: 8, slotRadius: 0,
        filter: 'saturate(1.2)'
    },

    // ========== 27. UNIQUE SHAPES / SLOT ARRANGEMENTS (5) ==========
    'diagonal_split': {
        id: 'diagonal_split', width: 800, height: 800, category: 'modern',
        backgroundColor: '#1a1a1a',
        // Simulating diagonal with offset slots
        slots: [
            { x: 0.05, y: 0.05, w: 0.4, h: 0.4 },
            { x: 0.55, y: 0.55, w: 0.4, h: 0.4 }
        ],
        decorations: [{ type: 'text', text: '/', x: 0.5, y: 0.5, color: '#333', font: '200px Arial' }],
        overlayText: [{ text: 'SPLIT', x: 0.5, y: 0.95, color: '#fff', font: '30px Arial' }],
        slotBorderColor: '#fff', slotBorderWidth: 3, slotRadius: 0,
        filter: 'contrast(1.2)'
    },
    'mosaic_grid': {
        id: 'mosaic_grid', width: 900, height: 900, category: 'aesthetic',
        backgroundColor: '#fff',
        // Complex mosaic arrangement
        slots: [
            { x: 0.05, y: 0.05, w: 0.55, h: 0.55 }, // Large Top-Left
            { x: 0.65, y: 0.05, w: 0.3, h: 0.25 }, // Small Top-Right 1
            { x: 0.65, y: 0.35, w: 0.3, h: 0.25 }, // Small Top-Right 2
            { x: 0.05, y: 0.65, w: 0.3, h: 0.3 }, // Small Bottom-Left
            { x: 0.4, y: 0.65, w: 0.55, h: 0.3 }  // Wide Bottom-Right
        ],
        slotBorderColor: '#eee', slotBorderWidth: 5, slotRadius: 10, slotShadow: true,
        filter: 'brightness(1.05)'
    },
    'l_shape_frame': {
        id: 'l_shape_frame', width: 800, height: 1000, category: 'modern',
        backgroundColor: '#2c3e50',
        // L-Shaped arrangement
        slots: [
            { x: 0.1, y: 0.05, w: 0.8, h: 0.35 }, // Top horizontal
            { x: 0.1, y: 0.45, w: 0.35, h: 0.5 }, // Bottom-left vertical
        ],
        overlayText: [{ text: 'L', x: 0.7, y: 0.75, color: '#fff', font: 'bold 150px Arial' }],
        slotBorderColor: '#ecf0f1', slotBorderWidth: 4, slotRadius: 0,
        filter: 'contrast(1.1)'
    },
    'staircase': {
        id: 'staircase', width: 800, height: 1200, category: 'aesthetic',
        backgroundColor: '#f8f9fa',
        // Staggered staircase effect
        slots: [
            { x: 0.05, y: 0.05, w: 0.4, h: 0.25 },
            { x: 0.2, y: 0.32, w: 0.4, h: 0.25 },
            { x: 0.35, y: 0.59, w: 0.4, h: 0.25 },
            { x: 0.5, y: 0.86, w: 0.4, h: 0.12 }
        ],
        overlayText: [{ text: 'ASCENDING', x: 0.75, y: 0.5, color: '#333', font: '20px Arial', rotation: 90 }],
        slotBorderColor: '#000', slotBorderWidth: 2, slotShadow: true,
        filter: 'sepia(0.2)'
    },
    'circle_focus': {
        id: 'circle_focus', width: 800, height: 800, category: 'minimal',
        backgroundColor: '#fff',
        // Single circular photo (high radius = circle)
        slots: [{ x: 0.15, y: 0.15, w: 0.7, h: 0.7 }],
        decorations: [
            { type: 'circle', x: 0.5, y: 0.5, size: 320, color: '#f0f0f0' } // Outer ring
        ],
        overlayText: [{ text: 'FOCUS', x: 0.5, y: 0.92, color: '#333', font: '30px Arial' }],
        slotRadius: 400, slotBorderColor: '#333', slotBorderWidth: 5, // Max radius makes it circular
        filter: 'contrast(1.2)'
    }
};

export function getLayoutConfig(id) {
    return LAYOUTS[id] || LAYOUTS['classic_white'];
}
