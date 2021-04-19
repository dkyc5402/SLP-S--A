(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-session-assignment-create-session-assignment-create-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/session-assignment-create/session-assignment-create.page.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/session-assignment-create/session-assignment-create.page.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!---No Read-->\r\n<ion-header>\r\n  <app-session-header></app-session-header>\r\n  <ion-segment [(ngModel)]=\"segmentModel\" (ionChange)=\"segmentChanged($event)\">\r\n    <ion-segment-button class=\"{{isactivevideoorvoice}}\" value=\"conferencing\" >\r\n      <ion-label>Conferencing</ion-label>\r\n    </ion-segment-button>\r\n    <ion-segment-button class=\"{{isactiveassignment}}\" value=\"assignment\">\r\n      <ion-label>Assignment</ion-label>\r\n    </ion-segment-button>\r\n  </ion-segment>\r\n</ion-header>\r\n<ion-content>\r\n  <div *ngIf=\"segmentModel === 'conferencing'\">\r\n    <ion-col>\r\n    <div style=\"text-align: center;\">No Conference Call</div>\r\n    </ion-col>\r\n  </div>    \r\n  <div *ngIf=\"segmentModel === 'assignment'\">\r\n    <div class=\"secondcontent\">\r\n      <br/>\r\n    <ion-col style=\"font-size: large;color:#1c91a8;padding:1em;\">Upload Assignment</ion-col>\r\n    <form [formGroup]=\"createassignmentForm\">\r\n      <ion-item>\r\n        <ion-label position=\"floating\" style=\"color:#1c91a8;\">Title<b style=\"color:red;\">*</b></ion-label>\r\n        <ion-input formControlName=\"assignmenttitle\" [(ngModel)]=\"assignmenttitle\"></ion-input>\r\n      </ion-item>\r\n      <ion-label position=\"floating\" style=\"color:#1c91a8;margin-left: 1em;\">Question<b style=\"color:red;\">*</b></ion-label>\r\n      <ion-item lines=\"none\" *ngIf=\"imagevalid\">\r\n        <div style=\" width:auto;margin:0 auto;display:block;float:none;max-width:100%; \">\r\n          <img [src]=\"imgdisplayinapp\" > \r\n    </div>\r\n    </ion-item>\r\n      <ion-item>\r\n          <ion-textarea formControlName=\"assignmenttext\" *ngIf=\"showtextarea\" [(ngModel)]=\"assignmenttext\"></ion-textarea>\r\n        </ion-item>\r\n    <ion-col>\r\n      <div class=\"content\">\r\n        <span><ion-icon button (click)=\"selecttext($event)\" src=\"assets/images/045-text.svg\"></ion-icon></span>\r\n        <span><ion-icon button (click)=\"selectImageGallery()\" src=\"assets/images/attachment.svg\"></ion-icon></span>\r\n        <span><ion-icon button (click)=\"selectImageCamera()\" src=\"assets/images/005-camera.svg\"></ion-icon></span>\r\n      </div>\r\n    </ion-col>\r\n    </form>\r\n    <ion-col>\r\n      <ion-button expand='full' (click)=\"UploadAssignment()\" style=\"color:#ffffff;\">Submit</ion-button>\r\n    </ion-col>\r\n    </div>\r\n    </div>\r\n  </ion-content>");

/***/ }),

/***/ "./src/app/pages/session-assignment-create/session-assignment-create-routing.module.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/session-assignment-create/session-assignment-create-routing.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: SessionAssignmentCreatePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionAssignmentCreatePageRoutingModule", function() { return SessionAssignmentCreatePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _session_assignment_create_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./session-assignment-create.page */ "./src/app/pages/session-assignment-create/session-assignment-create.page.ts");




const routes = [
    {
        path: '',
        component: _session_assignment_create_page__WEBPACK_IMPORTED_MODULE_3__["SessionAssignmentCreatePage"]
    }
];
let SessionAssignmentCreatePageRoutingModule = class SessionAssignmentCreatePageRoutingModule {
};
SessionAssignmentCreatePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SessionAssignmentCreatePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/session-assignment-create/session-assignment-create.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/session-assignment-create/session-assignment-create.module.ts ***!
  \*************************************************************************************/
/*! exports provided: SessionAssignmentCreatePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionAssignmentCreatePageModule", function() { return SessionAssignmentCreatePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _session_assignment_create_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./session-assignment-create-routing.module */ "./src/app/pages/session-assignment-create/session-assignment-create-routing.module.ts");
/* harmony import */ var _session_assignment_create_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./session-assignment-create.page */ "./src/app/pages/session-assignment-create/session-assignment-create.page.ts");
/* harmony import */ var _components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components.module */ "./src/app/components.module.ts");









let SessionAssignmentCreatePageModule = class SessionAssignmentCreatePageModule {
};
SessionAssignmentCreatePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _session_assignment_create_routing_module__WEBPACK_IMPORTED_MODULE_5__["SessionAssignmentCreatePageRoutingModule"],
            _components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_session_assignment_create_page__WEBPACK_IMPORTED_MODULE_6__["SessionAssignmentCreatePage"]]
    })
], SessionAssignmentCreatePageModule);



