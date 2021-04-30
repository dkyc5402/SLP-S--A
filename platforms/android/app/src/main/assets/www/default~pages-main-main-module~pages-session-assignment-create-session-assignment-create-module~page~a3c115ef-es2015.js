(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-main-main-module~pages-session-assignment-create-session-assignment-create-module~page~a3c115ef"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/main-header/main-header.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/main-header/main-header.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title style=\"text-align: center;margin-left: 8%;\"> Instructor (SLP) </ion-title>\r\n    <!--  (click)=\"OpenModal()\" -->\r\n    <!-- <ion-buttons slot=\"end\">\r\n    <ion-icon style=\"zoom:3.0\" src=\"assets/images/user-2.svg\"></ion-icon>\r\n    </ion-buttons> -->\r\n\r\n      <ion-button fill=\"clear\" slot=\"end\" (click)=\"presentPopover($event)\">\r\n        <ion-icon id=\"dropdown\" slot=\"icon-only\" name=\"ellipsis-vertical\" ></ion-icon>\r\n      </ion-button>\r\n\r\n    \r\n\r\n  </ion-toolbar>\r\n</ion-header>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/popovers/headerpop/headerpop.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/popovers/headerpop/headerpop.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-popover-view slot=\"end\">\r\n  <ion-content>\r\n    <div class=\"list\">\r\n      <a class=\"item\" (click)=\"OpenModal()\">\r\n        View Account\r\n      </a>\r\n      <a class=\"item\" (click)=\"Help()\">\r\n        Help\r\n      </a>\r\n      <a class=\"item\" (click)=\"presentAlertLogout()\">\r\n        Logout\r\n      </a>\r\n    </div>\r\n  </ion-content>\r\n</ion-popover-view> -->\r\n\r\n<ion-popover-view class=\"fit\">\r\n\r\n<ion-list lines=\"full\" style=\"text-align: center; height: auto;\">\r\n  <ion-item button (click)=\"OpenModal()\">View Account</ion-item>\r\n  <ion-item button (click)=\"Help()\">Help</ion-item>\r\n  <ion-item button (click)=\"Logout()\">Logout</ion-item>\r\n</ion-list>\r\n\r\n</ion-popover-view>\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/session-header/session-header.page.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/session-header/session-header.page.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-toolbar>\r\n  <ion-buttons slot=\"start\">\r\n  <button style=\"background-color:transparent;\" (click)=\"presentPopover()\"><img src=\"assets/images/Human.png\"><br/></button>\r\n  </ion-buttons>\r\n  <div *ngIf=\"sessionheaderdata\">\r\n  <ion-title style=\"text-align: center;\" ><b>{{sessionheaderdata.session_Title}}</b><br/><ion-label style=\"font-size: medium;\" *ngIf=\"sessionheaderdata.subject_DisplayName!=null||sessionheaderdata.level_DisplayName!=null\" >{{sessionheaderdata.subject_DisplayName}} ({{sessionheaderdata.level_DisplayName}})</ion-label></ion-title>\r\n</div>\r\n  <ion-buttons slot=\"end\">\r\n    <button style=\"background-color:#6F1A07; color: white;font-weight: bold; padding: 10px; border-radius: 10px;\" (click)=\"EndSession()\">END<br/></button>\r\n  </ion-buttons>\r\n</ion-toolbar>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modalpopup/modalpopup.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modalpopup/modalpopup.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content fullscreen=\"true\" scroll-y=\"false\" slot=\"fixed\" padding class=\"background\">\r\n  <ion-item lines=\"none\">\r\n    <ion-label>PROFILE</ion-label>\r\n    <ion-button size=\"small\" (click)=\"CloseModal()\" slot=\"end\" style=\"--background:#4B5C7C;color: white;padding: 0px;\">close\r\n    </ion-button>\r\n  </ion-item>\r\n\r\n  <div class=\"card\">\r\n    <div class=\"header\">\r\n      <div class=\"avatar\">\r\n        <img src=\"/assets/images/person.png\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div class=\"card-body\">\r\n    <div class=\"user-meta ion-text-center\">\r\n      <h3 class=\"playername\">{{ username }}</h3>\r\n      <h2 style=\"text-align: center;\"> Instructor </h2>\r\n      <h4 style=\"text-align: center;\">\r\n        <ion-icon name=\"school-outline\"></ion-icon> {{ schoolInfo_Name }}\r\n      </h4>\r\n    </div>\r\n    <hr>\r\n    <ion-button expand=\"full\"  style=\"--background:#4B5C7C;color: white; padding: 0px;\">Reset Password</ion-button> \r\n\r\n\r\n    <!-- <button class=\"accordion\" (click)='ionViewDidLoad()'>\r\n      Reset Password\r\n    </button>\r\n\r\n    <div style=\"margin: 5px 90px\" class=\"panel\">\r\n      <br>\r\n      <form class=\"container\" [formGroup]=\"loginForm1\">\r\n        <div class=\"form-group\">\r\n          <ion-label position=\"stacked\">New Password <span style=\"color: red\">*</span></ion-label>\r\n          <div class=\"form\">\r\n            <input autocomplete=\"off\" name=\"password\" class=\"form-control\" formControlName=\"password\"\r\n              [type]=\"showPassword4 ? 'text': 'password'\">\r\n            <ion-icon slot=\"end\" [name]=\"passwordToggleIcon4\" (click)=\"togglePassword4()\"></ion-icon>\r\n          </div>\r\n        </div>\r\n        <div class=\"error-messages\">\r\n          <ng-container *ngFor=\"let error of error_messages.password\">\r\n            <div class=\"error-message\"\r\n              *ngIf=\"loginForm1.get('password').hasError(error.type) && (loginForm1.get('password').dirty || loginForm1.get('password').touched)\">\r\n              {{ error.message }}\r\n            </div>\r\n          </ng-container>\r\n        </div>\r\n\r\n        <br>\r\n        <div class=\"form-group\">\r\n          <ion-label position=\"stacked\">Confirm New Password <span style=\"color: red\">*</span></ion-label>\r\n          <div class=\"form\">\r\n            <input autocomplete=\"off\" name=\"confirmpassword\" class=\"form-control\" formControlName=\"confirmpassword\"\r\n              [type]=\"showPassword5 ? 'text': 'password'\" />\r\n            <ion-icon slot=\"end\" [name]=\"passwordToggleIcon5\" (click)=\"togglePassword5()\"></ion-icon>\r\n          </div>\r\n        </div>\r\n        <div class=\"error-messages\">\r\n          <ng-container *ngFor=\"let error of error_messages.confirmpassword\">\r\n            <div class=\"error-message\"\r\n              *ngIf=\"loginForm1.get('confirmpassword').hasError(error.type) && (loginForm1.get('confirmpassword').dirty || loginForm1.get('confirmpassword').touched)\">\r\n              {{ error.message }}\r\n            </div>\r\n          </ng-container>\r\n          <div class=\"error-message\"\r\n            *ngIf=\"!loginForm1.get('confirmpassword').errors && loginForm1.hasError('passwordNotMatch') && (loginForm1.get('confirmpassword').dirty || loginForm1.get('confirmpassword').touched)\">\r\n            Password and Confirm Password fields should match\r\n          </div>\r\n        </div>\r\n        <br>\r\n        <div class=\"ionbutton\">\r\n          <ion-button class=\"form-control btn btn-primary\" [disabled]=\"!loginForm1.valid\" share=\"round\"\r\n            (click)=\"presentAlert()\">Confirm</ion-button>\r\n        </div>\r\n        <br><br><br><br><br>\r\n      </form>\r\n    </div> -->\r\n\r\n\r\n    <!-- <ion-button expand=\"full\" color=\"#4B5C7C;\" (click)=\"profile()\">{{ schoolInfo_Name }}</ion-button> -->\r\n    <!-- <ion-button expand=\"full\" color=\"secondary\">{{ levelInfo_DisplayName }}</ion-button> -->\r\n  </div>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/components.module.ts":
/*!**************************************!*\
  !*** ./src/app/components.module.ts ***!
  \**************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _components_main_header_main_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/main-header/main-header.component */ "./src/app/components/main-header/main-header.component.ts");
