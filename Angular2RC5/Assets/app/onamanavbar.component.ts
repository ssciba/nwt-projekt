import {Component} from '@angular/core'


@Component({
    selector: 'my-onamanavbar',
    templateUrl: 'Assets/app/Views/onamanavbar.html'
})

export class onamanavbarComponent {

    public onamaItems = [{ name: "Točka pokrića", link: "/onama" }, { name: "Knjigovodstvo", link: "/onama/knjigovodstvo" }, { name: "Poslovanje", link: "/onama/poslovnosavjetovanje" }, { name: "Turizam", link: "/onama/turizam" }, { name: "Naš tim", link: "/onama/nastim" }, { name: "Naši partneri", link: "/onama/partneri" }];

}
