(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\repos\project-athena\src\main.ts */"zUnb");


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


function HomeComponent_video_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "video", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "source", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 6);
} }
class HomeComponent {
    constructor() {
        this.mobile = false;
    }
    ngOnInit() {
        if (window.screen.width <= 462) { // 768px portrait
            this.mobile = true;
        }
        else {
            this.mobile = false;
        }
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 5, vars: 2, consts: [["id", "home", 1, "content-section-container"], [1, "gradient-overlay"], ["poster", "../../assets/images/home_background.jpg", "id", "videoBG", "playsinline", "", "autoplay", "", "muted", "", "loop", "", 4, "ngIf", "ngIfElse"], ["mobileHome", ""], ["poster", "../../assets/images/home_background.jpg", "id", "videoBG", "playsinline", "", "autoplay", "", "muted", "", "loop", ""], ["src", "../../assets/background-video.mp4", "type", "video/mp4"], ["id", "mobile_cover"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_video_2_Template, 2, 0, "video", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomeComponent_ng_template_3_Template, 1, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.mobile)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".content-section-container[_ngcontent-%COMP%] {\n  height: 100%;\n  margin: 0;\n}\n\n.gradient-overlay[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.gradient-overlay[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-image: linear-gradient(to bottom, black, black, gray);\n  opacity: 0.75;\n}\n\n#mobile_cover[_ngcontent-%COMP%] {\n  background-image: linear-gradient(to bottom, rgba(21, 21, 24, 0.52), rgba(21, 21, 24, 0.52), rgba(189, 155, 180, 0.73)), url('home_background_mobile.jpg');\n  width: 100%;\n  height: 400px;\n  background-size: cover;\n  color: white;\n  padding: 20px;\n}\n\n#videoBG[_ngcontent-%COMP%] {\n  min-width: 100%;\n  min-height: 100%;\n  width: auto;\n  height: auto;\n  z-index: -100;\n  background-size: cover;\n  transition: 1s opacity;\n  border-style: solid;\n  border-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsU0FBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7QUFDSjs7QUFDSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnRUFBQTtFQUNBLGFBQUE7QUFDUjs7QUFHQTtFQUNJLDBKQUNJO0VBRUosV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBRko7O0FBS0E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUZKIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudC1zZWN0aW9uLWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5ncmFkaWVudC1vdmVybGF5IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAmOjphZnRlciB7XHJcbiAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIGJsYWNrLCBibGFjaywgZ3JheSk7XHJcbiAgICAgICAgb3BhY2l0eTogMC43NTtcclxuICAgIH1cclxufVxyXG5cclxuI21vYmlsZV9jb3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOlxyXG4gICAgICAgIGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMjEsIDIxLCAyNCwgMC41MikscmdiYSgyMSwgMjEsIDI0LCAwLjUyKSwgcmdiYSgxODksIDE1NSwgMTgwLCAwLjczKSksXHJcbiAgICAgICAgdXJsKCcuLi8uLi9hc3NldHMvaW1hZ2VzL2hvbWVfYmFja2dyb3VuZF9tb2JpbGUuanBnJyk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuI3ZpZGVvQkcge1xyXG4gICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgei1pbmRleDogLTEwMDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiAxcyBvcGFjaXR5O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1ib3R0b206IDA7XHJcbn1cclxuXHJcbi8vIEBtZWRpYSAobWluLWFzcGVjdC1yYXRpbzogMTYvOSkge1xyXG4vLyAgICAgI3ZpZGVvQkcge1xyXG4vLyAgICAgICAgIHdpZHRoOjEwMCU7XHJcbi8vICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG4vLyBAbWVkaWEgKG1heC1hc3BlY3QtcmF0aW86IDE2LzkpIHtcclxuLy8gICAgICN2aWRlb0JHIHsgXHJcbi8vICAgICAgICAgd2lkdGg6YXV0bztcclxuLy8gICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcbi8vIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4vLyAgICAgI3ZpZGVvQkcge1xyXG4vLyAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbi8vICAgICB9XHJcbi8vICAgICAjaG9tZSB7XHJcbi8vICAgICAgICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvaW1hZ2VzL2hvbWVfYmFja2dyb3VuZF9tb2JpbGUuanBnJyk7XHJcbi8vICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuLy8gICAgICAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4vLyAgICAgfVxyXG4vLyB9Il19 */"] });


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
    { id: 'location', title: 'Location' },
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
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "9vUh");