/* harmony import */ var _components_session_header_session_header_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/session-header/session-header.page */ "./src/app/components/session-header/session-header.page.ts");







let ComponentsModule = class ComponentsModule {
};
ComponentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_components_main_header_main_header_component__WEBPACK_IMPORTED_MODULE_5__["MainHeaderComponent"], _components_session_header_session_header_page__WEBPACK_IMPORTED_MODULE_6__["SessionHeaderPage"]],
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        ],
        exports: [_components_main_header_main_header_component__WEBPACK_IMPORTED_MODULE_5__["MainHeaderComponent"], _components_session_header_session_header_page__WEBPACK_IMPORTED_MODULE_6__["SessionHeaderPage"]]
    })
], ComponentsModule);



/***/ }),

/***/ "./src/app/components/main-header/main-header.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/main-header/main-header.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-icon {\n  color: black;\n  font-size: x-large;\n}\n\nion-button {\n  background-color: Transparent;\n  border: none;\n  outline: none;\n  --ripple-color: #4B5C7C;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluLWhlYWRlci9DOlxcVXNlcnNcXERhbmFlXFxEZXNrdG9wXFxGWVBKXFxTTFAtUy0tQS9zcmNcXGFwcFxcY29tcG9uZW50c1xcbWFpbi1oZWFkZXJcXG1haW4taGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL21haW4taGVhZGVyL21haW4taGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDSSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi1oZWFkZXIvbWFpbi1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taWNvbiB7XHJcbiAgY29sb3I6YmxhY2s7XHJcbiAgZm9udC1zaXplOngtbGFyZ2U7XHJcbn1cclxuXHJcbmlvbi1idXR0b257XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBUcmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG91dGxpbmU6bm9uZTtcclxuICAgIC0tcmlwcGxlLWNvbG9yOiAjNEI1QzdDO1xyXG59XHJcblxyXG5cclxuLy8gaW9uLXBvcG92ZXItdmlldy5maXQge1xyXG4vLyAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG4vLyB9XHJcblxyXG4vLyBpb24tcG9wb3Zlci12aWV3LmZpdCBpb24tY29udGVudCB7XHJcbi8vICAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcbi8vIC5wbGF0Zm9ybS1hbmRyb2lkIGlvbi1wb3BvdmVyLXZpZXcuZml0IHtcclxuLy8gICBtYXJnaW4tdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbi8vIH0iLCJpb24taWNvbiB7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xufVxuXG5pb24tYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogVHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgLS1yaXBwbGUtY29sb3I6ICM0QjVDN0M7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/main-header/main-header.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/main-header/main-header.component.ts ***!
  \*****************************************************************/
