(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "i7K6":
/*!********************************************************!*\
  !*** ./node_modules/@se/web-ui/esm/se-app_11.entry.js ***!
  \********************************************************/
/*! exports provided: se_app, se_block, se_block_content, se_block_footer, se_block_header, se_button, se_container, se_divider, se_icon, se_loading, se_skeleton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "se_app", function() { return AppComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "se_block", function() { return BlockComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "se_block_content", function() { return BlockContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "se_block_footer", function() { return BlockFooter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "se_block_header", function() { return BlockHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "se_button", function() { return ButtonComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "se_container", function() { return ContainerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "se_divider", function() { return DividerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "se_icon", function() { return IconComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "se_loading", function() { return LoadingComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "se_skeleton", function() { return Skeleton; });
/* harmony import */ var _index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-3d6c5e6f.js */ "0Adb");


const appCss = ":host{width:100%}:root{--se-primary:#3dcd58;--se-secondary:#42b4e6;--se-standard:#626469;--se-alternative:#ffffff;--se-success:#3dcd58;--se-information:#0087cd;--se-warning:#e47f00;--se-error:#dc0a0a;--se-border:#9fa0a4;--se-border-focus:#333333;--se-divider:#e6e6e6;--se-link-visited:#3a738c;--se-primary-contrast:#ffffff;--se-secondary-contrast:#ffffff;--se-standard-contrast:#ffffff;--se-alternative-contrast:#0f0f0f;--se-success-contrast:#ffffff;--se-information-contrast:#ffffff;--se-warning-contrast:#0f0f0f;--se-error-contrast:#ffffff;--se-primary-hover:#32ad3c;--se-secondary-hover:#0087cd;--se-standard-hover:#494b50;--se-alternative-hover:#e6e6e6;--se-primary-selected:#0a9a25;--se-secondary-selected:#0f81b3;--se-standard-selected:#2f3136;--se-alternative-selected:#cccccc;--se-button-focus:#007acd;--se-background-standard:#f7f7f7;--se-background-standard-contrast:#0f0f0f;--se-background-alternative:#ffffff;--se-background-alternative-contrast:#0f0f0f;--se-background-footer:#e7e6e6;--se-background-footer-contrast:#0f0f0f;--se-overlay:rgba(15, 15, 15, 0.4);--se-overlay-loading:rgba(255, 255, 255, 0.4);--se-shadow:rgba(15, 15, 15, 0.2)}.se-app-body{overflow:hidden;margin:0 !important;padding:0;position:absolute;top:0;bottom:0;left:0;right:0;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-direction:normal;-webkit-box-orient:vertical;-webkit-flex-direction:column;-moz-flex-direction:column;-ms-flex-direction:column;flex-direction:column}@media print{.se-app-body{position:relative}}.color-standard{color:#626469;color:var(--se-standard, #626469)}.bg-standard{background-color:#626469;background-color:var(--se-standard, #626469)}.color-alternative{color:#ffffff;color:var(--se-alternative, #ffffff)}.bg-alternative{background-color:#ffffff;background-color:var(--se-alternative, #ffffff)}.color-primary{color:#3dcd58;color:var(--se-primary, #3dcd58)}.bg-primary{background-color:#3dcd58;background-color:var(--se-primary, #3dcd58)}.color-secondary{color:#42b4e6;color:var(--se-secondary, #42b4e6)}.bg-secondary{background-color:#42b4e6;background-color:var(--se-secondary, #42b4e6)}.color-success{color:#3dcd58;color:var(--se-success, #3dcd58)}.bg-success{background-color:#3dcd58;background-color:var(--se-success, #3dcd58)}.color-warning{color:#e47f00;color:var(--se-warning, #e47f00)}.bg-warning{background-color:#e47f00;background-color:var(--se-warning, #e47f00)}.color-information{color:#0087cd;color:var(--se-information, #0087cd)}.bg-information{background-color:#0087cd;background-color:var(--se-information, #0087cd)}.color-error{color:#dc0a0a;color:var(--se-error, #dc0a0a)}.bg-error{background-color:#dc0a0a;background-color:var(--se-error, #dc0a0a)}.color-standard-contrast{color:#ffffff;color:var(--se-standard-contrast, #ffffff)}.bg-standard-contrast{background-color:#ffffff;background-color:var(--se-standard-contrast, #ffffff)}.color-alternative-contrast{color:#0f0f0f;color:var(--se-alternative-contrast, #0f0f0f)}.bg-alternative-contrast{background-color:#0f0f0f;background-color:var(--se-alternative-contrast, #0f0f0f)}.color-primary-contrast{color:#ffffff;color:var(--se-primary-contrast, #ffffff)}.bg-primary-contrast{background-color:#ffffff;background-color:var(--se-primary-contrast, #ffffff)}.color-secondary-contrast{color:#ffffff;color:var(--se-secondary-contrast, #ffffff)}.bg-secondary-contrast{background-color:#ffffff;background-color:var(--se-secondary-contrast, #ffffff)}.color-success-contrast{color:#ffffff;color:var(--se-success-contrast, #ffffff)}.bg-success-contrast{background-color:#ffffff;background-color:var(--se-success-contrast, #ffffff)}.color-warning-contrast{color:#0f0f0f;color:var(--se-warning-contrast, #0f0f0f)}.bg-warning-contrast{background-color:#0f0f0f;background-color:var(--se-warning-contrast, #0f0f0f)}.color-information-contrast{color:#ffffff;color:var(--se-information-contrast, #ffffff)}.bg-information-contrast{background-color:#ffffff;background-color:var(--se-information-contrast, #ffffff)}.color-error-contrast{color:#ffffff;color:var(--se-error-contrast, #ffffff)}.bg-error-contrast{background-color:#ffffff;background-color:var(--se-error-contrast, #ffffff)}.background-standard{background-color:#f7f7f7;background-color:var(--se-background-standard, #f7f7f7)}.background-standard-contrast{color:#0f0f0f;color:var(--se-background-standard-contrast, #0f0f0f)}.background-alternative{background-color:#ffffff;background-color:var(--se-background-alternative, #ffffff)}.background-alternative-contrast{color:#0f0f0f;color:var(--se-background-alternative-contrast, #0f0f0f)}.background-footer{background-color:#e7e6e6;background-color:var(--se-background-footer, #e7e6e6)}.background-footer-contrast{color:#0f0f0f;color:var(--se-background-footer-contrast, #0f0f0f)}.overlay{background-color:rgba(15, 15, 15, 0.4);background-color:var(--se-overlay, rgba(15, 15, 15, 0.4))}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:\"\";content:none}table{border-collapse:collapse;border-spacing:0}body,html,se-app{font-weight:300;font-size:16px;background-color:#ffffff;background-color:var(--se-background-alternative, #ffffff);color:#0f0f0f;color:var(--se-background-alternative-contrast, #0f0f0f)}body a,html a,se-app a{text-decoration:none}body strong,body .bold,html strong,html .bold,se-app strong,se-app .bold{font-weight:bold}body.small,body small,html.small,html small,se-app.small,se-app small{line-height:1.2;font-size:14px}body.nano,html.nano,se-app.nano{font-size:12px}body.large,html.large,se-app.large{font-size:18px}body h1 a,body h2 a,body h3 a,body h4 a,body h5 a,body h6 a,html h1 a,html h2 a,html h3 a,html h4 a,html h5 a,html h6 a,se-app h1 a,se-app h2 a,se-app h3 a,se-app h4 a,se-app h5 a,se-app h6 a{font-weight:inherit}body h1,html h1,se-app h1{font-weight:300;line-height:50px;font-size:42px}body h2,html h2,se-app h2{font-weight:300;line-height:45px;font-size:37px}body h3,html h3,se-app h3{font-weight:300;line-height:40px;font-size:30px}body h4,html h4,se-app h4{font-weight:300;line-height:30px;font-size:22px}body h5,html h5,se-app h5{font-weight:300;line-height:25px;font-size:16px;font-weight:bold}body h6,html h6,se-app h6{font-weight:300;line-height:20px;font-size:14px;font-weight:bold}body p,html p,se-app p{font-weight:300;font-size:16px}body p strong,body p .bold,html p strong,html p .bold,se-app p strong,se-app p .bold{font-weight:bold}body p.small,body p small,html p.small,html p small,se-app p.small,se-app p small{line-height:1.2;font-size:14px}body p.nano,html p.nano,se-app p.nano{font-size:12px}body p.large,html p.large,se-app p.large{font-size:18px}body em,html em,se-app em{font-style:italic}strong,.bold{font-weight:500}.normal{font-weight:normal}.light{font-weight:300}.thin{font-weight:200}small{font-size:75%}.frame-text{padding:2.5px 10px;margin-right:10px;border:1px solid;-webkit-border-radius:2;-moz-border-radius:2;border-radius:2 px;border-color:#e7e6e6;border-color:var(--se-background-footer, #e7e6e6);color:#333333}@media only screen and (min-width: 360px){.flow-text{font-size:1.2rem}}@media only screen and (min-width: 390px){.flow-text{font-size:1.224rem}}@media only screen and (min-width: 420px){.flow-text{font-size:1.248rem}}@media only screen and (min-width: 450px){.flow-text{font-size:1.272rem}}@media only screen and (min-width: 480px){.flow-text{font-size:1.296rem}}@media only screen and (min-width: 510px){.flow-text{font-size:1.32rem}}@media only screen and (min-width: 540px){.flow-text{font-size:1.344rem}}@media only screen and (min-width: 570px){.flow-text{font-size:1.368rem}}@media only screen and (min-width: 600px){.flow-text{font-size:1.392rem}}@media only screen and (min-width: 630px){.flow-text{font-size:1.416rem}}@media only screen and (min-width: 660px){.flow-text{font-size:1.44rem}}@media only screen and (min-width: 690px){.flow-text{font-size:1.464rem}}@media only screen and (min-width: 720px){.flow-text{font-size:1.488rem}}@media only screen and (min-width: 750px){.flow-text{font-size:1.512rem}}@media only screen and (min-width: 780px){.flow-text{font-size:1.536rem}}@media only screen and (min-width: 810px){.flow-text{font-size:1.56rem}}@media only screen and (min-width: 840px){.flow-text{font-size:1.584rem}}@media only screen and (min-width: 870px){.flow-text{font-size:1.608rem}}@media only screen and (min-width: 900px){.flow-text{font-size:1.632rem}}@media only screen and (min-width: 930px){.flow-text{font-size:1.656rem}}@media only screen and (min-width: 960px){.flow-text{font-size:1.68rem}}@media only screen and (max-width: 360px){.flow-text{font-size:1.2rem}}.uppercase{text-transform:uppercase}body ::-webkit-scrollbar,html ::-webkit-scrollbar{height:12px;width:12px}body ::-webkit-scrollbar-track,body ::-webkit-scrollbar-thumb,html ::-webkit-scrollbar-track,html ::-webkit-scrollbar-thumb{border:4px solid transparent;background-clip:padding-box;border-radius:16px}body ::-webkit-scrollbar-track,html ::-webkit-scrollbar-track{background-color:#e6e6e6;background-color:var(--se-divider, #e6e6e6)}body ::-webkit-scrollbar-thumb,html ::-webkit-scrollbar-thumb{background-color:#9fa0a4;background-color:var(--se-border, #9fa0a4)}body ::-webkit-scrollbar-thumb:hover,html ::-webkit-scrollbar-thumb:hover{background-color:#333333;background-color:var(--se-border-focus, #333333);border:2px solid transparent}";

