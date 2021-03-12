(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "2UII":
/*!**************************************************************!*\
  !*** ./node_modules/@se/web-ui/esm/se-breadcrumb_2.entry.js ***!
  \**************************************************************/
/*! exports provided: se_breadcrumb, se_breadcrumb_item */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "se_breadcrumb", function() { return BreadcrumbComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "se_breadcrumb_item", function() { return BreadcrumbItemComponent; });
/* harmony import */ var _index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-3d6c5e6f.js */ "0Adb");
/* harmony import */ var _arrow2_right_506c18fe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./arrow2_right-506c18fe.js */ "+ntD");



const breadcrumbCss = ":host{display:-ms-flexbox;display:flex;cursor:pointer}:host ol{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;margin:0;padding:0}";

const BreadcrumbComponent = class {
  constructor(hostRef) {
    Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    this.items = [];
    /**
     * Indicates whether or not the last breadcrumb item should be selectable. The default setting is `false`.
     */
    this.canSelectLast = false;
  }
  canSelectLastChanged() {
    this.updateLastItem();
  }
  updateLastItem() {
    this.items = Array.from(this.el.querySelectorAll('se-breadcrumb-item'));
    this.items.forEach((item) => {
      item.isLast = item === this.items[this.items.length - 1];
      item.canSelect = item.isLast ? this.canSelectLast : true;
    });
  }
  watchItemList() {
    this.observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        if (mutation.addedNodes.length || mutation.removedNodes.length) {
          this.updateLastItem();
        }
      });
    });
    this.observer.observe(this.el, { childList: true });
  }
  componentWillLoad() {
    this.updateLastItem();
    this.watchItemList();
  }
  componentWillUnload() {
    this.observer.disconnect();
  }
  render() {
    return (Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("nav", { "aria-label": "breadcrumb" }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ol", null, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null))));
  }
  get el() { return Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); }
  static get watchers() { return {
    "canSelectLast": ["canSelectLastChanged"]
  }; }
};
BreadcrumbComponent.style = breadcrumbCss;

const breadcrumbItemCss = ":host div{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center}.breadcrumb-item{display:inline;font-size:14px;line-height:14px;padding-right:4px;vertical-align:super}.breadcrumb-item:hover{text-decoration:underline}a{color:inherit;text-decoration:inherit;cursor:inherit}se-icon{cursor:default}se-icon:active,se-icon:focus{color:inherit;background-color:inherit}.disabled .breadcrumb-item{cursor:default;text-decoration:none;opacity:0.5}";

const BreadcrumbItemComponent = class {
  constructor(hostRef) {
    Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    /**
     * Indicates whether or not the breadcrumb item should be show a arrow at the end.  The default setting is `false`.
     */
    this.isLast = false;
    /**
     * Indicates whether or not the breadcrumb item should be selected.  The default setting is `true`.
     */
    this.canSelect = true;
  }
  render() {
    return (Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["H"], { role: "listitem" }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: { disabled: !this.canSelect } }, this.canSelect ? (Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "breadcrumb-item" }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", { href: this.href }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)))) : (Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { "aria-current": "page", class: "breadcrumb-item" }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null))), !this.isLast && (Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("se-icon", { size: "small" }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { innerHTML: _arrow2_right_506c18fe_js__WEBPACK_IMPORTED_MODULE_1__["a"] }))))));
  }
};
BreadcrumbItemComponent.style = breadcrumbItemCss;




/***/ })

}]);
//# sourceMappingURL=5.js.map