/*! exports provided: MainHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainHeaderComponent", function() { return MainHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _modalpopup_modalpopup_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modalpopup/modalpopup.page */ "./src/app/modalpopup/modalpopup.page.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _components_popovers_headerpop_headerpop_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/popovers/headerpop/headerpop.component */ "./src/app/components/popovers/headerpop/headerpop.component.ts");






let MainHeaderComponent = class MainHeaderComponent {
    constructor(popoverController, modalController) {
        this.popoverController = popoverController;
        this.modalController = modalController;
    }
    ngOnInit() { }
    OpenModal() {
        this.modalController.create({ component: _modalpopup_modalpopup_page__WEBPACK_IMPORTED_MODULE_2__["ModalpopupPage"] }).then((modalElement) => {
            modalElement.present();
        });
    }
    presentPopover(ev) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _components_popovers_headerpop_headerpop_component__WEBPACK_IMPORTED_MODULE_4__["HeaderpopComponent"],
                cssClass: "HeaderPopover",
                event: ev,
                translucent: true,
                showBackdrop: false,
                backdropDismiss: true,
                mode: "md",
            });
            yield popover.present();
            const { role } = yield popover.onDidDismiss();
            console.log('onDidDismiss resolved with role', role);
        });
    }
};
MainHeaderComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] }
];
MainHeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main-header',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./main-header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/main-header/main-header.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./main-header.component.scss */ "./src/app/components/main-header/main-header.component.scss")).default]
    })
], MainHeaderComponent);



/***/ }),