const listDark = [
  { name: '--se-background-standard', value: '#505559' },
  { name: '--se-background-standard-contrast', value: '#ffffff' },
  { name: '--se-background-alternative', value: '#293133' },
  { name: '--se-background-alternative-contrast', value: '#ffffff' },
  { name: '--se-alternative', value: '#293133' },
  { name: '--se-alternative-contrast', value: '#ffffff' },
  { name: '--se-alternative-hover', value: '#434B4D' },
  { name: '--se-alternative-selected', value: '#5C6466' },
  { name: '--se-standard', value: '#CBCBCB' },
  { name: '--se-standard-contrast', value: '#333333' },
  { name: '--se-standard-hover', value: '#B2B2B2' },
  { name: '--se-standard-selected', value: '#989898' },
  { name: '--se-information', value: '#42B4E6' },
  { name: '--se-shadow', value: '#10181A' },
  { name: '--se-divider', value: '#494B50' },
  { name: '--se-border', value: '#626469' },
  { name: '--se-border-focus', value: '#626469' },
  { name: '--se-overlay', value: 'rgba(255,255,255,0.4)' },
  { name: '--se-overlay-loading', value: 'rgba(0,0,0,0.2)' },
];
const AppComponent = class {
  constructor(hostRef) {
    Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    this.themeChanged = Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "themeChanged", 7);
    /**
     * Define the type of application. updating the option will impact the font used.
     * - `technical`: For technical application (i.e. EcoStuxure), the font used will be `Nunito`.
     * - `website` or `dcx`: For `se.com` application, the font used will be `Arial Rounded`.
     */
    this.option = 'technical';
    /**
     * Define the them of application. Update the `--se-` css variables of the application.
     * - `light`: light mode of the design.
     * - `dark`: dark mode of the application.
     * - `auto`: Will match the OS configuration
     */
    this.theme = 'light';
  }
  themeDidChange() {
    switch (this.theme) {
      case 'auto':
        this.prefersDark && this.toggleDarkTheme(this.prefersDark.matches);
        break;
      case 'dark':
        this.dark();
        break;
      default:
        this.light();
    }
  }
  light() {
    const root = document.documentElement;
    listDark.forEach(item => {
      root.style.removeProperty(item.name);
    });
    this.themeChanged.emit('light');
    this.classTheme = 'isLight';
  }
  dark() {
    const root = document.documentElement;
    listDark.forEach(item => {
      root.style.setProperty(item.name, item.value);
    });
    this.themeChanged.emit('dark');
    this.classTheme = 'isDark';
  }
  updateBodyClass(newClass) {
    // Update the body class to make sure all component affected by the framework are affected by the font family
    if (document && document.body) {
      // Remove the class if already there
      ['se-font-technical', 'se-font-website'].forEach(classItem => {
        document.body.classList.remove(classItem);
      });
      // Add the new class
      document.body.classList.add(newClass);
    }
  }
  componentWillLoad() {
    this.prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    // Add listener for future change
    this.prefersDark.addListener(mediaQuery => this.toggleDarkTheme(mediaQuery.matches));
    // toggle theme the first time
    this.themeDidChange();
  }
  componentWillUnload() {
    this.prefersDark && this.prefersDark.removeListener();
  }
  toggleDarkTheme(shouldAdd) {
    if (this.theme === 'auto') {
      shouldAdd ? this.dark() : this.light();
    }
  }
  render() {
    const bodyClass = this.option === 'technical' ? 'se-font-technical' : 'se-font-website';
    this.updateBodyClass(bodyClass);
    return (Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["H"], { class: {
        'se-app-body': !this.pageScroll,
        [bodyClass]: true,
        [this.classTheme]: true,
      } }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)));
  }
  static get watchers() { return {
    "theme": ["themeDidChange"]
  }; }
};
AppComponent.style = appCss;

