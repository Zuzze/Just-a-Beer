webpackJsonp([0],{

/***/ 112:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 153:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 153;

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__meetings_meetings__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notifications_notifications__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_profile__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__add_event_add_event__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__meetings_meetings__["a" /* MeetingsPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_5__add_event_add_event__["a" /* AddEventPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_2__notifications_notifications__["a" /* NotificationsPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_4__profile_profile__["a" /* ProfilePage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/Zuzze/Desktop/CodingProjects/mobile/just-a-beer/src/pages/tabs/tabs.html"*/`<ion-tabs class="tabs-icon-top tabs-striped">\n  <ion-tab [root]="tab1Root" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabIcon="beer"></ion-tab>\n  <ion-tab [root]="tab3Root" tabIcon="add-circle"></ion-tab>\n  <ion-tab [root]="tab4Root" tabIcon="notifications" tabBadge="5" tabBadgeStyle="s-dark"></ion-tab>\n  <ion-tab [root]="tab5Root" tabIcon="person"></ion-tab>\n</ion-tabs>\n`/*ion-inline-end:"/Users/Zuzze/Desktop/CodingProjects/mobile/just-a-beer/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeetingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_data_HangoutData__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_data_UserData__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MeetingsPage = (function () {
    function MeetingsPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.joiningEvents = __WEBPACK_IMPORTED_MODULE_2__assets_data_HangoutData__["c" /* HangoutData */];
        this.hostingEvents = __WEBPACK_IMPORTED_MODULE_2__assets_data_HangoutData__["c" /* HangoutData */];
        this.pendingEvents = __WEBPACK_IMPORTED_MODULE_2__assets_data_HangoutData__["c" /* HangoutData */];
        this.userData = __WEBPACK_IMPORTED_MODULE_3__assets_data_UserData__["b" /* UserData */];
        this.tab = 'joining';
    }
    MeetingsPage.prototype.ngOnInit = function () {
        var hangoutData = __WEBPACK_IMPORTED_MODULE_2__assets_data_HangoutData__["c" /* HangoutData */];
        var currentUserId = 0;
        this.hostingEvents = this.getHostingEvents(hangoutData, currentUserId);
        this.joiningEvents = this.getJoiningEvents(hangoutData, currentUserId);
        this.pendingEvents = this.getPendingEvents(hangoutData, currentUserId);
    };
    MeetingsPage.prototype.getHostingEvents = function (hangouts, userId) {
        var hosted = [];
        if (hangouts.length > 0) {
            hosted = hangouts.filter(function (hangout) { return hangout.owner === userId; });
        }
        console.log("HOSTING");
        console.log(hosted);
        return hosted;
    };
    MeetingsPage.prototype.getJoiningEvents = function (hangouts, userId) {
        var joining = [];
        if (hangouts.length > 0) {
            joining = hangouts.filter(function (hangout) { return hangout.confirmedUsers.includes(userId); });
        }
        console.log("JOINING");
        console.log(joining);
        return joining;
    };
    MeetingsPage.prototype.getPendingEvents = function (hangouts, userId) {
        var pending = [];
        if (hangouts.length > 0) {
            pending = hangouts.filter(function (hangout) { return hangout.pendingUsers.includes(userId); });
        }
        console.log("PENDING");
        console.log(pending);
        return pending;
    };
    //workaround to bug in ion-segment component
    MeetingsPage.prototype.segmentChanged = function (segment) {
        if (segment == "hosting") {
            this.tab = 'hosting';
            document.getElementById("joining").hidden = true;
            document.getElementById("pending").hidden = true;
            document.getElementById("hosting").hidden = false;
        }
        else if (segment == "pending") {
            this.tab = 'pending';
            document.getElementById("joining").hidden = true;
            document.getElementById("pending").hidden = false;
            document.getElementById("hosting").hidden = true;
        }
        else {
            this.tab = 'joining';
            document.getElementById("joining").hidden = false;
            document.getElementById("pending").hidden = true;
            document.getElementById("hosting").hidden = true;
        }
    };
    MeetingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-meetings',template:/*ion-inline-start:"/Users/Zuzze/Desktop/CodingProjects/mobile/just-a-beer/src/pages/meetings/meetings.html"*/`<ion-header>\n  <ion-navbar>\n    <ion-title align="center">\n      My Hangouts\n    </ion-title>\n  </ion-navbar>\n\n  <ion-row class="theme-segment-static theme-segments">\n    <ion-col text-center id="joiningTab" name="joining" [ngClass]="(tab == \'joining\') ? \'theme-segment-active\' : \'theme-segment-inactive\'" (click)="segmentChanged(\'joining\')"><span>JOINING</span></ion-col>\n    <ion-col text-center id="pendingTab"  name="pending" [ngClass]="(tab == \'pending\') ? \'theme-segment-active\' : \'theme-segment-inactive\'" (click)="segmentChanged(\'pending\')"><span>PENDING</span></ion-col>\n    <ion-col text-center id="hostingTab"  name="hosting" [ngClass]="(tab == \'hosting\') ? \'theme-segment-active\' : \'theme-segment-inactive\'" (click)="segmentChanged(\'hosting\')"><span>HOSTING</span></ion-col>\n  </ion-row>\n\n</ion-header>\n\n<!-- Tabs content -->\n<ion-content padding class="background">\n  <div id="joining" class="joining_content" ng-show="activeButton === \'JOINING\'">\n    <hangout-card *ngFor="let j of joiningEvents" [hangout]="j"></hangout-card>\n  </div>\n  <div id="pending" class="pending_content" ng-show="activeButton === \'PENDING\'">\n    <hangout-card *ngFor="let p of pendingEvents" [hangout]="p"></hangout-card>\n  </div>\n  <div id="hosting" class="hosting_content" ng-show="activeButton === \'HOSTING\'">\n      <hangout-card *ngFor="let h of hostingEvents" [hangout]="h"></hangout-card>\n  </div>\n</ion-content>\n`/*ion-inline-end:"/Users/Zuzze/Desktop/CodingProjects/mobile/just-a-beer/src/pages/meetings/meetings.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], MeetingsPage);
    return MeetingsPage;
}());

