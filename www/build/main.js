webpackJsonp([19],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__broken_broken__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fainting_fainting__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__burns_burns__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sunstroke_sunstroke__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__choking_choking__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__blood_circulation_blood_circulation__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__unconsciousness_unconsciousness__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__back_injuries_back_injuries__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__musculoskeletal_injuries_musculoskeletal_injuries__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__max_temperatures_max_temperatures__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__alien_objects_alien_objects__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__aches_aches__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__major_accidents_major_accidents__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__bandages_bandages__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__transportation_transportation__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__emergency_birth_emergency_birth__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__wounds_wounds__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__python_python__ = __webpack_require__(115);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




















/**
 * Generated class for the StatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StatePage = /** @class */ (function () {
    function StatePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.searchQuery = '';
        this.initializeItems();
    }
    StatePage.prototype.initializeItems = function () {
        this.items = [
            'الكسر',
            'ضربة شمس',
            'الاغماء',
            'الجروح والنزف',
            'الحروق',
            'الاختناق',
            'اظطرابات الدورة الدموية',
            'فقدان الوعي',
            'اصابات الظهر',
            'اصابات العضلات والمفاصل',
            'تاثير درجات الحرارة القصوى',
            'الاجسام الغريبة',
            'الاوجاع',
            'التصرف في الحوادث الكبرى',
            'الضمادات والعصائب',
            'التدبير والنقل',
            'الولادة الطارئة',
            'لدغة الافعى'
        ];
    };
    StatePage.prototype.getItems = function (ev) {
        var _this = this;
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the searchbar
        this.val = ev.target.value;
        this.items2 = this.val;
        console.log(this.val);
        // if the value is an empty string don't filter the items
        if (this.val && this.val.trim() != '') {
            this.items = this.items.filter(function (item) {
                return (item.toLowerCase().indexOf(_this.val.toLowerCase()) > -1);
            });
        }
    };
    StatePage.prototype.goToDatails = function (getitems) {
        for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
            var i = _a[_i];
            console.log(getitems);
            if (i == getitems) {
                if (i == 'الكسر') {
                    this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__broken_broken__["a" /* BrokenPage */]);
                }
                else if (i == 'ضربة شمس') {
                    this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__sunstroke_sunstroke__["a" /* SunstrokePage */]);
                }
                else if (i == 'الجروح والنزف') {
                    this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_18__wounds_wounds__["a" /* WoundsPage */]);
                }
                else if (i == 'الحروق') {
                    this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__burns_burns__["a" /* BurnsPage */]);
                }
                else if (i == 'الاغماء') {
                    this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__fainting_fainting__["a" /* FaintingPage */]);
                }
                else if (i == 'الاختناق') {
                    this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__choking_choking__["a" /* ChokingPage */]);
                }
                else if (i == 'اظطرابات الدورة الدموية') {
                    this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__blood_circulation_blood_circulation__["a" /* BloodCirculationPage */]);
                }
                else if (i == 'فقدان الوعي') {
                    this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__unconsciousness_unconsciousness__["a" /* UnconsciousnessPage */]);
                }
                else if (i == 'اصابات الظهر') {
                    this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__back_injuries_back_injuries__["a" /* BackInjuriesPage */]);
                }
                else if (i == 'اصابات العضلات والمفاصل') {
                    this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__musculoskeletal_injuries_musculoskeletal_injuries__["a" /* MusculoskeletalInjuriesPage */]);
                }
                else if (i == 'تاثير درجات الحرارة القصوى') {
                    this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__max_temperatures_max_temperatures__["a" /* MaxTemperaturesPage */]);
                }
                else if (i == 'الاجسام الغريبة') {
                    this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__alien_objects_alien_objects__["a" /* AlienObjectsPage */]);
                }
                else if (i == 'الاوجاع') {
                    this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_13__aches_aches__["a" /* AchesPage */]);
                }
                else if (i == 'التصرف في الحوادث الكبرى') {
                    this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_14__major_accidents_major_accidents__["a" /* MajorAccidentsPage */]);
                }
                else if (i == 'الضمادات والعصائب') {
                    this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_15__bandages_bandages__["a" /* BandagesPage */]);
                }
                else if (i == 'التدبير والنقل') {
                    this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_16__transportation_transportation__["a" /* TransportationPage */]);
                }
                else if (i == 'الولادة الطارئة') {
                    this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_17__emergency_birth_emergency_birth__["a" /* EmergencyBirthPage */]);
                }
                else if (i == 'لدغة الافعى') {
                    this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_19__python_python__["a" /* PythonPage */]);
                }
                // 'اظطرابات الدورة الدموية',
                // 'فقدان الوعي',
                // ' اصابات الظهر',
                // 'اصابات العضلات والمفاصل',
                // 'تاثير درجات الحرارة القصوى',
                // '',
                // ' الاوجاع',
                // 'التصرف في الحوادث الاكبرى',
                // 'الضمادات والعصائب',
                // 'التدبير والنقل',
                // ' الولادة الطارئة',
            }
        }
    };
    StatePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StatePage');
    };
    StatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-state',template:/*ion-inline-start:"F:\OneDrive\Band--Aid\src\pages\state\state.html"*/'<!--\n  Generated template for the StatePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header >\n  <ion-navbar color="orange">\n      <button ion-button menuToggle >\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title  >  الحالات </ion-title>\n    </ion-navbar>\n  </ion-header>\n\n<ion-content >\n\n \n\n     <ion-searchbar searchbar-ios-min-height searchbar-ios-padding-horizontal searchbar-ios-padding-vertical searchbar-md-input-box-shadow searchbar-ios-input-clear-icon-color    searchbar-ios-border-color  searchbar-ios-input-text-color      searchbar-ios-input-background-color    searchbar-ios-input-placeholder-color     searchbar-ios-input-search-icon-color  searchbar-ios-toolbar-input-background searchbar-ios-background-color     searchbar-md-input-text-color searchbar-md-input-search-icon-color searchbar-md-input-placeholder-color  searchbar-md-input-background-color  searchbar-md-input-clear-icon-color  searchbar-md-input-text-color     searchbar-md-input-border-radius    searchbar-md-background-color animated="true" debounce="10" placeholder="بحث" color="orange" class="input-search" (ionInput)="getItems($event)"></ion-searchbar>\n \n\n    <ion-list  *ngFor="let item of items">\n      <ion-item class="ionItem" (click)="goToDatails(item)" >\n        <button class="dedails-btn">  التفاصيل &nbsp;  <ion-icon color="light" name="md-information"></ion-icon> \n        </button> \n        {{ item }} \n      </ion-item>\n      \n    </ion-list>\n    \n</ion-content>\n\n <!-- style="float: left; padding: 10px;border-radius: 10px" -->'/*ion-inline-end:"F:\OneDrive\Band--Aid\src\pages\state\state.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], StatePage);
    return StatePage;
}());

//# sourceMappingURL=state.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AchesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AchesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AchesPage = /** @class */ (function () {
    function AchesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AchesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AchesPage');
    };
    AchesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-aches',template:/*ion-inline-start:"F:\OneDrive\Band--Aid\src\pages\aches\aches.html"*/'<!--\n  Generated template for the AchesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header dir="rtl">\n  <ion-navbar color="orange">\n    <button ion-button menuToggle class="menus">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title> الاوجاع </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"F:\OneDrive\Band--Aid\src\pages\aches\aches.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], AchesPage);
    return AchesPage;
}());

//# sourceMappingURL=aches.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AboutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutPage');
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"F:\OneDrive\Band--Aid\src\pages\about\about.html"*/'<!--\n  Generated template for the AboutPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n  <ion-navbar color="orange">\n      <button ion-button menuToggle >\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title align="right"  > حول </ion-title>\n    </ion-navbar>\n  </ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"F:\OneDrive\Band--Aid\src\pages\about\about.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackInjuriesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the BackInjuriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BackInjuriesPage = /** @class */ (function () {
    function BackInjuriesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    BackInjuriesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BackInjuriesPage');
    };
    BackInjuriesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-back-injuries',template:/*ion-inline-start:"F:\OneDrive\Band--Aid\src\pages\back-injuries\back-injuries.html"*/'<!--\n  Generated template for the BackInjuriesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header dir="rtl">\n  <ion-navbar color="orange">\n    <button ion-button menuToggle class="menus">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>  اصابات الضهر </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"F:\OneDrive\Band--Aid\src\pages\back-injuries\back-injuries.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], BackInjuriesPage);
    return BackInjuriesPage;
}());

//# sourceMappingURL=back-injuries.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlienObjectsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AlienObjectsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AlienObjectsPage = /** @class */ (function () {
    function AlienObjectsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AlienObjectsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AlienObjectsPage');
    };
    AlienObjectsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-alien-objects',template:/*ion-inline-start:"F:\OneDrive\Band--Aid\src\pages\alien-objects\alien-objects.html"*/'<!--\n  Generated template for the AlienObjectsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header dir="rtl">\n  <ion-navbar color="orange">\n    <button ion-button menuToggle class="menus">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title> الاجسام الغريبة </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"F:\OneDrive\Band--Aid\src\pages\alien-objects\alien-objects.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], AlienObjectsPage);
    return AlienObjectsPage;
}());

//# sourceMappingURL=alien-objects.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BandagesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the BandagesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BandagesPage = /** @class */ (function () {
    function BandagesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    BandagesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BandagesPage');
    };
    BandagesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-bandages',template:/*ion-inline-start:"F:\OneDrive\Band--Aid\src\pages\bandages\bandages.html"*/'<!--\n  Generated template for the BandagesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header dir="rtl">\n  <ion-navbar color="orange">\n    <button ion-button menuToggle class="menus">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>الضمادات والعصائب  </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"F:\OneDrive\Band--Aid\src\pages\bandages\bandages.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], BandagesPage);
    return BandagesPage;
}());

