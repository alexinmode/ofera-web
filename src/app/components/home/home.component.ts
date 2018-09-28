import { trigger, state, transition, animate, style } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('fade', [
      // state(),
      transition('void => *', [
      style({ backgroundColor: 'yellow', opacity: 0 }),
      animate(2000)
    ])
    ])
  ]
})
export class HomeComponent {

  constructor() {
    // document.getElementById('navegacion').style.display = 'none';
    // document.getElementById('footer').style.display = 'none';
    // document.getElementById('copyright-footer').style.display = 'none';
    document.body.style.backgroundImage = "url('./assets/img/fdo_index.jpg')";
    document.getElementById("link-garantia").style.color = "#fff";
    document.getElementById("link-preguntas").style.color = "#fff";
    document.getElementById("link-nosotros").style.color = "#fff";
    // document.getElementById("link-contacto").style.color = "#fff";
    document.getElementById("logotipo").setAttribute("src","./assets/img/ofera-circle.svg");
    document.getElementById("copyright").style.color="#fff";
    document.getElementById("copyright2").style.color="#fff";
   }



}
