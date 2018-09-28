import { Component } from '@angular/core';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent {

  constructor() {
    document.body.style.backgroundImage = "url('./assets/img/fdo_nosotros.jpg')";
    document.getElementById("link-garantia").style.color = "#fff";
    document.getElementById("link-preguntas").style.color = "#fff";
    document.getElementById("link-nosotros").style.color = "#fff";
    // document.getElementById("link-contacto").style.color = "#fff";
    document.getElementById("logotipo").setAttribute("src","./assets/img/ofera-circle.svg");
    document.getElementById("copyright").style.color="#fff";
    document.getElementById("copyright2").style.color="#fff";
  }

}
