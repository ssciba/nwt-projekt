import {Component} from '@angular/core'
import {FORM_DIRECTIVES } from '@angular/common';

@Component({
    selector: 'my-alatiplaca',
    templateUrl: 'Assets/app/Views/alatiplaca.html',
    directives: [FORM_DIRECTIVES],
})
export class alatiplacaComponent {
    iznosPlace: string;
    iznos: number = 0;
    bruto: number = 0;
    neto: number = 0;

    izracunajBruto(): void {
        this.bruto = this.iznos * 0.9;
        console.log(this.bruto);
    }

    izracunajNeto(): void {
        this.neto = this.iznos * 1.2;
        console.log(this.neto);
    }
}