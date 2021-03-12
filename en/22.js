(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

/***/ "iPTS":
/*!*****************************************************************!*\
  !*** ./node_modules/@se/web-ui/esm/se-visual-linear_2.entry.js ***!
  \*****************************************************************/
/*! exports provided: se_visual_linear, se_visual_radial */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "se_visual_linear", function() { return VisualLinearComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "se_visual_radial", function() { return VisualRadialComponent; });
/* harmony import */ var _index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-3d6c5e6f.js */ "0Adb");


const visualLinearCss = ":host{margin:4px}svg{margin-top:4px;margin-bottom:4px}@media all and (-webkit-min-device-pixel-ratio: 0) and (min-resolution: 0.001dpcm){svg{width:100%}}@-moz-document url-prefix(){svg{width:100%}}@supports (-ms-ime-align: auto){svg{width:80%}}.progress-bar-wrapper{fill:#e6e6e6;fill:var(--se-divider, #e6e6e6);width:100%}.progress-bar{color:inherit}text{color:#0f0f0f;color:var(--se-background-alternative-contrast, #0f0f0f)}.linear-value{font-weight:600}.linear-label{font-size:12px}.linear-value+.linear-label{font-size:14px}.inline{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;-moz-align-items:center;align-items:center}.inline svg{-ms-flex:1;flex:1;margin-right:16px}.inline .linear-value{margin-right:4px}.stacked{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:column-reverse;flex-direction:column-reverse}.stacked .linear-value+.linear-label{float:right}";

const VisualLinearComponent = class {
  constructor(hostRef) {
    Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    /**
     * Defines the layout of your component.
     * `inline` is the default option.  This sets the "progress bar" adjacent to the label.
     * `stacked` option will render the "progress bar" below the label.
     */
    this.option = 'inline';
    /**
     * Sets the color of the visual "progress bar".
     * The string should be a 6-digit hexadecimal color with a hashtag (example: #3dcd58).
     * By default, the progress bar will have a green color.
     */
    this.secolor = 'primary';
  }
  render() {
    const isHexColor = this.secolor && this.secolor.indexOf('#') !== -1;
    return (Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["H"], { class: !isHexColor ? `color-${this.secolor}` : '' }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: {
        [this.option]: !!this.option,
      } }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("svg", { height: "8" }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("rect", { class: "progress-bar-wrapper", width: "100%", height: "8" }), Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("rect", { class: "progress-bar", width: this.percentage + '%', height: "8", style: { fill: isHexColor ? this.secolor : 'currentColor' } }), "Sorry, your browser does not support inline SVG."), Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("text", null, this.value ? Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("tspan", { class: "linear-value" }, this.value) : '', Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("tspan", { x: "100%", class: "linear-label" }, this.label)))));
  }
};
VisualLinearComponent.style = visualLinearCss;

const visualRadialCss = ".radial-wrapper{position:relative}.back-circle{color:#e6e6e6;color:var(--se-divider, #e6e6e6)}.radial{position:absolute;top:0;bottom:0;left:0;right:0;-webkit-transform:rotate(-90deg);transform:rotate(-90deg);border-radius:100%}.value{-ms-flex-item-align:center;align-self:center}.label{font-size:12px;-ms-flex-item-align:center;align-self:center}.small.radial-wrapper{width:82px;height:82px}.small .radial{stroke-dasharray:208 208}.small .value{font-size:26px}.large.radial-wrapper{width:164px;height:164px}.large .radial{stroke-dasharray:415 415}.large .value{font-size:52px}text{color:#0f0f0f;color:var(--se-background-alternative-contrast, #0f0f0f)}";

const VisualRadialComponent = class {
  constructor(hostRef) {
    Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    /**
     * Determines the visual size of your circular progress bar.  The default setting is `large`.
     */
    this.size = 'large';
    /**
     * Sets the color of the visual "progress bar".
     * The string should be a 6-digit hexadecimal color with a hashtag (example: #3dcd58).
     * By default, the progress bar will have a green color.
     */
    this.secolor = 'primary';
  }
  render() {
    const isHexColor = this.secolor && this.secolor.indexOf('#') !== -1 ? true : false;
    const svgSize = this.size === 'small' ? 82 : 164;
    const circleDimensions = this.size === 'small' ? 41 : 82;
    const circleRadius = this.size === 'small' ? 33 : 66;
    const circumference = this.size === 'small' ? 66 * Math.PI : 132 * Math.PI;
    const offset = circumference - ((this.percentage || 0) / 100) * circumference;
    return (Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["H"], { class: !isHexColor ? `color-${this.secolor}` : '' }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: ['radial-wrapper', this.size].join(' ') }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("svg", { class: "radial", height: svgSize, width: svgSize }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("circle", { cx: circleDimensions, cy: circleDimensions, r: circleRadius, stroke: "currentColor", "stroke-width": "8", fill: "transparent", class: "back-circle" }), Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("circle", { cx: circleDimensions, cy: circleDimensions, r: circleRadius, stroke: isHexColor ? this.secolor : 'currentColor', "stroke-width": "8", fill: "transparent", style: { strokeDashoffset: String(offset) } }), "Sorry, your browser does not support inline SVG."), Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("svg", { height: svgSize, width: svgSize, class: "text" }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("text", null, this.value ? (Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("tspan", { class: "value", x: "50%", y: "50%", "text-anchor": "middle", fill: "currentColor" }, this.value)) : (''), Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("tspan", { class: "label", x: "50%", y: this.value ? '70%' : '53%', "text-anchor": "middle", fill: "currentColor" }, this.label))))));
  }
};
VisualRadialComponent.style = visualRadialCss;




/***/ })

}]);
//# sourceMappingURL=22.js.map