//# sourceMappingURL=bandages.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrokenPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the BrokenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BrokenPage = /** @class */ (function () {
    function BrokenPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    BrokenPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BrokenPage');
    };
    BrokenPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-broken',template:/*ion-inline-start:"F:\OneDrive\Band--Aid\src\pages\broken\broken.html"*/'<!--\n  Generated template for the BrokenPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n\n  <ion-navbar>\n    <ion-title align="right">الكسور</ion-title>\n  </ion-navbar>\n\n</ion-header> -->\n\n<ion-header dir="rtl">\n  <ion-navbar color="orange">\n    <button ion-button menuToggle class="menus">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title> الكسور </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n\n  <ul class="main-ul" dir="rtl">\n\n    <li>\n      <ul>\n        <p>الاعراض والعلامات العامة </p>\n        <li>الألم والانتفاخ هما العلامتان النموذجيتان للكسر، بسبب تضرر الأعصاب والأوعية الدموية في العظم وفي النسيج المحيط به.</li>\n        <li>يمكن ان يكون المصاب قد شعر او سمع صوت صك العظم </li>\n        <li> الالم في منطقة الاصابة او قربها وهو يزداد مع الحركة </li>\n        <li>قد يشعر المصاب بصعوبة او استحالة تحريك الجزء المصاب بشكل طبيعي </li>\n        <li>الشعور بالم في مكان الكسر اذا ضغط بلطف على المنطقة واحذر من لمس منطفة الكسر المفتوح </li>\n      </ul>\n    </li>\n\n\n    <li>\n\n\n\n      <ul type="square">\n        <p> الكسور المفتوحة</p>\n        <p> التي تنتج عنها نزيف جروح ظاهرة على مستوى الجلد بسبب العظم المتكسر و الذي يظهر خارج الجلد.</p>\n\n        <img src="../../assets/imgs/openBroken.jfif" alt="">\n\n        <li>ركز ورافع الذراع وسندها </li>\n        <img src="../../assets/imgs/brokenimg/1.png" alt="">\n        <li> ضع قطعة من الشاش المعقم او اي ضماد مناسب فوق الجرح ثم اضغط ضغطاً كافيا لقطع النزيف </li>\n        <img src="../../assets/imgs/brokenimg/2.png" alt="">\n        <li>ضع رفادات من القطن او ماشابه من المواد فوق الجرح وحوله</li>\n        <img src="../../assets/imgs/brokenimg/3.png" alt="">\n        <li> ثبت الضماد والرفادات برباط مشدود </li>\n        <img src="../../assets/imgs/brokenimg/4.png" alt="">\n        <li>ثبت كما في طريقة المعالجة العامة للكسور ثم ارفع الجزء المصاب اذا امكن </li>\n        <img src="../../assets/imgs/brokenimg/5.png" alt="">\n        <li>اعمل على نقل المصاب الي المستشفى مع المحافضة على وضع المعالجة واحمله بواسطة النقالة اذا لزم الامر</li>\n\n\n      </ul>\n    </li>\n\n    <hr>\n\n    <li>\n    <p> الكسور المغلقة</p> \n\n      التي تكون داخلية و لا تحدث أي جرح ظاهرا على مستوى الجلد لكن بالمقابل قد تحدث نزيفا داخليا بالاضافة أن العظم فيها قد\n        لا يتكسر كليا\n      <ul type="square">\n        <img src="../../assets/imgs/closedBroken.jfif" alt="" srcset="">\n        <li>نفس خطوات الكسور المفتوحة</li>\n      </ul>\n    </li>\n\n    <hr>\n\n\n    <li> \n      <hr>\n     <p> كسور عضام الترقوة</p>\n     \n      حدث هذه الكسور عادة من قوة غير مباشرة تنتج عن السقوط على يد ممدودة او على نتوء الكتف اما كسور الترقوة الناجمة عن قوة\n        مباشرة في نادرة \n\n      <ul>\n        الاعراض والعلامات\n\n        <li>نفس الاعراض العامة للكسور</li>\n        <li>الم وضعف في مكان الاصابة يزدادان بالحركة </li>\n        <li>يمانع المصاب في تحريك الطرف في الجهة المصابة </li>\n        <li>يمكن ملاحظة التشوه او الشعور به في موقع الكسر</li>\n\n      </ul>\n\n      <sub>والهدف الرئيسية من الاسعاف االاولي هو تثبيت الطرف العلوي ونقل المصاب الي المستشفى*</sub>\n\n\n      <ul>\n        المعالجة\n\n        <li>اجلس المصاب ثم ضع الطرف المصاب بلطف على الصدر بحيث ترتكز رؤوس الاصابع على الكتف المقابلة </li>\n        <img src="../../assets/imgs/brokenimg/6.png" alt="" srcset="">\n        <li>اسند الطرف بواسطة معلاق رفع </li>\n        <img src="../../assets/imgs/brokenimg/fracture-2.jpg" alt="" srcset="">\n        <li>ضع رفادات طرية بين العضد والصدر في الجهة المصابة </li>\n        <img src="../../assets/imgs/brokenimg/7.png" alt="" srcset="">\n        <li>تثبيت الطرف المصاب على الصدر بواسطة عصابة ذات طية عرضة فوق معلاق لرفع وجعل العقدة امام الجهة السليمة </li>\n        <img src="../../assets/imgs/brokenimg/fracture-3.jpg" alt="" srcset="">\n        <li>اعمل على نقل المصاب الي المستشفى في وضع الجلوس او المشي الا اذا كاننت هنالك مضاعفات </li>\n\n\n      </ul>\n\n\n    </li>\n\n\n    <hr>\n\n    <li>\n      <p>كسور العضد والساعد </p>\n      <ul>\n        الاعراض والعلامات\n        <li>الاعراض والعلامات العامة للكسور </li>\n        <li> الم في مكان الكسر يزداد بالحركة </li>\n        <li>ربما اصبح المصاب غير قادر على استعمال الطرف</li>\n        <li>احتمال عدم القدرة على ثني او تقويم المرفق في الطرف المصاب</li>\n      </ul>\n      <sup>\n\n        *الهدف تثبيت الطرف المصاب والنقل الي المستشفى\n      </sup>\n\n    </li>\n    <hr>\n<li>\n  <ul>كسر عضم العضد \n    <li>اجلس المصاب واسند ذراع الطرف المصاب على صدره</li>\n    <li>اسند الطرف بواسطة معلاق للذراع </li>\n    <li>ضع برفق رفادات طرية بين عضده وصدره </li>\n    <li>ثبت الطرف على صدره بواسطة عصابة ذات طية عريضة فوق المعلاق والرفع يكون قريب من المرفق لليد الاخرى ويفضل الا يكون فوق مكان الكسر وجعل العقدة امام الجهة السليمة </li>\n    <img src="../../assets/imgs/brokenimg/8.png" alt="">\n    <li>اعمل على نقل المصاب الى المستشفى وحعله في وضع الجلوس</li>\n\n  </ul>\n</li>\n\n<hr>\n<li>\n  <ul>\n      كسور الساعد  والرسغ\n    <li>اجلس المصاب واسند الساعد المصاب بلطف وضعه على صدره</li>\n    <img src="../../assets/imgs/brokenimg/9.png" alt="">\n    <li>ضع الساعد بلطف بين طيات رفادة لينة</li>\n    <li>احمل الطرف بواسطة معلاق للذراع </li>\n    <li>ثبت الطرف على صدره بواسطة عصابة ذات طية عريضة فوق المعلاق الرقع قريب من المرفق تحاشي مكان المسر واجعل العقدة امام الجهة السليمة </li>\n    <img src="../../assets/imgs/brokenimg/10.png" alt="">\n    <li> اعمل على نقل المصاب الي المستشفى وحمله في وجع الجلوس</li>\n  </ul>\n</li>\n<hr>\n<li>\n  <ul>\n      *في حالة عدم التمكن من ثني المرفق او كان المصاب مستلقيا\n    <li>اضجع المريض وسند الطرف المصاب على جذعه ولا تحاول ثني المرفق بالقوة</li>\n    <img src="../../assets/imgs/brokenimg/11.png" alt="">\n    <li>ضع كمية كافية من الرفادات الينة بين الطرف المصاب والجذع للتتاكد من ان وضع الرباط لن يزحزح العضام المكسورة </li>\n    <li>ثبت الطرف المصاب الى جسم المريض بواسطة ثلاثة عصائب ذات طيات عريضة احدها حول المعصم والوركين والثاني حول العضد والجذع والثالث حول الساعد والجذع عند المرفق ويفضل الا تكون العصائب فوق الجهة المكسورة وانت تكون العقد في الجهة السليمة </li>\n    <img src="../../assets/imgs/brokenimg/12.png" alt="">\n    <li>اعمل على نقل المريض الى المستشفى واحمله على نقالة مع المحافضة على وضع المعالجة </li>\n\n  </ul>\n</li>\n\n<hr>\n\n<li>\n  <p>كسور اليد والاصابع </p>\n\n<ul>\n    الهدف \n    تثبيت اليد  المصابة واعمل على نقل المصاب على المستشفى \n\n    <li>احمِ اليد المصابة بوضعها بين طيات رفادة لينة</li>\n    <img src="../../assets/imgs/brokenimg/13.png" alt="">\n    <li>اسند الطرف المصاب بلطف بواسطة معلاق رفع</li>\n    <li>ثبت الطرف على الصدر المصاب  بواسطة عصابة ذات طية عريضة فوق المعلاق واعقد العصابة فوق الجهة السليمة</li>\n    <img src="../../assets/imgs/brokenimg/14.png" alt="">\n    <li>اعمل على نقل المصاب الي المستشفى واحمله في وضع الجلوس اذا امكن</li>\n</ul>\n</li>\n<hr>\n\n<li>\n  <p>كسور الاضلاع والقص</p>\n  <ul>\n      الاعراض والعلامات \n      <li> الاعراض نفسها للكسور</li>\n      <li>احتمال وجود اعراض نزف داخلي </li>\n      <li>قد يكون هناك جرح مفتوح في جدار الصدر فوق الكسر(يسمى جرح ماص)</li>\n  </ul>\n  <ul>\n      المعالجة \n<li>اسند الطرف في الجهة المصابة بواسطة معلاق للذراع </li>\n<li>اعمل على نقله الى المستشفى اما في وضع الجلوس او مشيا على الاقدام الا اذا كانت هنالك مضاعفات</li>      \n  </ul>\n</li>\n\n<hr>\n\n<li>\n  <ul>\n    <p>*في حالة الكسر ذي مضاعفات </p>\n    <p>المعالجة </p>\n\n    <li>عالج مباشرة اي جرح ماص </li>\n    <li>اضجع المصاب في وضع نصف جلوس بحيث يكون رأسه وكتفاه مدارة وجسمه يميل الي الجهة المصابة ,اسنده بوضع بطانية مطوية علة طولها وراء ضهره</li>\n    <img src="../../assets/imgs/brokenimg/15.png" alt="">\n    <li> اسند الطرف في الجاهة المصابة بواسطة معلاق رفع</li>\n    <li> اذا كان المصاب فااقداً وعيه او اصبح تنفسه صعبا ضعهة في وضع الافاقة (اذهب الى اهداف الاسعاف الاولي) على ان يكون الجهة السليمة هي العليا</li>\n    <li>اعمل على نقله الي المستشفى واحمله على نقالة مع المحافظة على وضع المعالجة\n</li>\n    \n  </ul>\n\n</li>\n\n<hr>\n<li>\n\n  <p>كسور الحوض</p>\n\n  <ul> الاعراض والعلامات \n    <li>الاعراض والعلامات العامة للكسور</li>\n    <li>الم وضعف في ناحية الوركين او الضهر بزدادان عندما يتحرك المصاب</li>\n    <li>لا يستطيع المصاب المشي ولا حتى الوقوف بالرغم من المظهر السليم للساقين</li>\n    <li>اذا تبول المصاب قد يكون البول مدمّى</li>\n  </ul>\n\n<ul>\n  <p>*الهدف\n      تأمين الراحة للمصاب ونقله الى المستشفى\n      </p>\n  <li>ارقد المصاب على ظهره وجعل ساقيه مستقيمتين وذا لاحظت ان ثني الركبة يزيد من راحته فاثنهما وضع بطانية مطوية تحتهما </li>\n  <img src="../../assets/imgs/brokenimg/18.png" alt="">\n  <li>اذا كان المسعف الاولي هو المسؤول عن نقل المصاب بادر بلطف الى وضع عصابتين بطيتين عريضتين حول حوضه على ان تبدأ وتجعل العقدة في الوسط ان هذا الترتيب ليس ضروريا دوما ولا لزوم لتطبيقه اذا حدث الماً شديداً</li>\n  <img src="../../assets/imgs/brokenimg/16.png" alt="">\n  <li>ضع رفادات لينة كافية بين ركبتيه وكاحله</li>\n  <img src="../../assets/imgs/brokenimg/17.png" alt="">\n  <li>ضع رباطا بشكل رقم ثمانية 8 حول كاحليه وقدمه وعصابة ذات طية عريضة حول ركبته </li>\n  <img src="../../assets/imgs/brokenimg/19.png" alt="">\n  <li>للتخفيف من شدة الصدمة غطه ببطانية</li>\n  <li>اعمل على نقله الى المستشفى ,احمله على نقالة مع المحافضة على وضع المعالجة</li>\n</ul>\n\n</li>\n<hr>\n<li>\n<p>كسور الاطراف السفلية </p>\n  <ul>\nالمعالجة\n    <li>ارقد المصاب ,وركز الطرف واسنده برفق بإمساكه من المفاصل قبل وبعد مكان الاصابة .اطلب من احد المارة القيام بهذا العمل اذا امكن ذالك</li>\n    <img src="../../assets/imgs/brokenimg/20.png" alt="">\n    <li>اذا ادعت الحاجة جرد الساق المصابة (مزق الملابس) ,وفحصه لكي تحدد نوع الكسر (مغلق ام مفتوح )</li>\n    <li>امسك بالكاحل والقدم واسحب بلطف وعناية على مستوى المحور الطولاني للطرف سعيا وراء ايصاله الى وضع مستقيم </li>\n    <img src="../../assets/imgs/brokenimg/21.png" alt="">\n    <li>اذا كان وصول سيارة الاسعاف وشيكا ثابر على سند الطرف الى ان تصل</li>\n    <li>اما اذا كانت ستتأخر سيارة الاسعاف ,بينما تستمر في سند الطرف من جهة الكاحل استفد من الفراغات الطبيعية وضع عصائب ذات طيات عريضة بلطف تحت ساقي المصاب عند الوركين و فوق الكسر وتحته وعصابة ذات طية ضيقة عند الكاحلين</li>\n    <li> قرب الطرف السليم بلطف الى جانت الطرف المصاب</li>\n    <li>ضع كمية كافية من الرفادات بين الساقين لتغطية النتوءات العظمية في الركبتين والكاحلين واضف المزيد من الرفادات للتاكد من ان وضع المصاب لن يزحزح العضام المكسورة </li>\n\n    <li>اعقد العصابة على كاحلي المصاب بشكل رقم 8 ثم العصائب الاخرى حول ركبته وفوق الكسر وتحته في الساق واضغط ضغطا لطيفا اثناء وضع العصائب لكي تضمن استقرارها </li>\n    <img src="../../assets/imgs/brokenimg/22.png" alt="">\n    <li>*اذا كان الكسر قريبا من الكاحل لا تضع العصابة رقم 8 تحت السر لكي لا ياتي التضميد فوق الكسر</li>\n  </ul>\n\n</li>\n<hr>\n<li>\n  <p>كسور عضم الفخذ</p>\n\n  <ul>الاعراض \n   \n    <li> الاعرض والعلامات العامة للكسور</li>\n  </ul>\n\n  <ul>\n     المعاجلة \n    <li>ارقد المصاب ,وركز الطرف واسنده برفق بإمساكه من المفاصل قبل وبعد مكان الاصابة </li>\n    <li>اذا لزم الامر اكشف الساق بعناية لتحديد نوع الكسر (مفتوح ام مغلق)</li>\n    <img src="../../assets/imgs/brokenimg/f1.png" alt="">\n\n    <li>جر بلطف وانت ممسك بركتبه وبينما يستمر الجر والاسناد على ركبته بادر الى تقويم الساق برفق وحول الرجل المصابة الى وضع مستقيم بالاستمرار في الجر من الكاحل </li>\n    <img src="../../assets/imgs/brokenimg/f2.png" alt="">\n    <li>اذا كان وصول سيارة الاسعاف بعيداً , بينما يكون طرف المصاب مسنوداً من الكاحل استعمل الفراغات الطبيعية لكي تضع برفق عصائب ذات طيات عريضة تحت ساقي المصاب على مستوى الركبتين وفوق الكسر وتحته باضافة الى عصابة ذات طيات ضيقة عند الكاحلين</li>\n    <li>قرب بلطف الطرف السليم الى جانب الطرف المصاب</li>\n    <li>ضع كمية كافية من الرفادات الطرية بين ساقيه وذالك لتغطية النتوءات العظمية في الركبتين والكاحلين </li>\n    <img src="../../assets/imgs/brokenimg/f3.png" alt="">\n    <li>اعقد العصابة على شكل رقم 8 حول الكاحلين والقدمين واعقد الاربطة الاخرى حول ركبته و وفوق الكسر وتجته على فخذه </li>\n\n  </ul>\n\n\n</li>\n\n  </ul>\n\n</ion-content>'/*ion-inline-end:"F:\OneDrive\Band--Aid\src\pages\broken\broken.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], BrokenPage);
    return BrokenPage;
}());

