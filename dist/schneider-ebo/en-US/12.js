(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "9LGi":
/*!**********************************************************!*\
  !*** ./node_modules/@se/web-ui/esm/se-header_6.entry.js ***!
  \**********************************************************/
/*! exports provided: se_header, se_icon_ecostruxure, se_icon_lifeison, se_icon_schneider, se_sidemenu, se_sidemenu_item */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "se_header", function() { return HeaderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "se_icon_ecostruxure", function() { return IconEcostruxureComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "se_icon_lifeison", function() { return IconLifeisonComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "se_icon_schneider", function() { return IconSchneiderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "se_sidemenu", function() { return SidemenuComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "se_sidemenu_item", function() { return SidemenuItemComponent; });
/* harmony import */ var _index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-3d6c5e6f.js */ "0Adb");
/* harmony import */ var _utils_7cccd915_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils-7cccd915.js */ "kXjD");
/* harmony import */ var _appInfo_0ca6521d_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./appInfo-0ca6521d.js */ "i0Ke");




const burgerMenu = `<?xml version="1.0" encoding="utf-8"?>
<!-- Generator: Adobe Illustrator 23.0.2, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<svg version="1.1"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 1024 1024" style="enable-background:new 0 0 1024 1024;" xml:space="preserve">
<rect x="128" y="468.8" width="768" height="86.4"/>
<rect x="128" y="211" width="768" height="86"/>
<rect x="128" y="726.8" width="768" height="86.4"/>
</svg>
`;

const headerCss = "@-webkit-keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes fadeIn{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadeOut{from{opacity:1}to{opacity:0}}@keyframes fadeOut{from{opacity:1}to{opacity:0}}@-webkit-keyframes slideInLeft{from{-webkit-transform:translate3d(-100%, 0, 0);transform:translate3d(-100%, 0, 0);visibility:visible}to{-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}}@keyframes slideInLeft{from{-webkit-transform:translate3d(-100%, 0, 0);transform:translate3d(-100%, 0, 0);visibility:visible}to{-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}}@-webkit-keyframes slideOutLeft{from{-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);visibility:visible}to{-webkit-transform:translate3d(-100%, 0, 0);transform:translate3d(-100%, 0, 0)}}@keyframes slideOutLeft{from{-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);visibility:visible}to{-webkit-transform:translate3d(-100%, 0, 0);transform:translate3d(-100%, 0, 0)}}@-webkit-keyframes slideCollapseDown{from{-webkit-transform:scaleY(0);transform:scaleY(0);visibility:visible}to{-webkit-transform:scaleY(1);transform:scaleY(1)}}@keyframes slideCollapseDown{from{-webkit-transform:scaleY(0);transform:scaleY(0);visibility:visible}to{-webkit-transform:scaleY(1);transform:scaleY(1)}}@-webkit-keyframes slideCollapseUp{from{-webkit-transform:scaleY(1);transform:scaleY(1)}to{-webkit-transform:scaleY(0);transform:scaleY(0)}}@keyframes slideCollapseUp{from{-webkit-transform:scaleY(1);transform:scaleY(1)}to{-webkit-transform:scaleY(0);transform:scaleY(0)}}:host{-webkit-box-sizing:border-box;box-sizing:border-box;height:auto;padding:0;width:100%;min-height:64px;max-height:64px;z-index:5;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-direction:normal;-webkit-box-orient:horizontal;-webkit-flex-direction:row;-moz-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-moz-box-pack:justify;-ms-flex-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;-moz-align-items:center;align-items:center;white-space:nowrap;background-color:#ffffff;background-color:var(--se-background-alternative, #ffffff)}::slotted([slot=end]){display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.fill-space{-webkit-box-flex:1;-webkit-flex:1 1 auto;-moz-box-flex:1;-moz-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto}.d-flex{-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-direction:normal;-webkit-box-orient:horizontal;-webkit-flex-direction:row;-moz-flex-direction:row;-ms-flex-direction:row;flex-direction:row}.d-flex-column{-webkit-box-align:left;-ms-flex-align:left;-webkit-align-items:left;-moz-align-items:left;align-items:left;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-direction:normal;-webkit-box-orient:vertical;-webkit-flex-direction:column;-moz-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.header-title-wrapper{margin-right:16px}.project-section{color:#626469;color:var(--se-standard, #626469);margin:0 16px;font-size:16px;font-weight:300;line-height:24px;text-align:left}.header-menu-button{margin-left:6px}.menu-sidenav{cursor:pointer;margin-right:-17px;padding:8px 16px}.menu-sidenav se-icon{vertical-align:-webkit-baseline-middle;vertical-align:-moz-middle-with-baseline}.header-title{color:#3dcd58;color:var(--se-primary, #3dcd58);padding-left:18px;font-size:20px;line-height:20px;margin:0}.header-title .light{font-weight:300}.header-title-type{color:#3dcd58;color:var(--se-primary, #3dcd58);line-height:24px;padding-left:18px;font-size:12px;margin:1px 0 -4px 0}.mat-toolbar-single-row{padding:0}.font-lighter{font-weight:100}se-icon-schneider{width:140px;padding-left:9px !important;margin-top:5px}se-icon-ecostruxure{margin-bottom:-5px}.padding-container.link-container{font-size:13px}@media (max-width: 599px){se-icon-schneider{display:none}.mat-toolbar-single-row{height:64px}}";

const HeaderComponent = class {
  constructor(hostRef) {
    Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    /**
     * Sets the title of your application.
     */
    this.appTitle = '';
    /**
     * Defines the domain of the application. By default, the domain is `ecostruxure`. If `none`, then no domain will be displayed.
     */
    this.domain = _appInfo_0ca6521d_js__WEBPACK_IMPORTED_MODULE_2__["A"].domain;
  }
  onClickMenu() {
    this.elLeftNav.toggle();
  }
  async componentWillLoad() {
    this.elLeftNav = this.el.querySelector('se-sidemenu');
    this.hasMenu = !!this.elLeftNav;
  }
  render() {
    const title = Object(_utils_7cccd915_js__WEBPACK_IMPORTED_MODULE_1__["g"])(this.appTitle);
    let domain;
    if (this.domain.toLowerCase() === `ecostruxure`) {
      domain = Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("se-icon-ecostruxure", { class: "header-title-type" });
    }
    else if (this.domain.toLowerCase() !== 'none') {
      domain = Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "header-title-type" }, this.domain);
    }
    return [
      Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "d-flex" }, this.hasMenu ? (Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "menu-sidenav", onClick: () => this.onClickMenu() }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("se-icon", { size: "medium", color: "primary" }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { innerHTML: burgerMenu })))) : (''), Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "d-flex-column header-title-wrapper" }, domain, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("h1", { class: "header-title no-margin" }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, title.first), Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "light" }, "\u00A0", title.last))), this.project ? (Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "project-section" }, this.project)) : ('')),
      Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "padding-container d-flex" }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "start" })),
      Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "fill-space center-header-container" }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)),
      Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "padding-container d-flex" }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "end" }), !this.hideSeLogo && Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("se-icon-schneider", { class: "header-title-type" })),
    ];
  }
  get el() { return Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); }
};
HeaderComponent.style = headerCss;

