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

  root.setAttribute('data-theme', currentTheme());

  var toggle = document.querySelector('[data-theme-toggle]');
  if (toggle) {
    toggle.setAttribute('aria-label', root.getAttribute('data-theme') === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    toggle.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      toggle.setAttribute('aria-label', next === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
      try { localStorage.setItem('climb-theme', next); } catch (e) {}
    });
  }

  var navToggle = document.querySelector('[data-nav-toggle]');
  var nav = document.getElementById('site-nav');
  if (navToggle && nav) {
    navToggle.addEventListener('click', function () {
      var open = !nav.classList.contains('is-open');
      nav.classList.toggle('is-open');
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

    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      rotator.textContent = words[0];
      rotator.className = 'rotating-word c0';
      rotator.style.opacity = '1';
    } else {
      tick();
    }
  }
})();
