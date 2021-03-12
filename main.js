(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\repos\schneider-ebo\src\webapplication\Schneider.Ebo.WebApplication\src\main.ts */"zUnb");


/***/ }),

/***/ "0zL+":
/*!**********************************************!*\
  !*** ./src/app/services/customer.service.ts ***!
  \**********************************************/
/*! exports provided: CustomerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerService", function() { return CustomerService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ebo_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ebo-client.service */ "RPhw");



class CustomerService {
    constructor(eboClientService) {
        this.eboClientService = eboClientService;
    }
    getAllFiltered(filter) {
        // call ebo-service
        console.log(`called with: ${filter}`);
        return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"]();
    }
}
CustomerService.ɵfac = function CustomerService_Factory(t) { return new (t || CustomerService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ebo_client_service__WEBPACK_IMPORTED_MODULE_2__["Client"])); };
CustomerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CustomerService, factory: CustomerService.ɵfac, providedIn: 'root' });


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
    production: false,
    apiUrl: "http://localhost:7071"
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

/***/ "Mr8A":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/@se/web-ui/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./se-about.entry.js": [
		"TFxg",
		"common",
		1
	],
	"./se-app_11.entry.js": [
		"i7K6",
		2
	],
	"./se-authentication.entry.js": [
		"+mX2",
		"common",
		3
	],
	"./se-banner_2.entry.js": [
		"cBE8",
		"common",
		4
	],
	"./se-breadcrumb_2.entry.js": [
		"2UII",
		"common",
		5
	],
	"./se-carousel-item.entry.js": [
		"Y35H",
		6
	],
	"./se-carousel.entry.js": [
		"Qi3e",
		0,
		"common",
		7
	],
	"./se-checkbox_7.entry.js": [
		"qzTh",
		0,
		"common",
		8
	],
	"./se-dialog_4.entry.js": [
		"gMVi",
		"common",
		9
	],
	"./se-fab_2.entry.js": [
		"bcoU",
		"common",
		10
	],
	"./se-filtration.entry.js": [
		"0sR9",
		"common",
		11
	],
	"./se-header_6.entry.js": [
		"9LGi",
		"common",
		12
	],
	"./se-icon-file.entry.js": [
		"S734",
		13
	],
	"./se-link.entry.js": [
		"ENY/",
		14
	],
	"./se-list_3.entry.js": [
		"1hRH",
		"common",
		15
	],
	"./se-pagination.entry.js": [
		"TRy/",
		"common",
		16
	],
	"./se-snackbar.entry.js": [
		"rDsh",
		"common",
		17
	],
	"./se-stepper_2.entry.js": [
		"amZ7",
		18
	],
	"./se-tabbar.entry.js": [
		"P2bc",
		0,
		19
	],
	"./se-table_5.entry.js": [
		"txVx",
		"common",
		20
	],
	"./se-tooltip_4.entry.js": [
		"srLb",
		"common",
		21
	],
	"./se-visual-linear_2.entry.js": [
		"iPTS",
		22
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "Mr8A";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "MwYd":
/*!************************************************!*\
  !*** ./src/app/customer/customer.component.ts ***!
  \************************************************/
/*! exports provided: CustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerComponent", function() { return CustomerComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _shared_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/constants */ "s0Cq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_customer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../services/customer.service */ "0zL+");
/* harmony import */ var _services_customer_search_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/customer-search.service */ "n/i5");
/* harmony import */ var _se_web_ui_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @se/web-ui-angular */ "U3Mr");
/* harmony import */ var _customer_search_customer_search_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./customer-search/customer-search.component */ "oYE5");







