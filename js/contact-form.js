document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('contact-form');
  if (!form) {
    return;
  }

  var statusEl = document.getElementById('contact-form-status');
  var endpoint = 'https://formsubmit.co/ajax/hello@londonchildrenspractice.com';

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    statusEl.textContent = 'Sending...';
    statusEl.className = 'contact-form__status is-loading';

    var formData = new FormData(form);
    var payload = {};
    formData.forEach(function (value, key) {
      payload[key] = value;
    });

    payload._subject = 'New enquiry from the London Children\'s Practice website';
    payload._captcha = 'false';

    fetch(endpoint, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
      .then(function (response) {
        if (!response.ok) {
          throw new Error('Unable to send message right now.');
        }
        statusEl.textContent = 'Thank you for getting in touch. We will respond as soon as possible.';
        statusEl.className = 'contact-form__status is-success';
        form.reset();
      })
      .catch(function (error) {
        statusEl.textContent = error.message || 'Something went wrong while sending your message. Please try again later or use the contact details above.';
        statusEl.className = 'contact-form__status is-error';
      });
  });
});
