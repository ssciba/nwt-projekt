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
var alatinavbarComponent = (function () {
    function alatinavbarComponent() {
        this.alatiItems = [{ name: 'Naputak', id: '/alati', }, { name: 'Upload', id: '/alati/upload', }, { name: 'Krediti', id: '/alati/kreditnikalk', }, { name: 'Izracun', id: '/alati/izracunplace', }, { name: 'Tečaj', id: '/alati/tecajneliste', }];
    }
    alatinavbarComponent = __decorate([
        core_1.Component({
            selector: 'my-alatinavbar',
            templateUrl: 'Assets/app/Views/alatinavbar.html'
        }), 
        __metadata('design:paramtypes', [])
    ], alatinavbarComponent);
    return alatinavbarComponent;
}());
exports.alatinavbarComponent = alatinavbarComponent;
//# sourceMappingURL=alatinavbar.component.js.map