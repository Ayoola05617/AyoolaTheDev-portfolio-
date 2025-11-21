// Theme toggle script: manage both .light-theme and .dark-theme classes, persist selection
(function(){
  function init() {
    var root = document.documentElement;
    var topbar = document.querySelector('.topbar');
    if (!topbar) return;

    var btn = document.getElementById('themeToggle') || topbar.querySelector('.theme-toggle');
    var created = false;
    if (!btn) {
      btn = document.createElement('button');
      btn.className = 'theme-toggle';
      btn.id = 'themeToggle';
      btn.type = 'button';
      created = true;
    }

    var icon = btn.querySelector('#themeIcon');

    // Read saved preference
    var saved = null;
    try { saved = localStorage.getItem('site-theme'); } catch (e) { saved = null; }

    // Ensure one of the theme classes is present. Default to dark.
    if (saved === 'light') {
      root.classList.add('light-theme');
      root.classList.remove('dark-theme');
      if (icon) icon.className = 'ri-sun-line'; else btn.textContent = 'Light';
    } else {
      // default/dark
      root.classList.add('dark-theme');
      root.classList.remove('light-theme');
      if (icon) icon.className = 'ri-moon-fill'; else btn.textContent = 'Dark';
    }

    btn.addEventListener('click', function () {
      var isNowLight = root.classList.toggle('light-theme');
      if (isNowLight) {
        root.classList.remove('dark-theme');
        try { localStorage.setItem('site-theme', 'light'); } catch (e) {}
        if (icon) icon.className = 'ri-sun-line'; else btn.textContent = 'Light';
      } else {
        // switched back to dark
        root.classList.add('dark-theme');
        root.classList.remove('light-theme');
        try { localStorage.setItem('site-theme', 'dark'); } catch (e) {}
        if (icon) icon.className = 'ri-moon-fill'; else btn.textContent = 'Dark';
      }
    });

    if (created) topbar.appendChild(btn);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