const blockCss = ":host{position:relative;display:-ms-flexbox;display:-webkit-flex;display:flex;width:100%;height:100%}:host(.block-flex){-webkit-box-direction:normal;-webkit-box-orient:vertical;-webkit-flex-direction:column;-moz-flex-direction:column;-ms-flex-direction:column;flex-direction:column}:host(.block-block),:host([display=block]){width:auto;height:auto}:host(.block-block) .block-body,:host([display=block]) .block-body{overflow:unset}:host(.block-grid) .block-body,:host([display=grid]) .block-body{overflow:unset}:host(.grid-large){grid-column:span 2;grid-row:span 2}:host(.grid-vertical){grid-row:span 2}:host(.grid-horizontal){grid-column:span 2}:host(a *:not(a)){color:initial;text-decoration:none}.clickable,.clickable-nobar{position:relative}.clickable:hover,.clickable-nobar:hover{cursor:pointer;-webkit-box-shadow:0 0 16px 2px rgba(0, 0, 0, 0.15);box-shadow:0 0 16px 2px rgba(0, 0, 0, 0.15)}.clickable:not(-nobar):hover:before{background-color:#3dcd58;background-color:var(--se-primary, #3dcd58);height:3px}.clickable:not(-nobar):before{content:\"\";background:rgba(255, 255, 255, 0);position:absolute;top:0;left:0;width:calc(100%);max-width:calc(100%);text-align:center;-webkit-transition:0.2s;transition:0.2s}.clickable.corner-none:before{border-radius:0 0 0 0}.clickable.corner-nano:before{border-radius:2px 2px 0 0}.clickable.corner-small:before{border-radius:4px 4px 0 0}.block-body{-webkit-transition:0.2s;transition:0.2s;overflow:auto;-webkit-box-flex:1;-webkit-flex:1 1 auto;-moz-box-flex:1;-moz-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-direction:normal;-webkit-box-orient:vertical;-webkit-flex-direction:column;-moz-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.block-body.basic{margin:0}.block-body.widget{margin:8px}.block-body.card{border-radius:4px;margin:16px;border:1px solid;border-color:#e6e6e6;border-color:var(--se-divider, #e6e6e6)}.block-body.card-old{border-radius:4px;margin:16px;-webkit-box-shadow:0 0 1px 0 rgba(51, 51, 51, 0.14), 0 2px 7px 0 rgba(51, 51, 51, 0.2);box-shadow:0 0 1px 0 rgba(51, 51, 51, 0.14), 0 2px 7px 0 rgba(51, 51, 51, 0.2)}.block-body.corner-none{border-radius:0}.block-body.corner-nano{border-radius:2px}.block-body.corner-small{border-radius:4px}.block-body.margin-none{margin:0}.block-body.margin-small{margin:4px}.block-body.margin-medium{margin:8px}.block-body.margin-large{margin:16px}.block-body.margin-xlarge{margin:32px}.block-body.outline-standard{border:1px solid;border-color:#e6e6e6;border-color:var(--se-divider, #e6e6e6)}.block-body.outline-primary{border:1px solid;border-color:#3dcd58;border-color:var(--se-primary, #3dcd58)}.block-body.outline-secondary{border:1px solid;border-color:#42b4e6;border-color:var(--se-secondary, #42b4e6)}.block-body.block-bg-alternative{background-color:#ffffff;background-color:var(--se-background-alternative, #ffffff)}.block-body.block-bg-standard{background-color:#f7f7f7;background-color:var(--se-background-standard, #f7f7f7)}.block-body.block-bg-none{background-color:transparent}";

const BlockComponent = class {
  constructor(hostRef) {
    Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    /**
     * Defines whether or not a divider will be applied to the se-block header and footer.
     * `true` will add a divider to the se-block-header and se-block-footer, if they are present.
     * `false` will remove dividers on the se-block header and se-block-footer, if they are present.
     */
    this.divider = false;
    /**
     * Defines the se-block outline.
     * Default setting is `false`.
     * Setting this property to `true` will add a 1px border.
     */
    this.outline = false;
    /**
     * Defines the se-block outline color.
     * Default setting is `standard`, which renders the outline with the `$se-super-light-grey` color.
     * `primary` defines the outline color as `$se-life-green`, used primarily for technical applications when the block is selected.
     * `secondary` defines the outline color as `$se-sky-blue`.
     */
    this.outlineColor = 'standard';
    /**
     * Defines the se-block item's ability to appear clickable / selectable.
     * Default setting is `false`, resulting in no hover effects on the block level.
     * `true` adds a hover effect on the se-block. The cursor will change to `pointer`, a box-shadow will appear, and a `$se-life-green` bar will appear at the top of the block.
     */
    this.clickable = false;
    /**
     * Defines clickable se-block item's bar on hover.
     * Default setting is `false`.
     * `true` renders a `$se-life-green` colored bar on a hover.
     */
    this.clickableBar = false;
    /**
     * Defines how to display the element.
     * `flex` is the default display.
     * `block` helps in specific cases. Make sure you know what you are doing.
     */
    this.display = 'flex';
    /**
     * Optional property that defines the background color of the block.
     * Default setting is `alternative`, rendering the "alternative" theme background.
     * `none` has no background.
     * `standard` renders the "standard" theme background.
     */
    this.color = 'alternative';
    /**
     * When the display is set to `grid`, this property determines if the block should have double the width and height of a standard grid item.
     * Default setting is `false`, spanning 1 row and 1 column (1/1).
     * `true` spans 2 rows and 2 columns (2/2).
     * `vertical` spans 2 rows (2/1).
     * `horizontal` spans 2 columns (1/2).
     */
    this.enlarged = false;
    /**
     * Displays the loading icon if set to `true`.  Default setting is `false`.
     */
    this.loading = false;
    /**
     * Defines the visual appearance of a block.
     * Default setting is `basic`, which will remove any spacing.
     * `widget` will create a flat widget look and feel with a `medium` margin around it.
     * `card` will create a card look and feel with rounded corners, and with a `large` margin around it.
     * Pending deprecation - `card-old` follows a prior design pattern with a box-shadow and will be deprecated.
     */
    this.option = 'basic';
  }
  dividerDidChange() {
    this.updateItem();
  }
  widthDidChange() {
    this.el.style.width = this.width || 'auto';
    this.el.style.minWidth = this.width || 'auto';
  }
  heightDidChange() {
    this.el.style.height = this.height || 'auto';
    this.el.style.minHeight = this.height || 'auto';
  }
  optionDidChange() {
    this.updateItem();
  }
  componentWillLoad() {
    this.updateSize();
    this.updateItem();
  }
  updateItem() {
    if (this.option !== undefined && this.divider === undefined) {
      this.divider = this.option === 'card' || this.option === 'card-old';
    }
    const childElms = 'se-block-header, se-block-content, se-block-footer';
    Array.from(this.el.querySelectorAll(childElms)).forEach((item) => {
      // have to do this because otherwise blocks inside other blocks get settings overridden by higher ancestors
      // Using "closest" function in case the current element is wrapped inside another one
      if (item.closest('se-block') === this.el) {
        if (item.divider === undefined || item.divider === null) {
          item.divider = this.divider;
        }
        if (!item.option) {
          item.option = this.option;
        }
      }
    });
  }
  updateSize() {
    if (this.width) {
      this.el.style.width = this.width;
      this.el.style.minWidth = this.width;
    }
    if (this.height) {
      this.el.style.height = this.height;
      this.el.style.minHeight = this.height;
    }
  }
  render() {
    const outlineColor = this.outlineColor ? `-${this.outlineColor}` : '';
    const outline = this.outline === true ? `outline${outlineColor}` : 'outline-false';
    let enlargedClass = '';
    if (this.display === 'grid') {
      switch (this.enlarged) {
        case false:
          break;
        case 'vertical':
          enlargedClass = 'grid-vertical';
          break;
        case 'horizontal':
          enlargedClass = 'grid-horizontal';
          break;
        default:
          enlargedClass = 'grid-large';
          break;
      }
    }
    return (Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["H"], { class: {
        [`block-${this.display}`]: !!this.display,
        [enlargedClass]: true,
        [`block-bg-${this.color}`]: !!this.color,
      } }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: [
        'block-body',
        this.clickable === true
          ? `${this.clickableBar !== false ? 'clickable' : 'clickable-nobar'}`
          : '',
        this.option,
        this.outline !== undefined ? outline : '',
        this.corner !== undefined ? `corner-${this.corner}` : '',
        this.margin !== undefined ? `margin-${this.margin}` : '',
        this.color !== undefined ? `block-bg-${this.color}` : '',
      ].join(' ') }, this.loading ? Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("se-loading", { loading: this.loading }) : '', Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null))));
  }
  get el() { return Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); }
  static get watchers() { return {
    "divider": ["dividerDidChange"],
    "width": ["widthDidChange"],
    "height": ["heightDidChange"],
    "option": ["optionDidChange"]
  }; }
};
BlockComponent.style = blockCss;