const IconEcostruxure = `<svg version="1.1" id="Calque_1"
  xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="88px" height="16px" viewBox="0 0 88 16" enable-background="new 0 0 88 16" role="img">
  <title>Ecostruxure</title>
  <pattern width="20" height="20" patternUnits="userSpaceOnUse" id="Unnamed_Pattern_3" viewBox="0 -20 20 20" overflow="visible">
    <g>
      <polygon fill="none" points="0,-20 20,-20 20,0 0,0"></polygon>
      <path fill="#3DCD58" d="M16-5c0-0.552-0.448-1-1-1s-1,0.448-1,1s0.448,1,1,1S16-4.448,16-5"></path>
      <path fill="#3DCD58" d="M16-15c0-0.552-0.448-1-1-1s-1,0.448-1,1s0.448,1,1,1S16-14.448,16-15"></path>
      <path fill="#3DCD58" d="M6-5c0-0.552-0.448-1-1-1S4-5.552,4-5s0.448,1,1,1S6-4.448,6-5"></path>
      <path fill="#3DCD58" d="M6-15c0-0.552-0.448-1-1-1s-1,0.448-1,1s0.448,1,1,1S6-14.448,6-15"></path>
    </g>
  </pattern>
  <rect fill="#3DCD58" x="-1840" y="-2248.276" display="none" width="753.75" height="120"></rect>
  <rect fill="#3DCD58" x="-1050.023" y="-2248.276" display="none" width="157" height="120"></rect>
  <pattern id="SVGID_3_" patternTransform="matrix(1 0 0 -1 3533.9766 7213.6719)"></pattern>
  <rect fill="#3DCD58" x="-1847.023" y="-2058.327" display="none" width="954" height="350"></rect>
  <path fill="#3DCD58" display="none" opacity="0.2" d="M195-1215H-3c-9.389,0-17-7.611-17-17v-198c0-9.389,7.611-17,17-17h198    c9.389,0,17,7.611,17,17v198C212-1222.611,204.389-1215,195-1215z"></path>
  <g>
    <path fill="#3DCD58" d="M41.749,6.667h0.676V6.025c0-0.494,0.403-0.895,0.901-0.895l0,0c0.498,0,0.901,0.4,0.901,0.895v0.643h1.238      c0.376,0,0.68,0.302,0.68,0.674l0,0c0,0.373-0.304,0.675-0.68,0.675h-1.277v2.615c0,0.589,0.208,0.884,0.699,0.884      c0.236,0,0.421-0.068,0.574-0.176c0.21-0.148,0.515-0.102,0.618,0.133c0.04,0.089,0.066,0.193,0.066,0.313      c0,0.602-0.636,1.093-1.672,1.093c-1.4,0-2.048-0.7-2.048-2.05V8.017h-0.676c-0.376,0-0.681-0.302-0.681-0.675l0,0      C41.068,6.97,41.373,6.667,41.749,6.667z"></path>
    <path fill="#3DCD58" d="M50.633,6.595c0.843,0,1.166,0.76,0.739,1.509c-1.27,0.024-2.398,0.479-2.398,1.729v2.032      c0,0.501-0.408,0.907-0.913,0.907l0,0c-0.505,0-0.914-0.406-0.914-0.907V6.865c0-0.05,0.324-0.197,0.688-0.197      c0.544,0,1.14,0.271,1.14,1.388v0.159C49.208,7.281,49.688,6.595,50.633,6.595"></path>
    <path fill="#3DCD58" d="M54.841,12.877c-1.659,0-2.345-1.093-2.345-2.479V7.555c0-0.5,0.408-0.906,0.913-0.906l0,0      c0.505,0,0.914,0.406,0.914,0.906v2.705c0,0.7,0.57,1.268,1.276,1.268l0,0c0.706,0,1.277-0.568,1.277-1.268V7.575      c0-0.501,0.408-0.908,0.913-0.908l0,0c0.505,0,0.914,0.406,0.914,0.908v5.018c0,0.062-0.312,0.196-0.688,0.196h-0.113      c-0.539,0-0.975-0.433-0.975-0.968l0,0C56.486,12.435,55.826,12.877,54.841,12.877"></path>
    <path fill="#3DCD58" d="M69.37,12.877c-1.659,0-2.345-1.093-2.345-2.479V7.555c0-0.5,0.409-0.906,0.914-0.906l0,0      c0.504,0,0.913,0.406,0.913,0.906v2.705c0,0.7,0.572,1.268,1.277,1.268l0,0c0.704,0,1.275-0.568,1.275-1.268V7.575      c0-0.501,0.41-0.908,0.913-0.908l0,0c0.505,0,0.915,0.406,0.915,0.908v5.018c0,0.062-0.312,0.196-0.686,0.196h-0.115      c-0.539,0-0.975-0.433-0.975-0.968l0,0C71.016,12.435,70.355,12.877,69.37,12.877"></path>
    <path fill="#3DCD58" d="M77.858,6.595c0.843,0,1.166,0.76,0.737,1.509c-1.27,0.024-2.396,0.479-2.396,1.729v2.032      c0,0.501-0.409,0.907-0.914,0.907l0,0c-0.504,0-0.913-0.406-0.913-0.907V6.865c0-0.05,0.323-0.197,0.686-0.197      c0.544,0,1.141,0.271,1.141,1.388v0.159C76.432,7.281,76.912,6.595,77.858,6.595"></path>
    <path fill="#3DCD58" d="M82.602,11.613c0.958,0,1.489-0.405,1.788-0.883c0.013-0.024,0.882,0.085,0.882,0.785      c0,0.638-0.973,1.362-2.734,1.362c-2.062,0-3.422-1.216-3.422-3.105c0-1.829,1.387-3.178,3.305-3.178      c1.866,0,3.149,1.239,3.149,2.994l0,0c0,0.332-0.271,0.602-0.605,0.602h-4.189C80.904,11.085,81.617,11.613,82.602,11.613        M83.872,9.184c-0.04-0.835-0.596-1.387-1.478-1.387c-0.854,0-1.502,0.576-1.619,1.387H83.872z"></path>
    <g>
      <polygon fill="#3DCD58" points="85.685,6.906 85.276,6.906 85.276,6.667 86.391,6.667 86.391,6.906 85.983,6.906 85.983,7.956        85.685,7.956 		"></polygon>
      <polygon fill="#3DCD58" points="86.534,6.667 86.956,6.667 87.273,7.553 87.277,7.553 87.579,6.667 88,6.667 88,7.956        87.72,7.956 87.72,7.042 87.716,7.042 87.383,7.956 87.151,7.956 86.818,7.052 86.813,7.052 86.813,7.956 86.534,7.956 		"></polygon>
    </g>
    <path fill="#3DCD58" d="M35.567,7.832l0.4-1.376h3.652c0.45-1.996,0.095-3.847-1.184-5.058c-2.59-2.453-8.009-1.619-12.047,2.038      c-0.629,0.567-1.162,1.182-1.647,1.81h2.199l-0.512,1.379h-2.626c-0.25,0.435-0.486,0.866-0.666,1.305h3.114l-0.499,1.38h-3.06      c-0.524,2.107-0.189,4.074,1.126,5.323c2.558,2.421,7.961,1.57,11.996-2.086c0.707-0.635,1.289-1.322,1.816-2.028h-2.824      l0.43-1.376h3.302c0.242-0.438,0.464-0.87,0.639-1.31H35.567z M34.758,5.24c-0.234,0-0.333,0.035-0.426,0.136      c-0.038,0.038-0.054,0.08-0.067,0.159L33.08,9.791c-0.278,1.492-2.214,2.983-4.74,2.983h-1.374h-2.136l0.609-2.187h2.256      c0.229,0,0.41-0.082,0.56-0.24c0.055-0.063,0.127-0.159,0.137-0.258l0.936-3.718c0.277-1.495,1.942-3.145,4.466-3.145h3.592      L36.929,5.24H34.758z"></path>
    <g>
      <line fill="#3DCD58" x1="7.771" y1="12.025" x2="7.771" y2="12.025"></line>
      <path fill="#3DCD58" d="M0.806,3.221h5.862c0.416,0,0.753,0.333,0.753,0.746v0.001c0,0.412-0.337,0.747-0.753,0.747h-4.37        c-0.149,0-0.269,0.119-0.269,0.267v1.801c0,0.147,0.119,0.267,0.269,0.267h4.37c0.416,0,0.753,0.335,0.753,0.747l0,0        c0,0.414-0.337,0.748-0.753,0.748h-4.37c-0.149,0-0.269,0.12-0.269,0.267v2.202c0,0.147,0.119,0.267,0.269,0.267h4.37        c0.416,0,0.753,0.334,0.753,0.747l0,0c0,0.413-0.337,0.747-0.753,0.747H0.806C0.36,12.772,0,12.415,0,11.973V4.02        C0,3.579,0.36,3.221,0.806,3.221z"></path>
      <path fill="#3DCD58" d="M11.382,12.772c-2.737,0-3.153-2.006-3.153-3.02c0-1.42,0.773-3.088,3.177-3.088        c1.786,0,2.738,1.127,2.738,1.747c0,0.383-0.345,0.642-0.702,0.642c-0.299,0-0.477-0.18-0.548-0.282        c-0.369-0.529-0.714-0.958-1.5-0.958c-1.226,0-1.583,1.127-1.583,1.927c0,0.327,0.06,0.811,0.309,1.217        c0.227,0.36,0.632,0.698,1.274,0.698c0.655,0,1.107-0.361,1.297-0.642c0.382-0.564,0.476-0.756,0.857-0.756        c0.454,0,0.679,0.417,0.679,0.654C14.228,11.51,13.406,12.772,11.382,12.772"></path>
      <path fill="#3DCD58" d="M18.062,12.772c-2.392,0-3.201-1.667-3.201-3.054c0-1.589,1.011-3.054,3.165-3.054        c2.178,0,3.167,1.487,3.167,3.054C21.192,11.432,20.038,12.772,18.062,12.772 M18.025,7.78c-0.929,0-1.559,0.699-1.559,1.939        c0,1.262,0.63,1.938,1.559,1.938s1.56-0.688,1.56-1.938C19.585,8.467,18.954,7.78,18.025,7.78"></path>
    </g>
    <path fill="#3DCD58" d="M64.104,9.723l2.009-1.994c0.104-0.103,0.104-0.273,0-0.377L65.677,6.92c-0.34-0.336-0.896-0.336-1.234,0      l-1.582,1.57l-1.58-1.57c-0.34-0.336-0.895-0.336-1.234,0l-0.436,0.432c-0.105,0.104-0.105,0.274,0,0.377l2.009,1.994l-2.009,1.994      c-0.105,0.104-0.105,0.273,0,0.377l0.436,0.433c0.339,0.337,0.894,0.337,1.234,0l1.58-1.569l1.582,1.569      c0.339,0.337,0.894,0.337,1.234,0l0.436-0.433c0.104-0.104,0.104-0.273,0-0.377L64.104,9.723z"></path>
  </g>
  <polygon display="none" fill="#FFFFFF" points="-1740,-1725 -1760,-1745 -1720,-1745 "></polygon>
</svg>
`;