/***/ "./src/app/components/popovers/headerpop/headerpop.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/components/popovers/headerpop/headerpop.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item {\n  text-align: center;\n  border-color: transparent;\n}\n\nion-popover-view.fit {\n  --height: auto !important;\n}\n\nion-popover-view.fit ion-content {\n  position: relative !important;\n}\n\n.platform-android ion-popover-view.fit {\n  margin-top: 10px !important;\n}\n\n.cancelbtn {\n  color: #6F1A07;\n}\n\n.logoutbtn {\n  color: #4B5C7C;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb3BvdmVycy9oZWFkZXJwb3AvQzpcXFVzZXJzXFxEYW5hZVxcRGVza3RvcFxcRllQSlxcU0xQLVMtLUEvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHBvcG92ZXJzXFxoZWFkZXJwb3BcXGhlYWRlcnBvcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9wb3BvdmVycy9oZWFkZXJwb3AvaGVhZGVycG9wLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSx5QkFBQTtBQ0NKOztBREdBO0VBQ0UseUJBQUE7QUNBRjs7QURHQTtFQUNFLDZCQUFBO0FDQUY7O0FER0E7RUFDRSwyQkFBQTtBQ0FGOztBREdBO0VBQ0ksY0FBQTtBQ0FKOztBREdBO0VBQ0ksY0FBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wb3BvdmVycy9oZWFkZXJwb3AvaGVhZGVycG9wLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW0ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuXHJcbmlvbi1wb3BvdmVyLXZpZXcuZml0IHtcclxuICAtLWhlaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24tcG9wb3Zlci12aWV3LmZpdCBpb24tY29udGVudCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wbGF0Zm9ybS1hbmRyb2lkIGlvbi1wb3BvdmVyLXZpZXcuZml0IHtcclxuICBtYXJnaW4tdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jYW5jZWxidG57XHJcbiAgICBjb2xvcjogIzZGMUEwNztcclxufVxyXG5cclxuLmxvZ291dGJ0bntcclxuICAgIGNvbG9yOiM0QjVDN0M7XHJcbn1cclxuIiwiaW9uLWl0ZW0ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbmlvbi1wb3BvdmVyLXZpZXcuZml0IHtcbiAgLS1oZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbn1cblxuaW9uLXBvcG92ZXItdmlldy5maXQgaW9uLWNvbnRlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcbn1cblxuLnBsYXRmb3JtLWFuZHJvaWQgaW9uLXBvcG92ZXItdmlldy5maXQge1xuICBtYXJnaW4tdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jYW5jZWxidG4ge1xuICBjb2xvcjogIzZGMUEwNztcbn1cblxuLmxvZ291dGJ0biB7XG4gIGNvbG9yOiAjNEI1QzdDO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/popovers/headerpop/headerpop.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/popovers/headerpop/headerpop.component.ts ***!
  \**********************************************************************/
/*! exports provided: HeaderpopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderpopComponent", function() { return HeaderpopComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_assignments_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/assignments.service */ "./src/app/services/assignments.service.ts");
/* harmony import */ var src_app_services_global_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/global.service */ "./src/app/services/global.service.ts");
/* harmony import */ var _modalpopup_modalpopup_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../modalpopup/modalpopup.page */ "./src/app/modalpopup/modalpopup.page.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var src_app_model_global_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/model/global-api */ "./src/app/model/global-api.ts");