const blockContentCss = ":host{overflow-x:hidden;position:relative;-webkit-box-flex:1;-webkit-flex:1 1 auto;-moz-box-flex:1;-moz-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto}.se-block-content{padding:8px 16px}.fill-content{padding:0}";

const BlockContent = class {
  constructor(hostRef) {
    Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
  }
  render() {
    return (Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: [
        'se-block-content',
        this.option ? `${this.option}-content` : '',
      ].join(' ') }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)));
  }
  get el() { return Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); }
};
BlockContent.style = blockContentCss;

const blockFooterCss = ".se-block-footer{position:relative;padding:4px;min-height:40px;-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;-moz-align-items:center;align-items:center;display:-ms-flexbox;display:-webkit-flex;display:flex}.fill{padding:0}.flex{-webkit-box-flex:1;-webkit-flex:1 1 auto;-moz-box-flex:1;-moz-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto}.card{border-top:none}.column{-webkit-box-direction:normal;-webkit-box-orient:vertical;-webkit-flex-direction:column;-moz-flex-direction:column;-ms-flex-direction:column;flex-direction:column}";

const BlockFooter = class {
  constructor(hostRef) {
    Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    /**
     * Defines the direction of the flex element.
     * Default setting is `row`. This is perfect to use with flex content.
     * `column` is useful in specific cases. Make sure you know what you are doing.
     */
    this.direction = 'row';
  }
  render() {
    return (Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["H"], null, this.divider ? Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("se-divider", null) : null, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: ['se-block-footer', this.option, this.direction].join(' ') }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "flex" }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "start" })), Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null))));
  }
  get el() { return Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); }
};
BlockFooter.style = blockFooterCss;

const blockHeaderCss = ".se-block-header{position:relative;padding:4px 4px 2px 8px;min-height:40px;-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;-moz-align-items:center;align-items:center;display:-ms-flexbox;display:-webkit-flex;display:flex}.flex{-webkit-box-flex:1;-webkit-flex:1 1 auto;-moz-box-flex:1;-moz-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto}div.middle{font-weight:300;line-height:30px;font-size:22px;margin:8px}.card{padding-bottom:4px}.fill{padding:0}.fill div.middle{margin:0;max-width:100%}::slotted(h1),::slotted(h2),::slotted(h3),::slotted(h4),::slotted(h5),::slotted(h6){margin-top:0 !important;margin-bottom:0 !important}";

const BlockHeader = class {
  constructor(hostRef) {
    Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
  }
  render() {
    return (Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["H"], null, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: ['se-block-header', this.option].join(' ') }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "start" }), Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "flex middle" }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)), Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "end" })), this.divider ? Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("se-divider", null) : null));
  }
  get el() { return Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); }
};
BlockHeader.style = blockHeaderCss;