const iconEcostruxureCss = ":host{height:auto;font-size:12px !important;color:inherit;fill:currentColor}.medium svg{width:144px;height:27px}.inherited{-webkit-filter:brightness(0) invert(1);filter:brightness(0) invert(1)}";

const IconEcostruxureComponent = class {
  constructor(hostRef) {
    Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    /**
     * Sets the size of the EcoStruxure icon.  The default setting is `small`.
     */
    this.size = 'small';
    /**
     * Defines the color of the logo.
     * `standard`: displays a light green / dark green conventional SE logo.
     * `inherited`: default option, which takes the color from it's parent.
     */
    this.color = 'standard';
  }
  render() {
    return (Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: [this.size, this.color].join(' '), innerHTML: IconEcostruxure }));
  }
};
IconEcostruxureComponent.style = iconEcostruxureCss;

const IconLifeison = `<svg id="Calque_1" data-name="Calque 1"
  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 252.08 69.42" width="213" height="60" role="img">
  <title>Life is On - Schneider Electric</title>
  <path fill="#3DCD58" class="cls-1" d="M19.83,40.64H12.47V27.75c0-.47,0-1.19-.81-1.19s-.76.66-.76,1.19v13c0,1.07.14,1.21,1.31,1.21h7.62c.52,0,1.16,0,1.16-.64s-.64-.63-1.16-.63"></path>
  <path fill="#3DCD58" class="cls-1" d="M23.12,30.73c-.72,0-.72.6-.72,1.08V41.1c0,.47,0,1.06.72,1.06s.7-.59.7-1.06V31.81c0-.43,0-1.08-.7-1.08"></path>
  <path fill="#3DCD58" class="cls-1" d="M23.12,27a.83.83,0,1,0,0,1.66.88.88,0,0,0,.9-.83.86.86,0,0,0-.9-.83"></path>
  <path fill="#3DCD58" class="cls-1" d="M30.09,31H28.57V30c0-1.36.13-2.26,1.84-2.26l.45,0,.53,0a.57.57,0,0,0,.58-.55.56.56,0,0,0-.33-.48A5.23,5.23,0,0,0,30,26.56a3.32,3.32,0,0,0-1.43.32,2.21,2.21,0,0,0-1,.93,3.81,3.81,0,0,0-.35,2V31H26c-.22,0-.9,0-.9.47s.63.5.9.5h1.2V41.1c0,.47,0,1.06.72,1.06s.7-.59.7-1.06V32h1.52c.59,0,.9-.17.9-.5s-.59-.47-.9-.47m-1.32-2.47,0,0,0,0"></path>
  <path fill="#3DCD58" class="cls-1" d="M41.5,35.69a5.86,5.86,0,0,0-.66-2.55,4.31,4.31,0,0,0-1.53-1.66,2.39,2.39,0,0,0-.22-.12l-.16-.08a3.48,3.48,0,0,0-.48-.21L38.29,31a4.91,4.91,0,0,0-.58-.15l-.12,0a5.47,5.47,0,0,0-.72-.08H36.8l-.42,0a5.22,5.22,0,0,0-4,1.57A6,6,0,0,0,31,36.45a6.1,6.1,0,0,0,1.32,4.06A4.42,4.42,0,0,0,34,41.72a6.26,6.26,0,0,0,2.4.44,5.12,5.12,0,0,0,3.92-1.51,3.63,3.63,0,0,0,1-1.78.67.67,0,0,0-.7-.6.73.73,0,0,0-.67.47,3.74,3.74,0,0,1-1.85,2,4,4,0,0,1-1.63.34,3.64,3.64,0,0,1-3-1.27,5.13,5.13,0,0,1-1-3.22h7.72c.71,0,1.31,0,1.31-.91m-9-.16a4,4,0,0,1,3.85-3.73c3.3,0,3.59,2.8,3.68,3.73Z"></path>
  <path fill="#3DCD58" class="cls-1" d="M48.75,26.56c-.79,0-.79.72-.79,1.19V41c0,.5,0,1.19.81,1.19s.76-.66.76-1.19V27.75c0-.53,0-1.19-.78-1.19"></path>
  <path fill="#3DCD58" class="cls-1" d="M74.48,34.57a.81.81,0,0,0,.8-.8v-9.1H73.65v9.1a.81.81,0,0,0,.83.8"></path>
  <path fill="#3DCD58" class="cls-1" d="M59.54,36.48l-.31-.14-.1-.05a13.57,13.57,0,0,0-2.58-.74,10.74,10.74,0,0,1-2.3-.66,1.46,1.46,0,0,1-1-1.35c0-1.2,1.43-1.74,2.84-1.74s2.6.58,2.94,1.51c.2.57.37.66.67.66a.58.58,0,0,0,.65-.56A2.47,2.47,0,0,0,59.68,32a3.4,3.4,0,0,0-1.3-.88A6.35,6.35,0,0,0,56,30.73,4.34,4.34,0,0,0,52.55,32a2.86,2.86,0,0,0-.69,1.78,2.42,2.42,0,0,0,1.1,2,8.68,8.68,0,0,0,2.88,1l1.35.33h.06c.79.2,2.26.57,2.26,1.89,0,1-1,2.06-3.21,2.06a3.23,3.23,0,0,1-3.25-1.83l0,0c-.15-.35-.3-.67-.7-.67a.78.78,0,0,0-.47.16.55.55,0,0,0-.23.44,3.13,3.13,0,0,0,1.24,2.07,3.55,3.55,0,0,0,1.18.64,6.76,6.76,0,0,0,2.16.29,5.16,5.16,0,0,0,4-1.32,3,3,0,0,0,.8-2,2.54,2.54,0,0,0-1.43-2.36"></path>
  <path fill="#3DCD58" class="cls-1" d="M92.77,31.89a4.19,4.19,0,0,0-3.15-1.16,4.47,4.47,0,0,0-3.81,1.83v-.81a1.18,1.18,0,0,0-.2-.88.2.2,0,0,0-.08,0l0,0a.78.78,0,0,0-.39-.1c-.72,0-.72.62-.72,1.08v9.29c0,.5,0,1.08.72,1.08a.78.78,0,0,0,.39-.1l0,0s.06,0,.08,0a1.14,1.14,0,0,0,.2-.87v-4a7.67,7.67,0,0,1,.41-3.36,3.51,3.51,0,0,1,1.39-1.42,3.88,3.88,0,0,1,1.89-.51,2.82,2.82,0,0,1,2.28,1,3.86,3.86,0,0,1,.47,2.23v6a1.24,1.24,0,0,0,.2.87s.06,0,.08,0l0,0a.72.72,0,0,0,.39.1c.72,0,.72-.6.72-1.08v-6.3a4.1,4.1,0,0,0-.9-2.89"></path>
  <path fill="#3DCD58" class="cls-1" d="M76.73,26.36v1.56a6.65,6.65,0,1,1-4.48.06V26.4a8.15,8.15,0,1,0,4.48,0"></path>
  <path fill="#009530" class="cls-2" d="M136,28.07c-2.72-1.21-4.34-1.67-5.94-1.67s-2.77.6-2.77,1.53c0,2.82,9.56,2,9.56,8.54,0,3.6-3,5.68-7.21,5.68a12.68,12.68,0,0,1-6.76-1.81v-4c2.68,1.78,4.33,2.41,6.4,2.41,1.8,0,2.77-.63,2.77-1.72,0-3.07-9.56-2-9.56-8.66,0-3.23,2.8-5.37,7.15-5.37A15.43,15.43,0,0,1,136,24.42v3.65"></path>
  <path fill="#009530" class="cls-2" d="M149.35,41.3a12.25,12.25,0,0,1-4.28.85c-4.45,0-7.33-2.59-7.33-6.53s3-6.61,7.17-6.61a13.22,13.22,0,0,1,4.25.82v3a7.29,7.29,0,0,0-3.24-.85c-2.39,0-3.92,1.43-3.92,3.65a3.54,3.54,0,0,0,3.78,3.72,9.71,9.71,0,0,0,3.57-.88V41.3"></path>
  <path fill="#009530" class="cls-2" d="M186.53,29a6.41,6.41,0,0,0-6.69,6.64c0,3.91,2.89,6.5,7.35,6.5a9.13,9.13,0,0,0,5.65-1.68V38a7.48,7.48,0,0,1-4.69,1.79c-2.51,0-4-1.3-4.18-3.52h9.09c.19-4.63-2.85-7.25-6.53-7.25m-2.48,5.15a2.69,2.69,0,0,1,2.75-2.77,2.72,2.72,0,0,1,2.75,2.77Z"></path>
  <rect fill="#009530" class="cls-2" x="194.6" y="29.25" width="3.98" height="12.67"></rect>
  <path fill="#009530" class="cls-2" d="M209.64,23.2v6.6a7.45,7.45,0,0,0-3.3-.79c-3.63,0-6.14,2.68-6.14,6.56s2.51,6.59,5.91,6.59a5.27,5.27,0,0,0,3.53-1.26v1h4V23.2h-4m0,15.26a3.37,3.37,0,0,1-2.37,1c-1.87,0-3.05-1.54-3.05-3.85,0-2.53,1.18-4,3.18-4a4.28,4.28,0,0,1,2.24.75Z"></path>
  <path fill="#009530" class="cls-2" d="M222,29a6.41,6.41,0,0,0-6.68,6.64c0,3.91,2.89,6.5,7.34,6.5a9.16,9.16,0,0,0,5.66-1.68V38a7.49,7.49,0,0,1-4.7,1.79c-2.49,0-4-1.3-4.17-3.52h9.08c.19-4.63-2.85-7.25-6.53-7.25m-2.47,5.15a2.68,2.68,0,0,1,2.74-2.77A2.73,2.73,0,0,1,225,34.16Z"></path>
  <path fill="#009530" class="cls-2" d="M234.46,32.88h0c1.18-2.64,2.51-3.88,4-3.88a4.29,4.29,0,0,1,2.63,1.16l-1.09,3.51a4.59,4.59,0,0,0-2.36-.93c-1.46,0-2.39,1.37-3.27,3.7V41.9h-4V29.23h4v3.65"></path>
  <path fill="#009530" class="cls-2" d="M198.76,23.92a2.8,2.8,0,0,1-1.5,3.06c-1.2.71-2.47.48-2.84-.5a2.79,2.79,0,0,1,1.49-3.07c1.2-.71,2.47-.48,2.85.51"></path>
  <path fill="#009530" class="cls-2" d="M163.67,33.85A4.44,4.44,0,0,0,159,29a4.88,4.88,0,0,0-4,2.12H155V23.2h-4V41.88h4v-8c.93-1.34,1.72-1.92,2.66-1.92,1.23,0,2.06.88,2.06,2.77v4.46a11.9,11.9,0,0,1,4-1.27v-4"></path>
  <path fill="#009530" class="cls-2" d="M173.66,29a5.13,5.13,0,0,0-4.13,2V29.25h-4v8.61a6.3,6.3,0,0,1,4,1.81V33.75c1.05-1.56,1.79-2.09,2.78-2.09s2,.75,2,2.53v7.7h4v-8c0-3.73-2.64-4.85-4.61-4.85"></path>
  <polygon fill="#009530" class="cls-2" points="180.47 45.53 175.85 45.53 175.85 48.81 180.31 48.81 180.31 50.22 175.85 50.22 175.85 53.61 180.61 53.61 180.61 55.02 174.3 55.02 174.3 44.12 180.47 44.12 180.47 45.53"></polygon>
  <rect fill="#009530" class="cls-2" x="184.24" y="44.12" width="1.42" height="10.91"></rect>
  <path fill="#009530" class="cls-2" d="M190.71,51.64h5c0-2.66-1.22-3.94-3.12-3.94a3.32,3.32,0,0,0-3.35,3.63,3.54,3.54,0,0,0,3.47,3.83,4.67,4.67,0,0,0,2.87-.85V52.93a4.56,4.56,0,0,1-2.51.87,2.25,2.25,0,0,1-2.41-2.16m2-2.72a1.63,1.63,0,0,1,1.67,1.77h-3.6a1.86,1.86,0,0,1,1.93-1.77"></path>
  <path fill="#009530" class="cls-2" d="M205,49.72a3.22,3.22,0,0,0-2-.72,2.42,2.42,0,0,0,.23,4.83,4.51,4.51,0,0,0,1.9-.48v1.4a5.84,5.84,0,0,1-2.13.41,3.45,3.45,0,0,1-3.64-3.58c0-2.38,1.36-3.88,3.54-3.88a4.68,4.68,0,0,1,2.07.49v1.53"></path>
  <path fill="#009530" class="cls-2" d="M211.46,47.83h2.27v1.28h-2.27V52.8a1,1,0,0,0,1,1.09,3.08,3.08,0,0,0,1.62-.54v1.33a4.34,4.34,0,0,1-1.73.48,2.12,2.12,0,0,1-2.32-2.26V49.11H208.8V49l2.66-2.6v1.48"></path>
  <path fill="#009530" class="cls-2" d="M219.15,47.83V49.5h0c.73-1.28,1.41-1.8,2.08-1.8a2.48,2.48,0,0,1,1.71.83l-.75,1.25a2.29,2.29,0,0,0-1.33-.72,2,2,0,0,0-1.73,2.21V55h-1.42V47.83h1.42"></path>
  <path fill="#009530" class="cls-2" d="M237.47,49.72a3.26,3.26,0,0,0-2-.72,2.21,2.21,0,0,0-2.19,2.45,2.24,2.24,0,0,0,2.43,2.38,4.59,4.59,0,0,0,1.9-.48v1.4a6,6,0,0,1-2.14.41,3.46,3.46,0,0,1-3.64-3.58c0-2.38,1.37-3.88,3.54-3.88a4.72,4.72,0,0,1,2.08.49v1.53"></path>
  <rect fill="#009530" class="cls-2" x="226.71" y="47.83" width="1.42" height="7.19"></rect>
  <path fill="#009530" class="cls-2" d="M228.18,45.25a1,1,0,0,1-.53,1.09c-.43.25-.88.17-1-.18a1,1,0,0,1,.53-1.09c.43-.25.88-.17,1,.18"></path>
  <path fill="#009530" class="cls-2" d="M165.66,48.77l.43-1.56H170a6.11,6.11,0,0,0-1.27-5.73c-2.77-2.77-8.58-1.83-12.9,2.31a14.68,14.68,0,0,0-1.77,2.05h2.36l-.55,1.56h-2.81a11.84,11.84,0,0,0-.72,1.48h3.34l-.54,1.56h-3.28c-.56,2.38-.2,4.61,1.21,6,2.74,2.74,8.53,1.78,12.85-2.36a15.9,15.9,0,0,0,2-2.29h-3l.46-1.56h3.54a15,15,0,0,0,.69-1.48h-3.87m-.87-2.94c-.25,0-.35,0-.45.16a.34.34,0,0,0-.08.18L163,51c-.3,1.69-2.38,3.38-5.08,3.38h-3.76l.65-2.48h2.42a.78.78,0,0,0,.6-.27.56.56,0,0,0,.14-.29l1-4.21a4.71,4.71,0,0,1,4.78-3.55h3.85l-.49,2.27Z"></path>
  <rect class="cls-3" x="107.7" y="10.9" width="0.82" height="47.63"></rect>
</svg>
`;

