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
var platform_browser_1 = require('@angular/platform-browser');
var navbar_component_1 = require('./navbar.component');
var pocetna_component_1 = require('./pocetna.component');
var footer_component_1 = require('./footer.component');
var onama_component_1 = require('./onama.component');
var knjigovodstvo_component_1 = require('./knjigovodstvo.component');
var app_routes_1 = require('./app.routes');
var onamanavbar_component_1 = require('./onamanavbar.component');
var poslovanje_component_1 = require('./poslovanje.component');
var nastim_component_1 = require('./nastim.component');
var nasipartneri_component_1 = require('./nasipartneri.component');
var alati_component_1 = require('./alati.component');
var alatinavbar_component_1 = require('./alatinavbar.component');
var alatiupload_component_1 = require('./alatiupload.component');
var blog_component_1 = require('./blog.component');
var kontakti_component_1 = require('./kontakti.component');
var register_component_1 = require('./register.component');
var login_component_1 = require('./login.component');
var alatiplaca_component_1 = require('./alatiplaca.component');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var UserService_1 = require('./Service/UserService');
var app_component_1 = require('./app.component');
var searchpipe_1 = require('./Pipes/searchpipe');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, app_routes_1.routing, forms_1.FormsModule, http_1.HttpModule],
            declarations: [app_component_1.AppComponent, navbar_component_1.NavbarComponent, pocetna_component_1.pocetnaComponent, footer_component_1.footerComponent, onama_component_1.onamaComponent, knjigovodstvo_component_1.knjigovodstvoComponent, onamanavbar_component_1.onamanavbarComponent, poslovanje_component_1.poslovanjeComponent, nastim_component_1.nastimComponent, nasipartneri_component_1.nasipartneriComponent, alati_component_1.alatiComponent, alatinavbar_component_1.alatinavbarComponent, alatiupload_component_1.alatiuploadComponent, blog_component_1.blogComponent, kontakti_component_1.kontaktiComponent, register_component_1.registerComponent, login_component_1.loginComponent, alatiplaca_component_1.alatiplacaComponent, searchpipe_1.searchPipe],
            providers: [UserService_1.UserService],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map