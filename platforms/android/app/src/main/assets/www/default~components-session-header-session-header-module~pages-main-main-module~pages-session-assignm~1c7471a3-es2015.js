(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~components-session-header-session-header-module~pages-main-main-module~pages-session-assignm~1c7471a3"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shared-module/popover-participant-invite/popover-participant-invite.page.html":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shared-module/popover-participant-invite/popover-participant-invite.page.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <h2 class=\"title\" style=\"font-size: large;padding:2%;\"><b>Invite Friends</b><ion-icon style=\"float: right;\" src=\"assets/images/pop-up-cross.svg\" (click)=\"closePopover()\"></ion-icon> </h2>\r\n</ion-header>\r\n<div style=\"display: flex; justify-content: center;align-items: center;padding:2%\">{{displayaddedparticipants}}</div>\r\n<div style=\"display: flex; justify-content: center;align-items: center;\"><button class=\"popoverinvitebutton\" (click)=\"invitefriends()\"><b>Invite Friend</b></button></div>\r\n<ion-content>\r\n  \r\n  <h2 class=\"title\"><ion-searchbar [(ngModel)]=\"searchParticipant\" animated=\"true\"></ion-searchbar></h2>\r\n   <div class=\"container\" *ngFor=\"let participant of textdisplayparticipant| filter:searchParticipant\">\r\n      <div class=\"popovercss\" *ngIf=\"participant.toBeInvited==='N'\">\r\n       ({{participant.levelInfo_DisplayName}}) <b>{{participant.username}}</b><label (click) = \"AddParticipant(participant)\" *ngIf=\"participant.toBeInvited==='N'\" class=\"popoveraddlabel\">Add</label>\r\n      </div> \r\n    </div>\r\n</ion-content>\r\n\r\n\r\n");

/***/ }),

/***/ "./src/app/pages/shared-module/popover-participant-invite/popover-participant-invite.page.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/shared-module/popover-participant-invite/popover-participant-invite.page.scss ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  padding: 0 4% 0 4%;\n}\n\nion-toolbar {\n  --min-height:0px!important;\n}\n\n.popoverinvitebutton {\n  border: solid 0.1em black;\n  color: white;\n  background-color: #1c91a8;\n  display: block;\n  margin: 0 auto;\n  text-align: center;\n  padding: 0.5em;\n}\n\n.popoveraddlabel {\n  color: black;\n  float: right;\n  padding: 0.1em;\n}\n\n.popovercss {\n  border: solid #000000;\n  background-color: white;\n  margin-bottom: 0.5em;\n  padding: 0.3em;\n}\n\n.popoveraddbutton {\n  border: solid 0.1em black;\n  color: white;\n  background-color: #1c91a8;\n  float: right;\n  padding: 0.1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2hhcmVkLW1vZHVsZS9wb3BvdmVyLXBhcnRpY2lwYW50LWludml0ZS9DOlxcVXNlcnNcXEwzMDkwM1xcRG9jdW1lbnRzXFxHaXRIdWJcXElvbmljRlBBbmFseXNpcy9zcmNcXGFwcFxccGFnZXNcXHNoYXJlZC1tb2R1bGVcXHBvcG92ZXItcGFydGljaXBhbnQtaW52aXRlXFxwb3BvdmVyLXBhcnRpY2lwYW50LWludml0ZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3NoYXJlZC1tb2R1bGUvcG9wb3Zlci1wYXJ0aWNpcGFudC1pbnZpdGUvcG9wb3Zlci1wYXJ0aWNpcGFudC1pbnZpdGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUNDRjs7QURDRTtFQUNFLDBCQUFBO0FDRUo7O0FEQUU7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDR0o7O0FEREE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNJRjs7QURGQTtFQUNFLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7QUNLRjs7QURIQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNNRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NoYXJlZC1tb2R1bGUvcG9wb3Zlci1wYXJ0aWNpcGFudC1pbnZpdGUvcG9wb3Zlci1wYXJ0aWNpcGFudC1pbnZpdGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICBwYWRkaW5nOiAwIDQlIDAgNCU7XHJcbn1cclxuICBpb24tdG9vbGJhcntcclxuICAgIC0tbWluLWhlaWdodDowcHghaW1wb3J0YW50O1xyXG4gIH1cclxuICAucG9wb3Zlcmludml0ZWJ1dHRvbntcclxuICAgIGJvcmRlcjpzb2xpZCAwLjFlbSBibGFjaztcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMWM5MWE4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDAuNWVtO1xyXG4gIH1cclxuLnBvcG92ZXJhZGRsYWJlbHtcclxuICBjb2xvcjpibGFjaztcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgcGFkZGluZzowLjFlbTtcclxufVxyXG4ucG9wb3ZlcmNzc3tcclxuICBib3JkZXI6c29saWQgIzAwMDAwMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW4tYm90dG9tOjAuNWVtO1xyXG4gIHBhZGRpbmc6MC4zZW07XHJcbn1cclxuLnBvcG92ZXJhZGRidXR0b257XHJcbiAgYm9yZGVyOnNvbGlkIDAuMWVtIGJsYWNrO1xyXG4gIGNvbG9yOndoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IzFjOTFhODtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgcGFkZGluZzowLjFlbTtcclxufSIsIi5jb250YWluZXIge1xuICBwYWRkaW5nOiAwIDQlIDAgNCU7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1taW4taGVpZ2h0OjBweCFpbXBvcnRhbnQ7XG59XG5cbi5wb3BvdmVyaW52aXRlYnV0dG9uIHtcbiAgYm9yZGVyOiBzb2xpZCAwLjFlbSBibGFjaztcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWM5MWE4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMC41ZW07XG59XG5cbi5wb3BvdmVyYWRkbGFiZWwge1xuICBjb2xvcjogYmxhY2s7XG4gIGZsb2F0OiByaWdodDtcbiAgcGFkZGluZzogMC4xZW07XG59XG5cbi5wb3BvdmVyY3NzIHtcbiAgYm9yZGVyOiBzb2xpZCAjMDAwMDAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XG4gIHBhZGRpbmc6IDAuM2VtO1xufVxuXG4ucG9wb3ZlcmFkZGJ1dHRvbiB7XG4gIGJvcmRlcjogc29saWQgMC4xZW0gYmxhY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFjOTFhODtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBwYWRkaW5nOiAwLjFlbTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/shared-module/popover-participant-invite/popover-participant-invite.page.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/shared-module/popover-participant-invite/popover-participant-invite.page.ts ***!
  \***************************************************************************************************/
