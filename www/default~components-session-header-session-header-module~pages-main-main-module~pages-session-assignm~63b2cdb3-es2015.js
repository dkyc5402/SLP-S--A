(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~components-session-header-session-header-module~pages-main-main-module~pages-session-assignm~63b2cdb3"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shared-module/popover-participant-view/popover-participant-view.page.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shared-module/popover-participant-view/popover-participant-view.page.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!---check-->\r\n<ion-header>\r\n  <h2 class=\"title\" style=\"font-size: large;padding: 2%;\"><b>Participants <b *ngIf=\"this.sessionstatusended!==this.sessionstatus\">({{numofparticipants}})</b> </b><ion-icon style=\"float: right;\" src=\"assets/images/pop-up-cross.svg\" (click)=\"closePopover()\"></ion-icon></h2>\r\n</ion-header>\r\n<ion-content >\r\n  <div class=\"container\" *ngIf=\"this.sessionstatusended!==this.sessionstatus\">\r\n<div *ngFor=\"let participant of textdisplayparticipant\">\r\n<div class=\"popovercss\" *ngIf=\"participant.participant_Id==='TUTOR'\">\r\n  [SV] <b>{{participant.username}}</b>   <!--Tutor(SESSION_STATUS_ACCEPTED)-->\r\n</div>\r\n</div>\r\n<div *ngFor=\"let participant of textdisplayparticipant\">\r\n<div class=\"popovercss\" *ngIf=\"participant.is_Initiator==='Y'\">\r\n[IS] ({{participant.levelInfo_DisplayName}}) <b>{{participant.username}}</b>   <!--Session Initiator-->\r\n</div>\r\n</div>\r\n<div *ngFor=\"let participant of textdisplayparticipant\">\r\n<div  *ngIf=\"participant.status==this.participantstatusaccepted&&participant.sessionstatus!=this.sessionstatusaccepted&&participant.is_Initiator!=='Y'\">\r\n  <div class=\"popovercss\" >({{participant.levelInfo_DisplayName}}) <b>{{participant.username}}</b><button *ngIf=\"this.studentid==this.initiatorid&&this.sessionstatus!=this.sessionstatusaccepted\" (click) = \"RemoveParticipant(participant.participant_Id)\"  class=\"popoverremovebutton\">Remove</button>   \r\n  </div>\r\n</div>\r\n</div>\r\n<div><button class=\"popoverinvitebutton\" *ngIf=\"sessionstatus!=this.sessionstatusaccepted&&this.studentid==this.initiatorid\" (click)=\"invitefriend()\"><b>Invite Friend</b></button></div>\r\n</div>\r\n<div *ngIf=\"this.sessionstatusended===this.sessionstatus\" style=\"font-size: larger;text-align: center;\"><b>Session has ended.</b></div>\r\n");

/***/ }),