let HeaderpopComponent = class HeaderpopComponent {
    constructor(popover, router, modalController, storage, assignmentsService, nativeHttp, globalService, alertController) {
        this.popover = popover;
        this.router = router;
        this.modalController = modalController;
        this.storage = storage;
        this.assignmentsService = assignmentsService;
        this.nativeHttp = nativeHttp;
        this.globalService = globalService;
        this.alertController = alertController;
    }
    ngOnInit() {
    }
    ClosePopover() {
        this.popover.dismiss();
    }
    Help() {
        this.ClosePopover();
        this.router.navigateByUrl('tabs/support/logout');
    }
    OpenModal() {
        this.ClosePopover();
        this.modalController.create({ component: _modalpopup_modalpopup_page__WEBPACK_IMPORTED_MODULE_7__["ModalpopupPage"] }).then((modalElement) => {
            modalElement.present();
        });
    }
    Logout() {
        this.token = this.globalService.getselectedtoken();
        this.studentid = this.globalService.getselectedStudentId();
        console.log(this.studentid);
        console.log(this.token);
        this.nativeHttp.setDataSerializer('json');
        this.nativeHttp.post(src_app_model_global_api__WEBPACK_IMPORTED_MODULE_9__["apiurl"].apiUrl + 'student/logout', {
            "Authentication_Token": this.token,
            "User_Id": this.studentid
        }, {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        })
            .then((response) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.ClosePopover();
                const alert = yield this.alertController.create({
                    header: 'Logout',
                    // subHeader: 'Sub Alert',
                    message: 'Are you sure you want to logout?',
                    buttons: [{
                            text: 'Cancel',
                            cssClass: 'cancelbtn',
                            role: 'cancel',
                            handler: () => {
                                console.log('You clicked me');
                            }
                        },
                        {
                            text: 'Okay',
                            cssClass: 'logoutbtn',
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
};
HeaderpopComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"] },
    { type: src_app_services_assignments_service__WEBPACK_IMPORTED_MODULE_5__["AssignmentsService"] },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__["HTTP"] },
    { type: src_app_services_global_service__WEBPACK_IMPORTED_MODULE_6__["GlobalService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
HeaderpopComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-headerpop',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./headerpop.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/popovers/headerpop/headerpop.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./headerpop.component.scss */ "./src/app/components/popovers/headerpop/headerpop.component.scss")).default]
    })
], HeaderpopComponent);



/***/ }),

/***/ "./src/app/components/session-header/session-header.page.scss":
/*!********************************************************************!*\
  !*** ./src/app/components/session-header/session-header.page.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2Vzc2lvbi1oZWFkZXIvc2Vzc2lvbi1oZWFkZXIucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/session-header/session-header.page.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/session-header/session-header.page.ts ***!
  \******************************************************************/
/*! exports provided: SessionHeaderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionHeaderPage", function() { return SessionHeaderPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_assignments_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/assignments.service */ "./src/app/services/assignments.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _pages_shared_module_popover_participant_view_popover_participant_view_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../pages/shared-module/popover-participant-view/popover-participant-view.page */ "./src/app/pages/shared-module/popover-participant-view/popover-participant-view.page.ts");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _model_global_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../model/global-api */ "./src/app/model/global-api.ts");
/* harmony import */ var _services_network_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/network.service */ "./src/app/services/network.service.ts");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/global.service */ "./src/app/services/global.service.ts");











