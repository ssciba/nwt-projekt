import { Component } from '@angular/core';

import {ROUTER_DIRECTIVES} from "@angular/router"


@Component({
    selector: 'my-app',
    template: `<div class="container noPadding">
                   <my-navbar></my-navbar>
                   <router-outlet></router-outlet>
                   <my-footer></my-footer>
               </div>
`,
    styleUrls: ["../Assets/styles/main.css"]
    ,
    directives: [ROUTER_DIRECTIVES]


})
export class AppComponent { }
