import { Component } from '@angular/core';

@Component({
  selector: 'app-lineas-negocio',
  templateUrl: './lineas-negocio.component.html',
  styleUrls: ['./lineas-negocio.component.css']
})
export class LineasNegocioComponent {

  constructor() {
      document.body.style.backgroundImage="url('./assets/img/fdo_lineas_negocio.jpg')";
      // document.getElementById('navegacion').style.display = 'flex';
      // document.getElementById('footer').style.display = 'flex';
      // document.getElementById('copyright-footer').style.display = 'flex';
  }



}
