(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "ENY/":
/*!******************************************************!*\
  !*** ./node_modules/@se/web-ui/esm/se-link.entry.js ***!
  \******************************************************/
/*! exports provided: se_link */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "se_link", function() { return LinkComponent; });
/* harmony import */ var _index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-3d6c5e6f.js */ "0Adb");


const linkCss = "@charset \"UTF-8\";a{font-size:inherit;margin:4px;line-height:inherit;display:inline-block;outline:none;cursor:pointer;color:#0087cd;color:var(--se-information, #0087cd);text-decoration:none;-webkit-transition-property:outline-width;transition-property:outline-width;-webkit-transition-duration:0.2s;transition-duration:0.2s}a.external:after{content:\" > \"}a:hover{text-decoration:underline;color:rgba(0, 135, 205, 0.3)}a:visited{color:#3a738c;color:var(--se-link-visited, #3a738c)}a:focus{outline-width:2px;outline-color:#007acd;outline-color:var(--se-button-focus, #007acd);outline-style:solid}a[data-disabled]{pointer-events:none;opacity:0.5}:host(.sidemenu-link) a{font-size:16px}";

const LinkComponent = class {
  constructor(hostRef) {
    Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    /**
     * Adds visual and function properties to your link component.
     * The default setting is `internal`, which redirects you to the specified URL in the same page.
     * The `external` setting adds an underline and ">" icon to the link, and opens the link in a new web browser tab.
     */
    this.option = 'internal';
  }
  render() {
    return (Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["H"], { onClick: () => this.el.blur() }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", { href: this.url, "data-disabled": this.disabled, class: this.option === 'external' ? 'external' : '', target: this.option === 'external' ? '_blank' : '', download: this.download }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null))));
  }
  get el() { return Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); }
};
LinkComponent.style = linkCss;




/***/ })

}]);
//# sourceMappingURL=14.js.map