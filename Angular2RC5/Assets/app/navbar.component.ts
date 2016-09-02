import {Component} from '@angular/core'



@Component({
    selector: 'my-navbar',
    templateUrl: 'Assets/app/Views/navbarView.html',
    
})

export class NavbarComponent {

    public navItems = [{ name: "Početna", link: "pocetna" }, { name: "Onama", link: "onama" }, { name: "Alati", link: "alati" }, { name: "Blog", link: "blog" }, { name: "Kontakti", link: "kontakti" }];
    public navrItems = [{ name: "Register", link: "register" }, { name: "Login", link: "login" }];
    
}