//# sourceMappingURL=broken.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BloodCirculationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the BloodCirculationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BloodCirculationPage = /** @class */ (function () {
    function BloodCirculationPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    BloodCirculationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BloodCirculationPage');
    };
    BloodCirculationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-blood-circulation',template:/*ion-inline-start:"F:\OneDrive\Band--Aid\src\pages\blood-circulation\blood-circulation.html"*/'<!--\n  Generated template for the BloodCirculationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header dir="rtl">\n  <ion-navbar color="orange">\n    <button ion-button menuToggle class="menus">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title> الدورة الدموية </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n\n\n  <div class="con-deta">\n    <a href="#sad">الصدمة</a>\n    <a href="#sad2">الذبحة الصدرية</a>\n    <a href="#naob">النوبة القلبية</a>\n    <a href="#sthart"> توقف القلب </a>\n    <a href="#stmok"> الجلطة الدماغية </a>\n    \n  </div>\n\n  <ul class="main-ul" dir="rtl">\n\n\n\n    <li>\n      <ul>\n        <p id="sad">الصدمة</p>\n\n        <p>مفهوم الصدمة: في المصطلح الطبي تعني قلة كمية الدم الموجود في جهاز الدوران. فالكمية الموجودة من الدم في الجسم غير كافية لأداء وظائفه و هي حالة طارئة تهدد الحياة. و تتمثل أعراض الصدمة في الشعور بالدوار و الوهن و شحوب البشرة و ضيق في التنفس مع ارتفاع معدل ضربات القلب.</p>\n\n        <p>الاعراض والعلامات </p>\n\n        <li>يصبح المصاب شاحباً او رمادي واوضح ما يكون ذالك في القسم الداخلي من الشفاه </li>\n        <li> يبرد الجلد ويكون رطباً من العرق</li>\n        <li>قد يشعر المصاب بضعف وقد ينتابه اغماء او دوخة </li>\n        <li>يصبح النبض سريعا ً وضعيفاً</li>\n        <li>يكون التنفس سطحيا وسريعا </li>\n        <li>قد يصبح المصاب قلقاً او متململاً ,ويتثائب او يلهث </li>\n        <li>قد يشكو المصاب من العطش</li>\n        <li>قد يشعر بغثيان وقد يتقيء</li>\n        <li>تحتمل اصابته بفقدان وعي </li>\n\n      </ul>\n\n      <ul>\n\n\n        <p> *تنبيه </p>\n\n        <li> لا تحرك المصاب بدون داعٍ </li>\n        <li>لا تعطِهِ اي شي يأكله او يشربه</li>\n        <li> لا تستخدم اكياس الماء الساخن لان ذالك يزيد من جريان الدم في الجلد ويبعده عن الاعضاء الحيوية </li>\n        <li>لا تسمح للمصاب بالتدخين </li>\n\n\n        <p>المعالجة</p>\n\n        <li> عالج اي اصابة بوسعك معالجتها كالنزف الخارجي مثلا , قلل من تحرك المصاب قدر الامكان وطمئنه</li>\n        <li> اجعله يستلقي على ظهره واجهل رأسه منخفضا ومداراً الى جهة واحدة للتخفيف من اخطار القيء </li>\n        <img src="../../assets/imgs/brokenimg/sa1.png" alt="">\n        <li>ارفع ساقيه واسندهما على ملابس مطوية او اشياء اخرى مناسبة </li>\n        <img src="../../assets/imgs/brokenimg/sa2.png" alt="" srcset="">\n        <li>فك الملابس الضيقة عند الرقبة والصدر والخصر</li>\n        <li>احفظه من الحرارة القصوى والدنيا.وحافظ على راحته ,ورطب شفيه بالماء ولكن لا تسقيه اي شي</li>\n        <li> عالج اي اصابات اخرى</li>\n        <li>اذا اصبح التنفس صعبا او توقعت حصول القيء ضعه في وضع الافاقة </li>\n        <li> اذا فقد وعيه ,افتح مسلك الهواء لديه وتحقق من التنفس وعمل على انعاشه اذا وجدت ضرورة لذالك ثم ضعه في وضع\n          الافاقة</li>\n        <li>اعمل على نقله بسرعة الى المستشفى مع المحافظة على وضع المعالجة </li>\n\n\n\n      </ul>\n\n    </li>\n\n\n    <li>\n\n      <ul>\n        <p id="sad2">الذبحة الصدرية </p>\n\n        <p> الاعراض والعلامات العامة</p>\n        <li>الم في الصدر , وغالبا ما يصل عن طريق الكتف اليسرى الى الذراع والاصابع ويمكن ان يصل ايضا الى الحلق والفك\n          والذراع الاخرى</li>\n        <li> قد يصبح الجلد رمادياً والشفتان زرقاوين</li>\n        <li>قد يضيق نفس المصاب</li>\n        <li>قد يصاب بضعف عام </li>\n\n\n        <p>الهدف * </p>\n        <li> وضع المصاب في وضع مريح يمكّن القلب من العمل بشكل فعال</li>\n\n\n        <p>المعالجة </p>\n        <li>ساعد المصاب على الجلوس واسنده بواسطة بطانية او سترة وراءه ووسادة تحب ركبتيه</li>\n        <li>طمئنه وانصحه بالراحة ,وفك الملابس حول رقبته وصدره وخصره</li>\n        <li>اعمل على نقله الى المستشفى</li>\n\n\n      </ul>\n\n    </li>\n\n    <li>\n      <ul>\n        <p id="naob">النوبة القلبية </p>\n        <p>الاعراض والعلامات </p>\n        <li>الاحساس بألم مفاجئ ضاغط وشديد في منتصف الصدر , قد ينتشر الى الذراعين والحلق والفك والبطن او الضهر ولا يخمد\n          بالراحة </li>\n        <li>دوخة او دوار يجبر المصاب على الجلوس او الاستناد الى حائط </li>\n        <li>قد يصبح الجلد رمادياً والشفتان زرقاوين</li>\n        <li>قد يضيق نفس المصاب</li>\n        <li>تضهر عليه اعراض الصدمة</li>\n        <li>قد يحدث فقدان للوعي</li>\n        <li>قد يتوقف التنفس ونبض القلب</li>\n\n\n        <p>*تنبيه\n          لا تدعه يتحرك بدون داع لان ذالك يحمل القلب جهداً إضافياً</p>\n\n\n        <p>المعالجة</p>\n        <li> اذا كان المصاب واعيا اسنده بلطف وجعله في وضع نصف الجلوس مع سند رأسه وكتفيه وثني ركبتيه</li>\n        <li>وفك الملابس حول رقبته وصدره وخصره</li>\n        <li>اذا فقد وعيه ,افتح مسلك الهواء لديه واعمل على انعاشه </li>\n        <li>اعمل على نقله الى المستشفى فوراً </li>\n\n\n      </ul>\n    </li>\n\n\n    <li>\n\n      <ul>\n\n        <p id="sthart"> توقف القلب</p>\n        <p> الاعراض والعلامات</p>\n        <li> يفقد المصاب وعيه</li>\n        <li>يتوقف التنفس</li>\n        <li>يصبح الجلد رمادياً</li>\n        <li>لا يشعر بالنبض بعد نفختين من التنفس الاصطناعي</li>\n\n        <p>الهدف * </p>\n        <p> بدء الانعاش بدون تأخير والعمل على نقل المصاب فوراً الى المستشفى مع لفت النظر بوضوح الى الاشتباه بحدوث نوبة\n          قلبية </p>\n\n        <p> المعالجة </p>\n        <li> ابدء الانعاش فوراً </li>\n        <li> انقل المصاب بالسرعة القصوى الى المستشفى ,واستمر في الانعاش اثناء الطريق </li>\n\n      </ul>\n\n\n    </li>\n\n\n    <li>\n      <ul>\n\n        <p id="stmok"> الجلطة الدماغية</p>\n\n        <p> الاعراض والعلامات</p>\n        <li>صداع شديد مفاجئ بدون سبب معلوم.</li>\n        <li>تنميل أو فقدان الحس المفاجئ أو ضعف في الذراع والساق وخصوصاً الوجه أو على جانب واحد من الجسم .</li>\n        <li>ارتباك مفاجئ ، صعوبة في الكلام أو في الفهم.</li>\n        <li>فجأة مشكلة في رؤية واحدة أو كلتا العينين.</li>\n        <li>فجأة صعوبة في المشي والدوار وفقدان التوازن أو التنسيق.</li>\n\n\n\n        <p>\n          المعالجة\n        </p>\n\n        <li>الاتصال بالإسعاف.</li>\n        <li>التحقق من مدي وعي و استجابة المصاب و ذلك عن طريق 3 نقاط (تحريك الأصبع أمام عين المصاب فيبدأ المصاب بمتابعة\n          حركة الأصبع- رفع اليدين إلي الأمام- الفهم و الإدراك و الرد بما يتناسب مع السؤال)</li>\n        <li>في حالة عدم استجابة المصاب اتبع الخطوات التالية: (التحقق من مجري الهواء مفتوح: ثم ادر رأس المصاب إلي الخلف\n          قليلاً لفتح مجري التنفس, التحقق من النبض: ضع يدك بلطف علي الرقبة بجانب القصبة الهوائية يميناً أو يساراً و سوف\n          تشعر أناملك بوجود دق و هذا يعني وجود نبض لدي المصاب و (التحقق من التنفس: عن طريق التأكد من حركة صدر المصاب\n          لأعلي و أسفل و وجود نفس يخرج من الأنف) .</li>\n        <li>في حالة استجابة المصاب و كان واعيا ترفع الرأس و الكتفين للمصاب قليلا لان هذا الوضع سوف يقلل ضغط الدم\n          بالدماغ.</li>\n        <li>محاوله إيقاظ المصاب و التحدث معه لإبقائه واعياً.</li>\n        <li>إذا لم يستجيب المصاب و كان غير واعي و لكنه يتنفس يوضع المصاب في وضع الإفاقة علي الجانب الأيسر و فتح مجري\n          الهواء للسماح بنزول الإفرازات و القئ من الفم إن وجد و لتجنب الاختناق.</li>\n        <li> في حالة المصاب غير واعي و لا يوجد تنفس و لا نبض لابد أن تبدأ بخطوات الإنعاش القلبي الرئوي لحين وصول\n          الإسعاف. </li>\n\n      </ul>\n    </li>\n\n  </ul>\n\n</ion-content>'/*ion-inline-end:"F:\OneDrive\Band--Aid\src\pages\blood-circulation\blood-circulation.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], BloodCirculationPage);
    return BloodCirculationPage;
}());

//# sourceMappingURL=blood-circulation.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BurnsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the BurnsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BurnsPage = /** @class */ (function () {
    function BurnsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    BurnsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BurnsPage');
    };
    BurnsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-burns',template:/*ion-inline-start:"F:\OneDrive\Band--Aid\src\pages\burns\burns.html"*/'<!--\n  Generated template for the BurnsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header dir="rtl">\n  <ion-navbar color="orange">\n    <button ion-button menuToggle class="menus">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title> الحروق </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <p>حروق</p>\n\n  \n  <p>حروق</p>\n\n  <p>حروق</p>\n\n\n  \n  <p>حروق</p>\n\n\n</ion-content>\n'/*ion-inline-end:"F:\OneDrive\Band--Aid\src\pages\burns\burns.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], BurnsPage);
    return BurnsPage;
}());

