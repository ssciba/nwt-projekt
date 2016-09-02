import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NavbarComponent} from './navbar.component'
import {pocetnaComponent} from './pocetna.component'
import {footerComponent}  from './footer.component'
import {onamaComponent} from './onama.component'
import {knjigovodstvoComponent} from './knjigovodstvo.component'
import {routing} from './app.routes'
import {onamanavbarComponent} from './onamanavbar.component'
import {poslovanjeComponent} from './poslovanje.component'
import {nastimComponent} from './nastim.component'
import {nasipartneriComponent} from './nasipartneri.component'
import {alatiComponent} from './alati.component'
import {alatinavbarComponent} from './alatinavbar.component'
import {alatiuploadComponent} from './alatiupload.component'
import {blogComponent}  from './blog.component'
import {kontaktiComponent}  from './kontakti.component'
import {registerComponent}  from './register.component'
import {loginComponent}  from './login.component'
import {alatiplacaComponent}  from './alatiplaca.component'
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { UserService } from './Service/UserService';


import { AppComponent }  from './app.component';

import {searchPipe} from './Pipes/searchpipe';


@NgModule({
    imports: [BrowserModule, routing, FormsModule, HttpModule],
  declarations: [AppComponent, NavbarComponent, pocetnaComponent, footerComponent, onamaComponent, knjigovodstvoComponent, onamanavbarComponent, poslovanjeComponent, nastimComponent, nasipartneriComponent, alatiComponent, alatinavbarComponent, alatiuploadComponent, blogComponent, kontaktiComponent, registerComponent, loginComponent, alatiplacaComponent,searchPipe],
  providers:[UserService],
  bootstrap: [AppComponent ]
})
export class AppModule { }