const iconLifeisonCss = ":host{height:auto;font-size:12px !important;color:inherit;fill:currentColor;width:100%}.inherited{-webkit-filter:brightness(0) invert(1);filter:brightness(0) invert(1)}";

const IconLifeisonComponent = class {
  constructor(hostRef) {
    Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    /**
     * Defines the color of the logo.
     * `standard`: displays a light green / dark green conventional SE logo.
     * `inherited`: default option, which takes the color from it's parent.
     */
    this.color = 'inherited';
  }
  render() {
    return Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: this.color, innerHTML: IconLifeison });
  }
};
IconLifeisonComponent.style = iconLifeisonCss;

const IconSchneider = `<svg version="1.1" id="Layer_1"
  xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1015 472" width="140" height="60" role="img">
  <title>Schneider Electric</title>
  <g >
    <path fill="#009530" d="M210.1,155c-17.6-7.8-28.1-10.8-38.5-10.8c-10.9,0-17.9,3.9-17.9,10c0,18.3,61.9,13.1,61.9,55.4
        c0,23.3-19.5,36.8-46.7,36.8c-21.3,0-31.8-5.5-43.9-11.7v-26.1c17.4,11.5,28.1,15.6,41.5,15.6c11.7,0,17.9-4.1,17.9-11.2
        c0-19.9-61.9-12.6-61.9-56.1c0-21,18.1-34.9,46.3-34.9c13.6,0,25.9,2.9,41.2,9.4V155"></path>
    <path fill="#009530" d="M296.8,240.7c-10.3,3.7-19.1,5.5-27.8,5.5c-28.9,0-47.5-16.8-47.5-42.4c0-25.1,19.4-42.8,46.4-42.8c8.4,0,19,2.1,27.6,5.3
        v19.2c-6.8-3.6-14.6-5.6-21-5.6c-15.5,0-25.4,9.3-25.4,23.7c0,14.6,9.8,24.2,24.5,24.2c6.2,0,11.8-1.4,23.2-5.7L296.8,240.7"></path>
    <path fill="#009530" d="M537.8,161.1c-25.3,0-43.3,17.9-43.3,43c0,25.3,18.7,42.1,47.6,42.1c6.4,0,21.9,0,36.6-10.9v-16
        c-12.1,8.6-20.1,11.6-30.4,11.6c-16.3,0-26.2-8.4-27.1-22.8h58.9C581.4,178.1,561.7,161.1,537.8,161.1 M521.7,194.5
        c1.1-11.4,7.7-18,17.8-18c10,0,16.7,6.8,17.8,18H521.7z"></path>
    <rect fill="#009530" x="590.1" y="162.6" width="25.8" height="82.2"></rect>
    <path fill="#009530" d="M687.6,123.4v42.8c-7-3.4-13.9-5.2-21.4-5.2c-23.5,0-39.8,17.4-39.8,42.5c0,24.6,16.3,42.7,38.3,42.7
        c8.7,0,15.5-2.3,22.9-8.2v6.6h25.8V123.4H687.6 M687.6,222.3c-5.4,4.8-9.8,6.8-15.3,6.8c-12.1,0-19.8-10-19.8-25
        c0-16.4,7.7-25.9,20.7-25.9c4.7,0,10.7,2.1,14.5,4.8v39.3H687.6z"></path>
    <path fill="#009530" d="M767.5,161.1c-25.3,0-43.3,17.9-43.3,43c0,25.3,18.7,42.1,47.6,42.1c6.4,0,21.9,0,36.7-10.9v-16
        c-12.1,8.6-20.1,11.6-30.4,11.6c-16.2,0-26.2-8.4-27.1-22.8h58.9C811.1,178.1,791.4,161.1,767.5,161.1 M751.5,194.5
        c1.1-11.4,7.7-18,17.8-18c10,0,16.8,6.8,17.9,18H751.5z"></path>
    <path fill="#009530" d="M848.5,186.1h0.4c7.6-17.1,16.2-25.1,26.2-25.1c5.1,0,9.6,2,17.1,7.5l-7.1,22.8c-6.8-4.3-11.2-6-15.3-6
        c-9.5,0-15.5,8.9-21.2,24v35.4h-25.9v-82.1h25.8V186.1"></path>
    <path fill="#009530" d="M617.1,128c2.4,6.4-1.9,15.3-9.7,19.9s-16,3.1-18.4-3.3s1.9-15.3,9.7-19.9C606.4,120.2,614.6,121.6,617.1,128"></path>
    <path fill="#009530" d="M389.6,192.5c0-22.3-15.1-31.4-30.1-31.4c-10.1,0-18.5,4.3-26,13.7h-0.4v-51.4h-25.8v121.1h25.8v-52.1
        c6-8.7,11.2-12.5,17.2-12.5c8,0,13.4,5.7,13.4,18v28.9c8.6-4.4,17.4-7.2,25.8-8.2v-26.1"></path>
    <path fill="#009530" d="M454.4,161.1c-10.5,0-18.5,3.9-26.7,13.3v-11.8h-25.8v55.8c8.9,0.9,20.3,5,25.8,11.8v-38.4c6.8-10.2,11.6-13.6,18-13.6
        c7.3,0,12.9,4.8,12.9,16.4v49.9h25.8v-52C484.3,168.3,467.2,161.1,454.4,161.1"></path>
    <polygon fill="#009530" points="498.5,268.1 468.5,268.1 468.5,289.4 497.4,289.4 497.4,298.6 468.5,298.6 468.5,320.5 499.4,320.5 499.4,329.7
        458.5,329.7 458.5,259 498.5,259"></polygon>
    <rect fill="#009530" x="523" y="259" width="9.2" height="70.7"></rect>
    <path fill="#009530" d="M564.9,307.8h32.7c0-17.2-7.9-25.6-20.2-25.6c-12.8,0-21.7,9.5-21.7,23.6c0,12.9,8,24.8,22.5,24.8c7.9,0,13-1.8,18.6-5.5
        v-8.9c-5.5,3.6-10.7,5.6-16.3,5.6C571.6,321.8,566.3,317,564.9,307.8 M577.6,290.1c6.5,0,10.5,4.5,10.8,11.5H565
        C566.3,294.3,570.6,290.1,577.6,290.1"></path>
    <path fill="#009530" d="M657.6,295.3c-5.3-3.6-8.8-4.7-12.8-4.7c-8.4,0-14.2,6.4-14.2,15.9c0,9.6,6.2,15.4,15.8,15.4c3.9,0,7.7-1,12.3-3.1v9
        c-3.1,1.5-9,2.7-13.9,2.7c-13.9,0-23.6-9.6-23.6-23.2c0-15.4,8.8-25.2,22.9-25.2c5.4,0,9,1.3,13.5,3.2V295.3"></path>
    <path fill="#009530" d="M699.4,283.1h14.7v8.3h-14.7v23.9c0,5.5,4,7.1,6.6,7.1c3.3,0,6.7-1.2,10.5-3.5v8.6c-3.2,1.8-8.2,3.1-11.2,3.1
        c-10,0-15-6.2-15-14.6v-24.6h-8.1v-1l17.3-16.9L699.4,283.1"></path>
    <path fill="#009530" d="M749.2,283.1v10.8h0.2c4.7-8.3,9.1-11.7,13.5-11.7c3.7,0,7.2,1.8,11.1,5.4l-4.9,8.1c-2.8-2.8-6.4-4.7-8.6-4.7
        c-6.3,0-11.3,6.4-11.3,14.4v24.3H740v-46.6H749.2"></path>
    <path fill="#009530" d="M868,295.3c-5.3-3.6-8.8-4.7-12.9-4.7c-8.4,0-14.2,6.4-14.2,15.9c0,9.6,6.2,15.4,15.7,15.4c3.9,0,7.7-1,12.4-3.1v9
        c-3.2,1.5-9.1,2.7-13.9,2.7c-13.9,0-23.6-9.6-23.6-23.2c0-15.4,8.8-25.2,23-25.2c5.4,0,9,1.3,13.5,3.2V295.3"></path>
    <rect fill="#009530" x="798.3" y="283.1" width="9.2" height="46.6"></rect>
    <path fill="#009530" d="M807.8,266.3c0.9,2.3-0.7,5.4-3.4,7.1c-2.8,1.6-5.7,1.1-6.6-1.2c-0.8-2.3,0.7-5.4,3.5-7.1
        C804,263.6,806.9,264.1,807.8,266.3"></path>
    <path fill="#009530" d="M402.5,289.1l2.8-10.1h25.4c3.1-14.6,0.7-28.2-8.2-37.1c-18-18-55.6-11.9-83.7,15c-4.4,4.2-8.1,8.7-11.5,13.3h15.3
        l-3.6,10.1h-18.2c-1.7,3.2-3.4,6.4-4.6,9.6h21.6l-3.5,10.1H313c-3.6,15.5-1.3,29.9,7.8,39c17.8,17.8,55.3,11.5,83.3-15.3
        c4.9-4.7,9-9.7,12.6-14.9h-19.6l3-10.1H423c1.7-3.2,3.2-6.4,4.4-9.6H402.5 M396.9,270.1c-1.6,0-2.3,0.3-3,1
        c-0.3,0.3-0.4,0.6-0.5,1.2l-8.2,31.2c-1.9,10.9-15.4,21.9-32.9,21.9h-9.6h-14.8l4.2-16h15.7c1.6,0,2.8-0.6,3.9-1.8
        c0.4-0.5,0.9-1.2,0.9-1.9l6.5-27.3c1.9-11,13.5-23.1,31-23.1h25l-3.2,14.8L396.9,270.1L396.9,270.1z"></path>
  </g>
</svg>
`;

