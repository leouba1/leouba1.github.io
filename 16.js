(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "TRy/":
/*!************************************************************!*\
  !*** ./node_modules/@se/web-ui/esm/se-pagination.entry.js ***!
  \************************************************************/
/*! exports provided: se_pagination */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "se_pagination", function() { return PaginationComponent; });
/* harmony import */ var _index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-3d6c5e6f.js */ "0Adb");
/* harmony import */ var _arrow5_step_6461af03_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./arrow5_step-6461af03.js */ "gE1X");



const arrowEdge = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 1024 1024" style="enable-background:new 0 0 1024 1024;" xml:space="preserve">
<path d="M718,129.6c-11.9,0-21.5,9.6-21.5,21.5v330.6L320.6,135.1c-8.7-8.1-22.3-7.5-30.4,1.2c-8,8.7-7.5,22.3,1.2,30.4l374.4,345.3
	L291.6,857.1c-8.7,8-9.3,21.7-1.2,30.4c4.2,4.6,10,6.9,15.8,6.9c5.2,0,10.4-1.9,14.6-5.7l375.8-346.5v331c0,11.9,9.6,21.5,21.5,21.5
	s21.5-9.6,21.5-21.5v-722C739.5,139.3,729.9,129.6,718,129.6z"/>
</svg>
`;

const paginationCss = ":host{display:inline-block}.edge{padding:0 4px}.left{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.pageSize{display:-ms-flexbox;display:flex;padding-right:16px;-ms-flex-align:center;align-items:center}.pageSize>span{padding-right:8px;font-weight:300;line-height:1.2;font-size:14px;font-weight:550}.label{font-weight:550;font-size:14px}.flexed{display:-ms-inline-flexbox;display:inline-flex}.pagination{padding:0 4px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.pagination .form-field-wrapper{display:inline-block;width:70px;margin-right:8px;margin-left:12px}";

const PaginationComponent = class {
  constructor(hostRef) {
    Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    this.eventEmitter = Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "didChange", 7);
    this.defaultPageSizeList = 15;
    /**
     * Number of item per page
     */
    this.perPage = 15;
    /**
     * List of per page options to select from as a string separated by `;`. Default is `"15"` but does not affect the component if not used. ex: `"15;20;25;30"`.
     */
    this.perPageList = '15'; // '10;15;25;50';
    /**
     * Selected page
     */
    this.value = 1;
    /**
     * Total number of pages. Used to go to the last page and in the page selection dropdown.
     */
    this.total = 1;
    /**
     * Label used when hover the "Go to first page" icon.
     */
    this.labelFirst = 'First Page';
    /**
     * Label used when hover the "Go to previous page" icon.
     */
    this.labelPrev = 'Previous Page';
    /**
     * Label used when hover the "Go to next page" icon.
     */
    this.labelNext = 'Next Page';
    /**
     * Label used when hover the "Go to last page" icon.
     */
    this.labelLast = 'Last Page';
    /**
     * Text before the number of item per page selection dropdown.
     */
    this.labelPerPage = 'Items per page';
    /**
     * Text before the page selection dropdown.
     */
    this.labelValue = 'Page';
  }
  componentDidLoad() {
    if (this.total === null) {
      console.warn(`[se-pagination] component needs to have [total] attribute configured.`);
    }
    // console.log('pagination mounted', this.perPage);
    if (this.perPage == null) {
      this.perPage = this.__parPageSizeList()[0];
    }
  }
  __parPageSizeList() {
    try {
      // tslint:disable-next-line: radix
      const r = this.perPageList.split(';').map(n => parseInt(n));
      if (r.length === 0) {
        console.warn(`[se-pagination] pageSizeList must have at least one element. page sizes are ';' separated. ex: '10;15;20'. Assuming: [${this.defaultPageSizeList}]`);
        return [this.defaultPageSizeList];
      }
      return r;
    }
    catch (error) {
      console.warn(`[se-pagination] Can't parse pageSizeList in Pagination Component, expected format: '10;20;50'. Assuming: '${this.defaultPageSizeList}''`, error);
      return [this.defaultPageSizeList];
    }
  }
  __perPageList() {
    const arrayNumber = [];
    const max = this.maxPage();
    for (let index = 1; index <= max; index++) {
      arrayNumber.push(index);
    }
    return arrayNumber;
  }
  __pageSizeChanged(e) {
    const target = e.target;
    // console.log(e, target, target.value);
    this.value = 1;
    this.perPage = Math.floor(target.value); // in case someone types a fraction
    this.eventEmitter.emit({
      value: 1,
      perPage: this.perPage,
    });
  }
  __goToFirstPage() {
    this.value = 1;
    this.eventEmitter.emit({
      value: 1,
      perPage: this.perPage,
    });
  }
  __goToPrevPage() {
    this.value = Math.max(1, this.value - 1);
    this.eventEmitter.emit({
      value: this.value,
      perPage: this.perPage,
    });
  }
  __goToNextPage() {
    this.value = Math.min(this.maxPage(), this.value + 1);
    this.eventEmitter.emit({
      value: this.value,
      perPage: this.perPage,
    });
  }
  __goToLastPage() {
    this.value = this.maxPage();
    this.eventEmitter.emit({
      value: this.value,
      perPage: this.perPage,
    });
  }
  __goToPage(e) {
    // console.log(e, e.target);
    const target = e.target;
    // console.log("Goto page", e, e.target, target.value)
    this.value = Math.floor(target.value);
    this.eventEmitter.emit({
      value: this.value,
      perPage: this.perPage,
    });
  }
  maxPage() {
    return Math.max(this.total, 1);
  }
  render() {
    const isFirst = this.value === 1;
    const isLast = this.value === this.maxPage();
    return (Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["H"], null, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "flexed" }, this.__parPageSizeList().length > 1 ? (Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "pageSize" }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, this.labelPerPage), Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("se-form-field", { type: "select", option: "stacked", padding: "none" }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("select", { onChange: e => this.__pageSizeChanged(e) }, this.__parPageSizeList().map(i => (Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("option", { value: i, selected: i === (this.perPage || this.defaultPageSizeList) }, i))))))) : (''), Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "pagination" }, !this.hideEdge && (Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("se-icon", { slot: "icon", class: "left edge", option: "button", disabled: isFirst, onClick: () => !isFirst && this.__goToFirstPage(), title: this.labelFirst, "arial-label": this.labelFirst, innerHTML: arrowEdge })), Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("se-icon", { slot: "icon", class: "left", option: "button", disabled: isFirst, onClick: () => !isFirst && this.__goToPrevPage(), title: this.labelPrev, "arial-label": this.labelPrev, innerHTML: _arrow5_step_6461af03_js__WEBPACK_IMPORTED_MODULE_1__["a"] }), Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("label", { style: { padding: '0 12px' } }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "label" }, this.labelValue), Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("se-form-field", { type: "select", padding: "none", block: true, option: "stacked" }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("select", { onChange: e => this.__goToPage(e) }, this.__perPageList().map(i => (Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("option", { value: i, selected: i === this.value }, i))))), Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "label" }, "/ ", this.maxPage())), Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("se-icon", { slot: "icon", option: "button", disabled: isLast, onClick: () => !isLast && this.__goToNextPage(), title: this.labelNext, "arial-label": this.labelNext, innerHTML: _arrow5_step_6461af03_js__WEBPACK_IMPORTED_MODULE_1__["a"] }), !this.hideEdge && (Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("se-icon", { slot: "icon", class: "edge", option: "button", disabled: isLast, onClick: () => !isLast && this.__goToLastPage(), title: this.labelLast, "arial-label": this.labelLast, innerHTML: arrowEdge }))))));
  }
};
PaginationComponent.style = paginationCss;




/***/ })

}]);
//# sourceMappingURL=16.js.map