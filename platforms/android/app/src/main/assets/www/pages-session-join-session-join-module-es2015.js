(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-session-join-session-join-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/session-join/session-join.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/session-join/session-join.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--After Tutor Accept (Session not yet end,student not yet join)-->\r\n<app-main-header></app-main-header>\r\n<ion-content>\r\n  <ion-refresher slot='fixed' (ionRefresh)='UpdateData($event)'>\r\n    <ion-refresher-content></ion-refresher-content>\r\n    </ion-refresher>\r\n  <!-- <ul class=\"breadcrumb\" id=\"breadcrumbs\">\r\n    <li style=\"display: inline;\"><a href=\"/tabs/main\"> Home </a><i class=\"ion-chevron-right\"></i></li>\r\n    <li style=\"display: inline;\" class=\"active\"> Join Session </li>\r\n  </ul>     -->\r\n  <div class=\"fourthcontent\">\r\n    <div *ngIf=\"boolHaveSession\" style=\"font-size: larger;\"><b>{{NoSessionText}}</b></div>\r\n  <ion-list *ngFor=\"let item of textdisplay; let i = index\" class=\"accordion-list\" lines=\"none\" detail=\"false\" >\r\n    <ion-grid tappable style=\"background-color: #99A7C2;border-radius: 15px;\" [ngClass]=\"{'section-active': item.open, 'section': !item.open}\">\r\n      <ion-row>\r\n        <ion-col size=\"10\">\r\n            <b class=\"defaultgreenfont\" style=\"font-size: large;\">{{item.session_Title}}<br/></b>\r\n            <ion-label class=\"defaultgreenfont\">{{item.subject_DisplayName}}({{item.level_DisplayName}})<br/></ion-label>\r\n              <ion-label class=\"defaultgreenfont\">Participant({{item.num_Of_Participants}}):[SV]{{item.tutor_Name}}; [IS]{{item.initiator_Name}}<br/></ion-label> \r\n          </ion-col> \r\n          <ion-col size=\"2\">\r\n      <button class=\"buttonjoinsession\" (click)=\"CallAPIJoinSession(item.session_Id)\"><b>Join</b></button>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <br/>\r\n      <div style=\"color: black; position: absolute;left: 50%;\" (click)=\"toggleSection(i)\" [ngClass] =\"{'section-active' : item.open, 'section': !item.open}\">\r\n        <ion-icon src=\"assets/images/063-down-arrow-5.svg\" (click)=\"SanitizeImage(item.session_Question_Data)\" *ngIf=\"!item.open\" ></ion-icon>\r\n        <ion-icon src=\"assets/images/006-up-arrow-6.svg\" *ngIf=\"item.open\" style=\"color: black;\"></ion-icon>\r\n   </div> \r\n    </ion-row>\r\n  </ion-grid>\r\n    <div *ngIf=\"item.open\">\r\n          <div style=\"border:dashed #4B5C7C;\">\r\n            <p *ngIf=\"item.session_Question_Data!=null\"><img [src]=\"imgdisplayinapp\" alt=\"Image\" onerror=\"this.style.display='none'\"/></p> <!--Question Image-->\r\n            <label>{{item.session_Question_Text}}</label> <!--Question Text-->\r\n        </div>\r\n    </div>\r\n</ion-list>\r\n</div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/session-join/session-join-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/session-join/session-join-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: SessionJoinPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionJoinPageRoutingModule", function() { return SessionJoinPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _session_join_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./session-join.page */ "./src/app/pages/session-join/session-join.page.ts");




const routes = [
    {
        path: '',
        component: _session_join_page__WEBPACK_IMPORTED_MODULE_3__["SessionJoinPage"]
    }
];
let SessionJoinPageRoutingModule = class SessionJoinPageRoutingModule {
};
SessionJoinPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SessionJoinPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/session-join/session-join.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/session-join/session-join.module.ts ***!
  \***********************************************************/
/*! exports provided: SessionJoinPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionJoinPageModule", function() { return SessionJoinPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _session_join_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./session-join-routing.module */ "./src/app/pages/session-join/session-join-routing.module.ts");
/* harmony import */ var _session_join_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./session-join.page */ "./src/app/pages/session-join/session-join.page.ts");
/* harmony import */ var _components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components.module */ "./src/app/components.module.ts");








let SessionJoinPageModule = class SessionJoinPageModule {
};
SessionJoinPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _session_join_routing_module__WEBPACK_IMPORTED_MODULE_5__["SessionJoinPageRoutingModule"],
            _components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_session_join_page__WEBPACK_IMPORTED_MODULE_6__["SessionJoinPage"]]
    })
], SessionJoinPageModule);



