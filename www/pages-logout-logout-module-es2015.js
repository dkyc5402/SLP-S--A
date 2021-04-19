(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-logout-logout-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/logout/logout.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/logout/logout.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Logout</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ul class=\"breadcrumb\" id=\"breadcrumbs\">\r\n    <li style=\"display: inline;\"><a href=\"/tabs/main\"> Home </a><i class=\"ion-chevron-right\"></i></li>\r\n    <li style=\"display: inline;\" class=\"active\"> Help </li>\r\n  </ul>    \r\n<ion-button style=\"color:white\" (click)=\"Logout()\">Logout</ion-button>\r\n\r\n<br>\r\n<br>\r\n<button class=\"accordion\" (click)='ionViewDidLoad()'>\r\n  Reset Password\r\n</button>\r\n\r\n<div style=\"margin: 5px 90px\" class=\"panel\">\r\n  <br>\r\n  <form class=\"container\" [formGroup]=\"loginForm1\">\r\n    <div class=\"form-group\"> \r\n            <ion-label position=\"stacked\">New Password <span style=\"color: red\">*</span></ion-label>\r\n            <div class=\"form\">\r\n            <input autocomplete=\"off\" name=\"password\" class=\"form-control\" formControlName=\"password\" [type]=\"showPassword4 ? 'text': 'password'\" >\r\n            <ion-icon slot=\"end\" [name]=\"passwordToggleIcon4\" (click)=\"togglePassword4()\"></ion-icon>\r\n            </div>\r\n    </div>\r\n    <div class=\"error-messages\">\r\n      <ng-container *ngFor=\"let error of error_messages.password\">\r\n        <div class=\"error-message\" *ngIf=\"loginForm1.get('password').hasError(error.type) && (loginForm1.get('password').dirty || loginForm1.get('password').touched)\">\r\n          {{ error.message }}\r\n        </div>\r\n      </ng-container>\r\n    </div>\r\n          \r\n    <br>\r\n    <div class=\"form-group\">\r\n            <ion-label position=\"stacked\">Confirm New Password <span style=\"color: red\">*</span></ion-label>\r\n            <div class=\"form\">\r\n            <input autocomplete=\"off\" name=\"confirmpassword\" class=\"form-control\" formControlName=\"confirmpassword\" [type]=\"showPassword5 ? 'text': 'password'\" />\r\n            <ion-icon slot=\"end\" [name]=\"passwordToggleIcon5\" (click)=\"togglePassword5()\"></ion-icon>\r\n          </div> \r\n          </div>\r\n          <div class=\"error-messages\">\r\n            <ng-container *ngFor=\"let error of error_messages.confirmpassword\">\r\n              <div class=\"error-message\" *ngIf=\"loginForm1.get('confirmpassword').hasError(error.type) && (loginForm1.get('confirmpassword').dirty || loginForm1.get('confirmpassword').touched)\">\r\n                {{ error.message }}\r\n              </div>\r\n            </ng-container>\r\n            <div class=\"error-message\" *ngIf=\"!loginForm1.get('confirmpassword').errors && loginForm1.hasError('passwordNotMatch') && (loginForm1.get('confirmpassword').dirty || loginForm1.get('confirmpassword').touched)\">\r\n              Password and Confirm Password fields should match\r\n            </div>\r\n          </div>\r\n         <br>\r\n         <div class=\"ionbutton\">\r\n          <ion-button class=\"form-control btn btn-primary\" [disabled]=\"!loginForm1.valid\" share=\"round\" (click)=\"presentAlert()\">Confirm</ion-button></div>\r\n<br><br><br><br><br>\r\n</form>\r\n   </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/logout/hello.component.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/logout/hello.component.ts ***!
  \*************************************************/
/*! exports provided: HelloComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelloComponent", function() { return HelloComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let HelloComponent = class HelloComponent {
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], HelloComponent.prototype, "name", void 0);
HelloComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'hello',
        template: `<h1>Hello {{name}}!</h1>`,
        styles: ["h1 { font-family: Lato; }"]
    })
], HelloComponent);



/***/ }),

/***/ "./src/app/pages/logout/logout-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/logout/logout-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: LogoutPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutPageRoutingModule", function() { return LogoutPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _logout_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logout.page */ "./src/app/pages/logout/logout.page.ts");




