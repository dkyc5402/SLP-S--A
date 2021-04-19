function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-signup-signup-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/signup.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/signup.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesSignupSignupPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "  <ion-header>\r\n    <ion-toolbar class=\"new-background-color\">\r\n      <ion-title>Student Learning Platform</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  <link href=\"https://code.ionicframework.com/nightly/css/ionic.css\" rel=\"stylesheet\"> \r\n\r\n  <ion-content padding='true'>\r\n    <div class=\"container\">\r\n\r\n      <div style=\"margin: 30px\">\r\n        <p class=\"p\">Sign Up An Account (Student)</p>\r\n    <br>\r\n        <form class=\"container\" [formGroup]=\"loginForm\">\r\n          <div class=\"form-group\">\r\n            <ion-label position=\"stacked\">Username <span style=\"color: red\">*</span></ion-label>\r\n            <input class=\"form-control userInput\" formControlName=\"username\" type=\"text\" autocomplete=\"off\" name=\"username\" placeholder=\"Enter username\" [(ngModel)]=\"postData.Username\"/>\r\n          </div>\r\n          <div class=\"error-messages\">\r\n            <ng-container *ngFor=\"let error of error_messages.username\">\r\n              <div class=\"error-message\" *ngIf=\"loginForm.get('username').hasError(error.type) && (loginForm.get('username').dirty || loginForm.get('username').touched)\">\r\n                {{ error.message }}\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n    <br>\r\n          <div class=\"form-group\">\r\n            <ion-label position=\"stacked\">Password <span style=\"color: red\">*</span></ion-label>\r\n            <div class=\"form\">\r\n            <input autocomplete=\"off\" name=\"password\" class=\"form-control userInput\" formControlName=\"password\" placeholder=\"Enter password\" [type]=\"showPassword ? 'text': 'password'\" [(ngModel)]=\"postData.Password\"/>\r\n            <ion-icon slot=\"end\" [name]=\"passwordToggleIcon\" (click)=\"togglePassword()\"></ion-icon>\r\n            </div >\r\n          </div>\r\n          <div class=\"error-messages\">\r\n            <ng-container *ngFor=\"let error of error_messages.password\">\r\n              <div class=\"error-message\" *ngIf=\"loginForm.get('password').hasError(error.type) && (loginForm.get('password').dirty || loginForm.get('password').touched)\">\r\n                {{ error.message }}\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n          \r\n    <br>\r\n          <div class=\"form-group\">\r\n            <ion-label position=\"stacked\">Confirm Password <span style=\"color: red\">*</span></ion-label>\r\n            <div class=\"form\">\r\n            <input autocomplete=\"off\" name=\"confirmpassword\" class=\"form-control userInput\" formControlName=\"confirmpassword\" placeholder=\"Enter password to confirm\" [type]=\"showPassword1 ? 'text': 'password'\" />\r\n            <ion-icon slot=\"end\" [name]=\"passwordToggleIcon1\" (click)=\"togglePassword1()\"></ion-icon>\r\n          </div>\r\n          </div>\r\n          <div class=\"error-messages\">\r\n            <ng-container *ngFor=\"let error of error_messages.confirmpassword\">\r\n              <div class=\"error-message\" *ngIf=\"loginForm.get('confirmpassword').hasError(error.type) && (loginForm.get('confirmpassword').dirty || loginForm.get('confirmpassword').touched)\">\r\n                {{ error.message }}\r\n              </div>\r\n            </ng-container>\r\n            <div class=\"error-message\" *ngIf=\"!loginForm.get('confirmpassword').errors && loginForm.hasError('passwordNotMatch') && (loginForm.get('confirmpassword').dirty || loginForm.get('confirmpassword').touched)\">\r\n              Password and Confirm Password fields should match\r\n            </div>\r\n          </div>\r\n<br>\r\n            <div class=\"form-group\">\r\n              <ion-label position=\"stacked\">Email <span style=\"color: red\">*</span></ion-label>\r\n              <input autocomplete=\"off\" name=\"email\" class=\"form-control userInput\" formControlName=\"email\" type=\"email\" placeholder=\"Eg.sally@gmail.com\" [(ngModel)]=\"postData.Email\"/>\r\n            </div>\r\n            <div class=\"error-messages\">\r\n              <ng-container *ngFor=\"let error of error_messages.email\">\r\n                <div class=\"error-message\" *ngIf=\"loginForm.get('email').hasError(error.type) && \r\n          (loginForm.get('email').dirty || loginForm.get('email').touched)\">\r\n                  {{ error.message }}\r\n                </div>\r\n              </ng-container>\r\n            </div>\r\n<br>\r\n            <div class=\"form-group\">\r\n              <ion-label position=\"stacked\">School <span style=\"color: red\">*</span></ion-label>\r\n              <ion-select autocomplete=\"off\" name=\"school\" formControlName=\"school\" class=\"form-control list\" placeholder=\"Select school\" [(ngModel)]=\"postData.School_Id\">\r\n                <ion-select-option *ngFor=\"let school of textdisplayschool\" value=\"{{school.school_Id}}\">{{school.school_DisplayName}}</ion-select-option>\r\n              </ion-select>\r\n              <!-- <ion-select name=\"school\" class=\"form-control list\" formControlName=\"school\" type=\"text\" placeholder=\"Select school\" [(ngModel)]=\"postData.School_Id\">\r\n                <ion-select-option value=\"S001\" placeholder = 'S001'>Admiralty PS</ion-select-option>\r\n                <ion-select-option value=\"S002\">Ahmad Ibrahim PS</ion-select-option>\r\n                <ion-select-option value=\"S003\">Ai Tong School</ion-select-option>\r\n                <ion-select-option value=\"S004\">Alexandra PS</ion-select-option>\r\n                <ion-select-option value=\"S005\">Anchor Green PS</ion-select-option>\r\n                <ion-select-option value=\"S006\">Anderson PS</ion-select-option>\r\n                <ion-select-option value=\"S007\">Ang Mo Kio PS</ion-select-option>\r\n                <ion-select-option value=\"S008\">Anglo-Chinese School</ion-select-option>\r\n                <ion-select-option value=\"S010\">Angsana PS</ion-select-option>\r\n                <ion-select-option value=\"S011\">Beacon PS</ion-select-option>\r\n                <ion-select-option value=\"S012\">Bedok Green PS</ion-select-option>\r\n              </ion-select> -->\r\n            </div>\r\n            <div class=\"error-messages\">\r\n              <ng-container *ngFor=\"let error of error_messages.school\">\r\n                <div class=\"error-message\" *ngIf=\"loginForm.get('school').hasError(error.type) && \r\n          (loginForm.get('school').dirty || loginForm.get('school').touched)\">\r\n                  {{ error.message }}\r\n                </div>\r\n              </ng-container>\r\n            </div>\r\n\r\n\r\n\r\n<br>\r\n            <div class=\"form-group\">\r\n              <ion-label position=\"stacked\">Level <span style=\"color: red\">*</span></ion-label>\r\n              <ion-select autocomplete=\"off\" name=\"level\" formControlName=\"level\" class=\"form-control list\" [(ngModel)]=\"postData.Level_Id\" placeholder=\"Select level\">\r\n                <ion-select-option *ngFor=\"let level of textdisplaylevel\" value=\"{{level.level_Id}}\">{{level.level_Name}} {{level.level_Num}} ({{level.level_Id}})</ion-select-option>\r\n              </ion-select>\r\n            <!-- <ion-select autocomplete=\"off\" name=\"level\" class=\"form-control list\" formControlName=\"level\" type=\"text\" placeholder=\"Select level\" [(ngModel)]=\"postData.Level_Id\">\r\n              <ion-select-option value=\"p1\">P1</ion-select-option>\r\n              <ion-select-option value=\"p2\">P2</ion-select-option>\r\n              <ion-select-option value=\"p3\">P3</ion-select-option>\r\n              <ion-select-option value=\"p4\">P4</ion-select-option>\r\n              <ion-select-option value=\"p5\">P5</ion-select-option>\r\n              <ion-select-option value=\"p6\">P6</ion-select-option>\r\n            </ion-select> -->\r\n            </div>\r\n            <div class=\"error-messages\">\r\n              <ng-container *ngFor=\"let error of error_messages.level\">\r\n                <div class=\"error-message\" *ngIf=\"loginForm.get('level').hasError(error.type) && \r\n          (loginForm.get('level').dirty || loginForm.get('level').touched)\">\r\n                  {{ error.message }}\r\n                </div>\r\n              </ng-container>\r\n            </div>\r\n<br>\r\n            <div class=\"form-group\">\r\n              <ion-label position=\"stacked\">Date of Birth <span style=\"color: red\">*</span></ion-label>\r\n              <ion-input [(ngModel)]=\"postData.DateOfBirth\" (click)=\"SelectDate()\" placeholder=\"Enter date of birth\" autocomplete=\"off\" name=\"dob\" class=\"form-control date\" formControlName=\"dob\">&nbsp;&nbsp;&nbsp;</ion-input>         \r\n\r\n            </div>\r\n            <div class=\"error-messages\">\r\n              <ng-container *ngFor=\"let error of error_messages.dob\">\r\n                <div class=\"error-message\" *ngIf=\"loginForm.get('dob').hasError(error.type) && \r\n          (loginForm.get('dob').dirty || loginForm.get('dob').touched)\">\r\n                  {{ error.message }}\r\n                </div>\r\n              </ng-container>\r\n            </div> \r\n\r\n<br>\r\n            <div class=\"form-group\" id=\"coupon\">\r\n              <ion-label position=\"stacked\">Coupon Code <span style=\"color: red\">*</span></ion-label>\r\n              <input autocomplete=\"off\" name=\"coupon\" class=\"form-control coupon\" formControlName=\"coupon\" type=\"text\" placeholder=\"Enter coupon code\" [(ngModel)]=\"postData.Voucher_Code\"/>\r\n            </div>\r\n            <div class=\"error-messages\">\r\n              <ng-container *ngFor=\"let error of error_messages.coupon\">\r\n                <div class=\"error-message\" *ngIf=\"loginForm.get('coupon').hasError(error.type) && \r\n          (loginForm.get('coupon').dirty || loginForm.get('coupon').touched)\">\r\n                  {{ error.message }}\r\n                </div>\r\n              </ng-container>\r\n            </div>\r\n<br>\r\n            <div class=\"center\">\r\n                <p (click)=\"login()\">Already have an account? </p>\r\n              <br>\r\n            </div>\r\n          <br>\r\n          <ion-button class=\"form-control btn btn-primary\" share=\"round\" style=\"--background:#20a7c2\" (click)=\"Signup()\">Submit</ion-button>\r\n          <!-- <ion-button class=\"form-control btn btn-primary\" [disabled]=\"!loginForm.valid\" share=\"round\" style=\"--background:#20a7c2\" (click)=\"Signup()\">Submit</ion-button> -->\r\n\r\n        </form>\r\n      </div>\r\n    </div>\r\n\r\n\r\n  </ion-content>\r\n  ";
    /***/
  },

  /***/
  "./src/app/pages/signup/hello.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/signup/hello.component.ts ***!
    \*************************************************/

  /*! exports provided: HelloComponent */

  /***/
  function srcAppPagesSignupHelloComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HelloComponent", function () {
      return HelloComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HelloComponent = function HelloComponent() {
      _classCallCheck(this, HelloComponent);
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], HelloComponent.prototype, "name", void 0);
    HelloComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'hello',
      template: "<h1>Hello {{name}}!</h1>",
      styles: ["h1 { font-family: Lato; }"]
    })], HelloComponent);
    /***/
  },

  /***/
  "./src/app/pages/signup/signup-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/signup/signup-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: SignupPageRoutingModule */

  /***/
  function srcAppPagesSignupSignupRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupPageRoutingModule", function () {
      return SignupPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _signup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./signup.page */
    "./src/app/pages/signup/signup.page.ts");

    var routes = [{
      path: '',
      component: _signup_page__WEBPACK_IMPORTED_MODULE_3__["SignupPage"]
    }];

    var SignupPageRoutingModule = function SignupPageRoutingModule() {
      _classCallCheck(this, SignupPageRoutingModule);
    };

    SignupPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SignupPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/signup/signup.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/signup/signup.module.ts ***!
    \***********************************************/

  /*! exports provided: SignupPageModule */

  /***/
  function srcAppPagesSignupSignupModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupPageModule", function () {
      return SignupPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var _signup_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./signup-routing.module */
    "./src/app/pages/signup/signup-routing.module.ts");
    /* harmony import */


    var _signup_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./signup.page */
    "./src/app/pages/signup/signup.page.ts");
    /* harmony import */


    var _hello_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./hello.component */
    "./src/app/pages/signup/hello.component.ts");

    var SignupPageModule = function SignupPageModule() {
      _classCallCheck(this, SignupPageModule);
    };

    SignupPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _signup_routing_module__WEBPACK_IMPORTED_MODULE_6__["SignupPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["IonicStorageModule"].forRoot()],
      declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_7__["SignupPage"], _hello_component__WEBPACK_IMPORTED_MODULE_8__["HelloComponent"]]
    })], SignupPageModule);
    /***/
  },

  /***/
  "./src/app/pages/signup/signup.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/pages/signup/signup.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesSignupSignupPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".center {\n  text-align: center;\n}\n\nion-title {\n  text-align: center;\n}\n\n.p {\n  color: #1c91a8;\n  font-weight: bold;\n  font-size: 20px;\n}\n\n.ionbutton {\n  --vertical-align: middle;\n  --padding-start: 100px;\n  --padding-end: 100px;\n  text-align: center;\n  font-family: \"Roboto\";\n  display: flex;\n  align-items: center;\n}\n\n.error-message {\n  color: red;\n}\n\ninput.ng-touched.ng-invalid {\n  border: 1px solid red;\n}\n\nion-button {\n  --vertical-align: middle;\n  --padding-start: 100px;\n  --padding-end: 100px;\n  text-align: center;\n  font-family: \"Roboto\";\n  display: flex;\n  align-items: center;\n  color: white;\n}\n\n.form > input {\n  clear: right;\n}\n\n.form > ion-icon {\n  margin: -38px 25px;\n  float: right;\n}\n\n.tooltip {\n  position: relative;\n  display: inline-block;\n  margin-top: -100px;\n}\n\n.tooltip .tooltiptext {\n  visibility: hidden;\n  width: 500px;\n  background-color: black;\n  color: #fff;\n  text-align: left;\n  border-radius: 6px;\n  padding: 5px 0;\n  position: absolute;\n  z-index: 1;\n}\n\n.tooltip .tooltiptext .tooltip {\n  position: relative;\n  display: inline-block;\n  margin-top: -100px;\n}\n\n.tooltip .tooltiptext .tooltip .tooltiptext {\n  visibility: hidden;\n  width: 500px;\n  background-color: black;\n  color: #fff;\n  text-align: left;\n  border-radius: 6px;\n  padding: 5px 0;\n  position: absolute;\n  z-index: 1;\n}\n\n.tooltip .tooltiptext .tooltip:hover .tooltiptext {\n  visibility: visible;\n}\n\n.tooltip:hover .tooltiptext {\n  visibility: visible;\n}\n\n.form-control.userInput {\n  width: 100%;\n  border: 1px solid lightgrey;\n  border-radius: 10px;\n  margin-bottom: 10px;\n  padding: 20px 0 20px 17px;\n}\n\n.form-control.date {\n  width: 100%;\n  border: 1px solid lightgrey;\n  border-radius: 10px;\n  margin-bottom: 10px;\n  padding: 25px 0 25px 30px;\n}\n\n.form-control.list {\n  width: 100%;\n  border: 1px solid lightgrey;\n  border-radius: 10px;\n  margin-bottom: 10px;\n  padding: 10px 23px 10px 17px;\n}\n\n.form-control.coupon {\n  width: 100%;\n  border: 1px solid lightgrey;\n  border-radius: 10px;\n  padding: 20px 0 20px 17px;\n}\n\n::-moz-placeholder {\n  margin-left: 5px;\n}\n\n::-ms-input-placeholder {\n  margin-left: 5px;\n}\n\n::placeholder {\n  margin-left: 5px;\n}\n\n#coupon {\n  border: 2px dashed darkblue;\n  padding: 15px;\n  margin-bottom: 10px;\n}\n\n.new-background-color {\n  --background: #1c91a8;\n}\n\nion-title {\n  --color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2lnbnVwL0M6XFxVc2Vyc1xcTDMwOTAzXFxEb2N1bWVudHNcXEdpdEh1YlxcSW9uaWNGUEFuYWx5c2lzL3NyY1xcYXBwXFxwYWdlc1xcc2lnbnVwXFxzaWdudXAucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9zaWdudXAvc2lnbnVwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBRUksd0JBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUVBLGFBQUE7RUFDQSxtQkFBQTtBQ0RKOztBRE1FO0VBQ0UsVUFBQTtBQ0hKOztBREtFO0VBQ0UscUJBQUE7QUNGSjs7QURLRTtFQUVFLHdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFFQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDSko7O0FET0U7RUFHQSxZQUFBO0FDTkY7O0FEU0E7RUFFRSxrQkFBQTtFQUNBLFlBQUE7QUNQRjs7QURVQTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQ1BGOztBRFVBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQXNCQSxjQUFBO0VBRUEsa0JBQUE7RUFDQSxVQUFBO0FDN0JGOztBRElxQjtFQUNqQixrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUNGSjs7QURLRTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBRUEsa0JBQUE7RUFDQSxVQUFBO0FDSko7O0FET0U7RUFDRSxtQkFBQTtBQ0xKOztBRGFBO0VBQ0UsbUJBQUE7QUNWRjs7QURhQTtFQUNFLFdBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQ1ZGOztBRFlBO0VBQ0UsV0FBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FDVEY7O0FEWUE7RUFDRSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7QUNURjs7QURZQTtFQUNFLFdBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUNURjs7QURZQTtFQUNFLGdCQUFBO0FDVEY7O0FEUUE7RUFDRSxnQkFBQTtBQ1RGOztBRFFBO0VBQ0UsZ0JBQUE7QUNURjs7QURZQTtFQUNFLDJCQUFBO0VBRUEsYUFBQTtFQUNBLG1CQUFBO0FDVkY7O0FEYUE7RUFDRSxxQkFBQTtBQ1ZGOztBRGFBO0VBQ0UsZ0JBQUE7QUNWRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NpZ251cC9zaWdudXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNlbnRlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmlvbi10aXRsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5wIHtcclxuICAgIGNvbG9yOiAjMWM5MWE4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbi5pb25idXR0b24ge1xyXG4gICAgLy8gLS13aWR0aDogNTAwcHg7XHJcbiAgICAtLXZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDEwMHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMTAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XHJcbiAgICAvLyBwYWRkaW5nOiAxMDAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgIFxyXG4gICAgXHJcbiAgfVxyXG5cclxuICAuZXJyb3ItbWVzc2FnZSB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gIH1cclxuICBpbnB1dC5uZy10b3VjaGVkLm5nLWludmFsaWQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG4gIH1cclxuXHJcbiAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgIC8vIC0td2lkdGg6IDUwMHB4O1xyXG4gICAgLS12ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxMDBweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDEwMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xyXG4gICAgLy8gcGFkZGluZzogMTAwMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuXHJcbiAgLmZvcm0gPiBpbnB1dFxyXG57XHJcbiAgLy8gZmxvYXQ6IGxlZnQ7XHJcbiAgY2xlYXI6IHJpZ2h0O1xyXG59XHJcblxyXG4uZm9ybSA+IGlvbi1pY29uXHJcbntcclxuICBtYXJnaW46IC0zOHB4IDI1cHg7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4udG9vbHRpcCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW4tdG9wOiAtMTAwcHg7XHJcbn1cclxuXHJcbi50b29sdGlwIC50b29sdGlwdGV4dCB7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIHdpZHRoOiA1MDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICBjb2xvcjogI2ZmZjtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDsudG9vbHRpcCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC50b29sdGlwIC50b29sdGlwdGV4dCB7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICB3aWR0aDogNTAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIHBhZGRpbmc6IDVweCAwO1xyXG4gIFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMTtcclxuICB9XHJcbiAgXHJcbiAgLnRvb2x0aXA6aG92ZXIgLnRvb2x0aXB0ZXh0IHtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgfVxyXG4gIHBhZGRpbmc6IDVweCAwO1xyXG5cclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxuLnRvb2x0aXA6aG92ZXIgLnRvb2x0aXB0ZXh0IHtcclxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sLnVzZXJJbnB1dCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmV5O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBwYWRkaW5nOiAyMHB4IDAgMjBweCAxN3B4O1xyXG59XHJcbi5mb3JtLWNvbnRyb2wuZGF0ZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmV5O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBwYWRkaW5nOiAyNXB4IDAgMjVweCAzMHB4O1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sLmxpc3Qge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgcGFkZGluZzogMTBweCAyM3B4IDEwcHggMTdweDtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbC5jb3Vwb24ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDIwcHggMCAyMHB4IDE3cHg7XHJcbn1cclxuXHJcbjo6cGxhY2Vob2xkZXJ7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG4gIFxyXG4jY291cG9uIHtcclxuICBib3JkZXI6IDJweCBkYXNoZWQgZGFya2JsdWU7XHJcbiAgLy8gYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLm5ldy1iYWNrZ3JvdW5kLWNvbG9yIHtcclxuICAtLWJhY2tncm91bmQ6ICMxYzkxYTg7XHJcbn1cclxuXHJcbmlvbi10aXRsZXtcclxuICAtLWNvbG9yOiAjZmZmZmZmO1xyXG59IiwiLmNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucCB7XG4gIGNvbG9yOiAjMWM5MWE4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uaW9uYnV0dG9uIHtcbiAgLS12ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAtLXBhZGRpbmctc3RhcnQ6IDEwMHB4O1xuICAtLXBhZGRpbmctZW5kOiAxMDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmVycm9yLW1lc3NhZ2Uge1xuICBjb2xvcjogcmVkO1xufVxuXG5pbnB1dC5uZy10b3VjaGVkLm5nLWludmFsaWQge1xuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG59XG5cbmlvbi1idXR0b24ge1xuICAtLXZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIC0tcGFkZGluZy1zdGFydDogMTAwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDEwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5mb3JtID4gaW5wdXQge1xuICBjbGVhcjogcmlnaHQ7XG59XG5cbi5mb3JtID4gaW9uLWljb24ge1xuICBtYXJnaW46IC0zOHB4IDI1cHg7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLnRvb2x0aXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXRvcDogLTEwMHB4O1xufVxuXG4udG9vbHRpcCAudG9vbHRpcHRleHQge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIHdpZHRoOiA1MDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIHBhZGRpbmc6IDVweCAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG59XG4udG9vbHRpcCAudG9vbHRpcHRleHQgLnRvb2x0aXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXRvcDogLTEwMHB4O1xufVxuLnRvb2x0aXAgLnRvb2x0aXB0ZXh0IC50b29sdGlwIC50b29sdGlwdGV4dCB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgd2lkdGg6IDUwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgcGFkZGluZzogNXB4IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTtcbn1cbi50b29sdGlwIC50b29sdGlwdGV4dCAudG9vbHRpcDpob3ZlciAudG9vbHRpcHRleHQge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuXG4udG9vbHRpcDpob3ZlciAudG9vbHRpcHRleHQge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuXG4uZm9ybS1jb250cm9sLnVzZXJJbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyZXk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIHBhZGRpbmc6IDIwcHggMCAyMHB4IDE3cHg7XG59XG5cbi5mb3JtLWNvbnRyb2wuZGF0ZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyZXk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIHBhZGRpbmc6IDI1cHggMCAyNXB4IDMwcHg7XG59XG5cbi5mb3JtLWNvbnRyb2wubGlzdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyZXk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIHBhZGRpbmc6IDEwcHggMjNweCAxMHB4IDE3cHg7XG59XG5cbi5mb3JtLWNvbnRyb2wuY291cG9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogMjBweCAwIDIwcHggMTdweDtcbn1cblxuOjpwbGFjZWhvbGRlciB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbiNjb3Vwb24ge1xuICBib3JkZXI6IDJweCBkYXNoZWQgZGFya2JsdWU7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5uZXctYmFja2dyb3VuZC1jb2xvciB7XG4gIC0tYmFja2dyb3VuZDogIzFjOTFhODtcbn1cblxuaW9uLXRpdGxlIHtcbiAgLS1jb2xvcjogI2ZmZmZmZjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/signup/signup.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/signup/signup.page.ts ***!
    \*********************************************/

  /*! exports provided: SignupPage */

  /***/
  function srcAppPagesSignupSignupPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupPage", function () {
      return SignupPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/http/ngx */
    "./node_modules/@ionic-native/http/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _model_global_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../model/global-api */
    "./src/app/model/global-api.ts");
    /* harmony import */


    var _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/date-picker/ngx */
    "./node_modules/@ionic-native/date-picker/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var SignupPage = /*#__PURE__*/function () {
      function SignupPage(formBuilder, router, alertController, storage, nativeHttp, platform, datePicker, datePipe) {
        _classCallCheck(this, SignupPage);

        this.formBuilder = formBuilder;
        this.router = router;
        this.alertController = alertController;
        this.storage = storage;
        this.nativeHttp = nativeHttp;
        this.platform = platform;
        this.datePicker = datePicker;
        this.datePipe = datePipe;
        this.showPassword = false;
        this.passwordToggleIcon = "eye";
        this.showPassword1 = false;
        this.passwordToggleIcon1 = "eye";
        this.error_messages = {
          'username': [{
            type: 'required',
            message: 'Username is required.'
          }],
          'dob': [{
            type: 'required',
            message: 'Date of Birth is required.'
          }],
          'level': [{
            type: 'required',
            message: 'Level is required.'
          }],
          'school': [{
            type: 'required',
            message: 'School is required.'
          }],
          'coupon': [{
            type: 'required',
            message: 'Coupon Code is required.'
          }],
          'email': [{
            type: 'required',
            message: 'Email is required.'
          }, {
            type: 'email',
            message: 'Please enter a valid email address.'
          }],
          'password': [{
            type: 'required',
            message: 'Password is required.'
          }, {
            type: 'minlength',
            message: 'Password must be at least 5 characters long.'
          }, {
            type: 'maxlength',
            message: 'Password cannot be more than 25 characters.'
          }],
          'confirmpassword': [{
            type: 'required',
            message: 'Password is required.'
          }, {
            type: 'minlength',
            message: 'Password must be at least 5 characters long.'
          }, {
            type: 'maxlength',
            message: 'Password cannot be more than 25 characters.'
          }]
        };
        this.postData = {
          Username: '',
          Password: '',
          Email: '',
          School_Id: '',
          Level_Id: '',
          DateOfBirth: '',
          Voucher_Code: ''
        };
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
          username: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])),
          dob: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])),
          level: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])),
          school: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])),
          email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email //  Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
          ])),
          password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(25)])),
          confirmpassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(25)])),
          coupon: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]))
        }, {
          validators: this.password.bind(this)
        });
      }

      _createClass(SignupPage, [{
        key: "SelectDate",
        value: function SelectDate() {
          var _this = this;

          var options = {
            date: new Date(),
            mode: 'date',
            androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_LIGHT
          };
          this.datePicker.show(options).then(function (date) {
            _this.postData.DateOfBirth = _this.datePipe.transform(date, "yyyyMMdd"); //Returns date string in desired format

            console.log(_this.postData.DateOfBirth);

            var year = _this.postData.DateOfBirth.slice(0, 4);

            console.log(year);

            var month = _this.postData.DateOfBirth.slice(4, 6);

            console.log(month);

            var day = _this.postData.DateOfBirth.slice(6);

            console.log(day); //Replace month values from number to text 
            // var chars = { '01': 'Jan', '02': 'Feb', '03': 'Mar', '04': 'Apr', '05': 'May', '06': 'Jun',
            //              '07': 'Jul', '08': 'Aug', '09': 'Sep', '10': 'Oct', '11': 'Nov', '12': 'Dec' };
            // var monthName = month.replace(/01|02|03|04|05|06|07|08|09|10|11|12/g, m => chars[m]);
            // console.log(monthName);
            // this.displayDate = day + ' ' + monthName + ' ' + year;
            // console.log(this.displayDate)

            _this.postData.DateOfBirth = day + '/' + month + '/' + year;
            console.log(_this.postData.DateOfBirth);
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.getList();
        }
      }, {
        key: "getList",
        value: function getList() {
          var _this2 = this;

          this.storage.get('alllevels').then(function (res) {
            _this2.textdisplaylevel = res;
          });
          this.storage.get('allschools').then(function (res) {
            _this2.textdisplayschool = res;
          });
        }
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          var _this3 = this;

          this.platform.backButton.subscribeWithPriority(10, function () {
            console.log('Handler was called!');

            _this3.router.navigateByUrl('/login');
          });
        }
      }, {
        key: "togglePassword",
        value: function togglePassword() {
          this.showPassword = !this.showPassword;

          if (this.passwordToggleIcon == "eye") {
            this.passwordToggleIcon = 'eye-off';
          } else {
            this.passwordToggleIcon = 'eye';
          }
        }
      }, {
        key: "togglePassword1",
        value: function togglePassword1() {
          this.showPassword1 = !this.showPassword1;

          if (this.passwordToggleIcon1 == "eye") {
            this.passwordToggleIcon1 = 'eye-off';
          } else {
            this.passwordToggleIcon1 = 'eye';
          }
        }
      }, {
        key: "password",
        value: function password(formGroup) {
          var _formGroup$get = formGroup.get('password'),
              password = _formGroup$get.value;

          var _formGroup$get2 = formGroup.get('confirmpassword'),
              confirmPassword = _formGroup$get2.value;

          return password === confirmPassword ? null : {
            passwordNotMatch: true
          };
        }
      }, {
        key: "login",
        value: function login() {
          this.router.navigateByUrl('');
        } //   async presentAlert() {
        // const alert = await this.alertController.create({
        //   header: 'Sign Up',
        //   // subHeader: 'Sub Alert',
        //   message: 'Sign Up Sucessful',
        //   buttons: [{
        //     text: 'Cancel',
        //     role: 'cancel',
        //     handler: () => {
        //       console.log('You clicked me');
        //       this.router.navigateByUrl('/signup')
        //     }
        //   },
        // {
        //   text: 'Okay',
        //   cssClass: 'secondary',
        //   handler: () => {
        //     //  console.log('Second Handler');
        //     this.router.navigateByUrl('/signup') }
        // }
        // ]
        // });
        // await alert.present();
        //   }

      }, {
        key: "Signup",
        value: function Signup() {
          this.AuthSignup();
        }
      }, {
        key: "AuthSignup",
        value: function AuthSignup() {
          var _this4 = this;

          console.log(this.postData.Username);
          console.log(this.postData.Password);
          console.log(this.postData.Email);
          console.log(this.postData.School_Id);
          console.log(this.postData.Level_Id);
          console.log(this.postData.DateOfBirth);
          console.log(this.postData.Voucher_Code);
          this.nativeHttp.setDataSerializer('json');
          this.nativeHttp.post(_model_global_api__WEBPACK_IMPORTED_MODULE_7__["apiurl"].apiUrl + 'student/register', {
            "Username": this.postData.Username,
            "Password": this.postData.Password,
            "Email": this.postData.Email,
            "School_Id": this.postData.School_Id,
            "Level_Id": this.postData.Level_Id,
            "DateOfBirth": this.postData.DateOfBirth,
            "Voucher_Code": this.postData.Voucher_Code
          }, {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }).then(function (response) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this5 = this;

              var alert, _alert, _alert2;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.prev = 0;
                      response.data = JSON.parse(response.data);
                      console.log(response.data);

                      if (!(response.data == "Invalid Voucher")) {
                        _context.next = 11;
                        break;
                      }

                      _context.next = 6;
                      return this.alertController.create({
                        header: 'Sign Up',
                        // subHeader: 'Sub Alert',
                        message: 'Please give Valid Voucher',
                        buttons: [{
                          text: 'Cancel',
                          role: 'cancel',
                          handler: function handler() {
                            console.log('You clicked me');

                            _this5.router.navigateByUrl('/signup');
                          }
                        }, {
                          text: 'Okay',
                          cssClass: 'secondary',
                          handler: function handler() {
                            //  console.log('Second Handler');
                            _this5.router.navigateByUrl('/signup');
                          }
                        }]
                      });

                    case 6:
                      alert = _context.sent;
                      _context.next = 9;
                      return alert.present();

                    case 9:
                      _context.next = 25;
                      break;

                    case 11:
                      if (!(response.data == "Username Exists")) {
                        _context.next = 19;
                        break;
                      }

                      _context.next = 14;
                      return this.alertController.create({
                        header: 'Sign Up',
                        // subHeader: 'Sub Alert',
                        message: 'Username is taken',
                        buttons: [{
                          text: 'Cancel',
                          role: 'cancel',
                          handler: function handler() {
                            console.log('You clicked me');

                            _this5.router.navigateByUrl('/signup');
                          }
                        }, {
                          text: 'Okay',
                          cssClass: 'secondary',
                          handler: function handler() {
                            //  console.log('Second Handler');
                            _this5.router.navigateByUrl('/signup');
                          }
                        }]
                      });

                    case 14:
                      _alert = _context.sent;
                      _context.next = 17;
                      return _alert.present();

                    case 17:
                      _context.next = 25;
                      break;

                    case 19:
                      this.storage.set('authlogin', response.data);
                      _context.next = 22;
                      return this.alertController.create({
                        header: 'Sign Up',
                        // subHeader: 'Sub Alert',
                        message: 'Registration Successful!',
                        buttons: [{
                          text: 'Okay',
                          role: 'cancel',
                          handler: function handler() {
                            console.log('You clicked me. Account registered!');

                            _this5.router.navigateByUrl('/login');
                          }
                        }]
                      });

                    case 22:
                      _alert2 = _context.sent;
                      _context.next = 25;
                      return _alert2.present();

                    case 25:
                      _context.next = 30;
                      break;

                    case 27:
                      _context.prev = 27;
                      _context.t0 = _context["catch"](0);
                      console.error(_context.t0);

                    case 30:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this, [[0, 27]]);
            }));
          })["catch"](function (response) {
            // prints 403
            console.log(response.status); // prints Permission denied

            console.log(response.error);
          });
        }
      }]);

      return SignupPage;
    }();

    SignupPage.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]
      }, {
        type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_6__["HTTP"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
      }, {
        type: _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_8__["DatePicker"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"]
      }];
    };

    SignupPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-signup',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./signup.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/signup.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./signup.page.scss */
      "./src/app/pages/signup/signup.page.scss"))["default"]]
    })], SignupPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-signup-signup-module-es5.js.map