/***/ }),

/***/ "./src/app/pages/session-join/session-join.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/session-join/session-join.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".fourthcontent {\n  padding: 5% 2% 1% 2%;\n}\n\n.accordion-list {\n  padding: 0 1% 0 1%;\n  margin-bottom: 0.5em;\n}\n\n.accordion-list .section,\n.accordion-list .section-active {\n  --min-height: 6em;\n}\n\n.section {\n  --ion-item-background:#8091B3;\n}\n\n.section-active {\n  --ion-item-background:#8091B3;\n}\n\n.buttonjoinsession {\n  font-size: medium;\n  position: absolute;\n  padding: 6px;\n  margin-top: 30px;\n  background-color: #4B5C7C;\n  border-radius: 10px;\n  color: white;\n}\n\n.defaultgreenfont {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2Vzc2lvbi1qb2luL0M6XFxVc2Vyc1xcRGFuYWVcXERlc2t0b3BcXEZZUEpcXFNMUC1TLS1BL3NyY1xcYXBwXFxwYWdlc1xcc2Vzc2lvbi1qb2luXFxzZXNzaW9uLWpvaW4ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9zZXNzaW9uLWpvaW4vc2Vzc2lvbi1qb2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0FDQ0Y7O0FERUE7RUFDSSxrQkFBQTtFQUNBLG9CQUFBO0FDQ0o7O0FEQUk7O0VBRUksaUJBQUE7QUNFUjs7QURDRTtFQUNFLDZCQUFBO0FDRUo7O0FEQUU7RUFDQyw2QkFBQTtBQ0dIOztBRERFO0VBQ0csaUJBQUE7RUFDRCxrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDSUo7O0FERkU7RUFDRSxZQUFBO0FDS0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zZXNzaW9uLWpvaW4vc2Vzc2lvbi1qb2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3VydGhjb250ZW50e1xyXG4gIHBhZGRpbmc6IDUlIDIlIDElIDIlO1xyXG59XHJcblxyXG4uYWNjb3JkaW9uLWxpc3Qge1xyXG4gICAgcGFkZGluZzogMCAxJSAwIDElO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC41ZW07XHJcbiAgICAuc2VjdGlvbixcclxuICAgIC5zZWN0aW9uLWFjdGl2ZSB7XHJcbiAgICAgICAgLS1taW4taGVpZ2h0OiA2ZW07XHJcbiAgICB9XHJcbn1cclxuICAuc2VjdGlvbntcclxuICAgIC0taW9uLWl0ZW0tYmFja2dyb3VuZDojODA5MUIzO1xyXG4gIH1cclxuICAuc2VjdGlvbi1hY3RpdmV7XHJcbiAgIC0taW9uLWl0ZW0tYmFja2dyb3VuZDojODA5MUIzO1xyXG4gIH1cclxuICAuYnV0dG9uam9pbnNlc3Npb257XHJcbiAgICAgZm9udC1zaXplOm1lZGl1bTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHBhZGRpbmc6IDZweDtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEI1QzdDO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgLmRlZmF1bHRncmVlbmZvbnR7XHJcbiAgICBjb2xvcjpibGFjaztcclxuICB9XHJcbiBcclxuICAiLCIuZm91cnRoY29udGVudCB7XG4gIHBhZGRpbmc6IDUlIDIlIDElIDIlO1xufVxuXG4uYWNjb3JkaW9uLWxpc3Qge1xuICBwYWRkaW5nOiAwIDElIDAgMSU7XG4gIG1hcmdpbi1ib3R0b206IDAuNWVtO1xufVxuLmFjY29yZGlvbi1saXN0IC5zZWN0aW9uLFxuLmFjY29yZGlvbi1saXN0IC5zZWN0aW9uLWFjdGl2ZSB7XG4gIC0tbWluLWhlaWdodDogNmVtO1xufVxuXG4uc2VjdGlvbiB7XG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDojODA5MUIzO1xufVxuXG4uc2VjdGlvbi1hY3RpdmUge1xuICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6IzgwOTFCMztcbn1cblxuLmJ1dHRvbmpvaW5zZXNzaW9uIHtcbiAgZm9udC1zaXplOiBtZWRpdW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcGFkZGluZzogNnB4O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEI1QzdDO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5kZWZhdWx0Z3JlZW5mb250IHtcbiAgY29sb3I6IGJsYWNrO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/session-join/session-join.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/session-join/session-join.page.ts ***!
  \*********************************************************/
/*! exports provided: SessionJoinPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionJoinPage", function() { return SessionJoinPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _services_network_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/network.service */ "./src/app/services/network.service.ts");
/* harmony import */ var _services_assignments_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/assignments.service */ "./src/app/services/assignments.service.ts");
/* harmony import */ var _model_global_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../model/global-api */ "./src/app/model/global-api.ts");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/global.service */ "./src/app/services/global.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");