const routes = [
    {
        path: '',
        component: _logout_page__WEBPACK_IMPORTED_MODULE_3__["LogoutPage"]
    }
];
let LogoutPageRoutingModule = class LogoutPageRoutingModule {
};
LogoutPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LogoutPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/logout/logout.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/logout/logout.module.ts ***!
  \***********************************************/
/*! exports provided: LogoutPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutPageModule", function() { return LogoutPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _logout_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./logout-routing.module */ "./src/app/pages/logout/logout-routing.module.ts");
/* harmony import */ var _logout_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./logout.page */ "./src/app/pages/logout/logout.page.ts");
/* harmony import */ var _hello_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hello.component */ "./src/app/pages/logout/hello.component.ts");








let LogoutPageModule = class LogoutPageModule {
};
LogoutPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _logout_routing_module__WEBPACK_IMPORTED_MODULE_5__["LogoutPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_logout_page__WEBPACK_IMPORTED_MODULE_6__["LogoutPage"], _hello_component__WEBPACK_IMPORTED_MODULE_7__["HelloComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], LogoutPageModule);



/***/ }),

/***/ "./src/app/pages/logout/logout.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/logout/logout.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n.form > input {\n  clear: right;\n}\n.form > ion-icon {\n  margin: -25px 10px;\n  float: right;\n}\n.accordion {\n  background-color: #d9f6ff;\n  color: #444;\n  cursor: pointer;\n  padding: 16px;\n  width: 90%;\n  height: auto;\n  border: none;\n  text-align: center;\n  outline: none;\n  font-size: 1em;\n  transition: 0.2s;\n  margin-bottom: 10px;\n  margin-left: 15px;\n  align-items: center;\n  border-radius: 5px;\n  font: #333f50;\n  font-weight: bold;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n}\n.accordionLabel {\n  display: inline-block;\n  padding: 0 10px;\n}\n.active1, .accordion:hover {\n  background-color: #5798fa;\n}\n.accordion:after {\n  content: \"↲\";\n  color: #070000;\n  font-weight: bold;\n  float: right;\n  margin-left: 20px;\n}\n.active1:after {\n  content: \"↰\";\n}\n.panel {\n  padding: 0 10px;\n  margin: 20px 20px;\n  max-height: 0;\n  height: 1000px;\n  overflow: hidden;\n  transition: max-height 0.2s ease-out;\n  border-radius: 10px;\n  background-color: #FBF4F4;\n}\n.ionbutton {\n  text-align: center;\n}\n.error-message {\n  color: red;\n}\ninput.ng-touched.ng-invalid {\n  border: 1px solid red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9nb3V0L2xvZ291dC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xvZ291dC9DOlxcVXNlcnNcXEwzMDkwM1xcRG9jdW1lbnRzXFxHaXRIdWJcXElvbmljRlBBbmFseXNpcy9zcmNcXGFwcFxccGFnZXNcXGxvZ291dFxcbG9nb3V0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7RUFHRSxZQUFBO0FEQUY7QUNHQTtFQUVFLGtCQUFBO0VBQ0EsWUFBQTtBRERGO0FDSUE7RUFDRSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esd0lBQUE7QURERjtBQ0tBO0VBQ0kscUJBQUE7RUFDQSxlQUFBO0FERko7QUNLQTtFQUNFLHlCQUFBO0FERkY7QUNLQTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QURGRjtBQ0tBO0VBQ0UsWUFBQTtBREZGO0FDS0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FESEY7QUNNQTtFQUNFLGtCQUFBO0FESEY7QUNNQTtFQUNFLFVBQUE7QURIRjtBQ0tBO0VBQ0UscUJBQUE7QURGRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ291dC9sb2dvdXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLmZvcm0gPiBpbnB1dCB7XG4gIGNsZWFyOiByaWdodDtcbn1cblxuLmZvcm0gPiBpb24taWNvbiB7XG4gIG1hcmdpbjogLTI1cHggMTBweDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4uYWNjb3JkaW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q5ZjZmZjtcbiAgY29sb3I6ICM0NDQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogMTZweDtcbiAgd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBib3JkZXI6IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgb3V0bGluZTogbm9uZTtcbiAgZm9udC1zaXplOiAxZW07XG4gIHRyYW5zaXRpb246IDAuMnM7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQ6ICMzMzNmNTA7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgXCJPcGVuIFNhbnNcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuXG4uYWNjb3JkaW9uTGFiZWwge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDAgMTBweDtcbn1cblxuLmFjdGl2ZTEsIC5hY2NvcmRpb246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTc5OGZhO1xufVxuXG4uYWNjb3JkaW9uOmFmdGVyIHtcbiAgY29udGVudDogXCLihrJcIjtcbiAgY29sb3I6ICMwNzAwMDA7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG4uYWN0aXZlMTphZnRlciB7XG4gIGNvbnRlbnQ6IFwi4oawXCI7XG59XG5cbi5wYW5lbCB7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgbWFyZ2luOiAyMHB4IDIwcHg7XG4gIG1heC1oZWlnaHQ6IDA7XG4gIGhlaWdodDogMTAwMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuMnMgZWFzZS1vdXQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGQkY0RjQ7XG59XG5cbi5pb25idXR0b24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5lcnJvci1tZXNzYWdlIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuaW5wdXQubmctdG91Y2hlZC5uZy1pbnZhbGlkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xufSIsIi5mb3JtID4gaW5wdXRcclxue1xyXG4gIC8vIGZsb2F0OiBsZWZ0O1xyXG4gIGNsZWFyOiByaWdodDtcclxufVxyXG5cclxuLmZvcm0gPiBpb24taWNvblxyXG57XHJcbiAgbWFyZ2luOiAtMjVweCAxMHB4O1xyXG4gIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLmFjY29yZGlvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q5ZjZmZjtcclxuICBjb2xvcjogIzQ0NDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcGFkZGluZzogMTZweDtcclxuICB3aWR0aDogOTAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgZm9udC1zaXplOiAxZW07XHJcbiAgdHJhbnNpdGlvbjogMC4ycztcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGZvbnQ6ICMzMzNmNTA7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcclxuICBcclxufVxyXG5cclxuLmFjY29yZGlvbkxhYmVsIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDAgMTBweDtcclxufVxyXG5cclxuLmFjdGl2ZTEsIC5hY2NvcmRpb246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig4NywgMTUyLCAyNTApO1xyXG59XHJcblxyXG4uYWNjb3JkaW9uOmFmdGVyIHtcclxuICBjb250ZW50OiAnXFwyMUIyJztcclxuICBjb2xvcjogcmdiKDcsIDAsIDApO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxufVxyXG5cclxuLmFjdGl2ZTE6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXFwyMUIwXCI7XHJcbn1cclxuXHJcbi5wYW5lbCB7XHJcbiAgcGFkZGluZzogMCAxMHB4O1xyXG4gIG1hcmdpbjogMjBweCAyMHB4O1xyXG4gIC8vIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIG1heC1oZWlnaHQ6IDA7XHJcbiAgaGVpZ2h0OiAxMDAwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuMnMgZWFzZS1vdXQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkJGNEY0O1xyXG59XHJcblxyXG4uaW9uYnV0dG9uIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5lcnJvci1tZXNzYWdlIHtcclxuICBjb2xvcjogcmVkO1xyXG59XHJcbmlucHV0Lm5nLXRvdWNoZWQubmctaW52YWxpZCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/pages/logout/logout.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/logout/logout.page.ts ***!
  \*********************************************/
