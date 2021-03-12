(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "bcoU":
/*!*******************************************************!*\
  !*** ./node_modules/@se/web-ui/esm/se-fab_2.entry.js ***!
  \*******************************************************/
/*! exports provided: se_fab, se_fab_item */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "se_fab", function() { return FabComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "se_fab_item", function() { return FabItemComponent; });
/* harmony import */ var _index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-3d6c5e6f.js */ "0Adb");
/* harmony import */ var _arrow4_top_60e86734_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./arrow4_top-60e86734.js */ "plqL");



const notificationError = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path d="M542 512l113 113c8 8 8 22 0 30-5 4-10 6-15 6-6 0-11-2-16-6L512 542 399 655c-5 4-10 6-15 6-6 0-11-2-16-6-8-8-8-22 0-30l113-113-113-113c-8-8-8-22 0-30 9-8 22-8 31 0l113 112 112-112c9-8 22-8 31 0 8 8 8 22 0 30z"/></svg>`;

const fabCss = ".pos-top{z-index:10;position:fixed;top:76px;right:17px}.pos-top .mini-action-button{top:70px;left:12px;text-align:center}.pos-bottom{z-index:10;position:fixed;bottom:17px;right:17px}.pos-bottom .mini-action-button{bottom:55px;left:12px;text-align:center}.dialog-background{position:fixed !important;position:fixed;top:0;bottom:0;left:0;right:0;background-color:rgba(15, 15, 15, 0.4);background-color:var(--se-overlay, rgba(15, 15, 15, 0.4));z-index:9}.mini-action-button{cursor:pointer;position:absolute;display:none}se-icon{margin-right:0}.show{display:block}";

const SHOW_FAB = 'show';
const FabComponent = class {
  constructor(hostRef) {
    Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    this.closeIcon = notificationError;
    this.arrowUp = _arrow4_top_60e86734_js__WEBPACK_IMPORTED_MODULE_1__["a"];
    /**
     * Property that determines the functionality of the FAB.
     * The default setting is `speeddial`, which will show/hide a dropdown menu when clicking on the FAB.
     * The `backtotop` setting returns you to the top of the page you are viewing when clicking on the FAB.
     */
    this.option = 'speeddial';
    /**
     *  Property that determines the position of the component.
     *  The default setting is `bottom`, rendering a FAB at the bottom right corner.
     *  The `top` setting renders the FAB at the top right corner.
     */
    this.position = 'bottom';
    /**
     * Indicates the color of your main action button .
     * The Default setting is `primary` color.
     * The `alternative` button can also be used.
     */
    this.color = 'primary';
    this.showDial = false;
  }
  /**
   * Use this method to toggle (show/hide) the mini action buttons.
   */
  async toggleAction() {
    if (this.option == 'speeddial') {
      this.showDial = !this.showDial;
    }
  }
  getIcon() {
    let icon;
    switch (this.option) {
      case 'speeddial':
        icon = !this.showDial ? this.icon : this.closeIcon;
        break;
      case 'backtotop':
        icon = this.arrowUp;
        break;
    }
    return icon;
  }
  render() {
    return (Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["H"], { onClick: () => this.toggleAction() }, this.overlay && this.showDial && Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "dialog-background" }), Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: { [`pos-${this.position}`]: !!this.position, 'se-fab': true } }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("se-button", { color: this.color, "icon-only": "true", class: this.option == 'backtotop' ? 'backtotop' : '', option: "fab" }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("se-icon", { slot: "icon", size: "medium" }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { innerHTML: this.getIcon() }))), this.option === 'speeddial' ? (Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: ['mini-action-button', this.showDial ? SHOW_FAB : ''].join(' ') }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null))) : (''))));
  }
};
FabComponent.style = fabCss;

const fabItemCss = ".se-fab-item{width:40px;height:40px;font-size:24px;border-radius:50%;padding:0;margin:0 0 15px 0;-ms-flex-align:center;align-items:center;position:relative;display:-ms-flexbox;display:-webkit-flex;display:flex;-moz-box-shadow:0 0 4px rgba(0, 0, 0, 0.14), 0 4px 8px rgba(0, 0, 0, 0.28);-webkit-box-shadow:0 0 4px rgba(0, 0, 0, 0.14), 0 4px 8px rgba(0, 0, 0, 0.28);box-shadow:0 0 4px rgba(0, 0, 0, 0.14), 0 4px 8px rgba(0, 0, 0, 0.28);background-color:#ffffff;background-color:var(--se-alternative, #ffffff);color:#0f0f0f;color:var(--se-alternative-contrast, #0f0f0f)}.se-fab-item:hover,.se-fab-item:focus{-moz-box-shadow:0 0 4px rgba(0, 0, 0, 0.14), 0 4px 8px rgba(0, 0, 0, 0.28);-webkit-box-shadow:0 0 4px rgba(0, 0, 0, 0.14), 0 4px 8px rgba(0, 0, 0, 0.28);box-shadow:0 0 4px rgba(0, 0, 0, 0.14), 0 4px 8px rgba(0, 0, 0, 0.28);background-color:#494b50;background-color:var(--se-standard-hover, #494b50)}.se-fab-item:active{background-color:#2f3136;background-color:var(--se-standard-selected, #2f3136)}.se-fab-item:after{content:\"\";display:block;position:absolute;top:0;right:0;bottom:0;left:0}.se-fab-item .description{font-weight:300;line-height:1;border-radius:23.27px;font-size:12px;padding:5px 7px;margin-right:12px;position:absolute;right:100%;overflow:visible;white-space:nowrap;color:#ffffff;color:var(--se-standard-contrast, #ffffff);background-color:#626469;background-color:var(--se-standard, #626469)}.se-fab-item se-icon{font-family:\"se-icon\";padding:0 8px}::slotted(se-icon[slot=icon]){font-family:\"se-icon\";padding:0 8px}@media all and (-ms-high-contrast: none){.description{top:10px}}";

const FabItemComponent = class {
  constructor(hostRef) {
    Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    this.didClick = Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "didClick", 7);
  }
  toggle() {
    this.didClick.emit(this.el.innerText);
  }
  render() {
    return (Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "se-fab-item", onClick: () => this.toggle() }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "description" }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)), this.icon ? Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("se-icon", null, this.icon) : Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "icon" })));
  }
  get el() { return Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); }
};
FabItemComponent.style = fabItemCss;




/***/ })

}]);
//# sourceMappingURL=10.js.map