let SessionHeaderPage = class SessionHeaderPage {
    constructor(globalService, router, activatedRoute, nativeHttp, assignmentsService, networkService, popoverController, storage) {
        this.globalService = globalService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.nativeHttp = nativeHttp;
        this.assignmentsService = assignmentsService;
        this.networkService = networkService;
        this.popoverController = popoverController;
        this.storage = storage;
    }
    ngOnInit() {
        this.getSessionHeaderData();
        this.token = this.globalService.getselectedtoken();
        this.studentid = this.globalService.getselectedStudentId();
    }
    /*Get Session Header Data*/
    getSessionHeaderData() {
        // Get the ID that was passed with the URL
        let id = this.activatedRoute.snapshot.paramMap.get('id');
        this.sessionid = id;
        //Global
        this.assignmentsService.setselectedsessionid(id);
        this.storage.get('mysession').then((val) => {
            this.sessionheaderdata = val;
            this.assignmentsService.getselectedparticipantid();
            this.assignmentsService.setselectedsessionheader(this.sessionheaderdata);
            try {
                val.forEach((valor) => {
                    if (valor.session_Id == this.assignmentsService.getselectedsessionid()) {
                        this.sessionheaderdata = valor;
                        this.initiatorid = valor.initiator_Id;
                        this.assignmentsService.setselectedinitiatorid(this.initiatorid);
                        //console.log(this.initiatorid)
                        this.assignmentsService.setselectedsessionheader(this.sessionheaderdata);
                        this.assignmentsService.setselectedsessionstatus(valor.session_Status);
                        console.log("Found Session Header!");
                    }
                });
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    /*End A Session*/
    EndSession() {
        if (this.networkService.online == false) {
            this.networkService.presentNetworkMsg();
        }
        else {
            this.assignmentsService.EndSessionConfirmation('Cancel', 'End').then((res) => {
                if (res === 'End') {
                    //POST Method
                    this.LeaveSession();
                    this.router.navigateByUrl('tabs/main');
                }
            });
        }
    }
    /*Leave A Session*/
    LeaveSession() {
        console.log(this.assignmentsService.getselectedparticipantid());
        this.nativeHttp.setDataSerializer('json');
        this.nativeHttp.post(_model_global_api__WEBPACK_IMPORTED_MODULE_8__["apiurl"].apiUrl + 'session/participant_leave', {
            "Authentication_Token": this.token,
            "Student_Id": this.studentid,
            "Session_Id": this.sessionid,
            "Participant_Id": this.assignmentsService.getselectedparticipantid()
        }, {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        })
            .then(response => {
            try {
                response.data = JSON.parse(response.data);
                this.sessionheaderdata = response.data;
                this.storage.set('mysession', response.data);
                this.storage.set('assignmentdetails', response.data.assignments);
                // console.log(response.data)
            }
            catch (e) {
                console.error('JSON parsing error');
            }
        })
            .catch(response => {
            // prints 403
            console.log(response.status);
            // prints Permission denied
            console.log(response);
        });
    }
    /*Pop up (View Participant)*/
    presentPopover(ev) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.networkService.online == false) {
                this.networkService.presentNetworkMsg();
            }
            else {
                const popover = yield this.popoverController.create({
                    component: _pages_shared_module_popover_participant_view_popover_participant_view_page__WEBPACK_IMPORTED_MODULE_6__["PopoverParticipantViewPage"],
                    event: ev,
                });
                return yield popover.present();
            }
        });
    }
};
SessionHeaderPage.ctorParameters = () => [
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_10__["GlobalService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_7__["HTTP"] },
    { type: _services_assignments_service__WEBPACK_IMPORTED_MODULE_2__["AssignmentsService"] },
    { type: _services_network_service__WEBPACK_IMPORTED_MODULE_9__["NetworkService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PopoverController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] }
];
SessionHeaderPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-session-header',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./session-header.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/session-header/session-header.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./session-header.page.scss */ "./src/app/components/session-header/session-header.page.scss")).default]
    })
], SessionHeaderPage);



/***/ }),