class CustomerComponent {
    constructor(customerService, customerSearchService) {
        this.customerService = customerService;
        this.customerSearchService = customerSearchService;
    }
    ngAfterViewInit() {
        this.customerSearchService.searchValueChanged$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["filter"])((query) => query.length == 0 || query.length >= _shared_constants__WEBPACK_IMPORTED_MODULE_1__["SearchConstants"].MIN_LENGTH), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["debounceTime"])(_shared_constants__WEBPACK_IMPORTED_MODULE_1__["SearchConstants"].DEBOUNCE_TIME), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((query) => this.customerService.getAllFiltered(query))).subscribe((result => { this.customers$ = result; }));
    }
}
CustomerComponent.ɵfac = function CustomerComponent_Factory(t) { return new (t || CustomerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_customer_service__WEBPACK_IMPORTED_MODULE_3__["CustomerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_customer_search_service__WEBPACK_IMPORTED_MODULE_4__["CustomerSearchService"])); };
CustomerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CustomerComponent, selectors: [["app-customer"]], decls: 12, vars: 0, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @desc Header for the Customer List section
         * @meaning Container header
         */
        const MSG_EXTERNAL_customerListHeader$$SRC_APP_CUSTOMER_CUSTOMER_COMPONENT_TS_1 = goog.getMsg("Customer List");
        i18n_0 = MSG_EXTERNAL_customerListHeader$$SRC_APP_CUSTOMER_CUSTOMER_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:Container header|Header for the Customer List section@@customerListHeader:Customer List`;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @desc Label for Create Customer button
         * @meaning Button label
         */
        const MSG_EXTERNAL_customerCreateButton$$SRC_APP_CUSTOMER_CUSTOMER_COMPONENT_TS_3 = goog.getMsg(" Create Customer ");
        i18n_2 = MSG_EXTERNAL_customerCreateButton$$SRC_APP_CUSTOMER_CUSTOMER_COMPONENT_TS_3;
    }
    else {
        i18n_2 = $localize `:Button label|Label for Create Customer button@@customerCreateButton: Create Customer `;
    } return [["display", "block", "padding", "large", 2, "overflow", "visible"], ["padding", "medium"], i18n_0, ["option", "raised", "color", "primary", "icon", "new_project", 1, "create-button"], i18n_2, ["display", "grid", "rowSize", "5rem", 2, "overflow", "visible"], ["enlarged", "horizontal"]]; }, template: function CustomerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "se-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "se-block");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "se-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "se-block");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](5, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "se-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](8, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "se-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "se-block", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "app-customer-search");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } }, directives: [_se_web_ui_angular__WEBPACK_IMPORTED_MODULE_5__["SeContainer"], _se_web_ui_angular__WEBPACK_IMPORTED_MODULE_5__["SeBlock"], _se_web_ui_angular__WEBPACK_IMPORTED_MODULE_5__["SeButton"], _customer_search_customer_search_component__WEBPACK_IMPORTED_MODULE_6__["CustomerSearchComponent"]], encapsulation: 2 });


/***/ }),

/***/ "RPhw":
/*!************************************************!*\
  !*** ./src/app/services/ebo-client.service.ts ***!
  \************************************************/
/*! exports provided: API_BASE_URL, Client, ApiException */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_BASE_URL", function() { return API_BASE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Client", function() { return Client; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiException", function() { return ApiException; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* tslint:disable */
/* eslint-disable */
//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v13.10.7.0 (NJsonSchema v10.3.9.0 (Newtonsoft.Json v12.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------
// ReSharper disable InconsistentNaming






const API_BASE_URL = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('API_BASE_URL');
class Client {
    constructor(http, baseUrl) {
        this.jsonParseReviver = undefined;
        this.http = http;
        console.log(baseUrl);
        this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "http://localhost:7071";
    }
    /**
     * @return Success
     */
    customer(customerId) {
        let url_ = this.baseUrl + "/api/customer/{customerId}";
        if (customerId === undefined || customerId === null)
            throw new Error("The parameter 'customerId' must be defined.");
        url_ = url_.replace("{customerId}", encodeURIComponent("" + customerId));
        url_ = url_.replace(/[?&]$/, "");
        let options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Accept": "application/json"
            })
        };
        return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])((response_) => {
            return this.processCustomer(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])((response_) => {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return this.processCustomer(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    }
    processCustomer(response) {
        const status = response.status;
        const responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        let _headers = {};
        if (response.headers) {
            for (let key of response.headers.keys()) {
                _headers[key] = response.headers.get(key);
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(_responseText => {
                let result200 = null;
                result200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
        }
        else if (status === 404) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(_responseText => {
                let result404 = null;
                result404 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                return throwException("Not Found", status, _responseText, _headers, result404);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(_responseText => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    }
}
Client.ɵfac = function Client_Factory(t) { return new (t || Client)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](API_BASE_URL, 8)); };
Client.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: Client, factory: Client.ɵfac, providedIn: 'root' });
class ApiException extends Error {
    constructor(message, status, response, headers, result) {
        super();
        this.isApiException = true;
        this.message = message;
        this.status = status;
        this.response = response;
        this.headers = headers;
        this.result = result;
    }
    static isApiException(obj) {
        return obj.isApiException === true;
    }
}
function throwException(message, status, response, headers, result) {
    if (result !== null && result !== undefined)
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(result);
    else
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(new ApiException(message, status, response, headers, null));
}
function blobToText(blob) {
    return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]((observer) => {
        if (!blob) {
            observer.next("");
            observer.complete();
        }
        else {
            let reader = new FileReader();
            reader.onload = event => {
                observer.next(event.target.result);
                observer.complete();
            };
            reader.readAsText(blob);
        }
    });
}


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _se_web_ui_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @se/web-ui-angular */ "U3Mr");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout/layout.component */ "uswQ");



class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "se-app");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_se_web_ui_angular__WEBPACK_IMPORTED_MODULE_1__["SeApp"], _layout_layout_component__WEBPACK_IMPORTED_MODULE_2__["LayoutComponent"]], encapsulation: 2 });


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
/* harmony import */ var _se_web_ui_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @se/web-ui-angular */ "U3Mr");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _services_ebo_client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/ebo-client.service */ "RPhw");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout/layout.component */ "uswQ");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _tabbar_tabbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tabbar/tabbar.component */ "zOGL");
/* harmony import */ var _customer_customer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./customer/customer.component */ "MwYd");
/* harmony import */ var _customer_customer_search_customer_search_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./customer/customer-search/customer-search.component */ "oYE5");
/* harmony import */ var _customer_customer_list_customer_card_customer_card_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./customer/customer-list/customer-card/customer-card.component */ "yEXz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "fXoL");














class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [{ provide: _services_ebo_client_service__WEBPACK_IMPORTED_MODULE_3__["API_BASE_URL"], useValue: _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl }], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _se_web_ui_angular__WEBPACK_IMPORTED_MODULE_1__["SeWebModule"].forRoot()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _layout_layout_component__WEBPACK_IMPORTED_MODULE_6__["LayoutComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
        _tabbar_tabbar_component__WEBPACK_IMPORTED_MODULE_8__["TabbarComponent"],
        _customer_customer_component__WEBPACK_IMPORTED_MODULE_9__["CustomerComponent"],
        _customer_customer_search_customer_search_component__WEBPACK_IMPORTED_MODULE_10__["CustomerSearchComponent"],
        _customer_customer_list_customer_card_customer_card_component__WEBPACK_IMPORTED_MODULE_11__["CustomerCardComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _se_web_ui_angular__WEBPACK_IMPORTED_MODULE_1__["SeWebModule"]] }); })();


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
/* harmony import */ var _se_web_ui_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @se/web-ui-angular */ "U3Mr");


class HeaderComponent {
    constructor() {
        this.siteLanguage = 'English';
        this.languageList = [
            { code: 'en', label: 'English' },
            { code: 'es', label: 'Español' }
        ];
    }
    ngOnInit() {
        this.siteLocale = window.location.pathname.split('/')[1];
        this.siteLanguage = this.languageList.find(f => f.code === this.siteLocale).label;
        console.log(this.siteLanguage);
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 20, vars: 0, consts: [["app-title", "EBO Software Assurance"], ["id", "app2-sidemenu"], ["item", "About"], ["app-title", "Test Advisor", "version", "1.2.3", "image-url", "url(https://www.nozominetworks.com/wp-content/uploads/2019/01/Nozomi-Networks-and-Schneider-Electric-Partner-Secure-Industrial-Infrastructure.jpg)"], ["item", "My custom item"], ["item", "Close", "did-click", "document.getElementById('app2-sidemenu').toggle()"], ["slot", "end"], ["alignment", "right"], ["slot", "trigger", "option", "inherit", "icon", "user_standard", "icon-color", "primary"], ["option", "dropdown"], ["item", "Language"], ["item", "English", "href", "/en"], ["item", "Espa\u00F1ol", "href", "/es"], ["item", "Fran\u00E7aise", "href", "/fr"], ["item", "Logout"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "se-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "se-sidemenu", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "se-sidemenu-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "se-about", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "se-sidemenu-item", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "se-block");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " My item content ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "se-sidemenu-item", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "se-dropdown", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "se-button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "My Site 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "se-list", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "se-list-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "se-list-group", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "se-list-item", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "se-list-item", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "se-list-item", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "se-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "se-list-item", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_se_web_ui_angular__WEBPACK_IMPORTED_MODULE_1__["SeHeader"], _se_web_ui_angular__WEBPACK_IMPORTED_MODULE_1__["SeSidemenu"], _se_web_ui_angular__WEBPACK_IMPORTED_MODULE_1__["SeSidemenuItem"], _se_web_ui_angular__WEBPACK_IMPORTED_MODULE_1__["SeAbout"], _se_web_ui_angular__WEBPACK_IMPORTED_MODULE_1__["SeBlock"], _se_web_ui_angular__WEBPACK_IMPORTED_MODULE_1__["SeDropdown"], _se_web_ui_angular__WEBPACK_IMPORTED_MODULE_1__["SeButton"], _se_web_ui_angular__WEBPACK_IMPORTED_MODULE_1__["SeList"], _se_web_ui_angular__WEBPACK_IMPORTED_MODULE_1__["SeListItem"], _se_web_ui_angular__WEBPACK_IMPORTED_MODULE_1__["SeListGroup"], _se_web_ui_angular__WEBPACK_IMPORTED_MODULE_1__["SeDivider"]], encapsulation: 2 });


/***/ }),

/***/ "n/i5":
/*!*****************************************************!*\
  !*** ./src/app/services/customer-search.service.ts ***!
  \*****************************************************/
/*! exports provided: CustomerSearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerSearchService", function() { return CustomerSearchService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class CustomerSearchService {
    constructor() {
        this.searchValueChanged$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]('');
    }
    setSearchValue(value) {
        this.searchValueChanged$.next(value);
    }
}
CustomerSearchService.ɵfac = function CustomerSearchService_Factory(t) { return new (t || CustomerSearchService)(); };
CustomerSearchService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CustomerSearchService, factory: CustomerSearchService.ɵfac, providedIn: "root" });


/***/ }),

/***/ "oYE5":
/*!***********************************************************************!*\
  !*** ./src/app/customer/customer-search/customer-search.component.ts ***!
  \***********************************************************************/
/*! exports provided: CustomerSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerSearchComponent", function() { return CustomerSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_customer_search_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/customer-search.service */ "n/i5");
/* harmony import */ var _se_web_ui_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @se/web-ui-angular */ "U3Mr");



class CustomerSearchComponent {
    constructor(customerSearchService) {
        this.customerSearchService = customerSearchService;
    }
    onSearchChange(value) {
        this.customerSearchService.setSearchValue(value);
    }
}
CustomerSearchComponent.ɵfac = function CustomerSearchComponent_Factory(t) { return new (t || CustomerSearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_customer_search_service__WEBPACK_IMPORTED_MODULE_1__["CustomerSearchService"])); };
CustomerSearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CustomerSearchComponent, selectors: [["app-customer-search"]], decls: 6, vars: 0, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @desc Placeholder for search by name input field
         * @meaning Input placeholder
         */
        const MSG_EXTERNAL_customerSearchPlaceholder$$SRC_APP_CUSTOMER_CUSTOMER_SEARCH_CUSTOMER_SEARCH_COMPONENT_TS_1 = goog.getMsg("Search by Name");
        i18n_0 = MSG_EXTERNAL_customerSearchPlaceholder$$SRC_APP_CUSTOMER_CUSTOMER_SEARCH_CUSTOMER_SEARCH_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:Input placeholder|Placeholder for search by name input field@@customerSearchPlaceholder:Search by Name`;
    } return [["display", "block", "margin", "small"], ["labelWidth", "0", "block", ""], [1, "with-icon"], ["type", "search", "placeholder", i18n_0, 1, "search-input", 3, "input"], ["color", "primary"]]; }, template: function CustomerSearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "se-block", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "se-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function CustomerSearchComponent_Template_input_input_3_listener($event) { return ctx.onSearchChange($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "se-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "action_search_stroke");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_se_web_ui_angular__WEBPACK_IMPORTED_MODULE_2__["SeBlock"], _se_web_ui_angular__WEBPACK_IMPORTED_MODULE_2__["SeFormField"], _se_web_ui_angular__WEBPACK_IMPORTED_MODULE_2__["SeIcon"]], encapsulation: 2 });