class AppComponent {
    constructor(pageScrollService, document) {
        this.pageScrollService = pageScrollService;
        this.document = document;
        // TODO: Update when we have specific components for sections.
        // @ViewChildren(SectionComponent) query: QueryList<SectionComponent>;
        // ngAfterViewInit() {
        //   this.query.toArray().forEach((c, index) =>
        //     this.sectionsOffset.push({
        //       id: this.sections[index].id,
        //       offset: c.elementRef.nativeElement.offsetTop,
        //       height: c.elementRef.nativeElement.clientHeight
        //     })
        //   );
        // }
        this.sections = _shared_sections__WEBPACK_IMPORTED_MODULE_1__["Sections"];
        this.activeSection = 1;
        this.sectionsOffset = [];
    }
    onNavigateTo({ element: e, activeSection: i }) {
        this.pageScrollService.scroll({
            scrollTarget: e,
            document: this.document,
        });
        this.activeSection = i;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_page_scroll_core__WEBPACK_IMPORTED_MODULE_3__["PageScrollService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 13, vars: 1, consts: [[1, "main-container"], [3, "sectionsOffset", "onNavClicked"], [1, "content-container"], ["id", "about", 1, "card-container"], ["id", "location", 1, "card-container"], ["id", "sponsors", 1, "card-container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "app-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onNavClicked", function AppComponent_Template_app_header_onNavClicked_1_listener($event) { return ctx.onNavigateTo($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "app-home");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "ABOUT");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "LOCATION");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "SPONSORS");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("sectionsOffset", ctx.sectionsOffset);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]], styles: [".main-container[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n  height: 100vh;\n}\n\n.card-container[_ngcontent-%COMP%] {\n  height: 1000px;\n  background: transparent;\n}\n\n.card-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  padding: 25px;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUVBO0VBRUUsY0FBQTtFQUNBLHVCQUFBO0FBQUY7O0FBR0E7RUFDRSxhQUFBO0VBQ0EsU0FBQTtBQUFGIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWNvbnRhaW5lciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4uY2FyZC1jb250YWluZXIge1xyXG4gIC8vIGhlaWdodCBqdXN0IGZvciBkZW1vIHB1cnBvc2VcclxuICBoZWlnaHQ6IDEwMDBweDtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLmNhcmQtY29udGFpbmVyIGgzIHtcclxuICBwYWRkaW5nOiAyNXB4O1xyXG4gIG1hcmdpbjogMDtcclxufSJdfQ== */"] });


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
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");








class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            ngx_page_scroll_core__WEBPACK_IMPORTED_MODULE_3__["NgxPageScrollCoreModule"].forRoot({ duration: 500 })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
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