/*! exports provided: PopoverParticipantInvitePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverParticipantInvitePage", function() { return PopoverParticipantInvitePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _services_assignments_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/assignments.service */ "./src/app/services/assignments.service.ts");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _model_global_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../model/global-api */ "./src/app/model/global-api.ts");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/global.service */ "./src/app/services/global.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");









let PopoverParticipantInvitePage = class PopoverParticipantInvitePage {
    constructor(globalService, nativeHttp, router, assignmentsService, storage, popoverController) {
        this.globalService = globalService;
        this.nativeHttp = nativeHttp;
        this.router = router;
        this.assignmentsService = assignmentsService;
        this.storage = storage;
        this.popoverController = popoverController;
        this.data = [];
        this.searchParticipant = "";
        this.countaddedparticipant = 0;
        this.displayaddedparticipants = this.countaddedparticipant + " Student(s) added";
    }
    ngOnInit() { }
    ionViewWillEnter() {
        this.token = this.globalService.getselectedtoken();
        this.studentid = this.globalService.getselectedStudentId();
        this.CallAPISearchStudentsToInvite();
    }
    /*Get Search Students to Invite*/
    CallAPISearchStudentsToInvite() {
        this.sessionid = this.assignmentsService.getselectedsessionid();
        this.nativeHttp.setDataSerializer('json');
        this.nativeHttp.post(_model_global_api__WEBPACK_IMPORTED_MODULE_6__["apiurl"].apiUrl + 'session/searchStudents2Invite', {
            "Authentication_Token": this.token,
            "Student_Id": this.studentid,
            "Session_Id": this.sessionid,
        }, {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        })
            .then(response => {
            try {
                console.log('this is response data', response);
                response.data = JSON.parse(response.data);
                this.textdisplayparticipant = response.data;
            }
            catch (e) {
                console.error('JSON parsing error plaese be patient');
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
    AddParticipant(participant) {
        this.countaddedparticipant++;
        this.displayaddedparticipants = this.countaddedparticipant + " Student(s) added";
        participant.toBeInvited = participant.toBeInvited == 'N' ? 'Y' : 'N';
        this.invitedfriends = participant;
        this.data.push(this.invitedfriends);
    }
    invitefriends() {
        //console.log(this.data)-->Add more than  a student at a time
        this.nativeHttp.setDataSerializer('json');
        this.nativeHttp.post(_model_global_api__WEBPACK_IMPORTED_MODULE_6__["apiurl"].apiUrl + 'session/participant_invite', {
            "Authentication_Token": this.token,
            "Owner_Id": this.studentid,
            "Session_Id": this.sessionid,
            "StudentList": JSON.stringify(this.data)
        }, {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        })
            .then(response => {
            this.assignmentsService.presentLoading();
            try {
                response.data = JSON.parse(response.data);
                //console.log(response.data)
                this.storage.set('mysession', response.data);
                this.storage.set('assignmentdetails', response.data.assignments);
                this.assignmentsService.dismissLoading();
                this.popoverController.dismiss();
            }
            catch (e) {
                console.error('JSON parsing error');
                this.assignmentsService.presentError();
                setTimeout(() => {
                    this.closePopover();
                    this.assignmentsService.dismissLoading();
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
                this.assignmentsService.dismissLoading();
                this.router.navigateByUrl('tabs/main');
            }, 3000);
        });
    }
};
PopoverParticipantInvitePage.ctorParameters = () => [
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_7__["GlobalService"] },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__["HTTP"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: _services_assignments_service__WEBPACK_IMPORTED_MODULE_4__["AssignmentsService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonInfiniteScroll"])
], PopoverParticipantInvitePage.prototype, "infiniteScroll", void 0);
PopoverParticipantInvitePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-popover-participant-invite',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./popover-participant-invite.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shared-module/popover-participant-invite/popover-participant-invite.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./popover-participant-invite.page.scss */ "./src/app/pages/shared-module/popover-participant-invite/popover-participant-invite.page.scss")).default]
    })
], PopoverParticipantInvitePage);



/***/ })

}]);
//# sourceMappingURL=default~components-session-header-session-header-module~pages-main-main-module~pages-session-assignm~1c7471a3-es2015.js.map