//# sourceMappingURL=burns.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChokingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ChokingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChokingPage = /** @class */ (function () {
    function ChokingPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ChokingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChokingPage');
    };
    ChokingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-choking',template:/*ion-inline-start:"F:\OneDrive\Band--Aid\src\pages\choking\choking.html"*/'<!--\n  Generated template for the ChokingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n\n  <ion-navbar>\n    <ion-title>الاختناق</ion-title>\n  </ion-navbar>\n\n</ion-header> -->\n\n\n\n<ion-header dir="rtl">\n  <ion-navbar color="orange">\n    <button ion-button menuToggle class="menus">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title> الاختناق </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n\n\n\n\n<ion-content padding dir="rtl">\n\n  <img src="../../assets/imgs/Choking.jpg" alt="" srcset="">\n\n  <p>ماهو الاختناق</p>\n  <p>هو عدم وصول الهواء وبمعنى أدق عدم وصول الأكسجين إلى الجهاز التنفسي و الرئتين للشخص المصاب، ويحدث فيه صعوبة شديدة في التنفس</p>\n\n\n  <ul class="main-ul" dir="rtl">\n\n\n    <li>\n      <ul>\n\n        <p>بلع اللسان</p>\n\n        <li>حرك المصاب وضعه على ظهره ، بمساعدة المحيطين.</li>\n        <li>ارفع ذقن المصاب مع إرجاع الرأس إلى الوراء وامسك جبهته بيدك.</li>\n      <img src="../../assets/imgs/brokenimg/bla.png" alt="">\n        <li>ادفع على جبهة الشخص أو فكه.</li>\n        <img src="../../assets/imgs/brokenimg/dfak.png" alt="">\n        <li>في هذه الحالة قد يعود اللسان إلى وضعه الطبيعي، قم بتغيير وضعه واجعله مستلقِ على جانبه.</li>\n        <li></li>\n\n      </ul>\n    </li>\n\n\n    <li>\n\n      <ul>\n        <p>أعراض الاختناق</p>\n        <li>إغماء وحالة تسبق الإغماء وهي الدوار أو كما يطلق عليها بالعامية الدوخة.</li>\n        <li>شحوب الوجه واصفراره.</li>\n        <li>برودة أطراف الأصابع ، وتميل للون الأزرق.</li>\n      </ul>\n\n    </li>\n\n\n    <li>\n      <ul>\n        <p>المعالجة العامة</p>\n\n        <li> قم بنقل الشخص المصاب من المكان الذي سقط فيه ، إلى مكان جيد التهوئة، إن كان المصاب سيدة محجبة فك الحجاب قليلاً من\n          جهة الحلق.\n        </li>\n        <li> يجب خلع الملابس الضيقة عند العنق والصدر، ليصل له التهوئة. </li>\n\n      </ul>\n\n\n      <hr>\n      <li>\n        <p>الاسعافات الاولية للاختناق بسبب الغرق </p>\n        <ul>\n          <p>الاعراض</p>\n          <li>نفس الاعراض العامة للاختناق </li>\n          <li>ظهور الزبد حول فم المصاب وانفه</li>\n        </ul>\n\n        <ul>\n          المعالجة\n          <li>قم بتحريك رأس الغريق بحيث يكون الرأس في الأسفل، قم برفع القدمين لأعلى.</li>\n          <li>اضغط على المنطقة أعلى البطن لتدفع الماء بقوة خارج الرئتين. </li>\n          <li>اخرج من فم المصاب بسرعة كل مايمكن ان يسد مسلك الهواء كالاعشاب البحرية وابدء التنفس الاصطناعي فورا </li>\n\n          <li>قد بتدفئة المصاب وذا امكن انزع ملابسه المبللة وجففه وغطيه باغطية اضافية او مناشف</li>\n\n          <li>اعمل على نقله الى المستشفى</li>\n\n        </ul>\n      </li>\n<hr>\n\n      <li>\n\n        <ul>\n          <p>الشرق</p>\n          <img src="../../assets/imgs/brokenimg/eq1.png" alt="">\n          <li>\n            <ul>\n              الاعراض والعلامات\n              <li>الاعراض العامة للاختناق</li>\n              <li>لا يتمكن المصاب من الكلام او التنفس وربما امسك بعنقه وان ابرز مايميز هذه الحالة هو ان المصاب يسكت تماماً</li>\n              <li>احتقان الوجه والعنق وبروز الاوردة وازرقاق الشفتين والفم</li>\n              <li>احتمال فقد الوعي</li>\n\n            </ul>\n          </li>\n<hr>\n          <li>\n            <ul>المعالجة\n\n              <li>اخرج اي بقايا او اسنان اصطناعية من فم المصاب بإصبعيك وحثه على السعال</li>\n              <li>إذا لم يتزحزح الجسم الغريب بالسعال ساعد المصاب على الانحناء بحيث يكون رأسه ادنى من رئتيه اضربه بقوة على عظمتي\n                الكتفين براحة يدك وكرر ذالك اربع مرات اذا لزم الامر</li>\n              <img src="../../assets/imgs/brokenimg/eq2.png" alt="">\n              <li>افحص الفم هل تزحزح الجسم المسبب للانسداد فإذا لم يحصل اي شي من ذالك فقد تتمكن من اخراجه بالضغط على البطن </li>\n              <li>افحص الفم مرة اخرى ,فإذا كان الجسم المسبب للشرق موجود ولم يخرج قم باخراجه بإصبعيك</li>\n              <li>اذا لم ينته الشرق أعد مرة اخرى الضرب على الضهر حتى اربع ملات وضغط على البطن حتى اربع مرات واذا اصبح المصاب\n                فاقداً لوعيه عالجه كما هو مبين ادناه </li>\n\n            </ul>\n          </li>\n\n          <li>\n            <ul>\n\n              <p>*بالنسبة للمصاب بالشرق الفاقد للوعي</p>\n              <li> ضع المصاب على ظهره ,وافتح مسلك الهواء لديه وابدأ التنفس الاصطناعي</li>\n              <li>اذا لم تصل الى نتيجة مقبولة ,ضع المصاب على جانبه بحيث يواجهك ويكون صدره مستنداً الى فخذك ورأسه مائلا الى الخلف\n                واضربه حتى اربع ضربات على ضهره كما مبين ادناه</li>\n              <img src="../../assets/imgs/brokenimg/eq3.png" alt="">\n              <li>افحص الفم لترى هل تزحزح الجسم المسبب للشرق , فإذا حدث ذالك اخرجه بإصبعيك ولا فضع المصاب في وضع الاستلقاء على\n                ضهره مع الاحتفاظ بالرأس في وضع فتح مسلك الهواي واضغط على البطن </li>\n              <li>افحص الفم مرة اخرى لترى هم تزحزح الجسم الغريب</li>\n              <li>اذا استمر الشرق عدّل وضع رأس المصاب وحاول إجراء التنفس الاصطناعي وبعد ذالك كرر الخطوات اعلاه</li>\n              <li>عندما يُستخرج الجسم الغريب ويعود المصاب الى التنفس ضعه في وضع الافاقة واعمل على نقله الى المستشفى</li>\n\n            </ul>\n          </li>\n<hr>\n          <li>\n            <ul>\n              <p>*بالنسبة للشرق عند الاطفال </p>\n              <li> اتبع الخطوات نفسها الموصوفة لبالغين ولكن اجلس على كرسي او اركع على ركبة واحدة وضع الطفل على ركبتك ورأسه الى\n                الاسفل , اسند الصدر بإحدى يديك واضرب الطفل بقوة بين عظمتي الكتفين باليد الاخرى حتى اربع مرات فإذا لم يتزحزح\n                الجسم الغريب فقد يحتاج الامر الى استعمال ضغط البطن وذا كان الطفل فاقداً للوعي فأتبع نفس الخطوات التي وصفت\n                بالنسبة للبالغين الفاقدين الوعي\n              </li>\n              <img src="../../assets/imgs/brokenimg/eq4.jpg" alt="">\n            </ul>\n          </li>\n<hr>\n          <li>\n            <ul>\n              <p> *الشرق عند الرّضع</p>\n              <li>ضع الرضيع على ساعدك ورأسه وصدره وبطنه متجهين الى الاسفل اضرب بقوة بين الكتفين اربع ضربات ,فإذا لم يخرج الجسم\n                الغريب يصبح ضرورياً القيام بضغط البطن</li>\n              <img src="../../assets/imgs/brokenimg/eq5.jpg" alt="">\n            </ul>\n          </li>\n<hr>\n          <li>\n\n            <ul>\n              <p> * الضغط على البطن بالنسبة للبالغين </p>\n              <li>قف او اركع خلف المصاب وضع احدى ذراعيك حول بطنه .اطبق قبضة يدك وضعها مع ابهامك متجهة نحو الداخل في منتصف القسم\n                العلوي للبطن بين السرة وعظم القص</li>\n              <img src="../../assets/imgs/brokenimg/eqb1.png" alt="">\n              <li>امسك قبضة يدك باليد الثانية</li>\n              <li>اسحب يديك الاثنين نحوك مع القيام بضغط سريع نحو الداخل والى اعلى من المرفقين بشكل يحدث ضغطا على القسم العوي\n                للبطن .ويجب ان يكون الضغط شديداً لدرجة تكفي لزحزحة الجسم الساد ,فإذا اخفقت كرر ذالك حتى اربع مرات حسب الضرورة\n              </li>\n              <img src="../../assets/imgs/brokenimg/eqb2.png" alt="">\n\n            </ul>\n\n          </li>\n<hr>\n          <li>\n            <ul>\n              <p> الضغط على البطن بالنسبة للمصاب الفاقد للوعي * </p>\n\n              <li>ضع المصاب على ضهره بحيث يكون رأسه في وضع فتح مسلك الهواء اركع منفرج الساقين فوق فخذي المصاب بشكل يمكنك من تطبيق\n                ضغط كافي في المكان الصحيح بمنتصف البطن ,فإذا لم تتمكن من احتواء المصاب بس ساقيك فأركع الى جانبه </li>\n                <img src="../../assets/imgs/brokenimg/eqb3.png" alt="">\n              <li>ضع قاعدة إحدى يديك في منتصف القسم العلوي لبطن المصاب ,ثم ضع يديك الثانية فوقه مع ابعاد الاصابع عن البطن</li>\n              <img src="../../assets/imgs/brokenimg/eqb4.png" alt="">\n              <li>مع المحافظة على ساعديك مستقيمين اضغط البطن بسرعة نحو الداخل والى الاعلى ,ويجب ان يكون الضغط قوياً لدرجة تزحزح\n                الجسم الساد وذا اخفقت كرر الضغط اربع مرات</li>\n                <img src="../../assets/imgs/brokenimg/eqb5.png" alt="">\n\n            </ul>\n\n          </li>\n        </ul>\n\n      </li>\n\n      <hr>\n      <hr>\n      <li>\n        <ul>\n          <p>الربو</p>\n\n          <li>اشر على المصاب بأن يجلس مع ميل خفيف الى الامام ,وان يتكئ على مسند كطاولة مثلا , وهيئ له  مكان به هواء منعش</li>\n          <img src="../../assets/imgs/brokenimg/eqr1.png" alt="">\n          <li>اذا كان المصاب يحمل علاجه ,فدعه يستعمله ,فقد يخفف المه</li>\n          <img src="../../assets/imgs/brokenimg/eqr2.png" alt="">\n          <li>اذا استمرت الاعراض او تكررت اطلب العون الطبي</li>\n\n\n        </ul>\n      </li>\n\n  </ul>\n\n</ion-content>'/*ion-inline-end:"F:\OneDrive\Band--Aid\src\pages\choking\choking.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ChokingPage);
    return ChokingPage;
}());

//# sourceMappingURL=choking.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmergencyBirthPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the EmergencyBirthPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EmergencyBirthPage = /** @class */ (function () {
    function EmergencyBirthPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    EmergencyBirthPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EmergencyBirthPage');
    };
    EmergencyBirthPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-emergency-birth',template:/*ion-inline-start:"F:\OneDrive\Band--Aid\src\pages\emergency-birth\emergency-birth.html"*/'<!--\n  Generated template for the EmergencyBirthPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header dir="rtl">\n  <ion-navbar color="orange">\n    <button ion-button menuToggle class="menus">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title> الولادة الطارئة  </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"F:\OneDrive\Band--Aid\src\pages\emergency-birth\emergency-birth.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], EmergencyBirthPage);
    return EmergencyBirthPage;
}());

//# sourceMappingURL=emergency-birth.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaintingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the FaintingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FaintingPage = /** @class */ (function () {
    function FaintingPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FaintingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FaintingPage');
    };
    FaintingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-fainting',template:/*ion-inline-start:"F:\OneDrive\Band--Aid\src\pages\fainting\fainting.html"*/'<!--\n  Generated template for the FaintingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header dir="rtl">\n  <ion-navbar color="orange">\n    <button ion-button menuToggle class="menus">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title> الاغماء </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ul class="main-ul" dir="rtl">\n\n    <li>\n\n      <ul>\n        <p>الاعراض والعلامات</p>\n        <li>يكون النبض بطيئاً في المرحلة الاولى\n          قد يكون المصاب شاحباً جداً</li>\n\n\n      </ul>\n\n      <ul>\n        <p>الوقاية</p>\n        <li>اذا كان المصاب في استعراض او ضمن تجمع من الناس انصحه بأن يثني عضلات الساق واصابع القدمين لمساعدة الدورات</li>\n        <li>واذا شعر المصاب بأنه غير متماسك اجلسه ,وساعده على الانحناء الى الامام ووضع رأسه بين ركبتيه واطلب اله ان\n          يتنفس بعمق</li>\n          <img src="../../assets/imgs/brokenimg/eg1.png" alt="">\n\n      </ul>\n\n\n      <ul>\n\n        <p> تنبه*</p>\n        <li>لا تعطِ المصاب اي شي عن طريق الفم حتى يعود اليه وعيه بالكامل ,ولا تعطيه اي مشروب كحولي</li>\n      </ul>\n      <ul>\n        <p> المعالجة </p>\n        <li> عندما يغمى على المصاب,ارقده وارافع ساقيه وابق مسلك الهواء لديه مفتوحا\n        </li>\n        <img src="../../assets/imgs/brokenimg/eg2.png" alt="">\n        <li> فك اي ملابس مشدودة على الرقبة او الصدر او الخصر وذالك لمساعدة دروان الدم والتنفس</li>\n        <img src="../../assets/imgs/brokenimg/eg3.png" alt="">\n        <li>تأكد من ان المصاب يحصل على الكثير من الهواء الطلق . ضعه في تيار من الهواء المنعش وهو امام وجهه وضعه في الظل\n          اذا لزم الامر</li>\n        <li> طمئنه وهو يعود الى وعيه ,وارفعه بالتدريج حتى يصل الى وضع الجلوس</li>\n        <img src="../../assets/imgs/brokenimg/eg4.png" alt="">\n        <li>تحقق من وجود اصابات لحقت به اثناء السقوط وعالجها </li>\n        <li>اذا لم يبدأ المصاب في استعادة وعيه بسرعة ,افتح مسلك الهواء وتحقق من التنفس واعمل على انعاشه اذا وجدت لزوما\n          لذالك ,وضعه في وضع الافاقة ,واطلب العون الطبي بسرعة</li>\n\n      </ul>\n    </li>\n\n  </ul>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"F:\OneDrive\Band--Aid\src\pages\fainting\fainting.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], FaintingPage);
    return FaintingPage;
}());