let SessionJoinPage = class SessionJoinPage {
    constructor(globalService, platform, toastController, loadingController, dms, nativeHttp, router, assignmentsService, activatedRoute, storage, networkService) {
        this.globalService = globalService;
        this.platform = platform;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.dms = dms;
        this.nativeHttp = nativeHttp;
        this.router = router;
        this.assignmentsService = assignmentsService;
        this.activatedRoute = activatedRoute;
        this.storage = storage;
        this.networkService = networkService;
        this.boolHaveSession = false;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.token = this.globalService.getselectedtoken();
            this.studentid = this.globalService.getselectedStudentId();
            this.CallAPIGetPublicSessionStudentNotYetJoin();
            this.bread = 1;
            if (this.textdisplay == null) {
                this.presentLoading();
            }
            else {
                this.loading.dismiss();
            }
            ;
            console.log(' this is the student id', this.studentid, 'this is token', this.token);
        });
    }
    ionViewDidEnter() {
        this.platform.backButton.subscribeWithPriority(10, () => {
            console.log('Handler was called!');
            this.router.navigateByUrl('tabs/main');
        });
    }
    ionViewWillLeave() {
        this.loading.dismiss();
        this.toastController.dismiss();
        this.bread = 0;
    }
    UpdateData(event) {
        this.token = this.globalService.getselectedtoken();
        this.studentid = this.globalService.getselectedStudentId();
        this.nativeHttp.setDataSerializer('json');
        let header = { 'Accept': 'application/json', 'Content-Type': 'application/json' };
        let fetchinfo = { "Authentication_Token": this.token, "User_Id": this.studentid, "inDepth": "Y" };
        this.nativeHttp.post(_model_global_api__WEBPACK_IMPORTED_MODULE_6__["apiurl"].apiUrl + 'session/ListAvailableSessionsToJoin', fetchinfo, header).then(response => {
            try {
                response.data = JSON.parse(response.data);
                this.storage.set('joinsession', response.data).then(val => {
                    this.storage.get('joinsession').then((val) => {
                        this.textdisplay = val;
                        this.loading.dismiss();
                        event.target.complete();
                    });
                });
            }
            catch (e) {
                console.error('JSON parsing error');
                this.assignmentsService.presentError();
                setTimeout(() => {
                    this.loading.dismiss();
                    event.target.complete();
                    this.router.navigateByUrl('tabs/main');
                }, 3000);
            }
        }).catch(response => {
            // prints 403
            console.log(response.status + "error1");
            // prints Permission denied
            console.log(response.error + "error2");
            this.assignmentsService.presentError();
            setTimeout(() => {
                this.loading.dismiss();
                event.target.complete();
                this.router.navigateByUrl('tabs/main');
            }, 3000);
        });
    }
    CallAPIGetPublicSessionStudentNotYetJoin() {
        this.token = this.globalService.getselectedtoken();
        this.studentid = this.globalService.getselectedStudentId();
        this.nativeHttp.setDataSerializer('json');
        let header = { 'Accept': 'application/json', 'Content-Type': 'application/json' };
        let fetchinfo = { "Authentication_Token": this.token, "User_Id": this.studentid, "inDepth": "Y" };
        this.nativeHttp.post(_model_global_api__WEBPACK_IMPORTED_MODULE_6__["apiurl"].apiUrl + 'session/ListAvailableSessionsToJoin', fetchinfo, header).then(response => {
            try {
                response.data = JSON.parse(response.data);
                this.storage.set('joinsession', response.data).then(val => {
                    this.storage.get('joinsession').then((val) => {
                        this.textdisplay = val;
                        console.log('this is text display', this.textdisplay);
                        if (this.textdisplay == 0) {
                            if (this.bread == 1) {
                                this.loading.dismiss();
                                this.presentToast();
                            }
                            else {
                                console.log('continue ');
                                this.loading.dismiss();
                            }
                        }
                        else {
                        }
                        this.loading.dismiss();
                    });
                });
            }
            catch (e) {
                console.error('JSON parsing error');
                this.assignmentsService.presentError();
                setTimeout(() => {
                    this.loading.dismiss();
                    this.router.navigateByUrl('tabs/main');
                }, 3000);
            }
        }).catch(response => {
            // prints 403
            console.log(response.status + "error1");
            // prints Permission denied
            console.log(response.error + "error2");
            this.assignmentsService.presentError();
            setTimeout(() => {
                this.loading.dismiss();
                this.router.navigateByUrl('tabs/main');
            }, 3000);
        });
    }
    toggleSection(index) {
        this.textdisplay[index].open = !this.textdisplay[index].open;
        this.textdisplay
            .filter((item, itemIndex) => itemIndex != index)
            .map(item => item.open = false);
    }
    SanitizeImage(imagefromAPI) {
        this.imgdisplayinapp = this.display(imagefromAPI);
        console.log(this.imgdisplayinapp);
    }
    //Image Sanitize
    display(bImg) {
        return this.dms.bypassSecurityTrustUrl("data:image/jpeg;base64, " + bImg);
    }
    presentToast() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'No session can be found currently ',
                duration: 7000,
                position: 'middle'
            });
            toast.present();
        });
    }
    ToastError() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Error: Database Error',
                duration: 7000,
                position: 'middle'
            });
            toast.present();
        });
    }
    presentLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Prepare a loading controller
            this.loading = yield this.loadingController.create({
                message: 'Please Wait',
                cssClass: 'custom-loading',
                duration: 60000,
                backdropDismiss: false
            });
            // Present the loading controller
            yield this.loading.present();
            setTimeout(() => {
                if (this.textdisplay == null) {
                    this.ToastError();
                    console.log('fix database');
                }
            }, 60000);
        });
    }
    CallAPIJoinSession(sessionid) {
        {
            if (this.networkService.online == false) {
                this.networkService.presentNetworkMsg();
                this.router.navigateByUrl('tabs/main/session-join');
            }
            else {
                this.nativeHttp.setDataSerializer('json');
                this.nativeHttp.post(_model_global_api__WEBPACK_IMPORTED_MODULE_6__["apiurl"].apiUrl + 'session/participant_requestJoin', {
                    "Authentication_Token": this.token,
                    "Student_Id": this.studentid,
                    "Session_Id": sessionid,
                }, {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                })
                    .then(response => {
                    try {
                        response.data = JSON.parse(response.data);
                        console.log(response.data);
                        this.assignmentsService.presentJoinSession('Ok').then((res) => {
                            if (res === 'Ok') {
                                this.storage.set('joinsession', response.data);
                                this.router.navigateByUrl('tabs/main');
                            }
                        });
                    }
                    catch (e) {
                        console.error('JSON parsing error');
                        this.assignmentsService.presentError();
                        setTimeout(() => {
                            this.loading.dismiss();
                            this.router.navigateByUrl('tabs/main');
                        }, 3000);
                    }
                })
                    .catch(response => {
                    // prints 403
                    console.log(response.status);
                    // prints Permission denied
                    console.log(response.error);
                    this.assignmentsService.presentError();
                    setTimeout(() => {
                        this.loading.dismiss();
                        this.router.navigateByUrl('tabs/main');
                    }, 3000);
                });
            }
        }
    }
};
SessionJoinPage.ctorParameters = () => [
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_9__["GlobalService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["LoadingController"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"] },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_7__["HTTP"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_assignments_service__WEBPACK_IMPORTED_MODULE_5__["AssignmentsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
    { type: _services_network_service__WEBPACK_IMPORTED_MODULE_4__["NetworkService"] }
];
SessionJoinPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-session-join',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./session-join.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/session-join/session-join.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./session-join.page.scss */ "./src/app/pages/session-join/session-join.page.scss")).default]
    })
], SessionJoinPage);

// xing yee code backup
// CallAPIGetPublicSessionStudentNotYetJoin(){
//   this.assignmentsService.getListAvailableSessionsToJoin();
//   this.storage.get('joinsession').then((val) => {
//     if(val==0){
//       this.boolHaveSession=true;
//       this.NoSessionText="Currently, there is no available session"
//      }
//      else if(val==1){
//        this.textdisplay=[val];
//      }d
//      else{
//      this.textdisplay=val;
//      }
//     });
// }


/***/ })

}]);
//# sourceMappingURL=pages-session-join-session-join-module-es2015.js.map