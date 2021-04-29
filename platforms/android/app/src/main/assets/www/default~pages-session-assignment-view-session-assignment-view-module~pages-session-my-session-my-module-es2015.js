(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-session-assignment-view-session-assignment-view-module~pages-session-my-session-my-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/session-my/session-my.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/session-my/session-my.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-main-header></app-main-header>\r\n<ion-content>\r\n  <ion-refresher slot='fixed' (ionRefresh)='UpdateData($event)'>\r\n  <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n  <!-- <ul class=\"breadcrumb\" id=\"breadcrumbs\">\r\n    <li style=\"display: inline;\"><a href=\"/tabs/main\"> Home </a><i class=\"ion-chevron-right\"></i></li>\r\n    <li style=\"display: inline;\" class=\"active\"> My Sessions </li>\r\n  </ul>     -->\r\n  <div class=\"fourthcontent\">\r\n    <div *ngIf=\"boolHaveSession\" style=\"font-size: larger;\"><b>{{NoSessionText}}</b></div>\r\n    <!--Session Not Yet Accepted By Tutor-->\r\n    <ion-list  *ngFor=\"let item of textdisplay; let i = index\" class=\"accordion-list\" lines=\"none\" detail=\"false\" >\r\n      <ion-grid tappable *ngIf=\"item.session_Status==this.sessionstatuspending\" style=\"background-color: #F9C7C8; border-radius: 15px;\" [ngClass]=\"{'section-active': item.open, 'section': !item.open}\">\r\n        <ion-row>\r\n          <ion-col size=\"9\">\r\n              <b class=\"defaultgreenfont\" style=\"font-size: large;\">{{item.session_Title}}<br/></b>\r\n              <ion-label style=\"color:#6F1A07;font-weight: bold;\">Awaiting Tutor to accept<br/></ion-label>\r\n              <ion-label *ngIf=\"item.session_Status==this.sessionstatuspending\" class=\"defaultgreenfont\">Participant({{item.num_Of_Participants}}): [IS]{{item.initiator_Name}}<br/></ion-label> \r\n            </ion-col> \r\n            <ion-col size=\"1\">\r\n        <button *ngIf=\"item.participant_Status==this.participantstausinviting\" class=\"buttondiscusspendingacceptsession\" (click)=\"CallAPIToAcceptInvitation(item.session_Id,item.participant_Id,item.initiator_Id)\"><b>Accept</b></button>\r\n        <button *ngIf=\"item.participant_Status==this.participantstatusaccepted\" class=\"buttondiscusspendingacceptsession\" (click)=\"StayonPage()\" [routerLink]=\"['/tabs/session-view/'+'session-view/', item.session_Id]\" routerDirection=\"forward\"><b>Discuss</b></button><!--participantstatusaccepted-->\r\n        <button *ngIf=\"item.participant_Status==this.participantstausrequest\"class=\"buttondiscusspendingacceptsession\" style=\"font-style: italic;\">Pending</button> \r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <br/>\r\n        <div style=\"color: black; position: absolute;left: 50%;\" (click)=\"toggleSection(i)\" [ngClass] =\"{'section-active' : item.open, 'section': !item.open}\">\r\n          <ion-icon src=\"assets/images/063-down-arrow-5.svg\" (click)=\"SanitizeImage(item.session_Question_Data)\" *ngIf=\"!item.open\" ></ion-icon>\r\n          <ion-icon src=\"assets/images/006-up-arrow-6.svg\" *ngIf=\"item.open\" style=\"color: black;\"></ion-icon>\r\n     </div> \r\n      </ion-row>\r\n    </ion-grid>\r\n    <!--Session Accepted By Tutor--><!--sessionstatusaccepted-->\r\n      <ion-grid tappable *ngIf=\"item.session_Status==this.sessionstatusaccepted\" style=\"background-color: #99A7C2;border-radius: 15px;\" [ngClass]=\"{'section-active': item.open, 'section': !item.open}\">\r\n        <ion-row>\r\n          <ion-col size=\"9\">\r\n              <b class=\"defaultgreenfont\" style=\"font-size: large;\">{{item.session_Title}}<br/></b>\r\n             \r\n              <ion-label class=\"defaultgreenfont\">{{item.subject_DisplayName}}({{item.level_DisplayName}})<br/></ion-label>\r\n              <ion-label class=\"defaultgreenfont\">Participant({{item.num_Of_Participants}}):[SV]{{item.tutor_Name}}; [IS]{{item.initiator_Name}}<br/></ion-label> \r\n            </ion-col> \r\n            <ion-col size=\"1\">\r\n        <button *ngIf=\"item.participant_Status==this.participantstausinviting\" class=\"buttondiscusspendingacceptsession\" (click)=\"CallAPIToAcceptInvitation(item.session_Id,item.participant_Id,item.initiator_Id)\" ><b>Accept</b></button>\r\n        <button *ngIf=\"item.participant_Status==this.participantstatusaccepted\" class=\"buttondiscusspendingacceptsession\" (click)=\"StayonPage()\" [routerLink]=\"['/tabs/session-view/'+'session-view/', item.session_Id]\" routerDirection=\"forward\"><b>Discuss</b></button><!--participantstatusaccepted-->\r\n        <button *ngIf=\"item.participant_Status==this.participantstausrequest\"class=\"buttondiscusspendingacceptsession\" style=\"font-style: italic;\">Pending</button> \r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <br/>\r\n        <div style=\"color: black; position: absolute;left: 50%;\" (click)=\"toggleSection(i)\" [ngClass] =\"{'section-active' : item.open, 'section': !item.open}\">\r\n          <ion-icon src=\"assets/images/063-down-arrow-5.svg\" (click)=\"SanitizeImage(item.session_Question_Data)\" *ngIf=\"!item.open\" ></ion-icon>\r\n          <ion-icon src=\"assets/images/006-up-arrow-6.svg\" *ngIf=\"item.open\" style=\"color: black;\"></ion-icon>\r\n     </div> \r\n      </ion-row>\r\n    </ion-grid>\r\n    <ion-grid *ngIf=\"item.session_Status==this.sessionstatusended\" tappable style=\"background-color: #b2b2b2;border-radius: 15px;\" [ngClass]=\"{'sectionEnd-active': item.open, 'sectionEnd': !item.open}\">\r\n      <ion-row>\r\n        <ion-col size=\"10\" style=\"color: #808080;\" >       \r\n         <b style=\"font-size: large;\">{{item.session_Title}}<br/></b>\r\n             <ion-label *ngIf=\"item.subject_DisplayName!=null&&item.subject_DisplayName!=null\">{{item.subject_DisplayName}}({{item.level_DisplayName}})<br/></ion-label>\r\n             <ion-label>Participant({{item.num_Of_Participants}}):<label *ngIf=\"item.tutor_Name!=null\">[SV]{{item.tutor_Name}};</label> [IS]{{item.initiator_Name}}<br/></ion-label> \r\n          </ion-col>\r\n        <ion-col size=\"2\">\r\n       <button class=\"buttonEndsession\" (click)=\"StayonPage()\" [routerLink]=\"['/tabs/session-view/'+'session-view/', item.session_Id]\" routerDirection=\"forward\"><b>Read</b></button><!--sessionstatusended; Session end time==participant left time-->\r\n       </ion-col>\r\n       </ion-row>\r\n       <ion-row>\r\n        <br/>\r\n         <div style=\"color: black; position: absolute;left: 50%;\" (click)=\"toggleSection(i)\"  routerDirection=\"forward\">\r\n           <ion-icon src=\"assets/images/063-down-arrow-5.svg\" (click)=\"SanitizeImage(item.session_Question_Data)\" *ngIf=\"!item.open\" ></ion-icon>\r\n           <ion-icon src=\"assets/images/006-up-arrow-6.svg\" *ngIf=\"item.open\" style=\"color: black;\"></ion-icon>\r\n      </div> \r\n      </ion-row>\r\n     </ion-grid>\r\n      <div *ngIf=\"item.open&&item.session_Status!=this.sessionstatusended\">\r\n            <div style=\"border:dashed #4B5C7C;\">\r\n              <p *ngIf=\"item.session_Question_Data!=null\"><img [src]=\"imgdisplayinapp\" alt=\"Image\" onerror=\"this.style.display='none'\"/></p>\r\n           <label>{{item.session_Question_Text}}</label> <!--Question Text-->\r\n          </div>\r\n      </div>\r\n      <div *ngIf=\"item.open&&item.session_Status==this.sessionstatusended\">\r\n        <div style=\"border:dashed #4B5C7C;\">\r\n          <p *ngIf=\"item.session_Question_Data!=null\"><img [src]=\"imgdisplayinapp\" alt=\"Image\" onerror=\"this.style.display='none'\"/></p> \r\n          <label>{{item.session_Question_Text}}</label> <!--Question Text-->\r\n      </div>\r\n    </div>\r\n  </ion-list>\r\n</div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/session-my/session-my.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/session-my/session-my.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".fourthcontent {\n  padding: 5% 2% 1% 2%;\n}\n\n.accordion-list {\n  padding: 0 1% 0 1%;\n  margin-bottom: 0.5em;\n}\n\n.accordion-list .section,\n.accordion-list .section-active {\n  --min-height: 6em;\n}\n\n.section {\n  --ion-item-background:#8091B3;\n}\n\n.section-active {\n  --ion-item-background:#8091B3;\n}\n\n.buttondiscusspendingacceptsession {\n  font-size: medium;\n  position: absolute;\n  padding: 6px;\n  margin-top: 30px;\n  background-color: #4B5C7C;\n  border-radius: 10px;\n  color: white;\n}\n\n.defaultgreenfont {\n  color: black;\n}\n\n.accordion-listEnd {\n  padding: 0 1% 0 1%;\n  margin-bottom: 0.5em;\n}\n\n.accordion-listEnd .sectionEnd,\n.accordion-listEnd .sectionEnd-active {\n  --min-height: 6em;\n}\n\n.sectionEnd {\n  --ion-item-background:#b2b2b2;\n}\n\n.sectionEnd-active {\n  --ion-item-background:#b2b2b2;\n}\n\n.buttonEndsession {\n  font-size: medium;\n  position: absolute;\n  padding: 6px;\n  margin-top: 30px;\n  background-color: #5C5C5C;\n  border-radius: 10px;\n  color: #808080;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2Vzc2lvbi1teS9DOlxcVXNlcnNcXERhbmFlXFxEZXNrdG9wXFxGWVBKXFxTTFAtUy0tQS9zcmNcXGFwcFxccGFnZXNcXHNlc3Npb24tbXlcXHNlc3Npb24tbXkucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9zZXNzaW9uLW15L3Nlc3Npb24tbXkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQUE7QUNDRjs7QURFQTtFQUNJLGtCQUFBO0VBQ0Esb0JBQUE7QUNDSjs7QURBSTs7RUFFSSxpQkFBQTtBQ0VSOztBRENFO0VBQ0UsNkJBQUE7QUNFSjs7QURERTtFQUNDLDZCQUFBO0FDSUg7O0FERkU7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNLSjs7QURIRTtFQUNFLFlBQUE7QUNNSjs7QURIRTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7QUNNSjs7QURMSTs7RUFFRSxpQkFBQTtBQ09OOztBREpFO0VBQ0UsNkJBQUE7QUNPSjs7QURMRTtFQUNDLDZCQUFBO0FDUUg7O0FETkU7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNTSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Nlc3Npb24tbXkvc2Vzc2lvbi1teS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm91cnRoY29udGVudHtcclxuICBwYWRkaW5nOiA1JSAyJSAxJSAyJTtcclxufVxyXG5cclxuLmFjY29yZGlvbi1saXN0IHtcclxuICAgIHBhZGRpbmc6IDAgMSUgMCAxJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNWVtO1xyXG4gICAgLnNlY3Rpb24sXHJcbiAgICAuc2VjdGlvbi1hY3RpdmUge1xyXG4gICAgICAgIC0tbWluLWhlaWdodDogNmVtO1xyXG4gICAgfVxyXG59XHJcbiAgLnNlY3Rpb257XHJcbiAgICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6IzgwOTFCMzsgIH1cclxuICAuc2VjdGlvbi1hY3RpdmV7XHJcbiAgIC0taW9uLWl0ZW0tYmFja2dyb3VuZDojODA5MUIzO1xyXG4gIH1cclxuICAuYnV0dG9uZGlzY3Vzc3BlbmRpbmdhY2NlcHRzZXNzaW9ue1xyXG4gICAgZm9udC1zaXplOm1lZGl1bTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHBhZGRpbmc6IDZweDtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEI1QzdDO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgLmRlZmF1bHRncmVlbmZvbnR7XHJcbiAgICBjb2xvcjpibGFja1xyXG4gIH1cclxuICAvL0VuZCBTZXNzaW9uXHJcbiAgLmFjY29yZGlvbi1saXN0RW5kIHtcclxuICAgIHBhZGRpbmc6IDAgMSUgMCAxJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNWVtO1xyXG4gICAgLnNlY3Rpb25FbmQsXHJcbiAgICAuc2VjdGlvbkVuZC1hY3RpdmUge1xyXG4gICAgICAtLW1pbi1oZWlnaHQ6IDZlbTtcclxuICAgIH1cclxufVxyXG4gIC5zZWN0aW9uRW5ke1xyXG4gICAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiNiMmIyYjI7XHJcbiAgfVxyXG4gIC5zZWN0aW9uRW5kLWFjdGl2ZXtcclxuICAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiNiMmIyYjI7XHJcbiAgfVxyXG4gIC5idXR0b25FbmRzZXNzaW9ue1xyXG4gICAgZm9udC1zaXplOm1lZGl1bTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHBhZGRpbmc6IDZweDtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUM1QzVDO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGNvbG9yOiAjODA4MDgwO1xyXG4gIH1cclxuICAiLCIuZm91cnRoY29udGVudCB7XG4gIHBhZGRpbmc6IDUlIDIlIDElIDIlO1xufVxuXG4uYWNjb3JkaW9uLWxpc3Qge1xuICBwYWRkaW5nOiAwIDElIDAgMSU7XG4gIG1hcmdpbi1ib3R0b206IDAuNWVtO1xufVxuLmFjY29yZGlvbi1saXN0IC5zZWN0aW9uLFxuLmFjY29yZGlvbi1saXN0IC5zZWN0aW9uLWFjdGl2ZSB7XG4gIC0tbWluLWhlaWdodDogNmVtO1xufVxuXG4uc2VjdGlvbiB7XG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDojODA5MUIzO1xufVxuXG4uc2VjdGlvbi1hY3RpdmUge1xuICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6IzgwOTFCMztcbn1cblxuLmJ1dHRvbmRpc2N1c3NwZW5kaW5nYWNjZXB0c2Vzc2lvbiB7XG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHBhZGRpbmc6IDZweDtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRCNUM3QztcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uZGVmYXVsdGdyZWVuZm9udCB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmFjY29yZGlvbi1saXN0RW5kIHtcbiAgcGFkZGluZzogMCAxJSAwIDElO1xuICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcbn1cbi5hY2NvcmRpb24tbGlzdEVuZCAuc2VjdGlvbkVuZCxcbi5hY2NvcmRpb24tbGlzdEVuZCAuc2VjdGlvbkVuZC1hY3RpdmUge1xuICAtLW1pbi1oZWlnaHQ6IDZlbTtcbn1cblxuLnNlY3Rpb25FbmQge1xuICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6I2IyYjJiMjtcbn1cblxuLnNlY3Rpb25FbmQtYWN0aXZlIHtcbiAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiNiMmIyYjI7XG59XG5cbi5idXR0b25FbmRzZXNzaW9uIHtcbiAgZm9udC1zaXplOiBtZWRpdW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcGFkZGluZzogNnB4O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUM1QzVDO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBjb2xvcjogIzgwODA4MDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/session-my/session-my.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/session-my/session-my.page.ts ***!
  \*****************************************************/
/*! exports provided: SessionMyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionMyPage", function() { return SessionMyPage; });
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











let SessionMyPage = class SessionMyPage {
    constructor(globalService, platform, dms, toastController, loadingController, router, assignmentsService, nativeHttp, activatedRoute, storage, networkService) {
        this.globalService = globalService;
        this.platform = platform;
        this.dms = dms;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.router = router;
        this.assignmentsService = assignmentsService;
        this.nativeHttp = nativeHttp;
        this.activatedRoute = activatedRoute;
        this.storage = storage;
        this.networkService = networkService;
        this.automaticClose = false;
        this.boolHaveSession = false;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.bread = 1;
            this.token = this.globalService.getselectedtoken();
            this.studentid = this.globalService.getselectedStudentId();
            this.CallAPIMysessions();
            if (this.textdisplay == null) {
                this.presentLoading();
            }
            else {
                console.log('data already found'),
                    this.loading.dismiss();
                console.log(this.bread);
            }
            ;
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
        this.bread = 0;
        this.toastController.dismiss();
    }
    UpdateData(event) {
        this.token = this.globalService.getselectedtoken();
        this.studentid = this.globalService.getselectedStudentId();
        this.nativeHttp.setDataSerializer('json');
        let header = { 'Accept': 'application/json', 'Content-Type': 'application/json' };
        let fetchinfo = { "Authentication_Token": this.token, "Student_Id": this.studentid, "inDepth": "Y" };
        this.nativeHttp.post(_model_global_api__WEBPACK_IMPORTED_MODULE_6__["apiurl"].apiUrl + 'session/mySessions', fetchinfo, header).then(response => {
            try {
                response.data = JSON.parse(response.data);
                this.storage.set('mysession', response.data).then(val => {
                    this.storage.get('mysession').then((val) => {
                        this.textdisplay = val;
                        this.sessionstatuspending = _model_global_api__WEBPACK_IMPORTED_MODULE_6__["SessionStatus"].SESSION_STATUS_PENDING;
                        this.sessionstatusaccepted = _model_global_api__WEBPACK_IMPORTED_MODULE_6__["SessionStatus"].SESSION_STATUS_ACCEPTED;
                        this.sessionstatusended = _model_global_api__WEBPACK_IMPORTED_MODULE_6__["SessionStatus"].SESSION_STATUS_ENDED;
                        this.participantstausinviting = _model_global_api__WEBPACK_IMPORTED_MODULE_6__["ParticipantStatus"].PARTICIPANT_STATUS_INVITING;
                        this.participantstausrequest = _model_global_api__WEBPACK_IMPORTED_MODULE_6__["ParticipantStatus"].PARTICIPANT_STATUS_REQUEST;
                        this.participantstatusaccepted = _model_global_api__WEBPACK_IMPORTED_MODULE_6__["ParticipantStatus"].PARTICIPANT_STATUS_ACCEPTED;
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
        })
            .catch(response => {
            // prints 403
            console.log(response.status + "error1");
            // prints Permission denieddd
            console.log(response.error + "error2");
            this.assignmentsService.presentError();
            setTimeout(() => {
                this.loading.dismiss();
                event.target.complete();
                this.router.navigateByUrl('tabs/main');
            }, 3000);
        });
    }
    CallAPIMysessions() {
        this.token = this.globalService.getselectedtoken();
        this.studentid = this.globalService.getselectedStudentId();
        this.nativeHttp.setDataSerializer('json');
        let header = { 'Accept': 'application/json', 'Content-Type': 'application/json' };
        let fetchinfo = { "Authentication_Token": this.token, "Student_Id": this.studentid, "inDepth": "Y" };
        this.nativeHttp.post(_model_global_api__WEBPACK_IMPORTED_MODULE_6__["apiurl"].apiUrl + 'session/mySessions', fetchinfo, header).then(response => {
            try {
                response.data = JSON.parse(response.data);
                this.storage.set('mysession', response.data).then(val => {
                    this.storage.get('mysession').then((val) => {
                        this.textdisplay = val;
                        if (this.textdisplay == null) {
                            if (this.bread == 1) {
                                this.presentToast();
                            }
                            else {
                                console.log('continue ');
                            }
                        }
                        else {
                        }
                        this.sessionstatuspending = _model_global_api__WEBPACK_IMPORTED_MODULE_6__["SessionStatus"].SESSION_STATUS_PENDING;
                        this.sessionstatusaccepted = _model_global_api__WEBPACK_IMPORTED_MODULE_6__["SessionStatus"].SESSION_STATUS_ACCEPTED;
                        this.sessionstatusended = _model_global_api__WEBPACK_IMPORTED_MODULE_6__["SessionStatus"].SESSION_STATUS_ENDED;
                        this.participantstausinviting = _model_global_api__WEBPACK_IMPORTED_MODULE_6__["ParticipantStatus"].PARTICIPANT_STATUS_INVITING;
                        this.participantstausrequest = _model_global_api__WEBPACK_IMPORTED_MODULE_6__["ParticipantStatus"].PARTICIPANT_STATUS_REQUEST;
                        this.participantstatusaccepted = _model_global_api__WEBPACK_IMPORTED_MODULE_6__["ParticipantStatus"].PARTICIPANT_STATUS_ACCEPTED;
                        this.loading.dismiss();
                        console.log(' this is textdisplay', this.textdisplay);
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
        })
            .catch(response => {
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
    /*Network*/
    StayonPage() {
        if (this.networkService.online == false) {
            this.networkService.presentNetworkMsg();
            this.router.navigateByUrl('tabs/session-view/session-my');
        }
    }
    SanitizeImage(imagefromAPI) {
        //console.log(imagefromAPI)
        this.imgdisplayinapp = this.display(imagefromAPI);
        //console.log(this.imgdisplayinapp)
    }
    //Image Sanitize
    display(bImg) {
        return this.dms.bypassSecurityTrustUrl("data:image/jpeg;base64, " + bImg);
    }
    presentToast() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'no session can be found ',
                duration: 5000,
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
        });
    }
    CallAPIToAcceptInvitation(sessionid, participantid, initiatorid) {
        if (this.networkService.online == false) {
            this.networkService.presentNetworkMsg();
            this.router.navigateByUrl('tabs/session-view/session-my');
        }
        else {
            console.log('session part and initiator', sessionid, participantid, initiatorid);
            //console.log(participantid)
            //console.log(initiatorid)
            //POST METHOD (Accept Invitation)
            this.nativeHttp.setDataSerializer('json');
            this.nativeHttp.post(_model_global_api__WEBPACK_IMPORTED_MODULE_6__["apiurl"].apiUrl + 'session/participant_accept', {
                "Authentication_Token": this.token,
                "Owner_Id": initiatorid,
                "Session_Id": sessionid,
                "Participant_Id": participantid
            }, {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            })
                .then(response => {
                try {
                    response.data = JSON.parse(response.data);
                    this.storage.set('mysession', response.data);
                    this.storage.set('assignmentdetails', response.data.assignments);
                    this.assignmentsService.setselectedsessionheader(response.data);
                    this.router.navigateByUrl('tabs/session-view/session-view/' + sessionid);
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
};
SessionMyPage.ctorParameters = () => [
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_9__["GlobalService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["Platform"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["LoadingController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_assignments_service__WEBPACK_IMPORTED_MODULE_5__["AssignmentsService"] },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_7__["HTTP"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
    { type: _services_network_service__WEBPACK_IMPORTED_MODULE_4__["NetworkService"] }
];
SessionMyPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-session-my',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./session-my.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/session-my/session-my.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./session-my.page.scss */ "./src/app/pages/session-my/session-my.page.scss")).default]
    }),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SessionMyPage);

// xing yee code 
// CallAPIMysessions(){
//   this.assignmentsService.getSessionsByStudent();
//   console.log(this.assignmentsService.getSessionsByStudent(), 'test1')
//   console.log(this.assignmentsService, 'test2')
//   console.log(this.storage.get('mysession'),'test4')
//     this.storage.get('mysession').then((val) => {
//       //console.log(val)
//       if(val==0){
//         this.boolHaveSession=true;
//        this.NoSessionText="Currently, you are not in any session"
//        console.log(this.textdisplay, 'test7')
//        }
//        else if(val==1){
//          this.textdisplay=[val];
//          console.log(this.textdisplay, 'test6')
//        }
//        else{
//        this.textdisplay=val;
//        console.log(this.textdisplay, 'test5')
//        }
//        console.log(val, 'test3')
//       });
//       this.sessionstatuspending = SessionStatus.SESSION_STATUS_PENDING;
//       this.sessionstatusaccepted = SessionStatus.SESSION_STATUS_ACCEPTED;
//       this.sessionstatusended = SessionStatus.SESSION_STATUS_ENDED;
//       this.participantstausinviting=ParticipantStatus.PARTICIPANT_STATUS_INVITING;
//       this.participantstausrequest=ParticipantStatus.PARTICIPANT_STATUS_REQUEST;
//       this.participantstatusaccepted=ParticipantStatus.PARTICIPANT_STATUS_ACCEPTED;
// }


/***/ })

}]);
//# sourceMappingURL=default~pages-session-assignment-view-session-assignment-view-module~pages-session-my-session-my-module-es2015.js.map