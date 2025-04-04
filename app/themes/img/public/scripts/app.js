(self["webpackChunkcopia_theme"] = self["webpackChunkcopia_theme"] || []).push([["/scripts/app"],{

/***/ "./resources/scripts/app.js":
/*!**********************************!*\
  !*** ./resources/scripts/app.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");
/* harmony import */ var countup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! countup.js */ "./node_modules/countup.js/dist/countUp.min.js");
/* harmony import */ var _vimeo_player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vimeo/player */ "./node_modules/@vimeo/player/dist/player.es.js");
/* harmony import */ var select2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! select2 */ "./node_modules/select2/dist/js/select2.js");
/* harmony import */ var select2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(select2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lazysizes_plugins_unveilhooks_ls_unveilhooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lazysizes/plugins/unveilhooks/ls.unveilhooks */ "./node_modules/lazysizes/plugins/unveilhooks/ls.unveilhooks.js");
/* harmony import */ var lazysizes_plugins_unveilhooks_ls_unveilhooks__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lazysizes_plugins_unveilhooks_ls_unveilhooks__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lazysizes_plugins_bgset_ls_bgset__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lazysizes/plugins/bgset/ls.bgset */ "./node_modules/lazysizes/plugins/bgset/ls.bgset.js");
/* harmony import */ var lazysizes_plugins_bgset_ls_bgset__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lazysizes_plugins_bgset_ls_bgset__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lazysizes_lazysizes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lazysizes/lazysizes */ "./node_modules/lazysizes/lazysizes.js");
/* harmony import */ var lazysizes_lazysizes__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lazysizes_lazysizes__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lottiefiles_lottie_player__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @lottiefiles/lottie-player */ "./node_modules/@lottiefiles/lottie-player/dist/lottie-player.esm.js");
/* harmony import */ var _tannerhodges_match_height__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @tannerhodges/match-height */ "./node_modules/@tannerhodges/match-height/docs/match-height.js");
/* harmony import */ var _tannerhodges_match_height__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_tannerhodges_match_height__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _people_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./people.js */ "./resources/scripts/people.js");
/* harmony import */ var _people_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_people_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _service_links_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./service-links.js */ "./resources/scripts/service-links.js");
/* harmony import */ var _service_links_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_service_links_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _slider_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./slider.js */ "./resources/scripts/slider.js");
/* harmony import */ var _parallax_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./parallax.js */ "./resources/scripts/parallax.js");
/* harmony import */ var _parallax_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_parallax_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _digitaltrends_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./digitaltrends.js */ "./resources/scripts/digitaltrends.js");
/* harmony import */ var _digitaltrends_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_digitaltrends_js__WEBPACK_IMPORTED_MODULE_14__);
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "jquery");
/**
 * External Dependencies
 * Comment out scripts that are not used to save on page load
 */











/**
 * Internal Scripts
 * Comment out scripts that are not used to save on page load
 */





// Hide show back to top links.
var backToTop = function backToTop(el) {
  if (window.pageYOffset > 300) {
    $(el).fadeIn();
  } else {
    $(el).fadeOut();
  }
  document.querySelectorAll(el).forEach(function (element, index) {
    element.addEventListener('click', function () {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }, {
      once: true
    });
  });
};

// Add scroll class on scroll/load
var $window = $(window);
var $body = $('body');
$window.on("scroll load", function () {
  if ($window.scrollTop() > 100) {
    $body.addClass("scrolled");
  } else {
    //remove the background property so it comes transparent again (defined in your css)
    $body.removeClass("scrolled");
  }
});
var countStart = function countStart() {
  var counters = document.querySelectorAll('.js-count-up');
  counters.forEach(function (item) {
    var value = item.dataset.value;
    var decOptions = {
      decimalPlaces: 1
    };
    if (value.indexOf('.') >= 0) {
      var counter = new countup_js__WEBPACK_IMPORTED_MODULE_1__.CountUp(item, value, decOptions);
      counter.start();
    } else {
      var _counter = new countup_js__WEBPACK_IMPORTED_MODULE_1__.CountUp(item, value);
      _counter.start();
    }
  });
};

// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('.header').outerHeight();
var $header = $('.header');
$(window).scroll(function (event) {
  didScroll = true;
});
setInterval(function () {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 250);
function hasScrolled() {
  var st = $(window).scrollTop();
  // Make sure they scroll more than delta
  if (Math.abs(lastScrollTop - st) <= delta) return;

  // If they scrolled down and are past the navbar, add class .nav-up.
  // This is necessary so you never see what is "behind" the navbar.
  if (st > lastScrollTop && st > navbarHeight) {
    // Scroll Down
    $('.header').addClass('-fade-out');
  } else {
    // Scroll Up
    if (st + $(window).height() < $(document).height()) {
      $('.header').removeClass('-fade-out');
    }
  }
  lastScrollTop = st;
}
$(function () {
  aos__WEBPACK_IMPORTED_MODULE_4___default().init({
    once: true,
    duration: 1000,
    startEvent: 'load',
    disableMutationObserver: false
  });
  aos__WEBPACK_IMPORTED_MODULE_4___default().refresh(true);

  // Get CSS variables
  var root = getComputedStyle(document.documentElement);
  var colorPrimary = root.getPropertyValue('--primary');
  var colorSecondary = root.getPropertyValue('--secondary');
  var xsBreakpoint = root.getPropertyValue('--breakpoint-xs').replace('px', '');
  var smBreakpoint = root.getPropertyValue('--breakpoint-sm').replace('px', '');
  var mdBreakpoint = root.getPropertyValue('--breakpoint-md').replace('px', '');
  var lgBreakpoint = root.getPropertyValue('--breakpoint-lg').replace('px', '');
  var xlBreakpoint = root.getPropertyValue('--breakpoint-xl').replace('px', '');
  var navCollapsible = document.getElementById('navbar');
  var $body = $('body');

  // Move modal to body if nested
  $('.move-body').appendTo('body');

  // Enable select2
  $('select').select2({
    selectionCssClass: ':all:',
    minimumResultsForSearch: 15
  });

  // Video player
  if ($('div[data-id="vimeo-video"]').length && $('iframe[data-id="vimeo-video"]').length) {
    $('.video').each(function () {
      var vimeoPlayer = new _vimeo_player__WEBPACK_IMPORTED_MODULE_2__["default"]($(this).find('iframe'));
      var $vimeoPlayButton = $(this).find('div[data-id="vimeo-video"]');
      $(this).on('click', function () {
        vimeoPlayer.play();
        $vimeoPlayButton.hide();
      });
      vimeoPlayer.on('pause', function () {
        $vimeoPlayButton.show();
      });
    });
  }

  // Count up on scroll to
  if ($('.stats').length) {
    var callback = function callback(entries, observer) {
      entries.forEach(function (entry) {
        return countStart('.stats');
      });
    };
    var observer = new IntersectionObserver(callback);
    var target = document.querySelector('.stats');
    observer.observe(target);
  }

  // Smooth scroll to
  $('.nav-link').on('click', function () {
    if (!$(this).hasClass("dropdown-toggle")) {
      var $link = $('.nav-link');
      var sectionTo = $(this).attr('href').replace(new RegExp('/', ''), "");
      var header = $('.header').height();
      var navbar = $('#navbar');
      var $this = $(this);
      $link.removeClass('active');
      $this.addClass('active');
      $(navbar).collapse('hide');
      var href = $this.attr('href');
      if (href !== '#global-hubspot-capture') {
        $('html,body').animate({
          scrollTop: $(sectionTo).offset().top - header
        }, 500);
      }
    }
  });
  window.addEventListener('scroll', function () {
    backToTop('#back2top');
  });
  if (navCollapsible) {
    navCollapsible.addEventListener('shown.bs.collapse', function (event) {
      $body.addClass('nav-open');
    });
    navCollapsible.addEventListener('show.bs.collapse', function (event) {
      $header.addClass('-nav-show');
    });
    navCollapsible.addEventListener('hidden.bs.collapse', function (event) {
      if ($body.hasClass('nav-open')) {
        $body.removeClass('nav-open');
        $header.removeClass('-nav-show');
      }
    });
  }

  // Filtering type
  var $types = $('[data-filter="type"]');
  var checkboxHandler = function checkboxHandler($checkboxes) {
    var $self = $(this);

    // Prevent multiple selections of all and something else
    if ($self.is(':checked')) {
      if ($self.val() === 'all') {
        // We just checked "all" so uncheck everything else
        $checkboxes.filter('[value!=all]').prop('checked', false);
      } else {
        // We just checked one of the other types, so uncheck "all"
        $checkboxes.filter('[value=all]').prop('checked', false);
      }
    }

    // Prevent nothing from being checked at all
    if (!$checkboxes.filter(':checked').length) {
      $checkboxes.filter('[value=all]').prop('checked', true);
    }

    // Process resulting checkbox states to generate jq selectors
    var typesFilter = [];
    $types.filter(':checked').each(function () {
      typesFilter.push($(this).val());
    });
    var typesQuery = typesFilter.join();
    var currentPath = window.location.pathname,
      currentQuerystring = window.location.search.replace('?', '');
    var newQuerystring = '';
    if (typesQuery !== 'all') {
      var qs = "types=".concat(typesQuery);
      if (currentQuerystring.match(/types=[^&]+/)) {
        newQuerystring = currentQuerystring.replace(/types=[^&]+/, qs);
      } else if (currentQuerystring === '') {
        newQuerystring = qs;
      } else {
        newQuerystring = "".concat(currentQuerystring, "&").concat(qs);
      }
    } else {
      newQuerystring = currentQuerystring.replace(/types=[^&]+/, '');
    }
    window.location.href = "".concat(currentPath, "?").concat(newQuerystring);
  };
  $types.on('change', function () {
    checkboxHandler.call(this, $types);
  });

  // image hotspot custom popover
  var list = [].slice.call(document.querySelectorAll('.image-hotspot [data-bs-toggle="popover"]'));
  list.map(function (el) {
    var opts = {
      animation: true
    };
    if (el.hasAttribute('data-bs-content-id')) {
      opts.content = document.getElementById(el.getAttribute('data-bs-content-id')).innerHTML;
    }
    new bootstrap__WEBPACK_IMPORTED_MODULE_0__.Popover(el, opts);
  });

  // image hotspot close button for popover
  $(document).on('click', '.popover .close-popover', function () {
    var popoverId = $(this).closest('.popover').attr('id');
    $('.image-hotspot [data-bs-toggle="popover"][aria-describedby="' + popoverId + '"]').popover('hide');
  });
  $('.area-coords').on('click', function (e) {
    $('.area-coords').not(this).popover('hide');
  });
  $('.hero-capture-modal').on('show.bs.modal', function (e) {
    var getFormId = $(this).data('form-id');
    var getHref = $(this).data('href');
    $('html').css('overflow-x', 'unset');
    $('#app').css('overflow-x', 'hidden');

    // hubspot callback
    window.addEventListener('message', function (event) {
      if (event.data.type === 'hsFormCallback' && event.data.eventName === 'onFormSubmitted') {
        setPopupCaptureCookie("hbspt_form_id_".concat(getFormId), 'accepted', 1);
        window.location.href = "".concat(getHref);
      }
    });
  });

  // trigger global hubspot modal
  $('a').on('click', function (event) {
    var href = $(this).attr('href');
    if (href === '#global-hubspot-capture') {
      event.preventDefault();
      $('.global-hubspot-modal-capture').modal('show');
    }
  });
  $('.global-hubspot-modal-capture').on('show.bs.modal', function (e) {
    var getFormId = $(this).data('form-id');
    var getHref = $(this).data('href');
    var cookieName = "global_hubspot_hbspt_form_id_".concat(getFormId);
    $('html').css('overflow-x', 'unset');
    $('#app').css('overflow-x', 'hidden');

    // hubspot callback
    window.addEventListener('message', function (event) {
      if (event.data.type === 'hsFormCallback' && event.data.eventName === 'onFormSubmitted') {
        // setPopupCaptureCookie(cookieName, 'accepted', 1);
        $('.global-hubspot-modal-capture').modal('hide');
        // window.location.href = `${getHref}`;
      }
    });
  });

  $('.search-modal').on('show.bs.modal', function (e) {
    $('html').css('overflow-x', 'unset');
    $('#app').css('overflow-x', 'hidden');
  });
  $('.global-hubspot__modal, .capture__popup-modal, .search-modal').on('hidden.bs.modal', function (e) {
    $('html').css('overflow-x', '');
    $('#app').css('overflow-x', '');
  });
});
window.addEventListener('load', function () {
  backToTop('#back2top');
  var lazyObj = window.lazySizes;
  var isLazyObj = typeof lazyObj !== 'undefined' ? true : false;
  var imgs = document.querySelectorAll('img.lazyload');
  imgs.forEach(function (img) {
    if (isLazyObj) lazyObj.loader.unveil(img);
  });
}, false);
function getPopupCaptureCookie(cname) {
  var name = cname + '=';
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
}
function setPopupCaptureCookie(name, value, days) {
  var expires = '';
  if (days) {
    var date = new Date();
    date.setMonth(date.getMonth() + 12);
    expires = '; expires=' + date;
  }
  document.cookie = name + '=' + (value || '') + expires + '; path=/; samesite=strict;';
}

/***/ }),

