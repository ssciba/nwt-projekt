import {Component} from '@angular/core'
import { Router } from '@angular/router';

import { FORM_DIRECTIVES } from '@angular/common';

import { User } from './Models/User';
import { UserService } from './Service/UserService';

@Component({
    selector: 'myregister',
    templateUrl: 'Assets/app/Views/register.html',
    directives: [FORM_DIRECTIVES],
})

export class registerComponent {
    
    newUser: User;
    password: string;
    errorMessage: string;
    submitted: boolean = false;

    constructor(private userService: UserService, private router: Router) {
        this.newUser = new User();
    }

    register(){
        if(this.submitted) { return; }
        
        this.submitted = true;

        console.log("register");
        this.userService.addUser(this.newUser)
            .subscribe(
            user => { this.newUser = user; console.log("Updated user data: ", this.newUser); this.router.navigate(['/pocetna']); },
            error => this.errorMessage = <any>error
        );
    }
}
