(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "cBE8":
/*!**********************************************************!*\
  !*** ./node_modules/@se/web-ui/esm/se-banner_2.entry.js ***!
  \**********************************************************/
/*! exports provided: se_banner, se_banner_item */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "se_banner", function() { return BannerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "se_banner_item", function() { return BannerItemComponent; });
/* harmony import */ var _index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-3d6c5e6f.js */ "0Adb");
/* harmony import */ var _arrow2_right_506c18fe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./arrow2_right-506c18fe.js */ "+ntD");



const bannerCss = ".banner-items{display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-direction:normal;-webkit-box-orient:horizontal;-webkit-flex-direction:row;-moz-flex-direction:row;-ms-flex-direction:row;flex-direction:row;position:relative;-webkit-transition:right 0.5s;-moz-transition:right 0.5s;transition:right 0.5s}.banner-indicators{position:absolute;left:0;right:0;top:90px;margin:0;padding-left:0;-ms-flex-pack:center;justify-content:center;display:-ms-inline-flexbox;display:inline-flex;list-style:none;z-index:2}.banner-indicators li{width:5px;height:5px;border-radius:50%;background-color:#ffffff;opacity:0.7;margin-right:5px}.banner-indicators li.active{background-color:#3dcd58;background-color:var(--se-primary, #3dcd58);opacity:1}.banner-indicators li.small-indicator{width:3px;height:3px;margin-top:1px}.indicator{display:-ms-flexbox;display:flex;position:absolute;color:#ffffff;top:45px;font-family:\"se-icon\";cursor:pointer;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;text-decoration:none;z-index:3}.indicator:hover{color:#ffffff}.se-banner{position:relative;width:100%;margin:0;overflow:hidden}.previous{left:-5px}.next{right:-5px}@media screen and (min-width: 768px){.banner-indicators{top:345px}.indicator{top:165px}}@media screen and (min-width: 900px){.se-banner{height:350px}}@media screen and (min-width: 1281px){.banner-indicators{top:340px}.indicator{top:160px}}";

const BannerComponent = class {
  constructor(hostRef) {
    Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    /**
     * Set the duration (in ms) that the banner will automatically switch slides.
     * Default is `6000`.
     */
    this.duration = 6000;
    this.items = [];
  }
  handleTouchStart(event) {
    clearInterval(this.interval);
    this.xStart = event.touches[0].clientX;
  }
  handleTouchMove(event) {
    this.xEnd = event.touches[0].clientX;
    const xDiff = this.xStart - this.xEnd;
    if (xDiff > 0) {
      this.changeActive('next');
    }
    else {
      this.changeActive('previous');
    }
  }
  windowSizeDidChange() {
    this.setIconSize();
  }
  setActiveItem(item) {
    if (this.items.length) {
      this.items.forEach((item) => {
        item.active = false;
        item.isThreeAway = false;
        item.isFourAway = false;
      });
      item.active = true;
      this.activeIndex = this.items.indexOf(item);
      this.items.forEach((item) => {
        const diff = Math.abs(this.items.indexOf(item) - this.activeIndex);
        if (diff === 3) {
          item.isThreeAway = true;
        }
      });
      this.assignSelectedItem(item);
    }
  }
  assignSelectedItem(item) {
    this.xStart = undefined;
    this.xEnd = undefined;
    this.selectedItem = item;
    this.selectedItemIndex = this.items.indexOf(item);
    this.bannerIndicatorEl.style.right =
      '' + this.selectedItemIndex * 100 + '%';
    this.setInterval();
  }
  changeActive(index) {
    // reset timer to rotate when clicking on arrow button
    clearInterval(this.interval);
    let item;
    if (index === 'previous') {
      item =
        this.items[this.selectedItemIndex - 1] ||
          this.items[this.items.length - 1];
    }
    if (index === 'next') {
      item = this.items[this.selectedItemIndex + 1] || this.items[0];
    }
    this.setActiveItem(item);
  }
  setInterval() {
    if (this.duration > 500) {
      this.interval = setInterval(() => {
        // Rotate carousel to the right based on the specified duration.
        // Must be greater than 500ms, as it takes that amount of time to switch slides.
        this.changeActive('next');
      }, this.duration);
    }
  }
  watchItemList() {
    this.observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        if (mutation.addedNodes.length) {
          clearInterval(this.interval);
          this.setBannerItemWidth();
          this.setInterval();
        }
        if (mutation.removedNodes.length) {
          clearInterval(this.interval);
          this.setBannerItemWidth();
          this.setActiveItem(this.items[0]);
        }
      });
    });
    this.observer.observe(this.el, { childList: true });
  }
  renderList() {
    return this.items.map((item) => {
      return [
        Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("li", { class: {
            active: item.active,
            'small-indicator': item.isThreeAway,
            hide: item.isFourAway,
          } }),
      ];
    });
  }
  setBannerItemWidth() {
    this.items = Array.from(this.el.querySelectorAll('se-banner-item'));
    if (this.items.length) {
      this.items.forEach((item) => {
        item.style.width = '' + 100 / this.items.length + '%';
      });
    }
  }
  setIconSize() {
    const icons = Array.from(this.el.shadowRoot.querySelectorAll('se-icon'));
    icons.forEach((icon) => {
      if (window.innerWidth > 1280) {
        icon.size = 'xlarge';
      }
      else if (window.innerWidth > 767) {
        icon.size = 'large';
      }
      else {
        icon.size = 'medium';
      }
    });
  }
  componentWillLoad() {
    this.watchItemList();
  }
  componentDidLoad() {
    this.setBannerItemWidth();
    this.setActiveItem(this.items[0]);
    this.setIconSize();
  }
  componentDidUpdate() {
    this.setIconSize();
  }
  disconnectedCallback() {
    clearInterval(this.interval);
    this.items.length = 0;
    this.selectedItem = undefined;
    this.selectedItemIndex = undefined;
  }
  render() {
    return [
      Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "se-banner" }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "banner-items", ref: el => (this.bannerIndicatorEl = el), style: { width: '' + this.items.length * 100 + '%' } }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)), this.items.length > 1
        ? [
          Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ol", { class: "banner-indicators" }, this.renderList()),
          Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("se-icon", { class: "indicator previous", mirror: "horizontal", onClick: () => this.changeActive('previous') }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { innerHTML: _arrow2_right_506c18fe_js__WEBPACK_IMPORTED_MODULE_1__["a"] })),
          Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("se-icon", { class: "indicator next", onClick: () => this.changeActive('next') }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { innerHTML: _arrow2_right_506c18fe_js__WEBPACK_IMPORTED_MODULE_1__["a"] })),
        ]
        : ''),
    ];
  }
  get el() { return Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); }
};
BannerComponent.style = bannerCss;