//# sourceMappingURL=meetings.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotificationsPage = (function () {
    function NotificationsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    NotificationsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-notifications',template:/*ion-inline-start:"/Users/Zuzze/Desktop/CodingProjects/mobile/just-a-beer/src/pages/notifications/notifications.html"*/`<ion-header>\n  <ion-navbar>\n    <ion-title align="center">\n      Notifications\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="background">\n  <ion-list>\n    <ion-item text-wrap text-right class="card-bg">\n      <p text-left>Girl24 wants to join your hangout!</p>\n      <button ion-button color="ok">Approve</button>\n      <button ion-button color="danger">Decline</button>\n    </ion-item>\n    <ion-item text-wrap text-right class="card-bg">\n      <p text-left>Your request to join hangout PARTY has been approved!</p>\n      <button ion-button>View</button>\n    </ion-item>\n    <ion-item text-wrap text-right class="card-bg">\n      <p text-left> AnnoyingUser added a new comment to your hangout! </p>\n      <button ion-button>View</button>\n    </ion-item>\n    <ion-item text-wrap text-right class="card-bg">\n      <p text-left>PartyPenguin wants to join your hangout!</p>\n      <button ion-button color="ok">Approve</button>\n      <button ion-button color="danger">Decline</button>\n    </ion-item>\n    <ion-item text-wrap text-right class="card-bg">\n      <p text-left>Matt22 wants to join your hangout!</p>\n      <button ion-button color="ok">Approve</button>\n      <button ion-button color="danger">Decline</button>\n    </ion-item>\n  </ion-list>\n</ion-content>\n`/*ion-inline-end:"/Users/Zuzze/Desktop/CodingProjects/mobile/just-a-beer/src/pages/notifications/notifications.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], NotificationsPage);
    return NotificationsPage;
}());