const buttonCss = ":host{min-width:0;display:-ms-inline-flexbox;display:inline-flex}:host(.p-small){margin:4px}:host(.p-medium){margin:8px}:host(.p-large){margin:16px}:host(.disabled){pointer-events:none}:host(.display-block){display:-ms-flexbox;display:flex}:host(.display-block) button{width:100%;margin-left:0;margin-right:0}:host(.banner-child) button{height:40px;margin-right:16px}@media screen and (max-width: 767px){:host(.banner-child){display:-ms-flexbox;display:flex}:host(.banner-child) button{width:100%}}@media screen and (min-width: 900px){:host(.banner-child) button.outline{color:#ffffff;border-color:#ffffff}}:host(.grouped) button{border-radius:0;border-left:1px solid #333333}:host(.grouped:first-child) button{margin-left:4px;border-left:none;border-top-left-radius:2px;border-bottom-left-radius:2px}:host(.grouped:last-child) button{margin-right:4px;border-top-right-radius:2px;border-bottom-right-radius:2px}:host(.backtotop) button.fab{color:#0f0f0f;color:var(--se-alternative-contrast, #0f0f0f);background-color:#9fa0a4;background-color:var(--se-border, #9fa0a4)}:host(.backtotop) button.fab:hover{color:#626469;color:var(--se-standard, #626469);background-color:#ffffff;background-color:var(--se-standard-contrast, #ffffff)}:host([slot=trigger]) button{padding-right:22px}:host([slot=trigger]) button:after{content:\"\";margin-top:4px;margin-right:-8px;margin-left:12px;-webkit-transform:translateY(-50%);transform:translateY(-50%);width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid}::slotted(se-icon[slot=icon]),se-icon{margin-right:8px}:host[icon-only] ::slotted(se-icon[slot=icon]){margin-right:0}button{padding:0 16px;border:none;border-radius:2px;outline:none;cursor:pointer;font-family:inherit;font-weight:300;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;-moz-align-items:center;align-items:center;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;-webkit-box-pack:center;-moz-box-pack:center;-ms-flex-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-transition-property:outline-width;transition-property:outline-width;-webkit-transition-duration:0.2s;transition-duration:0.2s}button:focus{outline-width:2px;outline-color:#007acd;outline-color:var(--se-button-focus, #007acd);outline-style:solid}button:focus{outline-style:solid;outline-offset:1px;outline-width:2px;outline-color:#007acd;outline-color:var(--se-button-focus, #007acd)}button.iconOnly{padding:0 4px}button.iconOnly ::slotted(se-icon[slot=icon]),button.iconOnly se-icon{margin-right:0}button[disabled]{cursor:default;opacity:0.5}button.raised{-webkit-box-shadow:1px 1px 4px 0 rgba(0, 0, 0, 0.3);box-shadow:1px 1px 4px 0 rgba(0, 0, 0, 0.3)}button.inherit{background-color:transparent !important;color:inherit !important}button.nano{height:24px}button.nano .text{font-size:12px}button.small{height:32px}button.small .text{font-size:16px}button.medium{height:40px}button.medium .text{font-size:16px}button.large{height:48px}button.large .text{font-size:18px}button.standard{color:#ffffff;color:var(--se-standard-contrast, #ffffff);background-color:#626469;background-color:var(--se-standard, #626469)}button.standard:hover{background-color:#494b50;background-color:var(--se-standard-hover, #494b50)}button.standard:active,button.standard.selected{background-color:#2f3136;background-color:var(--se-standard-selected, #2f3136)}button.standard.outline{border:1px solid;background-color:transparent;border-color:#626469;border-color:var(--se-standard, #626469);color:#0f0f0f;color:var(--se-background-standard-contrast, #0f0f0f)}button.standard.outline:hover{background-color:rgba(73, 75, 80, 0.2)}button.standard.outline:active,button.standard.outline.selected{background-color:rgba(47, 49, 54, 0.2)}button.alternative{color:#0f0f0f;color:var(--se-alternative-contrast, #0f0f0f);background-color:#ffffff;background-color:var(--se-alternative, #ffffff)}button.alternative:hover{background-color:#e6e6e6;background-color:var(--se-alternative-hover, #e6e6e6)}button.alternative:active,button.alternative.selected{background-color:#cccccc;background-color:var(--se-alternative-selected, #cccccc)}button.alternative.outline{border:1px solid;background-color:transparent;border-color:#ffffff;border-color:var(--se-alternative, #ffffff)}button.alternative.outline:hover{background-color:rgba(230, 230, 230, 0.6)}button.alternative.outline:active,button.alternative.outline.selected{background-color:rgba(204, 204, 204, 0.6)}button.primary{color:#ffffff;color:var(--se-primary-contrast, #ffffff);background-color:#3dcd58;background-color:var(--se-primary, #3dcd58)}button.primary:hover{background-color:#32ad3c;background-color:var(--se-primary-hover, #32ad3c)}button.primary:active,button.primary.selected{background-color:#0a9a25;background-color:var(--se-primary-selected, #0a9a25)}button.primary.outline{border:1px solid;background-color:transparent;color:#3dcd58;color:var(--se-primary, #3dcd58);border-color:#3dcd58;border-color:var(--se-primary, #3dcd58)}button.primary.outline:hover{background-color:rgba(61, 205, 88, 0.3)}button.primary.outline:active,button.primary.outline.selected{background-color:rgba(10, 154, 37, 0.3)}button.primary.outline[disabled]{background-color:transparent}button.secondary{color:#ffffff;color:var(--se-secondary-contrast, #ffffff);background-color:#42b4e6;background-color:var(--se-secondary, #42b4e6)}button.secondary:hover{background-color:#0087cd;background-color:var(--se-secondary-hover, #0087cd)}button.secondary:active,button.secondary.selected{background-color:#0f81b3;background-color:var(--se-secondary-selected, #0f81b3)}button.secondary.outline{border:1px solid;background-color:transparent;color:#42b4e6;color:var(--se-secondary, #42b4e6);border-color:#42b4e6;border-color:var(--se-secondary, #42b4e6)}button.secondary.outline:hover{background-color:rgba(66, 180, 230, 0.3)}button.secondary.outline:active,button.secondary.outline.selected{background-color:rgba(15, 129, 179, 0.3)}button.secondary.outline[disabled]{background-color:transparent}button.login,button.signup{height:32px;font-size:18px;line-height:22px}button.fab{cursor:pointer;border-radius:50%;font-size:24px;width:56px;height:56px;-moz-box-shadow:0 0 4px rgba(0, 0, 0, 0.14), 0 4px 8px rgba(0, 0, 0, 0.28);-webkit-box-shadow:0 0 4px rgba(0, 0, 0, 0.14), 0 4px 8px rgba(0, 0, 0, 0.28);box-shadow:0 0 4px rgba(0, 0, 0, 0.14), 0 4px 8px rgba(0, 0, 0, 0.28)}button.fab:hover{-moz-box-shadow:0 0 8px rgba(0, 0, 0, 0.14), 0 8px 16px rgba(0, 0, 0, 0.28);-webkit-box-shadow:0 0 8px rgba(0, 0, 0, 0.14), 0 8px 16px rgba(0, 0, 0, 0.28);box-shadow:0 0 8px rgba(0, 0, 0, 0.14), 0 8px 16px rgba(0, 0, 0, 0.28)}button.fab.alternative{background-color:#ffffff;background-color:var(--se-alternative, #ffffff);color:#3dcd58;color:var(--se-primary, #3dcd58)}button.minifab{width:40px;height:40px;border-radius:50%;margin:0 20px 20px 0px;padding:0;margin:0 0 15px 0;-moz-box-shadow:0 0 4px rgba(0, 0, 0, 0.14), 0 4px 8px rgba(0, 0, 0, 0.28);-webkit-box-shadow:0 0 4px rgba(0, 0, 0, 0.14), 0 4px 8px rgba(0, 0, 0, 0.28);box-shadow:0 0 4px rgba(0, 0, 0, 0.14), 0 4px 8px rgba(0, 0, 0, 0.28);background-color:#ffffff;background-color:var(--se-alternative, #ffffff);color:#0f0f0f;color:var(--se-alternative-contrast, #0f0f0f)}button.minifab:hover{-moz-box-shadow:0 0 4px rgba(0, 0, 0, 0.14), 0 4px 8px rgba(0, 0, 0, 0.28);-webkit-box-shadow:0 0 4px rgba(0, 0, 0, 0.14), 0 4px 8px rgba(0, 0, 0, 0.28);box-shadow:0 0 4px rgba(0, 0, 0, 0.14), 0 4px 8px rgba(0, 0, 0, 0.28);background-color:#494b50;background-color:var(--se-standard-hover, #494b50)}button.minifab[data-tooltip]{overflow:visible}button.minifab[data-tooltip]:before{font-weight:300;border-radius:23.27px;content:attr(data-tooltip);font-size:12px;padding:5px 7px;margin-right:12px;position:absolute;right:100%;white-space:nowrap;color:#ffffff;color:var(--se-standard-contrast, #ffffff);background-color:#626469;background-color:var(--se-standard, #626469)}";

