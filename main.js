(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/account-service.service.ts":
/*!********************************************!*\
  !*** ./src/app/account-service.service.ts ***!
  \********************************************/
/*! exports provided: AccountServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountServiceService", function() { return AccountServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./server */ "./src/app/server.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AccountServiceService = /** @class */ (function () {
    function AccountServiceService(http) {
        this.http = http;
        this.servers = [
            //new Server('local', 'http://localhost:8000'),
            new _server__WEBPACK_IMPORTED_MODULE_2__["Server"]('base1', 'https://schoolkamanager.herokuapp.com')
        ];
        this.found_server = false;
        this.token = "";
    }
    AccountServiceService.prototype.checkServer = function (fun_sucess, fun_error) {
        var _this = this;
        if (fun_sucess === void 0) { fun_sucess = function (server) { }; }
        if (fun_error === void 0) { fun_error = function () { }; }
        // this will automatically assign to available server serial wise
        try {
            this.servers.forEach(function (element) {
                // sending get request
                _this.http.get(element.base_url).subscribe(function (Response) {
                    _this.found_server = true;
                    _this.server_base_url = element.base_url;
                    fun_sucess(element);
                }, function (err) { });
            });
        }
        catch (error) { }
    };
    AccountServiceService.prototype.onSignIn = function (id_token, fun) {
        //fun(null);
        var _this = this;
        if (fun === void 0) { fun = function (data) { console.log("service onSignIn", data); }; }
        this.http.post(this.server_base_url + "/onLogin?data=2", new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('id_token', id_token).toString(), {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
                .set('Content-Type', 'application/x-www-form-urlencoded')
        })
            .subscribe(function (data) {
            //console.log('I was here', data);
            if (data['status'] == 1) {
                // yee login sucessfull
                _this.token = data['token'];
                //console.log(this.token);
                fun(data);
            }
        });
    };
    AccountServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AccountServiceService);
    return AccountServiceService;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo-img {\r\n  -webkit-animation: spin 6s linear infinite; /* Safari */\r\n  animation: spin 6s linear infinite;\r\n }\r\n @-webkit-keyframes spin {\r\n    0% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\r\n    100% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\r\n  }\r\n @keyframes spin {\r\n    0% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\r\n    100% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\r\n  }\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div *ngIf=\"server_resolved==1\">\n\n\n\n  <nav class=\"navbar navbar-expand-lg navbar-light bg-white\">\n    <a class=\"navbar-brand\" href=\"#\">\n        <img class=\"logo-img\" src=\"./favicon.ico\" alt=\"logo\" style=\"width: 30px; height: 30px;\">\n        School Manager\n      </a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav mr-auto\">\n        </ul>\n        <div *ngIf=\"login_status!=1\" (click)=\"socialSignIn('google')\" id=\"google-signin-btn\">Sign in with Google</div>\n        <img class=\"my-2 my-sm-0\" *ngIf=\"login_status==1\"\n          src=\"{{ account.profile.getImageUrl()}}\" alt=\"profile picture\"\n          style=\"width: 40px\"\n          data-toggle=\"modal\" data-target=\"#AccountInfo\"\n          >\n        <a *ngIf=\"login_status==1\" (click)=\"onSignout()\" href=\"#\" class=\"btn btn-warning\">Logout</a>\n    </div>\n  </nav>\n      <div *ngIf=\"login_status!=0\"><app-schools></app-schools></div>\n      <div *ngIf=\"login_status==0\">\n        <div class=\"card\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title text-primary\">About</h5>\n            <p class=\"card-text\">\n              School Manger has an aim to reduce the burden of teachers and students by taking care of basic tasks.\n              We try to take care of all the requirements u have and provide a digital solution to it. currently we provide\n              these basic facilities</p>\n\n              <div class=\"container\">\n                <div class=\"row\">\n                  <div class=\"col-sm\">\n                    <div class=\"card\">\n                      <div class=\"card-body\">\n                        <h5 class=\"card-title text-primary\">Attandence</h5>\n                        <p class=\"card-text\">\n                          We prepared an effecient way of taking attendance,\n                          which wont take much time. This has three different way of taking on is the teacher verifying the peeps,\n                          Other is sharing a code which all students will provide to mark their attendance and third require an app installation\n                        </p>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-sm\">\n                    <div class=\"card\">\n                      <div class=\"card-body\">\n                        <h5 class=\"card-title text-primary\">Extraction</h5>\n                        <p class=\"card-text\">\n                          The data can be extracted in various formats,\n                          so that it can easily be integrated with your school system. We currently support csv, tsv, excel sheets,\n                          pdfs etc.\n                        </p>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-sm\">\n                    <div class=\"card\">\n                      <div class=\"card-body\">\n                        <h5 class=\"card-title text-primary\">Support</h5>\n                        <p class=\"card-text\">\n                          Need help in getting started / want specific technical support etc, we are always there for you. Our aim is\n                          to improve education system, and take in big step in digitilation India.\n                        </p>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n\n\n\n          </div>\n        </div>\n      </div>\n\n\n\n      <div *ngIf=\"login_status==1\" class=\"modal fade\" id=\"AccountInfo\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLongTitle\" aria-hidden=\"true\">\n        <div class=\"modal-dialog\" role=\"document\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">{{ account.profile.getName() }}</h5>\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n            </div>\n            <div class=\"modal-body\">\n              <div class=\"input-group\">\n                <input class=\"form-control\" type=\"text\" value=\"{{ account.profile.getName()}}\" placeholder=\"Your Name\">\n              </div>\n              <div class=\"input-group\">\n                <textarea name=\"details\" cols=\"30\" rows=\"3\" class=\"form-control\" placeholder=\"Details\"></textarea>\n              </div>\n\n            </div>\n            <div class=\"modal-footer\">\n              <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n              <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n            </div>\n          </div>\n        </div>\n      </div>\n</div>\n<div *ngIf=\"server_resolved==0\" id=\"loading\">\n        <br><br><br>\n          <div class=\"container\">\n                    <img class=\"rounded mx-auto d-block logo-img\" src=\"./favicon.ico\" alt=\"logo\" id=\"loading-image\">\n            </div>\n            <br><br>\n            <div class=\"container\">\n                <p class=\"text-center text-primary\">Finishing up my tea...</p>\n                <p>{{ logs }}</p>\n            </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _account_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account-service.service */ "./src/app/account-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var AppComponent = /** @class */ (function () {
    function AppComponent(cdr, accountService, zone) {
        var _this = this;
        this.cdr = cdr;
        this.accountService = accountService;
        this.zone = zone;
        this.title = 'app';
        this.login_status = 0;
        this.server_resolved = 0;
        this.logs = '';
        this.account = {
            onSignIn: function (googleUser) { _this.onSignIn(googleUser); },
            profile: null
        };
        this.data = { 'csrf': '' };
    }
    AppComponent.prototype.ngOnInit = function () {
        account = this.account;
        this.gapi_AfterLoad();
    };
    AppComponent.prototype.onSignIn = function (googleUser) {
        var _this = this;
        var id_token = googleUser.getAuthResponse().id_token;
        var profile = googleUser.getBasicProfile();
        this.account.profile = profile;
        console.log("Welcome ", profile.getName(), ". If you are not sure, please dont use this console, it may leak your info to others");
        this.accountService.onSignIn(id_token, function (data) {
            _this.login_status = 1;
            _this.cdr.detectChanges();
        });
    };
    AppComponent.prototype.onSignout = function () {
        var auth2 = gapi.auth2.getAuthInstance();
        auth2.signOut().then(function () {
            window.location.reload();
        });
    };
    AppComponent.prototype.gapi_AfterLoad = function () {
        var _this = this;
        /*console.log('asd');
        if(typeof(gapi)=="undefined"){
          setTimeout(()=>this.gapi_AfterLoad(), 1000);
        }
        else if(gapi.auth2===undefined){
          setTimeout(()=>this.gapi_AfterLoad(), 1000);
        }else{
         */
        this.accountService.checkServer(function (server) {
            _this.server_resolved = 1;
            _this.server = server;
            _this.cdr.detectChanges();
            gapi.signin2.render('google-signin-btn', {
                'scope': 'profile email',
                'theme': 'light',
                'onsuccess': account.onSignIn
            });
        });
        //}
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _account_service_service__WEBPACK_IMPORTED_MODULE_1__["AccountServiceService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _schools_schools_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./schools/schools.component */ "./src/app/schools/schools.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _schools_school_detail_school_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./schools/school-detail/school-detail.component */ "./src/app/schools/school-detail/school-detail.component.ts");
/* harmony import */ var _schools_school_detail_settings_settings_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./schools/school-detail/settings/settings.component */ "./src/app/schools/school-detail/settings/settings.component.ts");
/* harmony import */ var _schools_school_detail_classes_classes_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./schools/school-detail/classes/classes.component */ "./src/app/schools/school-detail/classes/classes.component.ts");
/* harmony import */ var _schools_school_detail_teachers_teachers_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./schools/school-detail/teachers/teachers.component */ "./src/app/schools/school-detail/teachers/teachers.component.ts");
/* harmony import */ var _schools_school_detail_students_students_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./schools/school-detail/students/students.component */ "./src/app/schools/school-detail/students/students.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var AppModule = /** @class */ (function () {
    function AppModule(zone) {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _schools_schools_component__WEBPACK_IMPORTED_MODULE_3__["SchoolsComponent"],
                _schools_school_detail_school_detail_component__WEBPACK_IMPORTED_MODULE_6__["SchoolDetailComponent"],
                _schools_school_detail_settings_settings_component__WEBPACK_IMPORTED_MODULE_7__["SettingsComponent"],
                _schools_school_detail_classes_classes_component__WEBPACK_IMPORTED_MODULE_8__["ClassesComponent"],
                _schools_school_detail_teachers_teachers_component__WEBPACK_IMPORTED_MODULE_9__["TeachersComponent"],
                _schools_school_detail_students_students_component__WEBPACK_IMPORTED_MODULE_10__["StudentsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/schools/school-detail/classes/classes.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/schools/school-detail/classes/classes.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/schools/school-detail/classes/classes.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/schools/school-detail/classes/classes.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  classes works!\n</p>\n"

/***/ }),

