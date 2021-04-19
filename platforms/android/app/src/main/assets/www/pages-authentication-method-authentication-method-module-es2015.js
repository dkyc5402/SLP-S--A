(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-authentication-method-authentication-method-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/authentication-method/authentication-method.page.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/authentication-method/authentication-method.page.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-title>Student Learning Platform</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<link href=\"https://code.ionicframework.com/nightly/css/ionic.css\" rel=\"stylesheet\">\r\n\r\n<ion-content padding='true'>\r\n    <div class=\"container\">\r\n\r\n        <div style=\"margin: 30px\">\r\n            <p class=\"p\">Select Authentication Method</p>\r\n            <br>\r\n            <form class=\"container\" [formGroup]=\"loginForm\">\r\n\r\n                    <div class=\"form-group\">\r\n                      <ion-label position=\"stacked\">Phone <span style=\"color: red\">*</span></ion-label>\r\n                      <input id=\"numberTxt\" placeholder=\"Enter mobile number\" value=\"\" type=\"tel\" name=\"phoneNo\" />\r\n                    </div>\r\n                    <div class=\"error-messages\">\r\n                      <ng-container *ngFor=\"let error of error_messages.phoneNo\">\r\n                        <div class=\"error-message\" *ngIf=\"loginForm.get('phoneNo').hasError(error.type) && (loginForm.get('phoneNo').dirty || loginForm.get('phoneNo').touched)\">\r\n                          {{ error.message }}\r\n                        </div>\r\n                      </ng-container>\r\n                    </div>\r\n\r\n                    <br>\r\n\r\n                    <div class=\"form-group\">\r\n                        <ion-label position=\"stacked\">Code Input <span style=\"color: red\">*</span></ion-label>\r\n                        <input id=\"messageTxt\" placeholder=\"Enter message\" value=\"\" type=\"text\" name=\"code\"/>\r\n                      </div>\r\n                      <div class=\"error-messages\">\r\n                        <ng-container *ngFor=\"let error of error_messages.code\">\r\n                          <div class=\"error-message\" *ngIf=\"loginForm.get('code').hasError(error.type) && (loginForm.get('code').dirty || loginForm.get('code').touched)\">\r\n                            {{ error.message }}\r\n                          </div>\r\n                        </ng-container>\r\n                      </div>\r\n\r\n                      <br>\r\n\r\n                      <ion-button class=\"form-control btn btn-primary\" share=\"round\" style=\"--background:#20a7c2\" (click)=\"sendSMS()\">Send SMS</ion-button>\r\n            </form>\r\n        </div>\r\n    </div>\r\n\r\n\r\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/authentication-method/authentication-method-routing.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/authentication-method/authentication-method-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: AuthenticationMethodPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationMethodPageRoutingModule", function() { return AuthenticationMethodPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _authentication_method_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication-method.page */ "./src/app/pages/authentication-method/authentication-method.page.ts");




const routes = [
    {
        path: '',
        component: _authentication_method_page__WEBPACK_IMPORTED_MODULE_3__["AuthenticationMethodPage"]
    }
];
let AuthenticationMethodPageRoutingModule = class AuthenticationMethodPageRoutingModule {
};
AuthenticationMethodPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AuthenticationMethodPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/authentication-method/authentication-method.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/authentication-method/authentication-method.module.ts ***!
  \*****************************************************************************/
/*! exports provided: AuthenticationMethodPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationMethodPageModule", function() { return AuthenticationMethodPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _authentication_method_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./authentication-method-routing.module */ "./src/app/pages/authentication-method/authentication-method-routing.module.ts");
/* harmony import */ var _authentication_method_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./authentication-method.page */ "./src/app/pages/authentication-method/authentication-method.page.ts");







let AuthenticationMethodPageModule = class AuthenticationMethodPageModule {
};
AuthenticationMethodPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _authentication_method_routing_module__WEBPACK_IMPORTED_MODULE_5__["AuthenticationMethodPageRoutingModule"]
        ],
        declarations: [_authentication_method_page__WEBPACK_IMPORTED_MODULE_6__["AuthenticationMethodPage"]]
    })
], AuthenticationMethodPageModule);



/***/ }),

