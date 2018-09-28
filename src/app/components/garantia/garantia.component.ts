import { Component } from '@angular/core';

@Component({
  selector: 'app-garantia',
  templateUrl: './garantia.component.html',
  styleUrls: ['./garantia.component.css']
})
export class GarantiaComponent {

  constructor() {
    document.body.style.backgroundImage = "url('./assets/img/fondo.jpg')";
    // document.getElementById("link-garantia").style.color = "#5046AA";
    // document.getElementById("link-preguntas").style.color = "#5046AA";
    // document.getElementById("link-nosotros").style.color = "#5046AA";
    // document.getElementById("link-contacto").style.color = "#5046AA";
    // document.getElementById("logotipo").style.backgroundImage = "url(../../../assets/img/ofera_morado.svg)";
    // document.getElementById("logotipo").setAttribute("src","./assets/img/ofera-circle.svg");
    // document.getElementById("copyright").style.color="#5046AA";
    // document.getElementById("copyright2").style.color="#5046AA";
    window.scrollTo(0,0);
   }

}