/***/ "./resources/scripts/digitaltrends.js":
/*!********************************************!*\
  !*** ./resources/scripts/digitaltrends.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "jquery");
/**
 * Digital Trends 2025
 */

$(function () {
  var container = document.querySelector('.digital-trends__wrapper');

  // Convert normal scroll to sideways scroll
  if ($('.digital-trends__wrapper').length) {
    container.addEventListener('wheel', function (event) {
      event.preventDefault();
      container.scrollLeft += event.deltaY;
    });
    var isDown = false;
    var startX;
    var scrollLeft;
    container.addEventListener('mousedown', function (e) {
      isDown = true;
      startX = e.pageX - container.offsetLeft;
      scrollLeft = container.scrollLeft;
      container.style.cursor = 'grabbing'; // Change cursor to indicate dragging
    });

    container.addEventListener('mouseleave', function () {
      isDown = false;
      container.style.cursor = 'grab';
    });
    container.addEventListener('mouseup', function () {
      isDown = false;
      container.style.cursor = 'grab';
    });
    container.addEventListener('mousemove', function (e) {
      if (!isDown) return; // Stop the function if mouse is not held down
      e.preventDefault();
      var x = e.pageX - container.offsetLeft;
      var walk = x - startX;
      container.scrollLeft = scrollLeft - walk;
    });
    container.addEventListener('scroll', function () {
      if ($('.digital-trends__header').length) {
        if (container.scrollLeft > 0) {
          $('.digital-trends__header').fadeOut(500);
          $('body').addClass('scrolled'); // Add class when scroll position is greater than zero
        } else {
          $('.digital-trends__header').fadeIn(500);
          $('body').removeClass('scrolled'); // Remove class when scroll position is back to zero
        }
      }
    });
  }
});

