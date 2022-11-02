(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!DOCTYPE html>\n\n<body>\n  <div class=\"container-fluid full-width\">\n    <div class=\"row\">\n      <div class=\"col-12 p-4 fixed\">\n        <div class=\"header-text\">\n          Merck<br/>\n          <b>Academy</b>\n          <div *ngIf=\"showBack\" class=\"mx-auto thumbnail-1 col mb-4\" (click)=\"home()\">\n            <span class=\"arrow-left\">\n              <img width=\"95%\" src=\"../assets/img/US-NA-0024-arrow-left.png\">\n            </span>\n            <div class=\"color-normal-md text-right\">\n              <b>Back to home</b>\n            </div>\n          </div>          \n        </div>\n      </div>\n    </div>\n    \n    <router-outlet></router-outlet>\n    \n    <div class=\"row contact-outer\" >\n      \n      <!-- this block shows the sub-footer information. This is specific for the\n           mobile version. Class footer-mobile controls the show-hide based\n           on defined media query. -->\n\n      <!--\n      \n      <div class=\"col-10 footer-mobile\">\n        <div>\n          <div class=\"mt-3 mb-2 color-normal-lg\">\n            About\n          </div>\n          <div class=\"mb-2\">\n            Merck Academy presentations are live, in-person lectures, facilitated\n            by Merck subject-matter experts. All of the Merck Academy faculty\n            have postdoctoral training and are engaged in a variety of medical and\n            scientific activities.\n          </div>\n          <div class=\"mb-2\">\n            These live presentations comprise a variety of general scientific topics,\n            including drug discovery, vaccine development, outcomes research,\n            clinical trials, and statistics. Additional topics continue to be developed\n            and added.\n          </div>\n          <div class=\"mb-3\">\n            Potential audiences for Merck Academy might include faculty, fellows,\n            residents, and medical students. Merck Academy is not intended to\n            provide continuing medical education (CME) credits.\n          </div>\n        </div>\n        <div class=\"contact p-2 rounded-lg p-0 text-center mt-1 mb-3\">\n          <a href=\"\" data-toggle=\"modal\" data-target=\"#modalContact\">CONTACT A MERCK ACCOUNT TEAM MEMBER</a>\n        </div>\n        <div class=\"mb-3\">\n          <b>To learn more</b> about Merck\n          Academy, the topics covered,\n          or to schedule a Merck speaker,\n          please contact a Merck account\n          team member.\n        </div>\n      </div>\n      \n      -->\n      \n      <!-- this block shows the sub-footer information. This is specific for the\n           desktop version. Class footer-desktop controls the show-hide. -->\n\n      <div class=\"col-10 pb-4 footer-desktop\">\n        <div class=\"mb-2 color-normal-lg padding-desktop\">\n          <b>About</b>\n        </div>\n        <div class=\"mb-2 color-normal-md\">\n          Merck Academy presentations are live, in-person lectures, facilitated\n          by Merck subject-matter experts. All of the Merck Academy faculty\n          have postdoctoral training and are engaged in a variety of medical and\n          scientific activities.\n        </div>\n        <div class=\"mb-2 color-normal-md\">\n          These live presentations comprise a variety of general scientific topics,\n          including drug discovery, vaccine development, outcomes research,\n          clinical trials, and statistics. Additional topics continue to be developed\n          and added.\n        </div>\n        <div class=\"mb-2 color-normal-md\">\n          Potential audiences for Merck Academy might include faculty, fellows,\n          residents, and medical students. Merck Academy is not intended to\n          provide continuing medical education (CME) credits.\n        </div>\n        <div class=\"col-md-6 color-normal-md footer-contact\">\n          <b>To learn more</b> about Merck Academy, the topics covered,\n          or to schedule a Merck speaker, please contact a Merck account\n          team member.\n        </div>\n        <div class=\"col-md-6 footer-contact\">\n          <div class=\"col mx-auto\">\n            <a href=\"\" data-toggle=\"modal\" data-target=\"#modalContact\">\n              <div class=\"mx-auto thumbnail col mb-4\">\n                <span class=\"arrow\">\n                  <img width=\"95%\" src=\"../../assets/img/US-NA-0024-arrow-right.png\">\n                </span>\n                <div class=\"color-normal-md\">\n                  <b>Contact a Merck Academy<br/>\n                     Team Member\n                  </b>\n                </div>\n              </div>\n            </a>\n          </div>  \n        </div>\n      </div>\n      \n      <!--\n      <div class=\"col-md-3 contact-outer rounded-lg pb-2 footer-desktop\">\n        <div class=\"col-md contact p-2 rounded-lg p-0 mb-3\">\n          <a href=\"\" data-toggle=\"modal\" data-target=\"#modalContact\">CONTACT A MERCK ACCOUNT TEAM MEMBER</a>\n          <img class=\"contact-arrow\" src=\"./assets/img/US-NA-0024-right-contact.png\">\n          <div class=\"triangle\"></div>\n        </div>\n        <div class=\"contact-border-left\">\n          <b>To learn more</b> about Merck Academy, the topics covered,\n          or to schedule a Merck speaker, please contact a Merck account\n          team member.\n        </div>\n      </div>\n      -->\n    </div>\n    \n    <!-- this block shows the footer information. This is specific for the\n         desktop and mobile version with LAYOUT controlled via media queries. -->\n    \n    <div class=\"row footer-background\">\n      <div class=\"footer-brand\">\n        <img class=\"footer-image\" src=\"./assets/img/US-NA-0024-footer-w.png\">\n      </div>\n      <div class=\"footer col color-white-lg\">\n        <div class=\"footer-text\">\n          Copyright &copy; 2021 Merck Sharp &amp; Dohme Corp., a subsidiary of <b>Merck &amp; Co., Inc.</b><br/>\n          All rights reserved. Merck &amp; Co., Inc. (USA) MI-MS3-0001-US 10/21\n        </div>\n        <div class=\"footer-text\">\n          <a target=\"_blank\" href=\"//www.msdprivacy.com/us/en/index.html\"><u>Privacy Policy</u></a>&nbsp;&nbsp;|&nbsp;&nbsp;\n          <a target=\"_blank\" href=\"//www.merck.com/policy/terms-of-use/home.html\"><u>Terms of Use</u></a>\n        </div>\n        <div class=\"footer-text-1\">\n          <a target=\"_blank\" href=\"//privacy.truste.com/privacy-seal/validation?rid=0a0fd821-0cd2-443b-99ea-9e96f2ccbee9\">\n            <img class=\"footer-image-2\" src=\"./assets/img/US-NA-0024-footer-tap.png\">\n          </a>\n          <a target=\"_blank\" href=\"http://privacy.truste.com/privacy-seal/validation?rid=343d5d70-40be-4ab1-8853-82bfbd0fe8f2\">\n            <img class=\"footer-image-2\" src=\"./assets/img/US-NA-0024-footer-tvp.png\">\n          </a>\n        </div>        \n      </div>\n      <div class=\"col-1\">\n      </div>   \n    </div>\n  </div>\n\n  <!-- this block is for the modal contact-us form. This is seperate of the\n       main 'body' of HTML for the homepage. -->  \n  \n  <div class=\"modal fade\" id=\"modalContact\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"text-center\">\n          <button type=\"button\" class=\"close pt-2 pr-2\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span class=\"contact-close\" aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n\n        <div class=\"ml-4 mr-4\">\n          <div class=\"contact-header col-10 mx-auto modal-title w-100 font-weight-bold text-center pt-2\">\n            <b>Contact a Merck Account Team Member</b>\n          </div>\n          <div class=\"modal-body mx-3 color-normal-md-1\">\n            <div>\n              To request that a Merck Academy program be scheduled at your institution, or for questions\n              about the program, please enter your contact information below and a Merck Academy Team\n              Member will contact you\n            </div>\n            <br/>\n            <div class=\"md-form mb-2\">\n              <i class=\"fas fa-envelope prefix grey-text\"></i>\n              <label data-error=\"wrong\" data-success=\"right\" for=\"form-email\"><b>Name</b></label>\n              <input type=\"text\" id=\"form-name\" class=\"form-control validate\">\n            </div>\n            <div class=\"md-form mb-2\">\n              <i class=\"fas fa-envelope prefix grey-text\"></i>\n              <label data-error=\"wrong\" data-success=\"right\" for=\"form-email\"><b>Title</b></label>\n              <input type=\"text\" id=\"form-title\" class=\"form-control validate\">\n            </div>\n            <div class=\"md-form mb-2\">\n              <i class=\"fas fa-envelope prefix grey-text\"></i>\n              <label data-error=\"wrong\" data-success=\"right\" for=\"form-message\"><b>Institution</b></label>\n              <input type=\"text\" id=\"form-institution\" class=\"form-control validate\">\n            </div>        \n            <div class=\"md-form mb-2\">\n              <i class=\"fas fa-envelope prefix grey-text\"></i>\n              <label data-error=\"wrong\" data-success=\"right\" for=\"form-message\"><b>Phone Number</b></label>\n              <input type=\"text\" id=\"form-phone\" class=\"form-control validate\">\n            </div>        \n          </div>\n        </div>\n\n        <div class=\"d-flex justify-content-end pt-2 pb-3\">\n          <button style=\"margin-right: 55px;\" class=\"btn btn-default color-green-btn\"><b>Submit</b></button>\n        </div>\n      </div>\n    </div>\n  </div>\n  \n</body>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html": 
        /*!********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
          \********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col-12 p-0 bottom-space\">\n    <div class=\"hero-0\">\n      <div class=\"green-bar\"></div>\n      <div class=\"hero-1\">\n        <b>\n          Welcome to<br/>\n          Merck Academy!\n        </b>\n        <div class=\"hero-2\">\n          Merck Academy is an educational platform<br/>\n          dedicated to sharing information with<br/>\n          the academic and medical communities<br/>\n          on subjects drawn from Merck's key<br/>\n          areas of expertise.\n        </div>\n      </div>\n      <div class=\"hero-3\">\n      </div>  \n    </div>\n    <div class=\"lectures\">\n      <b>Available Lectures</b>\n    </div>\n  </div>\n</div>\n\n<div class=\"row mb-4 mx-auto\">\n  <!-- original cards\n  <div *ngFor=\"let resource of resources; index as i\" class=\"col mx-auto\">\n    <div [ngStyle]=\"{ 'background-image' : 'url(' + resource.thumbnail + ')' }\" class=\"mx-auto thumbnail col rounded-lg mb-4\" (click)=\"showVideos(resource, i)\">\n      <div class=\"thumbnail-inner rounded-lg p-2\">\n        {{ resource.title }}\n        <div class=\"triangle\">\n      </div>\n      </div>\n    </div>\n  </div>\n  -->\n  \n  <div *ngFor=\"let resource of resources; index as i\" class=\"col mx-auto\">\n    <div class=\"mx-auto thumbnail col mb-4\" (click)=\"showVideos(resource, i)\">\n      <span class=\"arrow\">\n        <img width=\"95%\" src=\"../../assets/img/US-NA-0024-arrow-right.png\">\n      </span>\n      <div>\n        <b>{{ resource.title }}</b>\n      </div>\n    </div>\n  </div>  \n  \n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/resources/resources.component.html": 
        /*!******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/resources/resources.component.html ***!
          \******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!-- add the resource title above the\n     slide deck. -->\n\n<div class=\"row mb-4\" style=\"margin-top:200px !important;\">\n  <div class=\"col-1\">\n  </div>\n  <div class=\"col-10 color-green-lg text-center\">\n    <b>{{ resource.title }}</b>\n  </div>\n  <div class=\"col-1\">\n  </div>\n</div>\n\n<!-- adds the selected slide deck and \n     navigational arrows. -->\n\n<div class=\"row ml-1 mr-1\">\n  <div class=\"col-1 p-0\">\n    <div (click)=\"slideLeft()\" class=\"d-flex leftArrow p-0 slide-arrow-left\">\n      <img #leftArrow class=\"text-center resourceLeft align-self-center\" src=\"../../assets/img/US-NA-0024-left-nf.png\">\n    </div>\n  </div>\n  <div class=\"col-10 text-center slide-border\">\n    <div class=\"row\">\n      <div #mainSlideView class=\"col-12 d-inline p-0\">\n        <img #slides class=\"slide\" src=\"{{ resource.slides[0] }}\">\n      </div>\n    </div>\n  </div>\n  <div class=\"col-1\">\n    <div (click)=\"slideRight()\" class=\"d-flex rightArrow p-0 slide-arrow-right\">\n      <img #rightArrow class=\"text-center resourceRight align-self-center\" src=\"../../assets/img/US-NA-0024-right-nf.png\" >\n    </div>\n  </div>  \n</div>\n\n<!-- adds the slide deck thumbnail navigation\n     and arrows. -->\n\n<div class=\"row ml-1 mr-1 mt-2\">\n  <div class=\"col-1 d-inline my-auto p-0\">\n  </div>\n  <div class=\"col-10 p-0\">\n    <div #thumbnailArrowLeft (click)=\"thumbnailLeft();\" class=\"thumbnailLeft\">\n      <img src=\"../../assets/img/US-NA-0024-arrow-left.png\">\n    </div>\n    <div #scrollBlock class=\"no-scrollbars\">\n      <div *ngFor=\"let slide of resource.slides; index as ii;\">\n        <div *ngIf=\"ii==0; then firstBlock else block\" ></div>\n        <ng-template #firstBlock>\n          <img #firstBlockSlide (click)=\"gotoSlide($event, ii);\" id=\"{{ ii }}\" class=\"thumbnail thumbnailBlockBorder\" src=\"{{ resource.slides[ii] }}\">\n        </ng-template>\n        <ng-template #block>\n          <img (click)=\"gotoSlide($event, ii);\" id=\"{{ ii }}\" class=\"thumbnail thumbnailBlock\" src=\"{{ resource.slides[ii] }}\">\n        </ng-template>\n      </div>\n    </div>\n    <div #thumbnailArrowRight (click)=\"thumbnailRight();\" class=\"thumbnailRight\">\n      <img src=\"../../assets/img/US-NA-0024-arrow-right.png\">\n    </div>\n  </div>\n  <div class=\"col-1 d-inline my-auto p-0\">\n  </div>\n</div>\n\n<!-- adds the download and video buttons. If no\n     video associated to the resource the video\n     button is hidden. -->\n\n<!--\n\n<div class=\"row ml-1 mt-2\">\n  <div class=\"col-1 my-auto p-0\">\n  </div>\n  <div class=\"col-10 p-0 button d-flex\">\n    <a download=\"{{ resource.downloadname }}\" target=\"_blank\" href=\"{{ resource.download }}{{ resource.downloadname }}\" >\n      <img accesskey=\"\"src=\"./assets/img/US-NA-0024-download.png\">\n    </a>\n    <a href=\"#\" (click)=\"showVideos();\" data-toggle=\"modal\" data-target=\"#modalVideo\">\n      <img #showVideo src=\"./assets/img/US-NA-0024-video.png\">\n    </a>\n  </div>\n  <div class=\"col-1 d-inline my-auto p-0\">\n  </div>\n</div>\n\n-->\n\n<!-- adds a navigational column for all the available resources\n     and a column for the matadata for the selected \n     resource. -->\n\n<div class=\"row mt-4 mb-4\">\n  <div class=\"col-1\">\n  </div>\n  <div class=\"col-2\">\n    <div *ngFor=\"let resource of resources; index as i;\" class=\"col pl-0 color-black-sm nav-1\" (click)=\"showResources(i);\" [ngStyle] = \"{ 'color' : navColor[i] }\">\n      <hr class=\"border-nav\" [style.backgroundColor] = \"navBorderColor[i]\" [style.height] = \"navBorderHeight[i]\">\n      {{ resource.title }}\n    </div>\n  </div>\n  <div class=\"col-8 color-mint-md menu-align\">\n    <div class=\"mb-3\">\n      Learning Objectives\n    </div>\n    <div class=\"color-normal-sm align-objectives\" [innerHTML]=\"resource.objective\">\n    </div>\n    <div class=\"mb-3\">\n      Summary\n    </div>\n    <div class=\"color-normal-sm\" [innerHTML]=\"resource.summary\">\n    </div>  \n  </div>\n  <div class=\"col-1\">\n  </div>  \n</div>\n\n<!-- adds the modal box for showing videos\n     associated to a resource. -->\n\n<!-- \n\n<div class=\"modal fade\" id=\"modalVideo\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"text-center\">\n        <button type=\"button\" class=\"close pt-2 pr-2\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span (click)=\"stopVideo();\" class=\"contact-close\" aria-hidden=\"true\">&times;</span>\n        </button>\n        <div class=\"text-center color-green-md mt-4\">\n          {{ resource.title }}\n        <div>\n        <video class=\"p-4\" controls #videoSource>\n          <source src=\"{{ resource.video }}\" type=\"video/mp4\" controls>\n          Video not supported.\n        </video>\n      </div>\n    </div>\n  </div>\n</div>\n\n-->\n");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
            /* harmony import */ var _resources_resources_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resources/resources.component */ "./src/app/resources/resources.component.ts");
            var routes = [
                { path: '', redirectTo: 'home', pathMatch: 'full' },
                { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], data: { title: 'Home Page' } },
                { path: 'resources', component: _resources_resources_component__WEBPACK_IMPORTED_MODULE_4__["ResourcesComponent"], data: { title: 'Resources Page' } }
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.scss": 
        /*!************************************!*\
          !*** ./src/app/app.component.scss ***!
          \************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".arrow {\n  background-color: var(--color-green);\n  color: var(--color-white);\n  font-size: 22px;\n  height: 40px;\n  right: -20px;\n  position: absolute;\n  top: 16px;\n  width: 40px;\n}\n\n.arrow-left {\n  background-color: var(--color-green);\n  color: var(--color-white);\n  font-size: 22px;\n  height: 40px;\n  left: -20px;\n  position: absolute;\n  top: 8px;\n  width: 40px;\n}\n\n.close {\n  font-size: 22pt;\n  color: var(--color-green);\n  opacity: 1;\n}\n\n.color-green-btn {\n  background-color: var(--color-green);\n  margin-top: -20px;\n  z-index: 1;\n  color: var(--color-white);\n  text-decoration: none;\n  font-size: 10pt;\n  width: 80px;\n}\n\n.contact {\n  background-color: var(--color-green);\n  color: var(--color-white);\n  font-size: 10pt;\n  cursor: pointer;\n  margin-top: -20px;\n  min-width: 200px;\n  max-width: 200px;\n  text-align: left;\n}\n\n.contact-arrow {\n  padding-top: 6px;\n  width: 28px;\n  top: 0;\n  position: absolute;\n}\n\n.contact-border-left {\n  border-left: 2pt solid var(--color-green);\n  padding-left: 10px;\n}\n\n.contact-header {\n  color: #00867d;\n  font-size: 12pt;\n  background-color: var(--color-white);\n  margin-top: -20px;\n}\n\n.contact-outer {\n  border-top: 2px solid var(--color-blue);\n}\n\n.fixed {\n  top: 0;\n  position: fixed;\n  z-index: 2;\n  background-color: var(--color-white);\n}\n\n.footer {\n  height: 115px;\n}\n\n.footer-background {\n  padding: 20px 0px 40px 0px;\n  background-color: var(--color-blue-dark);\n}\n\n.footer-brand {\n  margin: 0 0 0 40px;\n  width: 180px;\n}\n\n.footer-contact {\n  vertical-align: top;\n  margin: 25px 0 0 -15px;\n  display: inline-block;\n}\n\n.footer-desktop {\n  display: block;\n  margin: 0 0 0 100px;\n}\n\n.footer-desktop-margin {\n  text-align: right;\n  margin-top: -30px;\n}\n\n.footer-image {\n  height: 50px;\n  vertical-align: middle;\n}\n\n.footer-image-2 {\n  height: 25px;\n  padding-right: 5px;\n}\n\n.footer-image-pad-right {\n  padding-right: 5px;\n}\n\n.footer-mobile {\n  display: none;\n}\n\n.footer-text {\n  margin-top: 10px;\n}\n\n.footer-text-1 {\n  margin-top: 20px;\n}\n\n.header {\n  height: 65px;\n  margin-left: 10%;\n}\n\n.header-text {\n  margin-left: 88px;\n  font-size: 34px;\n  line-height: 32px;\n}\n\ninput {\n  border: 0;\n  border-radius: 0;\n  background-color: var(--color-gray-light-1);\n}\n\nbutton {\n  border: 0;\n  border-radius: 0;\n  background-color: var(--color-gray-light-1);\n  margin: 0 0 10px 0;\n}\n\nhr {\n  background-color: var(--color-lime);\n  height: 1px;\n}\n\n.padding-desktop {\n  margin: 20px 0 0 0;\n}\n\n.triangle {\n  position: absolute;\n  top: 0;\n  margin-top: 2px;\n  margin-left: -21px;\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 0px 0px 18px 14px;\n  border-color: transparent transparent var(--color-green-dark) transparent;\n}\n\n.thumbnail {\n  background-repeat: no-repeat;\n  border: 2px solid var(--color-blue);\n  cursor: pointer;\n  font-size: 14px;\n  height: 80px;\n  padding-right: 40px;\n  width: 340px;\n}\n\n.thumbnail > div {\n  position: relative;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n.thumbnail-1 {\n  position: absolute;\n  border: 2px solid var(--color-blue);\n  cursor: pointer;\n  right: 106px;\n  font-size: 14px;\n  height: 60px;\n  margin-top: -60px;\n  width: 160px;\n}\n\n.thumbnail-1 > div {\n  position: relative;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n@media only screen and (max-width: 0px) {\n  /**\n  .contact {\n    min-width: 100%;\n    text-align: center;\n  }\n\n  .footer-desktop {\n    display: none;\n  }  \n\n  .footer-mobile {\n    display: block;\n  }\n\n  .padding-desktop {\n    margin-top: 0px;\n  }\n  */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdGVsbGFhbmFzdGFzaWEvZ2l0aHViL21lcmNrYWNhZGVteS9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0NBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUNDRjs7QURFQTtFQUNFLG9DQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0FDQ0Y7O0FERUE7RUFDRSxvQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0Usb0NBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLE1BQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UseUNBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSx1Q0FBQTtBQ0NGOztBREVBO0VBQ0UsTUFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0Esb0NBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7QUNDRjs7QURFQTtFQUNFLDBCQUFBO0VBQ0Esd0NBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxzQkFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQ0FBQTtBQ0NGOztBREVBO0VBQ0UsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsMkNBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsbUNBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLCtCQUFBO0VBQ0EseUVBQUE7QUNDRjs7QURFQTtFQUNFLDRCQUFBO0VBQ0EsbUNBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUdBLDJCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLG1DQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBR0EsMkJBQUE7QUNDRjs7QURFQTtFQUNFOzs7Ozs7Ozs7Ozs7Ozs7OztHQUFBO0FDa0JGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFycm93IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZ3JlZW4pO1xuICBjb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xuICBmb250LXNpemU6IDIycHg7XG4gIGhlaWdodDogNDBweDtcbiAgcmlnaHQ6IC0yMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTZweDtcbiAgd2lkdGg6IDQwcHg7XG59XG5cbi5hcnJvdy1sZWZ0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZ3JlZW4pO1xuICBjb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xuICBmb250LXNpemU6IDIycHg7XG4gIGhlaWdodDogNDBweDtcbiAgbGVmdDogLTIwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA4cHg7XG4gIHdpZHRoOiA0MHB4O1xufVxuXG4uY2xvc2Uge1xuICBmb250LXNpemU6IDIycHQ7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1ncmVlbik7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5jb2xvci1ncmVlbi1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ncmVlbik7XG4gIG1hcmdpbi10b3A6IC0yMHB4O1xuICB6LWluZGV4OiAxO1xuICBjb2xvcjogIHZhcigtLWNvbG9yLXdoaXRlKTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXNpemU6IDEwcHQ7XG4gIHdpZHRoOiA4MHB4O1xufVxuXG4uY29udGFjdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWdyZWVuKTtcbiAgY29sb3I6ICB2YXIoLS1jb2xvci13aGl0ZSk7XG4gIGZvbnQtc2l6ZTogMTBwdDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW4tdG9wOiAtMjBweDtcbiAgbWluLXdpZHRoOiAyMDBweDtcbiAgbWF4LXdpZHRoOiAyMDBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmNvbnRhY3QtYXJyb3cge1xuICBwYWRkaW5nLXRvcDogNnB4OyBcbiAgd2lkdGg6MjhweDsgXG4gIHRvcDogMDsgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLmNvbnRhY3QtYm9yZGVyLWxlZnQge1xuICBib3JkZXItbGVmdDogMnB0IHNvbGlkIHZhcigtLWNvbG9yLWdyZWVuKTtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG4uY29udGFjdC1oZWFkZXIge1xuICBjb2xvcjogcmdiKDAsMTM0LDEyNSk7XG4gIGZvbnQtc2l6ZTogMTJwdDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xuICBtYXJnaW4tdG9wOiAtMjBweDtcbn1cblxuLmNvbnRhY3Qtb3V0ZXIge1xuICBib3JkZXItdG9wOiAycHggc29saWQgdmFyKC0tY29sb3ItYmx1ZSk7XG59XG5cbi5maXhlZCB7XG4gIHRvcDogMDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XG59XG5cbi5mb290ZXIge1xuICBoZWlnaHQ6IDExNXB4O1xufVxuXG4uZm9vdGVyLWJhY2tncm91bmQge1xuICBwYWRkaW5nOiAyMHB4IDBweCA0MHB4IDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmx1ZS1kYXJrKTtcbn1cblxuLmZvb3Rlci1icmFuZCB7XG4gIG1hcmdpbjogMCAwIDAgNDBweDsgXG4gIHdpZHRoOiAxODBweDtcbn1cblxuLmZvb3Rlci1jb250YWN0IHtcbiAgdmVydGljYWwtYWxpZ246IHRvcDsgXG4gIG1hcmdpbjogMjVweCAwIDAgLTE1cHg7IFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5mb290ZXItZGVza3RvcCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDAgMCAwIDEwMHB4O1xufVxuXG4uZm9vdGVyLWRlc2t0b3AtbWFyZ2luIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7IFxuICBtYXJnaW4tdG9wOiAtMzBweDtcbn1cblxuLmZvb3Rlci1pbWFnZSB7XG4gIGhlaWdodDogNTBweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmZvb3Rlci1pbWFnZS0yIHtcbiAgaGVpZ2h0OiAyNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG59XG5cbi5mb290ZXItaW1hZ2UtcGFkLXJpZ2h0IHtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xufVxuXG4uZm9vdGVyLW1vYmlsZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5mb290ZXItdGV4dCB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5mb290ZXItdGV4dC0xIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmhlYWRlciB7XG4gIGhlaWdodDogNjVweDtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbn1cblxuLmhlYWRlci10ZXh0IHtcbiAgbWFyZ2luLWxlZnQ6IDg4cHg7XG4gIGZvbnQtc2l6ZTogMzRweDtcbiAgbGluZS1oZWlnaHQ6IDMycHg7XG59XG5cbmlucHV0IHtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ncmF5LWxpZ2h0LTEpO1xufVxuXG5idXR0b24ge1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWdyYXktbGlnaHQtMSk7XG4gIG1hcmdpbjogMCAwIDEwcHggMDtcbn1cblxuaHIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1saW1lKTtcbiAgaGVpZ2h0OiAxcHg7XG59XG5cbi5wYWRkaW5nLWRlc2t0b3Age1xuICBtYXJnaW46IDIwcHggMCAwIDA7XG59XG5cbi50cmlhbmdsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBtYXJnaW4tdG9wOiAycHg7XG4gIG1hcmdpbi1sZWZ0OiAtMjFweDtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiAwcHggMHB4IDE4cHggMTRweDtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB2YXIoLS1jb2xvci1ncmVlbi1kYXJrKSB0cmFuc3BhcmVudDtcbn1cblxuLnRodW1ibmFpbCB7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNvbG9yLWJsdWUpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xuICB3aWR0aDogMzQwcHg7XG59XG5cbi50aHVtYm5haWwgPiBkaXYge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogNTAlO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4udGh1bWJuYWlsLTEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNvbG9yLWJsdWUpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHJpZ2h0OiAxMDZweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIG1hcmdpbi10b3A6IC02MHB4O1xuICB3aWR0aDogMTYwcHg7XG59XG5cbi50aHVtYm5haWwtMSA+IGRpdiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA1MCU7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMHB4KSB7XG4gIC8qKlxuICAuY29udGFjdCB7XG4gICAgbWluLXdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC5mb290ZXItZGVza3RvcCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfSAgXG4gIFxuICAuZm9vdGVyLW1vYmlsZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgXG4gIC5wYWRkaW5nLWRlc2t0b3Age1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgfVxuICAqL1xufSIsIi5hcnJvdyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWdyZWVuKTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHJpZ2h0OiAtMjBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE2cHg7XG4gIHdpZHRoOiA0MHB4O1xufVxuXG4uYXJyb3ctbGVmdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWdyZWVuKTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGxlZnQ6IC0yMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogOHB4O1xuICB3aWR0aDogNDBweDtcbn1cblxuLmNsb3NlIHtcbiAgZm9udC1zaXplOiAyMnB0O1xuICBjb2xvcjogdmFyKC0tY29sb3ItZ3JlZW4pO1xuICBvcGFjaXR5OiAxO1xufVxuXG4uY29sb3ItZ3JlZW4tYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZ3JlZW4pO1xuICBtYXJnaW4tdG9wOiAtMjBweDtcbiAgei1pbmRleDogMTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXNpemU6IDEwcHQ7XG4gIHdpZHRoOiA4MHB4O1xufVxuXG4uY29udGFjdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWdyZWVuKTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcbiAgZm9udC1zaXplOiAxMHB0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi10b3A6IC0yMHB4O1xuICBtaW4td2lkdGg6IDIwMHB4O1xuICBtYXgtd2lkdGg6IDIwMHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uY29udGFjdC1hcnJvdyB7XG4gIHBhZGRpbmctdG9wOiA2cHg7XG4gIHdpZHRoOiAyOHB4O1xuICB0b3A6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLmNvbnRhY3QtYm9yZGVyLWxlZnQge1xuICBib3JkZXItbGVmdDogMnB0IHNvbGlkIHZhcigtLWNvbG9yLWdyZWVuKTtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG4uY29udGFjdC1oZWFkZXIge1xuICBjb2xvcjogIzAwODY3ZDtcbiAgZm9udC1zaXplOiAxMnB0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XG4gIG1hcmdpbi10b3A6IC0yMHB4O1xufVxuXG4uY29udGFjdC1vdXRlciB7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCB2YXIoLS1jb2xvci1ibHVlKTtcbn1cblxuLmZpeGVkIHtcbiAgdG9wOiAwO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDI7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcbn1cblxuLmZvb3RlciB7XG4gIGhlaWdodDogMTE1cHg7XG59XG5cbi5mb290ZXItYmFja2dyb3VuZCB7XG4gIHBhZGRpbmc6IDIwcHggMHB4IDQwcHggMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ibHVlLWRhcmspO1xufVxuXG4uZm9vdGVyLWJyYW5kIHtcbiAgbWFyZ2luOiAwIDAgMCA0MHB4O1xuICB3aWR0aDogMTgwcHg7XG59XG5cbi5mb290ZXItY29udGFjdCB7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIG1hcmdpbjogMjVweCAwIDAgLTE1cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmZvb3Rlci1kZXNrdG9wIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMCAwIDAgMTAwcHg7XG59XG5cbi5mb290ZXItZGVza3RvcC1tYXJnaW4ge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgbWFyZ2luLXRvcDogLTMwcHg7XG59XG5cbi5mb290ZXItaW1hZ2Uge1xuICBoZWlnaHQ6IDUwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5mb290ZXItaW1hZ2UtMiB7XG4gIGhlaWdodDogMjVweDtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xufVxuXG4uZm9vdGVyLWltYWdlLXBhZC1yaWdodCB7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbn1cblxuLmZvb3Rlci1tb2JpbGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uZm9vdGVyLXRleHQge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uZm9vdGVyLXRleHQtMSB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5oZWFkZXIge1xuICBoZWlnaHQ6IDY1cHg7XG4gIG1hcmdpbi1sZWZ0OiAxMCU7XG59XG5cbi5oZWFkZXItdGV4dCB7XG4gIG1hcmdpbi1sZWZ0OiA4OHB4O1xuICBmb250LXNpemU6IDM0cHg7XG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xufVxuXG5pbnB1dCB7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZ3JheS1saWdodC0xKTtcbn1cblxuYnV0dG9uIHtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ncmF5LWxpZ2h0LTEpO1xuICBtYXJnaW46IDAgMCAxMHB4IDA7XG59XG5cbmhyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItbGltZSk7XG4gIGhlaWdodDogMXB4O1xufVxuXG4ucGFkZGluZy1kZXNrdG9wIHtcbiAgbWFyZ2luOiAyMHB4IDAgMCAwO1xufVxuXG4udHJpYW5nbGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbWFyZ2luLXRvcDogMnB4O1xuICBtYXJnaW4tbGVmdDogLTIxcHg7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci13aWR0aDogMHB4IDBweCAxOHB4IDE0cHg7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdmFyKC0tY29sb3ItZ3JlZW4tZGFyaykgdHJhbnNwYXJlbnQ7XG59XG5cbi50aHVtYm5haWwge1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvci1ibHVlKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGhlaWdodDogODBweDtcbiAgcGFkZGluZy1yaWdodDogNDBweDtcbiAgd2lkdGg6IDM0MHB4O1xufVxuXG4udGh1bWJuYWlsID4gZGl2IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDUwJTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuLnRodW1ibmFpbC0xIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvci1ibHVlKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICByaWdodDogMTA2cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBtYXJnaW4tdG9wOiAtNjBweDtcbiAgd2lkdGg6IDE2MHB4O1xufVxuXG4udGh1bWJuYWlsLTEgPiBkaXYge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogNTAlO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDBweCkge1xuICAvKipcbiAgLmNvbnRhY3Qge1xuICAgIG1pbi13aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAuZm9vdGVyLWRlc2t0b3Age1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH0gIFxuXG4gIC5mb290ZXItbW9iaWxlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIC5wYWRkaW5nLWRlc2t0b3Age1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgfVxuICAqL1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent(router) {
                    this.router = router;
                    this.showBack = false;
                }
                AppComponent.prototype.home = function () {
                    this.router.navigate(['/home']);
                };
                AppComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.router.events.subscribe(function (events) {
                        if (events instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                            if (events.url === '/' || events.url === "/home") {
                                _this.showBack = false;
                            }
                            else {
                                _this.showBack = true;
                            }
                        }
                    });
                };
                return AppComponent;
            }());
            AppComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
            /* harmony import */ var _resources_resources_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resources/resources.component */ "./src/app/resources/resources.component.ts");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                        _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                        _resources_resources_component__WEBPACK_IMPORTED_MODULE_6__["ResourcesComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
                    ],
                    providers: [],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/home/home.component.scss": 
        /*!******************************************!*\
          !*** ./src/app/home/home.component.scss ***!
          \******************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".hero-0 {\n  background-color: var(--color-gray-light);\n  min-height: 500px;\n  max-height: 500px;\n  margin-top: 130px;\n}\n\n.hero-1 {\n  font-size: 36px;\n  line-height: 40px;\n  margin: 130px 0 0 115px;\n  position: absolute;\n}\n\n.hero-2 {\n  font-size: 18px;\n  line-height: 25px !important;\n  margin: 40px 0 0 0;\n}\n\n.hero-3 {\n  width: 50%;\n  float: right;\n  min-height: 500px;\n  max-height: 500px;\n  background-image: url('US-NA-0024-hero-new.png');\n  background-size: contain;\n  background-repeat: no-repeat;\n}\n\n.green-bar {\n  background-color: var(--color-green);\n  height: 6px;\n  margin: 100px 0 20px 115px;\n  position: absolute;\n  width: 60px;\n}\n\n.lectures {\n  background-color: var(--color-green);\n  color: var(--color-white);\n  font-size: 22px;\n  height: 60px;\n  margin: -30px 0 0 0;\n  padding: 12px 0 0 115px;\n  position: absolute;\n  width: 465px;\n}\n\n.bottom-space {\n  margin-bottom: 100px;\n}\n\nhr {\n  width: 10%;\n  background-color: var(--color-lime);\n  height: 1px;\n}\n\n.border-circle {\n  margin-top: -30px;\n}\n\n.parallax {\n  background-image: url('US-NA-0024-hero-main.png');\n  height: 385px;\n  background-attachment: fixed;\n  background-position: 100% 0%;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.arrow {\n  background-color: var(--color-green);\n  color: var(--color-white);\n  font-size: 22px;\n  height: 40px;\n  right: -20px;\n  position: absolute;\n  top: 16px;\n  width: 40px;\n}\n\n.thumbnail {\n  background-repeat: no-repeat;\n  border: 2px solid var(--color-blue);\n  cursor: pointer;\n  font-size: 14px;\n  height: 80px;\n  padding-right: 40px;\n  width: 340px;\n}\n\n.thumbnail > div {\n  position: relative;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n.thumbnail-blank {\n  width: 220px;\n}\n\n.thumbnail-image {\n  margin-left: -14px;\n  width: 215px;\n  height: 146px;\n}\n\n.thumbnail-inner {\n  background-color: var(--color-orange);\n  margin-left: -40px;\n  color: var(--color-white);\n  height: 50%;\n  position: absolute;\n  bottom: 20px;\n  width: 100%;\n  opacity: 0.95;\n  font-weight: bold;\n  font-size: 9pt;\n  align-items: center;\n  display: flex;\n}\n\n.triangle {\n  position: absolute;\n  bottom: 0;\n  margin-bottom: -18px;\n  margin-left: -4px;\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 0 20px 18px 0;\n  border-color: transparent var(--color-orange-dark) transparent transparent;\n}\n\n.microscope-0 {\n  position: absolute;\n  height: 300px;\n  bottom: 0;\n  width: 100%;\n}\n\n.microscope-1 {\n  margin-top: 80px;\n  font-weight: bold;\n}\n\n.microscope-2 {\n  padding: 20px 140px 0 140px !important;\n}\n\n@media only screen and (max-width: 900px) {\n  .hero-3 {\n    background-image: url();\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdGVsbGFhbmFzdGFzaWEvZ2l0aHViL21lcmNrYWNhZGVteS9zcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUNBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnREFBQTtFQUNBLHdCQUFBO0VBQ0EsNEJBQUE7QUNDRjs7QURFQTtFQUNFLG9DQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxvQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxvQkFBQTtBQ0NGOztBREVBO0VBQ0UsVUFBQTtFQUNBLG1DQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7QUNDRjs7QURFQTtFQUNFLGlEQUFBO0VBQ0EsYUFBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FDQ0Y7O0FERUE7RUFDRSxvQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UsNEJBQUE7RUFDQSxtQ0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBR0EsMkJBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNDRjs7QURFQTtFQUNFLHFDQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLDBFQUFBO0FDQ0Y7O0FES0E7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQ0ZGOztBREtBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQ0ZGOztBREtBO0VBQ0Usc0NBQUE7QUNGRjs7QURLQTtFQUNFO0lBQ0UsdUJBQUE7RUNGRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlcm8tMCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWdyYXktbGlnaHQpO1xuICBtaW4taGVpZ2h0OiA1MDBweDtcbiAgbWF4LWhlaWdodDogNTAwcHg7XG4gIG1hcmdpbi10b3A6IDEzMHB4O1xufVxuXG4uaGVyby0xIHtcbiAgZm9udC1zaXplOiAzNnB4O1xuICBsaW5lLWhlaWdodDogNDBweDtcbiAgbWFyZ2luOiAxMzBweCAwIDAgMTE1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLmhlcm8tMiB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDI1cHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiA0MHB4IDAgMCAwO1xufVxuXG4uaGVyby0zIHtcbiAgd2lkdGg6IDUwJTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtaW4taGVpZ2h0OiA1MDBweDtcbiAgbWF4LWhlaWdodDogNTAwcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaW1nL1VTLU5BLTAwMjQtaGVyby1uZXcucG5nKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuXG4uZ3JlZW4tYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZ3JlZW4pO1xuICBoZWlnaHQ6IDZweDtcbiAgbWFyZ2luOiAxMDBweCAwIDIwcHggMTE1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDYwcHg7XG59XG5cbi5sZWN0dXJlcyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWdyZWVuKTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIG1hcmdpbjogLTMwcHggMCAwIDA7XG4gIHBhZGRpbmc6IDEycHggMCAwIDExNXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA0NjVweDtcbn1cblxuLmJvdHRvbS1zcGFjZSB7XG4gIG1hcmdpbi1ib3R0b206IDEwMHB4O1xufVxuXG5ociB7XG4gIHdpZHRoOiAxMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWxpbWUpO1xuICBoZWlnaHQ6IDFweDtcbn1cblxuLmJvcmRlci1jaXJjbGUge1xuICBtYXJnaW4tdG9wOiAtMzBweDtcbn1cblxuLnBhcmFsbGF4IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltZy9VUy1OQS0wMDI0LWhlcm8tbWFpbi5wbmdcIik7XG4gIGhlaWdodDogMzg1cHg7XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgMCU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5hcnJvdyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWdyZWVuKTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHJpZ2h0OiAtMjBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE2cHg7XG4gIHdpZHRoOiA0MHB4O1xufVxuXG4udGh1bWJuYWlsIHtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY29sb3ItYmx1ZSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDQwcHg7XG4gIHdpZHRoOiAzNDBweDtcbn1cblxuLnRodW1ibmFpbCA+IGRpdiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA1MCU7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbi50aHVtYm5haWwtYmxhbmsge1xuICB3aWR0aDogMjIwcHg7XG59XG5cbi50aHVtYm5haWwtaW1hZ2Uge1xuICBtYXJnaW4tbGVmdDogLTE0cHg7IFxuICB3aWR0aDogMjE1cHg7IFxuICBoZWlnaHQ6IDE0NnB4O1xufVxuXG4udGh1bWJuYWlsLWlubmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itb3JhbmdlKTtcbiAgbWFyZ2luLWxlZnQ6IC00MHB4O1xuICBjb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xuICBoZWlnaHQ6IDUwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDIwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBvcGFjaXR5OiAuOTU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDlwdDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLnRyaWFuZ2xlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIG1hcmdpbi1ib3R0b206IC0xOHB4O1xuICBtYXJnaW4tbGVmdDogLTRweDtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiAwIDIwcHggMThweCAwO1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHZhcigtLWNvbG9yLW9yYW5nZS1kYXJrKSB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcbn1cblxuLm1pY3Jvc2NvcGUge1xufVxuXG4ubWljcm9zY29wZS0wIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDMwMHB4OyBcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1pY3Jvc2NvcGUtMSB7XG4gIG1hcmdpbi10b3A6IDgwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubWljcm9zY29wZS0yIHtcbiAgcGFkZGluZzogMjBweCAxNDBweCAwIDE0MHB4ICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcbiAgLmhlcm8tMyB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCk7XG4gIH1cbn0iLCIuaGVyby0wIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZ3JheS1saWdodCk7XG4gIG1pbi1oZWlnaHQ6IDUwMHB4O1xuICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgbWFyZ2luLXRvcDogMTMwcHg7XG59XG5cbi5oZXJvLTEge1xuICBmb250LXNpemU6IDM2cHg7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICBtYXJnaW46IDEzMHB4IDAgMCAxMTVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uaGVyby0yIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMjVweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDQwcHggMCAwIDA7XG59XG5cbi5oZXJvLTMge1xuICB3aWR0aDogNTAlO1xuICBmbG9hdDogcmlnaHQ7XG4gIG1pbi1oZWlnaHQ6IDUwMHB4O1xuICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9pbWcvVVMtTkEtMDAyNC1oZXJvLW5ldy5wbmcpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG5cbi5ncmVlbi1iYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ncmVlbik7XG4gIGhlaWdodDogNnB4O1xuICBtYXJnaW46IDEwMHB4IDAgMjBweCAxMTVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogNjBweDtcbn1cblxuLmxlY3R1cmVzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZ3JlZW4pO1xuICBjb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xuICBmb250LXNpemU6IDIycHg7XG4gIGhlaWdodDogNjBweDtcbiAgbWFyZ2luOiAtMzBweCAwIDAgMDtcbiAgcGFkZGluZzogMTJweCAwIDAgMTE1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDQ2NXB4O1xufVxuXG4uYm90dG9tLXNwYWNlIHtcbiAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG59XG5cbmhyIHtcbiAgd2lkdGg6IDEwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItbGltZSk7XG4gIGhlaWdodDogMXB4O1xufVxuXG4uYm9yZGVyLWNpcmNsZSB7XG4gIG1hcmdpbi10b3A6IC0zMHB4O1xufVxuXG4ucGFyYWxsYXgge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1nL1VTLU5BLTAwMjQtaGVyby1tYWluLnBuZ1wiKTtcbiAgaGVpZ2h0OiAzODVweDtcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSAwJTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLmFycm93IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZ3JlZW4pO1xuICBjb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xuICBmb250LXNpemU6IDIycHg7XG4gIGhlaWdodDogNDBweDtcbiAgcmlnaHQ6IC0yMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTZweDtcbiAgd2lkdGg6IDQwcHg7XG59XG5cbi50aHVtYm5haWwge1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvci1ibHVlKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGhlaWdodDogODBweDtcbiAgcGFkZGluZy1yaWdodDogNDBweDtcbiAgd2lkdGg6IDM0MHB4O1xufVxuXG4udGh1bWJuYWlsID4gZGl2IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDUwJTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuLnRodW1ibmFpbC1ibGFuayB7XG4gIHdpZHRoOiAyMjBweDtcbn1cblxuLnRodW1ibmFpbC1pbWFnZSB7XG4gIG1hcmdpbi1sZWZ0OiAtMTRweDtcbiAgd2lkdGg6IDIxNXB4O1xuICBoZWlnaHQ6IDE0NnB4O1xufVxuXG4udGh1bWJuYWlsLWlubmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itb3JhbmdlKTtcbiAgbWFyZ2luLWxlZnQ6IC00MHB4O1xuICBjb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xuICBoZWlnaHQ6IDUwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDIwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBvcGFjaXR5OiAwLjk1O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiA5cHQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi50cmlhbmdsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBtYXJnaW4tYm90dG9tOiAtMThweDtcbiAgbWFyZ2luLWxlZnQ6IC00cHg7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci13aWR0aDogMCAyMHB4IDE4cHggMDtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB2YXIoLS1jb2xvci1vcmFuZ2UtZGFyaykgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XG59XG5cbi5taWNyb3Njb3BlLTAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMzAwcHg7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5taWNyb3Njb3BlLTEge1xuICBtYXJnaW4tdG9wOiA4MHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLm1pY3Jvc2NvcGUtMiB7XG4gIHBhZGRpbmc6IDIwcHggMTQwcHggMCAxNDBweCAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XG4gIC5oZXJvLTMge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgpO1xuICB9XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/home/home.component.ts": 
        /*!****************************************!*\
          !*** ./src/app/home/home.component.ts ***!
          \****************************************/
        /*! exports provided: HomeComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function () { return HomeComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _assets_config_resources_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/config/resources.json */ "./src/assets/config/resources.json");
            var _assets_config_resources_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/ __webpack_require__.t(/*! ../../assets/config/resources.json */ "./src/assets/config/resources.json", 1);
            /* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
            /* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
            var HomeComponent = /** @class */ (function () {
                function HomeComponent(router) {
                    this.router = router;
                    this.resources = _assets_config_resources_json__WEBPACK_IMPORTED_MODULE_3__.resources;
                }
                HomeComponent.prototype.ngOnInit = function () {
                    window.addEventListener('scroll', function (e) {
                        var m = 1 - 0.90;
                        var $doc = jquery__WEBPACK_IMPORTED_MODULE_4__(document);
                        jquery__WEBPACK_IMPORTED_MODULE_4__(".microscope").css({ "background-attatchment": "fixed" });
                        var from_top = $doc.scrollTop();
                        var bg_css = '100% ' + (m * from_top) + 'px';
                        jquery__WEBPACK_IMPORTED_MODULE_4__(".microscope").css({ "background-position": bg_css });
                    });
                };
                HomeComponent.prototype.showVideos = function (resource, i) {
                    sessionStorage.setItem('selectedResource', JSON.stringify(resource));
                    sessionStorage.setItem('selectedIndex', JSON.stringify(i));
                    this.router.navigate(['/resources']);
                };
                return HomeComponent;
            }());
            HomeComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-home',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")).default]
                })
            ], HomeComponent);
            /***/ 
        }),
        /***/ "./src/app/resources/resources.component.scss": 
        /*!****************************************************!*\
          !*** ./src/app/resources/resources.component.scss ***!
          \****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("img {\n  height: 50px;\n}\n\n.align-objectives {\n  margin-left: -20px;\n}\n\n.buttons {\n  display: flex;\n  overflow: auto;\n}\n\n.border-nav {\n  border: none;\n  height: 2px;\n  margin: 0;\n  width: 28%;\n  margin-bottom: 10px;\n  margin-top: -10px;\n  background-color: var(--color-gray-medium);\n}\n\n.menu-align {\n  margin-top: 6px;\n}\n\nvideo {\n  outline: none;\n  width: 100%;\n  height: auto;\n}\n\n.resourceLeft {\n  display: none;\n  cursor: pointer;\n}\n\n.resourceRight {\n  cursor: pointer;\n}\n\n.nav-1 {\n  cursor: pointer;\n  padding: 10px 0 10px 0;\n}\n\n.slide {\n  width: 100%;\n  height: 100%;\n}\n\n.slide-border {\n  border: 2px solid var(--color-blue);\n}\n\n.slide-arrow-left {\n  position: absolute;\n  height: 100%;\n  left: 0;\n  z-index: 1;\n}\n\n.slide-arrow-right {\n  position: absolute;\n  height: 100%;\n  right: 0;\n  z-index: 1;\n}\n\n.thumbnail {\n  margin-right: 5px;\n  height: 60px;\n  width: 80px;\n}\n\n.thumbnailLeft {\n  position: absolute;\n  display: none;\n  cursor: pointer;\n  left: 0;\n  top: 0;\n  opacity: 1;\n  z-index: 1;\n}\n\n.thumbnailLeft > img {\n  margin-top: 15px;\n  height: 25px;\n  width: 25px;\n  opacity: 1;\n}\n\n.thumbnailRight {\n  position: absolute;\n  display: none;\n  cursor: pointer;\n  right: 0;\n  top: 0;\n  opacity: 1;\n  /** opacity: 0.2; */\n}\n\n.thumbnailRight > img {\n  margin-top: 15px;\n  height: 25px;\n  width: 25px;\n  opacity: 1;\n}\n\n.thumbnailBlock {\n  cursor: pointer;\n  float: left;\n  opacity: 0.5;\n}\n\n.thumbnailBlockBorder {\n  cursor: pointer;\n  float: left;\n  /** border-bottom: 2pt solid var(--color-orange); */\n}\n\n.no-scrollbars {\n  display: flex;\n  overflow-x: scroll;\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n}\n\n.no-scrollbars::-webkit-scrollbar-track {\n  background-color: var(--color-white);\n}\n\n.no-scrollbars::-webkit-scrollbar-thumb {\n  background-color: var(--color-green);\n}\n\n.no-scrollbars::-webkit-scrollbar {\n  with: 0;\n  height: 0;\n}\n\n@media only screen and (max-width: 460px) {\n  .resourceRight {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdGVsbGFhbmFzdGFzaWEvZ2l0aHViL21lcmNrYWNhZGVteS9zcmMvYXBwL3Jlc291cmNlcy9yZXNvdXJjZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Jlc291cmNlcy9yZXNvdXJjZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLGNBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMENBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxzQkFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNHLG1DQUFBO0FDQ0g7O0FERUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLG1EQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxvQ0FBQTtBQ0NGOztBREVBO0VBQ0Usb0NBQUE7QUNDRjs7QURFQTtFQUNFLE9BQUE7RUFDQSxTQUFBO0FDQ0Y7O0FERUE7RUFDRTtJQUNFLGFBQUE7RUNDRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcmVzb3VyY2VzL3Jlc291cmNlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XG4gIGhlaWdodDogNTBweDtcbn1cblxuLmFsaWduLW9iamVjdGl2ZXMge1xuICBtYXJnaW4tbGVmdDogLTIwcHg7XG59XG5cbi5idXR0b25zIHtcbiAgZGlzcGxheTogZmxleDsgXG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4uYm9yZGVyLW5hdiB7XG4gIGJvcmRlcjogbm9uZTsgXG4gIGhlaWdodDogMnB4OyBcbiAgbWFyZ2luOiAwOyBcbiAgd2lkdGg6IDI4JTsgXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7IFxuICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZ3JheS1tZWRpdW0pO1xufVxuXG4ubWVudS1hbGlnbiB7XG4gIG1hcmdpbi10b3A6IDZweDtcbn1cblxudmlkZW8ge1xuICBvdXRsaW5lOiBub25lO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4ucmVzb3VyY2VMZWZ0IHtcbiAgZGlzcGxheTogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucmVzb3VyY2VSaWdodCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm5hdi0xIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiAxMHB4IDAgMTBweCAwO1xufVxuXG4uc2xpZGUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uc2xpZGUtYm9yZGVyIHtcbiAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNvbG9yLWJsdWUpO1xufVxuXG4uc2xpZGUtYXJyb3ctbGVmdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxMDAlOyBcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMTtcbn1cblxuLnNsaWRlLWFycm93LXJpZ2h0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDEwMCU7IFxuICByaWdodDogMDtcbiAgei1pbmRleDogMTsgIFxufVxuXG4udGh1bWJuYWlsIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7IFxuICBoZWlnaHQ6IDYwcHg7IFxuICB3aWR0aDogODBweDtcbn1cblxuLnRodW1ibmFpbExlZnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjsgICBcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBvcGFjaXR5OiAxO1xuICB6LWluZGV4OiAxO1xufVxuXG4udGh1bWJuYWlsTGVmdCA+IGltZyB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGhlaWdodDogMjVweDtcbiAgd2lkdGg6IDI1cHg7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi50aHVtYm5haWxSaWdodCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyOyAgICBcbiAgcmlnaHQ6IDA7IFxuICB0b3A6IDA7XG4gIG9wYWNpdHk6IDE7XG4gIC8qKiBvcGFjaXR5OiAwLjI7ICovXG59XG5cbi50aHVtYm5haWxSaWdodCA+IGltZyB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGhlaWdodDogMjVweDtcbiAgd2lkdGg6IDI1cHg7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi50aHVtYm5haWxCbG9jayB7XG4gIGN1cnNvcjogcG9pbnRlcjsgXG4gIGZsb2F0OiBsZWZ0OyBcbiAgb3BhY2l0eTogMC41O1xufVxuXG4udGh1bWJuYWlsQmxvY2tCb3JkZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7IFxuICBmbG9hdDogbGVmdDsgXG4gIC8qKiBib3JkZXItYm90dG9tOiAycHQgc29saWQgdmFyKC0tY29sb3Itb3JhbmdlKTsgKi9cbn1cblxuLm5vLXNjcm9sbGJhcnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBvdmVyZmxvdy14OiBzY3JvbGw7IFxuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7IFxuICAtbXMtb3ZlcmZsb3ctc3R5bGU6bm9uZTtcbn1cblxuLm5vLXNjcm9sbGJhcnM6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xufVxuXG4ubm8tc2Nyb2xsYmFyczo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ncmVlbik7XG59XG5cbi5uby1zY3JvbGxiYXJzOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpdGg6IDA7XG4gIGhlaWdodDogMDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NjBweCkge1xuICAucmVzb3VyY2VSaWdodCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufSIsImltZyB7XG4gIGhlaWdodDogNTBweDtcbn1cblxuLmFsaWduLW9iamVjdGl2ZXMge1xuICBtYXJnaW4tbGVmdDogLTIwcHg7XG59XG5cbi5idXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5ib3JkZXItbmF2IHtcbiAgYm9yZGVyOiBub25lO1xuICBoZWlnaHQ6IDJweDtcbiAgbWFyZ2luOiAwO1xuICB3aWR0aDogMjglO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZ3JheS1tZWRpdW0pO1xufVxuXG4ubWVudS1hbGlnbiB7XG4gIG1hcmdpbi10b3A6IDZweDtcbn1cblxudmlkZW8ge1xuICBvdXRsaW5lOiBub25lO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4ucmVzb3VyY2VMZWZ0IHtcbiAgZGlzcGxheTogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucmVzb3VyY2VSaWdodCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm5hdi0xIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiAxMHB4IDAgMTBweCAwO1xufVxuXG4uc2xpZGUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uc2xpZGUtYm9yZGVyIHtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY29sb3ItYmx1ZSk7XG59XG5cbi5zbGlkZS1hcnJvdy1sZWZ0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5zbGlkZS1hcnJvdy1yaWdodCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICByaWdodDogMDtcbiAgei1pbmRleDogMTtcbn1cblxuLnRodW1ibmFpbCB7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIHdpZHRoOiA4MHB4O1xufVxuXG4udGh1bWJuYWlsTGVmdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIG9wYWNpdHk6IDE7XG4gIHotaW5kZXg6IDE7XG59XG5cbi50aHVtYm5haWxMZWZ0ID4gaW1nIHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICB3aWR0aDogMjVweDtcbiAgb3BhY2l0eTogMTtcbn1cblxuLnRodW1ibmFpbFJpZ2h0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIG9wYWNpdHk6IDE7XG4gIC8qKiBvcGFjaXR5OiAwLjI7ICovXG59XG5cbi50aHVtYm5haWxSaWdodCA+IGltZyB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGhlaWdodDogMjVweDtcbiAgd2lkdGg6IDI1cHg7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi50aHVtYm5haWxCbG9jayB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuLnRodW1ibmFpbEJsb2NrQm9yZGVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmbG9hdDogbGVmdDtcbiAgLyoqIGJvcmRlci1ib3R0b206IDJwdCBzb2xpZCB2YXIoLS1jb2xvci1vcmFuZ2UpOyAqL1xufVxuXG4ubm8tc2Nyb2xsYmFycyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XG59XG5cbi5uby1zY3JvbGxiYXJzOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcbn1cblxuLm5vLXNjcm9sbGJhcnM6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZ3JlZW4pO1xufVxuXG4ubm8tc2Nyb2xsYmFyczo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aXRoOiAwO1xuICBoZWlnaHQ6IDA7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDYwcHgpIHtcbiAgLnJlc291cmNlUmlnaHQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/resources/resources.component.ts": 
        /*!**************************************************!*\
          !*** ./src/app/resources/resources.component.ts ***!
          \**************************************************/
        /*! exports provided: ResourcesComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourcesComponent", function () { return ResourcesComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _assets_config_resources_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/config/resources.json */ "./src/assets/config/resources.json");
            var _assets_config_resources_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/ __webpack_require__.t(/*! ../../assets/config/resources.json */ "./src/assets/config/resources.json", 1);
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            var ResourcesComponent = /** @class */ (function () {
                /**
                 * create references to the document and router and sets the
                 * default state of the user selections.
                 */
                function ResourcesComponent(document, router) {
                    this.document = document;
                    this.router = router;
                    this.resource = null;
                    this.index = null;
                    this.slideIndex = null;
                    this.resources = _assets_config_resources_json__WEBPACK_IMPORTED_MODULE_3__.resources;
                    this.currentResource = null;
                    this.navColor = [];
                    this.navBorderColor = [];
                    this.navBorderHeight = [];
                    this.prevColor = 0;
                    this.prevBorderColor = 0;
                    this.prevSlideElement = null;
                    this.currentSlideElement = null;
                    this.colorBlack = "rgb(0,0,0)";
                    this.colorGreen = "rgb(18,133,124)";
                    this.colorGray = "rgb(211,211,211)";
                    this.colorMint = "rgb(114,205,180)";
                    this.touchStartX = 0;
                    this.touchEndX = 0;
                    this.showBack = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.resource = JSON.parse(sessionStorage.getItem('selectedResource'));
                    this.index = JSON.parse(sessionStorage.getItem('selectedIndex'));
                    this.prevColor = this.index;
                    this.prevBorderColor = this.index;
                    this.navColor[this.index] = this.colorGreen;
                    this.navBorderColor[this.index] = this.colorGreen;
                    this.navBorderHeight[this.index] = "4px";
                }
                Object.defineProperty(ResourcesComponent.prototype, "slidesEl", {
                    set: function (el) {
                        this.slides = el.nativeElement;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ResourcesComponent.prototype, "leftArrowEl", {
                    set: function (el) {
                        this.leftArrow = el.nativeElement;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ResourcesComponent.prototype, "rightArrowEl", {
                    set: function (el) {
                        this.rightArrow = el.nativeElement;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ResourcesComponent.prototype, "firstBlockEl", {
                    set: function (el) {
                        this.firstBlock = el.nativeElement;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ResourcesComponent.prototype, "scrollBlockEl", {
                    set: function (el) {
                        this.scrollBlock = el.nativeElement;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ResourcesComponent.prototype, "thumbnailArrowLeftEl", {
                    set: function (el) {
                        this.thumbnailArrowLeft = el.nativeElement;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ResourcesComponent.prototype, "thumbnailArrowRightEl", {
                    set: function (el) {
                        this.thumbnailArrowRight = el.nativeElement;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ResourcesComponent.prototype, "mainSlideViewEl", {
                    set: function (el) {
                        this.mainSlideView = el.nativeElement;
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * shows the thumbnail scrollbar arrows if there is
                 * scrollable content otherwise it hides the arrows.
                 */
                ResourcesComponent.prototype.scrollBarCheck = function () {
                    if (this.scrollBlock.scrollWidth > this.scrollBlock.clientWidth) {
                        this.thumbnailArrowRight.style.display = "block";
                        this.thumbnailArrowLeft.style.display = "block";
                    }
                    else {
                        this.thumbnailArrowRight.style.display = "none";
                        this.thumbnailArrowLeft.style.display = "none";
                    }
                };
                /**
                 * transitions the slide to the next one
                 * if clicked. If the max is reached the
                 * arrow control is hidden.
                 */
                ResourcesComponent.prototype.slideRight = function () {
                    this.slideIndex++;
                    if (this.slideIndex >= (this.resource.slides.length)) {
                        this.slideIndex = this.resource.slides.length - 1;
                    }
                    this.showArrows(false);
                    this.slides.src = this.resource.slides[this.slideIndex];
                };
                /**
                 * transitions the slide to the previous one
                 * if clicked. If the min is reached the
                 * arrow control is hidden.
                 */
                ResourcesComponent.prototype.slideLeft = function () {
                    this.slideIndex--;
                    if (this.slideIndex <= 0) {
                        this.slideIndex = 0;
                    }
                    this.showArrows(false);
                    this.slides.src = this.resource.slides[this.slideIndex];
                };
                /**
                 * shows the resource if clicked on the navigation
                 * menu. Changes the selected color; border; hides the
                 * video and sets the current selection.
                 */
                ResourcesComponent.prototype.showResources = function (i) {
                    this.navColor[this.prevColor] = this.colorBlack;
                    this.navBorderColor[this.prevBorderColor] = this.colorGray;
                    this.navBorderHeight[this.prevBorderColor] = "2px";
                    this.prevColor = i;
                    this.prevBorderColor = i;
                    this.navColor[i] = this.colorGreen;
                    this.navBorderColor[i] = this.colorGreen;
                    this.navBorderHeight[i] = "4px";
                    this.resource = this.resources[i];
                    //if (this.resource.video == "") {
                    //  this.videoButton.style.display = "none";
                    //} else {
                    //  this.videoButton.style.display = "block";
                    //}
                    this.slides.src = this.resource.slides[0];
                    sessionStorage.setItem('selectedResource', JSON.stringify(this.resource));
                    sessionStorage.setItem('selectedIndex', JSON.stringify(i));
                    this.scrollBarCheck();
                };
                /**
                 * navigates to the selected slide if
                 * selected from the thumbnail
                 * navigation.
                 */
                ResourcesComponent.prototype.gotoSlide = function (event, i) {
                    this.currentSlideElement = event.srcElement;
                    this.slideIndex = i;
                    this.slides.src = this.resource.slides[this.slideIndex];
                    this.showArrows(true);
                };
                /**
                 * shows a video if associated to
                 * a resource.
                 */
                //public showVideos() {
                //  this.videoSource.src = this.resource.video;
                //  this.videoSource.load();
                //}
                /**
                 * pauses a video. This is used when
                 * a video is playing and the modal
                 * box is closed.
                 */
                //public stopVideo() {
                //  this.videoSource.pause();
                //}
                /**
                 * shows or hides arrows
                 * depending on the state
                 * of the current slide.
                 */
                ResourcesComponent.prototype.showArrows = function (skip) {
                    if (!skip) {
                        this.currentSlideElement = this.document.getElementById(this.slideIndex.toString());
                    }
                    //slide nav
                    if (this.prevSlideElement != null) {
                        //this.prevSlideElement.style.borderBottom = "none";
                        this.prevSlideElement.style.opacity = "0.5";
                    }
                    else {
                        //this.firstBlock.style.borderBottom = "none";
                        this.firstBlock.style.opacity = "0.5";
                    }
                    // this.currentSlideElement.style.borderBottom = "2pt solid " + this.colorGreen;
                    this.currentSlideElement.style.opacity = "1";
                    this.prevSlideElement = this.currentSlideElement;
                    // right
                    if (this.slideIndex >= (this.resource.slides.length - 1)) {
                        this.rightArrow.style.display = "none";
                        this.leftArrow.style.display = "block";
                        return;
                    }
                    else {
                        this.rightArrow.style.display = "block";
                        this.leftArrow.style.display = "block";
                    }
                    //left
                    if (this.slideIndex <= 0) {
                        this.leftArrow.style.display = "none";
                    }
                    else {
                        this.leftArrow.style.display = "block";
                        this.rightArrow.style.display = "block";
                    }
                };
                ResourcesComponent.prototype.thumbnailLeft = function () {
                    this.scrollBlock.scrollLeft = this.scrollBlock.scrollLeft - 100;
                };
                ResourcesComponent.prototype.thumbnailRight = function () {
                    this.scrollBlock.scrollLeft = this.scrollBlock.scrollLeft + 100;
                };
                /**
                 * touch events for mobile.
                 */
                ResourcesComponent.prototype.handleSwipe = function () {
                };
                ResourcesComponent.prototype.ngOnInit = function () {
                    this.showBack.emit(true);
                };
                ResourcesComponent.prototype.ngAfterViewChecked = function () {
                    this.scrollBarCheck();
                };
                return ResourcesComponent;
            }());
            ResourcesComponent.ctorParameters = function () { return [
                { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"],] }] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slides', { static: false })
            ], ResourcesComponent.prototype, "slidesEl", null);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('leftArrow', { static: false })
            ], ResourcesComponent.prototype, "leftArrowEl", null);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('rightArrow', { static: false })
            ], ResourcesComponent.prototype, "rightArrowEl", null);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('firstBlockSlide', { static: false })
            ], ResourcesComponent.prototype, "firstBlockEl", null);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('scrollBlock', { static: false })
            ], ResourcesComponent.prototype, "scrollBlockEl", null);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thumbnailArrowLeft', { static: false })
            ], ResourcesComponent.prototype, "thumbnailArrowLeftEl", null);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thumbnailArrowRight', { static: false })
            ], ResourcesComponent.prototype, "thumbnailArrowRightEl", null);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mainSlideView', { static: false })
            ], ResourcesComponent.prototype, "mainSlideViewEl", null);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], ResourcesComponent.prototype, "showBack", void 0);
            ResourcesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-resources',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./resources.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/resources/resources.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./resources.component.scss */ "./src/app/resources/resources.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]))
            ], ResourcesComponent);
            /***/ 
        }),
        /***/ "./src/assets/config/resources.json": 
        /*!******************************************!*\
          !*** ./src/assets/config/resources.json ***!
          \******************************************/
        /*! exports provided: resources, default */
        /***/ (function (module) {
            module.exports = JSON.parse("{\"resources\":[{\"title\":\"Adherence to Prescription Medications\",\"video\":\"\",\"download\":\"\",\"downloadname\":\"\",\"thumbnail\":\"./assets/thumbnails/sample.png\",\"objective\":\"<ul style='padding: 0;'><li>Define the different types of medication adherence, and understand their barriers and their impact on health outcomes.</li><li>Describe the medication adherence measurements and tactics for screening.</li><li>Review different strategies to help improve medication adherence.</li></ul>\",\"summary\":\"Medication adherence is the process by which patients take their medicine as prescribed by their health care provider. Nonadherence may be associated with greater mortality risk, increased hospitalizations, and increased costs. This presentation reviews various barriers to adherence, discusses tools to measure adherence, and explores various strategies that may help improve adherence, including patient reminders and education and various patient-centered communication strategies. The presentation aims to highlight that medication adherence is an important issue that may be impacted by all members of the care team.\",\"slides\":[\"./assets/sample1.png\",\"./assets/sample2.png\",\"./assets/sample3.png\",\"./assets/sample4.png\",\"./assets/sample1.png\",\"./assets/sample2.png\",\"./assets/sample3.png\",\"./assets/sample4.png\",\"./assets/sample1.png\",\"./assets/sample2.png\",\"./assets/sample3.png\",\"./assets/sample4.png\",\"./assets/sample1.png\",\"./assets/sample2.png\",\"./assets/sample3.png\",\"./assets/sample4.png\",\"./assets/sample1.png\",\"./assets/sample2.png\",\"./assets/sample3.png\",\"./assets/sample4.png\"]},{\"title\":\"Applying Evidence-Based Medicine to Clinical Practice\",\"video\":\"./assets/videos/sample2.mp4\",\"download\":\"./assets/downloads/\",\"downloadname\":\"sample.pptx\",\"thumbnail\":\"./assets/thumbnails/sample.png\",\"objective\":\"<ul><li>Define the goals of evidence-based medicine (EBM).</li><li>Understand the different stages of EBM.</li><li>Suggest strategies for the application of EBM at the patient level.</li></ul>\",\"summary\":\"This presentation introduces EBM—an approach to the practice of medicine that involves integrating a critical review of research literature with clinical expertise and patient values and circumstances. Ways to identify high-quality research evidence are discussed. Although some argue that EBM may only be practiced by academicians, this presentation aims to dispel this myth. The presenter walks the audience through an example of the critical process of EBM and suggests some strategies for its application at the patient level.\",\"slides\":[\"./assets/sample1.png\",\"./assets/sample2.png\"]},{\"title\":\"Applying Principles of Pharmacology to Clinical Practice\",\"video\":\"\",\"download\":\"\",\"downloadname\":\"\",\"thumbnail\":\"./assets/thumbnails/Antimicrobial-Stewardship-Thumbnail.png\",\"objective\":\"<ul><li>Provide an overview of the basic principles of pharmacology as they apply to clinical medicine.</li><li>Identify drug-related factors and patient characteristics that alter pharmacokinetics (PK) and pharmacodynamics (PD) of drugs.</li><li>Understand how PK and PD a!ect efficacy and safety of drug therapies.</li></ul>\",\"summary\":\"Using knowledge of the principles of pharmacology in everyday practice may help clinicians maximize the efficacy and safety of drug therapies. This presentation provides an overview of principles of PK and PD, and explores how the effects of drugs are influenced by drug-associated factors and patient characteristics. The presenter reviews 4 key criteria that influence drug levels and kinetics in the body, speci$cally absorption, distribution, metabolism, and excretion. A deeper understanding of these concepts may help clinicians prescribe an appropriate therapeutic treatment regimen and reduce the possibility of adverse e!ects. Examples of drug-related factors and patient characteristics that impact PK and PD are emphasized.\",\"slides\":[\"./assets/slides/apm/Adherence-Prescription-Meds-Slide-01.png\",\"./assets/slides/apm/Adherence-Prescription-Meds-Slide-02.png\",\"./assets/slides/apm/Adherence-Prescription-Meds-Slide-03.png\",\"./assets/slides/apm/Adherence-Prescription-Meds-Slide-04.png\",\"./assets/slides/apm/Adherence-Prescription-Meds-Slide-01.png\",\"./assets/slides/apm/Adherence-Prescription-Meds-Slide-02.png\",\"./assets/slides/apm/Adherence-Prescription-Meds-Slide-03.png\",\"./assets/slides/apm/Adherence-Prescription-Meds-Slide-04.png\",\"./assets/slides/apm/Adherence-Prescription-Meds-Slide-01.png\",\"./assets/slides/apm/Adherence-Prescription-Meds-Slide-02.png\",\"./assets/slides/apm/Adherence-Prescription-Meds-Slide-03.png\",\"./assets/slides/apm/Adherence-Prescription-Meds-Slide-04.png\"]},{\"title\":\"Bringing Medications From Bench to Bedside\",\"video\":\"./assets/videos/sample.mp4\",\"download\":\"./assets/downloads/\",\"downloadname\":\"sample.pptx\",\"thumbnail\":\"./assets/thumbnails/sample.png\",\"objective\":\"<ul><li>Provide an overview of each stage of the drug development process.</li><li>Discuss some of the current challenges faced during the drug discovery and development.</li><li>Highlight possible future directions and opportunities in drug research and development.</li></ul>\",\"summary\":\"Drug development, from early discovery to regulatory approval for marketing, involves a long, complicated process. The process is complex, expensive, and has a low likelihood of eventual success. Completing this development process takes more than 10 years and involves collaboration among industry scientists, academic researchers, and clinicians. This presentation reviews the work involved at each stage of the drug discovery and development process and describes several challenges faced when bringing a medication from the chemist’s bench to the patient’s bedside. Recent changes in diagnostics, therapeutics, and drug development, along with rapid advancements in areas such as biologics, biosimilars, and nanotechnology, are likely to shape future clinical research and treatments.\",\"slides\":[\"./assets/sample1.png\",\"./assets/sample2.png\",\"./assets/sample3.png\",\"./assets/sample4.png\"]},{\"title\":\"Importance of Patient Diversity in Clinical Trials\",\"video\":\"./assets/videos/sample.mp4\",\"download\":\"./assets/downloads/\",\"downloadname\":\"sample.pptx\",\"thumbnail\":\"./assets/thumbnails/sample.png\",\"objective\":\"<ul><li>Explain why diversity is important in clinical trials.</li><li>Understand the barriers that limit the participation of patients from underrepresented groups in clinical trials.</li><li>Identify strategies that health care professionals (HCPs) can use to overcome these barriers.</li></ul>\",\"summary\":\"Historically, diversity has not always been considered in clinical trials but ignoring diversity may contribute to missed opportunities to fully understand the factors that lead to disease or good health outcomes. Diversity in clinical trials may provide results that are more generalizable, reduce disparities in health outcomes, and optimize treatment based on individual differences. This presentation will explore barriers to the inclusion of patients from underrepresented groups in clinical trials, including patient barriers, HCP-related barriers, and barriers resulting from the clinical trial itself. The presenter will explore several strategies that may be used to help promote diversity in clinical trials.\",\"slides\":[\"./assets/sample1.png\"]},{\"title\":\"Interpretations of Clinical Data Using Basic Statistical Concepts in Clinical Science\",\"video\":\"./assets/videos/sample.mp4\",\"download\":\"./assets/downloads/\",\"downloadname\":\"sample.pptx\",\"thumbnail\":\"./assets/thumbnails/sample.png\",\"objective\":\"<ul><li>Understand how sensitivity and prevalence can be used to interpret diagnostic tests.</li><li>Know the basic types of data and the terms used to describe them.</li><li>Learn how the study design affects the type of data available.</li><li>Understand the types of statistical tests and how they can be applied.</li><li>Learn how statistical and clinical significance differ and how to use these concepts to interpret results.</li><li>Know the meanings of and use for absolute and relative risk.</li><li>Describe the concept of number needed to treat (NNT).</li><li>Explain the differences between risks and odds, and how they are used.</li></ul>\",\"summary\":\"To read and evaluate medical research, clinicians need to be able to understand basic statistical concepts (eg, statistical and clinical significance, risks and odds ratios, and number needed to treat) and apply them appropriately to clinical studies. This presentation begins with illustrations to help clinicians better understand what is meant by statistical and clinical significance. Absolute and relative risks, odds and odds ratios, and number needed to treat are then defined and illustrated with nonmedical and medical examples. The presentation concludes with a discussion of the criteria used to discriminate causation vs association in clinical research. Together, these explanations and examples may help clinicians interpret research findings and apply them to clinical practice. A background in statistical concepts and terminology is not needed.\",\"slides\":[\"./assets/sample1.png\",\"./assets/sample2.png\"]},{\"title\":\"Patient Engagement in Clinical Trials\",\"video\":\"./assets/videos/sample.mp4\",\"download\":\"./assets/downloads/\",\"downloadname\":\"sample.pptx\",\"thumbnail\":\"./assets/thumbnails/sample.png\",\"objective\":\"<ul><li>Define patient engagement.</li><li>Explore patient engagement across the clinical trial continuum.</li><li>Highlight approaches to support patient engagement in clinical trials.</li></ul>\",\"summary\":\"Patient engagement is a concept that combines a patient’s knowledge, skills, ability, and willingness to manage their own health and to improve health care. Although clinical trials are critical to advance health and patient participation is essential, the patient perspective is rarely considered. Patients can provide valuable insights across the clinical trial continuum and help support more efficient trials with better recruitment and retention, and more impactful outcomes. This presentation will explore opportunities to better engage patients in clinical trials. The presenter will discuss approaches to address patient barriers to trial participation, highlight the importance of physician involvement, and review recruitment and retention strategies. The involvement of patient groups and the commitment by regulatory agencies is expected help facilitate patient engagement in clinical trials.\",\"slides\":[\"./assets/sample1.png\",\"./assets/sample2.png\",\"./assets/sample3.png\"]},{\"title\":\"Principles of Biomakers in Drug Development and Diagnostic Clinical Support\",\"video\":\"./assets/videos/sample.mp4\",\"download\":\"./assets/downloads/\",\"downloadname\":\"sample.pptx\",\"thumbnail\":\"./assets/thumbnails/sample.png\",\"objective\":\"<ul><li>Define the term biomarker and learn about the different biomarker subtypes.</li><li>Discuss the application of biomarkers in research, clinical practice, and drug development.</li><li>Review methodologies used to quantify biomarkers and learn how these tests are regulated.</li></ul>\",\"summary\":\"Biomarkers may be used throughout the patient journey to aid in diagnosis, monitoring, prediction of treatment response, and monitoring of safety and risk. Biomarkers also aid research and inform new drug development. This presentation will provide multiple examples of how different biomarkers may be used in research, clinical practice, and drug development. It will describe various methodologies for measuring biomarkers and provide an overview of how biomarker tests are regulated to ensure that the tests are “fit for purpose” and improve patient outcomes.\",\"slides\":[\"./assets/sample1.png\",\"./assets/sample2.png\",\"./assets/sample3.png\",\"./assets/sample4.png\"]},{\"title\":\"The Science of Vaccine Development\",\"video\":\"./assets/videos/sample.mp4\",\"download\":\"./assets/downloads/\",\"downloadname\":\"sample.pptx\",\"thumbnail\":\"./assets/thumbnails/sample.png\",\"objective\":\"<ul><li>Recognize unique aspects of vaccines and the impact they have had on public health.</li><li>Understand the immune response to vaccination, the different types of vaccines, and how vaccines protect people.</li><li>Identify the stages in vaccine development and safety monitoring as compared to drug development.</li><li>Learn about guidelines for vaccine administration (practical vaccinology) and current challenges and solutions.</li></ul>\",\"summary\":\"Vaccines have contributed to global health and have prevented more than 100 million cases of serious communicable diseases in the United States since 1924. Vaccines are complex entities, both in terms of their components and the technology required to produce them. This presentation provides examples of the effect of vaccines on public health, reviews key elements of the host immune system and how vaccines help to protect against disease, and discusses the complex processes and ongoing safety monitoring involved in vaccine development. The presenter also discusses how, despite guidelines for vaccine administration, attaining high vaccination coverage is an ongoing challenge, in part, due to vaccine hesitancy. Vaccine hesitancy is the delayed acceptance or refusal of vaccines despite their availability. The presenter will review various communication strategies to address vaccine hesitancy, enhance communication, and reinforce vaccination needs.\",\"slides\":[\"./assets/sample1.png\"]},{\"title\":\"Understanding Comparative Electiveness Research\",\"video\":\"./assets/videos/sample.mp4\",\"download\":\"./assets/downloads/\",\"downloadname\":\"sample.pptx\",\"thumbnail\":\"./assets/thumbnails/sample.png\",\"objective\":\"<ul><li>Define comparative effectiveness research (CER) and how they are used.</li><li>Describe the methods commonly used in CER.</li><li>Understand how to assess the relevance and credibility of a study.</li></ul>\",\"summary\":\"Consumers, patients, health care professionals, and payers need information to make informed medical decisions. CER is the use of evidence to directly compare two or more interventions and strategies to prevent, diagnose, treat, and monitor health conditions. This presentation reviews the types of data used in CER and explores the strengths and weaknesses of different types of studies. Each decision maker must consider the relevance and credibility of the available evidence. The presenter will review the questions that should be considered when evaluating relevance and credibility. CER will continue to play an important role in determining what works best for patients in the future.\",\"slides\":[\"./assets/sample1.png\",\"./assets/sample2.png\"]}]}");
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! /Users/stellaanastasia/github/merckacademy/src/main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map