const iconSchneiderCss = ":host{margin-right:5px;color:#009530 !important;fill:currentColor}svg{margin-bottom:-11px;margin-top:-7px;height:60px;width:100%}";

const IconSchneiderComponent = class {
  constructor(hostRef) {
    Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
  }
  render() {
    return Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { innerHTML: IconSchneider });
  }
};
IconSchneiderComponent.style = iconSchneiderCss;

const testResultsNok = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path d="M542 512l134 134c8 9 8 22 0 30-4 5-9 7-15 7-5 0-11-2-15-7L512 542 378 676c-5 5-10 7-16 7-5 0-11-2-15-7-8-8-8-21 0-30l134-134-134-134c-8-9-8-22 0-30 9-9 22-9 31 0l134 134 134-134c8-9 22-9 30 0 8 8 8 21 0 30z"/></svg>`;

const sidemenuCss = "@-webkit-keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes fadeIn{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadeOut{from{opacity:1}to{opacity:0}}@keyframes fadeOut{from{opacity:1}to{opacity:0}}@-webkit-keyframes slideInLeft{from{-webkit-transform:translate3d(-100%, 0, 0);transform:translate3d(-100%, 0, 0);visibility:visible}to{-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}}@keyframes slideInLeft{from{-webkit-transform:translate3d(-100%, 0, 0);transform:translate3d(-100%, 0, 0);visibility:visible}to{-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}}@-webkit-keyframes slideOutLeft{from{-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);visibility:visible}to{-webkit-transform:translate3d(-100%, 0, 0);transform:translate3d(-100%, 0, 0)}}@keyframes slideOutLeft{from{-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);visibility:visible}to{-webkit-transform:translate3d(-100%, 0, 0);transform:translate3d(-100%, 0, 0)}}@-webkit-keyframes slideCollapseDown{from{-webkit-transform:scaleY(0);transform:scaleY(0);visibility:visible}to{-webkit-transform:scaleY(1);transform:scaleY(1)}}@keyframes slideCollapseDown{from{-webkit-transform:scaleY(0);transform:scaleY(0);visibility:visible}to{-webkit-transform:scaleY(1);transform:scaleY(1)}}@-webkit-keyframes slideCollapseUp{from{-webkit-transform:scaleY(1);transform:scaleY(1)}to{-webkit-transform:scaleY(0);transform:scaleY(0)}}@keyframes slideCollapseUp{from{-webkit-transform:scaleY(1);transform:scaleY(1)}to{-webkit-transform:scaleY(0);transform:scaleY(0)}}:host{display:none;position:absolute;top:0;left:0;height:100%;width:100%;z-index:160;background-color:transparent !important}:host(.show-menu){display:block}:host(.show-menu) .menu-background{background-color:rgba(15, 15, 15, 0.4);background-color:var(--se-overlay, rgba(15, 15, 15, 0.4));height:100%;position:absolute;top:0;right:0;bottom:0;left:0;width:100%;z-index:100}:host(.show-menu) .actual-menu{background-color:#ffffff;background-color:var(--se-background-alternative, #ffffff);-webkit-box-shadow:rgba(0, 0, 0, 0.3) 1px 1px 4px 0px;box-shadow:rgba(0, 0, 0, 0.3) 1px 1px 4px 0px;-webkit-box-shadow:var(--shadow) 1px 1px 4px 0px;box-shadow:var(--shadow) 1px 1px 4px 0px;height:100vh;max-height:100%;overflow:hidden;position:relative;width:250px;max-width:80%;z-index:150}:host(.open-item) .actual-menu{width:80%}.menu-background.show-menu{-webkit-animation-name:fadeIn;animation-name:fadeIn}.menu-background.hide-menu{-webkit-animation-name:fadeOut;animation-name:fadeOut}.actual-menu.show-menu{-webkit-animation-name:slideInLeft;animation-name:slideInLeft}.actual-menu.hide-menu{-webkit-animation-name:slideOutLeft;animation-name:slideOutLeft}.animated{-webkit-animation-duration:0.2s;animation-duration:0.2s;animation-duration:0.2s;-webkit-animation-fill-mode:both;animation-fill-mode:both}.flex{display:-ms-flexbox;display:flex;-webkit-box-flex:0;-webkit-flex:0 1 auto;-moz-box-flex:0;-moz-flex:0 1 auto;-ms-flex:0 1 auto;flex:0 1 auto;width:100%}.flex.d-flex-center{-ms-flex-align:center;align-items:center}.menu-sidenav{margin-right:-6px;cursor:pointer}.menu-sidenav se-icon{vertical-align:-webkit-baseline-middle;vertical-align:-moz-middle-with-baseline}.header-title{margin:0}.footer-icon{text-align:center}.footer-icon:last-child{margin-bottom:3px}.external-link{background-color:#f7f7f7;background-color:var(--se-background-standard, #f7f7f7);padding:16px;text-align:center}";

const SHOW_MENU = 'show-menu';
const HIDE_MENU = 'hide-menu';
const OPEN_ITEM = 'open-item';
const SidemenuComponent = class {
  constructor(hostRef) {
    Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    this.toggled = Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "toggled", 7);
    this.open = false;
    this.items = [];
    /**
     * Defines the text displayed in the header of the Sidemenu.
     * The default value is `Menu`.
     */
    this.label = 'Menu';
    /*
     * Defines the link to be uses in the external-link element of the Sidemenu.
     * The default value is www.se.com, which will generate if no link is defined.
     * If a different url is provided it will replace the default value.
     * If an empty string is provided the external link element will not be generated.
     */
    this.link = 'www.se.com';
  }
  /**
   * Toggle the sidemenu. Optionally, pass the `item` or `id` of a sidemenu-item to open that particular menu item.
   *
   * ex: `document.getElementById("main-sidemenu").toggle("side-about");`
   */
  async toggle(itemName) {
    // Only perform toggle if no item name is passed or menu is closed
    if (!this.open || !itemName || (itemName && !this.open)) {
      // Only perform open animation if menu is closed
      if (!this.open) {
        this.el.classList.add(SHOW_MENU);
        this.addAnimation(null);
      }
      this.open = !this.open;
    }
    else if (this.selectedItem &&
      this.isItemElement(this.selectedItem, itemName)) {
      // Deselect the active item if a new item name is passed
      this.unselectAll();
    }
    if (this.open) {
      if (itemName) {
        // If an item name was provided, open that item in the menu (#228)
        const itemElement = this.getItemElement(itemName);
        if (itemElement) {
          // Select the new active element
          this.setActive(itemElement);
        }
      }
      else {
        try {
          if (this.items.find(x => x.classList.contains('active'))) {
            this.el.classList.add(OPEN_ITEM);
          }
        }
        catch (error) {
          console.log(error);
        }
      }
      // Dispatch the 'opened' event
      this.toggled.emit({ state: 'open' });
    }
    else {
      // Remove css classes and unselect the active element
      this.removeAnimation(() => {
        this.el.classList.remove(SHOW_MENU);
      });
      this.unselectAll();
      // Dispatch the 'closed' event
      this.toggled.emit({ state: 'closed' });
    }
  }
  noSelectedItem() {
    return !this.items.find(x => x === this.selectedItem);
  }
  unselectAll() {
    this.el.classList.remove(OPEN_ITEM);
    if (this.selectedItem && !this.selectedItem.childElementCount) {
      this.selectedItem = undefined;
      this.items.forEach((item) => {
        item.active = false;
      });
    }
  }
  getItemElement(name) {
    return this.items.find(i => this.isItemElement(i, name));
  }
  isItemElement(elm, name) {
    return elm.getAttribute('item') === name || elm.getAttribute('id') === name;
  }
  setActive(item) {
    if (this.items.length) {
      this.items.forEach((item) => {
        item.active = false;
      });
      setTimeout(() => {
        item.active = true;
        this.selectedItem = item;
        this.el.classList.add(OPEN_ITEM);
      }, 100);
    }
  }
  addAnimation(callback) {
    try {
      this.menuInnerEl.classList.add(SHOW_MENU);
      this.backdropEl.classList.add(SHOW_MENU);
      setTimeout(() => {
        this.menuInnerEl.classList.remove(SHOW_MENU);
        this.backdropEl.classList.remove(SHOW_MENU);
        callback && callback();
      }, 200);
    }
    catch (error) {
      console.log(error);
    }
  }
  removeAnimation(callback) {
    try {
      this.menuInnerEl.classList.add(HIDE_MENU);
      this.backdropEl.classList.add(HIDE_MENU);
      setTimeout(() => {
        this.menuInnerEl.classList.remove(HIDE_MENU);
        this.backdropEl.classList.remove(HIDE_MENU);
        callback && callback();
      }, 200);
    }
    catch (error) {
      console.log(error);
    }
  }
  watchItemList() {
    this.observer = new MutationObserver(mutations => {
      let activeItem = false;
      mutations.forEach(mutation => {
        if (mutation.addedNodes.length) {
          this.setItemsArray();
        }
        if (mutation.removedNodes.length) {
          this.setItemsArray();
          this.items.forEach((item) => {
            if (item.active) {
              activeItem = true;
            }
          });
          if (!activeItem && this.selectedItem) {
            // console.log(this.selectedItem);
            this.selectedItem = undefined;
          }
        }
      });
    });
    this.observer.observe(this.el, { childList: true });
  }
  setItemsArray() {
    this.items = Array.from(this.el.querySelectorAll('se-sidemenu-item'));
  }
  renderList() {
    return this.items.map((item) => {
      return [
        Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("se-list-item", { class: [
            !item.childElementCount ? 'hide-nav-icon' : '',
            'sidemenu-list-item',
          ].join(' '), onClick: () => this.setActive(item), selected: item.active, item: item.item, id: item.id ? `list-${item.id}` : '' }),
      ];
    });
  }
  componentWillLoad() {
    this.setItemsArray();
    this.watchItemList();
  }
  disconnectedCallback() {
    this.items.length = 0;
    this.selectedItem = undefined;
    this.observer.disconnect();
  }
  render() {
    return [
      Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "menu-background animated d-flex-row flex", onClick: () => this.toggle(), ref: el => (this.backdropEl = el) }),
      Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "actual-menu animated full-content d-flex-column flex", ref: el => (this.menuInnerEl = el) }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "d-flex flex" }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("se-block", { width: "250px" }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "d-flex-center flex" }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "menu-sidenav", onClick: () => this.toggle() }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("se-icon", { size: "large", color: "primary" }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { innerHTML: testResultsNok }))), Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("h3", { class: "header-title" }, this.label)), Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("se-divider", null), Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("se-block-content", { option: "fill" }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("se-list", { option: "nav" }, this.renderList())), Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("se-icon-lifeison", { class: "footer-icon", color: "standard" }), this.link ? (Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "external-link" }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("se-link", { class: "sidemenu-link", url: `http://${this.link}` }, this.link))) : ('')), Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("se-divider", { option: "vertical" }), Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("se-block", { ref: el => (this.menuItemInnerEl = el) }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)))),
    ];
  }
  get el() { return Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); }
};
SidemenuComponent.style = sidemenuCss;

