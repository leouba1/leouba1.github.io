(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "gMVi":
/*!**********************************************************!*\
  !*** ./node_modules/@se/web-ui/esm/se-dialog_4.entry.js ***!
  \**********************************************************/
/*! exports provided: se_dialog, se_dialog_content, se_dialog_footer, se_dialog_header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "se_dialog", function() { return DialogComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "se_dialog_content", function() { return DialogContentComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "se_dialog_footer", function() { return DialogFooterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "se_dialog_header", function() { return DialogHeaderComponent; });
/* harmony import */ var _index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-3d6c5e6f.js */ "0Adb");
/* harmony import */ var _action_delete_cross_95261586_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./action_delete_cross-95261586.js */ "l3Vg");



const dialogCss = "@-webkit-keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes fadeIn{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadeOut{from{opacity:1}to{opacity:0}}@keyframes fadeOut{from{opacity:1}to{opacity:0}}@-webkit-keyframes slideInLeft{from{-webkit-transform:translate3d(-100%, 0, 0);transform:translate3d(-100%, 0, 0);visibility:visible}to{-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}}@keyframes slideInLeft{from{-webkit-transform:translate3d(-100%, 0, 0);transform:translate3d(-100%, 0, 0);visibility:visible}to{-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}}@-webkit-keyframes slideOutLeft{from{-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);visibility:visible}to{-webkit-transform:translate3d(-100%, 0, 0);transform:translate3d(-100%, 0, 0)}}@keyframes slideOutLeft{from{-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);visibility:visible}to{-webkit-transform:translate3d(-100%, 0, 0);transform:translate3d(-100%, 0, 0)}}@-webkit-keyframes slideCollapseDown{from{-webkit-transform:scaleY(0);transform:scaleY(0);visibility:visible}to{-webkit-transform:scaleY(1);transform:scaleY(1)}}@keyframes slideCollapseDown{from{-webkit-transform:scaleY(0);transform:scaleY(0);visibility:visible}to{-webkit-transform:scaleY(1);transform:scaleY(1)}}@-webkit-keyframes slideCollapseUp{from{-webkit-transform:scaleY(1);transform:scaleY(1)}to{-webkit-transform:scaleY(0);transform:scaleY(0)}}@keyframes slideCollapseUp{from{-webkit-transform:scaleY(1);transform:scaleY(1)}to{-webkit-transform:scaleY(0);transform:scaleY(0)}}:host{display:none !important;z-index:550;background-color:transparent !important;line-height:1.4}:host(.show-dialog){display:block !important}.dialog-background{position:fixed !important;position:absolute;top:0;bottom:0;left:0;right:0;background-color:rgba(15, 15, 15, 0.4);background-color:var(--se-overlay, rgba(15, 15, 15, 0.4));z-index:500}.dialog{z-index:550;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-pack:center;-moz-box-pack:center;-ms-flex-pack:center;-webkit-justify-content:center;justify-content:center;position:relative;margin:0 auto}.dialog.scroll-content{height:100%}.dialog.scroll-page{min-height:100%}.small .dialog{width:400px}.medium .dialog{width:600px}.large .dialog{width:800px}.xlarge .dialog{width:1100px}.fill .dialog{width:100%}.dialog-wrapper{position:fixed !important;z-index:550;position:absolute;top:0;bottom:0;left:0;right:0;-webkit-animation-duration:0.2s;animation-duration:0.2s;animation-duration:0.2s;-webkit-animation-fill-mode:both;animation-fill-mode:both;overflow-y:auto}.dialog-wrapper.show-dialog{-webkit-animation-name:fadeIn;animation-name:fadeIn}.dialog-wrapper.hide-dialog{-webkit-animation-name:fadeOut;animation-name:fadeOut}.dialog-body{width:100%;min-height:100vh;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-pack:center;-moz-box-pack:center;-ms-flex-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-direction:normal;-webkit-box-orient:vertical;-webkit-flex-direction:column;-moz-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.dialog-body-inner{width:100%;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-direction:normal;-webkit-box-orient:vertical;-webkit-flex-direction:column;-moz-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:stretch;-ms-flex-align:stretch;-webkit-align-items:stretch;-moz-align-items:stretch;align-items:stretch;background-color:#ffffff;background-color:var(--se-background-alternative, #ffffff);color:#0f0f0f;color:var(--se-background-alternative-contrast, #0f0f0f);-webkit-box-shadow:1px 1px 4px 0 rgba(0, 0, 0, 0.3);box-shadow:1px 1px 4px 0 rgba(0, 0, 0, 0.3)}.dialog-wrapper.scroll-content .dialog-body-inner{max-height:90vh}.dialog-wrapper.fill .dialog-body-inner{height:100vh;max-height:none}";

