"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var onamanavbarComponent = (function () {
    function onamanavbarComponent() {
        this.onamaItems = [{ name: "Točka pokrića", link: "/onama" }, { name: "Knjigovodstvo", link: "/onama/knjigovodstvo" }, { name: "Poslovanje", link: "/onama/poslovnosavjetovanje" }, { name: "Turizam", link: "/onama/turizam" }, { name: "Naš tim", link: "/onama/nastim" }, { name: "Naši partneri", link: "/onama/partneri" }];
    }
    onamanavbarComponent = __decorate([
        core_1.Component({
            selector: 'my-onamanavbar',
            templateUrl: 'Assets/app/Views/onamanavbar.html'
        }), 
        __metadata('design:paramtypes', [])
    ], onamanavbarComponent);
    return onamanavbarComponent;
}());
exports.onamanavbarComponent = onamanavbarComponent;
//# sourceMappingURL=onamanavbar.component.js.map