//# sourceMappingURL=fainting.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MajorAccidentsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the MajorAccidentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MajorAccidentsPage = /** @class */ (function () {
    function MajorAccidentsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MajorAccidentsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MajorAccidentsPage');
    };
    MajorAccidentsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-major-accidents',template:/*ion-inline-start:"F:\OneDrive\Band--Aid\src\pages\major-accidents\major-accidents.html"*/'<!--\n  Generated template for the MajorAccidentsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header dir="rtl">\n  <ion-navbar color="orange">\n    <button ion-button menuToggle class="menus">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title> التصرف في الحوادث الكبرى  </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"F:\OneDrive\Band--Aid\src\pages\major-accidents\major-accidents.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], MajorAccidentsPage);
    return MajorAccidentsPage;
}());

//# sourceMappingURL=major-accidents.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaxTemperaturesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the MaxTemperaturesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MaxTemperaturesPage = /** @class */ (function () {
    function MaxTemperaturesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MaxTemperaturesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MaxTemperaturesPage');
    };
    MaxTemperaturesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-max-temperatures',template:/*ion-inline-start:"F:\OneDrive\Band--Aid\src\pages\max-temperatures\max-temperatures.html"*/'<!--\n  Generated template for the MaxTemperaturesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header dir="rtl">\n  <ion-navbar color="orange">\n    <button ion-button menuToggle class="menus">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title> درجة الحرارة القصوى  </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"F:\OneDrive\Band--Aid\src\pages\max-temperatures\max-temperatures.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], MaxTemperaturesPage);
    return MaxTemperaturesPage;
}());

//# sourceMappingURL=max-temperatures.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MusculoskeletalInjuriesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the MusculoskeletalInjuriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MusculoskeletalInjuriesPage = /** @class */ (function () {
    function MusculoskeletalInjuriesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MusculoskeletalInjuriesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MusculoskeletalInjuriesPage');
    };
    MusculoskeletalInjuriesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-musculoskeletal-injuries',template:/*ion-inline-start:"F:\OneDrive\Band--Aid\src\pages\musculoskeletal-injuries\musculoskeletal-injuries.html"*/'<!--\n  Generated template for the MusculoskeletalInjuriesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header dir="rtl">\n  <ion-navbar color="orange">\n    <button ion-button menuToggle class="menus">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title> اصابات العضلات ومالفاصل  </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"F:\OneDrive\Band--Aid\src\pages\musculoskeletal-injuries\musculoskeletal-injuries.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], MusculoskeletalInjuriesPage);
    return MusculoskeletalInjuriesPage;
}());

//# sourceMappingURL=musculoskeletal-injuries.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PythonPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PythonPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PythonPage = /** @class */ (function () {
    function PythonPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PythonPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PythonPage');
    };
    PythonPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-python',template:/*ion-inline-start:"F:\OneDrive\Band--Aid\src\pages\python\python.html"*/'<!--\n  Generated template for the PythonPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header dir="rtl">\n  <ion-navbar color="orange">\n    <button ion-button menuToggle class="menus">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title> لدغة الافعة </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n\n\n<ion-content padding>\n\n\n  <ul class="main-ul" dir="rtl">\n    <li>\n\n      <ul>\n        <p>لدغة الافعة</p>\n        <p>المعالجة</p>\n\n        <li> طلب المساعدة الطبية الفورية.</li>\n        <li> البقاء هادئا وتذكر أن معظم لدغات الأفاعي ليست قاتلة.</li>\n\n        <li> الحد من الحركة قدر الإمكان، إلا إن اضطر المصاب لذلك، كأن يبحث عمن يساعده. </li>\n\n        <li> إزالة المجوهرات وإرخاء الألبسة عند المنطقة الملدوغة كونها ستتورم. </li>\n\n        <li> وضع ضمادة ضاغطة على الطرف الملدوغ. أما إن كانت اللدغة في الجذع أو الرأس أو الرقبة، فعندها يوضع ضغط ثابت\n          على\n          المكان الملدوغ على ألا يقيد حركة الصدر، فالتنفس قد يتأثر بذلك. </li>\n\n        <li> الاستلقاء والحفاظ على الطرف الملدوغ على مستوى الجسم. فرفعه عن ذلك يمكن أن يسبب وصول السم إلى باق الجسم\n          بشكل\n          أسرع. أما خفضه، فيمكن أن يزيد من التورم. </li>\n\n        <li> تجنب استخدام الأسبيرين وغيره من المسكنات. </li>\n\n        <li> تجنب استخدام العاصبة، وهي ملوى أو ضاغط لوقف النزف من وعاء دموى، فهذا يقطع تدفق الدم تماما ويمكن أن يؤدي\n          إلى\n          فقدان الطرف الملدوغ. </li>\n\n        <li> تجنب فتح اللدغة بسكين أو شفط السم من الجرح. فلم يتم أثبات فوائد هذه التدابير، وإنما يمكن أن تسبب المزيد من\n          الضرر. </li>\n      </ul>\n    </li>\n\n\n    <li>\n      <ul>\n\n        <p>لدغة العقرب</p>\n        <p>المعالجة</p>\n\n        <li> غسل اللدغة بالماء والصابون وإزالة جميع المجوهرات وإرخاء الألبسة عن المنطقة الملدوغة كونها ستتورم. فعلى\n          سبيل المثال، فإن الخاتم يعيق الإصبع الملدوغ عن التورم.\n        </li>\n        <li> وضع كمادات باردة بشكل متقطع، وذلك بوضعها لمدة عشر دقائق وإزالتها لمدة عشر دقائق أخرى، وهكذا. وذلك في مكان\n          اللدغة.\n        </li>\n        <li> استخدام الباراسيتامول، لجرعة واحدة إلى جرعتين كل أربع ساعات لتخفيف الألم، وذلك على أن لا تتجاوز الجرعة\n          النهائية ال 3 غرامات في ال 24 ساعة. ويذكر أنه يجب تجنب الأسبرين والإيبوبروفين كونهما قد يسهمان في حدوث مشاكل\n          أخرى.\n        </li>\n        <li> استخدام المضادات الحيوية في حالة حدوث التهاب ثانوي مكان اللدغة. فمن الجدير بالذكر أن المضادات الحيوية لا\n          تعطي نتيجة لمصابي لدغة العقرب.\n        </li>\n        <li> تجنب فتح الجرح الناجم عن اللدغة والشفط.\n        </li>\n\n\n      </ul>\n    </li>\n\n\n  </ul>\n\n\n</ion-content>'/*ion-inline-end:"F:\OneDrive\Band--Aid\src\pages\python\python.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], PythonPage);
    return PythonPage;
}());

//# sourceMappingURL=python.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SunstrokePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SunstrokePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SunstrokePage = /** @class */ (function () {
    function SunstrokePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SunstrokePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SunstrokePage');
    };
    SunstrokePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sunstroke',template:/*ion-inline-start:"F:\OneDrive\Band--Aid\src\pages\sunstroke\sunstroke.html"*/'<!--\n  Generated template for the SunstrokePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header dir="rtl">\n  <ion-navbar color="orange">\n    <button ion-button menuToggle class="menus">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title> ضربة شمس  </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n  \n<ul class="main-ul" dir="rtl">\n\n\n    <li>\n  \n      <ul>\n  \n  \n        <p>الاعراض</p>\n  \n        <li> الدوخة.</li>\n        <li>ارتفاع معدل ضربات القلب.</li>\n        <li>التعرض للإغماء.</li>\n        <li> الحمى.</li>\n        <li>ارتفاع درجة حرارة المصاب</li>\n        <li> صداع الرأس.</li>\n        <li> تشنج العضلات.</li>\n        <li> الغثيان.</li>\n        <li>التعرق الشديد أو غياب التعرق.</li>\n        <li>ظهور طفح جلدي.</li>\n        <li>قيء.</li>\n        <li>ضعف عام بالجسم.</li>\n  \n      </ul>\n  \n    </li>\n  <hr>\n  \n    <li>\n      <ul>\n        <p>العلاج</p>\n        <li>الاتصال بالإسعاف فورا.</li>\n        \n        <li>نقوم بنقل الشخص الذى نشك فى إصابته بضربة الشمس إلى مكان بارد بعيدا عن الشمس ونحاول تبريد جسده بأى وسيلة مثل:\n          <ol>\n          <li>نضع الشخص فى حوض ملىء بالماء أو تحت دش بارد.</li>\n          <li>نرش عليه ماءً باستخدام خرطوم الحديقة.</li>\n          <li>استخدام إسفنجات مليئة بالماء البارد ثم عصرها .</li>\n          <li>تشغيل المروحة ووضع المصاب أمامها أثناء رش الماء البارد عليه بالبخاخة.</li>\n          <li>وضع كمادات الثلج وفوط المياه المبللة على الرقبة وأعلى الفخذ وتحت الإبطين.</li>\n          <li>.نقوم بتغطية الشخص باستخدام أقمشة مبللة بالمياه البارد</li>\n         </ol>\n        </li>\n  <li>اذا كان المصاب واعياً ضعه في وضع نصف جلوس مع اسناد رأسه وكتفيه</li>\n  <img src="../../assets/imgs/brokenimg/d1.png" alt="">\n        <li>يجب أن يتناول الشخص مياه باردة لو كان عنده القدرة على ذلك ويمكن تناول أى سوائل أخرى بشرط الابتعاد عن القهوة والشاى والمشروبات الكحولية.</li>\n  <li>اذا كان المصاب فاقداً وعيه ولا يتنفس افتح ملسك الهواء لديه وتحقق من تنفسه وعمل على انعاشه اذا وجت لزوما لذالك </li>\n  <img src="../../assets/imgs/brokenimg/d2.png" alt="">\n      </ul>\n  \n    </li>\n  \n  \n  </ul>\n\n\n</ion-content>\n'/*ion-inline-end:"F:\OneDrive\Band--Aid\src\pages\sunstroke\sunstroke.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], SunstrokePage);
    return SunstrokePage;
}());

//# sourceMappingURL=sunstroke.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransportationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the TransportationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TransportationPage = /** @class */ (function () {
    function TransportationPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TransportationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TransportationPage');
    };
    TransportationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-transportation',template:/*ion-inline-start:"F:\OneDrive\Band--Aid\src\pages\transportation\transportation.html"*/'<!--\n  Generated template for the TransportationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header dir="rtl">\n  <ion-navbar color="orange">\n    <button ion-button menuToggle class="menus">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>   التدبير والتنقل  </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"F:\OneDrive\Band--Aid\src\pages\transportation\transportation.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], TransportationPage);
    return TransportationPage;
}());

//# sourceMappingURL=transportation.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnconsciousnessPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the UnconsciousnessPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UnconsciousnessPage = /** @class */ (function () {
    function UnconsciousnessPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    UnconsciousnessPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UnconsciousnessPage');
    };
    UnconsciousnessPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-unconsciousness',template:/*ion-inline-start:"F:\OneDrive\Band--Aid\src\pages\unconsciousness\unconsciousness.html"*/'<!--\n  Generated template for the UnconsciousnessPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header dir="rtl">\n  <ion-navbar color="orange">\n    <button ion-button menuToggle class="menus">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>  فقدان الوعي </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"F:\OneDrive\Band--Aid\src\pages\unconsciousness\unconsciousness.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], UnconsciousnessPage);
    return UnconsciousnessPage;
}());

