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
      bottom: 170
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
$(function () {
  $(".js-sub-img img").on("click", function () {
    img = $(this).attr("src");
    $(".js-main-img img").fadeOut(500, function () {
      $(".js-main-img img").attr("src", img).on("load", function () {
        $(this).fadeIn(500);
      });
    });
  });
});
//# sourceMappingURL=main.js.map
