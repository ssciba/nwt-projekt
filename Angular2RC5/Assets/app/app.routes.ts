import {Routes, RouterModule} from '@angular/router'
import {pocetnaComponent} from './pocetna.component'
import {onamaComponent} from './onama.component'
import {knjigovodstvoComponent} from './knjigovodstvo.component'
import {poslovanjeComponent} from './poslovanje.component'
import {turizamComponent} from './turizam.component'
import {nastimComponent} from './nastim.component'
import {nasipartneriComponent} from './nasipartneri.component'
import {alatiComponent} from './alati.component'
import {alatiuploadComponent} from './alatiupload.component'
import {blogComponent}  from './blog.component'
import {kontaktiComponent}  from './kontakti.component'
import {registerComponent}  from './register.component'
import {loginComponent}  from './login.component'
import {alatiplacaComponent}  from './alatiplaca.component'




export const appRoutes: Routes = [
    {
        path: 'pocetna',
        component: pocetnaComponent
    },
    {
        path: 'onama',
        component:onamaComponent
    }
    ,{
        path: 'Home/Index',
        redirectTo: '/pocetna',
        pathMatch: 'full'
    }
    , {
        path: '',
        redirectTo: '/pocetna',
        pathMatch: 'full'
    }, {
        path: 'onama/knjigovodstvo',
        component: knjigovodstvoComponent
    },
    {
        path: 'onama/poslovnosavjetovanje',
        component:poslovanjeComponent
    },
    {
        path: 'onama/turizam',
        component:turizamComponent
    },
    {
        path: 'onama/nastim',
        component:nastimComponent
    },
    {
        path: 'onama/partneri',
        component:nasipartneriComponent
    },
    {
        path: 'alati',
        component: alatiComponent
    },
    {
        path: 'alati/upload',
        component:alatiuploadComponent
    }
    ,
    {
        path: 'alati/izracunplace',
        component: alatiplacaComponent
    }    ,
    {
        path: 'blog',
        component: blogComponent
    },
    {
        path: 'kontakti',
        component: kontaktiComponent
    },
    {
        path: 'register',
        component: registerComponent
    },
    {
        path: 'login',
        component: loginComponent
    }
];

export const routing = RouterModule.forRoot(appRoutes);