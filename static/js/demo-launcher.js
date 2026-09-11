/* Static notice for the completed AgentSPEX hosted demo period. */
(function () {
  'use strict';
  const dialog = document.getElementById('demo-notice');
  const context = document.getElementById('demo-notice-context');
  const labels = {
    deep_research: 'AI Deep Research',
    ai_scientist: 'AI Scientists',
    ai_advisor: 'AI Advisor',
    yaml_editor: 'YAML Flow Editor',
  };
  let trigger = null;
  let backdropPointerDown = false;

  document.querySelectorAll('[data-demo]').forEach(function (button) {
    button.addEventListener('click', function () {
      if (dialog.open) return;
      trigger = button;
      context.textContent = labels[button.dataset.demo] || 'AgentSPEX demo';
      dialog.showModal();
      dialog.scrollTop = 0;
      document.documentElement.classList.add('demo-notice-open');
    });
  });

  dialog.querySelector('.demo-notice-close').addEventListener('click', function () {
    dialog.close();
  });

  // Only dismiss when both ends of a click are outside the dialog box.
  function outsideDialog(event) {
    const bounds = dialog.getBoundingClientRect();
    return event.clientX < bounds.left || event.clientX > bounds.right ||
      event.clientY < bounds.top || event.clientY > bounds.bottom;
  }
  dialog.addEventListener('pointerdown', function (event) {
    backdropPointerDown = event.target === dialog && outsideDialog(event);
  });
  dialog.addEventListener('click', function (event) {
    if (backdropPointerDown && event.target === dialog && outsideDialog(event)) {
      dialog.close();
    }
    backdropPointerDown = false;
  });

  // Native modal dialogs support Escape and keep the background inert.
  dialog.addEventListener('close', function () {
    document.documentElement.classList.remove('demo-notice-open');
    if (trigger) trigger.focus({ preventScroll: true });
  });
})();
