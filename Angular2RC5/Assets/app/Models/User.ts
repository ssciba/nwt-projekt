import { UserService } from '.././Service/UserService';


export class User {


    

    public id: number;
    public username: string;
    public password: string;
    public repeatPassword: string;
    public name: string;
    public lastname: string;
    public email: string;

  

    constructor(id: number = 1, username: string = "", password: string = "",repeatPassword:string="", name: string = "", lastname: string = "", email: string = "") {
        this.id = id;
        this.username = username;
        this.password = password;
        this.repeatPassword = repeatPassword;
        this.name = name;
        this.lastname = lastname;
        this.email = email;
      
    }

    public getFullName(): string {
        return this.name + " " + this.lastname;
    }


  
    

}