function HeaderComponent_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 12);
} }
function HeaderComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 13);
} }
const _c0 = function (a0) { return { "active-link disabled": a0 }; };
function HeaderComponent_li_8_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_li_8_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const section_r4 = ctx.$implicit; const i_r5 = ctx.index; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.onClicked("#" + section_r4.id, i_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const section_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r3.activeSection === i_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", section_r4.title, " ");
} }
class HeaderComponent {
    constructor() {
        this.onNavClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.sections = _shared_sections__WEBPACK_IMPORTED_MODULE_1__["Sections"];
        this.activeSection = -1;
        this.collapsedMenu = false;
        this.collapsedNav = false;
    }
    onWindowScroll() {
        let element = document.querySelector('header');
        if (window.pageYOffset > element.clientHeight) {
            element.classList.add('navbar-inverse');
            this.collapsedNav = true;
        }
        else {
            element.classList.remove('navbar-inverse');
            this.collapsedNav = false;
        }
        // TODO: Update when having each component
        // this.sectionsOffset.forEach((s, index) => {
        //   if (
        //     window.pageYOffset >= s.offset &&
        //     window.pageYOffset <= s.offset + s.height
        //   ) {
        //     this.activeSection = index;
        //   }
        // });
    }
    ngOnInit() { }
    onClicked(e, i) {
        this.onNavClicked.emit({ element: e, activeSection: i });
        this.activeSection = i;
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], hostBindings: function HeaderComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function HeaderComponent_scroll_HostBindingHandler($event) { return ctx.onWindowScroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, inputs: { sectionsOffset: "sectionsOffset" }, outputs: { onNavClicked: "onNavClicked" }, decls: 16, vars: 3, consts: [["href", "#", 1, "logo", 3, "click"], ["src", "../../assets/logos/logo-horizontal.png", "alt", "", 4, "ngIf", "ngIfElse"], ["collapsedLogo", ""], [3, "scroll"], [1, "collapse", "navbar-collapse"], [1, "nav-links", "navbar-nav"], ["class", "nav-item", 4, "ngFor", "ngForOf"], [1, "social-item"], ["href", "#", 1, "nav-link"], [1, "fa", "fa-facebook"], [1, "fa", "fa-instagram"], [1, "fa", "fa-twitter"], ["src", "../../assets/logos/logo-horizontal.png", "alt", ""], ["src", "../../assets/logos/logo-plain.png", "alt", "", 1, "collapsed-logo"], [1, "nav-item"], ["href", "#", "pageScroll", "", 1, "nav-link", 3, "ngClass", "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_1_listener() { return ctx.activeSection = -1; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HeaderComponent_img_2_Template, 1, 0, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HeaderComponent_ng_template_3_Template, 1, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nav", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function HeaderComponent_Template_nav_scroll_5_listener() { return ctx.onWindowScroll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, HeaderComponent_li_8_Template, 3, 4, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.collapsedNav)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sections);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: ["header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0px 10%;\n  position: fixed;\n  z-index: 1000;\n  width: 100%;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  transition: all 0.5s ease;\n}\n\n.nav-links[_ngcontent-%COMP%] {\n  list-style: none;\n  display: flex;\n}\n\n.nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 0px 20px;\n}\n\n.nav-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n.nav-link[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: large;\n  text-transform: uppercase;\n  text-decoration: none;\n  transition: transform 0.2s;\n  font-size: 1.5em;\n}\n\n.nav-link[_ngcontent-%COMP%]:hover {\n  color: white !important;\n  font-size: 1.6em;\n}\n\n.navbar-inverse[_ngcontent-%COMP%] {\n  background-color: rgba(245, 245, 245, 0.7);\n  background-image: none;\n  transition: all 0.8s ease;\n}\n\n.navbar-inverse[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover {\n  color: royalblue !important;\n}\n\n.active-link[_ngcontent-%COMP%] {\n  color: blue !important;\n}\n\na.disabled[_ngcontent-%COMP%] {\n  pointer-events: none;\n  cursor: default;\n}\n\n.social-item[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.social-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 0.3em;\n}\n\n.collapsed-logo[_ngcontent-%COMP%] {\n  margin: 7px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtFQUFBLHdCQUFBO0VBQUEsbUJBQUE7RUFLQSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBQUU7RUFDRSxpQkFBQTtBQUVKOztBQUFFO0VBQ0UscUJBQUE7QUFFSjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUFFO0VBQ0UsdUJBQUE7RUFDQSxnQkFBQTtBQUVKOztBQUVBO0VBQ0UsMENBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0FBQ0Y7O0FBQUU7RUFDRSwyQkFBQTtBQUVKOztBQUVBO0VBQ0Usc0JBQUE7QUFDRjs7QUFFQTtFQUNFLG9CQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtBQUNGOztBQUFFO0VBQ0UsY0FBQTtBQUVKOztBQUVBO0VBQ0UsYUFBQTtBQUNGIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAwcHggMTAlO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB6LWluZGV4OiAxMDAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xyXG4gIC1tb3otdHJhbnNpdGlvbjogcG9zaXRpb24gMTBzO1xyXG4gIC1tcy10cmFuc2l0aW9uOiBwb3NpdGlvbiAxMHM7XHJcbiAgLW8tdHJhbnNpdGlvbjogcG9zaXRpb24gMTBzO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XHJcbn1cclxuXHJcbi5uYXYtbGlua3Mge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAmIGxpIHtcclxuICAgIHBhZGRpbmc6IDBweCAyMHB4O1xyXG4gIH1cclxuICAmIGEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuLm5hdi1saW5rIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IGxhcmdlO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMnM7XHJcbiAgZm9udC1zaXplOiAxLjVlbTtcclxuICAmOmhvdmVyIHtcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxLjZlbTtcclxuICB9XHJcbn1cclxuXHJcbi5uYXZiYXItaW52ZXJzZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6IHdoaXRlc21va2UsICRhbHBoYTogMC43KTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjhzIGVhc2U7XHJcbiAgJiAubmF2LWxpbms6aG92ZXIge1xyXG4gICAgY29sb3I6IHJveWFsYmx1ZSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLmFjdGl2ZS1saW5rIHtcclxuICBjb2xvcjogYmx1ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5hLmRpc2FibGVkIHtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICBjdXJzb3I6IGRlZmF1bHQ7XHJcbn1cclxuXHJcbi5zb2NpYWwtaXRlbSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAmIGEge1xyXG4gICAgcGFkZGluZzogMC4zZW07XHJcbiAgfVxyXG59XHJcblxyXG4uY29sbGFwc2VkLWxvZ28ge1xyXG4gIG1hcmdpbjogN3B4IDA7XHJcbn1cclxuIl19 */"] });


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