const ButtonComponent = class {
  constructor(hostRef) {
    Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    this.didClick = Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "didClick", 7);
    /**
     * Defines the visual appearance of the button.
     * `flat` is the default option, which includes a gray background.
     * `raised` adds a box shadow to the button.
     * `outline` adds a border to the button.
     * `login` and `signup` are specific options for "Login" and "Sign Up" buttons in your application.
     */
    this.option = 'flat';
    /**
     * Defines the size of the button.
     * `nano` sets the font to 12px font and a 24px height.  Used primarily with the `se-radio-group` component.
     * `small` is the default option, with a 14px font and a 32px height.
     * `medium` sets the font to 16px and the height to 40px.
     * `large` sets the font to 18px and the height to 48px.
     */
    this.size = 'small';
    /**
     * Defines the background color of the button. The default setting is `standard`.
     */
    this.color = 'standard';
    /**
     * Property to specify if the button should only display an icon (no extra spacing).
     */
    this.iconOnly = false;
    /**
     * Optional property.
     * `button`	is the default setting, creating a clickable button.
     * `submit`	creates a "submit" button (useful to submit form-data).
     * `reset`	creates a reset button (useful to reset form-data to its initial values).
     */
    this.type = 'button';
    /**
     * optional property. define the padding around the button
     * `none` no padding.
     * `small` 4px padding: default
     * `medium` 8px padding.
     * `large` 16px padding.
     */
    this.padding = 'small';
    /**
     * Optional property that defines if the button is disabled.  Set to `false` by default.
     */
    this.disabled = false;
  }
  optionDidChange() {
    if (this.option === 'login') {
      this.color = 'primary';
      this.block = true;
    }
    if (this.option === 'signup') {
      this.color = 'secondary';
      this.block = true;
    }
  }
  /**
   * Sets the disabled property for your button from the parent component.
   * @param val set to `true` or `false`.
   */
  async setDisabled(val) {
    this.disabled = val;
  }
  /**
   * Indicates if the button is part of a group of buttons within the `se-radio-group` component.
   */
  async setGrouped() {
    this.grouped = true;
    this.padding = 'none';
  }
  buttonClickedHandler(ev) {
    if (this.type !== 'button') {
      // this button wants to specifically submit a form
      // climb up the dom to see if we're in a <form>
      // and if so, then use JS to submit it
      // https://github.com/ionic-team/ionic/blob/master/core/src/components/button/button.tsx
      const form = this.el.closest('form');
      if (form) {
        ev.preventDefault();
        const fakeButton = window.document.createElement('button');
        fakeButton.type = this.type;
        fakeButton.style.display = 'none';
        form.appendChild(fakeButton);
        fakeButton.click();
        fakeButton.remove();
      }
    }
  }
  toggle() {
    if (this.disabled) {
      return;
    }
    if (this.grouped) {
      this.selected = !this.selected;
      this.didClick.emit({ selected: this.selected, value: this.value });
    }
    if (this.option === 'minifab') {
      this.didClick.emit({ value: this.caption });
    }
  }
  componentWillLoad() {
    this.optionDidChange();
  }
  render() {
    const { color, size, option, icon, iconColor, iconOnly, selected } = this;
    const isIconOnly = iconOnly || (option && option.includes('fab'));
    const id = this.el.getAttribute('id');
    return (Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["H"], { class: {
        disabled: this.disabled,
        grouped: this.grouped,
        'display-block': this.block,
        minifab: this.option === 'minifab',
        [`p-${this.padding}`]: !!this.padding,
      }, onClick: () => this.el.blur() }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { disabled: this.disabled, "data-tooltip": this.caption, type: this.type, id: id ? `wc-${id}` : '', onClick: () => this.toggle(), class: {
        [color]: true,
        [size]: true,
        [option]: true,
        selected,
        iconOnly: isIconOnly,
      } }, icon && (Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("se-icon", { size: this.grouped && this.size !== 'nano' ? 'medium' : 'small', color: iconColor }, icon)), Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "icon" }), !isIconOnly && (Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "text" }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null))))));
  }
  get el() { return Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); }
  static get watchers() { return {
    "option": ["optionDidChange"]
  }; }
};
ButtonComponent.style = buttonCss;

const containerCss = ":host{-webkit-box-sizing:border-box;box-sizing:border-box;overflow:auto;position:relative}:host(.absolute),:host([position=absolute]){position:absolute;top:0;bottom:0;left:0;right:0}:host(.row-dir){-webkit-box-direction:normal;-webkit-box-orient:horizontal;-webkit-flex-direction:row;-moz-flex-direction:row;-ms-flex-direction:row;flex-direction:row}:host(.column-dir),:host([direction=column]){-webkit-box-direction:normal;-webkit-box-orient:vertical;-webkit-flex-direction:column;-moz-flex-direction:column;-ms-flex-direction:column;flex-direction:column}:host(.flex-display){-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-flex:1;-webkit-flex:1 1 auto;-moz-box-flex:1;-moz-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;display:-ms-flexbox;display:-webkit-flex;display:flex}:host(.block-display),:host([display=block]){display:block !important;width:100%}:host(.grid-display),:host([display=grid]){display:grid;width:100%;width:-webkit-fill-available}:host(.fill-content:not(.block-display)){padding:0;height:100%}:host(.card-content:not(.block-display)){padding:8px}:host(.ct-padding-none),:host(.ct-padding-none.card-content:not(.block-display)),:host(.ct-padding-none.fill-content:not(.block-display)),:host(.ct-padding-none.widget-content:not(.block-display)){padding:0}:host(.ct-padding-small),:host(.ct-padding-small.card-content:not(.block-display)),:host(.ct-padding-small.fill-content:not(.block-display)),:host(.widget-content:not(.block-display)){padding:4px}:host(.ct-padding-medium),:host(.ct-padding-medium.card-content:not(.block-display)),:host(.ct-padding-medium.fill-content:not(.block-display)),:host(.ct-padding-medium.widget-content:not(.block-display)){padding:8px}:host(.ct-padding-large),:host(.ct-padding-large.card-content:not(.block-display)),:host(.ct-padding-large.fill-content:not(.block-display)),:host(.ct-padding-large.widget-content:not(.block-display)){padding:16px}:host(.ct-padding-xlarge),:host(.ct-padding-xlarge.card-content:not(.block-display)),:host(.ct-padding-xlarge.fill-content:not(.block-display)),:host(.ct-padding-xlarge.widget-content:not(.block-display)){padding:32px}:host(.centered-content){display:block}:host(.centered-content) .wrapper-center{padding-right:8px;padding-left:8px;margin-right:auto;margin-left:auto}@media (min-width: 1100px){:host(.centered-content) .wrapper-center{max-width:1180px}}:host(.ct-bg-standard){background-color:#f7f7f7;background-color:var(--se-background-standard, #f7f7f7);color:#0f0f0f;color:var(--se-background-standard-contrast, #0f0f0f)}:host(.ct-bg-alternative){color:#0f0f0f;color:var(--se-background-alternative-contrast, #0f0f0f);background-color:#ffffff;background-color:var(--se-background-alternative, #ffffff)}";

