import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { User } from './../Models/User';
import { Observable } from 'rxjs/observable';

@Injectable()
export class UserService {
    constructor(private http: Http) {}
    Users: User[];


   
    getUsers(): Observable<User[]> {
        return this.http.get('')
            .map(this.extractData)
            .catch(this.handleError);
    }
     
    addUser(user: User): Observable<User> {
        let newUser = {
            Id: user.id,
            Username: user.username,
            Password: user.password,
            RepeatPassword: user.repeatPassword,
            Name: user.name,
            Lastname: user.lastname,
            Email: user.email
        };
        let body = JSON.stringify(newUser);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        console.log("In addUser()!");
        console.log(body);
        return this.http.post('add', body, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        console.log("Extract data: ", body);
        return body || {};
    }

    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error!';
        console.log(errMsg);
        return Observable.throw(errMsg);
    }


    checkIfUser(username: string, password:string,korisnici:User[]){
        for (var i = 0; i < korisnici.length; i++) {
            if (korisnici[i].username == username && korisnici[i].password == password) {
                
             
                console.log("done");
            }
        }
        
    }
}