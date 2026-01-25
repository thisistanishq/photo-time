/**
 * PHOTOBOOTH SECURITY MODULE - DEFCON 1
 * Enforces strict anti-tamper, anti-debug, and interaction blocks.
 */

(function () {
    // 0. Neutralize Console
    const noop = () => { };
    ['log', 'debug', 'info', 'warn', 'error', 'table', 'trace'].forEach(method => {
        console[method] = noop;
    });

    // 1. Disable Right Click
    document.addEventListener('contextmenu', event => {
        event.preventDefault();
        return false;
    });

    // 2. Aggressive Shortcut Blocking
    document.addEventListener('keydown', function (e) {
        // F12 key
        if (e.key === 'F12') {
            e.preventDefault();
            e.stopPropagation();
            return false;
        }

        // CTRL or CMD combinations
        if (e.ctrlKey || e.metaKey) {
            const key = e.key.toLowerCase();

            // Blocked Keys: 
            // u (Source), s (Save), p (Print), f (Find - optional but good for hiding), 
            // i, j, c (DevTools), k (Console)
            if (['u', 's', 'p', 'f', 'i', 'j', 'c', 'k', 'h'].includes(key)) {
                e.preventDefault();
                e.stopPropagation();
                return false;
            }

            // Block Shift combinations (Ctrl+Shift+I, etc.)
            if (e.shiftKey && ['i', 'j', 'c', 'k'].includes(key)) {
                e.preventDefault();
                e.stopPropagation();
                return false;
            }
        }

        // Block Alt combinations (often used for menus)
        if (e.altKey) {
            e.preventDefault();
        }
    }, true); // Capture phase

    // 3. Disable Selection & Dragging
    const prevent = e => e.preventDefault();
    document.addEventListener('dragstart', prevent);
    ['selectstart', 'copy', 'cut', 'paste'].forEach(ev => {
        document.addEventListener(ev, prevent);
    });

    // 4. Anti-Debugger / DevTools Detector
    // Uses a timing attack to detect if the thread is paused by a debugger
    setInterval(() => {
        const start = performance.now();
        debugger; // This will pause execution if DevTools is open
        const end = performance.now();

        // If execution paused effectively for > 100ms, DevTools is likely open
        if (end - start > 100) {
            document.body.innerHTML = '<div style="background:black;color:red;height:100vh;display:flex;justify-content:center;align-items:center;font-size:3rem;font-weight:bold;text-align:center;">ILLEGAL ACTION DETECTED<br>ACCESS DENIED</div>';
            // Throw error to break execution stack
            throw new Error("Security Violation");
        }
    }, 1000);

    // 5. Bot/Headless Check (Basic)
    if (navigator.webdriver || window.callPhantom || window._phantom) {
        document.body.innerHTML = '<h1>Access Denied: Automated Browser Detected</h1>';
        throw new Error("Bot Detected");
    }

})();