const ContainerComponent = class {
  constructor(hostRef) {
    Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    /**
     * Defines the inner appearance of a container.
     * `fill` is the default option, taking the full space of the container. This option automatically sets the color property to `standard` (gray) if color has not been set.
     * `widget` adds a `small` padding around the container to equally space all child elements. This option automatically sets the color property to `standard` (gray) if color has not been set.
     * `centered` centers the container so the content does not exceed a maximum width.
     * `card` adds a `medium` padding around each child element.  This option automatically sets the color property to `alternative` (white) if color has not been set.
     * Pending deprecation - `card-old` follows a prior design pattern with a box-shadow and will be deprecated.
     * `inherited` will insure that no specific style is applied to the container.
     */
    this.option = 'fill';
    /**
     * In specific cases, it may be necessary to define the container with an absolute position (such as inside an angular router-container). Most of the time, the default position will work perfectly with CSS flex box.
     * `relative` is the default position. This is perfect to use with flex content.
     * `absolute` is useful in specific cases. Make sure you know what you are doing.
     */
    this.position = 'relative';
    /**
     * Defines the direction of the flex element.
     * `row` is the default direction. This is perfect to use with flex content.
     * `column` is useful in specific cases. Make sure you know what you are doing.
     */
    this.direction = 'row';
    /**
     * Defines how to display the element.
     * `flex` is the default display.
     * `block` will set each container to be as large and high as it's content. Selecting this display will automatically configure each child element to have "display: block".
     */
    this.display = 'flex';
    /**
     * When in `display="grid"`, defines the mininimum width of a column. It automatically figures out the appropriate number of columns from there.
     * Default is `350px`.
     */
    this.columnSize = '350px';
    /**
     * When in `display="grid"`, defines the height of each container.  Default is `300px`.
     */
    this.rowSize = 'auto';
  }
  optionDidChange() {
    if (this.color === undefined || this.color === null) {
      if (this.option === 'widget') {
        this.color = 'standard';
        this.setProps();
      }
      else if (this.option === 'card') {
        this.color = 'alternative';
        this.setProps();
      }
    }
  }
  displayDidChange() {
    // Only direct children will be impacted by the display property
    // TODO: DO we need that???
    Array.from(this.el.querySelectorAll('se-container > se-block')).forEach((item) => {
      item.display = this.display;
    });
  }
  columnSizeDidChange() {
    if (this.display === 'grid') {
      this.el.style.gridTemplateColumns = `repeat(auto-fit, minmax(${this.columnSize}, 1fr))`;
    }
  }
  rowSizeDidChange() {
    if (this.display === 'grid') {
      this.el.style.gridAutoRows = this.rowSize;
    }
  }
  setProps() {
    Array.from(this.el.querySelectorAll('se-container > se-block')).forEach((item) => {
      if (this.option === 'widget' ||
        this.option === 'card' ||
        this.option === 'card-old') {
        item.option = this.option;
      }
    });
  }
  componentWillLoad() {
    this.setProps(); // not having this called here makes the original/new function not actually work as expected. the original function would return this.option as undefined.
    this.optionDidChange();
    this.displayDidChange();
    this.columnSizeDidChange();
    this.rowSizeDidChange();
  }
  render() {
    return (Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["H"], { class: [
        this.option !== 'card-old'
          ? `${this.option}-content`
          : 'card-content',
        this.position,
        this.color ? `ct-bg-${this.color}` : '',
        `${this.direction}-dir`,
        `${this.display}-display`,
        this.padding ? `ct-padding-${this.padding}` : '',
      ].join(' ') }, this.option === 'centered' ? (Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "wrapper-center" }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null))) : (Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null))));
  }
  get el() { return Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); }
  static get watchers() { return {
    "option": ["optionDidChange"],
    "display": ["displayDidChange"],
    "columnSize": ["columnSizeDidChange"],
    "rowSize": ["rowSizeDidChange"]
  }; }
};
ContainerComponent.style = containerCss;

const dividerCss = ".se-divider{display:block;margin:0}.se-divider.horizontal{width:100%;border-top:1px solid}.se-divider.vertical,.se-divider.inset{height:100%;border-right:1px solid}.se-divider.standard{border-color:#e6e6e6;border-color:#e6e6e6;border-color:var(--se-divider, #e6e6e6)}.se-divider.alternative{border-color:#ffffff;border-color:var(--se-background-alternative, #ffffff)}";

const DividerComponent = class {
  constructor(hostRef) {
    Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    /**
     * Indicates the visual appearance of your divider line.  Default setting is `horizontal`.
     */
    this.option = 'horizontal';
    /**
     * Indicates the color schema of your divider line.
     * Default setting is `standard`, rendering a light gray colored line.
     * The `alternative` property sets a white colored divider line.
     */
    this.color = 'standard';
  }
  render() {
    return (Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: ['se-divider', this.option, this.color].join(' ') }));
  }
};
DividerComponent.style = dividerCss;

const iconCss = ":host{fill:currentColor;display:-ms-inline-flexbox;display:inline-flex;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host(.icon-nano){font-size:14px;line-height:14px}:host(.icon-nano) .wrapper{height:14px;width:14px}:host(.icon-micro){font-size:18px;line-height:18px}:host(.icon-micro) .wrapper{height:18px;width:18px}:host(.icon-small){font-size:24px;line-height:24px}:host(.icon-small) .wrapper{height:24px;width:24px}:host(.icon-medium){font-size:32px;line-height:32px}:host(.icon-medium) .wrapper{height:32px;width:32px}:host(.icon-large){font-size:52px;line-height:52px}:host(.icon-large) .wrapper{height:52px;width:52px}:host(.icon-xlarge){font-size:62px;line-height:62px}:host(.icon-xlarge) .wrapper{height:62px;width:62px}button{border:none;margin:0;padding:0;overflow:hidden;position:relative;background:transparent;width:100%;font:inherit;text-align:left;text-align:start;text-decoration:none;color:inherit;-webkit-transition-property:outline-width;transition-property:outline-width;-webkit-transition-duration:0.2s;transition-duration:0.2s}button:focus{outline-style:solid;outline-offset:1px;outline-width:2px;outline-color:#007acd;outline-color:var(--se-button-focus, #007acd)}.icon-family{font-family:\"se-icon\"}.wrapper{cursor:inherit;display:inline-block;font-style:normal;position:relative;outline:none;font-weight:normal;font-variant:normal;text-decoration:inherit;font-stretch:normal;text-transform:none;text-rendering:auto;letter-spacing:normal;vertical-align:-webkit-baseline-middle;vertical-align:-moz-middle-with-baseline;word-wrap:normal;white-space:nowrap;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-font-feature-settings:\"liga\";font-feature-settings:\"liga\";font-display:block;-webkit-transition:0;transition:0;overflow:hidden;fill:currentColor;shape-rendering:geometricprecision}.animation{-webkit-transition:0.3s;transition:0.3s}.wrapper.disabled{cursor:default;opacity:0.5}@supports (-ms-ime-align: auto){.wrapper{vertical-align:top;top:0}}@media all and (-ms-high-contrast: none), (-ms-high-contrast: active){.wrapper{vertical-align:top;top:0}}.standard{color:#626469;color:var(--se-standard, #626469)}.alternative{color:#ffffff;color:var(--se-alternative, #ffffff)}.primary{color:#3dcd58;color:var(--se-primary, #3dcd58)}.secondary{color:#42b4e6;color:var(--se-secondary, #42b4e6)}.success{color:#3dcd58;color:var(--se-success, #3dcd58)}.warning{color:#e47f00;color:var(--se-warning, #e47f00)}.information{color:#0087cd;color:var(--se-information, #0087cd)}.error{color:#dc0a0a;color:var(--se-error, #dc0a0a)}.standard.icon-button:not(.disabled):hover,.alternative.icon-button:not(.disabled):hover,.primary.icon-button:not(.disabled):hover,.secondary.icon-button:not(.disabled):hover,.success.icon-button:not(.disabled):hover,.warning.icon-button:not(.disabled):hover,.information.icon-button:not(.disabled):hover,.error.icon-button:not(.disabled):hover{background-color:#cccccc;background-color:var(--se-alternative-selected, #cccccc)}.icon-button{cursor:pointer;border-radius:2px;line-height:inherit;border-radius:2px}";

