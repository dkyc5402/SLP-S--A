(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-main-main-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/main/main.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/main/main.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-main-header></app-main-header>\r\n<ion-content>\r\n  <div class=\"maincontent\" style=\"padding: 5% 1% 10% 1%;\">\r\n    <ion-grid class=\"center\">\r\n\r\n      <!--Welcome Card-->\r\n\r\n\r\n      <ion-row>\r\n        <ion-card style=\" box-shadow: 3px 3px 3px #99a7c2; width: 315px;\" id=\"welcome_card\">\r\n          <ion-card-content>\r\n            <ion-row>\r\n              <ion-col size=\"9\" style=\" align-content: center!important; align-items: center!important;\">\r\n                <ion-row>\r\n                  <ion-label style=\"font-size: 13px;\">Welcome,</ion-label>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-label id=\"welcome_name\"\r\n                    style=\"font-size: 15px; font-weight: bold; word-wrap: break-word; text-align: start;\">{{ username }}\r\n                  </ion-label>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-label id=\"instructor_school\"\r\n                    style=\"font-size: 11px;word-wrap: break-word;text-align: start;font-weight: bold;\">\r\n                    {{schoolInfo_Name}}\r\n                  </ion-label>\r\n                </ion-row>\r\n              </ion-col>\r\n\r\n              <ion-col size=\"3\"\r\n                style=\"display: flex!important;align-content: center!important;align-items: center!important;\">\r\n                <img src=\"../../../assets/images/person.png\" alt=\"User Avatar\" height=\"60px\"\r\n                  style=\"border-radius: 20px;\" />\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-row>\r\n\r\n      <ion-row style=\"padding-top: 20px;padding-left: 20px;font-weight: bold;\">\r\n        <ion-label>\r\n          What would you like to do ?\r\n        </ion-label>\r\n      </ion-row>\r\n\r\n      <!-- Functions -->\r\n      <ion-row style=\"width: 100%;\">\r\n        <ion-col>\r\n\r\n\r\n          <ion-card (click)=\"MySession()\" style=\"background-color: #DCD4D1; border-radius: 20px;\">\r\n            <img src=\"../../../assets/icon/003-knowledge.svg\" alt=\"Tutor Session\" height=\"120px\"\r\n              style=\"padding:10px;\" />\r\n            <ion-header>\r\n              <ion-title style=\"color: #654C4F; padding-bottom: 10px;font-size: 13px;\">My Sessions</ion-title>\r\n            </ion-header>\r\n\r\n          </ion-card>\r\n\r\n        </ion-col>\r\n        <ion-col>\r\n\r\n          <ion-card (click)=\"JoinSession()\" style=\"background-color: #D2DAD5; border-radius: 20px;\">\r\n            <img src=\"../../../assets/icon/004-education.svg\" alt=\"Tutor Session\" height=\"120px\"\r\n              style=\"padding:10px;\" />\r\n            <ion-header>\r\n              <ion-title style=\"color: #657B6C;padding-bottom: 10px;font-size: 13px;\">Tutor Session</ion-title>\r\n            </ion-header>\r\n          </ion-card>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n\r\n    </ion-grid>\r\n\r\n  </div>\r\n\r\n</ion-content>\r\n\r\n<!-- <div>\r\n            <button (click)=\"JoinSession()\"><img src=\"assets/images/html.png\" alt=\"Join Session\"></button>\r\n            <div style=\"font-size: large;\">Tutor Session</div>\r\n          </div>\r\n\r\n\r\n          <div>\r\n            <button (click)=\"MySession()\"><img src=\"assets/images/assignment.png\"\r\n                alt=\"My Session\"><br /></button><span></span>\r\n            <div style=\"font-size: large;\">My Sessions</div>\r\n          </div> -->\r\n\r\n<!--<ion-row>\r\n       <ion-col>\r\n        <div>\r\n          <button (click)=\"InitiateSession()\"><img src=\"assets/images/enrollment.png\" alt=\"Initiate Session\"></button>\r\n          <div style=\"font-size: large;\">Request Tuition</div>\r\n        </div>\r\n      </ion-col> -->\r\n\r\n<!-- </ion-row>\r\n    <ion-row> -->\r\n\r\n<!-- <ion-col>\r\n        <div>\r\n          <button (click)=\"Help()\"><img src=\"assets/images/question.png\" alt=\"Help\"><br/></button>\r\n          <div style=\"font-size: large;\">Help</div>\r\n        </div>\r\n      </ion-col> -->");

