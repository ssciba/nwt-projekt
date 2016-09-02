import {Component,OnInit} from '@angular/core'
import { User } from './Models/User';
import { UserService } from './Service/UserService';

@Component({
    selector: 'my-login',
    templateUrl: 'Assets/app/Views/login.html'
})

export class loginComponent implements OnInit {
    currentUser: User;
    Users: User[];
    errorMessage: string;
   
   
    
    constructor(private userService: UserService) {

        this.currentUser = new User();
    }

    ngOnInit() {
        this.userService.getUsers()
        .subscribe(
        users => { this.Users = users; console.log(" user logging in: ", this.Users[0]); },
        error => this.errorMessage = <any>error
        );
    }

    logirajSe(korisnickoIme, sifra) {
        console.log(" user logging in: ", this.Users);
        this.userService.checkIfUser(korisnickoIme, sifra, this.Users);
       
  
    }
   


    
}