/***/ "./src/app/pages/authentication-method/authentication-method.page.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/authentication-method/authentication-method.page.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".center {\n  text-align: center;\n}\n\nion-title {\n  text-align: center;\n}\n\n.p {\n  color: #1c91a8;\n  font-weight: bold;\n  font-size: 20px;\n}\n\n.ionbutton {\n  --vertical-align: middle;\n  --padding-start: 100px;\n  --padding-end: 100px;\n  text-align: center;\n  font-family: \"Roboto\";\n  display: flex;\n  align-items: center;\n}\n\n.error-message {\n  color: red;\n}\n\ninput.ng-touched.ng-invalid {\n  border: 1px solid red;\n}\n\nion-button {\n  --vertical-align: middle;\n  --padding-start: 100px;\n  --padding-end: 100px;\n  text-align: center;\n  font-family: \"Roboto\";\n  display: flex;\n  align-items: center;\n  color: white;\n}\n\n.form > input {\n  clear: right;\n}\n\n.form > ion-icon {\n  margin: -25px 100px;\n  float: right;\n}\n\n.tooltip {\n  position: relative;\n  display: inline-block;\n  margin-top: -100px;\n}\n\n.tooltip .tooltiptext {\n  visibility: hidden;\n  width: 500px;\n  background-color: black;\n  color: #fff;\n  text-align: left;\n  border-radius: 6px;\n  padding: 5px 0;\n  position: absolute;\n  z-index: 1;\n}\n\n.tooltip .tooltiptext .tooltip {\n  position: relative;\n  display: inline-block;\n  margin-top: -100px;\n}\n\n.tooltip .tooltiptext .tooltip .tooltiptext {\n  visibility: hidden;\n  width: 500px;\n  background-color: black;\n  color: #fff;\n  text-align: left;\n  border-radius: 6px;\n  padding: 5px 0;\n  position: absolute;\n  z-index: 1;\n}\n\n.tooltip .tooltiptext .tooltip:hover .tooltiptext {\n  visibility: visible;\n}\n\n.tooltip:hover .tooltiptext {\n  visibility: visible;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYXV0aGVudGljYXRpb24tbWV0aG9kL0M6XFxVc2Vyc1xcTDMwOTAzXFxEb2N1bWVudHNcXEdpdEh1YlxcSW9uaWNGUEFuYWx5c2lzL3NyY1xcYXBwXFxwYWdlc1xcYXV0aGVudGljYXRpb24tbWV0aG9kXFxhdXRoZW50aWNhdGlvbi1tZXRob2QucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9hdXRoZW50aWNhdGlvbi1tZXRob2QvYXV0aGVudGljYXRpb24tbWV0aG9kLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBRUksd0JBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUVBLGFBQUE7RUFDQSxtQkFBQTtBQ0RKOztBRE1FO0VBQ0UsVUFBQTtBQ0hKOztBREtFO0VBQ0UscUJBQUE7QUNGSjs7QURLRTtFQUVFLHdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFFQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDSko7O0FET0U7RUFHQSxZQUFBO0FDTkY7O0FEU0E7RUFFRSxtQkFBQTtFQUNBLFlBQUE7QUNQRjs7QURVQTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQ1BGOztBRFVBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQXNCQSxjQUFBO0VBRUEsa0JBQUE7RUFDQSxVQUFBO0FDN0JGOztBRElxQjtFQUNqQixrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUNGSjs7QURLRTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBRUEsa0JBQUE7RUFDQSxVQUFBO0FDSko7O0FET0U7RUFDRSxtQkFBQTtBQ0xKOztBRGFBO0VBQ0UsbUJBQUE7QUNWRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2F1dGhlbnRpY2F0aW9uLW1ldGhvZC9hdXRoZW50aWNhdGlvbi1tZXRob2QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNlbnRlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmlvbi10aXRsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5wIHtcclxuICAgIGNvbG9yOiAjMWM5MWE4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbi5pb25idXR0b24ge1xyXG4gICAgLy8gLS13aWR0aDogNTAwcHg7XHJcbiAgICAtLXZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDEwMHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMTAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XHJcbiAgICAvLyBwYWRkaW5nOiAxMDAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgIFxyXG4gICAgXHJcbiAgfVxyXG5cclxuICAuZXJyb3ItbWVzc2FnZSB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gIH1cclxuICBpbnB1dC5uZy10b3VjaGVkLm5nLWludmFsaWQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG4gIH1cclxuXHJcbiAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgIC8vIC0td2lkdGg6IDUwMHB4O1xyXG4gICAgLS12ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxMDBweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDEwMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xyXG4gICAgLy8gcGFkZGluZzogMTAwMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuXHJcbiAgLmZvcm0gPiBpbnB1dFxyXG57XHJcbiAgLy8gZmxvYXQ6IGxlZnQ7XHJcbiAgY2xlYXI6IHJpZ2h0O1xyXG59XHJcblxyXG4uZm9ybSA+IGlvbi1pY29uXHJcbntcclxuICBtYXJnaW46IC0yNXB4IDEwMHB4O1xyXG4gIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLnRvb2x0aXAge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luLXRvcDogLTEwMHB4O1xyXG59XHJcblxyXG4udG9vbHRpcCAudG9vbHRpcHRleHQge1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICB3aWR0aDogNTAwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7LnRvb2x0aXAge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLXRvcDogLTEwMHB4O1xyXG4gIH1cclxuICBcclxuICAudG9vbHRpcCAudG9vbHRpcHRleHQge1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICBwYWRkaW5nOiA1cHggMDtcclxuICBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgfVxyXG4gIFxyXG4gIC50b29sdGlwOmhvdmVyIC50b29sdGlwdGV4dCB7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gIH1cclxuICBwYWRkaW5nOiA1cHggMDtcclxuXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi50b29sdGlwOmhvdmVyIC50b29sdGlwdGV4dCB7XHJcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxufVxyXG4gICIsIi5jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnAge1xuICBjb2xvcjogIzFjOTFhODtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmlvbmJ1dHRvbiB7XG4gIC0tdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxMDBweDtcbiAgLS1wYWRkaW5nLWVuZDogMTAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5lcnJvci1tZXNzYWdlIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuaW5wdXQubmctdG91Y2hlZC5uZy1pbnZhbGlkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xufVxuXG5pb24tYnV0dG9uIHtcbiAgLS12ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAtLXBhZGRpbmctc3RhcnQ6IDEwMHB4O1xuICAtLXBhZGRpbmctZW5kOiAxMDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uZm9ybSA+IGlucHV0IHtcbiAgY2xlYXI6IHJpZ2h0O1xufVxuXG4uZm9ybSA+IGlvbi1pY29uIHtcbiAgbWFyZ2luOiAtMjVweCAxMDBweDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4udG9vbHRpcCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tdG9wOiAtMTAwcHg7XG59XG5cbi50b29sdGlwIC50b29sdGlwdGV4dCB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgd2lkdGg6IDUwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgcGFkZGluZzogNXB4IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTtcbn1cbi50b29sdGlwIC50b29sdGlwdGV4dCAudG9vbHRpcCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tdG9wOiAtMTAwcHg7XG59XG4udG9vbHRpcCAudG9vbHRpcHRleHQgLnRvb2x0aXAgLnRvb2x0aXB0ZXh0IHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB3aWR0aDogNTAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBwYWRkaW5nOiA1cHggMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxO1xufVxuLnRvb2x0aXAgLnRvb2x0aXB0ZXh0IC50b29sdGlwOmhvdmVyIC50b29sdGlwdGV4dCB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbi50b29sdGlwOmhvdmVyIC50b29sdGlwdGV4dCB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/authentication-method/authentication-method.page.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/authentication-method/authentication-method.page.ts ***!
  \***************************************************************************/
/*! exports provided: AuthenticationMethodPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationMethodPage", function() { return AuthenticationMethodPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/email-composer/ngx */ "./node_modules/@ionic-native/email-composer/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");