//# sourceMappingURL=notifications.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_data_HangoutData__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.hangoutData = __WEBPACK_IMPORTED_MODULE_2__assets_data_HangoutData__["c" /* HangoutData */];
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/Zuzze/Desktop/CodingProjects/mobile/just-a-beer/src/pages/home/home.html"*/`<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Filter Hangouts</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content class="card-bg">\n      <ion-list radio-group>\n          <ion-item color="secondary">\n            Sort by\n          </ion-item>\n          <ion-item class="card-bg">\n            <ion-label>Time</ion-label>\n            <ion-radio checked value="time"></ion-radio>\n          </ion-item>\n          <ion-item class="card-bg">\n            <ion-label>Distance</ion-label>\n            <ion-radio value="distance"></ion-radio>\n          </ion-item>\n      </ion-list>\n      <ion-list radio-group [(ngModel)]="size">\n        <ion-item color="secondary">\n          Size\n        </ion-item>\n        <ion-item class="card-bg">\n          <ion-label>Group</ion-label>\n          <ion-checkbox value="group" checked="true"></ion-checkbox>\n        </ion-item>\n        <ion-item class="card-bg">\n          <ion-label>One-on-one</ion-label>\n          <ion-checkbox value="one"></ion-checkbox>\n        </ion-item>\n      </ion-list>\n      <ion-list radio-group [(ngModel)]="type">\n        <ion-item color="secondary">\n          Type\n        </ion-item>\n        <ion-item class="card-bg">\n          <ion-label>Beer</ion-label>\n          <ion-checkbox value="beer" checked="true"></ion-checkbox>\n        </ion-item>\n        <ion-item class="card-bg">\n          <ion-label>Food</ion-label>\n          <ion-checkbox value="food"></ion-checkbox>\n        </ion-item>\n        <ion-item class="card-bg">\n          <ion-label>Coffee</ion-label>\n          <ion-checkbox value="coffee"></ion-checkbox>\n        </ion-item>\n      </ion-list>\n  </ion-content>\n</ion-menu>\n\n<ion-header>\n  <ion-navbar>\n    <ion-row>\n      <ion-col col-2>\n        <button start ion-button icon-only menuToggle>\n          <ion-icon name="options" class="navbar-icon"></ion-icon>\n        </button>\n      </ion-col>\n      <ion-col col-10>\n        <ion-title align="center" style="margin-left:-44px">\n          Just a Beer\n        </ion-title>\n      </ion-col>\n    </ion-row>\n  </ion-navbar>\n</ion-header>\n<!-- First tab -->\n<ion-content padding #content class="background">\n<ion-list>\n\n    <hangout-card *ngFor="let h of hangoutData" [hangout]="h"></hangout-card>\n\n  </ion-list>\n</ion-content>\n`/*ion-inline-end:"/Users/Zuzze/Desktop/CodingProjects/mobile/just-a-beer/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddEventPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_data_UserData__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_data_HangoutData__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddEventPage = (function () {
    function AddEventPage(navCtrl) {
        this.navCtrl = navCtrl;
        var now = new Date();
        this.date = now.getDate() + " " + now.getMonth() + " " + now.getFullYear();
        this.startTime = now.getHours() + " " + now.getMinutes();
        this.endTime = now.getHours() + " " + now.getMinutes();
    }
    AddEventPage.prototype.handleClick = function () {
        var typeid = 0;
        var t = this;
        __WEBPACK_IMPORTED_MODULE_3__assets_data_HangoutData__["b" /* EventTypes */].forEach(function (el, id, bs) {
            if (t.type == el)
                typeid = id;
        });
        __WEBPACK_IMPORTED_MODULE_3__assets_data_HangoutData__["c" /* HangoutData */].splice(0, 0, {
            id: 1,
            fromTime: new Date(this.date + ' ' + this.startTime),
            toTime: new Date(this.date + ' ' + this.endTime),
            description: this.description,
            place: this.location,
            type: __WEBPACK_IMPORTED_MODULE_3__assets_data_HangoutData__["b" /* EventTypes */][typeid],
            owner: __WEBPACK_IMPORTED_MODULE_2__assets_data_UserData__["b" /* UserData */][0].id,
            pendingUsers: [],
            confirmedUsers: [],
            rejectedUsers: [],
            commentIds: [],
            privateMessageIds: [],
        });
        this.navCtrl.parent.select(0);
    };
    AddEventPage.prototype.cancelCreateEvent = function () {
        this.navCtrl.parent.select(0);
    };
    AddEventPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-event',template:/*ion-inline-start:"/Users/Zuzze/Desktop/CodingProjects/mobile/just-a-beer/src/pages/add-event/add-event.html"*/`<ion-header>\n  <ion-navbar>\n    <ion-title align="center">\n      Create Hangout\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="background">\n  <ion-list>\n    <!-- ion-item>\n        <ion-label fixed>Title</ion-label>\n        <ion-input type="text" value="" [(ngModel)]="title"></ion-input>\n    </ion-item -->\n    <ion-item class="card-bg">\n        <ion-label fixed>Description</ion-label>\n        <ion-textarea value="" [(ngModel)]="description"></ion-textarea>\n    </ion-item>\n    <ion-item class="card-bg">\n        <ion-label fixed>Date</ion-label>\n        <ion-datetime displayFormat="DD.MM.YYYY" pickerFormat="DD.MM.YYYY" [(ngModel)]="date"></ion-datetime>\n    </ion-item>\n    <ion-item class="card-bg">\n        <ion-label fixed>Start time</ion-label>\n        <ion-datetime displayFormat="HH:mm" pickerFormat="HH:mm" [(ngModel)]="startTime"></ion-datetime>\n    </ion-item>\n    <ion-item class="card-bg">\n        <ion-label fixed>End time</ion-label>\n        <ion-datetime displayFormat="HH:mm" pickerFormat="HH:mm" [(ngModel)]="endTime" class="card-bg"></ion-datetime>\n    </ion-item>\n    <ion-item class="card-bg">\n        <ion-label fixed>Location</ion-label>\n        <ion-input type="text" value="" [(ngModel)]="location"></ion-input>\n    </ion-item>\n    <ion-item class="card-bg">\n        <ion-label class="card-header" id="eventType">Type of event</ion-label>\n        <ion-select [(ngModel)]="type" class="card-bg">\n          <ion-option class="card-bg" value="beer">Beer</ion-option>\n          <ion-option class="card-bg" value="coffee">Coffee</ion-option>\n          <ion-option class="card-bg" value="food">Food</ion-option>\n        </ion-select>\n      </ion-item>\n    </ion-list>\n    <button ion-button round margin class="theme-button" (click)="handleClick()">CREATE</button>\n    <button ion-button round margin-left margin-right class="theme-button" (click)="cancelCreateEvent()">CANCEL</button>\n</ion-content>\n`/*ion-inline-end:"/Users/Zuzze/Desktop/CodingProjects/mobile/just-a-beer/src/pages/add-event/add-event.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], AddEventPage);
    return AddEventPage;
}());

