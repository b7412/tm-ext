(function () {
  // bye bye, canary pink
  document.body.style.background = "";

  // THE sniper shot: the exact element TypingMind tagged for us
  const css = document.createElement('style');
  css.textContent = `
    [data-element-id="thinking-block"],
    [data-element-id="reasoning-block"] {
      display: none !important;
    }
  `;
  document.head.appendChild(css);

  // catch any that render later (new chats stream in over time)
  function nuke() {
    document
      .querySelectorAll('[data-element-id="thinking-block"]')
      .forEach(function (el) {
        el.style.setProperty('display', 'none', 'important');
      });
  }
  nuke();
  new MutationObserver(nuke).observe(document.body, { childList: true, subtree: true });
})();