let AuthenticationMethodPage = class AuthenticationMethodPage {
    constructor(alertController, router, platform, storage, nativeHttp, composer) {
        this.alertController = alertController;
        this.router = router;
        this.platform = platform;
        this.storage = storage;
        this.nativeHttp = nativeHttp;
        this.composer = composer;
    }
    ngOnInit() {
    }
    sendSMS() {
        var number = document.getElementById('numberTxt').value.toString(); /* iOS: ensure number is actually a string */
        var message = document.getElementById('messageTxt').value;
        console.log("number=" + number + ", message= " + message);
        //CONFIGURATION
        var options = {
            replaceLineBreaks: false,
            android: {
                intent: 'INTENT' // send SMS with the native android SMS messaging
                //intent: '' // send SMS without opening any other app, require : android.permission.SEND_SMS and android.permission.READ_PHONE_STATE
            }
        };
        var successMsg = function () { alert('Message sent successfully'); };
        var errorMsg = function (e) { alert('Message Failed:' + e); };
        var success = function (hasPermission) {
            if (hasPermission) {
                this.sms.send(number, message, options, successMsg, errorMsg);
            }
            else if (!hasPermission) {
                this.sms.requestPermission(function () {
                    console.log('[OK] Permission accepted');
                }, function (error) {
                    console.info('[WARN] Permission not accepted');
                    // Handle permission not accepted
                });
            }
            else {
                console.log('[WARN] Permission needed for SMS');
                // show a helpful message to explain why you need to require the permission to send a SMS
            }
        };
        var error = function (e) { alert('Something went wrong:' + e); };
        this.sms.hasPermission(this.sendSMS, error);
    }
};
AuthenticationMethodPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__["HTTP"] },
    { type: _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_5__["EmailComposer"] }
];
AuthenticationMethodPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-authentication-method',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./authentication-method.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/authentication-method/authentication-method.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./authentication-method.page.scss */ "./src/app/pages/authentication-method/authentication-method.page.scss")).default]
    })
], AuthenticationMethodPage);



/***/ })

}]);
//# sourceMappingURL=pages-authentication-method-authentication-method-module-es2015.js.map