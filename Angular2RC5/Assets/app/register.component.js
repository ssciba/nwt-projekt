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
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var User_1 = require('./Models/User');
var UserService_1 = require('./Service/UserService');
var registerComponent = (function () {
    function registerComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.submitted = false;
        this.newUser = new User_1.User();
    }
    registerComponent.prototype.register = function () {
        var _this = this;
        if (this.submitted) {
            return;
        }
        this.submitted = true;
        console.log("register");
        this.userService.addUser(this.newUser)
            .subscribe(function (user) { _this.newUser = user; console.log("Updated user data: ", _this.newUser); _this.router.navigate(['/pocetna']); }, function (error) { return _this.errorMessage = error; });
    };
    registerComponent = __decorate([
        core_1.Component({
            selector: 'myregister',
            templateUrl: 'Assets/app/Views/register.html',
            directives: [common_1.FORM_DIRECTIVES],
        }), 
        __metadata('design:paramtypes', [UserService_1.UserService, router_1.Router])
    ], registerComponent);
    return registerComponent;
}());
exports.registerComponent = registerComponent;
//# sourceMappingURL=register.component.js.map