/***/ "./src/app/schools/school-detail/classes/classes.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/schools/school-detail/classes/classes.component.ts ***!
  \********************************************************************/
/*! exports provided: ClassesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassesComponent", function() { return ClassesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ClassesComponent = /** @class */ (function () {
    function ClassesComponent() {
    }
    ClassesComponent.prototype.ngOnInit = function () {
    };
    ClassesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-classes',
            template: __webpack_require__(/*! ./classes.component.html */ "./src/app/schools/school-detail/classes/classes.component.html"),
            styles: [__webpack_require__(/*! ./classes.component.css */ "./src/app/schools/school-detail/classes/classes.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ClassesComponent);
    return ClassesComponent;
}());



/***/ }),

/***/ "./src/app/schools/school-detail/school-detail.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/schools/school-detail/school-detail.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/schools/school-detail/school-detail.component.html":
/*!********************************************************************!*\
  !*** ./src/app/schools/school-detail/school-detail.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main *ngIf=\"school\">\n  <ul class=\"nav\">\n    <li class=\"nav-item\" *ngFor=\"let nav of navs\">\n      <a class=\"nav-link\" [class.border-bottom]=\"nav_selected === nav\" href=\"#\" (click)=\"changeNav(nav)\">{{nav.name}}</a>\n    </li>\n  </ul>\n  <div *ngIf=\"nav_selected\">\n      <app-settings *ngIf=\"nav_selected==navs[0]\" [school]=\"school\"></app-settings>\n      <app-classes *ngIf=\"nav_selected==navs[1]\"></app-classes>\n      <app-teachers *ngIf=\"nav_selected==navs[2]\"></app-teachers>\n      <app-students *ngIf=\"nav_selected==navs[3]\"></app-students>\n  </div>\n  \n  \n</main>"

/***/ }),

