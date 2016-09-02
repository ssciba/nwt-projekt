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
var UserService_1 = require('./Service/UserService');
var searchpipe_1 = require('./Pipes/searchpipe');
var kontaktiComponent = (function () {
    function kontaktiComponent(userService, searchPipes) {
        this.userService = userService;
        this.searchPipes = searchPipes;
        this.ucitano = false;
        this.searching = "";
    }
    kontaktiComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.ucitano);
        this.userService.getUsers()
            .subscribe(function (users) { _this.korisnici = users; console.log("naslismo: ", _this.korisnici); }, function (error) { return _this.errorMessage = error; });
    };
    kontaktiComponent.prototype.resetUsers = function () {
        var _this = this;
        this.ucitano = false;
        this.userService.getUsers()
            .subscribe(function (users) { _this.korisnici = users; console.log("naslismo: ", _this.korisnici); }, function (error) { return _this.errorMessage = error; });
    };
    kontaktiComponent.prototype.istina = function () {
        this.ucitano = true;
    };
    kontaktiComponent.prototype.searchUsers = function () {
        this.korisnici = this.searchPipes.transform(this.korisnici, this.searching);
    };
    kontaktiComponent = __decorate([
        core_1.Component({
            selector: 'my-kontakti',
            pipes: [searchpipe_1.searchPipe],
            templateUrl: 'Assets/app/Views/kontakti.html',
            providers: [searchpipe_1.searchPipe]
        }), 
        __metadata('design:paramtypes', [UserService_1.UserService, searchpipe_1.searchPipe])
    ], kontaktiComponent);
    return kontaktiComponent;
}());
exports.kontaktiComponent = kontaktiComponent;
//# sourceMappingURL=kontakti.component.js.map