const IconComponent = class {
  constructor(hostRef) {
    Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    /**
     * Optional property that defines if the button is disabled.  Set to `false` by default.
     */
    this.disabled = false;
    /**
     * Optional property that defines if the icon should animate when changing states (rotation for example).
     */
    this.animation = false;
    /**
     * Optional property that defines the icon should be rotated.
     */
    this.rotate = 0;
  }
  render() {
    const size = this.size || 'small';
    const TagType = this.option === 'button' ? 'button' : 'div';
    // if contain svg, we don't use se-icon font-family in case there svg <text> is used
    const isSVG = !!this.el.querySelector('svg');
    let transform = '';
    switch (this.mirror) {
      case 'both':
        transform += 'scale(-1)';
        break;
      case 'horizontal':
        transform += 'scaleX(-1)';
        break;
      case 'vertical':
        transform += 'scaleY(-1)';
        break;
    }
    if (this.rotate) {
      transform += ` rotate(${this.rotate.toString().includes('deg')
        ? this.rotate
        : `${this.rotate}deg`})`;
    }
    return (Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["H"], { class: `icon-${size}`, onClick: () => this.el.blur() }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])(TagType, { disabled: this.disabled, style: { transform }, type: this.option === 'button' ? 'button' : null, class: {
        disabled: this.disabled,
        wrapper: true,
        animation: this.animation,
        'icon-family': !isSVG,
        [this.color]: !!this.color,
        [`icon-${this.option}`]: !!this.option,
      } }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null))));
  }
  get el() { return Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); }
};
IconComponent.style = iconCss;

const spinner = `<?xml version="1.0" encoding="utf-8"?>
<!-- Generator: Adobe Illustrator 23.0.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<svg version="1.1"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 1024 1024" style="enable-background:new 0 0 1024 1024;" xml:space="preserve">
<g >
	<g>
		<path d="M512,894c-51.6,0-101.6-10.1-148.7-30c-45.5-19.2-86.3-46.8-121.4-81.9c-35.1-35.1-62.6-75.9-81.9-121.4
			c-19.9-47.1-30-97.1-30-148.7s10.1-101.6,30-148.7c19.2-45.5,46.8-86.3,81.9-121.4s75.9-62.6,121.4-81.9
			c47.1-19.9,97.1-30,148.7-30v54c-87.6,0-170,34.1-231.9,96.1S184,424.4,184,512s34.1,170,96.1,231.9S424.4,840,512,840
			s170-34.1,231.9-96.1S840,599.6,840,512h54c0,51.6-10.1,101.6-30,148.7c-19.2,45.5-46.8,86.3-81.9,121.4
			c-35.1,35.1-75.9,62.6-121.4,81.9C613.6,883.9,563.6,894,512,894z"/>
	</g>
</g>
</svg>
`;

const loadingCss = ":host{display:none;overflow:hidden}.loading-wrapper{position:absolute;top:0;bottom:0;left:0;right:0;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;-moz-align-items:center;align-items:center;-webkit-box-pack:center;-moz-box-pack:center;-ms-flex-pack:center;-webkit-justify-content:center;justify-content:center}.overlay{background-color:rgba(255, 255, 255, 0.4);background-color:var(--se-overlay-loading, rgba(255, 255, 255, 0.4))}.isFixed{position:fixed;top:0;bottom:0;left:0;right:0;z-index:25}.color-primary{color:#3dcd58;color:var(--se-primary, #3dcd58)}.color-secondary{color:#42b4e6;color:var(--se-secondary, #42b4e6)}.se-loading{padding:8px 8px 0;position:relative;z-index:25;-webkit-animation-duration:0.2s;animation-duration:0.2s;animation-duration:0.2s;-webkit-animation-fill-mode:both;animation-fill-mode:both;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-direction:normal;-webkit-box-orient:vertical;-webkit-flex-direction:column;-moz-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.se-loading.dialog{-ms-flex-align:center;align-items:center;background-color:#ffffff;background-color:var(--se-background-alternative, #ffffff);-webkit-box-shadow:1px 1px 8px 1px rgba(0, 0, 0, 0.3);box-shadow:1px 1px 8px 1px rgba(0, 0, 0, 0.3);-webkit-box-shadow:1px 1px 8px 1px var(--se-shadow);box-shadow:1px 1px 8px 1px var(--se-shadow)}.message{padding:0 16px 16px;color:#0f0f0f;color:var(--se-background-alternative-contrast, #0f0f0f)}.loading-background{position:absolute;top:0;bottom:0;left:0;right:0;-webkit-animation-duration:0.2s;animation-duration:0.2s;animation-duration:0.2s;-webkit-animation-fill-mode:both;animation-fill-mode:both;z-index:20}.loading-icon{line-height:128px;position:relative;font-size:100px;height:100px;width:100px;-webkit-animation:clockwiseSpin 1.5s infinite linear;animation:clockwiseSpin 1.5s infinite linear;fill:currentColor}@-webkit-keyframes clockwiseSpin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes clockwiseSpin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}:host(.show){display:block}";

const LoadingComponent = class {
  constructor(hostRef) {
    Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    /**
     * Defines the visual display of the loader.
     * `standard` is the default option, and displays a spinning green circle.
     * `dialog` gives the loading icon a look-and-feel that it is within a popup dialog box.
     */
    this.option = 'standard';
    /**
     * Defines the color of the loading spinner.
     */
    this.color = 'primary';
  }
  render() {
    return (Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["H"], { class: { show: this.loading } }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: {
        'loading-wrapper': true,
        isFixed: this.fullPage,
        overlay: this.overlay,
      } }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: {
        'se-loading': true,
        [`${this.option}`]: true,
        [`color-${this.color}`]: !!this.color,
      } }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "loading-icon", innerHTML: spinner }), Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "message" }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)))), Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "loading-background" })));
  }
};
LoadingComponent.style = loadingCss;

const skeletonCss = "@-webkit-keyframes skeletonMove{0%{background-position:-200px 0}100%{background-position:calc(200px + 100%) 0}}@keyframes skeletonMove{0%{background-position:-200px 0}100%{background-position:calc(200px + 100%) 0}}:host{display:-ms-flexbox;display:-webkit-flex;display:flex;-ms-flex-direction:column;flex-direction:column}.skeleton{background-color:#e6e6e6;background-color:var(--se-divider, #e6e6e6);background-image:-webkit-gradient(linear, left top, right top, from(var(--se-divider)), color-stop(var(--se-background-standard)), to(var(--se-divider)));background-image:linear-gradient(90deg, var(--se-divider), var(--se-background-standard), var(--se-divider));-webkit-animation:skeletonMove 1.2s ease-in-out infinite;animation:skeletonMove 1.2s ease-in-out infinite;background-size:200px 100%;background-repeat:no-repeat;border-radius:2px;display:inline-block;width:100%;margin:4px 0}.rounded{border-radius:50%}";

const Skeleton = class {
  constructor(hostRef) {
    Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
  }
  nbToArray(count) {
    const arrayNumber = [];
    const max = count;
    for (let index = 1; index <= max; index++) {
      arrayNumber.push(index);
    }
    return arrayNumber;
  }
  render() {
    const countArray = this.nbToArray(this.count || 1);
    const style = {};
    if (this.width !== null) {
      style.width = this.width;
    }
    if (this.height !== null) {
      style.height = this.height;
    }
    return (Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["H"], null, countArray.map(() => (Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: { skeleton: true, rounded: this.circle }, style: style }, "\u200C")))));
  }
};
Skeleton.style = skeletonCss;




/***/ })

}]);
//# sourceMappingURL=2.js.map