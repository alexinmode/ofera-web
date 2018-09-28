import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})



export class SliderComponent{

  constructor() {
    document.body.style.backgroundImage = "url('./assets/img/fondo.jpg')";
  }


}