/***/ "./src/app/schools/school-detail/school-detail.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/schools/school-detail/school-detail.component.ts ***!
  \******************************************************************/
/*! exports provided: SchoolDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchoolDetailComponent", function() { return SchoolDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SchoolDetailComponent = /** @class */ (function () {
    function SchoolDetailComponent(cdr) {
        this.cdr = cdr;
        this.navs = [
            { name: 'Settings' }, { name: 'Classes' }, new Nav('Teachers'), new Nav('Students')
        ];
    }
    SchoolDetailComponent.prototype.changeNav = function (nav) { this.nav_selected = nav; this.cdr.detectChanges(); };
    SchoolDetailComponent.prototype.ngOnInit = function () {
        this.nav_selected = this.navs[0];
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SchoolDetailComponent.prototype, "school", void 0);
    SchoolDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-school-detail',
            template: __webpack_require__(/*! ./school-detail.component.html */ "./src/app/schools/school-detail/school-detail.component.html"),
            styles: [__webpack_require__(/*! ./school-detail.component.css */ "./src/app/schools/school-detail/school-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], SchoolDetailComponent);
    return SchoolDetailComponent;
}());

var Nav = /** @class */ (function () {
    function Nav(name) {
        this.name = name;
    }
    return Nav;
}());


/***/ }),