/***/ }),

/***/ "./resources/scripts/parallax.js":
/*!***************************************!*\
  !*** ./resources/scripts/parallax.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "jquery");
$(function () {
  $(window).scroll(function () {
    $('[data-parallax]').each(function () {
      var $this = $(this);
      var amount = $this.data('parallax-amount');
      var windowTop = $(window).scrollTop();
      var top = $this.offset().top;
      if ($this.data('parallax') == 'top') {
        $this.css({
          'transform': 'translate3d(0, -' + windowTop * amount + "px" + ', 0)'
        });
      } else {
        $this.css({
          'transform': 'translate3d(0, -' + (top - windowTop) * amount + "px" + ', 0)'
        });
      }
    });
  });
});

/***/ }),

/***/ "./resources/scripts/people.js":
/*!*************************************!*\
  !*** ./resources/scripts/people.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "jquery");
$(function () {
  $('.people__nav div:first-child a[data-filter]').addClass('active');
  var teamFilterFirst = $('.people__nav div:first-child a[data-filter]').attr('data-filter');
  $('[data-teams]').hide();
  $("[data-teams*=\"".concat(teamFilterFirst, "\"]")).show();

  // Apply flex order fix
  fixFlexOrder();
  $('a[data-filter]').on('click', function () {
    // Close any stray open person dropdowns
    $('section.people .collapse').collapse('hide');

    // Hide everything
    $('[data-teams]').hide();

    // Remove active class to link if it has one
    $('a[data-filter]').removeClass('active');

    // Add active class to link
    $(this).addClass('active');

    // Show according to filters
    var teamFilter = $(this).attr('data-filter');
    $("[data-teams*=\"".concat(teamFilter, "\"]")).show();

    // Re-apply flex order fix
    fixFlexOrder();
  });
});
var SNAP_LG = 992;
var SNAP_SM = 767;

/**
 * Fixes the flex order so the people dropdown appears in the right place.
 */
