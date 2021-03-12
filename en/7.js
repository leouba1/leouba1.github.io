(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "Qi3e":
/*!**********************************************************!*\
  !*** ./node_modules/@se/web-ui/esm/se-carousel.entry.js ***!
  \**********************************************************/
/*! exports provided: se_carousel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "se_carousel", function() { return Carousel; });
/* harmony import */ var _index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-3d6c5e6f.js */ "0Adb");
/* harmony import */ var _ResizeObserver_es_02979d4e_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ResizeObserver.es-02979d4e.js */ "dlWk");
/* harmony import */ var _arrow5_step_6461af03_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./arrow5_step-6461af03.js */ "gE1X");




const carouselCss = ":host{--se-carousel-item-width:275px;position:relative;margin:0;display:block}.content{-webkit-box-flex:1;-webkit-flex:1 1 auto;-moz-box-flex:1;-moz-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-direction:normal;-webkit-box-orient:horizontal;-webkit-flex-direction:\"row\";-moz-flex-direction:\"row\";-ms-flex-direction:\"row\";flex-direction:\"row\";-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;-moz-align-items:center;align-items:center;-ms-flex-wrap:nowrap;flex-wrap:nowrap;position:relative;overflow-y:hidden;scrollbar-width:none;overflow-x:auto;-ms-overflow-style:none;-webkit-scroll-snap-type:x mandatory;-ms-scroll-snap-type:x mandatory;scroll-snap-type:x mandatory;-webkit-overflow-scrolling:touch}.content::-webkit-scrollbar{height:0 !important}.arrow{position:absolute;z-index:1;top:calc(50% - 28px / 2);background-color:var(--se-alternative);padding:2px;-webkit-box-shadow:1px 1px 4px 0 var(--se-shadow);box-shadow:1px 1px 4px 0 var(--se-shadow)}.arrow.icon-medium{padding:4px;top:calc(50% - 40px / 2)}.arrow.left{left:8px}.arrow.right{right:8px}";

const Carousel = class {
  constructor(hostRef) {
    Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    /**
     * minimum width of the carousel item. The number of item displayed will be based on it.
     */
    this.itemMinWidth = 275;
    /**
     * Show a hint of the next item if more item to be seen. if 0, then no hint will be displayed. default is 75.
     */
    this.hintWidth = 40;
    this.size = 'small';
    this.itemWidth = 0;
    this.minOffset = 10;
    this.onScroll = this.onScroll.bind(this);
  }
  onScroll() {
    this.displayArrow();
  }
  componentDidLoad() {
    // Make a first render of the UI
    this.calculateWidth();
    this.displayArrow();
    this.ro = new _ResizeObserver_es_02979d4e_js__WEBPACK_IMPORTED_MODULE_1__["i"](_ => {
      // Observe any changes in the width container
      this.calculateWidth();
      this.displayArrow();
    });
    if (this.ro) {
      this.ro.observe(this.el);
    }
    this.contentEl.addEventListener('scroll', this.onScroll);
    this.size = window.matchMedia('(hover: none) and (pointer: coarse)').matches
      ? 'medium'
      : 'small';
  }
  calculateWidth() {
    const { offsetWidth } = this.el;
    if (!this.hintWidth) {
      // No need to know how many item there is
      this.setItemWidth(offsetWidth);
    }
    else {
      // We need to calculate it without the hint, we can fit enough items
      const nbItem = Array.from(this.el.querySelectorAll('se-carousel-item'))
        .length;
      if (offsetWidth / nbItem > this.itemMinWidth) {
        // All item can fit, we don't need the hint
        this.setItemWidth(offsetWidth);
      }
      else {
        // we calculate the item width based on the hint width
        this.setItemWidth(offsetWidth - this.hintWidth);
      }
    }
  }
  setItemWidth(widthContainer) {
    this.itemWidth =
      widthContainer /
        Math.max(1, Math.floor(widthContainer / this.itemMinWidth));
    this.el.style.setProperty('--se-carousel-item-width', `${this.itemWidth}px`);
  }
  displayArrow() {
    const { offsetWidth, scrollWidth, scrollLeft } = this.contentEl;
    const showArrow = offsetWidth < scrollWidth;
    const errorMargin = 20; // Add 10px in case we only few px off and we don't want to show the arrow
    this.showLeftArrow = scrollLeft > errorMargin;
    this.showRightArrow =
      showArrow && offsetWidth + scrollLeft < scrollWidth - errorMargin;
  }
  scroll(delta) {
    this.contentEl.scrollBy({
      left: delta * this.itemWidth,
      behavior: 'smooth',
    });
  }
  disconnectedCallback() {
    if (this.ro) {
      this.ro.disconnect();
    }
    this.contentEl.removeEventListener('scroll', this.onScroll);
  }
  render() {
    return (Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["H"], null, this.showLeftArrow && (Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("se-icon", { class: "arrow left", onClick: () => this.scroll(-1), size: this.size, mirror: "horizontal" }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { innerHTML: _arrow5_step_6461af03_js__WEBPACK_IMPORTED_MODULE_2__["a"] }))), Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "content", ref: el => (this.contentEl = el) }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)), this.showRightArrow && (Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("se-icon", { class: "arrow right", option: "button", onClick: () => this.scroll(1), size: this.size }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { innerHTML: _arrow5_step_6461af03_js__WEBPACK_IMPORTED_MODULE_2__["a"] })))));
  }
  get el() { return Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); }
};
Carousel.style = carouselCss;




/***/ })

}]);
//# sourceMappingURL=7.js.map