/***/ "./src/app/schools/school-detail/settings/school.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/schools/school-detail/settings/school.service.ts ***!
  \******************************************************************/
/*! exports provided: SchoolService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchoolService", function() { return SchoolService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _account_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../account-service.service */ "./src/app/account-service.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SchoolService = /** @class */ (function () {
    function SchoolService(accountService, httpClient) {
        this.accountService = accountService;
        this.httpClient = httpClient;
    }
    SchoolService.prototype.deleteSchool = function (school) {
        return this.httpClient.delete(school.url, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set("Authorization", "Token " + this.accountService.token)
        });
    };
    SchoolService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_account_service_service__WEBPACK_IMPORTED_MODULE_1__["AccountServiceService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SchoolService);
    return SchoolService;
}());



/***/ }),

/***/ "./src/app/schools/school-detail/settings/settings.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/schools/school-detail/settings/settings.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/schools/school-detail/settings/settings.component.html":
/*!************************************************************************!*\
  !*** ./src/app/schools/school-detail/settings/settings.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main>\n  <div class=\"card\" style=\"width: 330px\">\n    <div class=\"container\">\n\n        <div class=\"input-group\">\n            <input class=\"form-control\" type=\"text\" value=\"{{ school.name }}\">\n            <div class=\"input-group-append\">\n              <button class=\"btn btn-primary\">Change</button>\n            </div>\n          </div>\n          <button class=\"btn btn-danger\" type=\"button\" data-toggle=\"modal\" data-target=\"#exampleModal\">Delete</button>\n    </div>\n  </div>\n\n  <div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n      <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <h5 class=\"modal-title text-danger\" id=\"exampleModalLabel\">Delete School?</h5>\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n              <span aria-hidden=\"true\">&times;</span>\n            </button>\n          </div>\n          <div class=\"modal-body\">\n            You Sure want to delete this school? This action is irreversible and you will loose all your database\n            regarding this\n          </div>\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n            <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\" (click)=\"deleteSchool(school)\">Yaaaas</button>\n          </div>\n        </div>\n      </div>\n    </div>\n\n\n</main>"

/***/ }),

/***/ "./src/app/schools/school-detail/settings/settings.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/schools/school-detail/settings/settings.component.ts ***!
  \**********************************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _school_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./school.service */ "./src/app/schools/school-detail/settings/school.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(schoolService) {
        this.schoolService = schoolService;
    }
    SettingsComponent.prototype.ngOnInit = function () {
    };
    SettingsComponent.prototype.deleteSchool = function (school) {
        console.log(school.name, "should be deleted", school.url);
        this.schoolService.deleteSchool(school).subscribe(function (data) {
            console.log(data);
            document.location.reload();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SettingsComponent.prototype, "school", void 0);
    SettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/schools/school-detail/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.css */ "./src/app/schools/school-detail/settings/settings.component.css")]
        }),
        __metadata("design:paramtypes", [_school_service__WEBPACK_IMPORTED_MODULE_1__["SchoolService"]])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/schools/school-detail/students/students.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/schools/school-detail/students/students.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/schools/school-detail/students/students.component.html":
/*!************************************************************************!*\
  !*** ./src/app/schools/school-detail/students/students.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  students works!\n</p>\n"

/***/ }),

/***/ "./src/app/schools/school-detail/students/students.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/schools/school-detail/students/students.component.ts ***!
  \**********************************************************************/
/*! exports provided: StudentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentsComponent", function() { return StudentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StudentsComponent = /** @class */ (function () {
    function StudentsComponent() {
    }
    StudentsComponent.prototype.ngOnInit = function () {
    };
    StudentsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-students',
            template: __webpack_require__(/*! ./students.component.html */ "./src/app/schools/school-detail/students/students.component.html"),
            styles: [__webpack_require__(/*! ./students.component.css */ "./src/app/schools/school-detail/students/students.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StudentsComponent);
    return StudentsComponent;
}());



/***/ }),