/***/ "./src/app/pages/shared-module/popover-participant-view/popover-participant-view.page.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/shared-module/popover-participant-view/popover-participant-view.page.scss ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  padding: 0 4% 0 4%;\n}\n\nion-toolbar {\n  --min-height:0px!important;\n}\n\n.popovercss {\n  border: solid #000000;\n  background-color: white;\n  margin-bottom: 0.5em;\n  padding: 0.3em;\n}\n\n.popoverremovebutton {\n  border: solid 0.1em black;\n  color: white;\n  background-color: #1c91a8;\n  float: right;\n  padding: 0.1em;\n}\n\n.popoverinvitebutton {\n  border: solid 0.1em black;\n  color: white;\n  background-color: #1c91a8;\n  display: block;\n  margin: 0 auto;\n  text-align: center;\n  padding: 0.5em;\n}\n\n.popoverremovedlabel {\n  color: blakc;\n  float: right;\n  padding: 0.1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2hhcmVkLW1vZHVsZS9wb3BvdmVyLXBhcnRpY2lwYW50LXZpZXcvQzpcXFVzZXJzXFxMMzA5MDNcXERvY3VtZW50c1xcR2l0SHViXFxJb25pY0ZQQW5hbHlzaXMvc3JjXFxhcHBcXHBhZ2VzXFxzaGFyZWQtbW9kdWxlXFxwb3BvdmVyLXBhcnRpY2lwYW50LXZpZXdcXHBvcG92ZXItcGFydGljaXBhbnQtdmlldy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3NoYXJlZC1tb2R1bGUvcG9wb3Zlci1wYXJ0aWNpcGFudC12aWV3L3BvcG92ZXItcGFydGljaXBhbnQtdmlldy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQ0NKOztBRENFO0VBQ0UsMEJBQUE7QUNFSjs7QURBQTtFQUNFLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7QUNHRjs7QUREQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNJRjs7QURGQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNLRjs7QURIQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQ01GIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2hhcmVkLW1vZHVsZS9wb3BvdmVyLXBhcnRpY2lwYW50LXZpZXcvcG9wb3Zlci1wYXJ0aWNpcGFudC12aWV3LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcbiAgICBwYWRkaW5nOiAwIDQlIDAgNCU7XHJcbiAgfVxyXG4gIGlvbi10b29sYmFye1xyXG4gICAgLS1taW4taGVpZ2h0OjBweCFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4ucG9wb3ZlcmNzc3tcclxuICBib3JkZXI6c29saWQgIzAwMDAwMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW4tYm90dG9tOjAuNWVtO1xyXG4gIHBhZGRpbmc6MC4zZW07XHJcbn1cclxuLnBvcG92ZXJyZW1vdmVidXR0b257XHJcbiAgYm9yZGVyOnNvbGlkIDAuMWVtIGJsYWNrO1xyXG4gIGNvbG9yOndoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IzFjOTFhODtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgcGFkZGluZzowLjFlbTtcclxufVxyXG4ucG9wb3Zlcmludml0ZWJ1dHRvbntcclxuICBib3JkZXI6c29saWQgMC4xZW0gYmxhY2s7XHJcbiAgY29sb3I6d2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjojMWM5MWE4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAwLjVlbTtcclxufVxyXG4ucG9wb3ZlcnJlbW92ZWRsYWJlbHtcclxuICBjb2xvcjpibGFrYztcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgcGFkZGluZzowLjFlbTtcclxufVxyXG4iLCIuY29udGFpbmVyIHtcbiAgcGFkZGluZzogMCA0JSAwIDQlO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tbWluLWhlaWdodDowcHghaW1wb3J0YW50O1xufVxuXG4ucG9wb3ZlcmNzcyB7XG4gIGJvcmRlcjogc29saWQgIzAwMDAwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1ib3R0b206IDAuNWVtO1xuICBwYWRkaW5nOiAwLjNlbTtcbn1cblxuLnBvcG92ZXJyZW1vdmVidXR0b24ge1xuICBib3JkZXI6IHNvbGlkIDAuMWVtIGJsYWNrO1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxYzkxYTg7XG4gIGZsb2F0OiByaWdodDtcbiAgcGFkZGluZzogMC4xZW07XG59XG5cbi5wb3BvdmVyaW52aXRlYnV0dG9uIHtcbiAgYm9yZGVyOiBzb2xpZCAwLjFlbSBibGFjaztcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWM5MWE4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMC41ZW07XG59XG5cbi5wb3BvdmVycmVtb3ZlZGxhYmVsIHtcbiAgY29sb3I6IGJsYWtjO1xuICBmbG9hdDogcmlnaHQ7XG4gIHBhZGRpbmc6IDAuMWVtO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/shared-module/popover-participant-view/popover-participant-view.page.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/shared-module/popover-participant-view/popover-participant-view.page.ts ***!
  \***********************************************************************************************/
/*! exports provided: PopoverParticipantViewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverParticipantViewPage", function() { return PopoverParticipantViewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _services_assignments_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/assignments.service */ "./src/app/services/assignments.service.ts");
/* harmony import */ var _popover_participant_invite_popover_participant_invite_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../popover-participant-invite/popover-participant-invite.page */ "./src/app/pages/shared-module/popover-participant-invite/popover-participant-invite.page.ts");
/* harmony import */ var _model_global_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../model/global-api */ "./src/app/model/global-api.ts");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/global.service */ "./src/app/services/global.service.ts");











