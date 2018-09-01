webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\nbutton {\n  min-width: 100px;\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box;\n  padding: 10px;\n  margin: 10px;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n  <header class=\"header header-6\">\n    <div class=\"branding\">\n      <a href=\"javascript:void(0)\" routerLink=\"/\" class=\"nav-link\">\n        <!-- <clr-icon shape=\"lightbulb\"></clr-icon> -->\n        <span class=\"title\">Examples</span>\n      </a>\n    </div>\n    <div class=\"header-nav\">\n      <a href=\"https://github.com/nagarsuresh/angular-threejs\" class=\"nav-link nav-text\">Source Code</a>\n  </div>\n  </header>\n  <nav class=\"subnav\">\n    <ul class=\"nav\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"javascript:void(0)\" routerLink=\"./box\" routerLinkActive=\"active\">Box</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"javascript:void(0)\" routerLink=\"./donuts\" routerLinkActive=\"active\">Donuts</a>\n      </li>\n    </ul>\n  </nav>\n  <div class=\"content-container\">\n    <div class=\"content-area\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_first_first_component__ = __webpack_require__("./src/app/components/first/first.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_donuts_rain_donuts_rain_component__ = __webpack_require__("./src/app/components/donuts-rain/donuts-rain.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// import { ClarityModule } from '@clr/angular';




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_first_first_component__["a" /* FirstComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_donuts_rain_donuts_rain_component__["a" /* DonutsRainComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                // ClarityModule,
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot([
                    {
                        path: 'box',
                        component: __WEBPACK_IMPORTED_MODULE_5__components_first_first_component__["a" /* FirstComponent */]
                    },
                    {
                        path: 'donuts',
                        component: __WEBPACK_IMPORTED_MODULE_6__components_donuts_rain_donuts_rain_component__["a" /* DonutsRainComponent */]
                    },
                    {
                        path: '',
                        pathMatch: 'full',
                        redirectTo: 'box'
                    }
                ])
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/common/base-3js-component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Base3jsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_three__ = __webpack_require__("./node_modules/three/build/three.module.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Base3jsComponent = /** @class */ (function () {
    function Base3jsComponent() {
        this.renderer = new __WEBPACK_IMPORTED_MODULE_1_three__["i" /* WebGLRenderer */]();
        this.scene = null;
        this.camera = null;
        this.width = 1200;
        this.height = 800;
        this.showAxis = true;
    }
    Base3jsComponent.prototype.ngOnInit = function () {
        // set scene
        this.scene = new __WEBPACK_IMPORTED_MODULE_1_three__["g" /* Scene */]();
        this.scene.background = new __WEBPACK_IMPORTED_MODULE_1_three__["c" /* Color */](0xababab);
        if (this.showAxis) {
            this.scene.add(this.getAxis());
        }
        // create camera
        this.camera = this.getCamera();
        this.initialize();
    };
    Base3jsComponent.prototype.getCamera = function () {
        var camera = new __WEBPACK_IMPORTED_MODULE_1_three__["f" /* PerspectiveCamera */](75, this.width / this.height, 1, 1000);
        this.adjustCamera(camera);
        return camera;
    };
    Base3jsComponent.prototype.adjustCamera = function (camera) {
        camera.position.z = 10;
    };
    Base3jsComponent.prototype.getAxis = function () {
        var axes = new __WEBPACK_IMPORTED_MODULE_1_three__["a" /* AxesHelper */](10);
        return axes;
    };
    Base3jsComponent.prototype.ngAfterViewInit = function () {
        if (!this.rendererContainer) {
            console.error('No viewchild found with #rendererContainer');
            return;
        }
        this.width = this.rendererContainer.nativeElement.clientWidth;
        this.height = this.rendererContainer.nativeElement.clientHeight;
        this.renderer.setSize(this.width, this.height);
        this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);
        this.animate();
    };
    Base3jsComponent.prototype.animate = function () {
        var _this = this;
        this.doAnimate();
        this.renderer.render(this.scene, this.camera);
        this.requestId = window.requestAnimationFrame(function () { return _this.animate(); });
    };
    Base3jsComponent.prototype.doAnimate = function () {
        // to be overridde by derived class
    };
    Base3jsComponent.prototype.ngOnDestroy = function () {
        window.cancelAnimationFrame(this.requestId);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('rendererContainer'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], Base3jsComponent.prototype, "rendererContainer", void 0);
    return Base3jsComponent;
}());



/***/ }),

