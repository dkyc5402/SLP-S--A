(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-session-initiate-session-initiate-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/session-initiate/session-initiate.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/session-initiate/session-initiate.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-main-header></app-main-header>\r\n<ion-content>\r\n  <ion-refresher slot='fixed' (ionRefresh)='UpdateData($event)'>\r\n    <ion-refresher-content></ion-refresher-content>\r\n    </ion-refresher>\r\n  <div class=\"secondcontent\">\r\n  <ul class=\"breadcrumb\" id=\"breadcrumbs\">\r\n    <li style=\"display: inline;\"><a href=\"/tabs/main\"> Home </a><i class=\"ion-chevron-right\"></i></li>\r\n    <li style=\"display: inline;\" class=\"active\"> Request Tuition </li>\r\n  </ul>    \r\n    <form [formGroup]=\"initiatesessionForm\">\r\n    <ion-item>\r\n    <ion-label position=\"floating\" style=\"color:#1c91a8;\">Title<b style=\"color:red;\">*</b></ion-label>\r\n    <ion-input formControlName=\"assignmenttitle\" [(ngModel)]=\"assignmenttitle\"></ion-input>\r\n  </ion-item>\r\n  <ion-label position=\"floating\" style=\"color:#1c91a8;margin-left: 1em;\">Question<b style=\"color:red;\">*</b></ion-label>\r\n  <ion-item lines=\"none\" *ngIf=\"imagevalid\">\r\n    <div style=\" width:auto;margin:0 auto;display:block;float:none;max-width:100%; \">\r\n  <img [src]=\"imgdisplayinapp\" > \r\n</div>\r\n</ion-item>\r\n  <ion-item>\r\n      <ion-textarea formControlName=\"assignmenttext\" *ngIf=\"showtextarea\" [(ngModel)]=\"assignmenttext\"></ion-textarea>\r\n    </ion-item>\r\n<ion-col>\r\n  <div class=\"content\">\r\n    <span><ion-icon button (click)=\"selecttext($event)\" src=\"assets/images/045-text.svg\"></ion-icon></span>\r\n    <span><ion-icon button (click)=\"selectImageGallery()\" src=\"assets/images/attachment.svg\"></ion-icon></span>\r\n    <span><ion-icon button (click)=\"selectImageCamera()\" src=\"assets/images/005-camera.svg\"></ion-icon></span>\r\n  </div>\r\n</ion-col>\r\n</form>\r\n<ion-col>\r\n  <ion-button expand='full' (click)=\"UploadAssignment()\" style=\"color:#ffffff;\">Submit</ion-button>\r\n</ion-col>\r\n</div>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/session-initiate/session-initiate-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/session-initiate/session-initiate-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: SessionInitiatePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionInitiatePageRoutingModule", function() { return SessionInitiatePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _session_initiate_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./session-initiate.page */ "./src/app/pages/session-initiate/session-initiate.page.ts");




const routes = [
    {
        path: '',
        component: _session_initiate_page__WEBPACK_IMPORTED_MODULE_3__["SessionInitiatePage"]
    }
];
let SessionInitiatePageRoutingModule = class SessionInitiatePageRoutingModule {
};
SessionInitiatePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SessionInitiatePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/session-initiate/session-initiate.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/session-initiate/session-initiate.module.ts ***!
  \*******************************************************************/
/*! exports provided: SessionInitiatePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionInitiatePageModule", function() { return SessionInitiatePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _session_initiate_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./session-initiate-routing.module */ "./src/app/pages/session-initiate/session-initiate-routing.module.ts");
/* harmony import */ var _session_initiate_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./session-initiate.page */ "./src/app/pages/session-initiate/session-initiate.page.ts");
/* harmony import */ var _components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components.module */ "./src/app/components.module.ts");









let SessionInitiatePageModule = class SessionInitiatePageModule {
};
SessionInitiatePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _session_initiate_routing_module__WEBPACK_IMPORTED_MODULE_5__["SessionInitiatePageRoutingModule"],
            _components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_session_initiate_page__WEBPACK_IMPORTED_MODULE_6__["SessionInitiatePage"]]
    })
], SessionInitiatePageModule);



