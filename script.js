
document.getElementById('yr').textContent = new Date().getFullYear();
// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const menu = document.getElementById('primary-menu');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', !expanded);
    menu.classList.toggle('show');
  });
}

// Apps Script endpoint for leads - replace the placeholder with your deployed Apps Script Web App URL
const APPS_SCRIPT_ENDPOINT = "REPLACE_WITH_YOUR_APPS_SCRIPT_WEBAPP_URL";

// Form handler: tries Apps Script POST, falls back to mailto
const leadForm = document.getElementById('leadForm');
if (leadForm) {
  leadForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    if (!name || !phone || phone.length !== 10) {
      alert('Please enter a valid name and 10-digit phone number.');
      return;
    }
    const service = document.getElementById('service').value;
    const message = document.getElementById('message').value;

    const payload = { name, phone, service, message, timestamp: new Date().toISOString() };

    if (APPS_SCRIPT_ENDPOINT && !APPS_SCRIPT_ENDPOINT.startsWith('REPLACE_WITH')) {
      try {
        const res = await fetch(APPS_SCRIPT_ENDPOINT, {
          method: 'POST',
          mode: 'cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
        if (res.ok) {
          alert('Thanks — your request has been submitted. We will contact you shortly.');
          leadForm.reset();
          return;
        } else {
          console.warn('Apps Script returned', res.status);
        }
      } catch (err) {
        console.warn('Apps Script error', err);
      }
    }
    // Fallback: open mailto
    const subject = encodeURIComponent('StructoCare - Inspection Request');
    const body = encodeURIComponent(`Name: ${name}\nPhone: ${phone}\nService: ${service}\nMessage: ${message}`);
    window.location.href = `mailto:info@yourdomain.com?subject=${subject}&body=${body}`;
  });
}