//# sourceMappingURL=add-event.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Hangout; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_data_UserData__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_data_HangoutData__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_profile_profile__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var statusTypes = ["Owner", "Confirmed", "Pending", "None"];
var Hangout = (function () {
    function Hangout(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tab = 'comments';
        this.userData = __WEBPACK_IMPORTED_MODULE_2__assets_data_UserData__["b" /* UserData */];
        this.comments = [];
        this.messages = [];
        this.commentData = __WEBPACK_IMPORTED_MODULE_3__assets_data_HangoutData__["a" /* Comments */];
        this.newComment = "";
        this.data = this.navParams.get('data');
    }
    Hangout.prototype.ngOnInit = function () {
        var today = new Date();
        if (this.data.fromTime.getDate() === today.getDate()) {
            this.date = "TODAY";
        }
        else {
            this.date = this.data.fromTime.getDate().toLocaleString() + "/" + this.data.fromTime.getMonth().toLocaleString();
        }
        this.fromTime = this.data.fromTime.getHours().toLocaleString();
        this.toTime = this.data.toTime.getHours().toLocaleString();
        this.segmentChanged({ commentSection: "comments" });
        this.comments = this.getComments(this.commentData, this.data.commentIds);
        this.messages = this.getComments(this.commentData, this.data.privateMessageIds);
        this.status = this.data.owner === __WEBPACK_IMPORTED_MODULE_2__assets_data_UserData__["a" /* CurrentUser */]
            ? statusTypes[0]
            : this.data.confirmedUsers.filter(function (c) { return c === __WEBPACK_IMPORTED_MODULE_2__assets_data_UserData__["a" /* CurrentUser */]; }).length == 1
                ? statusTypes[1]
                : this.data.pendingUsers.filter(function (c) { return c === __WEBPACK_IMPORTED_MODULE_2__assets_data_UserData__["a" /* CurrentUser */]; }).length == 1
                    ? statusTypes[2]
                    : statusTypes[3];
    };
    Hangout.prototype.getComments = function (commentData, commentIds) {
        if (commentIds.length > 0) {
            return commentIds.reduce(function (res, currentId) {
                return res.concat(commentData.filter(function (c) {
                    return c.id === currentId;
                }));
            }, []);
        }
        else
            return [];
    };
    Hangout.prototype.setComment = function (val) {
        this.newComment = val;
        console.log(this.newComment);
    };
    Hangout.prototype.addComment = function () {
        console.log(this.newComment);
    };
    Hangout.prototype.segmentChanged = function (segment) {
        console.log(segment);
        if (segment == "messages") {
            this.tab = "messages";
            document.getElementById("comments").hidden = true;
            document.getElementById("messages").hidden = false;
        }
        else {
            //also default
            this.tab = 'comments';
            document.getElementById("comments").hidden = false;
            document.getElementById("messages").hidden = true;
        }
    };
    Hangout.prototype.handleProfileClick = function (u) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_profile_profile__["a" /* ProfilePage */], { data: this.userData[u] });
    };
    Hangout.prototype.handleStateChange = function (prevStatus) {
        this.status = prevStatus == "None"
            ? "Pending"
            : "None";
    };
    Hangout = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'hangout',template:/*ion-inline-start:"/Users/Zuzze/Desktop/CodingProjects/mobile/just-a-beer/src/pages/hangout/hangout.html"*/`<ion-header>\n    <ion-navbar>\n      <ion-title>\n        Hangout with {{ userData[data.owner].name }}\n      </ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content padding class="background">\n  <ion-card>\n    <ion-navbar padding color="s-dark" class="card-header">\n      <ion-row>\n        <ion-col col-2>\n          <ion-icon item-start style="padding-right:10px" name="beer"></ion-icon>\n        </ion-col>\n        <ion-col col-10>\n          <h2 item-start class="card-text"> {{ data.description }}</h2>\n        </ion-col>\n      </ion-row>\n    </ion-navbar>\n    <ion-item>\n      <ion-icon item-start name="clock" color="s-dark"></ion-icon>\n      <h3> {{ date + " @ " + fromTime + " - " + toTime }} </h3>\n    </ion-item>\n    <ion-item>\n      <ion-icon name="pin" item-start color="s-dark"></ion-icon><h3>{{ data.place }}</h3>\n    </ion-item>\n    <ion-row>\n      <ion-col>\n        <ion-icon class="people-icon" color="s-dark" name="people"></ion-icon>\n        <ion-chip class="people-chip" color="secondary" *ngFor="let u of data.confirmedUsers" (click)="handleProfileClick(u)" >\n          <ion-label>{{userData[u].name}}</ion-label>\n        </ion-chip>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-icon class="people-icon" color="s-dark" name="beer"></ion-icon>\n        <ion-chip class="people-chip" color="secondary">\n          <ion-label>{{data.type}}</ion-label>\n        </ion-chip>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <button ion-button (click)="handleStateChange(status)" *ngIf="status == \'None\'" ion-button round outline margin class="request-button">REQUEST TO JOIN</button>\n        <button ion-button *ngIf="status == \'Pending\'" ion-button round outline margin class="pending-button">PENDING REQUEST</button>\n        <button ion-button (click)="handleStateChange(status)" *ngIf="status == \'Confirmed\'" ion-button round outline margin class="cancel-button">YOU\'RE GOING - CANCEL</button>\n        <button ion-button icon-left *ngIf="status == \'Owner\'" ion-button round outline margin class="theme-button"><ion-icon name="create" padding-right></ion-icon>EDIT</button>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <div style="margin:10px;">\n    <ion-row class="theme-segments">\n      <ion-col text-center id="commentsTab" value="comments" [ngClass]="(tab == \'comments\') ? \'theme-segment-active\' : \'theme-segment-inactive\'" (click) = "segmentChanged(\'comments\')"><span>COMMENTS</span></ion-col>\n      <ion-col text-center id="messagesTab"  value="messages" [ngClass]="(tab == \'messages\') ? \'theme-segment-active\' : \'theme-segment-inactive\'" (click) = "segmentChanged(\'messages\')"><span>MESSAGES</span></ion-col>\n    </ion-row>\n\n  <div id="comments" [ngSwitch]="commentSection">\n    <ion-list>\n        <comment-card *ngFor="let comment of comments" [content]="comment" [user]="userData[comment.author]"></comment-card>\n    </ion-list>\n    <ion-item>\n      <ion-input class="add-input" type="text" placeholder="Add comment"></ion-input>\n      <button class="add-input-button" (click)="addComment()" clear item-right><ion-icon name="send"></ion-icon></button>\n     </ion-item>\n  </div>\n\n  <div id="messages" [ngSwitch]="commentSection">\n        <div *ngIf="status == \'Confirmed\' || status == \'Owner\'">\n          <ion-list>\n            <comment-card *ngFor="let comment of messages" [content]="comment" [user]="userData[comment.author]"></comment-card>\n          </ion-list>\n          <ion-item color="light">\n          <ion-input class="add-input" [value]="newComment" (input)="setComment($event.target.value)" type="text" placeholder="Add comment"></ion-input>\n            <button class="add-input-button" (click)="addComment()" clear item-right><ion-icon class="icon" color="s-dark" name="send"></ion-icon></button>\n          </ion-item>\n        </div>\n        <div *ngIf="status != \'Confirmed\' && status != \'Owner\'">\n            <ion-card class="restricted-message"><ion-icon color="s-dark" name="lock"> </ion-icon><p>You will be able to access this section when you are accepted to the hangout.</p></ion-card>\n        </div>\n      </div>\n</div>\n\n</ion-content>\n`/*ion-inline-end:"/Users/Zuzze/Desktop/CodingProjects/mobile/just-a-beer/src/pages/hangout/hangout.html"*/,
            styles: ['hangout.scss']
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
    ], Hangout);
    return Hangout;
}());

