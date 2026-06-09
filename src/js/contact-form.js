/**
 * contact-form.js - Handles contact form submission
 * POSTs to /.netlify/functions/contact-handler
 */
(function () {
  'use strict';

  var form   = document.querySelector('[data-contact-form]');
  var status = document.querySelector('[data-form-status]');

  if (!form) return;

  var messages = {
    idle:    '',
    loading: 'Sending...',
    success: 'Message sent. Sanjiv will be in touch shortly.',
    error:   'Something went wrong. Please email directly instead.'
  };

  function setState(state) {
    form.dataset.state = state;
    if (status) status.textContent = messages[state] || '';
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    var data = {
      name:    (form.querySelector('[name="name"]') || {}).value || '',
      email:   (form.querySelector('[name="email"]') || {}).value || '',
      message: (form.querySelector('[name="message"]') || {}).value || ''
    };

    if (!data.name || data.name.trim().length < 2) {
      setState('error');
      if (status) status.textContent = 'Please enter your name.';
      return;
    }
    if (!isValidEmail(data.email)) {
      setState('error');
      if (status) status.textContent = 'Please enter a valid email address.';
      return;
    }
    if (!data.message || data.message.trim().length < 10) {
      setState('error');
      if (status) status.textContent = 'Message is too short.';
      return;
    }

    setState('loading');

    fetch('/.netlify/functions/contact-handler', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    .then(function(res) {
      if (res.ok) { setState('success'); form.reset(); }
      else { setState('error'); }
    })
    .catch(function() { setState('error'); });
  });

})();