/***/ "./src/app/schools/school-detail/teachers/teachers.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/schools/school-detail/teachers/teachers.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/schools/school-detail/teachers/teachers.component.html":
/*!************************************************************************!*\
  !*** ./src/app/schools/school-detail/teachers/teachers.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  teachers works!\n</p>\n"

/***/ }),

/***/ "./src/app/schools/school-detail/teachers/teachers.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/schools/school-detail/teachers/teachers.component.ts ***!
  \**********************************************************************/
/*! exports provided: TeachersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeachersComponent", function() { return TeachersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TeachersComponent = /** @class */ (function () {
    function TeachersComponent() {
    }
    TeachersComponent.prototype.ngOnInit = function () {
    };
    TeachersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-teachers',
            template: __webpack_require__(/*! ./teachers.component.html */ "./src/app/schools/school-detail/teachers/teachers.component.html"),
            styles: [__webpack_require__(/*! ./teachers.component.css */ "./src/app/schools/school-detail/teachers/teachers.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TeachersComponent);
    return TeachersComponent;
}());



/***/ }),

/***/ "./src/app/schools/school.service.ts":
/*!*******************************************!*\
  !*** ./src/app/schools/school.service.ts ***!
  \*******************************************/
/*! exports provided: SchoolService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchoolService", function() { return SchoolService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _account_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../account-service.service */ "./src/app/account-service.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SchoolService = /** @class */ (function () {
    function SchoolService(acService, httpClient) {
        this.acService = acService;
        this.httpClient = httpClient;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .set('Authorization', 'Token ' + this.acService.token);
    }
    SchoolService.prototype.getMySchools = function () {
        return this.httpClient.get(this.acService.server_base_url + '/school/?format=json', { headers: this.headers, observe: "body", responseType: "json" });
    };
    SchoolService.prototype.createSchool = function (name) {
        return this.httpClient.post(this.acService.server_base_url + '/school/?format=json', new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('name', name), {
            headers: this.headers,
            observe: "body",
            responseType: "json"
        });
    };
    SchoolService.prototype.searchSchool = function (q) {
        return this.httpClient.get(this.acService.server_base_url + '/school/search/?format=json&q=' + q, {
            headers: this.headers,
            observe: "body",
            responseType: "json"
        });
    };
    SchoolService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_account_service_service__WEBPACK_IMPORTED_MODULE_1__["AccountServiceService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SchoolService);
    return SchoolService;
}());



/***/ }),

/***/ "./src/app/schools/schools.component.css":
/*!***********************************************!*\
  !*** ./src/app/schools/schools.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search-school{\n    display: inline-block;\n    height: 100%;\n    min-width: 200px;\n}"

/***/ }),