//# sourceMappingURL=hangout.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(227);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_add_event_add_event__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_notifications_notifications__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_profile_profile__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_meetings_meetings__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_hangout_hangout__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_components_hangout_card_hangoutCard__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_components_comment_card_commentCard__ = __webpack_require__(280);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_add_event_add_event__["a" /* AddEventPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_notifications_notifications__["a" /* NotificationsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_meetings_meetings__["a" /* MeetingsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_hangout_hangout__["a" /* Hangout */],
                __WEBPACK_IMPORTED_MODULE_11__app_components_hangout_card_hangoutCard__["a" /* HangoutCard */],
                __WEBPACK_IMPORTED_MODULE_14__app_components_comment_card_commentCard__["a" /* CommentCard */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_add_event_add_event__["a" /* AddEventPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_notifications_notifications__["a" /* NotificationsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_meetings_meetings__["a" /* MeetingsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_hangout_hangout__["a" /* Hangout */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/Zuzze/Desktop/CodingProjects/mobile/just-a-beer/src/app/app.html"*/`<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n`/*ion-inline-end:"/Users/Zuzze/Desktop/CodingProjects/mobile/just-a-beer/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HangoutCard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_hangout_hangout__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_data_UserData__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_profile_profile__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { Profile } from '../../../pages/profile/profile';


var HangoutCard = (function () {
    function HangoutCard(navCtrl) {
        this.navCtrl = navCtrl;
        this.userData = __WEBPACK_IMPORTED_MODULE_3__assets_data_UserData__["b" /* UserData */];
    }
    HangoutCard.prototype.ngOnInit = function () {
        var today = new Date();
        if (this.data.fromTime.getDate() === today.getDate()) {
            this.date = "TODAY";
        }
        else {
            this.date = this.data.fromTime.getDate().toLocaleString() + "/" + this.data.fromTime.getMonth().toLocaleString();
        }
        this.fromTime = this.data.fromTime.getHours().toLocaleString();
        this.toTime = this.data.toTime.getHours().toLocaleString();
    };
    HangoutCard.prototype.handleClick = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_hangout_hangout__["a" /* Hangout */], { data: this.data });
    };
    HangoutCard.prototype.handleProfileClick = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_profile_profile__["a" /* ProfilePage */], { data: this.userData[this.data.owner] });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('hangout'),
        __metadata("design:type", Object)
    ], HangoutCard.prototype, "data", void 0);
    HangoutCard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'hangout-card',template:/*ion-inline-start:"/Users/Zuzze/Desktop/CodingProjects/mobile/just-a-beer/src/app/components/hangout-card/hangoutCard.html"*/`<ion-card>\n    <ion-row>\n      <ion-item (click)="handleProfileClick()" class="card-header">\n        <h2>{{data.type}}{{" @ " + fromTime + " - " + toTime + ", " + data.place}}</h2>\n      </ion-item>\n    </ion-row>\n  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2034.799529004293!2d18.07053785122437!3d59.336300717416215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9d5c98f9f455%3A0xcde99cb6f49a75b9!2sStureplan+1!5e0!3m2!1sen!2sse!4v1510312489877" width="100%" height="200" frameborder="0" style="border:0" allowfullscreen></iframe>\n    <ion-item text-wrap>\n      <h3>{{ userData[data.owner].name }}</h3>\n      <p> {{ data.description }}</p>\n  </ion-item>\n  <ion-row>\n    <ion-col text-center>\n      <button ion-button icon-left clear small color="secondary">\n        <ion-icon name="people"></ion-icon>\n        <div>{{ data.confirmedUsers.length }}</div>\n      </button>\n    </ion-col>\n    <ion-col text-center>\n      <button ion-button icon-left clear small color="secondary">\n        <ion-icon name="text"></ion-icon>\n        <div>{{ data.commentIds.length }}</div>\n      </button>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col text-center><button class="title-font theme-button" ion-button outline round margin-bottom (click)="handleClick()">SEE MORE</button></ion-col>\n  </ion-row>\n</ion-card>\n`/*ion-inline-end:"/Users/Zuzze/Desktop/CodingProjects/mobile/just-a-beer/src/app/components/hangout-card/hangoutCard.html"*/,
            styles: ['hangoutCard.scss']
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], HangoutCard);
    return HangoutCard;
}());

