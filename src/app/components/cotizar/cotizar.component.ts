import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl} from '@angular/forms';


@Component({
  selector: 'app-cotizar',
  templateUrl: './cotizar.component.html',
  styleUrls: ['./cotizar.component.css']
})
export class CotizarComponent {
  public name:string;
  public phone:string;
  public email:string;
  public description:string;
  public amount:string;
  public parts:string;

  constructor(private httpClient: HttpClient){
    document.body.style.backgroundImage = "url('./assets/img/fondo.jpg')";
    // document.getElementById("link-garantia").style.color = "#5046AA";
    // document.getElementById("link-preguntas").style.color = "#5046AA";
    // document.getElementById("link-nosotros").style.color = "#5046AA";
    // document.getElementById("link-contacto").style.color = "#5046AA";
    document.getElementById("logotipo").setAttribute("src","./assets/img/ofera-circle.svg");
    // document.getElementById("copyright").style.color="#5046AA";
    // document.getElementById("copyright2").style.color="#5046AA";
  }

  public sendMail(){
    let json = {};
    json["name"] = this.name;
    json["phone"] = this.phone;
    json["email"] = this.email;
    json["description"] = this.description;
    json["amount"] = this.amount;
    json["parts"] = this.parts;
    json["destinatario"] = "tecnologicogorila@gmail.com"
    this.httpClient.post('https://anapioficeandfire.com/api/books/1',json)
      .subscribe(
        (data:any[]) => {
          alert(data["state"]);
        }
      )
    console.log(this.name);
  }

}
