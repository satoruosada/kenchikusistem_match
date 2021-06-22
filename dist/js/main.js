"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var cb = function cb(el, inview) {
    if (inview) {
      var ta = new TweenTextAnimation(el);
      ta.animate();
    }
  };

  var header = document.querySelector('.header');

  var _navAnimation = function _navAnimation(el, inview) {
    if (inview) {
      header.classList.remove('triggered');
    } else {
      header.classList.add('triggered');
    }
  }; //   new MobileMenu();

}); // スクロール

var pagetopBtn = $('.footer__page');
pagetopBtn.hide();
$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    pagetopBtn.fadeIn();
  } else {
    pagetopBtn.fadeOut();
  }
});
$(window).scroll(function () {
  var height = $(document).height();
  var position = $(window).height() + $(window).scrollTop();
  var footer = $("footer").outerHeight();

  if (height - position < footer) {
    pagetopBtn.css({
      bottom: 190
    });
  } else {
    pagetopBtn.css({
      position: "fixed",
      bottom: 70
    });
  }
});
pagetopBtn.click(function () {
  $('body,html').animate({
    scrollTop: 0
  }, 500);
  return false;
}); // モバイルマッチングフォーム出現

jQuery(function ($) {
  var sideBar = $('.footer__btn-container');
  sideBar.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 2500) {
      sideBar.fadeOut();
    } else {
      sideBar.fadeIn();
    }
  });
});
//# sourceMappingURL=main.js.map
