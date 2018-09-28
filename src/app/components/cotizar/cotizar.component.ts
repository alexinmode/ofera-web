import { Component } from '@angular/core';

@Component({
  selector: 'app-cotizar',
  templateUrl: './cotizar.component.html',
  styleUrls: ['./cotizar.component.css']
})
export class CotizarComponent {

  constructor() {
    document.body.style.backgroundImage = "url('./assets/img/fondo.jpg')";
    // document.getElementById("link-garantia").style.color = "#5046AA";
    // document.getElementById("link-preguntas").style.color = "#5046AA";
    // document.getElementById("link-nosotros").style.color = "#5046AA";
    // document.getElementById("link-contacto").style.color = "#5046AA";
    document.getElementById("logotipo").setAttribute("src","./assets/img/ofera-circle.svg");
    // document.getElementById("copyright").style.color="#5046AA";
    // document.getElementById("copyright2").style.color="#5046AA";
  }


}
