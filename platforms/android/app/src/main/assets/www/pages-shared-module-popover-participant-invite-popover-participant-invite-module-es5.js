function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-shared-module-popover-participant-invite-popover-participant-invite-module"], {
  /***/
  "./node_modules/ng2-search-filter/__ivy_ngcc__/ng2-search-filter.js":
  /*!**************************************************************************!*\
    !*** ./node_modules/ng2-search-filter/__ivy_ngcc__/ng2-search-filter.js ***!
    \**************************************************************************/

  /*! exports provided: Ng2SearchPipeModule, Ng2SearchPipe */

  /***/
  function node_modulesNg2SearchFilter__ivy_ngcc__Ng2SearchFilterJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Ng2SearchPipeModule", function () {
      return Ng2SearchPipeModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Ng2SearchPipe", function () {
      return Ng2SearchPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var Ng2SearchPipe = /*#__PURE__*/function () {
      function Ng2SearchPipe() {
        _classCallCheck(this, Ng2SearchPipe);
      }

      _createClass(Ng2SearchPipe, [{
        key: "transform",
        value:
        /**
         * @param {?} items object from array
         * @param {?} term term's search
         * @return {?}
         */
        function transform(items, term) {
          if (!term || !items) return items;
          return Ng2SearchPipe.filter(items, term);
        }
        /**
         *
         * @param {?} items List of items to filter
         * @param {?} term  a string term to compare with every property of the list
         *
         * @return {?}
         */

      }], [{
        key: "filter",
        value: function filter(items, term) {
          var
          /** @type {?} */
          toCompare = term.toLowerCase();
          /**
           * @param {?} item
           * @param {?} term
           * @return {?}
           */

          function checkInside(item, term) {
            for (var
            /** @type {?} */
            property in item) {
              if (item[property] === null || item[property] == undefined) {
                continue;
              }

              if (typeof item[property] === 'object') {
                if (checkInside(item[property], term)) {
                  return true;
                }
              }

              if (item[property].toString().toLowerCase().includes(toCompare)) {
                return true;
              }
            }

            return false;
          }

          return items.filter(function (item) {
            return checkInside(item, term);
          });
        }
      }]);

      return Ng2SearchPipe;
    }();

    Ng2SearchPipe.ɵfac = function Ng2SearchPipe_Factory(t) {
      return new (t || Ng2SearchPipe)();
    };

    Ng2SearchPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "filter",
      type: Ng2SearchPipe,
      pure: false
    });
    Ng2SearchPipe.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: Ng2SearchPipe,
      factory: Ng2SearchPipe.ɵfac
    });
    /**
     * @nocollapse
     */

    Ng2SearchPipe.ctorParameters = function () {
      return [];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Ng2SearchPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'filter',
          pure: false
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], null, null);
    })();

    var Ng2SearchPipeModule = function Ng2SearchPipeModule() {
      _classCallCheck(this, Ng2SearchPipeModule);
    };

    Ng2SearchPipeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: Ng2SearchPipeModule
    });
    Ng2SearchPipeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function Ng2SearchPipeModule_Factory(t) {
        return new (t || Ng2SearchPipeModule)();
      }
    });
    /**
     * @nocollapse
     */

    Ng2SearchPipeModule.ctorParameters = function () {
      return [];
    };

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](Ng2SearchPipeModule, {
        declarations: [Ng2SearchPipe],
        exports: [Ng2SearchPipe]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Ng2SearchPipeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [Ng2SearchPipe],
          exports: [Ng2SearchPipe]
        }]
      }], null, null);
    })();
    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=ng2-search-filter.js.map

    /***/

  },

  /***/
  "./src/app/pages/shared-module/popover-participant-invite/popover-participant-invite-routing.module.ts":
  /*!*************************************************************************************************************!*\
    !*** ./src/app/pages/shared-module/popover-participant-invite/popover-participant-invite-routing.module.ts ***!
    \*************************************************************************************************************/

  /*! exports provided: PopoverParticipantInvitePageRoutingModule */

  /***/
  function srcAppPagesSharedModulePopoverParticipantInvitePopoverParticipantInviteRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PopoverParticipantInvitePageRoutingModule", function () {
      return PopoverParticipantInvitePageRoutingModule;
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


    var _popover_participant_invite_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./popover-participant-invite.page */
    "./src/app/pages/shared-module/popover-participant-invite/popover-participant-invite.page.ts");

    var routes = [{
      path: '',
      component: _popover_participant_invite_page__WEBPACK_IMPORTED_MODULE_3__["PopoverParticipantInvitePage"]
    }];

    var PopoverParticipantInvitePageRoutingModule = function PopoverParticipantInvitePageRoutingModule() {
      _classCallCheck(this, PopoverParticipantInvitePageRoutingModule);
    };

    PopoverParticipantInvitePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PopoverParticipantInvitePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/shared-module/popover-participant-invite/popover-participant-invite.module.ts":
  /*!*****************************************************************************************************!*\
    !*** ./src/app/pages/shared-module/popover-participant-invite/popover-participant-invite.module.ts ***!
    \*****************************************************************************************************/

  /*! exports provided: PopoverParticipantInvitePageModule */

  /***/
  function srcAppPagesSharedModulePopoverParticipantInvitePopoverParticipantInviteModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PopoverParticipantInvitePageModule", function () {
      return PopoverParticipantInvitePageModule;
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


    var _popover_participant_invite_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./popover-participant-invite-routing.module */
    "./src/app/pages/shared-module/popover-participant-invite/popover-participant-invite-routing.module.ts");
    /* harmony import */


    var _popover_participant_invite_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./popover-participant-invite.page */
    "./src/app/pages/shared-module/popover-participant-invite/popover-participant-invite.page.ts");
    /* harmony import */


    var ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ng2-search-filter */
    "./node_modules/ng2-search-filter/__ivy_ngcc__/ng2-search-filter.js"); //Filter


    var PopoverParticipantInvitePageModule = function PopoverParticipantInvitePageModule() {
      _classCallCheck(this, PopoverParticipantInvitePageModule);
    };

    PopoverParticipantInvitePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__["Ng2SearchPipeModule"], _popover_participant_invite_routing_module__WEBPACK_IMPORTED_MODULE_5__["PopoverParticipantInvitePageRoutingModule"]],
      declarations: [_popover_participant_invite_page__WEBPACK_IMPORTED_MODULE_6__["PopoverParticipantInvitePage"]]
    })], PopoverParticipantInvitePageModule);
    /***/
  }
}]);
//# sourceMappingURL=pages-shared-module-popover-participant-invite-popover-participant-invite-module-es5.js.map