/***/ }),

/***/ "./src/app/pages/session-assignment-create/session-assignment-create.page.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/session-assignment-create/session-assignment-create.page.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item {\n  border: none;\n}\n\n.content {\n  display: flex;\n  max-width: 400em;\n  margin: 0 auto;\n  background: transparent;\n  padding-left: 2em;\n}\n\nspan {\n  zoom: 2;\n  padding: 0.1em;\n}\n\nion-icon {\n  background-color: transparent;\n}\n\nion-icon:hover {\n  background-color: #b9b9b9;\n  border: #b9b9b9 solid 0.1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2Vzc2lvbi1hc3NpZ25tZW50LWNyZWF0ZS9DOlxcVXNlcnNcXEwzMDkwM1xcRG9jdW1lbnRzXFxHaXRIdWJcXElvbmljRlBBbmFseXNpcy9zcmNcXGFwcFxccGFnZXNcXHNlc3Npb24tYXNzaWdubWVudC1jcmVhdGVcXHNlc3Npb24tYXNzaWdubWVudC1jcmVhdGUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9zZXNzaW9uLWFzc2lnbm1lbnQtY3JlYXRlL3Nlc3Npb24tYXNzaWdubWVudC1jcmVhdGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQ0NKOztBRENFO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7QUNFSjs7QURBRTtFQUNFLE9BQUE7RUFDQSxjQUFBO0FDR0o7O0FEREU7RUFDRSw2QkFBQTtBQ0lKOztBREZFO0VBQ0UseUJBQUE7RUFDQSwyQkFBQTtBQ0tKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2Vzc2lvbi1hc3NpZ25tZW50LWNyZWF0ZS9zZXNzaW9uLWFzc2lnbm1lbnQtY3JlYXRlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVtIHtcclxuICAgIGJvcmRlcjpub25lO1xyXG4gIH1cclxuICAuY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWF4LXdpZHRoOiA0MDBlbTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcclxuICAgIHBhZGRpbmctbGVmdDoyZW07XHJcbiAgfVxyXG4gIHNwYW4ge1xyXG4gICAgem9vbToyO1xyXG4gICAgcGFkZGluZzogMC4xZW07XHJcbiAgfVxyXG4gIGlvbi1pY29uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG4gIGlvbi1pY29uOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2I5YjliOTtcclxuICAgIGJvcmRlcjojYjliOWI5IHNvbGlkIDAuMWVtO1xyXG4gIH1cclxuIiwiaW9uLWl0ZW0ge1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWF4LXdpZHRoOiA0MDBlbTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBwYWRkaW5nLWxlZnQ6IDJlbTtcbn1cblxuc3BhbiB7XG4gIHpvb206IDI7XG4gIHBhZGRpbmc6IDAuMWVtO1xufVxuXG5pb24taWNvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG5pb24taWNvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiOWI5Yjk7XG4gIGJvcmRlcjogI2I5YjliOSBzb2xpZCAwLjFlbTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/session-assignment-create/session-assignment-create.page.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/session-assignment-create/session-assignment-create.page.ts ***!
  \***********************************************************************************/
/*! exports provided: SessionAssignmentCreatePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionAssignmentCreatePage", function() { return SessionAssignmentCreatePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/base64/ngx */ "./node_modules/@ionic-native/base64/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _services_assignments_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/assignments.service */ "./src/app/services/assignments.service.ts");
/* harmony import */ var _services_network_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/network.service */ "./src/app/services/network.service.ts");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _model_global_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../model/global-api */ "./src/app/model/global-api.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/global.service */ "./src/app/services/global.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");














