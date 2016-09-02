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
var User_1 = require('./Models/User');
var UserService_1 = require('./Service/UserService');
var loginComponent = (function () {
    function loginComponent(userService) {
        this.userService = userService;
        this.currentUser = new User_1.User();
    }
    loginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUsers()
            .subscribe(function (users) { _this.Users = users; console.log(" user logging in: ", _this.Users[0]); }, function (error) { return _this.errorMessage = error; });
    };
    loginComponent.prototype.logirajSe = function (korisnickoIme, sifra) {
        console.log(" user logging in: ", this.Users);
        this.userService.checkIfUser(korisnickoIme, sifra, this.Users);
    };
    loginComponent = __decorate([
        core_1.Component({
            selector: 'my-login',
            templateUrl: 'Assets/app/Views/login.html'
        }), 
        __metadata('design:paramtypes', [UserService_1.UserService])
    ], loginComponent);
    return loginComponent;
}());
exports.loginComponent = loginComponent;
//# sourceMappingURL=login.component.js.map