/***/ }),

/***/ "./src/app/pages/main/main-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/main/main-routing.module.ts ***!
  \***************************************************/
/*! exports provided: MainPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageRoutingModule", function() { return MainPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _main_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main.page */ "./src/app/pages/main/main.page.ts");




const routes = [
    {
        path: '',
        component: _main_page__WEBPACK_IMPORTED_MODULE_3__["MainPage"]
    }
];
let MainPageRoutingModule = class MainPageRoutingModule {
};
MainPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MainPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/main/main.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/main/main.module.ts ***!
  \*******************************************/
/*! exports provided: MainPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageModule", function() { return MainPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _main_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main-routing.module */ "./src/app/pages/main/main-routing.module.ts");
/* harmony import */ var _main_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main.page */ "./src/app/pages/main/main.page.ts");
/* harmony import */ var _components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components.module */ "./src/app/components.module.ts");








let MainPageModule = class MainPageModule {
};
MainPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _main_routing_module__WEBPACK_IMPORTED_MODULE_5__["MainPageRoutingModule"],
            _components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_main_page__WEBPACK_IMPORTED_MODULE_6__["MainPage"]]
    })
], MainPageModule);



/***/ }),

/***/ "./src/app/pages/main/main.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/main/main.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("button {\n  background-color: transparent;\n}\n\nbutton:hover:active {\n  border: solid #e5741f 0.5em;\n}\n\n.center {\n  text-align: center;\n}\n\n#welcome_card {\n  width: 100%;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWFpbi9DOlxcVXNlcnNcXERhbmFlXFxEZXNrdG9wXFxGWVBKXFxTTFAtUy0tQS9zcmNcXGFwcFxccGFnZXNcXG1haW5cXG1haW4ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9tYWluL21haW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNkJBQUE7QUNDSjs7QURDRTtFQUNFLDJCQUFBO0FDRUo7O0FEQUU7RUFFRSxrQkFBQTtBQ0VKOztBREFFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNHSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21haW4vbWFpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtcclxuICB9XHJcbiAgYnV0dG9uOmhvdmVyOmFjdGl2ZXtcclxuICAgIGJvcmRlcjpzb2xpZCAjZTU3NDFmIDAuNWVtO1xyXG4gIH1cclxuICAuY2VudGVyXHJcbiAge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAjd2VsY29tZV9jYXJke1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgfSIsImJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG5idXR0b246aG92ZXI6YWN0aXZlIHtcbiAgYm9yZGVyOiBzb2xpZCAjZTU3NDFmIDAuNWVtO1xufVxuXG4uY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jd2VsY29tZV9jYXJkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogYXV0bztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/main/main.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/main/main.page.ts ***!
  \*****************************************/
/*! exports provided: MainPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPage", function() { return MainPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/global.service */ "./src/app/services/global.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");






let MainPage = class MainPage {
    constructor(router, platform, globalService, storage) {
        this.router = router;
        this.platform = platform;
        this.globalService = globalService;
        this.storage = storage;
    }
    ngOnInit() {
        this.globalService.GenerateLoginInfo();
        this.profile();
    }
    ionViewDidEnter() {
        this.platform.backButton.subscribeWithPriority(10, () => {
            console.log('Handler was called!');
            this.router.navigateByUrl('tabs/main');
        });
        console.log('the platform height is ' + this.platform.height());
        console.log('student id :', this.studentid);
    }
    profile() {
        this.storage.get('authlogin').then((val) => {
            console.log(val);
            this.displayUserData = val;
            this.username = val.username;
            // this.levelInfo_DisplayName = val.levelInfo_DisplayName
            this.schoolInfo_Name = val.schoolInfo_Name;
        });
    }
    InitiateSession() {
        this.router.navigateByUrl('tabs/session-view/session-initiate');
    }
    JoinSession() {
        this.router.navigateByUrl('tabs/session-view/session-join');
    }
    MySession() {
        this.router.navigateByUrl('tabs/session-view/session-my');
    }
    Help() {
        this.router.navigateByUrl('tabs/support/logout');
    }
};
MainPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] }
];
MainPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./main.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/main/main.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./main.page.scss */ "./src/app/pages/main/main.page.scss")).default]
    })
], MainPage);



/***/ })

}]);
//# sourceMappingURL=pages-main-main-module-es2015.js.map