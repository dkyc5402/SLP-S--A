function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-session-assignment-chat-session-assignment-chat-module~pages-session-assignment-view-s~7063bba7"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/session-assignment-chat/session-assignment-chat.page.html":
  /*!***********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/session-assignment-chat/session-assignment-chat.page.html ***!
    \***********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesSessionAssignmentChatSessionAssignmentChatPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header *ngIf=\"this.sessionstatus!==this.sessionstatusended\" style=\"padding:3%;background-color:#274c9c;\">\r\n  <ion-title style=\"text-align: center;color:white;display:inline-flexbox;\" ><b>Instant Messaging</b><img (click)=\"DismissModal()\" style=\"width: 1.2em;position:absolute;right:0;\" src=\"assets/images/criss-cross_grayblue.png\"></ion-title>\r\n  </ion-header>\r\n  <!--Read-->\r\n  <ion-header *ngIf=\"this.sessionstatus===this.sessionstatusended\" style=\"padding:3%;background-color:#b2b2b2;\">\r\n    <ion-title style=\"text-align: center;color:#808080;display:inline-flexbox;\" ><b>Instant Messaging</b><img (click)=\"DismissModal()\" style=\"width: 1.2em;position:absolute;right:0;\" src=\"assets/images/criss-cross_grayblue.png\"></ion-title>\r\n    </ion-header>\r\n<ion-content #content overflow-scroll=\"true\">\r\n<div class=\"thirdcontent\" *ngFor=\"let chat of chatIRecived\">\r\n<ion-row >\r\n  <ion-col *ngIf=\"chat.sender_Id!=this.studentid\" size=\"9\"  class=\"message other-message\">\r\n    <b>{{chat.sender_Username}} to {{chat.recipient_Username}}:</b><br>\r\n    <span>{{chat.chat_Value}}</span>\r\n    <div class=\"time\" text-right><br>\r\n      <ion-label> {{chat.created_On| date:'medium'}}</ion-label>\r\n    </div>\r\n  </ion-col>\r\n  </ion-row>\r\n  <ion-row>\r\n    <ion-col offset=\"3\" *ngIf=\"chat.sender_Id==this.studentid\"  size=\"9\" class=\"message my-message\">\r\n      <b>{{chat.sender_Username}} to {{chat.recipient_Username}}:</b><br>\r\n      <span>{{chat.chat_Value}}</span>\r\n      <div class=\"time\" text-right><br>\r\n        <ion-label> {{chat.created_On| date:'medium'}}</ion-label>\r\n        <!-- <ion-datetime value=\"{{chat.created_On}}\" displayFormat=\"D MMM YYYY, H:mm\" display-timezone=\"utc\"></ion-datetime>    -->\r\n      </div>\r\n    </ion-col>\r\n    </ion-row>\r\n    \r\n    \r\n</div>\r\n</ion-content>\r\n<!--No Read-->\r\n<ion-footer>\r\n<ion-toolbar >\r\n  <form [formGroup]=\"createchatForm\" *ngIf=\"this.sessionstatus!==this.sessionstatusended\">\r\n<ion-row>  \r\n  <ion-col size=\"2\" class=\"ion-align-self-center\">\r\n  <ion-text>To:</ion-text>\r\n  </ion-col>\r\n      <ion-col offset=\"-1\" size=\"5\">\r\n      <ion-select [(ngModel)]=\"recipientname\"  formControlName=\"recipientname\" style=\"background-color: #808080;color:black;\" #mySelect  (ionChange)=\"selectChanged(mySelect.value)\">\r\n        <ion-select-option><label>Everyone</label></ion-select-option>\r\n        <div *ngFor=\"let recipient of listRecipient\">\r\n        <ion-select-option value=\"{{recipient.user_Id}}\" *ngIf=\"recipient.user_Id!=this.studentid&&this.noofparticipant!=1\"><label>{{ recipient.user_Username }}</label></ion-select-option>\r\n      </div>\r\n      </ion-select>\r\n    </ion-col>\r\n  <ion-col size=\"10\">\r\n  <textarea formControlName=\"chattext\" autosize maxRows=\"4\"  [(ngModel)]=\"chattext\" class=\"message-input\"></textarea>\r\n  </ion-col>\r\n  <ion-col size=\"2\" class=\"ion-align-self-center\">\r\n    <img style=\"width:2em;\" src=\"assets/images/user-interface.png\" (click)=\"SendMessage()\"><br/>\r\n  </ion-col>\r\n</ion-row>\r\n</form>\r\n</ion-toolbar>\r\n</ion-footer>\r\n\r\n\r\n";
    /***/
  },

  /***/
  "./src/app/pages/session-assignment-chat/session-assignment-chat.page.scss":
  /*!*********************************************************************************!*\
    !*** ./src/app/pages/session-assignment-chat/session-assignment-chat.page.scss ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesSessionAssignmentChatSessionAssignmentChatPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".message {\n  padding: 1em;\n  border-radius: 1em;\n  margin-bottom: 1em;\n  white-space: pre-wrap;\n}\n\n.other-message {\n  background: #f0f0a7;\n  color: #000000;\n}\n\n.my-message {\n  background: #d9f6ff;\n  color: #000000;\n}\n\n.time {\n  color: #808080;\n  float: right;\n  font-size: small;\n}\n\n.message-input {\n  width: 100%;\n  border: 0.1em solid var(--ion-color-medium);\n  border-radius: 1em;\n  resize: none;\n  padding-left: 1em;\n  padding-right: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2Vzc2lvbi1hc3NpZ25tZW50LWNoYXQvQzpcXFVzZXJzXFxMMzA5MDNcXERvY3VtZW50c1xcR2l0SHViXFxJb25pY0ZQQW5hbHlzaXMvc3JjXFxhcHBcXHBhZ2VzXFxzZXNzaW9uLWFzc2lnbm1lbnQtY2hhdFxcc2Vzc2lvbi1hc3NpZ25tZW50LWNoYXQucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9zZXNzaW9uLWFzc2lnbm1lbnQtY2hhdC9zZXNzaW9uLWFzc2lnbm1lbnQtY2hhdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FDQ0Y7O0FERUE7RUFDQyxtQkFBQTtFQUNBLGNBQUE7QUNDRDs7QURFQTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBQ0MsY0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0NEOztBREVBO0VBQ0UsV0FBQTtFQUNBLDJDQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2Vzc2lvbi1hc3NpZ25tZW50LWNoYXQvc2Vzc2lvbi1hc3NpZ25tZW50LWNoYXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lc3NhZ2Uge1xyXG4gIHBhZGRpbmc6IDFlbTtcclxuICBib3JkZXItcmFkaXVzOiAxZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xyXG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcclxufVxyXG5cclxuLm90aGVyLW1lc3NhZ2Uge1xyXG4gYmFja2dyb3VuZDogI2YwZjBhNztcclxuIGNvbG9yOiAjMDAwMDAwO1xyXG59XHJcblxyXG4ubXktbWVzc2FnZSB7XHJcbiAgYmFja2dyb3VuZDogI2Q5ZjZmZjtcclxuICBjb2xvcjogIzAwMDAwMDtcclxufVxyXG5cclxuLnRpbWUge1xyXG4gY29sb3I6ICM4MDgwODA7XHJcbiBmbG9hdDogcmlnaHQ7XHJcbiBmb250LXNpemU6IHNtYWxsO1xyXG59XHJcblxyXG4ubWVzc2FnZS1pbnB1dCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyOiAwLjFlbSBzb2xpZCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICBib3JkZXItcmFkaXVzOiAxZW07XHJcbiAgcmVzaXplOiBub25lO1xyXG4gIHBhZGRpbmctbGVmdDogMWVtO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDFlbTtcclxufSIsIi5tZXNzYWdlIHtcbiAgcGFkZGluZzogMWVtO1xuICBib3JkZXItcmFkaXVzOiAxZW07XG4gIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xufVxuXG4ub3RoZXItbWVzc2FnZSB7XG4gIGJhY2tncm91bmQ6ICNmMGYwYTc7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuXG4ubXktbWVzc2FnZSB7XG4gIGJhY2tncm91bmQ6ICNkOWY2ZmY7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuXG4udGltZSB7XG4gIGNvbG9yOiAjODA4MDgwO1xuICBmbG9hdDogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG59XG5cbi5tZXNzYWdlLWlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMC4xZW0gc29saWQgdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcbiAgcmVzaXplOiBub25lO1xuICBwYWRkaW5nLWxlZnQ6IDFlbTtcbiAgcGFkZGluZy1yaWdodDogMWVtO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/session-assignment-chat/session-assignment-chat.page.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/pages/session-assignment-chat/session-assignment-chat.page.ts ***!
    \*******************************************************************************/

  /*! exports provided: SessionAssignmentChatPage */

  /***/
  function srcAppPagesSessionAssignmentChatSessionAssignmentChatPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SessionAssignmentChatPage", function () {
      return SessionAssignmentChatPage;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_network_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/network.service */
    "./src/app/services/network.service.ts");
    /* harmony import */


    var _services_chat_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../services/chat.service */
    "./src/app/services/chat.service.ts");
    /* harmony import */


    var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/http/ngx */
    "./node_modules/@ionic-native/http/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _services_assignments_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../services/assignments.service */
    "./src/app/services/assignments.service.ts");
    /* harmony import */


    var _model_global_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../model/global-api */
    "./src/app/model/global-api.ts");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var _services_global_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../services/global.service */
    "./src/app/services/global.service.ts");

    var SessionAssignmentChatPage = /*#__PURE__*/function () {
      function SessionAssignmentChatPage(globalService, nativeHttp, storage, assignmentsService, activatedRoute, formBuilder, modalController, networkService, chatService) {
        _classCallCheck(this, SessionAssignmentChatPage);

        this.globalService = globalService;
        this.nativeHttp = nativeHttp;
        this.storage = storage;
        this.assignmentsService = assignmentsService;
        this.activatedRoute = activatedRoute;
        this.formBuilder = formBuilder;
        this.modalController = modalController;
        this.networkService = networkService;
        this.chatService = chatService;
        this.createchatForm = formBuilder.group({
          recipientname: [''],
          chattext: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
      }

      _createClass(SessionAssignmentChatPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.currentRecipient = "Everyone";
          this.recipientname = "Everyone";
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this = this;

          this.token = this.globalService.getselectedtoken(); //Get Token

          this.studentid = this.globalService.getselectedStudentId(); //Get Tutor

          this.sessionstatusended = _model_global_api__WEBPACK_IMPORTED_MODULE_9__["SessionStatus"].SESSION_STATUS_ENDED;
          this.APIRetrieveChatInAssignment(); //Retrive Chats

          this.CallAPIListOfRecipient(); //Receive Participant in Session

          this.sessionstatus = this.assignmentsService.getselectedsessionstatus(); //Get Session Status

          setTimeout(function () {
            _this.content.scrollToBottom(300);
          }, 2000);
        } //Close Chat

      }, {
        key: "DismissModal",
        value: function DismissModal() {
          this.modalController.dismiss();
        } //Change of selected recipient

      }, {
        key: "selectChanged",
        value: function selectChanged(selectrecipient) {
          this.currentRecipient = selectrecipient;
          this.recipientname = selectrecipient; // console.log(this.recipientname)
        }
      }, {
        key: "SendMessage",
        value: function SendMessage() {
          if (this.networkService.online == false) {
            this.networkService.presentNetworkMsg();
          } else {
            if (this.createchatForm.valid) {
              //POST METHOD
              // console.log(this.recipientname)
              // console.log(this.chattext)
              this.APISendChatInAssignment(); //Send Message

              this.chattext = "";
            }
          }
        }
        /*POST METHOD*/

      }, {
        key: "APIRetrieveChatInAssignment",
        value: function APIRetrieveChatInAssignment() {
          var _this2 = this;

          this.asgmid = this.assignmentsService.getselectedasgmtid();
          this.nativeHttp.setDataSerializer('json');
          this.nativeHttp.post(_model_global_api__WEBPACK_IMPORTED_MODULE_9__["apiurl"].apiUrl + 'chat/retrieve', {
            "Authentication_Token": this.token,
            "Asgmt_Id": this.asgmid,
            "User_Id": this.studentid
          }, {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }).then(function (response) {
            try {
              response.data = JSON.parse(response.data);

              _this2.storage.set('chatdetails', response.data);

              console.log(response.data);

              _this2.storage.get('chatdetails').then(function (val) {
                _this2.chatIRecived = val;
              });
            } catch (e) {
              console.error(e);

              _this2.modalController.dismiss();

              _this2.assignmentsService.presentError();
            }
          })["catch"](function (response) {
            // prints 403
            console.log(response.status); // prints Permission denied

            console.log(response.error);

            _this2.modalController.dismiss();

            _this2.assignmentsService.presentError();
          });
        }
        /*POST METHOD*/

      }, {
        key: "APISendChatInAssignment",
        value: function APISendChatInAssignment() {
          var _this3 = this;

          this.asgmid = this.assignmentsService.getselectedasgmtid(); //Get Assignment Id

          this.nativeHttp.setDataSerializer('json');
          this.nativeHttp.post(_model_global_api__WEBPACK_IMPORTED_MODULE_9__["apiurl"].apiUrl + 'chat/send', {
            "Authentication_Token": this.token,
            "Asgmt_Id": this.asgmid,
            "Sender": this.studentid,
            "Recipient": this.recipientname,
            "Chat_Value": this.chattext
          }, {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }).then(function (response) {
            try {
              response.data = JSON.parse(response.data); // this.APIRetrieveChatInAssignment();

              setInterval(function () {
                _this3.APIRetrieveChatInAssignment(); // Now the "this" still references the component

              }, 500); //half a second

              _this3.content.scrollToBottom();
            } catch (e) {
              console.error(e);

              _this3.assignmentsService.presentErrorchat();
            }
          })["catch"](function (response) {
            // prints 403
            console.log(response.status); // prints Permission denied

            console.log(response.error);

            _this3.assignmentsService.presentErrorchat();
          });
        }
        /*Call APIListRecipient METHOD*/

      }, {
        key: "CallAPIListOfRecipient",
        value: function CallAPIListOfRecipient() {
          var _this4 = this;

          this.asgmid = this.assignmentsService.getselectedasgmtid(); //Get asgmt id

          this.nativeHttp.setDataSerializer('json');
          this.nativeHttp.post(_model_global_api__WEBPACK_IMPORTED_MODULE_9__["apiurl"].apiUrl + 'chat/listRecipient', {
            "Authentication_Token": this.token,
            "Asgmt_Id": this.asgmid,
            "User_Id": this.studentid
          }, {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }).then(function (response) {
            try {
              response.data = JSON.parse(response.data); //console.log(response.data)

              _this4.listRecipient = response.data;
              _this4.noofparticipant = _this4.listRecipient.length;
            } catch (e) {
              console.error(e);

              _this4.modalController.dismiss();

              _this4.assignmentsService.presentError();
            }
          })["catch"](function (response) {
            // prints 403
            console.log(response.status); // prints Permission denied

            console.log(response.error);

            _this4.modalController.dismiss();

            _this4.assignmentsService.presentError();
          });
        }
      }]);

      return SessionAssignmentChatPage;
    }();

    SessionAssignmentChatPage.ctorParameters = function () {
      return [{
        type: _services_global_service__WEBPACK_IMPORTED_MODULE_11__["GlobalService"]
      }, {
        type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_7__["HTTP"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_10__["Storage"]
      }, {
        type: _services_assignments_service__WEBPACK_IMPORTED_MODULE_8__["AssignmentsService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _services_network_service__WEBPACK_IMPORTED_MODULE_5__["NetworkService"]
      }, {
        type: _services_chat_service__WEBPACK_IMPORTED_MODULE_6__["ChatService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('content')], SessionAssignmentChatPage.prototype, "content", void 0);
    SessionAssignmentChatPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-session-assignment-chat',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./session-assignment-chat.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/session-assignment-chat/session-assignment-chat.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./session-assignment-chat.page.scss */
      "./src/app/pages/session-assignment-chat/session-assignment-chat.page.scss"))["default"]]
    })], SessionAssignmentChatPage);
    /***/
  },

  /***/
  "./src/app/services/chat.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/chat.service.ts ***!
    \******************************************/

  /*! exports provided: ChatService */

  /***/
  function srcAppServicesChatServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatService", function () {
      return ChatService;
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


    var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/http/ngx */
    "./node_modules/@ionic-native/http/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");

    var ChatService = /*#__PURE__*/function () {
      function ChatService(nativeHttp, toastCtrl, alertController, loadingController, storage) {
        _classCallCheck(this, ChatService);

        this.nativeHttp = nativeHttp;
        this.toastCtrl = toastCtrl;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.storage = storage;
      } //Pop-up message


      _createClass(ChatService, [{
        key: "presentToastWithOptions",
        value: function presentToastWithOptions(text) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var toast;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.toastCtrl.create({
                      header: text,
                      duration: 3000,
                      position: 'bottom',
                      buttons: [{
                        text: 'CLOSE',
                        role: 'cancel'
                      }],
                      cssClass: 'toastCSS'
                    });

                  case 2:
                    toast = _context.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return ChatService;
    }();

    ChatService.ctorParameters = function () {
      return [{
        type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__["HTTP"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]
      }];
    };

    ChatService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ChatService);
    /***/
  }
}]);
//# sourceMappingURL=default~pages-session-assignment-chat-session-assignment-chat-module~pages-session-assignment-view-s~7063bba7-es5.js.map