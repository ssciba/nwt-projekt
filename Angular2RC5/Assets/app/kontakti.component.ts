import {Component,OnInit} from '@angular/core'
import {User} from './Models/User'

import {UserService} from './Service/UserService'
import {searchPipe} from './Pipes/searchpipe'


@Component({
    selector: 'my-kontakti',
    pipes:[searchPipe],
    templateUrl: 'Assets/app/Views/kontakti.html',
    providers:[searchPipe]


})
export class kontaktiComponent implements OnInit {

    korisnici: User[];
    errorMessage: string;
    ucitano: boolean = false;
    searching: string = "";
   
    constructor(private userService: UserService, private searchPipes :searchPipe) {
    }

    ngOnInit() {

        console.log(this.ucitano);
        this.userService.getUsers()
            .subscribe(
            users => { this.korisnici = users; console.log("naslismo: ", this.korisnici); },
            error => this.errorMessage = <any>error
        );  
    }

    resetUsers() {
        this.ucitano = false;
        this.userService.getUsers()
            .subscribe(
            users => { this.korisnici = users; console.log("naslismo: ", this.korisnici); },
            error => this.errorMessage = <any>error
            ); 
    }

    istina(): void {
        this.ucitano = true;
        
    }
    searchUsers(): void {
        this.korisnici = this.searchPipes.transform(this.korisnici, this.searching);
    }




}