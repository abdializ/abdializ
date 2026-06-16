(function (window) {
    const LIGHT = 'light-mode';
    const DARK = 'dark-mode';
    const colorSchemeQuery = window.matchMedia('(prefers-color-scheme: light)');

    function prefersLightMode() {
        return colorSchemeQuery.matches;
    }

    function getPreference() {
        return localStorage.getItem('theme');
    }

    function shouldUseLightMode() {
        const pref = getPreference();
        if (pref === LIGHT) return true;
        if (pref === DARK) return false;
        return prefersLightMode();
    }

    function applyTheme(useLight) {
        const root = document.documentElement;
        const body = document.body;
        const button = document.getElementById('theme-toggle');

        root.classList.toggle('light-mode', useLight);

        if (body) {
            body.classList.toggle('light-mode', useLight);
            body.style.backgroundColor = useLight ? '#FBFBFA' : '#090b09';
        }

        if (button) {
            button.style.backgroundColor = useLight ? '#FBFBFA' : '#090b09';
            button.style.color = useLight ? '#40280b' : '#948779';
            button.textContent = getModeLabel();
        }
    }

    function getModeLabel() {
        const pref = getPreference();
        if (!pref) return 'Auto';
        if (pref === LIGHT) return 'Light';
        return 'Dark';
    }

    function setPreference(pref) {
        if (!pref) {
            localStorage.removeItem('theme');
        } else {
            localStorage.setItem('theme', pref);
        }

        applyTheme(shouldUseLightMode());
    }

    function toggleTheme() {
        const pref = getPreference();

        if (!pref) {
            setPreference(LIGHT);
        } else if (pref === LIGHT) {
            setPreference(DARK);
        } else {
            setPreference(null);
        }
    }

    function onSystemThemeChange() {
        if (!getPreference()) {
            applyTheme(shouldUseLightMode());
        }
    }

    function earlyInit() {
        if (shouldUseLightMode()) {
            document.documentElement.classList.add('light-mode');
        }
    }

    function initTheme() {
        applyTheme(shouldUseLightMode());

        if (typeof colorSchemeQuery.addEventListener === 'function') {
            colorSchemeQuery.addEventListener('change', onSystemThemeChange);
        } else if (typeof colorSchemeQuery.addListener === 'function') {
            colorSchemeQuery.addListener(onSystemThemeChange);
        }
    }

    window.SiteTheme = {
        init: initTheme,
        earlyInit: earlyInit,
        toggle: toggleTheme,
        shouldUseLightMode: shouldUseLightMode
    };

    earlyInit();
})(window);
