(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "+mX2":
/*!****************************************************************!*\
  !*** ./node_modules/@se/web-ui/esm/se-authentication.entry.js ***!
  \****************************************************************/
/*! exports provided: se_authentication */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "se_authentication", function() { return AuthenticationComponent; });
/* harmony import */ var _index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-3d6c5e6f.js */ "0Adb");
/* harmony import */ var _utils_7cccd915_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils-7cccd915.js */ "kXjD");
/* harmony import */ var _appInfo_0ca6521d_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./appInfo-0ca6521d.js */ "i0Ke");




const authenticationCss = ".se-authentication{position:absolute;top:0;bottom:0;left:0;right:0;background-color:#f7f7f7;background-color:var(--se-background-standard, #f7f7f7);z-index:300}.se-authentication.hide{display:none}.content-wrapper{display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-direction:normal;-webkit-box-orient:vertical;-webkit-flex-direction:column;-moz-flex-direction:column;-ms-flex-direction:column;flex-direction:column;position:relative;-ms-flex-pack:justify;justify-content:space-between;overflow:hidden;padding:0;-webkit-box-shadow:0 1px 1px 1px #c2c2c2;box-shadow:0 1px 1px 1px #c2c2c2}@media only screen and (min-width: 600px){.content-wrapper{margin:18px auto;max-width:960px;min-height:575px;height:auto}}.header-title{color:#3dcd58;color:var(--se-primary, #3dcd58);padding-left:18px;font-size:20px;line-height:20px;margin:0}.image-container{position:absolute;top:0;bottom:0;left:0;right:0;width:100%;height:100%;overflow:hidden;transform:translate3d(0, 0, 0);-webkit-transform:translate3d(0, 0, 0)}.image-background{position:absolute;width:102%;height:102%;left:-2px;top:-2px;background-position:center, center;background-repeat:no-repeat;background-origin:content-box;background-size:cover}.login-container{height:100%;z-index:1;background-color:#ffffff;background-color:var(--se-background-alternative, #ffffff);display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-direction:normal;-webkit-box-orient:horizontal;-webkit-flex-direction:row;-moz-flex-direction:row;-ms-flex-direction:row;flex-direction:row}main{height:36.5%;overflow:hidden;-webkit-box-flex:1;-webkit-flex:1 1 auto;-moz-box-flex:1;-moz-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-direction:normal;-webkit-box-orient:vertical;-webkit-flex-direction:column;-moz-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:end;-moz-box-pack:end;-ms-flex-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end}@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none){main{-webkit-box-flex:0;-webkit-flex:0 0 auto;-moz-box-flex:0;-moz-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;min-height:210px}}main .green-bars{z-index:2;-webkit-box-direction:normal;-webkit-box-orient:vertical;-webkit-flex-direction:column;-moz-flex-direction:column;-ms-flex-direction:column;flex-direction:column;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-flex:0;-webkit-flex:0 0 36.5%;-moz-box-flex:0;-moz-flex:0 0 36.5%;-ms-flex:0 0 36.5%;flex:0 0 36.5%}main .dark-green-bar,main .light-green-bar{background-color:#3dcd58;background-color:var(--se-primary, #3dcd58);height:40px;-webkit-box-flex:1;-webkit-flex:1 1 auto;-moz-box-flex:1;-moz-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto}main .dark-green-bar{opacity:0.5}.information,.form{overflow:hidden;z-index:2;-webkit-box-flex:1;-webkit-flex:1 1 auto;-moz-box-flex:1;-moz-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;-webkit-box-direction:normal;-webkit-box-orient:vertical;-webkit-flex-direction:column;-moz-flex-direction:column;-ms-flex-direction:column;flex-direction:column;display:-ms-flexbox;display:-webkit-flex;display:flex}.form{padding:0 60px;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-pack:center;-moz-box-pack:center;-ms-flex-pack:center;-webkit-justify-content:center;justify-content:center;max-width:300px}.information{padding:60px;padding-right:0;-webkit-box-pack:end;-moz-box-pack:end;-ms-flex-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;color:#3dcd58;color:var(--se-primary, #3dcd58)}.information .header-title{font-size:40px;padding-top:14px;padding-bottom:24px;padding-left:0}.information .header-title .light{font-weight:300}footer{height:17%;overflow:hidden;color:#ffffff;font-size:14px;z-index:2;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-flex:0;-webkit-flex:0 0 auto;-moz-box-flex:0;-moz-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;-moz-align-items:center;align-items:center;-webkit-box-pack:justify;-moz-box-pack:justify;-ms-flex-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}footer .copyright-note{margin-left:25px;max-width:450px}footer .footer-logo{text-align:right;-webkit-box-flex:auto;-webkit-flex:auto 1 auto;-moz-box-flex:auto;-moz-flex:auto 1 auto;-ms-flex:auto 1 auto;flex:auto 1 auto;max-width:300px}@media only screen and (min-width: 600px){.footer-logo{margin-right:25px}}";

const AuthenticationComponent = class {
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
    /**
     * If set to `true`, this will hide the authentication screen.
     */
    this.hide = false;
  }
  renderAuthentication() {
    const title = Object(_utils_7cccd915_js__WEBPACK_IMPORTED_MODULE_1__["g"])(this.appTitle);
    let domain;
    if (this.domain.toLowerCase() === `ecostruxure`) {
      domain = Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("se-icon-ecostruxure", { size: "medium" });
    }
    else if (this.domain.toLowerCase() !== 'none') {
      domain = Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "header-title-type" }, this.domain);
    }
    return (Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "content-wrapper" }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "image-container" }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("img", { class: "image-background", style: { backgroundImage: this.imageUrl } })), Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("main", null, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "green-bars" }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "dark-green-bar" }), Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "light-green-bar" }))), Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "login-container" }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "information" }, domain, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("h1", { class: "header-title" }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, title.first), Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "light" }, "\u00A0", title.last)), Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p", { class: "version" }, "version ", this.version)), Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "form" }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null))), Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("footer", null, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "copyright-note" }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, this.copyright)), Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "footer-logo align-end" }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("se-icon-lifeison", null)))));
  }
  render() {
    return (Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: ['se-authentication', this.hide ? 'hide' : ''].join(' ') }, !this.hide ? this.renderAuthentication() : ''));
  }
};
AuthenticationComponent.style = authenticationCss;




/***/ })

}]);
//# sourceMappingURL=3.js.map