//# sourceMappingURL=unconsciousness.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WoundsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the WoundsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WoundsPage = /** @class */ (function () {
    function WoundsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    WoundsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WoundsPage');
    };
    WoundsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-wounds',template:/*ion-inline-start:"F:\OneDrive\Band--Aid\src\pages\wounds\wounds.html"*/'<!--\n  Generated template for the WoundsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header dir="rtl">\n  <ion-navbar color="orange">\n    <button ion-button menuToggle class="menus">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title> الجروح والنزف </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n\n\n\n  <ul class="main-ul" dir="rtl">\n\n\n    <li>\n\n      <ul>\n        <p>نزيف الأنف</p>\n\n        <p>تنبيه*</p>\n        <p>لا تدع المصاب يرفع رأسه</p>\n\n        <p>المعالجة</p>\n        <li>جلوس الشخص المصاب في وضعية مستقيمة مع إمالة الرأس قليلاً إلى الأمام.\n        </li>\n        <li>استخدم الإبهام و السبابة للضغط على الأنف لمدة عشر دقائق ( الضغط يكون تحت عظم الأنف مباشرةً مكان الحاجز\n          الفاصل في الأنف وليس عند فتحة الأنف ).\n        </li>\n        <li>حرر أصابعك لمعرفة توقف النزيف أم لا، فإذا كان النزيف قد توقف، اطلب من الشخص المصاب تجنب النفخ من الأنف كما\n          لو أنه يطلق زفيراً حتى لا يعود النزف مجدداً.\n        </li>\n        <li>إذا لم يتوقف النزف بعد مرور عشرين دقيقة، في هذه الحالة يجب الاتصال بفريق العناية الطبية أو زيارة الطبيب، و\n          كذلك الأمر إذا عاود النزيف من الأنف بعد قليل أو كان النزف نتيجة إصابة مباشرة على الأنف. لذا يفضّل زيارة\n          الطبيب للتأكد من عدم وجود كسر في الأنف.\n        </li>\n      </ul>\n\n    </li>\n\n    <hr>\n\n    <li>\n      <ul>\n        <p>\n          النزيف الخارجي الشديد\n        </p>\n\n        <p>المعالجة</p>\n\n        <li>يجب استلقاء الشخص المصاب، و إن كان النزيف في أحد أطرافه حاول رفع المنطقة المصابة فوق مستوى القلب إن أمكن.\n        </li>\n        <li>قم بتطبيق الضغط المباشر على الجرح لمحاولة إيقاف النزف و الحد من كمية الدم التي يفتقدها الجسم، و في بعض\n          الأحيان يتطلب الأمر تقريب حواف الجرح إلى بعضها قبل تطبيق الضغط على الجرح.\n        </li>\n        <li>إذا كان هناك أي جسم موجود داخل الجرح فلا تحاول إزالته و لا الضغط مكانه، بل حاول الضغط على الجرح بجانب الشيء\n          الداخل في مكان الجرح.\n        </li>\n        <li>إذا كانت الملابس التي يرتديها المصاب قد أشبعت بالدماء مكان الإصابة فلا تحاول إزالتها، بل حاول إضافة بعض\n          الضمادات أو الأقمشة فوقها لمحاولة إيقاف النزف.\n        </li>\n        <li>لا يجب إعطاء المصاب أي طعام أو شراب.\n        </li>\n        <li>حاول التحدث مع المصاب حتى يبقى صاحياً و لا يفقد الوعي.\n        </li>\n        <li>أما إذا كان المصاب فاقداً للوعي تأكد من استلقائه على جانبه خوفاً من الاختناق.\n        </li>\n        <li>كما يجب تغطية المصاب للحفاظ على حرارة الجسم الداخلية، و الاتصال بالإسعاف في أقرب وقت ممكن.\n        </li>\n      </ul>\n    </li>\n\n    <hr>\n\n    <li>\n      <ul>\n        <p> النزيف الداخلي</p>\n\n        <p>أعراضه</p>\n        <li>تنفس سريع مصحوب بشهيق عميق مع تسارع النبض.</li>\n        <li>انخفاض ضغط الدم والشعور بعطش شديد.</li>\n        <li>برودة وتعرق الجسم مع شحوب الوجه والجسم عموما.</li>\n        <li>زرقة في الشفتين والأذنين والجفنين.</li>\n        <li>فقدان المصاب لجزء من وعيه أو وعيه كاملا.</li>\n        <li>قد يظهر الدم من احدى فتحات الجسم </li>\n\n\n        <p>الهدف</p>\n        <p>اعمل على نقل المصاب مباشرة الى المستشفى لانه ليش من الممكن عادة معالجة النزف الداخلي بواسطة الاسعاف الاولي\n        </p>\n\n\n        <p>المعالجة</p>\n        <li>ارقد المصاب وجعل رأسه منخفضا ومداراً الى جهة واحدة لتأمين مدد كافِ من الدم للدماغ ,ونصحه بعدم التحرك</li>\n        <img src="../../assets/imgs/brokenimg/nd1.png" alt="">\n        <li>ارفع رجليه اذا كانت اصابته تسمع بذالك لكي تساعد على وصول الدم الي الاعضاء الحيوية </li>\n        <img src="../../assets/imgs/brokenimg/nd2.png" alt="">\n        <li>فك اي ملابس ضيقة حول العنق والصدر والخصر </li>\n        <img src="../../assets/imgs/brokenimg/nd3.png" alt="">\n        <li>طمئن المصاب واشرح له ضرورة الاسترخاء بالنسبة له</li>\n        <li>فتش المصاب بحثاً عن اصابات اخرى وعالجها </li>\n        <li>اذا فقد المصاب وعيه افتح مسلك الهواء لديه وتحقق من التنفس واعمل على انعاشه اذا لزم الامر وضعه في وضع\n          الافاقة</li>\n        <img src="../../assets/imgs/brokenimg/nd4.png" alt="">\n        <li> غط المصاب وضع تحته بطانية اذا امكن </li>\n        <li>اعمل على نقل المصاب الى المستشفى باسرع وقت مع المحافظة على وضع المعاجة\n        </li>\n\n\n      </ul>\n    </li>\n\n    <hr>\n    <li>\n      <!-- البتر -->\n      <ul>\n\n        <p>البتر</p>\n\n        <p>*تنبيه</p>\n        <li> لا تنسى إنقاذ حياة المصاب أهم بكثير من الحفاظ على العضو المبتور.</li>\n        <li>لا تتجاهل الجروح أو الإصابات الأخرى البسيطة.</li>\n        <li>لا تحاول إعادة أي عضو لمكانه مرة أخرى.</li>\n        <li>لا تقرر أن العضو صغير للغاية أولا يستحق إنقاذه أو الحفاظ عليه (لا تستهن به).</li>\n\n        <p>المعاجة</p>\n\n        <li>التأكد من أن ممرات الهواء عند المصاب أنها مفتوحة (بل وفتحها عند الضرورة). التأكد من التنفس والدورة الدموية\n          وعند الضرورة بدء التنفس الصناعي والسيطرة على النزيف.</li>\n        <li>طمأنة المصاب بقدر الإمكان لأن التعرض للبتر شيء مؤلم للغاية بل ومفزع لصاحبه.</li>\n        <li> السيطرة على النزيف من خلال الضغط المباشر على الجرح ورفع الجزء المصاب، إذا استمر النزيف يعاد فحص مصدر\n          النزيف وإعادة الضغط مرة أخرى على الجرح.\n          أما إذا كان النزيف خطيراً ويهدد الحياة يتم استخدام المرقأة لوقف النزيف.</li>\n        <li> الاحتفاظ بالعضو المفصول أو المبتور مع التخلص من أي أداة ملوثة تلحق بالعضو أو تنظيف العضو إذا كان ملوثاً\n          ويتم الاحتفاظ به نظيفاً في قطعة قماش مبللة ونظيفة، ثم توضع في كيس بلاستيك نظيف مع إحكام غلقه ثم يوضع الكيس في\n          ماء بارد (إن أمكن ماء مثلج) لا تضع العضو مباشرة في الماء ولا تضعه في الثلج، ولا تستخدم الثلج الجاف لأنه قد\n          يعرض العضو للضربة بالصقيع.\n          إذا لم يتوافر الماء المثلج عليك بالاحتفاظ بالعضو بعيداً عن الحرارة بقدر الإمكان ثم أخذه إلى أقرب مستشفى لأن\n          تعرض العضو المبتور للتبريد يجعله حياً لمدة 18 ساعة وبدونه يبقى من 4-6 ساعات فقط.</li>\n        <li> إتباع خطوات عدم التعرض لصدمة من جراء البتر، بجعل الضحية تستلقي مستوية مع رفع القدم لارتفاع 30 سم مع تغطية\n          المصاب بمعطف أو بطانية.\n          لا تتخذ الضحية هذا الوضع إذا كان هناك شك في إصابة بالرأس أو الرقبة أو الظهر أو الأرجل وإلا سيكون هذا الوضع\n          غير مريحاً.</li>\n        <li> بمجرد توقف النزيف في مكان البتر، عليك بفحص المصاب عن وجود أية علامات أخرى للإصابة تطلب تقديم الإسعافات.\n          عليك بعلاج أية كسور أو قطع أو إصابات أخرى موجودة.</li>\n        <li> البقاء مع المصاب حتى وصول المساعدة الطبية المتخصصة.</li>\n      </ul>\n\n    </li>\n\n\n    <hr>\n\n    <li>\n      <ul>\n\n        <p>نزيف الأذن</p>\n        <p>المعالجة</p>\n        <li>قم بوضع المصاب بنزيف الأذن على ظهره برفق.</li>\n        <li>ضع وسادة أسفل رأسه، وقم بإمالة رأسه اتجاه الأذن التي نزف منها.</li>\n        <img src="../../assets/imgs/brokenimg/ne.png" alt="">\n        <li>في هذا الوقت أنت لا تعرف أيّاً من اسباب نزيف الاذن لكن يجب ألا تقوم بكتم الأذن بسدادة قطنية أو أي شيء آخر،\n          ولكن قم باستخدام لاصقة طبية وضعها على الأذن التي تنزف، ثم أحضر رباط ضاغط ولفه على الأذن برفق.</li>\n        <li>في هذه الحالة يجب عليك التوجه مباشرةً إلى المستشفى أو أقرب مركز للإسعاف فوراً.</li>\n        <li>في هذه الأثناء يجب أن يبقى الشخص المصاب ممدداً على جانبه بحيث تكون الأذن النازفة تجاه الأرض.</li>\n\n      </ul>\n    </li>\n\n    <hr>\n\n    <li>\n\n      <ul>\n        <p>نزيف الفم</p>\n\n        <p>المعالجة</p>\n        <li>الهدوء , يجب أن تجعل المصاب بالنزيف هادئ حيث أن التوتر يزيد من النزيف و بخاصة في الأطفال .</li>\n        <li>قم بإجلاس المصاب بالنزيف في وضع منحني نحو الأمام .</li>\n        <img src="../../assets/imgs/brokenimg/nf.png" alt="">\n        <li>لا تقم ابدًا بجعل المصاب ينحني نحو الخلف حتى لا يبتلع المصاب الدم او يستنشقه .</li>\n        <li>إجعل المصاب يقوم بالضغط على الغضروف الموجود بالأنف لمدة لا تقل عن خمس دقائق </li>\n        <li> إجعل المصاب يقوم بعملية التنفس من الفم .</li>\n        <li> ضع الثلج فوق الأنف للمساعدة على تجلط الدم .</li>\n\n\n      </ul>\n\n    </li>\n\n    <li>\n\n      <ul>\n\n\n\n        <p>اصابات العين</p>\n\n\n        <p>جروح العين</p>\n        <p>المعاجة</p>\n        <li>اغسل الجفن جيداً بالماء، و إذا كان الجرح ينزف، طبّق ضغط خفيف بواسطة قطعة قماش نظيفة إلى أن يتوقف النزف.\n        </li>\n        <li>غطي المنطقة المصابة بقطعة قماش نظيفة و ضع فوقها قطعة ثلج لتخفيف الألم و الانتفاخ.\n        </li>\n        <li>اطلب العناية الطبية بأسرع وقت.</li>\n\n\n\n        <hr>\n\n\n        <p>دخول مادة غريبة لداخل العين (مادة كيميائية)</p>\n\n        <p>المعاجة</p>\n\n        <li>في حال دخول مواد كيميائية للعين، أفضل طريقة لتنظيف العين هي غسلها مباشرةً بالماء، ثم وضع رأسك فوق بخار ماء\n          دافئ\n          لمدة 15 دقيقة. هذا البخار كفيل بتنظيف العين جيداً.</li>\n        <li>إذا كنت تستخدم العدسات اللاصقة، بعد غسل العين جيداً بالماء، انزع العدسات اللاصقة و اغسل عينيك مجدداً بالماء\n          ثم\n          استخدم بخار الماء.</li>\n\n      </ul>\n\n    </li>\n\n\n\n\n    <li>\n      <ul>\n\n        <p>جروح الصدر النافذة</p>\n\n        <p>المعاجة</p>\n\n        <li>قم على الفور بإغلاق الجرح أو الثقب الموجود في الصدر براحة يدك (أو راحة يد المصاب)، لإيقاف دخول الهواء إلى\n          الصدر، فهذا يحرك القلب إلى الجهة المعاكسة مع كل حركة تنفس، مما يعطل عمل الرئة السليمة كذلك.</li>\n        <li>ضع المصاب في وضع نصف الجلوس، وأسند رأسه وكتفيه، كذلك ميّل جسمه إلى الناحية المصابة، كي تبقى الرئة السليمة\n          متجهة إلى الأعلى، ولا تتوقف عن تطمينه، لتنزع عنه الخوف الذي يزيد من أعراض صعوبة التنفس.</li>\n        <li>ضع ضماداً معقماً أو نظيفاً فوق الجرح بأسرع ما تستطيع، وغط الضماد بطبقة بلاستيكية عازلة أو رقيقة معدنية، وغط\n          حوافها بطبقة أو أكثر من الشريط اللاصق، لتمنع دخول أي هواء عن طريق الثقب الصدري.</li>\n        <li>أطلب العون الطبي لنقل المصاب إلى المستشفى بأسرع وقت، وفي أثناء انتظارك سيارة الإسعاف، قم بما يلي:</li>\n        <li>اعمل على تخفيف آثار الصدمة إلى أكبر حد.</li>\n        <li> تفحص سرعة حركات تنفس المريض ونبضه ومدى تجاوبه كل بضع دقائق.</li>\n        <li> إذا غاب المصاب عن الوعي، فاعمل على فتح مسالكه التنفسية، وإذا توقف تنفسه أو قلبه عن النبض، فطبق خطوات\n          الإنعاش.</li>\n\n      </ul>\n    </li>\n\n\n\n    <hr>\n    <li>\n\n      <ul>\n\n        <p>جرح البطن</p>\n\n\n        <p>تنبيه</p>\n        <li>عند انعدام النبض أو التنفس قم فورا بالانعاش القلبي الرئوي . </li>\n        <li>في حالات الاصابة بجرح في البطن مع بروز الامعاء لا تعطي المصاب أي شيء ليأكله أو ليشرب.</li>\n\n\n        <p>المعالجة</p>\n\n        <li>\n          ضع المصاب على ظهره مع ثني الركبتين الى الاعلى لنمع اتساع الجرح وتخفيف الشد على الناحية المصابة واسند الركبتين\n        </li>\n        <li>ضع المصاب على ظهره ثم افحص العلامات الحيوية ( الوعي و النبض و التنفس) و اتصل بالاسعاف بسرعة</li>\n        <li>إلبس القفازات الطبية (إن توفرت) و إكشف مكان الاصابة بإزالة الملابس التي حوله. </li>\n        <li>يجب أن لا تلمس الأمعاء البارزة بيديك مباشرة</li>\n        <li>يجب ان لا تحاول إرجاع الامعاء للبطن</li>\n        <li>يجب ان لا تحاول إزالة أي شيء مغروس</li>\n        <li>يجب ان لا تقم بإعطاء المصاب أي شيء عبر الفم و لو طلب ذلك</li>\n        <li>قم بتغطية الجرح و الأمعاء بضمادات أو قطعة قماش نظيفة بحيث تكون الضمادات أو قطعة القماش مبللة بماء نظيف\n          (إستعن بقنينة ماء). </li>\n        <li>افحص و تفقد وجود إصابات أخرى تحت الامعاء دون لمسها مباشرة كما ذكر سابقا. </li>\n        <li>لف ضمادات حول الامعاء لتثبيتها دون اللف بقوة. </li>\n        <li>عالج إحتمال الاصابة بالصدمة بوضع شيء تحت الرجلين لرفعهما. </li>\n        <li>حافظ على دفئ المصاب, هدوئه و طمأنته. </li>\n        <li>راقب العلامات الحيوية و انتظر الاسعاف. </li>\n\n\n      </ul>\n\n    </li>\n\n\n    <hr>\n\n    <li>\n      <ul>\n        <p>النزف المهبلي</p>\n\n        <li>يحدث النزف الغزير من المهبل لعدد من الأسباب، أهمها: الحيض الكثيف، أو الإجهاض، أو أذية تشمل الأعضاء الأنثوية الخارجية، أو الاغتصاب. وكثيراً ما يكون النزف مصحوبا بآلام مغص بطني.</li>\n\n        <p>المعاجة</p>\n\n        <li> اسع لنقل المصابة إلى مكان تُراعى فيه خصوصيتها، وأقم حاجزا يحجبها عن الأنظار، ولا تتوقف عن طمأنتها.</li>\n        <li> مددها على وسائد ومساند في وضعية نصف الجلوس، وارفع رأسها وكتفيها، واثن ركبتيها للأعلى (لأن ذلك يؤدي لاسترخاء عضلات البطن)، وضع تحتهما مناشف حسب اللزوم.</li>\n        <img src="../../assets/imgs/brokenimg/nm1.png" alt="">\n        <li> إذا كان المغص شديدا، ناول المصابة قرصا أو اثنين من مضادات الألم</li>\n        <li> إذا استمر نزف الحيض غزيرا، أو قدرت أن النزف كان نتيجة إجهاض أو حادث أو اعتداء، فاعمل على نقل المصابة للمستشفى بأسرع وقت ممكن.</li>\n\n        <img src="../../assets/imgs/brokenimg/nm2.png" alt="">\n\n      </ul>\n    </li>\n\n\n\n    <li>\n\n    </li>\n\n\n  </ul>\n\n\n\n\n</ion-content>'/*ion-inline-end:"F:\OneDrive\Band--Aid\src\pages\wounds\wounds.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], WoundsPage);
    return WoundsPage;
}());

