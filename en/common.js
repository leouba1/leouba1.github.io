(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "+ntD":
/*!**************************************************************!*\
  !*** ./node_modules/@se/web-ui/esm/arrow2_right-506c18fe.js ***!
  \**************************************************************/
/*! exports provided: a */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return arrow2Right; });
const arrow2Right = `<?xml version="1.0" encoding="utf-8"?>
<!-- Generator: Adobe Illustrator 23.0.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<svg version="1.1"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 1024 1024" style="enable-background:new 0 0 1024 1024;" xml:space="preserve">
<path d="M461.8,657.5c-8,8-22,8-30,0c-4-4-6-10-6-15c0-6,2-11,6-15l115-115l-115-116c-4-4-6-9-6-15c0-5,2-11,6-15c8-8,22-8,30,0
	l130,130c8,9,8,22,0,31L461.8,657.5z"/>
</svg>
`;




/***/ }),

/***/ "7Xdj":
/*!***********************************************************!*\
  !*** ./node_modules/@se/web-ui/esm/arrow2_up-7bd71b43.js ***!
  \***********************************************************/
/*! exports provided: a */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return arrow2Up; });
const arrow2Up = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path d="M657 562c8 8 8 22 0 30-4 4-10 6-15 6-6 0-11-2-15-6L512 477 396 592c-4 4-9 6-15 6-5 0-11-2-15-6-8-8-8-22 0-30l130-130c9-8 22-8 31 0z"/></svg>`;




/***/ }),

/***/ "gE1X":
/*!*************************************************************!*\
  !*** ./node_modules/@se/web-ui/esm/arrow5_step-6461af03.js ***!
  \*************************************************************/
/*! exports provided: a */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return arrowStep; });
const arrowStep = `<?xml version="1.0" encoding="utf-8"?>
<!-- Generator: Adobe Illustrator 24.0.3, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 1024 1024" style="enable-background:new 0 0 1024 1024;" xml:space="preserve">
<path d="M316.4,893.4c-5.8,0-11.6-2.3-15.8-6.9c-8-8.7-7.5-22.3,1.2-30.4L676.1,511L301.7,165.7c-8.7-8-9.3-21.7-1.2-30.4
	c8.1-8.7,21.7-9.3,30.4-1.2l391.5,361.1c4.4,4.1,6.9,9.8,6.9,15.8s-2.5,11.7-6.9,15.8L330.9,887.7
	C326.8,891.5,321.6,893.4,316.4,893.4z"/>
</svg>
`;




/***/ }),

/***/ "i0Ke":
/*!*********************************************************!*\
  !*** ./node_modules/@se/web-ui/esm/appInfo-0ca6521d.js ***!
  \*********************************************************/
/*! exports provided: A */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return AppInfo; });
const AppInfo = {
  link: 'www.schneider-electric.com',
  domain: 'ecostruxure',
  copyright: 'This application is protected by copyright law and international treaties. © 2020 Schneider Electric Industries SAS. All Rights Reserved.',
};




/***/ }),

/***/ "kXjD":
/*!*******************************************************!*\
  !*** ./node_modules/@se/web-ui/esm/utils-7cccd915.js ***!
  \*******************************************************/
/*! exports provided: a, b, g, i */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isTouchDevice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getFullCopyright; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getFullTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return isVisible; });
function getFullTitle(appTitle) {
  let last = '';
  let first = '';
  if (appTitle && appTitle.length) {
    const titleArray = appTitle.split(' ');
    if (titleArray.length > 1) {
      last = titleArray.pop();
    }
    first = titleArray.length ? titleArray.join(' ') : '';
  }
  return {
    first,
    last,
  };
}
function getFullCopyright(copyright) {
  let last = '';
  let first = '';
  if (copyright && copyright.length) {
    const titleArray = copyright.split(' ©');
    if (titleArray.length > 1) {
      last = '©' + titleArray.pop();
    }
    first = titleArray.length ? titleArray.join(' ') : '';
  }
  return {
    first,
    last,
  };
}
function isVisible(el, screenReader, recursed) {
  let style = void 0;
  const nodeName = el.nodeName.toUpperCase();
  const parent = el.parentNode;
  // 9 === Node.DOCUMENT
  if (nodeName === 'SE-LIST') {
    return true;
  }
  style = window.getComputedStyle(el, null);
  if (style === null) {
    return false;
  }
  const hasNoHeight = !el.offsetParent;
  const isDisplayNone = style.getPropertyValue('display') === 'none';
  const isInvisibleTag = nodeName.toUpperCase() === 'STYLE' || nodeName.toUpperCase() === 'SCRIPT';
  const srHidden = screenReader && el.getAttribute('aria-hidden') === 'true';
  const isInvisible = !recursed && style.getPropertyValue('visibility') === 'hidden';
  if (hasNoHeight ||
    isDisplayNone ||
    isInvisibleTag ||
    srHidden ||
    isInvisible) {
    return false;
  }
  if (parent) {
    return isVisible(parent, screenReader, true);
  }
  return false;
}
function isTouchDevice() {
  return (!!(typeof window !== 'undefined' &&
    ('ontouchstart' in window ||
      (window['DocumentTouch'] &&
        typeof document !== 'undefined' &&
        document instanceof window['DocumentTouch']))) ||
    !!(typeof navigator !== 'undefined' &&
      (navigator.maxTouchPoints || navigator.msMaxTouchPoints)));
}




/***/ }),

/***/ "l3Vg":
/*!*********************************************************************!*\
  !*** ./node_modules/@se/web-ui/esm/action_delete_cross-95261586.js ***!
  \*********************************************************************/
/*! exports provided: a */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return action_delete_cross; });
const action_delete_cross = `<?xml version="1.0" encoding="utf-8"?>
<!-- Generator: Adobe Illustrator 23.0.4, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<svg version="1.1"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 1024 1024" style="enable-background:new 0 0 1024 1024;" xml:space="preserve">
<path d="M512.1,128.1c-212,0-384.1,172-384.1,383.9c0,212.2,172.1,383.9,384.1,383.9C724.2,895.9,896,724.2,896,512
	C896,300.1,724.2,128.1,512.1,128.1z M674.6,674.7c-13.5,13.5-35.3,13.5-48.8,0c0,0,0,0,0,0L511.9,560.9L398.2,674.7
	c-13.5,13.5-35.4,13.5-48.9,0c-13.4-13.5-13.4-35.4,0-48.9L463.1,512L349.3,398.2c-13.3-13.7-12.9-35.6,0.8-48.9
	c13.4-13,34.7-13,48.1,0l113.7,113.8l113.8-113.8c13.5-13.5,35.4-13.5,48.9,0c13.5,13.5,13.5,35.4,0,48.9L560.8,512l113.8,113.8
	c13.5,13.4,13.6,35.3,0.2,48.8C674.7,674.6,674.7,674.6,674.6,674.7z"/>
</svg>
`;




/***/ }),

/***/ "plqL":
/*!************************************************************!*\
  !*** ./node_modules/@se/web-ui/esm/arrow4_top-60e86734.js ***!
  \************************************************************/
/*! exports provided: a */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return arrow4Top; });
const arrow4Top = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><g ><path d="M872.8,487.9,557.61,172.7a64.57,64.57,0,0,0-91.22,0L151.2,487.9a21.5,21.5,0,1,0,30.4,30.4L490.5,209.41V894.5a21.5,21.5,0,0,0,43,0V209.41L842.4,518.3a21.5,21.5,0,0,0,30.4-30.4Z"/></g></svg>`;




/***/ })

}]);
//# sourceMappingURL=common.js.map