/***/ "./src/app/schools/schools.component.html":
/*!************************************************!*\
  !*** ./src/app/schools/schools.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light\" style=\"background-color: #eee\">\n  <a class=\"navbar-brand\" href=\"#\"> School </a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item\" [class.active]=\"nav2=='home'\">\n        <a class=\"nav-link\" (click)=\"change_nav2('home')\" href=\"#\">Home</a>\n      </li>\n      <li class=\"nav-item\" [class.active]=\"nav2=='myschools'\">\n        <a class=\"nav-link\" (click)=\"change_nav2('myschools')\" href=\"#\">My Schools</a>\n      </li>\n      <li class=\"nav-item\" [class.active]=\"nav2=='search'\">\n        <a class=\"nav-link\" (click)=\"change_nav2('search')\" href=\"#\">Search</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n<div class=\"card\" *ngIf=\"nav2=='myschools'\">\n  <div class=\"card-body\">\n    <h5 class=\"card-title\">My Schools</h5>\n      <div class=\"row\">\n  <div class=\"col-md-2 border-right\">\n    <div class=\"input-group\">\n      <input class=\"form-control\" type=\"text\" placeholder=\"School Name\" [(ngModel)]=\"new_school_name\">\n      <button class=\"btn btn-primary\" type=\"button\" (click)=\"createSchool()\">Create</button>\n    </div>\n    <div class=\"list-group\">\n      <a *ngFor=\"let school of school_list\"\n          (click)=\"onSchoolSelect(school)\"\n          [class.active]=\"school === selectedSchool\"\n          href=\"#\" class=\"list-group-item list-group-item-action\">\n          {{ school.name }}\n      </a>\n    </div>\n  </div>\n  <div class=\"col-md-10 float-md-left\">\n    <app-school-detail [school]=\"selectedSchool\"></app-school-detail>\n  </div>\n\n      </div>\n  </div>\n</div>\n<div class=\"card\" *ngIf=\"nav2=='home'\">\n  <div class=\"card-body\">\n    <h5 class=\"card-title\">Home</h5>\n    <p class=\"card-text\">Content</p>\n  </div>\n</div>\n<div class=\"card\" *ngIf=\"nav2=='search'\">\n  <div class=\"row\" style=\"width: 100%;margin: 0;\">\n    <div class=\"col-md-4 float-md-left\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">Search for a school</h5>\n        <div class=\"input-group\">\n          <input class=\"form-control\" type=\"text\" [(ngModel)]=\"search_school_name\">\n          <button class=\"btn btn-primary\" type=\"button\" (click)=\"search()\" >Search</button>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-8 float-md-left\" style=\"margin: 0; padding: 0;\">\n      <div class=\"\" style=\"height: 100%; width: 100%; overflow-x: scroll; white-space: nowrap;\">\n        <div class=\"search-school\" *ngFor=\"let sschool of search_school_results\">\n          <div class=\"card\" style=\"width: 100%;height: 100%;\">\n            <div class=\"card-body\">\n              <h5 class=\"card-title\">{{sschool.name}}</h5>\n              <p class=\"card-text\">Content</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/schools/schools.component.ts":
/*!**********************************************!*\
  !*** ./src/app/schools/schools.component.ts ***!
  \**********************************************/
/*! exports provided: SchoolsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchoolsComponent", function() { return SchoolsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _school_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./school.service */ "./src/app/schools/school.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SchoolsComponent = /** @class */ (function () {
    function SchoolsComponent(schoolService, cdr) {
        this.schoolService = schoolService;
        this.cdr = cdr;
        this.new_school_name = '';
        this.nav2 = 'home';
        /* lol now we have to show 'the found schools' and also show the option to apply, this is fucking crazy */
        this.search_school_name = '';
    }
    SchoolsComponent.prototype.ngOnInit = function () {
        this.refreshSchool();
    };
    SchoolsComponent.prototype.refreshSchool = function () {
        var _this = this;
        this.schoolService.getMySchools()
            .subscribe(function (value) {
            //console.log(data);
            _this.school_list = value;
            //this.new_school_name='';
            //this.cdr.detectChanges();
        });
    };
    SchoolsComponent.prototype.createSchool = function () {
        var _this = this;
        this.schoolService.createSchool(this.new_school_name)
            .subscribe(function (data) {
            console.log(data);
            _this.refreshSchool();
        });
    };
    // handling new navs //
    SchoolsComponent.prototype.change_nav2 = function (s) {
        this.nav2 = s;
        this.cdr.detectChanges();
    };
    SchoolsComponent.prototype.onSchoolSelect = function (school) {
        this.selectedSchool = school;
        // console.log('here');
        this.cdr.detectChanges();
    };
    SchoolsComponent.prototype.search = function () {
        var _this = this;
        // console.log(this.search_school_name);
        this.schoolService.searchSchool(this.search_school_name)
            .subscribe(function (value) {
            _this.search_school_results = value;
            _this.cdr.detectChanges();
            //console.log(typeof(value), value);
        });
    };
    SchoolsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-schools',
            template: __webpack_require__(/*! ./schools.component.html */ "./src/app/schools/schools.component.html"),
            styles: [__webpack_require__(/*! ./schools.component.css */ "./src/app/schools/schools.component.css")]
        }),
        __metadata("design:paramtypes", [_school_service__WEBPACK_IMPORTED_MODULE_1__["SchoolService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], SchoolsComponent);
    return SchoolsComponent;
}());



/***/ }),

/***/ "./src/app/server.ts":
/*!***************************!*\
  !*** ./src/app/server.ts ***!
  \***************************/
/*! exports provided: Server */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Server", function() { return Server; });
var Server = /** @class */ (function () {
    function Server(name, base_url) {
        this.name = name;
        this.base_url = base_url;
    }
    return Server;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /media/ray/Extra/Govind Singh/Documents/SM/webapp-angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map