//# sourceMappingURL=hangoutCard.js.map

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Genders */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrentUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return UserData; });
var Genders = [
    'Male',
    'Female',
    'Other'
];
var CurrentUser = 0;
var UserData = {
    0: {
        id: 0,
        name: 'Girl24',
        about: 'Lalalal',
        gender: Genders[1],
        age: 23
    },
    1: {
        id: 1,
        name: 'PartyPenguin',
        about: 'Lalalal',
        gender: Genders[2],
        age: 25
    },
    2: {
        id: 2,
        name: 'Matt28',
        about: 'Lalalal',
        gender: Genders[0],
        age: 32
    },
    3: {
        id: 3,
        name: 'Anna',
        about: 'Not all who wander are lost',
        gender: Genders[0],
        age: 32
    }
};
//# sourceMappingURL=UserData.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentCard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_data_UserData__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_profile_profile__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CommentCard = (function () {
    function CommentCard(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userData = __WEBPACK_IMPORTED_MODULE_2__assets_data_UserData__["b" /* UserData */];
    }
    CommentCard.prototype.handleProfileClick = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_profile_profile__["a" /* ProfilePage */], { data: this.user });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('content'),
        __metadata("design:type", Object)
    ], CommentCard.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('user'),
        __metadata("design:type", Object)
    ], CommentCard.prototype, "user", void 0);
    CommentCard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'comment-card',template:/*ion-inline-start:"/Users/Zuzze/Desktop/CodingProjects/mobile/just-a-beer/src/app/components/comment-card/commentCard.html"*/`<ion-item class="comment-item card-bg card-text">\n    <ion-icon (click)="handleProfileClick()" item-start name="person"></ion-icon> <span class="user-name">{{user.name}}</span> <span>said {{data.comment}}</span>\n</ion-item>\n`/*ion-inline-end:"/Users/Zuzze/Desktop/CodingProjects/mobile/just-a-beer/src/app/components/comment-card/commentCard.html"*/,
            styles: ['commentCard.scss']
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
    ], CommentCard);
    return CommentCard;
}());