let PopoverParticipantViewPage = class PopoverParticipantViewPage {
    constructor(globalService, assignmentsService, nativeHttp, storage, router, popoverController) {
        this.globalService = globalService;
        this.assignmentsService = assignmentsService;
        this.nativeHttp = nativeHttp;
        this.storage = storage;
        this.router = router;
        this.popoverController = popoverController;
        this.data = [];
    }
    ngOnInit() { }
    ionViewWillEnter() {
        this.token = this.globalService.getselectedtoken();
        this.studentid = this.globalService.getselectedStudentId(); //Check to see whether is initiator to be able to view invite button
        this.CallAPIgetParticipants();
    }
    /*Get All Participants*/
    CallAPIgetParticipants() {
        this.sessionstatus = this.assignmentsService.getselectedsessionstatus(); //Get sessionstatus
        this.sessionid = this.assignmentsService.getselectedsessionid(); //Get Sessionid
        this.initiatorid = this.assignmentsService.getselectedinitiatorid(); //Get Initiator
        this.participantstatusremoved = _model_global_api__WEBPACK_IMPORTED_MODULE_7__["ParticipantStatus"].PARTICIPANT_STATUS_REMOVED;
        this.participantstatusaccepted = _model_global_api__WEBPACK_IMPORTED_MODULE_7__["ParticipantStatus"].PARTICIPANT_STATUS_ACCEPTED;
        this.sessionstatuspending = _model_global_api__WEBPACK_IMPORTED_MODULE_7__["SessionStatus"].SESSION_STATUS_PENDING;
        this.sessionstatusaccepted = _model_global_api__WEBPACK_IMPORTED_MODULE_7__["SessionStatus"].SESSION_STATUS_ACCEPTED;
        this.sessionstatusended = _model_global_api__WEBPACK_IMPORTED_MODULE_7__["SessionStatus"].SESSION_STATUS_ENDED;
        this.nativeHttp.setDataSerializer('json');
        this.nativeHttp.post(_model_global_api__WEBPACK_IMPORTED_MODULE_7__["apiurl"].apiUrl + 'session/listParticipants', {
            "Authentication_Token": this.token,
            "Session_Id": this.sessionid,
            "Student_Id": this.studentid,
        }, {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        })
            .then(response => {
            try {
                response.data = JSON.parse(response.data);
                //console.log(response.data)
                this.textdisplayparticipant = response.data;
                this.numofparticipants = this.textdisplayparticipant.length;
            }
            catch (e) {
                this.assignmentsService.presentError();
                setTimeout(() => {
                    this.closePopover();
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
                this.closePopover();
                this.router.navigateByUrl('tabs/main');
            }, 3000);
        });
    }
    //Remove Participant
    RemoveParticipant(participantid) {
        this.nativeHttp.setDataSerializer('json');
        this.nativeHttp.post(_model_global_api__WEBPACK_IMPORTED_MODULE_7__["apiurl"].apiUrl + 'session/participant_remove', {
            "Authentication_Token": this.token,
            "Owner_Id": this.studentid,
            "Session_Id": this.sessionid,
            "Participant_Id": participantid
        }, {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        })
            .then(response => {
            try {
                response.data = JSON.parse(response.data);
                this.textdisplayparticipant = response.data;
                this.closePopover();
            }
            catch (e) {
                console.error('JSON parsing error');
                this.assignmentsService.presentError();
                setTimeout(() => {
                    this.closePopover();
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
                this.closePopover();
                this.router.navigateByUrl('tabs/main');
            }, 3000);
        });
    }
    closePopover() {
        this.popoverController.dismiss();
    }
    /*Pop over for participants*/
    invitefriend(ev) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.popoverController.dismiss();
            const popover = yield this.popoverController.create({
                component: _popover_participant_invite_popover_participant_invite_page__WEBPACK_IMPORTED_MODULE_6__["PopoverParticipantInvitePage"],
                event: ev,
            });
            return yield popover.present();
        });
    }
};
PopoverParticipantViewPage.ctorParameters = () => [
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_9__["GlobalService"] },
    { type: _services_assignments_service__WEBPACK_IMPORTED_MODULE_5__["AssignmentsService"] },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_8__["HTTP"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInfiniteScroll"])
], PopoverParticipantViewPage.prototype, "infiniteScroll", void 0);
PopoverParticipantViewPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-popover-participant-view',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./popover-participant-view.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shared-module/popover-participant-view/popover-participant-view.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./popover-participant-view.page.scss */ "./src/app/pages/shared-module/popover-participant-view/popover-participant-view.page.scss")).default]
    })
], PopoverParticipantViewPage);



/***/ })

}]);
//# sourceMappingURL=default~components-session-header-session-header-module~pages-main-main-module~pages-session-assignm~63b2cdb3-es2015.js.map