/***/ "./src/app/components/donuts-rain/donuts-rain.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/donuts-rain/donuts-rain.component.html":
/***/ (function(module, exports) {

module.exports = "<div #rendererContainer class=\"renderer-container\"></div>"

/***/ }),

/***/ "./src/app/components/donuts-rain/donuts-rain.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DonutsRainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_base_3js_component__ = __webpack_require__("./src/app/common/base-3js-component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_three__ = __webpack_require__("./node_modules/three/build/three.module.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DonutsRainComponent = /** @class */ (function (_super) {
    __extends(DonutsRainComponent, _super);
    function DonutsRainComponent() {
        var _this = _super.call(this) || this;
        _this.showAxis = false;
        _this.donuts = [];
        return _this;
    }
    DonutsRainComponent.prototype.initialize = function () {
        this.createNewDonut();
    };
    DonutsRainComponent.prototype.createNewDonut = function () {
        var donut = this.getDonut();
        donut.position.y = 15;
        donut.position.x = this.getNumberInBetween(-8, 8);
        donut.position.z = this.getNumberInBetween(-8, 8);
        var negative = Math.random() < 0.5 ? 1 : -1;
        this.donuts.push({
            donut: donut,
            xRotate: negative * this.getNumberInBetween(0.01, 0.05),
            yRotate: negative * this.getNumberInBetween(0.01, 0.05),
        });
        this.scene.add(donut);
    };
    DonutsRainComponent.prototype.getDonut = function () {
        var geometry = new __WEBPACK_IMPORTED_MODULE_2_three__["h" /* TorusGeometry */](1, 0.3, 16, 100);
        var color = Math.random() * 0xffffff;
        var material = new __WEBPACK_IMPORTED_MODULE_2_three__["e" /* MeshBasicMaterial */]({ color: color });
        var donut = new __WEBPACK_IMPORTED_MODULE_2_three__["d" /* Mesh */](geometry, material);
        return donut;
    };
    DonutsRainComponent.prototype.doAnimate = function () {
        if (Math.random() < 0.1) {
            this.createNewDonut();
        }
        this.donuts.forEach(function (d) {
            d.donut.rotateX(d.xRotate);
            d.donut.rotateY(d.yRotate);
            d.donut.position.y -= 0.1;
        });
    };
    DonutsRainComponent.prototype.getNumberInBetween = function (from, to) {
        return from + (Math.random() * (to - from));
    };
    DonutsRainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-donuts-rain',
            template: __webpack_require__("./src/app/components/donuts-rain/donuts-rain.component.html"),
            styles: [__webpack_require__("./src/app/components/donuts-rain/donuts-rain.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DonutsRainComponent);
    return DonutsRainComponent;
}(__WEBPACK_IMPORTED_MODULE_1__common_base_3js_component__["a" /* Base3jsComponent */]));



/***/ }),

/***/ "./src/app/components/first/first.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/first/first.component.html":
/***/ (function(module, exports) {

module.exports = "<div #rendererContainer class=\"renderer-container\"></div>\n"

/***/ }),

/***/ "./src/app/components/first/first.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirstComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_three__ = __webpack_require__("./node_modules/three/build/three.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_base_3js_component__ = __webpack_require__("./src/app/common/base-3js-component.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FirstComponent = /** @class */ (function (_super) {
    __extends(FirstComponent, _super);
    function FirstComponent() {
        var _this = _super.call(this) || this;
        _this.ADD = 0.01;
        _this.cube = null;
        return _this;
    }
    FirstComponent.prototype.initialize = function () {
        this.cube = this.getCube();
        this.scene.add(this.cube);
    };
    FirstComponent.prototype.getCube = function () {
        var geometry = new __WEBPACK_IMPORTED_MODULE_1_three__["b" /* BoxGeometry */](4, 2, 2);
        var material = new __WEBPACK_IMPORTED_MODULE_1_three__["e" /* MeshBasicMaterial */]({ color: 0xde400f, wireframe: true });
        var cube = new __WEBPACK_IMPORTED_MODULE_1_three__["d" /* Mesh */](geometry, material);
        return cube;
    };
    FirstComponent.prototype.doAnimate = function () {
        this.cube.rotation.y += this.ADD;
    };
    FirstComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-first',
            template: __webpack_require__("./src/app/components/first/first.component.html"),
            styles: [__webpack_require__("./src/app/components/first/first.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FirstComponent);
    return FirstComponent;
}(__WEBPACK_IMPORTED_MODULE_2__common_base_3js_component__["a" /* Base3jsComponent */]));



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map