/***/ }),

/***/ "s0Cq":
/*!*************************************!*\
  !*** ./src/app/shared/constants.ts ***!
  \*************************************/
/*! exports provided: SearchConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchConstants", function() { return SearchConstants; });
class SearchConstants {
}
SearchConstants.DEBOUNCE_TIME = 300;
SearchConstants.MIN_LENGTH = 3;


/***/ }),

/***/ "uswQ":
/*!********************************************!*\
  !*** ./src/app/layout/layout.component.ts ***!
  \********************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header/header.component */ "fECr");
/* harmony import */ var _tabbar_tabbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tabbar/tabbar.component */ "zOGL");
/* harmony import */ var _customer_customer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../customer/customer.component */ "MwYd");




class LayoutComponent {
}
LayoutComponent.ɵfac = function LayoutComponent_Factory(t) { return new (t || LayoutComponent)(); };
LayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LayoutComponent, selectors: [["app-layout"]], decls: 3, vars: 0, template: function LayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-tabbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-customer");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _tabbar_tabbar_component__WEBPACK_IMPORTED_MODULE_2__["TabbarComponent"], _customer_customer_component__WEBPACK_IMPORTED_MODULE_3__["CustomerComponent"]], encapsulation: 2 });


/***/ }),

/***/ "yEXz":
/*!*********************************************************************************!*\
  !*** ./src/app/customer/customer-list/customer-card/customer-card.component.ts ***!
  \*********************************************************************************/