//# sourceMappingURL=wounds.js.map

/***/ }),

/***/ 129:
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
webpackEmptyAsyncContext.id = 129;

/***/ }),

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		293,
		18
	],
	"../pages/aches/aches.module": [
		292,
		17
	],
	"../pages/alien-objects/alien-objects.module": [
		295,
		16
	],
	"../pages/back-injuries/back-injuries.module": [
		294,
		15
	],
	"../pages/bandages/bandages.module": [
		296,
		14
	],
	"../pages/blood-circulation/blood-circulation.module": [
		298,
		13
	],
	"../pages/broken/broken.module": [
		297,
		12
	],
	"../pages/burns/burns.module": [
		299,
		11
	],
	"../pages/choking/choking.module": [
		300,
		10
	],
	"../pages/emergency-birth/emergency-birth.module": [
		301,
		9
	],
	"../pages/fainting/fainting.module": [
		302,
		8
	],
	"../pages/major-accidents/major-accidents.module": [
		303,
		7
	],
	"../pages/max-temperatures/max-temperatures.module": [
		304,
		6
	],
	"../pages/musculoskeletal-injuries/musculoskeletal-injuries.module": [
		305,
		5
	],
	"../pages/python/python.module": [
		306,
		4
	],
	"../pages/sunstroke/sunstroke.module": [
		307,
		3
	],
	"../pages/transportation/transportation.module": [
		308,
		2
	],
	"../pages/unconsciousness/unconsciousness.module": [
		309,
		1
	],
	"../pages/wounds/wounds.module": [
		310,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 170;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_call_number__ = __webpack_require__(210);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, callNumber) {
        this.navCtrl = navCtrl;
        this.callNumber = callNumber;
    }
    HomePage.prototype.police = function () {
        this.callNumber.callNumber("121", true)
            .then(function (res) { return console.log('Launched dialer!', res); })
            .catch(function (err) { return console.log('Error launching dialer', err); });
    };
    HomePage.prototype.ambulance = function () {
        this.callNumber.callNumber("122", true)
            .then(function (res) { return console.log('Launched dialer!', res); })
            .catch(function (err) { return console.log('Error launching dialer', err); });
    };
    HomePage.prototype.Cvile = function () {
        this.callNumber.callNumber("115", true)
            .then(function (res) { return console.log('Launched dialer!', res); })
            .catch(function (err) { return console.log('Error launching dialer', err); });
    };
    HomePage.prototype.midical = function () {
        this.callNumber.callNumber("404", true)
            .then(function (res) { return console.log('Launched dialer!', res); })
            .catch(function (err) { return console.log('Error launching dialer', err); });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"F:\OneDrive\Band--Aid\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar color="orange">\n    <button ion-button menuToggle class="btn-menus">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>الرئيسية</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <div class="backimg">\n\n    <p>اذا كنت انت والمصاب في مأزق يرجى <br> الاتصال باحدى الارقام ادناه</p>\n\n  </div>\n\n\n  <div class="con-call-list">\n\n    <div class="call-list">\n      <img src="../../assets/imgs/police-station.svg" alt="">\n\n      <h4>النجدة والدوريات<br>\n        <h6>121</h6>\n      </h4>\n\n      <img (click)="police()" src="../../assets/imgs/Phone-1.png" alt="">\n    </div>\n    <div class="call-list">\n      <img src="../../assets/imgs/ambulance.svg" alt="">\n\n      <h4>الاسعاف الفوري<br>\n        <h6>122</h6>\n      </h4>\n\n      <img (click)="ambulance()" src="../../assets/imgs/Phone-1.png" alt="">\n    </div>\n\n    <div class="call-list">\n      <img src="../../assets/imgs/heart.svg" alt="">\n\n      <h4>الدفاع المدني<br>\n        <h6>115</h6>\n      </h4>\n\n      <img (click)="Cvile()" src="../../assets/imgs/Phone-1.png" alt="">\n    </div>\n\n    <div class="call-list">\n      <img src="../../assets/imgs/doctor.svg" alt="">\n\n      <h4>الاستشارة الطبية<br>\n        <h6>404</h6>\n      </h4>\n\n      <img (click)="midical()" src="../../assets/imgs/Phone-1.png" alt="">\n    </div>\n\n\n\n\n\n\n  </div>\n\n\n\n</ion-content>'/*ion-inline-end:"F:\OneDrive\Band--Aid\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_call_number__["a" /* CallNumber */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ObjectivesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ObjectivesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ObjectivesPage = /** @class */ (function () {
    function ObjectivesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ObjectivesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ObjectivesPage');
    };
    ObjectivesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-objectives',template:/*ion-inline-start:"F:\OneDrive\Band--Aid\src\pages\objectives\objectives.html"*/'<!--\n  Generated template for the ObjectivesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="orange">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title align="right"> الطرق الرئيسية للاسعاف الاولي </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ul class="main-ul" dir="rtl">\n\n    <li>\n\n      <ul type="square"> يستطيع المسعف الاولي الماهر ان ينقذ حياة المصاب بان يوفر ضروريات الحياة الازمة وهي\n        <hr>\n        <li> مسك الهواء المفتوح </li>\n\n\n\n        <li> تنفس ملائم </li>\n\n        <li> دورة دومية منتضمة</li>\n\n      </ul>\n\n    </li>\n\n    <li>\n\n      <ul>\n        الطرق الرئيسية للاسعاف الاولي\n        <p>الانعاش</p>\n        <li> اذا كان المصاب لا يتنفس وقلبة لا ينبض فمن الامور الحيوية ان تتولى امر التهوية وتشغل دورة الدم لضمان وصول الاوكسجين\n          الي الدماغ وذالك من خلال ضمان مسلك الهواء مفتوح</li>\n\n        <img src="../../assets/imgs/PhotoOfLearn/PhotoOfLearn.png" alt="">\n\n        <li>وثانيا عمل التنفس الاصطناعي </li>\n\n        <img src="../../assets/imgs/PhotoOfLearn/tanfuasEstinaie.png" alt="">\n\n        <li>وثالثا تشغيل دوران الدم بالضغط على صدره (الضغط الخارجي ع الصدر )</li>\n\n        <img src="../../assets/imgs/PhotoOfLearn/pushing.png" alt="">\n\n      </ul>\n\n\n      <hr>\n\n      <ul>\n        <p>فتح مسلك الهواء </p>\n        اذا كان المصاب فاقداً وعيه فان مسلك الهواء قد يضيق او ينسد فيصبح التنفس مصحوبا بصوت او بدون صوت لذا في هذه الحالة من الضروري\n        القيام بفتح مسلك الهواء في الحال\n        <li>اركع الى جانب المصاب </li>\n        <li>ارفع ذقن المصاب باحدى يديك (استعمل السبابة والوسطى) وانت تضغط على جبهتة الى الوراء بباطن اليد الاخرى وبهذا يدفع فكه\n          لسانه الى الامام وبالتالي يفتح مسلك الهواء </li>\n        <img src="../../assets/imgs/PhotoOfLearn/tanafius.png" alt="">\n        <span>\n          <sup>*اذا صاحب نفس المصاب صوت فانه يدل على وجود انسداد فقم على الفور وتسليك مجرى الهواي عبر الخطوات اعلاه </sup>\n        </span>\n\n      </ul>\n\n      <ul>\n        <p>التحقق من التنفس </p>\n        <p>لكي تثبت ان المصاب الفاقد للوعي يتنفس عليك بعد فتح مسلك الهواء ان تبحث عن اي علامة من علامات التنفس وتتسمعها وتتحسسها\n        </p>\n        <li>واصل ابقاء مسلك الهواء لدى المصاب مفتوحا ثم ضع اذنك فوق فمه وانفه</li>\n        <img src="../../assets/imgs/PhotoOfLearn/listen.png" alt="">\n        <li>التحقق بالنظر لملاحظة ارتفاع وهبوط الصدر</li>\n        <li>التحقق بالسمع وذلك بوضع أذنك على مقربة من فم وأنف المصاب</li>\n        <li> التحقق بالحس بحيث تشعر بزفير المصاب على خدك.</li>\n\n      </ul>\n\n      <ul>\n        <p>تنضيف مسلك الهواء </p>\n        <p>حتى بعد فتح مسلك الهواء لدى المصاب قد تسده مرة ثانية المواد الغريبة كالقيء او سن مخلخلة(سن يتحرك) او اسنان اصطناعية\n          (طقم اسنان) او الطعام وتمنع المصاب من التنفس لذالك يجب ازالة اي شي ممكن رؤيته او تحسه من خلال </p>\n\n        <li>ادر رأس المصاب الي الجانب وابقه مرفوعا الى الخلف </li>\n        <li>ضم اصبعيك السبابة والوسطى والنهما ,وافرغ بهما مافي الفم دون ان تضيع الوقت في التفتيش عن الاشياء المسببة للانسداد\n          وانتبه الى عدم دفع اي شي نحو الحلق </li>\n\n        <img src="../../assets/imgs/PhotoOfLearn/openMonth.png" alt="">\n\n        <li>تحقق من التنفس مرة اخرى</li>\n\n      </ul>\n      <hr>\n      <ul>\n        <p>التنفس الاصطناعي</p>\n        <p>ويمكن للمسعف الاولي ان يستخدم طريقة التنفس فماً لفم يصرف النظر عن سنّه وفي جميع الضروف ويكون تنفيذها اسهل اذا كان\n          المصاب راقداً على ضهره ولكن ينبغي البدء باجرائها في الحال مهما كان الوضع الذي عليه ويجب ان نقوم بأول نفختين ببطء.\n          وقد يعود المصاب للتنفس في اي مرحلة ولكن قد يحتاج للمساعدة الى أن يستقر التنفس بمعدل طبيعي .</p>\n        <sup>وقد يتعذر اجراء التنفس فماً لفم , او يكون غير مناسب في بعض الضروف , كما هو الحال عند وجود جروح بليغة جداً في الوجه\n          او عندما يكون وجه المصاب محصور ومتجهاً نحو الاسفل او عندما تلاحض وجود مادة حول الفم </sup>\n        <sup>* الحديث فيما يلي عن التنفس فما لفم يتضمن التنفس من فم لانف ومن الفم للانف والفم </sup>\n        <p>التنفس فماً لفم </p>\n        <p>هي الطريقة المفضلة للتنفس الاصطناعي في جميع الحالات التي لا يتنفس فيها المصاب (فما عدى بعض الحالات المذكورة اعلاه\n          ) </p>\n        <sup>واذا تعذر استخدام الفم يمكن اجراء التنفس بشكل مقبول عن طريق الانف (التنفس من الفم الى الانف ) او عن طريق الفم والانف\n          معا لدى الاطفال الصغار والرضع </sup>\n\n        <li>ازل اي عائق ظاهر على الوجه او اي شي ضاغظ حول الرقبة (القلادة) افتح مسلك الهواء واخرج ماتراه في الفم والحلق من بقايا\n          (الخطوات اعلاه)</li>\n          <img src="../../assets/imgs/PhotoOfLearn/tanfs1.png" alt="">\n        <sup> * تنبيه قم بالنفخ مرتين بأسرع مايكمن ولا تضيع الوقت كثيرا عن العوائق التي تمنع التنفس </sup>\n\n        <li>افتح فمك بقدر المستطاع وخذ شهيقاً عميقاً واضغط على فتحتي انف المصاب باصبعيك واطبق يشفتيك حول فمه </li>\n        <img src="../../assets/imgs/PhotoOfLearn/tanfs2.png" alt="">\n        <li>انفخ في رئتي المصاب وفي الوقت نفسه راقب صدره الى ان تشاهده يرتفع الى اقصى حد ممكن</li>\n        <img src="../../assets/imgs/PhotoOfLearn/tanfs3.png" alt="">\n        <sup>*تنبيه اذا لم يرتفع صدر المصاب فأفترض ان مسلك الهواء لديه غير مفتوح تماما اضبط وضع رأسه وفكه وحاول مرة اخرى فاذا\n          وجدت ان ادخال الهواء لا يزال متعذرا فقد يكون مسلك الهواء مسدودا ويجب عليك ان تعالج الاختناق لديه (الخطوات اعلاه\n          الانعاش وفتح مسلك الهواء)</sup>\n        <li> ارفع فمك بعيداً عن فم المصاب وزفر الهواء الفائض اثناء مراقبتك لانخفاض صدره خذ شهيقا عميقا وكرر النفخ </li>\n        <img src="../../assets/imgs/PhotoOfLearn/tanfs4.png" alt="">\n        <li>بعد تكرار النفخ مرتين تحقق من النبض وتاكد انت القلب يخفق</li>\n\n        <sup>* اذا كان القلب يخفق ويمكن جس النبض واصل النفخ بمعدل 12 الى 16 مرة بالدقيقة الى ان يعود التنفس طبيعي وعندما يتنفس\n          المصاب وحده اجلسه في وضع الافاقة </sup>\n\n      </ul>\n\n      <ul>\n\n        <p>التنفس من الفم للانف</p>\n\n        <li>اذا تعذر اجراء التنفس فماً لفم اغلق فم المصاب بواسطة ابهامك وطبق بشفتيك حول انفه واكمل العمل كما في تنفس فما لفم\n          </li>\n          <img src="../../assets/imgs/PhotoOfLearn/tanfs5.png" alt="">\n      </ul>\n\n    </li>\n\n    <hr>\n    <hr>\n\n    <li>\n\n      <ul>\n        <p>وضع الافاقة</p>\n\n        <li> إركع الى جانب المصاب مواجها صدره، ثم ادر رأسه ناحيتك مع إمالته للخلف والابقاء على الفك مرفوعا فى وضع يكون مسلك الهواء المفتوح .</li>\n        <li> ضع ذراعه القريبه منك الى جانبه، إرفع مؤخرته وضع يده تحتها واصابعه منبسطة ثم امسك بساقه البعيدة من تحت الركبة او من الكاحل واسحبها نحوك بحيث تتصالب مع الساق الاخرى وإسحب ذراعه الاخرى وضعها فوق صدره .</li>\n        <li> اسند راس المصاب وامن حمايته باحدى يديك، وامسك ثيابه باليد الثانية من ابعد نقطة ممكنة على مستوى الخصر واجذبه نحوك على فخذيك وهو مستلقى على جانبه.</li>\n        <li> اثناء مساندتك جسمه بركبتيك عدل وضع رأسه بحيث تضمن بقاء مسلك الهواء مفتوحا .</li>\n        <li> اثن ذراعه العليا بشكل زاوية قائمة لكى تسند الجزء العلوى من جسمه .</li>\n        <li> اثن ركبته العليا بشكل زاوية قائمة فتتقدم الفخذ وتسند الجزء السفلى من جسمه .</li>\n        <li> اسحب بحرص الذراع الاخرى من تحت المصاب بدءا من الكتف الى اسفل، واتركها موازية له لتحول دون إنقلابه على ظهره وتمنع اعاقة دوران الدم .</li>\n        <li> تحقق ان الوضع النهائى ثابت وان المصاب لا يمكن ان ينقلب لا الى الامام او الخلف، وتاكد ان نصف صدره _لا أكثر _ يلمس الارض وان يظل راسه مائلا وفكه متجها نحو الامام للابقاء على مسلك الهواء مفتوحا .</li>\n\n        <img src="../../assets/imgs/Efaqa.png" alt="">\n\n      </ul>\n\n    </li>\n\n\n  </ul>\n\n</ion-content>'/*ion-inline-end:"F:\OneDrive\Band--Aid\src\pages\objectives\objectives.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ObjectivesPage);
    return ObjectivesPage;
}());

//# sourceMappingURL=objectives.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrinciplesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PrinciplesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PrinciplesPage = /** @class */ (function () {
    function PrinciplesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    PrinciplesPage_1 = PrinciplesPage;
    PrinciplesPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(PrinciplesPage_1, {
            item: item
        });
    };
    PrinciplesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PrinciplesPage');
    };
    PrinciplesPage = PrinciplesPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-principles',template:/*ion-inline-start:"F:\OneDrive\Band--Aid\src\pages\principles\principles.html"*/' \n<ion-header>\n  <ion-navbar color="orange">\n      <button ion-button menuToggle >\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title  >  المبادئ الرئيسية للاسعافات الاولية </ion-title>\n    </ion-navbar>\n  </ion-header>\n\n\n<ion-content padding>\n\n\n\n    <ul class="main-ul" dir="rtl">\n\n      <p>عموما تعتمد الاسعافات الاولية على القاعدة التالية: الحماية, الاتصال بالطوارئ و تقديم الاسعاف اللازم.\n        </p>\n\n      <li>\n\n<ul>\n  <p>الحماية</p>\n  <p>الحماية من أي خطر أول شيء يجب التفكير فيه قبل و أثناء إسعاف أي حالة مهما كانت ويكون ذلك ب:\n</p>\n<li>حماية المسعف أو المنقذ نفسه (يجب أخد الحيطة و الحذر قبل التوجه للمصاب).\n</li>\n<li>حماية المصاب إما بإبعاده أو بإزالة الخطر.\n</li>\n<li>و كذا حماية الناس المحيطين به أو الجمهور.\n</li>\n\n\n</ul>\n\n      </li>\n\n\n    </ul>\n\n\n\n</ion-content>\n  \n\n'/*ion-inline-end:"F:\OneDrive\Band--Aid\src\pages\principles\principles.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], PrinciplesPage);
    return PrinciplesPage;
    var PrinciplesPage_1;
}());

