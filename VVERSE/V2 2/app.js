;(function() {
  var tr = function(type, name) {
      var on = false;
      var func = function() {
          if (on) { return; }
          on = true;
          requestAnimationFrame(function() {
              window.dispatchEvent(new CustomEvent(name));
              on = false;
          });
      };
      window.addEventListener(type, func);
  };
  tr("scroll", "optimizedScroll");
})();

(function() {
  'use strict';
  const multiplier = 0.3;

  let collective;

  let _a = {
    getNodes: (s) => document.querySelectorAll(s),
    init: () => {
      _a.initEls();
      _a.attachEvents();
    },
    initEls: () => {
      collective = _a.getNodes('.collective');
    },
    attachEvents: () => {
      window.addEventListener('optimizedScroll', _a.scrolled, false);
    },
    scrolled: (e) => {
      let rotation = multiplier * window.pageYOffset;

      collective.forEach((el) => {
        let center = el.dataset.center;
        el.setAttribute('transform', `rotate(${rotation} ${center})`);
      });
    }
  };
  _a.init();
})();