/***/ }),

/***/ "./src/app/pages/session-initiate/session-initiate.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/session-initiate/session-initiate.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item {\n  border: none;\n}\n\n.content {\n  display: flex;\n  max-width: 400em;\n  margin: 0 auto;\n  background: transparent;\n  padding-left: 2em;\n}\n\nspan {\n  zoom: 2;\n  padding: 0.1em;\n}\n\nion-icon {\n  background-color: transparent;\n}\n\nion-icon:hover {\n  background-color: #b9b9b9;\n  border: #b9b9b9 solid 0.1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2Vzc2lvbi1pbml0aWF0ZS9DOlxcVXNlcnNcXEwzMDkwM1xcRG9jdW1lbnRzXFxHaXRIdWJcXElvbmljRlBBbmFseXNpcy9zcmNcXGFwcFxccGFnZXNcXHNlc3Npb24taW5pdGlhdGVcXHNlc3Npb24taW5pdGlhdGUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9zZXNzaW9uLWluaXRpYXRlL3Nlc3Npb24taW5pdGlhdGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQ0NGOztBRENBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7QUNFRjs7QURBQTtFQUNFLE9BQUE7RUFDQSxjQUFBO0FDR0Y7O0FEREE7RUFDRSw2QkFBQTtBQ0lGOztBREZBO0VBQ0UseUJBQUE7RUFDQSwyQkFBQTtBQ0tGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2Vzc2lvbi1pbml0aWF0ZS9zZXNzaW9uLWluaXRpYXRlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVtIHtcclxuICBib3JkZXI6bm9uZTtcclxufVxyXG4uY29udGVudCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXgtd2lkdGg6IDQwMGVtO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XHJcbiAgcGFkZGluZy1sZWZ0OjJlbTtcclxufVxyXG5zcGFuIHtcclxuICB6b29tOjI7XHJcbiAgcGFkZGluZzogMC4xZW07XHJcbn1cclxuaW9uLWljb24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7XHJcbn1cclxuaW9uLWljb246aG92ZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I5YjliOTtcclxuICBib3JkZXI6I2I5YjliOSBzb2xpZCAwLjFlbTtcclxufVxyXG4iLCJpb24taXRlbSB7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLmNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXgtd2lkdGg6IDQwMGVtO1xuICBtYXJnaW46IDAgYXV0bztcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHBhZGRpbmctbGVmdDogMmVtO1xufVxuXG5zcGFuIHtcbiAgem9vbTogMjtcbiAgcGFkZGluZzogMC4xZW07XG59XG5cbmlvbi1pY29uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbmlvbi1pY29uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I5YjliOTtcbiAgYm9yZGVyOiAjYjliOWI5IHNvbGlkIDAuMWVtO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/session-initiate/session-initiate.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/session-initiate/session-initiate.page.ts ***!
  \*****************************************************************/
/*! exports provided: SessionInitiatePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionInitiatePage", function() { return SessionInitiatePage; });
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
/* harmony import */ var ngx_image_compress__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-image-compress */ "./node_modules/ngx-image-compress/__ivy_ngcc__/fesm2015/ngx-image-compress.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");