var fixFlexOrder = function fixFlexOrder() {
  $('.people').each(function () {
    var j = 0;
    $(this).find('.js-flex-reorder>.js-flex-panel').each(function (i, el) {
      var $panel = $(el);
      var $dropdown = $(el).next();
      var windowWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
      var divisor = windowWidth > SNAP_LG ? 3 : windowWidth < SNAP_SM ? 1 : 2;
      var rowOrder = Math.ceil((j + 1) / divisor);
      if ($panel.is(':visible')) {
        // Fix flex
        $panel.css('order', rowOrder).addClass('is-number-' + (j + 1));
        $dropdown.css('order', rowOrder + 1);
        j++;
      } else {
        // Reset everything else to zero
        $panel.css('order', 0);
        $dropdown.css('order', 0);
      }
    });
  });
};

/***/ }),

/***/ "./resources/scripts/service-links.js":
/*!********************************************!*\
  !*** ./resources/scripts/service-links.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "jquery");
$(function () {
  var $link = $('.service-links__link');
  var $image = $('.service-links__image').data('id');
  var url = location.href;
  $link.hover(function () {
    var $link_hover = $(this).data('hover');
    var id = $('#' + $link_hover);
    $('.service-links__image').hide();
    $(id).removeClass('aos-animate');
    $(id).show();
    $(id).addClass('aos-animate');
  });
  $link.each(function () {
    var $this = $(this);
    if ($this.attr('href') == url) {
      $this.addClass('hide');
    }
  });
});

/***/ }),

/***/ "./resources/scripts/slider.js":
/*!*************************************!*\
  !*** ./resources/scripts/slider.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/css */ "./node_modules/swiper/swiper.min.css");
/* harmony import */ var swiper_css_scrollbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/css/scrollbar */ "./node_modules/swiper/modules/scrollbar/scrollbar.min.css");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "jquery");



swiper__WEBPACK_IMPORTED_MODULE_0__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_0__.Navigation, swiper__WEBPACK_IMPORTED_MODULE_0__.Grid, swiper__WEBPACK_IMPORTED_MODULE_0__.Pagination, swiper__WEBPACK_IMPORTED_MODULE_0__.Scrollbar]);
$(function () {
  var clientsSliderRows = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.clients-slider.-rows .swiper', {
    slidesPerView: 2.5,
    slidesPerGroup: 2,
    spaceBetween: 16,
    breakpoints: {
      768: {
        slidesPerView: 5,
        spaceBetween: 24
      }
    },
    grid: {
      rows: 2,
      fill: "row"
    },
    scrollbar: {
      el: '.swiper-scrollbar'
    }
  });
  var clientsSlider = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.clients-slider.-norows .swiper', {
    slidesPerView: 2.5,
    spaceBetween: 24,
    breakpoints: {
      768: {
        slidesPerView: 5,
        spaceBetween: 24
      }
    },
    scrollbar: {
      el: '.swiper-scrollbar'
    }
  });
  var insightsSlider = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.insights-slider.-enable .swiper', {
    slidesPerView: 1,
    loop: true,
    touchReleaseOnEdges: true,
    pagination: {
      type: "custom",
      el: '.swiper-pagination',
      renderCustom: function renderCustom(swiper, current, total) {
        return '<span class="swiper-pagination-number">' + current + '</span><span class="swiper-pagination-divider"></span><span class="swiper-pagination-number">' + total + '</span>';
      }
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  });
});

/***/ }),

/***/ "./resources/styles/app.scss":
/*!***********************************!*\
  !*** ./resources/styles/app.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/styles/digital-trends.scss":
/*!**********************************************!*\
  !*** ./resources/styles/digital-trends.scss ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/styles/editor.scss":
/*!**************************************!*\
  !*** ./resources/styles/editor.scss ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/styles/print.scss":
/*!*************************************!*\
  !*** ./resources/styles/print.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = window["jQuery"];

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["styles/print","styles/editor","styles/digital-trends","styles/app","/scripts/vendor"], () => (__webpack_exec__("./resources/scripts/app.js"), __webpack_exec__("./resources/styles/app.scss"), __webpack_exec__("./resources/styles/digital-trends.scss"), __webpack_exec__("./resources/styles/editor.scss"), __webpack_exec__("./resources/styles/print.scss")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=app.js.map