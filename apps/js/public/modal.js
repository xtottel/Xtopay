// Sendexa SDK: Embeds a payment modal for pay.sendexa.co/[uuid]
(function (window, document) {
  if (window.Sendexa) return;

  function createModal(uuid) {
    // Remove existing modal if present
    const existing = document.getElementById('sendexa-modal-overlay');
    if (existing) existing.remove();

    // Create overlay
    const overlay = document.createElement('div');
    overlay.id = 'sendexa-modal-overlay';
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100vw';
    overlay.style.height = '100vh';
    overlay.style.background = 'rgba(0,0,0,0.5)';
    overlay.style.display = 'flex';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';
    overlay.style.zIndex = '9999';

    // Create iframe
    const iframe = document.createElement('iframe');
    iframe.src = `https://pay.xtopay.co/${uuid}`;
    iframe.style.width = '400px';
    iframe.style.height = '600px';
    iframe.style.border = 'none';
    iframe.style.borderRadius = '8px';
    iframe.allow = 'payment';

    // Create close button
    const closeBtn = document.createElement('button');
    closeBtn.innerText = '×';
    closeBtn.style.position = 'absolute';
    closeBtn.style.top = '24px';
    closeBtn.style.right = '32px';
    closeBtn.style.fontSize = '2rem';
    closeBtn.style.background = 'transparent';
    closeBtn.style.border = 'none';
    closeBtn.style.color = '#fff';
    closeBtn.style.cursor = 'pointer';
    closeBtn.style.zIndex = '10000';
    closeBtn.onclick = function () {
      overlay.remove();
      window.removeEventListener('resize', setIframeSize);
    };

    // Create preloader spinner
    const spinner = document.createElement('div');
    spinner.id = 'sendexa-preloader';
    spinner.style.position = 'absolute';
    spinner.style.top = '50%';
    spinner.style.left = '50%';
    spinner.style.transform = 'translate(-50%, -50%)';
    spinner.style.width = '48px';
    spinner.style.height = '48px';
    spinner.style.border = '6px solid #fff';
    spinner.style.borderTop = '6px solid #0070f3';
    spinner.style.borderRadius = '50%';
    spinner.style.animation = 'sendexa-spin 1s linear infinite';
    spinner.style.zIndex = '10001';

    // Add spinner animation style
    const style = document.createElement('style');
    style.innerHTML = `@keyframes sendexa-spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`;
    document.head.appendChild(style);

    // Responsive iframe sizing (improved for mobile)
    function setIframeSize() {
      const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
      const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
      let width, height;
      if (vw < 600) {
        width = '100vw';
        height = '100vh';
        iframe.style.borderRadius = '0';
      } else {
        width = '400px';
        height = vh < 700 ? '70vh' : '600px';
        iframe.style.borderRadius = '8px';
      }
      iframe.style.width = width;
      iframe.style.height = height;
    }
    setIframeSize();
    window.addEventListener('resize', setIframeSize);

    // Create skeleton loader
    const skeleton = document.createElement('div');
    skeleton.id = 'sendexa-skeleton';
    skeleton.style.position = 'absolute';
    skeleton.style.top = '50%';
    skeleton.style.left = '50%';
    skeleton.style.transform = 'translate(-50%, -50%)';
    skeleton.style.width = '90vw';
    skeleton.style.maxWidth = '400px';
    skeleton.style.height = '400px';
    skeleton.style.background = 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)';
    skeleton.style.backgroundSize = '200% 100%';
    skeleton.style.animation = 'sendexa-skeleton-anim 1.2s infinite linear';
    skeleton.style.borderRadius = '8px';
    skeleton.style.zIndex = '10002';

    // Add skeleton animation style
    style.innerHTML += `\n@keyframes sendexa-skeleton-anim { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }`;

    // Hide spinner and skeleton when iframe loads
    iframe.onload = function () {
      spinner.style.display = 'none';
      skeleton.style.display = 'none';
    };

    overlay.appendChild(iframe);
    overlay.appendChild(closeBtn);
    overlay.appendChild(spinner);
    overlay.appendChild(skeleton);
    document.body.appendChild(overlay);
  }

  window.Sendexa = {
    open: function ({ uuid }) {
      if (!uuid) throw new Error('Sendexa.open: uuid is required');
      createModal(uuid);
    },
  };
})(window, document);
