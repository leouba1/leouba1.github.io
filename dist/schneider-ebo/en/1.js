(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "TFxg":
/*!*******************************************************!*\
  !*** ./node_modules/@se/web-ui/esm/se-about.entry.js ***!
  \*******************************************************/
/*! exports provided: se_about */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "se_about", function() { return AboutComponent; });
/* harmony import */ var _index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-3d6c5e6f.js */ "0Adb");
/* harmony import */ var _utils_7cccd915_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils-7cccd915.js */ "kXjD");
/* harmony import */ var _appInfo_0ca6521d_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./appInfo-0ca6521d.js */ "i0Ke");




const aboutCss = ":host{position:absolute;top:0;bottom:0;left:0;right:0}.about-section-wrapper{position:absolute;top:0;bottom:0;left:0;right:0;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-direction:normal;-webkit-box-orient:vertical;-webkit-flex-direction:column;-moz-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:end;-moz-box-pack:end;-ms-flex-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;padding-bottom:100px}.information{color:#ffffff;color:var(--se-primary-contrast, #ffffff);background-color:#3dcd58;background-color:var(--se-primary, #3dcd58);padding:32px 64px 21px}.information .header-title{font-size:40px;font-weight:600;line-height:1;padding:0;margin:0}.information .header-title span{display:inline-block}.information .header-title .light{font-weight:300}.information .version{margin-top:12px;margin-bottom:26px;line-height:19px}.information .copyright-info-first,.information .copyright-info-last{font-size:12px;line-height:14px}.image-container{position:absolute;top:0;bottom:0;left:0;right:0;width:100%;height:100%;overflow:hidden;position:relative;transform:translate3d(0, 0, 0);-webkit-transform:translate3d(0, 0, 0)}.image-background{position:absolute;width:102%;height:102%;left:-2px;top:-2px;background-position:center, center;background-repeat:no-repeat;background-origin:content-box;background-size:cover}se-icon-ecostruxure img{background-color:#ffffff;background-color:var(--se-background-alternative, #ffffff);padding:0 8px;margin-bottom:8px}";

const AboutComponent = class {
  constructor(hostRef) {
    Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    /**
     * The domain you want to display.  If set to `ecostruxure`, it renders an EcoStruxure icon.
     */
    this.domain = _appInfo_0ca6521d_js__WEBPACK_IMPORTED_MODULE_2__["A"].domain;
    /**
     * The copyright you would like to display.
     */
    this.copyright = _appInfo_0ca6521d_js__WEBPACK_IMPORTED_MODULE_2__["A"].copyright;
  }
  render() {
    const title = Object(_utils_7cccd915_js__WEBPACK_IMPORTED_MODULE_1__["g"])(this.appTitle);
    const fullCopyright = Object(_utils_7cccd915_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this.copyright);
    let domain;
    if (this.domain.toLowerCase() === `ecostruxure`) {
      domain = (Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("se-icon-ecostruxure", { size: "medium", color: "inherited" }));
    }
    else if (this.domain.toLowerCase() !== 'none') {
      domain = Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "header-title-type" }, this.domain);
    }
    return [
      Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "image-container" }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "image-background", style: { backgroundImage: this.imageUrl } })),
      Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "about-section-wrapper" }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "information" }, domain, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("h1", { class: "header-title" }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, title.first), Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "light" }, "\u00A0", title.last)), Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p", { class: "version" }, "Version ", this.version), Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "custom-info" }), Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "copyright-info-first" }, fullCopyright.first), Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "copyright-info-last" }, fullCopyright.last))),
    ];
  }
};
AboutComponent.style = aboutCss;




/***/ })

}]);
//# sourceMappingURL=1.js.map