/*! exports provided: LogoutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutPage", function() { return LogoutPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _model_global_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../model/global-api */ "./src/app/model/global-api.ts");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/global.service */ "./src/app/services/global.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_services_assignments_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/assignments.service */ "./src/app/services/assignments.service.ts");










let LogoutPage = class LogoutPage {
    constructor(router, platform, storage, assignmentsService, nativeHttp, globalService, alertController, formBuilder) {
        this.router = router;
        this.platform = platform;
        this.storage = storage;
        this.assignmentsService = assignmentsService;
        this.nativeHttp = nativeHttp;
        this.globalService = globalService;
        this.alertController = alertController;
        this.formBuilder = formBuilder;
        this.showPassword4 = false;
        this.passwordToggleIcon4 = "eye";
        this.showPassword5 = false;
        this.passwordToggleIcon5 = "eye";
        this.error_messages = {
            'password': [
                { type: 'required', message: 'Password is required.' },
                { type: 'minlength', message: 'Password length is required to be between 6 to 30.' },
                { type: 'maxlength', message: 'Password length is required to be between 6 to 30.' }
            ],
            'confirmpassword': [
                { type: 'required', message: 'Password is required.' },
                { type: 'minlength', message: 'Password length is required to be between 6 to 30.' },
                { type: 'maxlength', message: 'Password length is required to be between 6 to 30.' },
            ],
        };
        this.loginForm1 = this.formBuilder.group({
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].minLength(6),
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(30)
            ])),
            confirmpassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].minLength(6),
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(30)
            ])),
        }, {
            validators: this.password.bind(this)
        });
    }
    ionViewDidEnter() {
        this.platform.backButton.subscribeWithPriority(10, () => {
            console.log('Handler was called!');
            this.router.navigateByUrl('tabs/main');
        });
        console.log(this.storage);
    }
    password(formGroup) {
        const { value: password } = formGroup.get('password');
        const { value: confirmPassword } = formGroup.get('confirmpassword');
        return password === confirmPassword ? null : { passwordNotMatch: true };
    }
    ionViewDidLoad() {
        var acc = document.getElementsByClassName("accordion");
        var i;
        for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function () {
                this.classList.toggle("active");
                var panel = this.nextElementSibling;
                if (panel.style.maxHeight) {
                    panel.style.maxHeight = null;
                }
                else {
                    panel.style.maxHeight = panel.scrollHeight + "px";
                }
            });
        }
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.token = this.globalService.getselectedtoken();
        this.studentid = this.globalService.getselectedStudentId();
    }
    ionViewWillLeave() {
    }
    Logout() {
        console.log(this.studentid);
        console.log(this.token);
        this.nativeHttp.setDataSerializer('json');
        this.nativeHttp.post(_model_global_api__WEBPACK_IMPORTED_MODULE_4__["apiurl"].apiUrl + 'student/logout', {
            "Authentication_Token": this.token,
            "User_Id": this.studentid
        }, {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        })
            .then((response) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const alert = yield this.alertController.create({
                    header: 'Logout',
                    // subHeader: 'Sub Alert',
                    message: 'Are you sure you want to logout?',
                    buttons: [{
                            text: 'Cancel',
                            role: 'cancel',
                            handler: () => {
                                console.log('You clicked me');
                            }
                        },
                        {
                            text: 'Okay',
                            cssClass: 'secondary',
                            handler: () => {
                                //  console.log('Second Handler');
                                this.storage.remove('mysession');
                                this.storage.remove('assignmentdetails');
                                this.storage.remove('authlogin');
                                this.storage.remove('joinsession');
                                this.storage.remove('chatdetails');
                                this.storage.remove('User_Id');
                                this.storage.remove('Authentication_Token');
                                this.router.navigateByUrl('/login');
                            }
                        }]
                });
                yield alert.present();
            }
            catch (e) {
                console.error(e);
            }
        }))
            .catch(response => {
            // prints 403
            console.log(response.status);
            // prints Permission denied
            console.log(response.error);
            this.assignmentsService.presentError();
        });
    }
    togglePassword4() {
        this.showPassword4 = !this.showPassword4;
        if (this.passwordToggleIcon4 == "eye") {
            this.passwordToggleIcon4 = 'eye-off';
        }
        else {
            this.passwordToggleIcon4 = 'eye';
        }
    }
    togglePassword5() {
        this.showPassword5 = !this.showPassword5;
        if (this.passwordToggleIcon5 == "eye") {
            this.passwordToggleIcon5 = 'eye-off';
        }
        else {
            this.passwordToggleIcon5 = 'eye';
        }
    }
    presentAlert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Reset Password',
                // subHeader: 'Sub Alert',
                message: 'Reset Password Successful',
                buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        handler: () => {
                            console.log('You clicked me');
                        }
                    },
                    {
                        text: 'Okay',
                        cssClass: 'secondary',
                        handler: () => {
                            console.log('Second Handler');
                            this.assignmentsService.presentpasswordsuccess();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
LogoutPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] },
    { type: src_app_services_assignments_service__WEBPACK_IMPORTED_MODULE_9__["AssignmentsService"] },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__["HTTP"] },
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"] }
];
LogoutPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-logout',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./logout.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/logout/logout.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./logout.page.scss */ "./src/app/pages/logout/logout.page.scss")).default]
    })
], LogoutPage);



/***/ })

}]);
//# sourceMappingURL=pages-logout-logout-module-es2015.js.map