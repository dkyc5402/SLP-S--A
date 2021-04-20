function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-main-main-module~pages-session-assignment-create-session-assignment-create-module~page~a3c115ef"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/main-header/main-header.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/main-header/main-header.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsMainHeaderMainHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title style=\"text-align: center;margin-left: 8%;\"> Instructor (SLP) </ion-title>\r\n    <!--  (click)=\"OpenModal()\" -->\r\n    <!-- <ion-buttons slot=\"end\">\r\n    <ion-icon style=\"zoom:3.0\" src=\"assets/images/user-2.svg\"></ion-icon>\r\n    </ion-buttons> -->\r\n\r\n      <ion-button fill=\"clear\" slot=\"end\" (click)=\"presentPopover($event)\">\r\n        <ion-icon id=\"dropdown\" slot=\"icon-only\" name=\"ellipsis-vertical\" ></ion-icon>\r\n      </ion-button>\r\n\r\n    \r\n\r\n  </ion-toolbar>\r\n</ion-header>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/popovers/headerpop/headerpop.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/popovers/headerpop/headerpop.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsPopoversHeaderpopHeaderpopComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <ion-popover-view slot=\"end\">\r\n  <ion-content>\r\n    <div class=\"list\">\r\n      <a class=\"item\" (click)=\"OpenModal()\">\r\n        View Account\r\n      </a>\r\n      <a class=\"item\" (click)=\"Help()\">\r\n        Help\r\n      </a>\r\n      <a class=\"item\" (click)=\"presentAlertLogout()\">\r\n        Logout\r\n      </a>\r\n    </div>\r\n  </ion-content>\r\n</ion-popover-view> -->\r\n\r\n<ion-list >\r\n  <ion-item style=\"text-align: center;\" button>View Account</ion-item>\r\n  <ion-item style=\"text-align: center;\" button>Help</ion-item>\r\n  <ion-item style=\"text-align: center;\" button>Logout</ion-item>\r\n</ion-list>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/session-header/session-header.page.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/session-header/session-header.page.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSessionHeaderSessionHeaderPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-toolbar>\r\n  <ion-buttons slot=\"start\">\r\n  <button style=\"background-color:transparent;\" (click)=\"presentPopover()\"><img src=\"assets/images/Human.png\"><br/></button>\r\n  </ion-buttons>\r\n  <div *ngIf=\"sessionheaderdata\">\r\n  <ion-title style=\"text-align: center;\" ><b>{{sessionheaderdata.session_Title}}</b><br/><ion-label style=\"font-size: medium;\" *ngIf=\"sessionheaderdata.subject_DisplayName!=null||sessionheaderdata.level_DisplayName!=null\" >{{sessionheaderdata.subject_DisplayName}} ({{sessionheaderdata.level_DisplayName}})</ion-label></ion-title>\r\n</div>\r\n  <ion-buttons slot=\"end\">\r\n    <button style=\"background-color:transparent;\" (click)=\"EndSession()\"><img src=\"assets/images/EndButton.png\"><br/></button>\r\n  </ion-buttons>\r\n</ion-toolbar>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modalpopup/modalpopup.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modalpopup/modalpopup.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModalpopupModalpopupPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "  <ion-content fullscreen=\"true\" slot=\"fixed\" padding class=\"background\">\r\n    <ion-item >\r\n      <ion-label >PROFILE</ion-label>\r\n      <ion-button size=\"small\" (click)=\"CloseModal()\" slot=\"end\" style=\"--background:#20a7c2\">close</ion-button>\r\n    </ion-item>\r\n    \r\n    <div class=\"card\">\r\n      <div class=\"header\">\r\n        <div class=\"avatar\">\r\n          <img src=\"/assets/images/person.png\" >\r\n        </div> \r\n      </div>\r\n    </div>\r\n  \r\n\r\n    <div class=\"card-body\">\r\n      <div class=\"user-meta ion-text-center\">\r\n        <h3 class=\"playername\">{{ username }}</h3>\r\n        <!-- <h5 class=\"country\">Switzerland</h5> -->\r\n        <!-- <h6 class=\"ranking\">Current ranking: <ion-chip>\r\n          <ion-label>2</ion-label>\r\n          </ion-chip>\r\n        </h6> -->\r\n        <br>\r\n      </div>\r\n      <ion-button expand=\"full\" color=\"secondary\" (click)=\"profile()\">{{ schoolInfo_Name }}</ion-button>\r\n      <ion-button expand=\"full\" color=\"secondary\">{{ levelInfo_DisplayName }}</ion-button>\r\n    </div>\r\n  </ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/components.module.ts":
  /*!**************************************!*\
    !*** ./src/app/components.module.ts ***!
    \**************************************/

  /*! exports provided: ComponentsModule */

  /***/
  function srcAppComponentsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComponentsModule", function () {
      return ComponentsModule;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _components_main_header_main_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/main-header/main-header.component */
    "./src/app/components/main-header/main-header.component.ts");
    /* harmony import */


    var _components_session_header_session_header_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/session-header/session-header.page */
    "./src/app/components/session-header/session-header.page.ts");

    var ComponentsModule = function ComponentsModule() {
      _classCallCheck(this, ComponentsModule);
    };

    ComponentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_components_main_header_main_header_component__WEBPACK_IMPORTED_MODULE_5__["MainHeaderComponent"], _components_session_header_session_header_page__WEBPACK_IMPORTED_MODULE_6__["SessionHeaderPage"]],
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]],
      exports: [_components_main_header_main_header_component__WEBPACK_IMPORTED_MODULE_5__["MainHeaderComponent"], _components_session_header_session_header_page__WEBPACK_IMPORTED_MODULE_6__["SessionHeaderPage"]]
    })], ComponentsModule);
    /***/
  },

  /***/
  "./src/app/components/main-header/main-header.component.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/components/main-header/main-header.component.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsMainHeaderMainHeaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-icon {\n  color: black;\n  font-size: x-large;\n}\n\nion-button {\n  background-color: Transparent;\n  border: none;\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluLWhlYWRlci9DOlxcVXNlcnNcXERhbmFlXFxEZXNrdG9wXFxGWVBKXFxTTFAtUy0tQS9zcmNcXGFwcFxcY29tcG9uZW50c1xcbWFpbi1oZWFkZXJcXG1haW4taGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL21haW4taGVhZGVyL21haW4taGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDSSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21haW4taGVhZGVyL21haW4taGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWljb24ge1xyXG4gIGNvbG9yOmJsYWNrO1xyXG4gIGZvbnQtc2l6ZTp4LWxhcmdlO1xyXG59XHJcblxyXG5pb24tYnV0dG9ue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogVHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBvdXRsaW5lOm5vbmU7XHJcbn0iLCJpb24taWNvbiB7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xufVxuXG5pb24tYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogVHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/main-header/main-header.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/main-header/main-header.component.ts ***!
    \*****************************************************************/

  /*! exports provided: MainHeaderComponent */

  /***/
  function srcAppComponentsMainHeaderMainHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainHeaderComponent", function () {
      return MainHeaderComponent;
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


    var _modalpopup_modalpopup_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../modalpopup/modalpopup.page */
    "./src/app/modalpopup/modalpopup.page.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _components_popovers_headerpop_headerpop_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../components/popovers/headerpop/headerpop.component */
    "./src/app/components/popovers/headerpop/headerpop.component.ts");

    var MainHeaderComponent = /*#__PURE__*/function () {
      function MainHeaderComponent(popoverController, modalController) {
        _classCallCheck(this, MainHeaderComponent);

        this.popoverController = popoverController;
        this.modalController = modalController;
      }

      _createClass(MainHeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "OpenModal",
        value: function OpenModal() {
          this.modalController.create({
            component: _modalpopup_modalpopup_page__WEBPACK_IMPORTED_MODULE_2__["ModalpopupPage"]
          }).then(function (modalElement) {
            modalElement.present();
          });
        }
      }, {
        key: "presentPopover",
        value: function presentPopover(ev) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var popover, _yield$popover$onDidD, role;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.popoverController.create({
                      component: _components_popovers_headerpop_headerpop_component__WEBPACK_IMPORTED_MODULE_4__["HeaderpopComponent"],
                      cssClass: "HeaderPopover",
                      event: ev,
                      translucent: true,
                      showBackdrop: false,
                      backdropDismiss: true
                    });

                  case 2:
                    popover = _context.sent;
                    _context.next = 5;
                    return popover.present();

                  case 5:
                    _context.next = 7;
                    return popover.onDidDismiss();

                  case 7:
                    _yield$popover$onDidD = _context.sent;
                    role = _yield$popover$onDidD.role;
                    console.log('onDidDismiss resolved with role', role);

                  case 10:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return MainHeaderComponent;
    }();

    MainHeaderComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }];
    };

    MainHeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-main-header',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./main-header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/main-header/main-header.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./main-header.component.scss */
      "./src/app/components/main-header/main-header.component.scss"))["default"]]
    })], MainHeaderComponent);
    /***/
  },

  /***/
  "./src/app/components/popovers/headerpop/headerpop.component.scss":
  /*!************************************************************************!*\
    !*** ./src/app/components/popovers/headerpop/headerpop.component.scss ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsPopoversHeaderpopHeaderpopComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-item {\n  text-align: center;\n  border-color: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb3BvdmVycy9oZWFkZXJwb3AvQzpcXFVzZXJzXFxEYW5hZVxcRGVza3RvcFxcRllQSlxcU0xQLVMtLUEvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHBvcG92ZXJzXFxoZWFkZXJwb3BcXGhlYWRlcnBvcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9wb3BvdmVycy9oZWFkZXJwb3AvaGVhZGVycG9wLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSx5QkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wb3BvdmVycy9oZWFkZXJwb3AvaGVhZGVycG9wLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW0ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufSIsImlvbi1pdGVtIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/popovers/headerpop/headerpop.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/components/popovers/headerpop/headerpop.component.ts ***!
    \**********************************************************************/

  /*! exports provided: HeaderpopComponent */

  /***/
  function srcAppComponentsPopoversHeaderpopHeaderpopComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderpopComponent", function () {
      return HeaderpopComponent;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var HeaderpopComponent = /*#__PURE__*/function () {
      function HeaderpopComponent(popover) {
        _classCallCheck(this, HeaderpopComponent);

        this.popover = popover;
      }

      _createClass(HeaderpopComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ClosePopover",
        value: function ClosePopover() {
          this.popover.dismiss();
        }
      }]);

      return HeaderpopComponent;
    }();

    HeaderpopComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]
      }];
    };

    HeaderpopComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-headerpop',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./headerpop.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/popovers/headerpop/headerpop.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./headerpop.component.scss */
      "./src/app/components/popovers/headerpop/headerpop.component.scss"))["default"]]
    })], HeaderpopComponent);
    /***/
  },

  /***/
  "./src/app/components/session-header/session-header.page.scss":
  /*!********************************************************************!*\
    !*** ./src/app/components/session-header/session-header.page.scss ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsSessionHeaderSessionHeaderPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2Vzc2lvbi1oZWFkZXIvc2Vzc2lvbi1oZWFkZXIucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/session-header/session-header.page.ts":
  /*!******************************************************************!*\
    !*** ./src/app/components/session-header/session-header.page.ts ***!
    \******************************************************************/

  /*! exports provided: SessionHeaderPage */

  /***/
  function srcAppComponentsSessionHeaderSessionHeaderPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SessionHeaderPage", function () {
      return SessionHeaderPage;
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


    var _services_assignments_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/assignments.service */
    "./src/app/services/assignments.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _pages_shared_module_popover_participant_view_popover_participant_view_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../pages/shared-module/popover-participant-view/popover-participant-view.page */
    "./src/app/pages/shared-module/popover-participant-view/popover-participant-view.page.ts");
    /* harmony import */


    var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/http/ngx */
    "./node_modules/@ionic-native/http/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _model_global_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../model/global-api */
    "./src/app/model/global-api.ts");
    /* harmony import */


    var _services_network_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../services/network.service */
    "./src/app/services/network.service.ts");
    /* harmony import */


    var _services_global_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../services/global.service */
    "./src/app/services/global.service.ts");

    var SessionHeaderPage = /*#__PURE__*/function () {
      function SessionHeaderPage(globalService, router, activatedRoute, nativeHttp, assignmentsService, networkService, popoverController, storage) {
        _classCallCheck(this, SessionHeaderPage);

        this.globalService = globalService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.nativeHttp = nativeHttp;
        this.assignmentsService = assignmentsService;
        this.networkService = networkService;
        this.popoverController = popoverController;
        this.storage = storage;
      }

      _createClass(SessionHeaderPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getSessionHeaderData();
          this.token = this.globalService.getselectedtoken();
          this.studentid = this.globalService.getselectedStudentId();
        }
        /*Get Session Header Data*/

      }, {
        key: "getSessionHeaderData",
        value: function getSessionHeaderData() {
          var _this = this;

          // Get the ID that was passed with the URL
          var id = this.activatedRoute.snapshot.paramMap.get('id');
          this.sessionid = id; //Global

          this.assignmentsService.setselectedsessionid(id);
          this.storage.get('mysession').then(function (val) {
            _this.sessionheaderdata = val;

            _this.assignmentsService.getselectedparticipantid();

            _this.assignmentsService.setselectedsessionheader(_this.sessionheaderdata);

            try {
              val.forEach(function (valor) {
                if (valor.session_Id == _this.assignmentsService.getselectedsessionid()) {
                  _this.sessionheaderdata = valor;
                  _this.initiatorid = valor.initiator_Id;

                  _this.assignmentsService.setselectedinitiatorid(_this.initiatorid); //console.log(this.initiatorid)


                  _this.assignmentsService.setselectedsessionheader(_this.sessionheaderdata);

                  _this.assignmentsService.setselectedsessionstatus(valor.session_Status);

                  console.log("Found Session Header!");
                }
              });
            } catch (error) {
              console.log(error);
            }
          });
        }
        /*End A Session*/

      }, {
        key: "EndSession",
        value: function EndSession() {
          var _this2 = this;

          if (this.networkService.online == false) {
            this.networkService.presentNetworkMsg();
          } else {
            this.assignmentsService.EndSessionConfirmation('Cancel', 'End').then(function (res) {
              if (res === 'End') {
                //POST Method
                _this2.LeaveSession();

                _this2.router.navigateByUrl('tabs/main');
              }
            });
          }
        }
        /*Leave A Session*/

      }, {
        key: "LeaveSession",
        value: function LeaveSession() {
          var _this3 = this;

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
          }).then(function (response) {
            try {
              response.data = JSON.parse(response.data);
              _this3.sessionheaderdata = response.data;

              _this3.storage.set('mysession', response.data);

              _this3.storage.set('assignmentdetails', response.data.assignments); // console.log(response.data)

            } catch (e) {
              console.error('JSON parsing error');
            }
          })["catch"](function (response) {
            // prints 403
            console.log(response.status); // prints Permission denied

            console.log(response);
          });
        }
        /*Pop up (View Participant)*/

      }, {
        key: "presentPopover",
        value: function presentPopover(ev) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var popover;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    if (!(this.networkService.online == false)) {
                      _context2.next = 4;
                      break;
                    }

                    this.networkService.presentNetworkMsg();
                    _context2.next = 10;
                    break;

                  case 4:
                    _context2.next = 6;
                    return this.popoverController.create({
                      component: _pages_shared_module_popover_participant_view_popover_participant_view_page__WEBPACK_IMPORTED_MODULE_6__["PopoverParticipantViewPage"],
                      event: ev
                    });

                  case 6:
                    popover = _context2.sent;
                    _context2.next = 9;
                    return popover.present();

                  case 9:
                    return _context2.abrupt("return", _context2.sent);

                  case 10:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return SessionHeaderPage;
    }();

    SessionHeaderPage.ctorParameters = function () {
      return [{
        type: _services_global_service__WEBPACK_IMPORTED_MODULE_10__["GlobalService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_7__["HTTP"]
      }, {
        type: _services_assignments_service__WEBPACK_IMPORTED_MODULE_2__["AssignmentsService"]
      }, {
        type: _services_network_service__WEBPACK_IMPORTED_MODULE_9__["NetworkService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PopoverController"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]
      }];
    };

    SessionHeaderPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-session-header',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./session-header.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/session-header/session-header.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./session-header.page.scss */
      "./src/app/components/session-header/session-header.page.scss"))["default"]]
    })], SessionHeaderPage);
    /***/
  },

  /***/
  "./src/app/modalpopup/modalpopup.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/modalpopup/modalpopup.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModalpopupModalpopupPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  --background: url(\"/assets/images/Profile.jpg\") no-repeat ;\n}\n\nion-toolbar {\n  --background: transparent;\n}\n\nion-label {\n  font-weight: bold;\n}\n\n.card {\n  margin: 0 auto;\n}\n\n.card .header {\n  height: 250px;\n}\n\n.card .header .avatar {\n  width: 160px;\n  height: 160px;\n  position: relative;\n  margin: 0 auto;\n}\n\n.card .header .avatar img {\n  display: block;\n  border-radius: 50%;\n  position: absolute;\n  bottom: calc(-1*(80px + 4px));\n  border: 8px solid #9Dc912;\n  background-color: #fff;\n}\n\n.card-body {\n  background-color: #ffffff;\n  padding: 30px;\n  height: calc(100vh - (200px + 56px));\n  overflow: hidden;\n}\n\n.card-body .user-meta {\n  padding-top: 40px;\n}\n\n.card-body .user-meta .playername {\n  font-size: 24px;\n  font-weight: 600;\n  color: #303940;\n}\n\n.card-body .user-meta .country {\n  font-size: 90%;\n  color: #949ea6;\n  text-transform: uppercase;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kYWxwb3B1cC9DOlxcVXNlcnNcXERhbmFlXFxEZXNrdG9wXFxGWVBKXFxTTFAtUy0tQS9zcmNcXGFwcFxcbW9kYWxwb3B1cFxcbW9kYWxwb3B1cC5wYWdlLnNjc3MiLCJzcmMvYXBwL21vZGFscG9wdXAvbW9kYWxwb3B1cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwREFBQTtBQ0NGOztBREtBO0VBQ0UseUJBQUE7QUNGRjs7QURLQTtFQUNFLGlCQUFBO0FDRkY7O0FES0E7RUFDRSxjQUFBO0FDRkY7O0FESUU7RUFDSSxhQUFBO0FDRk47O0FES007RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0hWOztBREtVO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7QUNIZDs7QURTQTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLG9DQUFBO0VBQ0EsZ0JBQUE7QUNORjs7QURRRTtFQUNJLGlCQUFBO0FDTk47O0FEUU07RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDTlY7O0FEU007RUFDSSxjQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQ1BWIiwiZmlsZSI6InNyYy9hcHAvbW9kYWxwb3B1cC9tb2RhbHBvcHVwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAtLWJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWFnZXMvUHJvZmlsZS5qcGcnKSBuby1yZXBlYXQgO1xyXG4gIC8vIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAvLyBoZWlnaHQ6IDEwMCU7XHJcbiAgLy8gd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmlvbi10b29sYmFyIHtcclxuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG5pb24tbGFiZWwge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcblxyXG4gIC5oZWFkZXIge1xyXG4gICAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgICBcclxuXHJcbiAgICAgIC5hdmF0YXIge1xyXG4gICAgICAgICAgd2lkdGg6IDE2MHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAxNjBweDtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG5cclxuICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICBib3R0b206IGNhbGMoLTEqKDgwcHggKyA0cHgpKTtcclxuICAgICAgICAgICAgICBib3JkZXI6IDhweCBzb2xpZCAjOURjOTEyO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5jYXJkLWJvZHkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgcGFkZGluZzogMzBweDtcclxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAoMjAwcHggKyA1NnB4KSk7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgLnVzZXItbWV0YSB7XHJcbiAgICAgIHBhZGRpbmctdG9wOiA0MHB4O1xyXG5cclxuICAgICAgLnBsYXllcm5hbWUge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgIGNvbG9yOiAjMzAzOTQwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY291bnRyeSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDkwJTtcclxuICAgICAgICAgIGNvbG9yOiAjOTQ5ZWE2O1xyXG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICB9XHJcbiAgfVxyXG59IiwiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvaW1hZ2VzL1Byb2ZpbGUuanBnXCIpIG5vLXJlcGVhdCA7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuaW9uLWxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5jYXJkIHtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4uY2FyZCAuaGVhZGVyIHtcbiAgaGVpZ2h0OiAyNTBweDtcbn1cbi5jYXJkIC5oZWFkZXIgLmF2YXRhciB7XG4gIHdpZHRoOiAxNjBweDtcbiAgaGVpZ2h0OiAxNjBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5jYXJkIC5oZWFkZXIgLmF2YXRhciBpbWcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogY2FsYygtMSooODBweCArIDRweCkpO1xuICBib3JkZXI6IDhweCBzb2xpZCAjOURjOTEyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG4uY2FyZC1ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZzogMzBweDtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gKDIwMHB4ICsgNTZweCkpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmNhcmQtYm9keSAudXNlci1tZXRhIHtcbiAgcGFkZGluZy10b3A6IDQwcHg7XG59XG4uY2FyZC1ib2R5IC51c2VyLW1ldGEgLnBsYXllcm5hbWUge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMzAzOTQwO1xufVxuLmNhcmQtYm9keSAudXNlci1tZXRhIC5jb3VudHJ5IHtcbiAgZm9udC1zaXplOiA5MCU7XG4gIGNvbG9yOiAjOTQ5ZWE2O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBtYXJnaW46IDAgYXV0bztcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/modalpopup/modalpopup.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/modalpopup/modalpopup.page.ts ***!
    \***********************************************/

  /*! exports provided: ModalpopupPage */

  /***/
  function srcAppModalpopupModalpopupPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalpopupPage", function () {
      return ModalpopupPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");

    var ModalpopupPage = /*#__PURE__*/function () {
      // displayPostData: any;
      function ModalpopupPage(modalController, storage) {
        _classCallCheck(this, ModalpopupPage);

        this.modalController = modalController;
        this.storage = storage;
      }

      _createClass(ModalpopupPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.profile();
        }
      }, {
        key: "CloseModal",
        value: function CloseModal() {
          this.modalController.dismiss();
        }
      }, {
        key: "profile",
        value: function profile() {
          var _this4 = this;

          this.storage.get('authlogin').then(function (val) {
            console.log(val);
            _this4.displayUserData = val;
            _this4.username = val.username;
            _this4.levelInfo_DisplayName = val.levelInfo_DisplayName;
            _this4.schoolInfo_Name = val.schoolInfo_Name;
          });
        }
      }]);

      return ModalpopupPage;
    }();

    ModalpopupPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]
      }];
    };

    ModalpopupPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-modalpopup',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./modalpopup.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modalpopup/modalpopup.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./modalpopup.page.scss */
      "./src/app/modalpopup/modalpopup.page.scss"))["default"]]
    })], ModalpopupPage);
    /***/
  }
}]);
//# sourceMappingURL=default~pages-main-main-module~pages-session-assignment-create-session-assignment-create-module~page~a3c115ef-es5.js.map