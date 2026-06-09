/**
 * contact-handler.js - Netlify serverless function
 *
 * Required environment variables (set in Netlify dashboard):
 *   RESEND_API_KEY  - API key from resend.com (free: 100 emails/day)
 *   TO_EMAIL        - Sanjiv's receiving email
 *   FROM_EMAIL      - Sender address (e.g. no-reply@sanjivchandrasekar.com)
 *
 * Setup:
 *   1. Sign up at https://resend.com
 *   2. Add env vars: Netlify dashboard > Site Settings > Environment Variables
 *   3. Deploy - function auto-activates at /.netlify/functions/contact-handler
 */

exports.handler = async function(event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  var body;
  try {
    body = JSON.parse(event.body);
  } catch(e) {
    return { statusCode: 400, body: 'Invalid JSON' };
  }

  var name    = body.name    || '';
  var email   = body.email   || '';
  var message = body.message || '';

  if (!name || !email || !message) {
    return { statusCode: 400, body: 'Missing required fields' };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { statusCode: 400, body: 'Invalid email address' };
  }

  try {
    var res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + process.env.RESEND_API_KEY,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from:     process.env.FROM_EMAIL,
        to:       process.env.TO_EMAIL,
        subject:  'New contact from ' + name + ' - sanjivchandrasekar.com',
        reply_to: email,
        html: '<h2>New contact form submission</h2>' +
              '<p><strong>Name:</strong> ' + name + '</p>' +
              '<p><strong>Email:</strong> ' + email + '</p>' +
              '<p><strong>Message:</strong></p>' +
              '<p>' + message.replace(/\n/g, '<br>') + '</p>' +
              '<hr><small>Sent from sanjivchandrasekar.com contact form</small>'
      })
    });

    if (!res.ok) {
      var err = await res.text();
      console.error('Resend error:', err);
      return { statusCode: 500, body: 'Email delivery failed' };
    }

    return { statusCode: 200, body: JSON.stringify({ success: true }) };

  } catch(err) {
    console.error('Handler error:', err);
    return { statusCode: 500, body: 'Internal server error' };
  }
};
