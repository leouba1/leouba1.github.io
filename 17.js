(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "rDsh":
/*!**********************************************************!*\
  !*** ./node_modules/@se/web-ui/esm/se-snackbar.entry.js ***!
  \**********************************************************/
/*! exports provided: se_snackbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "se_snackbar", function() { return SnackbarComponent; });
/* harmony import */ var _index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-3d6c5e6f.js */ "0Adb");
/* harmony import */ var _action_delete_cross_95261586_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./action_delete_cross-95261586.js */ "l3Vg");



const information_circle = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path d="M896 512c0 70-18 134-52 192s-82 106-140 140-122 52-192 52-134-18-192-52-106-82-140-140-52-122-52-192 18-134 52-192 82-106 140-140 122-52 192-52 134 18 192 52 106 82 140 140 52 122 52 192zM652 322c0-18-6-34-20-48s-30-20-48-20-34 6-48 20-20 30-20 48 6 34 20 48 30 20 48 20 34-6 48-20 20-30 20-48zm-70 362v-6c0-4-2-8-4-10-4-2-8-4-12-4-10 10-24 22-42 34s-30 18-36 18c-2 0-4-2-4-4s0-6 2-8l86-206c6-20 10-32 10-36 0-10-4-18-12-26-8-6-16-10-26-10-22 0-50 10-84 28s-62 42-84 68v2c0 4 2 8 4 10 2 4 6 6 10 8 8-8 20-18 38-30s30-18 36-18c4 0 4 4 2 12l-86 208c-6 14-10 26-10 36 0 6 4 12 12 20s16 12 26 12c30 0 62-10 96-32 34-20 60-42 78-66z"/></svg>`;

const snackbarCss = ":host{position:fixed;bottom:20px;display:none;-ms-flex-item-align:center;align-self:center;z-index:600;opacity:0;-webkit-transition:0.2s;transition:0.2s;-webkit-animation:slideDown 0.2s linear;animation:slideDown 0.2s linear}@-webkit-keyframes slideDown{0%{bottom:20px}100%{bottom:0px}}@keyframes slideDown{0%{bottom:20px}100%{bottom:0px}}:host(.show-snackbar){display:block;opacity:1;-webkit-animation:slideUp 0.2s linear;animation:slideUp 0.2s linear}@-webkit-keyframes slideUp{0%{bottom:0px}100%{bottom:20px}}@keyframes slideUp{0%{bottom:0px}100%{bottom:20px}}@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none){:host(.show-snackbar){left:0}}.information{background-color:#0087cd;background-color:var(--se-information, #0087cd);color:#ffffff;color:var(--se-information-contrast, #ffffff)}.success{background-color:#3dcd58;background-color:var(--se-success, #3dcd58);color:#ffffff;color:var(--se-success-contrast, #ffffff)}.warning{background-color:#e47f00;background-color:var(--se-warning, #e47f00);color:#0f0f0f;color:var(--se-warning-contrast, #0f0f0f)}.error{background-color:#dc0a0a;background-color:var(--se-error, #dc0a0a);color:#ffffff;color:var(--se-error-contrast, #ffffff)}.snackbar{display:-ms-flexbox;display:-webkit-flex;display:flex;color:#ffffff;color:var(--se-primary-contrast, #ffffff);font-size:16px;padding-top:8px;padding-bottom:8px;min-height:32px;-ms-flex-align:center;align-items:center}.snackbar-icon{padding-left:10px;margin-right:-6px;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;-moz-align-items:center;align-items:center}.snackbar-icon se-icon{top:1px}.message{font-size:16px;padding-right:16px;margin-left:16px}.action{cursor:pointer;font-size:14px;border:1px solid #ffffff;padding:8px 16px;margin:8px 12px 8px 0;line-height:16px;-webkit-transition:0.2s;transition:0.2s}.action:hover{background:rgba(255, 255, 255, 0.2)}.close{cursor:pointer;padding-right:10px;margin-left:-2px}.close se-icon{vertical-align:middle;top:0}";

const SHOW_SNACKBAR = 'show-snackbar';
const SnackbarComponent = class {
  constructor(hostRef) {
    Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    this.didClose = Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "didClose", 7);
    this.actionClicked = Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "actionClicked", 7);
    /**
     * Indicates the background color of your snackbar.
     * `success`: green
     * `warning`: orange
     * `error`: red
     * `information`: dark grey, default setting
     */
    this.type = 'information';
    /**
     * The name of the icon you wish to display.  The default icon is an information circle.
     */
    this.icon = 'information_circle';
    /**
     * Displays a "button" to close the snackbar.
     * The default setting is `false`.
     * This will be visible if set to `true`.
     */
    this.canClose = false;
    this.open = false;
    /**
     * Indicates the duration (in milliseconds) that the snackbar will display on screen before auto-closing, if `canClose` is set to false.
     * The default setting is 5000.
     */
    this.duration = 5000;
  }
  openDidChange() {
    if (this.open) {
      this.el.classList.add(SHOW_SNACKBAR);
      this.timeout = setTimeout(() => {
        if (!this.canClose) {
          this.closeSnackbar();
        }
      }, this.duration);
    }
  }
  closeSnackbar() {
    this.open = false;
    this.el.classList.remove(SHOW_SNACKBAR);
    this.didClose.emit();
  }
  submitData() {
    this.actionClicked.emit();
  }
  componentDidLoad() {
    this.openDidChange();
  }
  disconnectedCallback() {
    this.timeout && clearTimeout(this.timeout);
  }
  render() {
    let renderIcon = this.icon === 'information_circle' ? information_circle : this.icon;
    if (this.icon === 'none') {
      renderIcon = false;
    }
    return (Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: this.type }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "snackbar", role: "alert" }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "snackbar-icon" }, renderIcon && (Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("se-icon", null, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { innerHTML: renderIcon }))), Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "icon" })), Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "message" }, this.message, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)), this.actionText ? (Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "action", onClick: () => this.submitData() }, this.actionText)) : (''), this.canClose ? (Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "close" }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("se-icon", { onClick: () => this.closeSnackbar() }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { innerHTML: _action_delete_cross_95261586_js__WEBPACK_IMPORTED_MODULE_1__["a"] })))) : (''))));
  }
  get el() { return Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); }
  static get watchers() { return {
    "open": ["openDidChange"]
  }; }
};
SnackbarComponent.style = snackbarCss;




/***/ })

}]);
//# sourceMappingURL=17.js.map