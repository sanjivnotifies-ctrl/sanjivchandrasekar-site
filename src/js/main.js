/**
 * main.js - Global scripts for sanjivchandrasekar.com
 */
(function () {
  'use strict';

  // Nav scroll state
  const nav = document.querySelector('[data-nav]');
  if (nav) {
    window.addEventListener('scroll', function() {
      nav.classList.toggle('nav--scrolled', window.scrollY > 60);
    }, { passive: true });
  }

  // Mobile nav toggle
  const navToggle = document.querySelector('[data-nav-toggle]');
  const navMenu   = document.querySelector('[data-nav-menu]');
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function() {
      var open = navMenu.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', open);
    });
  }

  // Reveal on scroll
  var revealEls = document.querySelectorAll('[data-reveal]');
  if (revealEls.length && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    revealEls.forEach(function(el) { observer.observe(el); });
  }

  // TODO: Wire up GA4
  // window.dataLayer = window.dataLayer || [];
  // function gtag(){ dataLayer.push(arguments); }
  // gtag('js', new Date());
  // gtag('config', 'G-XXXXXXXXXX');

})();