//# sourceMappingURL=principles.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(240);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_call_number__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_list__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_state_state__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_objectives_objectives__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_principles_principles__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_about_about__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_broken_broken__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_fainting_fainting__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_burns_burns__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_sunstroke_sunstroke__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_choking_choking__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_blood_circulation_blood_circulation__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_unconsciousness_unconsciousness__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_back_injuries_back_injuries__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_musculoskeletal_injuries_musculoskeletal_injuries__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_max_temperatures_max_temperatures__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_alien_objects_alien_objects__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_aches_aches__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_major_accidents_major_accidents__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_bandages_bandages__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_transportation_transportation__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_python_python__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_status_bar__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_splash_screen__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_emergency_birth_emergency_birth__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_wounds_wounds__ = __webpack_require__(119);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_state_state__["a" /* StatePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_principles_principles__["a" /* PrinciplesPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_objectives_objectives__["a" /* ObjectivesPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_broken_broken__["a" /* BrokenPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_fainting_fainting__["a" /* FaintingPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_burns_burns__["a" /* BurnsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_sunstroke_sunstroke__["a" /* SunstrokePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_choking_choking__["a" /* ChokingPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_blood_circulation_blood_circulation__["a" /* BloodCirculationPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_unconsciousness_unconsciousness__["a" /* UnconsciousnessPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_back_injuries_back_injuries__["a" /* BackInjuriesPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_musculoskeletal_injuries_musculoskeletal_injuries__["a" /* MusculoskeletalInjuriesPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_max_temperatures_max_temperatures__["a" /* MaxTemperaturesPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_alien_objects_alien_objects__["a" /* AlienObjectsPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_aches_aches__["a" /* AchesPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_major_accidents_major_accidents__["a" /* MajorAccidentsPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_bandages_bandages__["a" /* BandagesPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_transportation_transportation__["a" /* TransportationPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_emergency_birth_emergency_birth__["a" /* EmergencyBirthPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_wounds_wounds__["a" /* WoundsPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_python_python__["a" /* PythonPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/aches/aches.module#AchesPageModule', name: 'AchesPage', segment: 'aches', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/back-injuries/back-injuries.module#BackInjuriesPageModule', name: 'BackInjuriesPage', segment: 'back-injuries', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/alien-objects/alien-objects.module#AlienObjectsPageModule', name: 'AlienObjectsPage', segment: 'alien-objects', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/bandages/bandages.module#BandagesPageModule', name: 'BandagesPage', segment: 'bandages', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/broken/broken.module#BrokenPageModule', name: 'BrokenPage', segment: 'broken', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/blood-circulation/blood-circulation.module#BloodCirculationPageModule', name: 'BloodCirculationPage', segment: 'blood-circulation', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/burns/burns.module#BurnsPageModule', name: 'BurnsPage', segment: 'burns', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/choking/choking.module#ChokingPageModule', name: 'ChokingPage', segment: 'choking', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/emergency-birth/emergency-birth.module#EmergencyBirthPageModule', name: 'EmergencyBirthPage', segment: 'emergency-birth', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/fainting/fainting.module#FaintingPageModule', name: 'FaintingPage', segment: 'fainting', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/major-accidents/major-accidents.module#MajorAccidentsPageModule', name: 'MajorAccidentsPage', segment: 'major-accidents', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/max-temperatures/max-temperatures.module#MaxTemperaturesPageModule', name: 'MaxTemperaturesPage', segment: 'max-temperatures', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/musculoskeletal-injuries/musculoskeletal-injuries.module#MusculoskeletalInjuriesPageModule', name: 'MusculoskeletalInjuriesPage', segment: 'musculoskeletal-injuries', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/python/python.module#PythonPageModule', name: 'PythonPage', segment: 'python', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sunstroke/sunstroke.module#SunstrokePageModule', name: 'SunstrokePage', segment: 'sunstroke', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/transportation/transportation.module#TransportationPageModule', name: 'TransportationPage', segment: 'transportation', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/unconsciousness/unconsciousness.module#UnconsciousnessPageModule', name: 'UnconsciousnessPage', segment: 'unconsciousness', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/wounds/wounds.module#WoundsPageModule', name: 'WoundsPage', segment: 'wounds', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_state_state__["a" /* StatePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_principles_principles__["a" /* PrinciplesPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_objectives_objectives__["a" /* ObjectivesPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_broken_broken__["a" /* BrokenPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_fainting_fainting__["a" /* FaintingPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_burns_burns__["a" /* BurnsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_sunstroke_sunstroke__["a" /* SunstrokePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_choking_choking__["a" /* ChokingPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_blood_circulation_blood_circulation__["a" /* BloodCirculationPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_max_temperatures_max_temperatures__["a" /* MaxTemperaturesPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_emergency_birth_emergency_birth__["a" /* EmergencyBirthPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_unconsciousness_unconsciousness__["a" /* UnconsciousnessPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_musculoskeletal_injuries_musculoskeletal_injuries__["a" /* MusculoskeletalInjuriesPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_back_injuries_back_injuries__["a" /* BackInjuriesPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_alien_objects_alien_objects__["a" /* AlienObjectsPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_aches_aches__["a" /* AchesPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_major_accidents_major_accidents__["a" /* MajorAccidentsPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_bandages_bandages__["a" /* BandagesPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_transportation_transportation__["a" /* TransportationPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_wounds_wounds__["a" /* WoundsPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_python_python__["a" /* PythonPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_27__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_28__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_call_number__["a" /* CallNumber */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_objectives_objectives__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_principles_principles__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_state_state__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_about_about__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'الرئيسية', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], icon: 'home' },
            { title: 'الحالات', component: __WEBPACK_IMPORTED_MODULE_7__pages_state_state__["a" /* StatePage */], icon: 'medkit' },
            { title: 'مبادئ الاسعافات الاولية', component: __WEBPACK_IMPORTED_MODULE_6__pages_principles_principles__["a" /* PrinciplesPage */], icon: 'pulse' },
            { title: 'اهداف الاسعافات الاولية', component: __WEBPACK_IMPORTED_MODULE_5__pages_objectives_objectives__["a" /* ObjectivesPage */], icon: 'wifi' },
            { title: 'حول', component: __WEBPACK_IMPORTED_MODULE_8__pages_about_about__["a" /* AboutPage */], icon: 'alert' }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"F:\OneDrive\Band--Aid\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n\n    <!-- <ion-toolbar>\n      <ion-title align="center" >الرئيسية</ion-title>\n    </ion-toolbar> -->\n  </ion-header>\n\n  <ion-content class="backIon">\n    <div class="test">\n   <img src="../assets/imgs/Listback/CodeLogo.jpg" alt=""> \n  </div>\n    <ion-list class="cal">\n\n      <div class="btn" menuClose *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n            <ion-icon [name]="p.icon"></ion-icon>\n      </div>\n    </ion-list>\n    <div class="con-img">\n      <p> Code For IRaq</p>\n       \n    </div>\n\n\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"F:\OneDrive\Band--Aid\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__state_state__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ListPage.prototype.go = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__state_state__["a" /* StatePage */]);
    };
    ListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"F:\OneDrive\Band--Aid\src\pages\list\list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>الحالات</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <button (click)=\'go()\'>click</button>\n\n</ion-content>\n'/*ion-inline-end:"F:\OneDrive\Band--Aid\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ListPage);
    return ListPage;
}());

//# sourceMappingURL=list.js.map

/***/ })

},[217]);
//# sourceMappingURL=main.js.map