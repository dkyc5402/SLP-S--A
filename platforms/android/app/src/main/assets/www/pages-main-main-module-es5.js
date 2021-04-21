function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-main-main-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/main/main.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/main/main.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesMainMainPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-main-header></app-main-header>\r\n<ion-content>\r\n  <div class=\"maincontent\">\r\n    <ion-grid class=\"center\">\r\n\r\n      <!--Welcome Card-->\r\n      <ion-row>\r\n        <ion-card color=\"light\" id=\"welcome_card\">\r\n          <ion-card-content>\r\n            <ion-row>\r\n              <ion-col size=\"9\">\r\n                <ion-row>\r\n                  <ion-label id=\"welcome_name\" style=\"font-weight:bold; font-size: 20px;\">Welcome Mr ~</ion-label>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-label id=\"instructor_school\" style=\"font-size: 16px;\">Instructor in sch</ion-label>\r\n                </ion-row>\r\n              </ion-col>\r\n\r\n              <ion-col size=\"3\">\r\n                <img src=\"../../../assets/images/person.png\" alt=\"User Avatar\" height=\"60px\"\r\n                  style=\"border-radius: 20px;\" />\r\n              </ion-col>\r\n            </ion-row>\r\n\r\n          </ion-card-content>\r\n\r\n        </ion-card>\r\n      </ion-row>\r\n\r\n      <!-- Functions -->\r\n      <ion-row style=\"width: 100%;\">\r\n        <ion-col>\r\n\r\n\r\n          <ion-card  (click)=\"MySession()\">\r\n            <ion-header style=\"background-color: #4B5C7C;\">\r\n              <ion-title style=\"color: white; padding: 10px;font-size: 12px;\">My Sessions</ion-title>\r\n            </ion-header>\r\n            <img src=\"assets/images/assignment.png\" alt=\"My Sessions\" style=\"height: 140px;\">\r\n          </ion-card>\r\n\r\n        </ion-col>\r\n        <ion-col>\r\n\r\n          <ion-card  (click)=\"JoinSession()\">\r\n            <ion-header style=\"background-color: #4B5C7C;\">\r\n              <ion-title style=\"color: white;padding: 10px;font-size: 12px;\">Tutor Session</ion-title>\r\n            </ion-header>\r\n            <img src=\"assets/images/html.png\" alt=\"Tutor Session \" style=\"height: 140px; padding:10px;font-size: 10px;\">\r\n          </ion-card>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n    </ion-grid>\r\n  </div>\r\n</ion-content>\r\n\r\n<!-- <div>\r\n            <button (click)=\"JoinSession()\"><img src=\"assets/images/html.png\" alt=\"Join Session\"></button>\r\n            <div style=\"font-size: large;\">Tutor Session</div>\r\n          </div>\r\n\r\n\r\n          <div>\r\n            <button (click)=\"MySession()\"><img src=\"assets/images/assignment.png\"\r\n                alt=\"My Session\"><br /></button><span></span>\r\n            <div style=\"font-size: large;\">My Sessions</div>\r\n          </div> -->\r\n\r\n\r\n\r\n\r\n\r\n<!--<ion-row>\r\n       <ion-col>\r\n        <div>\r\n          <button (click)=\"InitiateSession()\"><img src=\"assets/images/enrollment.png\" alt=\"Initiate Session\"></button>\r\n          <div style=\"font-size: large;\">Request Tuition</div>\r\n        </div>\r\n      </ion-col> -->\r\n\r\n<!-- </ion-row>\r\n    <ion-row> -->\r\n\r\n<!-- <ion-col>\r\n        <div>\r\n          <button (click)=\"Help()\"><img src=\"assets/images/question.png\" alt=\"Help\"><br/></button>\r\n          <div style=\"font-size: large;\">Help</div>\r\n        </div>\r\n      </ion-col> -->";
    /***/
  },

  /***/
  "./src/app/pages/main/main-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/main/main-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: MainPageRoutingModule */

  /***/
  function srcAppPagesMainMainRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainPageRoutingModule", function () {
      return MainPageRoutingModule;
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


    var _main_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./main.page */
    "./src/app/pages/main/main.page.ts");

    var routes = [{
      path: '',
      component: _main_page__WEBPACK_IMPORTED_MODULE_3__["MainPage"]
    }];

    var MainPageRoutingModule = function MainPageRoutingModule() {
      _classCallCheck(this, MainPageRoutingModule);
    };

    MainPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MainPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/main/main.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/main/main.module.ts ***!
    \*******************************************/

  /*! exports provided: MainPageModule */

  /***/
  function srcAppPagesMainMainModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainPageModule", function () {
      return MainPageModule;
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


    var _main_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./main-routing.module */
    "./src/app/pages/main/main-routing.module.ts");
    /* harmony import */


    var _main_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./main.page */
    "./src/app/pages/main/main.page.ts");
    /* harmony import */


    var _components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../components.module */
    "./src/app/components.module.ts");

    var MainPageModule = function MainPageModule() {
      _classCallCheck(this, MainPageModule);
    };

    MainPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _main_routing_module__WEBPACK_IMPORTED_MODULE_5__["MainPageRoutingModule"], _components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
      declarations: [_main_page__WEBPACK_IMPORTED_MODULE_6__["MainPage"]]
    })], MainPageModule);
    /***/
  },

  /***/
  "./src/app/pages/main/main.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/pages/main/main.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesMainMainPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "button {\n  background-color: transparent;\n}\n\nbutton:hover:active {\n  border: solid #e5741f 0.5em;\n}\n\n.center {\n  text-align: center;\n}\n\n#welcome_card {\n  width: 100%;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWFpbi9DOlxcVXNlcnNcXERhbmFlXFxEZXNrdG9wXFxGWVBKXFxTTFAtUy0tQS9zcmNcXGFwcFxccGFnZXNcXG1haW5cXG1haW4ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9tYWluL21haW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNkJBQUE7QUNDSjs7QURDRTtFQUNFLDJCQUFBO0FDRUo7O0FEQUU7RUFFRSxrQkFBQTtBQ0VKOztBREFFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNHSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21haW4vbWFpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtcclxuICB9XHJcbiAgYnV0dG9uOmhvdmVyOmFjdGl2ZXtcclxuICAgIGJvcmRlcjpzb2xpZCAjZTU3NDFmIDAuNWVtO1xyXG4gIH1cclxuICAuY2VudGVyXHJcbiAge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAjd2VsY29tZV9jYXJke1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgfSIsImJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG5idXR0b246aG92ZXI6YWN0aXZlIHtcbiAgYm9yZGVyOiBzb2xpZCAjZTU3NDFmIDAuNWVtO1xufVxuXG4uY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jd2VsY29tZV9jYXJkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogYXV0bztcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/main/main.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/pages/main/main.page.ts ***!
    \*****************************************/

  /*! exports provided: MainPage */

  /***/
  function srcAppPagesMainMainPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainPage", function () {
      return MainPage;
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


    var _services_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/global.service */
    "./src/app/services/global.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var MainPage = /*#__PURE__*/function () {
      function MainPage(router, platform, globalService) {
        _classCallCheck(this, MainPage);

        this.router = router;
        this.platform = platform;
        this.globalService = globalService;
      }

      _createClass(MainPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.globalService.GenerateLoginInfo();
        }
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          var _this = this;

          this.platform.backButton.subscribeWithPriority(10, function () {
            console.log('Handler was called!');

            _this.router.navigateByUrl('tabs/main');
          });
          console.log('the platform height is ' + this.platform.height());
          console.log('student id :', this.studentid);
        }
      }, {
        key: "InitiateSession",
        value: function InitiateSession() {
          this.router.navigateByUrl('tabs/session-view/session-initiate');
        }
      }, {
        key: "JoinSession",
        value: function JoinSession() {
          this.router.navigateByUrl('tabs/session-view/session-join');
        }
      }, {
        key: "MySession",
        value: function MySession() {
          this.router.navigateByUrl('tabs/session-view/session-my');
        }
      }, {
        key: "Help",
        value: function Help() {
          this.router.navigateByUrl('tabs/support/logout');
        }
      }]);

      return MainPage;
    }();

    MainPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
      }, {
        type: _services_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"]
      }];
    };

    MainPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-main',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./main.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/main/main.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./main.page.scss */
      "./src/app/pages/main/main.page.scss"))["default"]]
    })], MainPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-main-main-module-es5.js.map