const sidemenuItemCss = "@-webkit-keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes fadeIn{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadeOut{from{opacity:1}to{opacity:0}}@keyframes fadeOut{from{opacity:1}to{opacity:0}}@-webkit-keyframes slideInLeft{from{-webkit-transform:translate3d(-100%, 0, 0);transform:translate3d(-100%, 0, 0);visibility:visible}to{-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}}@keyframes slideInLeft{from{-webkit-transform:translate3d(-100%, 0, 0);transform:translate3d(-100%, 0, 0);visibility:visible}to{-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}}@-webkit-keyframes slideOutLeft{from{-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);visibility:visible}to{-webkit-transform:translate3d(-100%, 0, 0);transform:translate3d(-100%, 0, 0)}}@keyframes slideOutLeft{from{-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);visibility:visible}to{-webkit-transform:translate3d(-100%, 0, 0);transform:translate3d(-100%, 0, 0)}}@-webkit-keyframes slideCollapseDown{from{-webkit-transform:scaleY(0);transform:scaleY(0);visibility:visible}to{-webkit-transform:scaleY(1);transform:scaleY(1)}}@keyframes slideCollapseDown{from{-webkit-transform:scaleY(0);transform:scaleY(0);visibility:visible}to{-webkit-transform:scaleY(1);transform:scaleY(1)}}@-webkit-keyframes slideCollapseUp{from{-webkit-transform:scaleY(1);transform:scaleY(1)}to{-webkit-transform:scaleY(0);transform:scaleY(0)}}@keyframes slideCollapseUp{from{-webkit-transform:scaleY(1);transform:scaleY(1)}to{-webkit-transform:scaleY(0);transform:scaleY(0)}}:host{height:100%;width:100%}:host [role=sidenavpanel]{height:100%}:host(.navitem-hidden){display:none !important;height:0}";

const SidemenuItemComponent = class {
  constructor(hostRef) {
    Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    this.didClick = Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "didClick", 7);
    /**
     * Defines if the menu item is active or not.
     * The default setting is `false`.
     */
    this.active = false;
  }
  activeDidChange() {
    if (this.active) {
      this.didClick.emit();
    }
  }
  render() {
    return (Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["H"], { role: 'sidenavpanel', "aria-hidden": { true: !this.active }, class: [this.active ? 'active' : 'navitem-hidden'].join(' ') }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)));
  }
  static get watchers() { return {
    "active": ["activeDidChange"]
  }; }
};
SidemenuItemComponent.style = sidemenuItemCss;




/***/ })

}]);
//# sourceMappingURL=12.js.map