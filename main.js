(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\repos\project-athena\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "S38G":
/*!************************************!*\
  !*** ./src/app/shared/sections.ts ***!
  \************************************/
/*! exports provided: Sections */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sections", function() { return Sections; });
const Sections = [
    { id: 'about', title: 'About' },
    { id: 'locatiion', title: 'Location' },
    { id: 'sponsors', title: 'Sponsors' },
];


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_sections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/sections */ "S38G");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_page_scroll_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-page-scroll-core */ "Zgu1");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header.component */ "fECr");






function AppComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const section_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("id", section_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](section_r1.title);
} }
class AppComponent {
    constructor(pageScrollService, document) {
        this.pageScrollService = pageScrollService;
        this.document = document;
        this.sections = _shared_sections__WEBPACK_IMPORTED_MODULE_1__["Sections"];
        this.activeSection = 1;
    }
    onNavigateTo({ element: e, activeSection: i }) {
        this.pageScrollService.scroll({
            scrollTarget: e,
            document: this.document
        });
        this.activeSection = i;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_page_scroll_core__WEBPACK_IMPORTED_MODULE_3__["PageScrollService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 9, vars: 1, consts: [[1, "main-container"], [3, "onNavClicked"], [1, "content-container"], ["id", "home", 1, "content-section-container"], [1, "card-container", "gradient-overlay"], ["poster", "https://i.dailymail.co.uk/i/pix/2012/07/27/article-2179920-144013D7000005DC-234_964x531.jpg", "id", "bgvid", "playsinline", "", "autoplay", "", "muted", "", "loop", ""], ["src", "../assets/background-video.mp4", "type", "video/mp4"], [1, "shadow"], ["class", "content-section-container", "style", "height: 1000px;", 3, "id", 4, "ngFor", "ngForOf"], [1, "content-section-container", 2, "height", "1000px", 3, "id"], [1, "card-container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "app-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onNavClicked", function AppComponent_Template_app_header_onNavClicked_1_listener($event) { return ctx.onNavigateTo($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "video", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "source", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, AppComponent_div_8_Template, 4, 2, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.sections);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgForOf"]], styles: [".main-container[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n  height: 100vh;\n}\n\n.content-section-container[_ngcontent-%COMP%] {\n  height: 100%;\n  margin: 0;\n}\n\n.card-container[_ngcontent-%COMP%] {\n  height: auto;\n  background: transparent;\n}\n\n.card-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  padding: 25px;\n  margin: 0;\n}\n\nvideo[_ngcontent-%COMP%] {\n  min-width: 100%;\n  min-height: 100%;\n  width: auto;\n  height: auto;\n  z-index: -100;\n  background-size: cover;\n  transition: 1s opacity;\n  border-style: solid;\n  border-image: linear-gradient(red, transparent) 1;\n  border-bottom: 0;\n}\n\n.gradient-overlay[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.gradient-overlay[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-image: linear-gradient(to bottom, black, black, gray);\n  opacity: 0.75;\n}\n\n.shadow[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  box-shadow: 0 30px 40px white;\n  top: 0;\n  left: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLFNBQUE7QUFDRjs7QUFFQTtFQUVFLFlBQUE7RUFDQSx1QkFBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLFNBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUFtQixpREFBQTtFQUFpRCxnQkFBQTtBQUV0RTs7QUFDQTtFQUNFLGtCQUFBO0FBRUY7O0FBQUU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0VBQUE7RUFDQSxhQUFBO0FBRUo7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtBQUNGIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWNvbnRhaW5lciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4uY29udGVudC1zZWN0aW9uLWNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmNhcmQtY29udGFpbmVyIHtcclxuICAvLyBoZWlnaHQganVzdCBmb3IgZGVtbyBwdXJwb3NlXHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uY2FyZC1jb250YWluZXIgaDMge1xyXG4gIHBhZGRpbmc6IDI1cHg7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG52aWRlbyB7XHJcbiAgbWluLXdpZHRoOiAxMDAlO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHotaW5kZXg6IC0xMDA7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICB0cmFuc2l0aW9uOiAxcyBvcGFjaXR5O1xyXG4gIGJvcmRlci1zdHlsZTpzb2xpZDtib3JkZXItaW1hZ2U6bGluZWFyLWdyYWRpZW50KHJlZCwgdHJhbnNwYXJlbnQpIDE7Ym9yZGVyLWJvdHRvbTowO1xyXG59XHJcblxyXG4uZ3JhZGllbnQtb3ZlcmxheSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAmOjphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIGJsYWNrLCBibGFjaywgZ3JheSk7XHJcbiAgICBvcGFjaXR5OiAwLjc1O1xyXG4gIH1cclxufVxyXG5cclxuLnNoYWRvdyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBib3gtc2hhZG93OiAwIDMwcHggNDBweCB3aGl0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxufSJdfQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var ngx_page_scroll_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-page-scroll-core */ "Zgu1");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            ngx_page_scroll_core__WEBPACK_IMPORTED_MODULE_3__["NgxPageScrollCoreModule"].forRoot({ duration: 500 })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"], ngx_page_scroll_core__WEBPACK_IMPORTED_MODULE_3__["NgxPageScrollCoreModule"]] }); })();


/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_sections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/sections */ "S38G");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




const _c0 = function (a0) { return { "active-link disabled": a0 }; };
function HeaderComponent_li_6_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_li_6_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const section_r1 = ctx.$implicit; const i_r2 = ctx.index; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.onClicked("#" + section_r1.id, i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const section_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r0.activeSection === i_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", section_r1.title, " ");
} }
class HeaderComponent {
    constructor() {
        this.onNavClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.sections = _shared_sections__WEBPACK_IMPORTED_MODULE_1__["Sections"];
        this.activeSection = -1;
        this.collapsed = false;
    }
    onWindowScroll() {
        let element = document.querySelector('.navbar');
        if (window.pageYOffset > element.clientHeight) {
            element.classList.add('navbar-inverse');
        }
        else {
            element.classList.remove('navbar-inverse');
        }
    }
    ngOnInit() {
    }
    onClicked(e, i) {
        this.onNavClicked.emit({ element: e, activeSection: i });
        this.activeSection = i;
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], hostBindings: function HeaderComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function HeaderComponent_scroll_HostBindingHandler($event) { return ctx.onWindowScroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, outputs: { onNavClicked: "onNavClicked" }, decls: 7, vars: 1, consts: [[1, "navbar", "navbar-default", "container", 3, "scroll"], ["href", "#", 1, "navbar-brand", 3, "click"], [1, "container-fluid"], [1, "collapse", "navbar-collapse", "menu-items"], [1, "nav", "navbar-nav"], [4, "ngFor", "ngForOf"], ["href", "#", "pageScroll", "", 1, "nav-link", 3, "ngClass", "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function HeaderComponent_Template_nav_scroll_0_listener() { return ctx.onWindowScroll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_1_listener() { return ctx.activeSection = -1; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Confra Argentina 2023");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HeaderComponent_li_6_Template, 3, 4, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sections);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: ["nav[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  top: 0;\n  border: none;\n  background-color: transparent;\n  background-image: linear-gradient(180deg, black, transparent);\n  z-index: 1000;\n  transition: all 0.5s ease;\n}\n\n.container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.navbar-brand[_ngcontent-%COMP%] {\n  font-size: x-large;\n}\n\n.nav-link[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: large;\n  text-transform: uppercase;\n  text-decoration: none;\n}\n\n.nav-link[_ngcontent-%COMP%]::after {\n  background: none repeat scroll 0 0 transparent;\n  bottom: 0;\n  content: \"\";\n  display: block;\n  height: 2px;\n  left: 50%;\n  position: absolute;\n  background: white;\n  transition: width 0.3s ease 0s, left 0.3s ease 0s;\n  width: 0;\n}\n\n.nav-link[_ngcontent-%COMP%]:hover {\n  color: white !important;\n}\n\n.nav-link[_ngcontent-%COMP%]:hover::after {\n  text-decoration: underline;\n  width: 100%;\n  left: 0;\n}\n\n.navbar-inverse[_ngcontent-%COMP%] {\n  background-color: whitesmoke;\n  background-image: none;\n}\n\n.navbar-inverse[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover {\n  color: royalblue !important;\n}\n\n.navbar-inverse[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]::after {\n  background: royalblue;\n}\n\n.active-link[_ngcontent-%COMP%] {\n  color: blue !important;\n}\n\na.disabled[_ngcontent-%COMP%] {\n  pointer-events: none;\n  cursor: default;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsTUFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtFQUNBLDZEQUFBO0VBQ0EsYUFBQTtFQUtBLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EseUJBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBQUNGOztBQUFFO0VBQ0UsOENBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpREFBQTtFQUNBLFFBQUE7QUFFSjs7QUFFQTtFQUNFLHVCQUFBO0FBQ0Y7O0FBQ0U7RUFDRSwwQkFBQTtFQUNBLFdBQUE7RUFDQSxPQUFBO0FBQ0o7O0FBR0E7RUFDRSw0QkFBQTtFQUNBLHNCQUFBO0FBQUY7O0FBQ0U7RUFDRSwyQkFBQTtBQUNKOztBQUNFO0VBQ0UscUJBQUE7QUFDSjs7QUFHQTtFQUNFLHNCQUFBO0FBQUY7O0FBR0E7RUFDRSxvQkFBQTtFQUNBLGVBQUE7QUFBRiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuYXYge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB3aWR0aDogMTAwJTtcclxuICB0b3A6IDA7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIGJsYWNrLCB0cmFuc3BhcmVudCk7XHJcbiAgei1pbmRleDogMTAwMDtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBwb3NpdGlvbiAxMHM7XHJcbiAgLW1zLXRyYW5zaXRpb246IHBvc2l0aW9uIDEwcztcclxuICAtby10cmFuc2l0aW9uOiBwb3NpdGlvbiAxMHM7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG59XHJcblxyXG4ubmF2YmFyLWJyYW5kIHtcclxuICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbn1cclxuXHJcbi5uYXYtbGluayB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiBsYXJnZTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAmOjphZnRlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lIHJlcGVhdCBzY3JvbGwgMCAwIHRyYW5zcGFyZW50O1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgaGVpZ2h0OiAycHg7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIHRyYW5zaXRpb246IHdpZHRoIDAuM3MgZWFzZSAwcywgbGVmdCAwLjNzIGVhc2UgMHM7XHJcbiAgICB3aWR0aDogMDtcclxuICB9XHJcbn1cclxuXHJcbi5uYXYtbGluazpob3ZlciB7XHJcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcblxyXG4gICY6OmFmdGVyIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gIH1cclxufVxyXG5cclxuLm5hdmJhci1pbnZlcnNlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbiAgJiAubmF2LWxpbms6aG92ZXIge1xyXG4gICAgY29sb3I6IHJveWFsYmx1ZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAmIC5uYXYtbGluazo6YWZ0ZXIge1xyXG4gICAgYmFja2dyb3VuZDogcm95YWxibHVlO1xyXG4gIH1cclxufVxyXG5cclxuLmFjdGl2ZS1saW5rIHtcclxuICBjb2xvcjogYmx1ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5hLmRpc2FibGVkIHtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICBjdXJzb3I6IGRlZmF1bHQ7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map