/**
 * PHOTOBOOTH SECURITY MODULE
 * Enforces anti-tamper, anti-debug, and interaction restrictions.
 */

(function () {
    console.log("%cSTOP!", "color: red; font-size: 30px; font-weight: bold;");
    console.log("This application is protected. Unauthorized access is prohibited.");

    // 1. Disable Right Click
    document.addEventListener('contextmenu', event => event.preventDefault());

    // 2. Disable DevTool Shortcuts
    document.addEventListener('keydown', function (e) {
        // F12
        if (e.key === 'F12') {
            e.preventDefault();
            return false;
        }

        // Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C (Windows/Linux)
        // Cmd+Option+I, Cmd+Option+J, Cmd+Option+C (Mac)
        if ((e.ctrlKey || e.metaKey) && (e.shiftKey || e.altKey) && ['I', 'J', 'C', 'i', 'j', 'c'].includes(e.key)) {
            e.preventDefault();
            return false;
        }

        // Ctrl+U (View Source)
        if ((e.ctrlKey || e.metaKey) && (e.key === 'u' || e.key === 'U')) {
            e.preventDefault();
            return false;
        }
    });

    // 3. Disable Selection & Dragging (JS Backup for CSS)
    document.addEventListener('dragstart', event => event.preventDefault());
    document.addEventListener('selectstart', event => {
        // Allow selection in input fields
        if (event.target.tagName !== 'INPUT' && event.target.tagName !== 'TEXTAREA') {
            event.preventDefault();
        }
    });

    // 4. Anti-Debugger Trap
    // Throws a debugger breakpoint loop if DevTools opens
    setInterval(() => {
        const start = new Date().getTime();
        debugger;
        const end = new Date().getTime();
        if (end - start > 100) {
            // DevTools likely open
            document.body.innerHTML = '<div style="display:flex;justify-content:center;align-items:center;height:100vh;background:#000;color:red;font-size:2rem;font-weight:bold;">SECURITY VIOLATION DETECTED</div>';
            throw new Error("Security Violation");
        }
    }, 2000);

})();
