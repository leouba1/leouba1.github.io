(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21],{

/***/ "srLb":
/*!***********************************************************!*\
  !*** ./node_modules/@se/web-ui/esm/se-tooltip_4.entry.js ***!
  \***********************************************************/
/*! exports provided: se_tooltip, se_tooltip_content, se_tooltip_footer, se_tooltip_header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "se_tooltip", function() { return TooltipComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "se_tooltip_content", function() { return TooltipContentComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "se_tooltip_footer", function() { return TooltipFooterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "se_tooltip_header", function() { return TooltipHeaderComponent; });
/* harmony import */ var _index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-3d6c5e6f.js */ "0Adb");
/* harmony import */ var _utils_7cccd915_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils-7cccd915.js */ "kXjD");



const tooltipCss = ":host{position:relative;display:inline-block}:host .tooltip{color:#ffffff;color:var(--se-information-contrast, #ffffff);background-color:#0087cd;background-color:var(--se-information, #0087cd);max-width:260px;width:-moz-max-content;width:-webkit-max-content;width:max-content;visibility:hidden;position:absolute;padding:8px 8px;font-size:12px;display:inline-table;line-height:14px;z-index:-1;-webkit-border-radius:2px;-moz-border-radius:2px;border-radius:2px px;-webkit-box-shadow:1px 1px 4px 0 rgba(0, 0, 0, 0.3);box-shadow:1px 1px 4px 0 rgba(0, 0, 0, 0.3);opacity:0;-webkit-transition:0.2s;transition:0.2s}:host .tooltip::after{content:\"\";position:absolute;border:5px solid}:host .tooltip.show{opacity:1;visibility:visible;z-index:10}:host .tooltip-top .tooltip{margin-bottom:8px;bottom:100%;left:50%;transform:translateX(-50%) translateY(0%);-webkit-transform:translateX(-50%) translateY(0%);-moz-transform:translateX(-50%) translateY(0%);-ms-transform:translateX(-50%) translateY(0%);-o-transform:translateX(-50%) translateY(0%)}:host .tooltip-top .tooltip::after{top:100%;left:50%;margin-left:-5px;border-color:#0087cd transparent transparent transparent;border-color:var(--se-information, #0087cd) transparent transparent transparent}:host .tooltip-bottom .tooltip{margin-top:8px;top:100%;left:50%;transform:translateX(-50%) translateY(0%);-webkit-transform:translateX(-50%) translateY(0%);-moz-transform:translateX(-50%) translateY(0%);-ms-transform:translateX(-50%) translateY(0%);-o-transform:translateX(-50%) translateY(0%)}:host .tooltip-bottom .tooltip::after{bottom:100%;left:50%;margin-left:-5px;border-color:transparent transparent #0087cd transparent;border-color:transparent transparent var(--se-information, #0087cd) transparent}:host .tooltip-left .tooltip{left:-8px;top:50%;transform:translateX(-100%) translateY(-50%);-webkit-transform:translateX(-100%) translateY(-50%);-moz-transform:translateX(-100%) translateY(-50%);-ms-transform:translateX(-100%) translateY(-50%);-o-transform:translateX(-100%) translateY(-50%)}:host .tooltip-left .tooltip::after{top:50%;left:100%;margin-top:-5px;border-color:transparent transparent transparent #0087cd;border-color:transparent transparent transparent var(--se-information, #0087cd)}:host .tooltip-right .tooltip{margin-left:8px;left:100%;top:50%;transform:translateX(0%) translateY(-50%);-webkit-transform:translateX(0%) translateY(-50%);-moz-transform:translateX(0%) translateY(-50%);-ms-transform:translateX(0%) translateY(-50%);-o-transform:translateX(0%) translateY(-50%)}:host .tooltip-right .tooltip::after{top:50%;right:100%;margin-top:-5px;border-color:transparent #0087cd transparent transparent;border-color:transparent var(--se-information, #0087cd) transparent transparent}:host([hidden]){display:none}.tooltip-fab .tooltip,.tooltip-fab-top .tooltip{position:fixed}.tooltip-fab.tooltip-top .tooltip,.tooltip-fab.tooltip-left .tooltip{top:auto;left:auto;-webkit-transform:none;transform:none}.tooltip-fab.tooltip-left .tooltip{right:104px;bottom:calc((56px / 2) + 16px);-webkit-transform:translateY(50%);transform:translateY(50%)}.tooltip-fab.tooltip-top .tooltip{right:16px;bottom:72px;min-width:80px}.tooltip-fab-top.tooltip-top .tooltip,.tooltip-fab-top.tooltip-left .tooltip,.tooltip-fab-top.tooltip-bottom .tooltip{left:auto;-webkit-transform:none;transform:none}.tooltip-fab-top.tooltip-left .tooltip{top:calc(-100vh + 64px + 48px);right:104px;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.tooltip-fab-top.tooltip-top .tooltip{top:auto;right:16px;bottom:calc(100vh - 64px - 16px);min-width:80px}.tooltip-fab-top.tooltip-bottom .tooltip{top:calc(-100vh + 64px + 24px + 56px);right:16px;min-width:80px}";