let SessionAssignmentCreatePage = class SessionAssignmentCreatePage {
    constructor(globalService, nativeHttp, platform, dms, activatedRoute, camera, assignmentsService, base64, formBuilder, storage, router, networkService) {
        this.globalService = globalService;
        this.nativeHttp = nativeHttp;
        this.platform = platform;
        this.dms = dms;
        this.activatedRoute = activatedRoute;
        this.camera = camera;
        this.assignmentsService = assignmentsService;
        this.base64 = base64;
        this.formBuilder = formBuilder;
        this.storage = storage;
        this.router = router;
        this.networkService = networkService;
        //Segment
        this.segmentModel = "assignment";
        this.showtextarea = false;
        this.imagevalid = false;
        this.createassignmentForm = formBuilder.group({
            assignmenttitle: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            assignmenttext: ['']
        });
    }
    ngOnInit() {
        //Segment
        this.isactiveassignment = "activesegment";
    }
    ionViewDidEnter() {
        this.platform.backButton.subscribeWithPriority(10, () => {
            console.log('Handler was called!');
            this.router.navigateByUrl('tabs/session-view/session-my');
        });
        console.log("im here");
    }
    ionViewWillEnter() {
        this.token = this.globalService.getselectedtoken();
        this.studentid = this.globalService.getselectedStudentId();
        // Get the ID that was passed with the URL
        let id = this.activatedRoute.snapshot.paramMap.get('id');
        this.sessionid = id;
    }
    /*Segment */
    segmentChanged(event) {
        if (this.segmentModel != "assignment") {
            this.isactiveassignment = "inactivesegment";
            this.isactivevideoorvoice = "activesegment";
        }
        else if (this.segmentModel == "assignment") {
            this.isactiveassignment = "activesegment";
            this.isactivevideoorvoice = "inactivesegment";
        }
    }
    /*text*/
    selecttext(event) {
        this.showtextarea = !this.showtextarea;
    }
    /*Camera & Gallery*/
    pickImage(sourceType) {
        const options = {
            quality: 50,
            sourceType: sourceType,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then((imageData) => {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            this.assignmentimage = imageData;
            console.log(imageData);
            this.imgdisplayinapp = this.display(this.assignmentimage);
            this.imagevalid = true;
        }, (err) => {
            // Handle error
        });
    }
    //Image Sanitize
    display(bImg) {
        return this.dms.bypassSecurityTrustUrl("data:image/jpeg;base64, " + bImg);
    }
    selectImageCamera() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.pickImage(this.camera.PictureSourceType.CAMERA);
        });
    }
    selectImageGallery() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.pickImage(this.camera.PictureSourceType.PHOTOLIBRARY);
        });
    }
    /*Upload */
    UploadAssignment() {
        if (this.networkService.online == false) {
            this.networkService.presentNetworkMsg();
        }
        if (this.createassignmentForm.valid) {
            if (this.assignmenttext != undefined && this.assignmenttext != "") {
                this.UploadJson();
                // console.log('check check it works')
            }
            else {
                this.assignmentsService.presentToastWithOptions("Text in the question field is compulsory");
            }
        }
        else {
            this.assignmentsService.presentToastWithOptions("Please ensure all required details are filled up");
        }
    }
    //UploadAssignmentAPI
    UploadJson() {
        this.assignmentsService.presentLoading();
        this.nativeHttp.setDataSerializer('json');
        this.nativeHttp.post(_model_global_api__WEBPACK_IMPORTED_MODULE_10__["apiurl"].apiUrl + 'session/uploadAsgmt', {
            "Authentication_Token": this.token,
            "Student_Id": this.studentid,
            "Session_Id": this.sessionid,
            "Assignment_Title": this.assignmenttitle,
            "Session_Question_Text": this.assignmenttext,
            "Session_Question_Data": this.assignmentimage,
        }, {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        })
            .then(response => {
            this.createassignmentForm.reset();
            this.imagevalid = false;
            try {
                response.data = JSON.parse(response.data); //whole asgmtlist of particular session
                this.storage.set('mysession', response.data);
                this.storage.set('assignmentdetails', response.data.assignments);
                this.sessionid = response.data.session_Id;
                this.assignmentsService.dismissLoading();
                this.assignmentsService.presentUploadAssignment('Ok').then((res) => {
                    if (res === 'Ok') {
                        this.router.navigateByUrl('tabs/session-view/session-my');
                    }
                });
            }
            catch (e) {
                this.assignmentsService.dismissLoading();
                console.error(e);
                this.router.navigateByUrl('tabs/main');
                this.assignmentsService.presentError();
            }
        })
            .catch(response => {
            // prints 403
            console.log(response.status);
            // prints Permission denied
            console.log(response.error);
            this.assignmentsService.dismissLoading();
            this.router.navigateByUrl('tabs/main');
            this.assignmentsService.presentError();
        });
    }
};
SessionAssignmentCreatePage.ctorParameters = () => [
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_12__["GlobalService"] },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_9__["HTTP"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__["Platform"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["DomSanitizer"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"] },
    { type: _services_assignments_service__WEBPACK_IMPORTED_MODULE_7__["AssignmentsService"] },
    { type: _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_3__["Base64"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_network_service__WEBPACK_IMPORTED_MODULE_8__["NetworkService"] }
];
SessionAssignmentCreatePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-session-assignment-create',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./session-assignment-create.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/session-assignment-create/session-assignment-create.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./session-assignment-create.page.scss */ "./src/app/pages/session-assignment-create/session-assignment-create.page.scss")).default]
    })
], SessionAssignmentCreatePage);

// UploadAssignment()
// {
//   if(this.networkService.online == false )
//   {
//     this.networkService.presentNetworkMsg(); 
//   }
//   else{
//   if(this.createassignmentForm.valid)
//   {
//     if(this.assignmenttext!==undefined&&this.assignmenttext!=="")
//     {
//     this.UploadJson();
//     }
//     else if(this.assignmentimage!==undefined&&this.assignmentimage!=="")
//     {
//     this.UploadJson();
//     }
//     else
//     {
//       this.assignmentsService.presentToastWithOptions("Text in the question field is compulsory"); 
//     }
//   }
//     else
//     {
//      this.assignmentsService.presentToastWithOptions("Please ensure all required details are filled up"); 
//     }
//   }
// } 


/***/ })

}]);
//# sourceMappingURL=pages-session-assignment-create-session-assignment-create-module-es2015.js.map