(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content padding='true' class=\"vertical-center\">\r\n  <br><br><br><br><br><br>\r\n  <div class=\"center\" style=\"padding: 10px;\">\r\n    <!-- <img src=\"assets/images/logo.jpg\" class=\"smallLogo\"/> -->\r\n    <h1>Instructor</h1>\r\n    <h2>Student Learning Platform</h2>\r\n  </div>\r\n  <br>\r\n  <form>\r\n    <ion-list lines=\"none\" style=\"padding: 10px;\">\r\n      <ion-item class=\"ionitem\" lines=\"none\">\r\n        <!-- <ion-label position=\"stacked\">Username</ion-label> -->\r\n        <ion-icon name=\"person-outline\"></ion-icon>\r\n        <ion-input autocomplete=\"off\" type=\"text\" name=\"username\" placeholder=\" Username\"\r\n          [(ngModel)]=\"postData.Username\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item class=\"ionitem\" lines=\"none\">\r\n        <!-- <ion-label position=\"stacked\">Password</ion-label> -->\r\n        <ion-icon name=\"lock-closed-outline\"></ion-icon>\r\n        <ion-input placeholder=\" Password\" autocomplete=\"off\" [type]=\"showPassword3 ? 'text': 'password'\"\r\n          name=\"password\" [(ngModel)]=\"postData.Password\"></ion-input>\r\n        <ion-icon slot=\"end\" [name]=\"passwordToggleIcon3\" (click)=\"togglePassword3()\"></ion-icon>\r\n      </ion-item>\r\n      <div class=\"forgot\">\r\n        <p (click)=\"OpenEmailComposer()\">Forgot?</p>\r\n      </div>\r\n      <br>\r\n      <br>\r\n      <div class=\"button\" div class=\"center\">\r\n        <ion-button class=\"ionbutton\" style=\"color:white\" (click)=\"Login()\" routerDirection=\"root\">Sign In</ion-button>\r\n      </div>\r\n      <br>\r\n      <br>\r\n      <p class=\"center1\" (click)=\"signup()\" style=\"margin:auto; text-align:center; display:block;\">Sign Up For An Account\r\n      </p>\r\n    </ion-list>\r\n\r\n  </form>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/login/login-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".center {\n  text-align: center;\n}\n\n.forgot {\n  text-align: right;\n  padding: 10px;\n  color: gray;\n}\n\n.vertical-center {\n  display: flex;\n  align-items: center;\n}\n\n.button {\n  font-family: \"Roboto\";\n  padding: 1000;\n  background-color: transparent;\n}\n\nh1 {\n  font: #3f434b #3f434b;\n}\n\n.center1 {\n  text-align: center;\n  display: flex;\n  align-items: center;\n  align-self: center;\n}\n\n.ionbutton {\n  --vertical-align: middle;\n  --padding-start: 100px;\n  --padding-end: 100px;\n  color: white;\n  --background:#4B5C7C;\n}\n\n.ionitem {\n  border-top: none;\n  border-right: none;\n  border-left: none;\n  border-bottom-color: #4B5C7C;\n  --highlight-background: #657B6C;\n}\n\n.item {\n  background-color: transparent;\n}\n\n.item-native {\n  border: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXFVzZXJzXFxEYW5hZVxcRGVza3RvcFxcRllQSlxcU0xQLVMtLUEvc3JjXFxhcHBcXGxvZ2luXFxsb2dpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FDRUo7O0FEQ0E7RUFFUSxhQUFBO0VBQ0EsbUJBQUE7QUNDUjs7QURJQTtFQUNJLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0FDREo7O0FESUE7RUFDSSxxQkFBQTtBQ0RKOztBRElBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0RKOztBRElBO0VBQ0ksd0JBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FDREo7O0FESUM7RUFDRyxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtFQUNBLCtCQUFBO0FDREo7O0FES0M7RUFDTyw2QkFBQTtBQ0ZSOztBREtDO0VBQ0ksWUFBQTtBQ0ZMIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNlbnRlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmZvcmdvdCB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBjb2xvcjogZ3JheTtcclxufVxyXG5cclxuLnZlcnRpY2FsLWNlbnRlciB7XHJcbiAgIFxyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAvLyBwYWRkaW5nOiAxMHB4O1xyXG5cclxuICAgIH1cclxuXHJcbi5idXR0b24ge1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xyXG4gICAgcGFkZGluZzogMTAwMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG5oMSB7XHJcbiAgICBmb250OiAjM2Y0MzRiKHJnYig2Myw2Nyw3NSkpO1xyXG59XHJcblxyXG4uY2VudGVyMSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxufVxyXG5cclxuLmlvbmJ1dHRvbiB7XHJcbiAgICAtLXZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDEwMHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMTAwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAtLWJhY2tncm91bmQ6IzRCNUM3QztcclxuICB9XHJcblxyXG4gLmlvbml0ZW17XHJcbiAgICBib3JkZXItdG9wOiBub25lO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XHJcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjNEI1QzdDO1xyXG4gICAgLS1oaWdobGlnaHQtYmFja2dyb3VuZDogIzY1N0I2QztcclxuICAgIFxyXG4gfVxyXG4gXHJcbiAuaXRlbXtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIH1cclxuXHJcbiAuaXRlbS1uYXRpdmV7XHJcbiAgICAgYm9yZGVyOm5vbmVcclxuIH1cclxuXHJcbi8vIC5pdGVtLWlubmVyLWhpZ2hsaWdodHtcclxuLy8gICAgIGJvdHRvbTogNHB4O1xyXG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgICAgYmFja2dyb3VuZDogcmdiKDc1LCA5MiwgMTI0KTtcclxuLy8gICAgIHotaW5kZXg6IDE7XHJcbi8vICAgICB3aWR0aDogMTAwJTtcclxuLy8gfVxyXG5cclxuLy8gLml0ZW0taGlnaGxpZ2h0LCAuaXRlbS1pbm5lci1oaWdobGlnaHR7XHJcbi8vICAgICBib3R0b206IDRweDtcclxuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gICAgIGJhY2tncm91bmQ6IHJnYig3NSwgOTIsIDEyNCk7XHJcbi8vICAgICB6LWluZGV4OiAxO1xyXG4vLyAgICAgd2lkdGg6IDEwMCU7XHJcbi8vIH0iLCIuY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZm9yZ290IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGNvbG9yOiBncmF5O1xufVxuXG4udmVydGljYWwtY2VudGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmJ1dHRvbiB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiO1xuICBwYWRkaW5nOiAxMDAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuaDEge1xuICBmb250OiAjM2Y0MzRiICMzZjQzNGI7XG59XG5cbi5jZW50ZXIxIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbi5pb25idXR0b24ge1xuICAtLXZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIC0tcGFkZGluZy1zdGFydDogMTAwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDEwMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIC0tYmFja2dyb3VuZDojNEI1QzdDO1xufVxuXG4uaW9uaXRlbSB7XG4gIGJvcmRlci10b3A6IG5vbmU7XG4gIGJvcmRlci1yaWdodDogbm9uZTtcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICM0QjVDN0M7XG4gIC0taGlnaGxpZ2h0LWJhY2tncm91bmQ6ICM2NTdCNkM7XG59XG5cbi5pdGVtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5pdGVtLW5hdGl2ZSB7XG4gIGJvcmRlcjogbm9uZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _model_global_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/global-api */ "./src/app/model/global-api.ts");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/email-composer/ngx */ "./node_modules/@ionic-native/email-composer/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _services_assignments_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/assignments.service */ "./src/app/services/assignments.service.ts");











let LoginPage = class LoginPage {
    constructor(alertController, router, platform, storage, nativeHttp, toastService, assignmentsService, composer) {
        this.alertController = alertController;
        this.router = router;
        this.platform = platform;
        this.storage = storage;
        this.nativeHttp = nativeHttp;
        this.toastService = toastService;
        this.assignmentsService = assignmentsService;
        this.composer = composer;
        this.showPassword3 = false;
        this.passwordToggleIcon3 = "eye";
        this.postData = {
            Username: '',
            Password: ''
        };
    }
    ionViewDidEnter() {
        this.platform.backButton.subscribeWithPriority(10, () => {
            console.log('Handler was called! in login');
        });
    }
    ngOnInit() {
    }
    togglePassword3() {
        this.showPassword3 = !this.showPassword3;
        if (this.passwordToggleIcon3 == "eye") {
            this.passwordToggleIcon3 = 'eye-off';
        }
        else {
            this.passwordToggleIcon3 = 'eye';
        }
    }
    signup() {
        this.router.navigateByUrl('/signup');
    }
    OpenEmailComposer() {
        this.composer.open({
            to: 'fypups2020@gmail.com'
        });
    }
    Login() {
        if (this.postData.Username == "" && this.postData.Password == "") {
            this.toastService.presentToast('Please enter username and password.');
        }
        else if (this.postData.Username == "") {
            this.toastService.presentToast('Please enter username.');
        }
        else if (this.postData.Password == "") {
            this.toastService.presentToast('Please enter password.');
        }
        else {
            this.AuthLogin();
        }
    }
    AuthLogin() {
        this.nativeHttp.setDataSerializer('json');
        this.nativeHttp.post(_model_global_api__WEBPACK_IMPORTED_MODULE_5__["apiurl"].apiUrl + 'student/login', {
            "Username": this.postData.Username,
            "Password": this.postData.Password
        }, {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        })
            .then((response) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                response.data = JSON.parse(response.data);
                this.storage.set('authlogin', response.data);
                this.postData.Username = '';
                this.postData.Password = '';
                const alert = yield this.alertController.create({
                    header: 'Sign In',
                    // subHeader: 'Sub Alert',
                    message: 'Login Successful!',
                    buttons: [{
                            text: 'Okay',
                            role: 'cancel',
                            handler: () => {
                                console.log('You clicked me');
                                this.router.navigateByUrl('/tabs/main');
                            }
                        }
                    ]
                });
                yield alert.present();
            }
            catch (e) {
                console.error(e);
                console.log("Not a valid account! Wrong details entered!");
                this.toastService.presentToast('Please enter correct details!');
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
};
LoginPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__["HTTP"] },
    { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"] },
    { type: _services_assignments_service__WEBPACK_IMPORTED_MODULE_9__["AssignmentsService"] },
    { type: _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_7__["EmailComposer"] }
];
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")).default]
    })
], LoginPage);



/***/ }),

/***/ "./src/app/services/toast.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/toast.service.ts ***!
  \*******************************************/
/*! exports provided: ToastService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastService", function() { return ToastService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");



let ToastService = class ToastService {
    constructor(toastController) {
        this.toastController = toastController;
    }
    presentToast(infoMessage) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: infoMessage,
                duration: 2000
            });
            toast.present();
        });
    }
};
ToastService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] }
];
ToastService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ToastService);



/***/ })

}]);
//# sourceMappingURL=login-login-module-es2015.js.map