const TooltipComponent = class {
  constructor(hostRef) {
    Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    this.didOpen = Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "didOpen", 7);
    this.didClose = Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "didClose", 7);
    this.closeTooltips = Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "closeTooltips", 7);
    /**
     * Indicates the position of your tooltip.
     * The default setting is `bottom`, rendering the tooltip below its parent.
     */
    this.position = 'bottom';
    /**
     * Indicates the action of your tooltip.
     * The default setting is `hover`, triggering the tooltip when hovering over the parent element.
     * The `click` action triggers the tooltip when you click on the parent element.
     */
    this.action = 'hover';
    this.opened = false;
  }
  /**
   * Method to open the tooltip separate from hovering or clicking the parent element.
   */
  async open() {
    this.opened = true;
  }
  /**
   * Method to close the tooltip separate from hovering or clicking the parent element.
   */
  async close() {
    this.opened = false;
  }
  handleTouchstart(ev) {
    this._toggle(ev);
  }
  handleTouchEnd(ev) {
    this._toggle(ev);
  }
  handleMouseEnter(ev) {
    // On touch device, we remove hover or the tooltip keep open and closing
    if (!Object(_utils_7cccd915_js__WEBPACK_IMPORTED_MODULE_1__["a"])() && this.action === 'hover') {
      this._toggle(ev);
    }
  }
  handleMouseLeave(ev) {
    // On touch device, we remove hover or the tooltip keep open and closing
    if (!Object(_utils_7cccd915_js__WEBPACK_IMPORTED_MODULE_1__["a"])() && this.action === 'hover' && this.opened) {
      this._toggle(ev);
    }
  }
  handleMouseClick(ev) {
    if (this.action === 'click' && this.opened) {
      this._toggle(ev);
    }
  }
  handleCloseTooltip() {
    this.close();
  }
  _toggle(ev) {
    ev.stopPropagation();
    if (this.opened) {
      this.close();
      this.didClose.emit(ev);
    }
    else {
      this.closeTooltips.emit(); // close other tooltips before opening target tooltip
      this.open();
      this.didOpen.emit(ev);
    }
  }
  render() {
    const containsFab = this.el.querySelector('se-fab');
    const tooltipPosition = this.el.getAttribute('position');
    if (!!this.el.shadowRoot.querySelector('div .tooltip') &&
      containsFab &&
      containsFab.getAttribute('position') === 'top') {
      const fabButtonHeight = this.el
        .querySelector('se-fab')
        .shadowRoot.querySelector('se-button')
        .shadowRoot.querySelector('button');
      const fabHeight = this.el
        .querySelector('se-fab')
        .shadowRoot.querySelector('div').offsetTop;
      if (!!tooltipPosition && tooltipPosition === 'left') {
        this.el.shadowRoot
          .querySelector('.tooltip')
          .setAttribute('style', `top: calc(${fabHeight}px + ${fabButtonHeight.offsetTop}px + (${fabButtonHeight.offsetHeight}px / 2))`);
      }
      else if (!!tooltipPosition && tooltipPosition === 'top') {
        this.el.shadowRoot
          .querySelector('.tooltip')
          .setAttribute('style', `bottom: calc(100vh - ${fabHeight}px - 8px `);
      }
      else if (tooltipPosition === null || tooltipPosition === 'bottom') {
        this.el.shadowRoot
          .querySelector('.tooltip')
          .setAttribute('style', `top: calc(${fabHeight}px + ${fabButtonHeight.offsetHeight}px + 8px`);
      }
    }
    return (Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: [
        this.position ? `tooltip-${this.position}` : 'tooltip-bottom',
        containsFab
          ? `tooltip-fab${containsFab.getAttribute('position') === 'top' ? '-top' : ''}`
          : '',
      ].join(' ') }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { onClick: this.action === 'click'
        ? ev => {
          this._toggle(ev);
        }
        : () => { } }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "tooltip" })), Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: `${this.opened ? 'show' : ''} tooltip` }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null))));
  }
  get el() { return Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); }
};
TooltipComponent.style = tooltipCss;

const tooltipContentCss = ":host{position:relative}.tooltip-content{position:relative;font-size:14px;line-height:17px;display:-ms-flexbox;display:-webkit-flex;display:flex}.se-icon{font-family:\"se-icon\";padding-top:4px;padding-right:5px}";

const TooltipContentComponent = class {
  constructor(hostRef) {
    Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
  }
  render() {
    return (Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "tooltip-content" }, this.icon && (Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("se-icon", { class: "se-icon", size: "small" }, this.icon)), Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "icon" }), Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)));
  }
};
TooltipContentComponent.style = tooltipContentCss;

const tooltipFooterCss = ":host{position:relative;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-direction:normal;-webkit-box-orient:horizontal;-webkit-flex-direction:row;-moz-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-moz-box-pack:justify;-ms-flex-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;-moz-align-items:center;align-items:center;font-size:14px;line-height:17px}.flex{display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-direction:normal;-webkit-box-orient:horizontal;-webkit-flex-direction:row;-moz-flex-direction:row;-ms-flex-direction:row;flex-direction:row}";

const TooltipFooterComponent = class {
  constructor(hostRef) {
    Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
  }
  render() {
    return [
      Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "flex" }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "start" })),
      Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null),
    ];
  }
};
TooltipFooterComponent.style = tooltipFooterCss;

const tooltipHeaderCss = ":host{position:relative}.tooltip-header{-webkit-box-flex:1;-webkit-flex:1 1 auto;-moz-box-flex:1;-moz-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;display:-ms-flexbox;display:-webkit-flex;display:flex;position:relative;font-weight:600;font-size:14px;line-height:17px}.se-icon{font-family:\"se-icon\";padding-right:5px}";

const TooltipHeaderComponent = class {
  constructor(hostRef) {
    Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
  }
  render() {
    return [
      Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "tooltip-header" }, this.icon && (Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("se-icon", { class: "se-icon", size: "small" }, this.icon)), Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "icon" }), Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)),
      Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "end" }),
    ];
  }
};
TooltipHeaderComponent.style = tooltipHeaderCss;




/***/ })

}]);
//# sourceMappingURL=21.js.map