const DialogComponent = class {
  constructor(hostRef) {
    Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    this.backdrop = Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "backdrop", 7);
    this.didClose = Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "didClose", 7);
    this.SHOW = 'show-dialog';
    this.HIDE = 'hide-dialog';
    /**
     * Defines the size of the modal.
     * `small`: used in alerts and messages
     * `medium`: default setting, used by other apps
     * `fill`: takes the full space of the screen
     */
    this.size = 'medium';
    /**
     * Defines the color of the dialog header.
     * `alternative`: Alternative background with primary color for the text
     * `primary`: Primary color schema and default setting.
     */
    this.color = 'primary';
    /**
     * Option to enable clicking on the dialog's backdrop. Will automatically close the modal.  Default setting is `true`.
     * @deprecated use noBackdrop='true' instead
     */
    this.canBackdrop = true;
    /**
     * Option to enable clicking on the dialog's backdrop. Will automatically close the modal.  Default setting is `false`.
     */
    this.noBackdrop = false;
  }
  openDidChange() {
    if (this.open) {
      this.addAnimation();
    }
    else {
      this.removeAnimation(() => {
        this.didClose.emit();
      });
    }
  }
  /**
   * Emit the `backdrop` event from the dialog's parent component if `canBackdrop=true`. When the event is emitted, the dialog is automatically closed.
   */
  backdropClicked() {
    // we should not quit if the animation has no completed (many click on a button open/close the dialog)
    if (!this.modalAnimation) {
      /*
        |                          | canBackdrop | noBackdrop | result         |
        | ------------------------ | ----------- | ---------- | -------------- |
        | default :                | true        | false      | emit & close   |
        | we use canBackrop:       | false       | false      | don't emit     |
        | we use noBackdrop:       | true        | true       | don't emit     |
        | unlikely we modify both: | false       | true       | don't emit     |
      */
      if (this.canBackdrop && !this.noBackdrop) {
        // This should be deprecated
        // Only emit if canBackdrop was clicked
        this.backdrop.emit();
        this.didClose.emit();
        this.open = false;
      }
    }
  }
  assignDialogHeaderProps() {
    Array.from(this.el.querySelectorAll('se-dialog-header')).forEach((item) => {
      if (!item.color) {
        item.color = this.color;
      }
    });
  }
  assignDialogContentProps() {
    Array.from(this.el.querySelectorAll('se-dialog-content')).forEach((item) => {
      if (item.nextElementSibling) {
        item.isLastChild = false;
      }
    });
  }
  /**
   * Emit the `backdrop` event from the dialog's parent component if the escape key is clicked and if `canBackdrop=true`.
   */
  handleKeyDown(ev) {
    const { key } = ev;
    // IE11 uses 'Esc'
    if (key === 'Escape' || (key === 'Esc' && this.open)) {
      this.backdropClicked();
    }
  }
  handleCloseDialog(ev) {
    // Mke sure the even is coming from the same dialog
    Array.from(this.el.querySelectorAll('se-dialog-header')).forEach((item) => {
      if (item === ev.target) {
        this.open = false;
      }
    });
  }
  addAnimation(callback = () => {
    // do nothing.
  }) {
    this.showModal = true;
    this.modalAnimation = this.SHOW;
    setTimeout(() => {
      this.modalAnimation = null;
      callback();
    }, 500);
  }
  removeAnimation(callback = () => {
    // do nothing.
  }) {
    this.modalAnimation = this.HIDE;
    setTimeout(() => {
      this.modalAnimation = null;
      this.showModal = false;
      callback();
    }, 500);
  }
  componentDidLoad() {
    this.assignDialogHeaderProps();
    this.assignDialogContentProps();
    if (this.open) {
      this.addAnimation();
    }
  }
  render() {
    return (Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["H"], { class: { 'show-dialog': this.showModal } }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: {
        'dialog-wrapper': true,
        'scroll-page': this.pageScroll,
        'scroll-content': !this.pageScroll,
        [this.size]: !!this.size,
        [this.modalAnimation]: !!this.modalAnimation,
      } }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "dialog-background", onClick: () => this.backdropClicked() }), Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "dialog" }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "dialog-body" }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "dialog-body-inner" }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)))))));
  }
  get el() { return Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); }
  static get watchers() { return {
    "open": ["openDidChange"]
  }; }
};
DialogComponent.style = dialogCss;

const dialogContentCss = ":host{overflow-x:auto;-ms-flex:auto;flex:auto}.se-icon-wrapper{height:60px}.inner-content{-webkit-box-flex:1;-webkit-flex:1 1 auto;-moz-box-flex:1;-moz-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;margin:0 8px}@media screen and (min-width: 720px){.alternative-indents .inner-content{margin:8px 4px 16px}}.se-dialog-content{padding:16px 8px;padding-bottom:0;-webkit-box-flex:1;-webkit-flex:1 1 auto;-moz-box-flex:1;-moz-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;-moz-align-items:center;align-items:center;display:-ms-flexbox;display:-webkit-flex;display:flex}.se-dialog-content.full-content{padding:0}.se-dialog-content.full-content .inner-content{margin:0}.se-dialog-content.alternative-indents{padding-right:32px;padding-left:32px}.se-dialog-content.alternative-indents.last-child{padding-bottom:24px}@media screen and (min-width: 720px){.se-dialog-content.alternative-indents.last-child{padding-bottom:32px}}";

