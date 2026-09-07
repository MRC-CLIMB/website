(function () {
  'use strict';

  var root = document.documentElement;

  function currentTheme() {
    try {
      var stored = localStorage.getItem('climb-theme');
      if (stored === 'light' || stored === 'dark') return stored;
    } catch (e) {}
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    var toggle = document.querySelector('[data-theme-toggle]');
    if (toggle) {
      toggle.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    }
  }

  applyTheme(currentTheme());

  var toggle = document.querySelector('[data-theme-toggle]');
  if (toggle) {
    toggle.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      try { localStorage.setItem('climb-theme', next); } catch (e) {}
    });
  }

  var navToggle = document.querySelector('[data-nav-toggle]');
  var nav = document.getElementById('site-nav');
  if (navToggle && nav) {
    navToggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        nav.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  var rotator = document.getElementById('hero-rotator');
  if (rotator) {
    var words = ['scalable', 'shareable', 'portable', 'reproducible', 'easy'];
    var i = -1;

    function tick() {
      rotator.style.opacity = '0';
      setTimeout(function () {
        i = (i + 1) % words.length;
        rotator.textContent = words[i];
        rotator.className = 'rotating-word c' + i;
        rotator.style.opacity = '1';
        setTimeout(tick, 2400);
      }, 400);
    }

    tick();
  }
})();