let SessionInitiatePage = class SessionInitiatePage {
    constructor(imageCompress, platform, camera, assignmentsService, dms, base64, formBuilder, storage, router, networkService, nativeHttp, globalService) {
        this.imageCompress = imageCompress;
        this.platform = platform;
        this.camera = camera;
        this.assignmentsService = assignmentsService;
        this.dms = dms;
        this.base64 = base64;
        this.formBuilder = formBuilder;
        this.storage = storage;
        this.router = router;
        this.networkService = networkService;
        this.nativeHttp = nativeHttp;
        this.globalService = globalService;
        this.showtextarea = false;
        this.imagevalid = false;
        this.initiatesessionForm = formBuilder.group({
            assignmenttitle: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            assignmenttext: ['']
        });
    }
    ngOnInit() { }
    ionViewDidEnter() {
        this.platform.backButton.subscribeWithPriority(10, () => {
            console.log('Handler was called!');
            this.router.navigateByUrl('tabs/main');
        });
    }
    ionViewWillEnter() {
        this.token = this.globalService.getselectedtoken();
        this.studentid = this.globalService.getselectedStudentId();
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
            mediaType: this.camera.MediaType.PICTURE,
        };
        this.camera.getPicture(options).then((imageData) => {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            this.assignmentimage = imageData;
            this.imgdisplayinapp = this.display(this.assignmentimage);
            this.imagevalid = true;
            //count byte (purpose)
            this.sizeOfOriginalImage = this.imageCompress.byteCount(this.imgdisplayinapp) / (1024 * 1024);
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
    UpdateData(event) {
        console.log('this is the text and title', this.assignmenttext, this.assignmenttitle);
        event.target.complete();
    }
    /*Upload */
    UploadAssignment() {
        if (this.networkService.online == false) {
            this.networkService.presentNetworkMsg();
        }
        if (this.initiatesessionForm.valid) {
            if (this.assignmenttext != undefined && this.assignmenttext != "") {
                this.PostSession();
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
    /*POST METHOD*/
    PostSession() {
        this.assignmentsService.presentLoading();
        this.nativeHttp.setDataSerializer('json');
        // console.log(this.studentid)
        //console.log(this.token)
        this.nativeHttp.post(_model_global_api__WEBPACK_IMPORTED_MODULE_10__["apiurl"].apiUrl + 'session/requestTuition', {
            "Authentication_Token": this.token,
            "Student_Id": this.studentid,
            "Session_Title": this.assignmenttitle,
            "Session_Question_Text": this.assignmenttext,
            "Session_Question_Data": this.assignmentimage,
        }, {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        })
            .then(response => {
            this.initiatesessionForm.reset(); //Reset Form
            this.imagevalid = false; //Clear Image
            // console.log(response)
            try {
                //console.log(response.data)
                response.data = JSON.parse(response.data);
                this.storage.set('mysession', response.data);
                this.storage.set('assignmentdetails', response.data.assignments);
                this.session_id = response.data.session_Id;
                this.assignmentsService.setselectedsessionid(this.session_id);
                this.assignmentsService.setselectedinitiatorid(this.studentid);
                this.assignmentsService.dismissLoading();
                this.assignmentsService.presentInitiateSession('Ok').then((res) => {
                    if (res === 'Ok') {
                        this.router.navigateByUrl('tabs/session-view/session-view/' + this.session_id);
                    }
                    else {
                        this.assignmentsService.missingtitle();
                    }
                });
            }
            catch (e) {
                this.assignmentsService.presentError();
                setTimeout(() => {
                    this.assignmentsService.dismissLoading();
                    this.router.navigateByUrl('tabs/main');
                }, 3000);
            }
        })
            .catch(response => {
            console.log(response.status);
            console.log(response.error);
            this.assignmentsService.presentError();
            setTimeout(() => {
                this.assignmentsService.dismissLoading();
                this.router.navigateByUrl('tabs/main');
            }, 3000);
        });
    }
};
SessionInitiatePage.ctorParameters = () => [
    { type: ngx_image_compress__WEBPACK_IMPORTED_MODULE_13__["NgxImageCompressService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__["Platform"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"] },
    { type: _services_assignments_service__WEBPACK_IMPORTED_MODULE_7__["AssignmentsService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["DomSanitizer"] },
    { type: _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_3__["Base64"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_network_service__WEBPACK_IMPORTED_MODULE_8__["NetworkService"] },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_9__["HTTP"] },
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_12__["GlobalService"] }
];
SessionInitiatePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-session-initiate',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./session-initiate.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/session-initiate/session-initiate.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./session-initiate.page.scss */ "./src/app/pages/session-initiate/session-initiate.page.scss")).default]
    })
], SessionInitiatePage);



/***/ })

}]);
//# sourceMappingURL=pages-session-initiate-session-initiate-module-es2015.js.map