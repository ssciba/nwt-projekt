import {Component} from '@angular/core'

@Component({
    selector: 'my-alatinavbar',
    templateUrl:'Assets/app/Views/alatinavbar.html'
})
export class alatinavbarComponent {

    public alatiItems = [{ name: 'Naputak', id: '/alati', }, { name: 'Upload', id: '/alati/upload', }, { name: 'Krediti', id: '/alati/kreditnikalk', }, { name: 'Izracun', id: '/alati/izracunplace', }, { name: 'Tečaj', id: '/alati/tecajneliste', }]
}