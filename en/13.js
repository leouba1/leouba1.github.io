(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "S734":
/*!***********************************************************!*\
  !*** ./node_modules/@se/web-ui/esm/se-icon-file.entry.js ***!
  \***********************************************************/
/*! exports provided: se_icon_file */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "se_icon_file", function() { return IconFileComponent; });
/* harmony import */ var _index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-3d6c5e6f.js */ "0Adb");


const iconFileCss = ".text{font-size:220px;font-weight:bold}";

const IconFileComponent = class {
  constructor(hostRef) {
    Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    /**
     * Optional property that defines if the button is disabled.  Set to `false` by default.
     */
    this.disabled = false;
  }
  render() {
    // Limit text to 4 char
    const text = this.value.slice(0, 4);
    return (Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("se-icon", { size: this.size, disabled: this.disabled, color: this.color }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("svg", { width: "100%", height: "100%", viewBox: "0 0 1024 1024", version: "1.1", xmlns: "http://www.w3.org/2000/svg" }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("defs", null, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("mask", { id: "cut-off-text" }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("rect", { width: "100%", height: "100%", fill: "white" }), Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("text", { x: "50%", y: "62%", fill: "black", "dominant-baseline": "middle", "text-anchor": "middle", class: "text" }, text))), Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { d: "M810,469L832,469C855,469 875,488 874,512L874,725C874,749 855,768 832,768L810,768L810,875C810,886 800,896 788,896L234,896C222,896 212,886 212,875L212,768L191,768C167,768 148,749 148,725L148,512C148,488 167,469 191,469L213,469L213,149C213,138 223,128 235,128L596,128C602,128 608,130 613,134L803,326C807,330 810,336 810,341L810,469ZM767,469L767,363L596,363C585,363 575,353 575,341L575,171L255,171L255,469L767,469ZM618,201L618,317L735,317L618,201ZM767,853L767,768L255,768L255,853L767,853Z", mask: "url(#cut-off-text)", fill: "currentcolor" }))));
  }
};
IconFileComponent.style = iconFileCss;




/***/ })

}]);
//# sourceMappingURL=13.js.map