//# sourceMappingURL=commentCard.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return EventTypes; });
/* unused harmony export CommentTypes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Comments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return HangoutData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UserData__ = __webpack_require__(28);

var EventTypes = [
    'Beer',
    'Food',
    'Sports',
    'Coffee',
    'Work',
    'Learning'
];
var CommentTypes = ['publicComment', 'privateMessage'];
var Comments = [
    {
        id: 0,
        author: __WEBPACK_IMPORTED_MODULE_0__UserData__["b" /* UserData */][1].id,
        comment: "Hey is there gluten-free beer?",
        createdTime: new Date(),
        type: CommentTypes[0],
    },
    {
        id: 1,
        author: __WEBPACK_IMPORTED_MODULE_0__UserData__["b" /* UserData */][0].id,
        comment: "Nice idea!",
        createdTime: new Date(),
        type: CommentTypes[0],
    },
    {
        id: 2,
        author: __WEBPACK_IMPORTED_MODULE_0__UserData__["b" /* UserData */][2].id,
        comment: "Let's not invite Thomas, he's an asshole",
        createdTime: new Date(),
        type: CommentTypes[0],
    },
    {
        id: 3,
        author: __WEBPACK_IMPORTED_MODULE_0__UserData__["b" /* UserData */][0].id,
        comment: "Agree!",
        createdTime: new Date(),
        type: CommentTypes[1],
    },
    {
        id: 4,
        author: __WEBPACK_IMPORTED_MODULE_0__UserData__["b" /* UserData */][1].id,
        comment: "Secrettt!",
        createdTime: new Date(),
        type: CommentTypes[1],
    }
];
var HangoutData = [
    {
        id: 1,
        fromTime: new Date(2017, 11, 15, 21, 0, 0),
        toTime: new Date(2017, 11, 15, 22, 0, 0),
        description: "Is anyone up for just one beer tonight? Just one",
        place: "Södermalm",
        type: EventTypes[0],
        owner: __WEBPACK_IMPORTED_MODULE_0__UserData__["b" /* UserData */][0].id,
        pendingUsers: [__WEBPACK_IMPORTED_MODULE_0__UserData__["b" /* UserData */][2].id],
        confirmedUsers: [__WEBPACK_IMPORTED_MODULE_0__UserData__["b" /* UserData */][1].id],
        rejectedUsers: [],
        commentIds: [Comments[2].id, Comments[1].id],
        privateMessageIds: [Comments[4].id],
    },
    {
        id: 2,
        fromTime: new Date(2017, 11, 17, 19, 0, 0),
        toTime: new Date(2017, 11, 17, 20, 0, 0),
        description: "Tech people in town, do you know some nice cafe to work? let's go together!",
        place: "Kista Galleria",
        type: EventTypes[2],
        owner: __WEBPACK_IMPORTED_MODULE_0__UserData__["b" /* UserData */][1].id,
        pendingUsers: [__WEBPACK_IMPORTED_MODULE_0__UserData__["b" /* UserData */][0].id],
        confirmedUsers: [__WEBPACK_IMPORTED_MODULE_0__UserData__["b" /* UserData */][2].id],
        rejectedUsers: [],
        commentIds: [Comments[0].id, Comments[2].id],
        privateMessageIds: [Comments[2].id],
    },
    {
        id: 3,
        fromTime: new Date(2017, 11, 17, 20, 0, 0),
        toTime: new Date(2017, 11, 17, 22, 0, 0),
        description: "Tech people in town, let's go together!",
        place: "KTH Hallen",
        type: EventTypes[3],
        owner: __WEBPACK_IMPORTED_MODULE_0__UserData__["b" /* UserData */][2].id,
        pendingUsers: [],
        confirmedUsers: [],
        rejectedUsers: [],
        commentIds: [Comments[0].id, Comments[1].id],
        privateMessageIds: [Comments[2].id, Comments[3].id],
    },
    {
        id: 4,
        fromTime: new Date(2017, 11, 18, 20, 0, 0),
        toTime: new Date(2017, 11, 18, 22, 0, 0),
        description: "Anyone interested in Italy game?",
        place: "Östermalm",
        type: EventTypes[0],
        owner: __WEBPACK_IMPORTED_MODULE_0__UserData__["b" /* UserData */][3].id,
        pendingUsers: [],
        confirmedUsers: [__WEBPACK_IMPORTED_MODULE_0__UserData__["b" /* UserData */][0].id],
        rejectedUsers: [],
        commentIds: [Comments[2].id, Comments[1].id],
        privateMessageIds: [Comments[3].id],
    }
];
//# sourceMappingURL=HangoutData.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_data_UserData__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfilePage = (function () {
    function ProfilePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.isCurrentUser = true;
        this.data = this.navParams.get('data') ? this.navParams.get('data') : __WEBPACK_IMPORTED_MODULE_2__assets_data_UserData__["b" /* UserData */][__WEBPACK_IMPORTED_MODULE_2__assets_data_UserData__["a" /* CurrentUser */]];
        this.isCurrentUser = this.data.id === __WEBPACK_IMPORTED_MODULE_2__assets_data_UserData__["a" /* CurrentUser */];
    }
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"/Users/Zuzze/Desktop/CodingProjects/mobile/just-a-beer/src/pages/profile/profile.html"*/`<ion-header>\n  <ion-navbar>\n    <ion-title align="center">\n      {{data.name}}\'s Profile\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="background">\n  <ion-card class="card-bg">\n    <ion-row>\n      <ion-item text-center class="card-bg">\n        <h2 padding class="card-text">{{data.name}}</h2>\n          <img src="../../assets/imgs/beerlogo.png" style="height:250px; width: 160px; margin:auto">\n      </ion-item>\n    </ion-row>\n     <ion-card-content>\n          <ion-item class="card-bg">\n            <h2 item-start class="card-text">Age</h2>\n            <p item-end class="card-text">{{data.age}}</p>\n          </ion-item>\n          <ion-item class="card-bg">\n            <h2 item-start class="card-text">Gender</h2>\n            <p item-end class="card-text">{{data.gender}}</p>\n          </ion-item>\n          <ion-item class="card-bg">\n            <h2 class="card-text" item-start>About</h2>\n            <p class="card-text" item-end text-right>{{data.about}}</p>\n          </ion-item>\n      </ion-card-content>\n    </ion-card>\n    <button *ngIf="isCurrentUser" ion-button round margin class="theme-button">EDIT</button>\n</ion-content>\n`/*ion-inline-end:"/Users/Zuzze/Desktop/CodingProjects/mobile/just-a-beer/src/pages/profile/profile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ })

},[203]);
//# sourceMappingURL=main.js.map