/*! exports provided: CustomerCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerCardComponent", function() { return CustomerCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _se_web_ui_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @se/web-ui-angular */ "U3Mr");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function CustomerCardComponent_p_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r0.createdOn, " - ", ctx_r0.createdBy, " ");
} }
function CustomerCardComponent_p_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r1.lastModificationOn, " - ", ctx_r1.lastModificationBy, " ");
} }
class CustomerCardComponent {
    constructor() {
        this.quoteId = "EBO-1234";
        this.business = "Schneider New York";
        this.sites = 0;
    }
    ngOnInit() {
        // Mock data
        // 
        // this.quoteId = "EBO-1234";
        // this.business = "Schneider New York";
        // this.sites = 8;
        // this.createdOn = "2021_03_03";
        // this.createdBy = "John Doe";
        // this.lastModificationOn = "2021_03_03";
        // this.lastModificationBy = "Dan Carter";
    }
    onClickEdit() {
        // Test log
        // 
        // console.log("onEdit event triggered!");
    }
    onDuplicate() {
        // Test log
        // 
        // console.log("onDuplicate event triggered!");
    }
    onDelete() {
        // Test log
        // 
        // console.log("onDelete event triggered!");
    }
}
CustomerCardComponent.ɵfac = function CustomerCardComponent_Factory(t) { return new (t || CustomerCardComponent)(); };
CustomerCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CustomerCardComponent, selectors: [["customer-card"]], decls: 32, vars: 5, consts: [["display", "block", "direction", "row", "width", "100%", 2, "padding", "5rem"], [1, "frame", "container"], [1, "container-header"], [1, "header-item"], [1, "bold"], [1, "grey"], [1, "header-item-end"], ["option", "button", "color", "standard", 3, "click"], ["alignment", "right"], ["slot", "trigger", "option", "button"], ["option", "dropdown"], ["icon", "action_duplicate", "description", "Duplicate", 3, "click"], ["icon", "action_delete", "description", "Delete", 3, "click"], [1, "container-body"], [1, "body-item"], ["color", "primary", 2, "align-self", "center"], [1, "body", "bold"], [1, "body-item-end"], ["class", "body bold", 4, "ngIf"]], template: function CustomerCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "se-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "se-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomerCardComponent_Template_se_icon_click_9_listener() { return ctx.onClickEdit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " action_editor ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "se-dropdown", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "se-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " other_vertical ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "se-list", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "se-list-item", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomerCardComponent_Template_se_list_item_click_15_listener() { return ctx.onDuplicate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "se-list-item", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomerCardComponent_Template_se_list_item_click_16_listener() { return ctx.onDelete(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "se-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "se-icon", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "action_datasheet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Created");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, CustomerCardComponent_p_27_Template, 2, 2, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Last Modification");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, CustomerCardComponent_p_31_Template, 2, 2, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.quoteId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.business);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.sites, " Sites");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.createdBy && ctx.createdOn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.lastModificationBy && ctx.lastModificationOn);
    } }, directives: [_se_web_ui_angular__WEBPACK_IMPORTED_MODULE_1__["SeContainer"], _se_web_ui_angular__WEBPACK_IMPORTED_MODULE_1__["SeIcon"], _se_web_ui_angular__WEBPACK_IMPORTED_MODULE_1__["SeDropdown"], _se_web_ui_angular__WEBPACK_IMPORTED_MODULE_1__["SeList"], _se_web_ui_angular__WEBPACK_IMPORTED_MODULE_1__["SeListItem"], _se_web_ui_angular__WEBPACK_IMPORTED_MODULE_1__["SeDivider"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".frame[_ngcontent-%COMP%] {\n  background-color: white;\n  padding: 0.3rem;\n  border-radius: 0.7rem;\n  border-color: lightgray;\n  border-width: 0.1rem;\n  border-style: solid;\n  box-shadow: 0.2rem 0.2rem 0.5rem lightgray;\n}\n\n.grey[_ngcontent-%COMP%] {\n  font-size: x-small;\n  color: var(--se-border);\n}\n\n.bold[_ngcontent-%COMP%] {\n  font-size: small;\n  font-weight: bold;\n  padding-top: 0.2rem;\n  padding-bottom: 0.2rem;\n}\n\n.body[_ngcontent-%COMP%] {\n  font-size: small;\n  align-self: center;\n  padding-inline: 1rem;\n}\n\n.container[_ngcontent-%COMP%] {\n  display: grid;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  padding-left: 2rem;\n  padding-right: 2rem;\n  min-width: 30rem;\n}\n\n.container-header[_ngcontent-%COMP%] {\n  display: grid;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  grid-template-columns: 2fr 7fr 1fr;\n}\n\n.header-item[_ngcontent-%COMP%] {\n  grid-column-start: 0;\n}\n\n.header-item-end[_ngcontent-%COMP%] {\n  grid-column-start: 3;\n  justify-self: flex-end;\n  align-self: center;\n}\n\n.container-body[_ngcontent-%COMP%] {\n  display: grid;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  grid-template-columns: 2fr 3fr 3fr 3fr;\n}\n\n.body-item[_ngcontent-%COMP%], .body-item-end[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: stretch;\n  align-items: center;\n}\n\n.body-item-end[_ngcontent-%COMP%] {\n  grid-column-start: 3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcY3VzdG9tZXItY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMENBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsdUJBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtDQUFBO0FBQ0o7O0FBRUE7RUFDSSxvQkFBQTtBQUNKOztBQUVBO0VBQ0ksb0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHNDQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksb0JBQUE7QUFDSiIsImZpbGUiOiJjdXN0b21lci1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZyYW1le1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAuM3JlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IC43cmVtO1xyXG4gICAgYm9yZGVyLWNvbG9yOiBsaWdodGdyYXk7XHJcbiAgICBib3JkZXItd2lkdGg6IC4xcmVtO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJveC1zaGFkb3c6IC4ycmVtIC4ycmVtIC41cmVtIGxpZ2h0Z3JheTtcclxufVxyXG5cclxuLmdyZXkge1xyXG4gICAgZm9udC1zaXplOiB4LXNtYWxsO1xyXG4gICAgY29sb3I6dmFyKC0tc2UtYm9yZGVyKTtcclxufVxyXG5cclxuLmJvbGQge1xyXG4gICAgZm9udC1zaXplOiBzbWFsbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgcGFkZGluZy10b3A6IC4ycmVtO1xyXG4gICAgcGFkZGluZy1ib3R0b206IC4ycmVtO1xyXG59XHJcblxyXG4uYm9keSB7XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgcGFkZGluZy1pbmxpbmU6IDFyZW07XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIHBhZGRpbmctdG9wOiAuNXJlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAuNXJlbTtcclxuICAgIHBhZGRpbmctbGVmdDogMnJlbTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDJyZW07XHJcbiAgICBtaW4td2lkdGg6IDMwcmVtO1xyXG59XHJcblxyXG4uY29udGFpbmVyLWhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgcGFkZGluZy10b3A6IC41cmVtO1xyXG4gICAgcGFkZGluZy1ib3R0b206IC41cmVtO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgN2ZyIDFmcjtcclxufVxyXG5cclxuLmhlYWRlci1pdGVtIHtcclxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAwO1xyXG59XHJcblxyXG4uaGVhZGVyLWl0ZW0tZW5kIHtcclxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAzO1xyXG4gICAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxufVxyXG5cclxuLmNvbnRhaW5lci1ib2R5IHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBwYWRkaW5nLXRvcDogLjVyZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogLjVyZW07XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAzZnIgM2ZyIDNmcjtcclxufVxyXG5cclxuLmJvZHktaXRlbSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzdHJldGNoO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmJvZHktaXRlbS1lbmQge1xyXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDM7XHJcbiAgICBAZXh0ZW5kIC5ib2R5LWl0ZW07XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "zOGL":
/*!********************************************!*\
  !*** ./src/app/tabbar/tabbar.component.ts ***!
  \********************************************/
/*! exports provided: TabbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabbarComponent", function() { return TabbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _se_web_ui_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @se/web-ui-angular */ "U3Mr");


class TabbarComponent {
}
TabbarComponent.ɵfac = function TabbarComponent_Factory(t) { return new (t || TabbarComponent)(); };
TabbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TabbarComponent, selectors: [["app-tabbar"]], decls: 6, vars: 0, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @desc Display name for the Customers tab
         * @meaning Tab display name
         */
        const MSG_EXTERNAL_customerTabName$$SRC_APP_TABBAR_TABBAR_COMPONENT_TS_1 = goog.getMsg("Customers");
        i18n_0 = MSG_EXTERNAL_customerTabName$$SRC_APP_TABBAR_TABBAR_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:Tab display name|Display name for the Customers tab@@customerTabName:Customers`;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @desc Display name for the Quotes tab
         * @meaning Tab display name
         */
        const MSG_EXTERNAL_quotesTabName$$SRC_APP_TABBAR_TABBAR_COMPONENT_TS_3 = goog.getMsg("Quotes");
        i18n_2 = MSG_EXTERNAL_quotesTabName$$SRC_APP_TABBAR_TABBAR_COMPONENT_TS_3;
    }
    else {
        i18n_2 = $localize `:Tab display name|Display name for the Quotes tab@@quotesTabName:Quotes`;
    } return [["color", "primary"], [1, "active"], i18n_0, i18n_2]; }, template: function TabbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "se-tabbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](3, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](5, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_se_web_ui_angular__WEBPACK_IMPORTED_MODULE_1__["SeTabbar"]], encapsulation: 2 });


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