const DialogContentComponent = class {
  constructor(hostRef) {
    Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    /**
     * Indicates if se-dialog-content is the last child of the dialog component.
     */
    this.isLastChild = true;
  }
  render() {
    return (Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: [
        'se-dialog-content',
        this.option === 'fill' ? 'full-content' : '',
        this.option === 'indent' ? 'alternative-indents' : '',
        this.isLastChild ? 'last-child' : '',
      ].join(' ') }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "se-icon-wrapper" }, this.icon ? (Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("se-icon", { size: "large", color: this.iconColor }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { innerHTML: this.icon }))) : (''), Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "icon" })), Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "inner-content" }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null))));
  }
};
DialogContentComponent.style = dialogContentCss;

const dialogFooterCss = ":host{position:relative;padding:8px;font-size:20px;min-height:40px;-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;-moz-align-items:center;align-items:center;display:-ms-flexbox;display:-webkit-flex;display:flex}.flex{-webkit-box-flex:1;-webkit-flex:1 1 auto;-moz-box-flex:1;-moz-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto}";

const DialogFooterComponent = class {
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
DialogFooterComponent.style = dialogFooterCss;

const dialogHeaderCss = ".se-dialog-header{position:relative;padding:4px 4px 4px 16px;font-size:20px;-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;-moz-align-items:center;align-items:center;display:-ms-flexbox;display:-webkit-flex;display:flex;min-height:44px;background-color:#3dcd58;background-color:var(--se-primary, #3dcd58);color:#ffffff;color:var(--se-primary-contrast, #ffffff)}.se-dialog-header.alternative-indents{padding:4px 16px 4px 16px;min-height:40px}@media screen and (min-width: 720px){.se-dialog-header.alternative-indents{padding:8px 36px 8px 36px;min-height:44px}}.se-dialog-header.alternative{background-color:#ffffff;background-color:var(--se-background-alternative, #ffffff);color:#3dcd58;color:var(--se-primary, #3dcd58);margin-bottom:-16px}.se-dialog-header.alternative.alternative-indents{min-height:35px;padding:24px 24px 0;margin-bottom:0}@media screen and (min-width: 720px){.se-dialog-header.alternative.alternative-indents{-webkit-box-align:start;-ms-flex-align:start;-webkit-align-items:flex-start;-moz-align-items:flex-start;align-items:flex-start;padding:24px 36px 0}}.se-dialog-header.alternative.alternative-indents div.middle{margin:0;overflow:hidden}@media screen and (min-width: 720px){.se-dialog-header.alternative.alternative-indents div.middle{margin:0 4px 4px}}.icon-close{margin-right:8px}.alternative .icon-close{color:#0f0f0f;color:var(--se-background-alternative-contrast, #0f0f0f);opacity:0.5}.alternative-indents .icon-close{margin:0}@media screen and (min-width: 720px){.alternative.alternative-indents .icon-close{margin-left:16px}}.flex{-webkit-box-flex:1;-webkit-flex:1 1 auto;-moz-box-flex:1;-moz-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto}.middle{font-weight:300;line-height:30px;font-size:22px;margin:8px 0}.alternative-indents .middle{margin:8px 0;font-size:18px;line-height:24px;font-weight:bold}@media screen and (min-width: 720px){.alternative-indents .middle{margin:6px 0;font-size:22px;line-height:32px;font-weight:bold}}.alternative.alternative-indents .middle{font-size:25px;font-weight:normal;line-height:36px}@media screen and (min-width: 720px){.alternative.alternative-indents .middle{font-size:30px;font-weight:normal;line-height:36px}}::slotted(h1),::slotted(h2),::slotted(h3),::slotted(h4),::slotted(h5),::slotted(h6){margin-top:0 !important;margin-bottom:0 !important}::slotted(h3){color:#333333}@media screen and (max-width: 719px){::slotted(h3){height:35px;font-size:25px !important;line-height:35px !important;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}}::slotted(.label){display:none}@media screen and (min-width: 720px){::slotted(.label){display:block;-ms-flex-negative:0;flex-shrink:0;margin-left:16px !important;line-height:30px;color:#9fa0a4}}";

const DialogHeaderComponent = class {
  constructor(hostRef) {
    Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    this.didCloseDialog = Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "didCloseDialog", 7);
    /**
     * Display the close icon to close the dialog.
     * Default setting is `false`.
     */
    this.closeIcon = false;
  }
  closeDialogClicked() {
    this.didCloseDialog.emit();
  }
  render() {
    return (Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: [
        'se-dialog-header',
        this.color,
        this.option === 'indent' ? 'alternative-indents' : '',
      ].join(' ') }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "flex middle" }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)), Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "end" }), this.closeIcon && (Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("se-icon", { class: "icon-close", option: "button", onClick: () => this.closeDialogClicked() }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { innerHTML: _action_delete_cross_95261586_js__WEBPACK_IMPORTED_MODULE_1__["a"] })))));
  }
};
DialogHeaderComponent.style = dialogHeaderCss;




/***/ })

}]);
//# sourceMappingURL=9.js.map