const bannerItemCss = "@-webkit-keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes fadeIn{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadeOut{from{opacity:1}to{opacity:0}}@keyframes fadeOut{from{opacity:1}to{opacity:0}}@-webkit-keyframes slideInLeft{from{-webkit-transform:translate3d(-100%, 0, 0);transform:translate3d(-100%, 0, 0);visibility:visible}to{-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}}@keyframes slideInLeft{from{-webkit-transform:translate3d(-100%, 0, 0);transform:translate3d(-100%, 0, 0);visibility:visible}to{-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}}@-webkit-keyframes slideOutLeft{from{-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);visibility:visible}to{-webkit-transform:translate3d(-100%, 0, 0);transform:translate3d(-100%, 0, 0)}}@keyframes slideOutLeft{from{-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);visibility:visible}to{-webkit-transform:translate3d(-100%, 0, 0);transform:translate3d(-100%, 0, 0)}}@-webkit-keyframes slideCollapseDown{from{-webkit-transform:scaleY(0);transform:scaleY(0);visibility:visible}to{-webkit-transform:scaleY(1);transform:scaleY(1)}}@keyframes slideCollapseDown{from{-webkit-transform:scaleY(0);transform:scaleY(0);visibility:visible}to{-webkit-transform:scaleY(1);transform:scaleY(1)}}@-webkit-keyframes slideCollapseUp{from{-webkit-transform:scaleY(1);transform:scaleY(1)}to{-webkit-transform:scaleY(0);transform:scaleY(0)}}@keyframes slideCollapseUp{from{-webkit-transform:scaleY(1);transform:scaleY(1)}to{-webkit-transform:scaleY(0);transform:scaleY(0)}}:host{height:100%;position:relative}:host(.active){display:block;left:0;right:0}:host(.active) .banner-section-wrapper{opacity:1}.banner-section-wrapper{opacity:0;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-direction:normal;-webkit-box-orient:horizontal;-webkit-flex-direction:row;-moz-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-moz-box-pack:start;-ms-flex-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;z-index:2}.image-container{width:100%;position:relative;height:85px;overflow:hidden;transform:translate3d(0, 0, 0);-webkit-transform:translate3d(0, 0, 0)}.image-background{position:absolute;width:100%;height:85px;left:0;top:0;background-position:center, center;background-repeat:no-repeat;background-origin:content-box;background-size:cover}.background-overlay{position:absolute;top:0;bottom:0;left:0;right:0;width:100%;height:100%;background-image:-webkit-gradient(linear, right top, left top, from(rgba(98, 100, 105, 0)), to(rgba(0, 0, 0, 0.8)));background-image:linear-gradient(270deg, rgba(98, 100, 105, 0) 0%, rgba(0, 0, 0, 0.8) 100%)}@media screen and (min-width: 768px){.image-container,.image-background{height:350px}}@media screen and (min-width: 900px){.image-container{position:absolute;top:0;bottom:0;left:0;right:0}.banner-section-wrapper{padding:50px 95px;height:250px}::slotted(se-block){width:40% !important;min-width:330px}::slotted(se-block.block-bg-none){color:#ffffff}}";

const BannerItemComponent = class {
  constructor(hostRef) {
    Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    this.didChange = Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "didChange", 7);
    /**
     * Indicates the active banner item in your banner component.
     */
    this.active = false;
  }
  activeDidChange() {
    if (this.active) {
      this.didChange.emit();
    }
  }
  setBlockTransparency() {
    Array.from(this.el.querySelectorAll('se-block')).forEach((item) => {
      item.classList.add('banner-child');
    });
  }
  setButtonClass() {
    Array.from(this.el.querySelectorAll('se-button')).forEach((item) => {
      item.classList.add('banner-child');
    });
  }
  componentWillLoad() {
    this.setBlockTransparency();
    this.setButtonClass();
  }
  componentWillUpdate() {
    this.setBlockTransparency();
    this.setButtonClass();
  }
  render() {
    return (Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["H"], { class: { active: this.active } }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "image-container" }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "image-background", style: { backgroundImage: this.imageUrl } }), Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "background-overlay" })), Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "banner-section-wrapper" }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null))));
  }
  get el() { return Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); }
  static get watchers() { return {
    "active": ["activeDidChange"]
  }; }
};
BannerItemComponent.style = bannerItemCss;




/***/ })

}]);
//# sourceMappingURL=4.js.map