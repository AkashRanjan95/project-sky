(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\ngSky-Project-Portfolio\project-sky\src\main.ts */"zUnb");


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
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ "vtpD");


class AppComponent {
    constructor() {
        this.title = 'project-sky';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-login");
    } }, directives: [_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


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
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"]] }); })();


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
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "vtpD":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

const _c0 = ["loginBox"];
class LoginComponent {
    constructor() { }
    ngOnInit() {
    }
    login() {
        alert("Login button has been clicked!!");
    }
    rotateCard() {
        this.loginBox.nativeElement.classList.toggle('hover');
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], viewQuery: function LoginComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.loginBox = _t.first);
    } }, decls: 38, vars: 0, consts: [[1, "body-container"], [1, "login-box"], ["loginBox", ""], [1, "login-content"], [1, "login-header"], ["action", ""], [1, "inputBox"], ["type", "text", "name", "username", "placeholder", "Username"], ["type", "password", "name", "password", "placeholder", "Password"], [1, "btn-login"], [1, "forget"], ["href", "#"], ["href", "#", 3, "click"], [1, "signup-content"], [1, ""], [1, "signup-header"], ["type", "email", "name", "email", "placeholder", "E-mail"], ["type", "number", "name", "phone", "placeholder", "Contact no."], [1, "btn-signup"], [1, "return-to-signin"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Sign in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Sign in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Forgot password ? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Click here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Don't have an account ? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_a_click_19_listener() { return ctx.rotateCard(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Sign up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h2", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Sign up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Continue ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Already have an account ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_a_click_36_listener() { return ctx.rotateCard(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Click here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200,600&display=swap');\r\n.body-container[_ngcontent-%COMP%] {\r\n    background: radial-gradient(ellipse at bottom, #1b2735, #090a0f);\r\n    background: -webkit-radial-gradient(ellipse at bottom, #1b2735, #090a0f);\r\n    height: 100vh;\r\n    width: 100vw;\r\n    margin: 0px;\r\n    padding: 0px;\r\n    overflow: hidden;\r\n    background-repeat: no-repeat;\r\n    font-family: 'Poppins', sans-serif;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n.login-content[_ngcontent-%COMP%]   .login-header[_ngcontent-%COMP%] {\r\n    color: darkgoldenrod;\r\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n    left: 36%;\r\n    top: 30px;\r\n    text-align: -webkit-center;\r\n    position: inherit;\r\n    \r\n    letter-spacing: 1px;\r\n    margin-bottom: 40px;\r\n}\r\n\r\n\r\n.login-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    color: antiquewhite;\r\n    margin: 0;\r\n    padding-left: 20px;\r\n    font-weight: bold;\r\n}\r\n.login-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    color: rgb(0, 204, 255);\r\n    text-decoration: none;\r\n    \r\n    padding-left: 20px;\r\n    font-weight: bold;\r\n}\r\n.login-content[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    margin-top: 20px;\r\n}\r\n.login-content[_ngcontent-%COMP%]   .inputBox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    width: 93%;\r\n    \r\n    background: none;\r\n    border: none;\r\n    outline: none;\r\n    padding: 10px;\r\n    border-radius: 35px;\r\n    \r\n    font-size: 16px;\r\n    letter-spacing: 1px;\r\n    color: #fff;\r\n    box-shadow: 0 2px 2px rgba(255, 255, 255, 0.514);\r\n}\r\n.login-content[_ngcontent-%COMP%]   .inputBox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\r\n    color: #fff;\r\n    letter-spacing: 1px;\r\n    margin-left: 50px;\r\n}\r\n.login-content[_ngcontent-%COMP%]   .btn-login[_ngcontent-%COMP%] {\r\n    background: #85879c;\r\n    color: #0c0341;\r\n    border-radius: 30px;\r\n    max-width: 100px;\r\n    font-weight: 600;\r\n    left: 30%;\r\n    cursor: pointer;\r\n    \r\n    margin: 20px 0 20px 0;\r\n    margin-left: 40%;\r\n}\r\n\r\n\r\n.login-box[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 320px;\r\n    min-height: 420px;\r\n    transform-style: preserve-3d;\r\n    perspective: 500px;\r\n    border: none;\r\n}\r\n.login-box[_ngcontent-%COMP%]   .login-content[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    box-shadow: 0 0 12px rgb(255, 255, 255, 0.50);\r\n    border-radius: 15px;\r\n    background: rgba(255, 255, 255, 0.05);\r\n    -webkit-backdrop-filter: blur(10px);\r\n            backdrop-filter: blur(10px);\r\n    transform-style: preserve-3d;\r\n    transition: 1s;\r\n    -webkit-backface-visibility: hidden;\r\n            backface-visibility: hidden;\r\n}\r\n.login-box[_ngcontent-%COMP%]   .signup-content[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    box-shadow: 0 0 12px rgb(255, 255, 255, 0.50);\r\n    border-radius: 15px;\r\n    background: rgba(255, 255, 255, 0.05);\r\n    -webkit-backdrop-filter: blur(10px);\r\n            backdrop-filter: blur(10px);\r\n    transform-style: preserve-3d;\r\n    transition: 1s;\r\n    -webkit-backface-visibility: hidden;\r\n            backface-visibility: hidden;\r\n}\r\n.login-box.hover[_ngcontent-%COMP%]   .login-content[_ngcontent-%COMP%] {\r\n    transform: rotateY(180deg);\r\n}\r\n.login-box[_ngcontent-%COMP%]   .signup-content[_ngcontent-%COMP%] {\r\n    transform: rotateY(180deg);\r\n}\r\n.login-box.hover[_ngcontent-%COMP%]   .signup-content[_ngcontent-%COMP%] {\r\n    transform: rotateY(360deg);\r\n}\r\n.login-box[_ngcontent-%COMP%]   .signup-content[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\r\n    align-items: center;\r\n}\r\n.signup-content[_ngcontent-%COMP%]   .signup-header[_ngcontent-%COMP%] {\r\n    color: darkgoldenrod;\r\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n    left: 36%;\r\n    top: 30px;\r\n    text-align: -webkit-center;\r\n    position: inherit;\r\n    \r\n    letter-spacing: 1px;\r\n    margin-bottom: 30px;\r\n}\r\n\r\n\r\n.signup-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    color: antiquewhite;\r\n    margin: 0;\r\n    padding-left: 20px;\r\n    \r\n}\r\n.signup-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    padding: 0;\r\n    color: rgb(0, 204, 255);\r\n    text-decoration: none;\r\n    \r\n    padding-left: 5px;\r\n    \r\n}\r\n.signup-content[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    margin-top: 20px;\r\n}\r\n.signup-content[_ngcontent-%COMP%]   .inputBox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    width: 75%;\r\n    margin-left: 10%;\r\n    \r\n    background: none;\r\n    border: none;\r\n    outline: none;\r\n    padding: 10px;\r\n    border-radius: 35px;\r\n    \r\n    font-size: 16px;\r\n    letter-spacing: 1px;\r\n    color: #fff;\r\n    box-shadow: 0 2px 2px rgba(255, 255, 255, 0.514);\r\n}\r\n.signup-content[_ngcontent-%COMP%]   .inputBox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\r\n    color: #fff;\r\n    letter-spacing: 1px;\r\n    margin-left: 50px;\r\n}\r\n.signup-content[_ngcontent-%COMP%]   .inputBox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-outer-spin-button, .signup-content[_ngcontent-%COMP%]   .inputBox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-inner-spin-button {\r\n    -webkit-appearance: none;\r\n    margin: 0;\r\n}\r\n.signup-content[_ngcontent-%COMP%]   .inputBox[_ngcontent-%COMP%]   input[type=number][_ngcontent-%COMP%] {\r\n    -moz-appearance: textfield;\r\n}\r\n.signup-content[_ngcontent-%COMP%]   .btn-signup[_ngcontent-%COMP%] {\r\n    background: #181935;\r\n    color: #25ff00;\r\n    border-radius: 30px;\r\n    max-width: 100px;\r\n    font-weight: 600;\r\n    \r\n    cursor: pointer;\r\n    \r\n    margin: 20px 0 20px 0;\r\n    margin-left: 40%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,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QUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLHVCQUF1QjtBQUMzQjtBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVix1QkFBdUI7SUFDdkIscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsdUJBQXVCO0FBQzNCO0FBRUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLHdDQUF3QztJQUN4QyxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGFBQWE7SUFDYixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25COzt5REFFcUQ7SUFDckQsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsZ0RBQWdEO0FBQ3BEO0FBRUE7SUFDSSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQjtBQUVBOztJQUVJLHdCQUF3QjtJQUN4QixTQUFTO0FBQ2I7QUFFQTtJQUNJLDBCQUEwQjtBQUM5QjtBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOndnaHRAMjAwLDYwMCZkaXNwbGF5PXN3YXAnKTtcclxuLmJvZHktY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChlbGxpcHNlIGF0IGJvdHRvbSwgIzFiMjczNSwgIzA5MGEwZik7XHJcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LXJhZGlhbC1ncmFkaWVudChlbGxpcHNlIGF0IGJvdHRvbSwgIzFiMjczNSwgIzA5MGEwZik7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5cclxuLyogLmJveCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn0gKi9cclxuXHJcblxyXG4vKiAubG9naW4tYm94IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAzMjBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDQyMHB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAyKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxMnB4IHJnYigyNTUsIDI1NSwgMjU1LCAwLjUwKSwgaW5zZXQgMCAwIDEwcHggcmdiKDI1NSwgMjU1LCAyNTUsIDAuNTApOyAqL1xyXG5cclxuXHJcbi8qIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7ICovXHJcblxyXG5cclxuLyogdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICB0cmFuc2l0aW9uOiAxczsgKi9cclxuXHJcblxyXG4vKiBib3gtc2l6aW5nOiBib3JkZXItYm94OyAqL1xyXG5cclxuXHJcbi8qIGNvbG9yOiByZ2IoMCwgMCwgMCk7ICovXHJcblxyXG5cclxuLyogfSAqL1xyXG5cclxuXHJcbi8qIC5sb2dpbi1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn0gKi9cclxuXHJcbi5sb2dpbi1jb250ZW50IC5sb2dpbi1oZWFkZXIge1xyXG4gICAgY29sb3I6IGRhcmtnb2xkZW5yb2Q7XHJcbiAgICBmb250LWZhbWlseTogJ0ZyYW5rbGluIEdvdGhpYyBNZWRpdW0nLCAnQXJpYWwgTmFycm93JywgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICBsZWZ0OiAzNiU7XHJcbiAgICB0b3A6IDMwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiAtd2Via2l0LWNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBpbmhlcml0O1xyXG4gICAgLyogZm9udC13ZWlnaHQ6IDYwMDsgKi9cclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG59XHJcblxyXG5cclxuLyogLmxvZ2luLWNvbnRlbnQgaDIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG59ICovXHJcblxyXG5cclxuLyogLmxvZ2luLWNvbnRlbnQgaDI6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IC0xMHB4O1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgICBoZWlnaHQ6IDRweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn0gKi9cclxuXHJcbi5sb2dpbi1jb250ZW50IHAge1xyXG4gICAgY29sb3I6IGFudGlxdWV3aGl0ZTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4ubG9naW4tY29udGVudCBwIGEge1xyXG4gICAgY29sb3I6IHJnYigwLCAyMDQsIDI1NSk7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAvKiBtYXJnaW46IDA7ICovXHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmxvZ2luLWNvbnRlbnQgaW5wdXQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4ubG9naW4tY29udGVudCAuaW5wdXRCb3ggaW5wdXQge1xyXG4gICAgd2lkdGg6IDkzJTtcclxuICAgIC8qIC8qIGJhY2tncm91bmQ6IHJnYigxNTAsIDE1MCwgMTUwKTsgICovXHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzNXB4O1xyXG4gICAgLyogLyogYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTsgICovXHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCAycHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUxNCk7XHJcbn1cclxuXHJcbi5sb2dpbi1jb250ZW50IC5pbnB1dEJveCBpbnB1dDo6cGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbn1cclxuXHJcbi5sb2dpbi1jb250ZW50IC5idG4tbG9naW4ge1xyXG4gICAgYmFja2dyb3VuZDogIzg1ODc5YztcclxuICAgIGNvbG9yOiAjMGMwMzQxO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIG1heC13aWR0aDogMTAwcHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbGVmdDogMzAlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cclxuICAgIG1hcmdpbjogMjBweCAwIDIwcHggMDtcclxuICAgIG1hcmdpbi1sZWZ0OiA0MCU7XHJcbn1cclxuXHJcblxyXG4vKiAubG9naW4tY29udGVudCAuYnRuLWxvZ2luIHtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMTUxLCAxNTEpO1xyXG4gICAgY29sb3I6IHJnYig3MCwgNzAsIDcwKTtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn0gKi9cclxuXHJcblxyXG4vKiAubG9naW4tY29udGVudCAuYnRuLWxvZ2luOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjA4LCAxNTApO1xyXG4gICAgY29sb3I6IHJnYigxNzYsIDE3NiwgMjU1KTtcclxufSAqL1xyXG5cclxuLmxvZ2luLWJveCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMzIwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiA0MjBweDtcclxuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICBwZXJzcGVjdGl2ZTogNTAwcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5sb2dpbi1ib3ggLmxvZ2luLWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxMnB4IHJnYigyNTUsIDI1NSwgMjU1LCAwLjUwKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpO1xyXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xyXG4gICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIHRyYW5zaXRpb246IDFzO1xyXG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcblxyXG4ubG9naW4tYm94IC5zaWdudXAtY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDEycHggcmdiKDI1NSwgMjU1LCAyNTUsIDAuNTApO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSk7XHJcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XHJcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgdHJhbnNpdGlvbjogMXM7XHJcbiAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuXHJcbi5sb2dpbi1ib3guaG92ZXIgLmxvZ2luLWNvbnRlbnQge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XHJcbn1cclxuXHJcbi5sb2dpbi1ib3ggLnNpZ251cC1jb250ZW50IHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xyXG59XHJcblxyXG4ubG9naW4tYm94LmhvdmVyIC5zaWdudXAtY29udGVudCB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMzYwZGVnKTtcclxufVxyXG5cclxuLmxvZ2luLWJveCAuc2lnbnVwLWNvbnRlbnQgLmhlYWRlciB7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uc2lnbnVwLWNvbnRlbnQgLnNpZ251cC1oZWFkZXIge1xyXG4gICAgY29sb3I6IGRhcmtnb2xkZW5yb2Q7XHJcbiAgICBmb250LWZhbWlseTogJ0ZyYW5rbGluIEdvdGhpYyBNZWRpdW0nLCAnQXJpYWwgTmFycm93JywgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICBsZWZ0OiAzNiU7XHJcbiAgICB0b3A6IDMwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiAtd2Via2l0LWNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBpbmhlcml0O1xyXG4gICAgLyogZm9udC13ZWlnaHQ6IDYwMDsgKi9cclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG5cclxuLyogLmxvZ2luLWNvbnRlbnQgaDIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG59ICovXHJcblxyXG5cclxuLyogLmxvZ2luLWNvbnRlbnQgaDI6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IC0xMHB4O1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgICBoZWlnaHQ6IDRweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn0gKi9cclxuXHJcbi5zaWdudXAtY29udGVudCBwIHtcclxuICAgIGNvbG9yOiBhbnRpcXVld2hpdGU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICAvKiBmb250LXdlaWdodDogYm9sZDsgKi9cclxufVxyXG5cclxuLnNpZ251cC1jb250ZW50IHAgYSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgY29sb3I6IHJnYigwLCAyMDQsIDI1NSk7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAvKiBtYXJnaW46IDA7ICovXHJcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgIC8qIGZvbnQtd2VpZ2h0OiBib2xkOyAqL1xyXG59XHJcblxyXG4uc2lnbnVwLWNvbnRlbnQgaW5wdXQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4uc2lnbnVwLWNvbnRlbnQgLmlucHV0Qm94IGlucHV0IHtcclxuICAgIHdpZHRoOiA3NSU7XHJcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gICAgLyogLyogYmFja2dyb3VuZDogcmdiKDE1MCwgMTUwLCAxNTApOyAgKi9cclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDM1cHg7XHJcbiAgICAvKiAvKiBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpOyAgKi9cclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDJweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTE0KTtcclxufVxyXG5cclxuLnNpZ251cC1jb250ZW50IC5pbnB1dEJveCBpbnB1dDo6cGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbn1cclxuXHJcbi5zaWdudXAtY29udGVudCAuaW5wdXRCb3ggaW5wdXQ6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24sXHJcbi5zaWdudXAtY29udGVudCAuaW5wdXRCb3ggaW5wdXQ6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uc2lnbnVwLWNvbnRlbnQgLmlucHV0Qm94IGlucHV0W3R5cGU9bnVtYmVyXSB7XHJcbiAgICAtbW96LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcclxufVxyXG5cclxuLnNpZ251cC1jb250ZW50IC5idG4tc2lnbnVwIHtcclxuICAgIGJhY2tncm91bmQ6ICMxODE5MzU7XHJcbiAgICBjb2xvcjogIzI1ZmYwMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDEwMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIC8qIGxlZnQ6IDMwJTsgKi9cclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXHJcbiAgICBtYXJnaW46IDIwcHggMCAyMHB4IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogNDAlO1xyXG59Il19 */"] });


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