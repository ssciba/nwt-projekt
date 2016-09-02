"use strict";
var router_1 = require('@angular/router');
var pocetna_component_1 = require('./pocetna.component');
var onama_component_1 = require('./onama.component');
var knjigovodstvo_component_1 = require('./knjigovodstvo.component');
var poslovanje_component_1 = require('./poslovanje.component');
var turizam_component_1 = require('./turizam.component');
var nastim_component_1 = require('./nastim.component');
var nasipartneri_component_1 = require('./nasipartneri.component');
var alati_component_1 = require('./alati.component');
var alatiupload_component_1 = require('./alatiupload.component');
var blog_component_1 = require('./blog.component');
var kontakti_component_1 = require('./kontakti.component');
var register_component_1 = require('./register.component');
var login_component_1 = require('./login.component');
var alatiplaca_component_1 = require('./alatiplaca.component');
exports.appRoutes = [
    {
        path: 'pocetna',
        component: pocetna_component_1.pocetnaComponent
    },
    {
        path: 'onama',
        component: onama_component_1.onamaComponent
    },
    {
        path: 'Home/Index',
        redirectTo: '/pocetna',
        pathMatch: 'full'
    },
    {
        path: '',
        redirectTo: '/pocetna',
        pathMatch: 'full'
    }, {
        path: 'onama/knjigovodstvo',
        component: knjigovodstvo_component_1.knjigovodstvoComponent
    },
    {
        path: 'onama/poslovnosavjetovanje',
        component: poslovanje_component_1.poslovanjeComponent
    },
    {
        path: 'onama/turizam',
        component: turizam_component_1.turizamComponent
    },
    {
        path: 'onama/nastim',
        component: nastim_component_1.nastimComponent
    },
    {
        path: 'onama/partneri',
        component: nasipartneri_component_1.nasipartneriComponent
    },
    {
        path: 'alati',
        component: alati_component_1.alatiComponent
    },
    {
        path: 'alati/upload',
        component: alatiupload_component_1.alatiuploadComponent
    },
    {
        path: 'alati/izracunplace',
        component: alatiplaca_component_1.alatiplacaComponent
    },
    {
        path: 'blog',
        component: blog_component_1.blogComponent
    },
    {
        path: 'kontakti',
        component: kontakti_component_1.kontaktiComponent
    },
    {
        path: 'register',
        component: register_component_1.registerComponent
    },
    {
        path: 'login',
        component: login_component_1.loginComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(exports.appRoutes);
//# sourceMappingURL=app.routes.js.map