/***/ "./src/app/modalpopup/modalpopup.page.scss":
/*!*************************************************!*\
  !*** ./src/app/modalpopup/modalpopup.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: url(\"/assets/images/Profile.jpg\") no-repeat ;\n}\n\nion-toolbar {\n  --background: transparent;\n}\n\nion-label {\n  font-weight: bold;\n}\n\n.card {\n  margin: 0 auto;\n  border: none;\n  box-shadow: none;\n  padding: 10px;\n}\n\n.card .header {\n  height: 290px;\n}\n\n.card .header .avatar {\n  width: 270px;\n  height: 270px;\n  position: relative;\n  margin: 0 auto;\n}\n\n.card .header .avatar img {\n  display: block;\n  border-radius: 50%;\n  position: absolute;\n  top: 5px;\n  border: 8px solid #4B5C7C;\n  background-color: #fff;\n}\n\n.card-body {\n  background-color: #ffffff;\n  padding: 10px;\n  height: calc(100vh - (200px + 56px));\n  overflow: hidden;\n}\n\n.card-body .user-meta .playername {\n  font-size: 24px;\n  font-weight: 600;\n  color: #303940;\n}\n\nion-button {\n  white-space: normal;\n  --box-shadow:none;\n  --color-activated:#f8f8f8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kYWxwb3B1cC9DOlxcVXNlcnNcXERhbmFlXFxEZXNrdG9wXFxGWVBKXFxTTFAtUy0tQS9zcmNcXGFwcFxcbW9kYWxwb3B1cFxcbW9kYWxwb3B1cC5wYWdlLnNjc3MiLCJzcmMvYXBwL21vZGFscG9wdXAvbW9kYWxwb3B1cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwREFBQTtBQ0NGOztBREtBO0VBQ0UseUJBQUE7QUNGRjs7QURLQTtFQUNFLGlCQUFBO0FDRkY7O0FES0E7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQ0ZGOztBRElFO0VBQ0ksYUFBQTtBQ0ZOOztBRElNO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNGVjs7QURJVTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7QUNGZDs7QURRQTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLG9DQUFBO0VBQ0EsZ0JBQUE7QUNMRjs7QURVTTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNSVjs7QURlQTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBQ1pGIiwiZmlsZSI6InNyYy9hcHAvbW9kYWxwb3B1cC9tb2RhbHBvcHVwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAtLWJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWFnZXMvUHJvZmlsZS5qcGcnKSBuby1yZXBlYXQgO1xyXG4gIC8vIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAvLyBoZWlnaHQ6IDEwMCU7XHJcbiAgLy8gd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmlvbi10b29sYmFyIHtcclxuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG5pb24tbGFiZWwge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgcGFkZGluZzoxMHB4O1xyXG5cclxuICAuaGVhZGVyIHtcclxuICAgICAgaGVpZ2h0OiAyOTBweDtcclxuXHJcbiAgICAgIC5hdmF0YXIge1xyXG4gICAgICAgICAgd2lkdGg6IDI3MHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAyNzBweDtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG5cclxuICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICB0b3A6IDVweDtcclxuICAgICAgICAgICAgICBib3JkZXI6IDhweCBzb2xpZCAjNEI1QzdDO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5jYXJkLWJvZHkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAoMjAwcHggKyA1NnB4KSk7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgLnVzZXItbWV0YSB7XHJcbiAgICAgIC8vcGFkZGluZy10b3A6IDQwcHg7XHJcblxyXG4gICAgICAucGxheWVybmFtZSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgY29sb3I6ICMzMDM5NDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgXHJcbiAgfVxyXG59XHJcblxyXG5pb24tYnV0dG9ue1xyXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgLS1ib3gtc2hhZG93Om5vbmU7XHJcbiAgLS1jb2xvci1hY3RpdmF0ZWQ6I2Y4ZjhmODtcclxufSIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9Qcm9maWxlLmpwZ1wiKSBuby1yZXBlYXQgO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbmlvbi1sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uY2FyZCB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBib3JkZXI6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4uY2FyZCAuaGVhZGVyIHtcbiAgaGVpZ2h0OiAyOTBweDtcbn1cbi5jYXJkIC5oZWFkZXIgLmF2YXRhciB7XG4gIHdpZHRoOiAyNzBweDtcbiAgaGVpZ2h0OiAyNzBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5jYXJkIC5oZWFkZXIgLmF2YXRhciBpbWcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNXB4O1xuICBib3JkZXI6IDhweCBzb2xpZCAjNEI1QzdDO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG4uY2FyZC1ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZzogMTBweDtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gKDIwMHB4ICsgNTZweCkpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmNhcmQtYm9keSAudXNlci1tZXRhIC5wbGF5ZXJuYW1lIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzMwMzk0MDtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIC0tYm94LXNoYWRvdzpub25lO1xuICAtLWNvbG9yLWFjdGl2YXRlZDojZjhmOGY4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modalpopup/modalpopup.page.ts":
/*!***********************************************!*\
  !*** ./src/app/modalpopup/modalpopup.page.ts ***!
  \***********************************************/
/*! exports provided: ModalpopupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalpopupPage", function() { return ModalpopupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");




let ModalpopupPage = class ModalpopupPage {
    // displayPostData: any;
    constructor(modalController, storage) {
        this.modalController = modalController;
        this.storage = storage;
    }
    ngOnInit() {
        this.profile();
    }
    CloseModal() {
        this.modalController.dismiss();
    }
    profile() {
        this.storage.get('authlogin').then((val) => {
            console.log(val);
            this.displayUserData = val;
            this.username = val.username;
            this.levelInfo_DisplayName = val.levelInfo_DisplayName;
            this.schoolInfo_Name = val.schoolInfo_Name;
        });
    }
};
ModalpopupPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] }
];
ModalpopupPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modalpopup',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./modalpopup.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modalpopup/modalpopup.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./modalpopup.page.scss */ "./src/app/modalpopup/modalpopup.page.scss")).default]
    })
], ModalpopupPage);



/***/ })

}]);
//# sourceMappingURL=default~pages-main-main-module~pages-session-assignment-create-session-assignment-create-module~page~a3c115ef-es2015.js.map