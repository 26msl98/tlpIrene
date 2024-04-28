import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina-5',
  templateUrl: './pagina-5.component.html',
  styleUrls: ['./pagina-5.component.css']
})
export class Pagina5Component implements OnInit {

  step = 0;

  //Varibles preguntas selected
  pregunta1A = false;
  pregunta1B = false;
  pregunta1C = false;
  
  pregunta2A = false;
  pregunta2B = false;
  pregunta2C = false;

  pregunta3A = false;
  pregunta3B = false;
  pregunta3C = false;
  
  constructor(private router  : Router) { }

  ngOnInit(): void {

  }

  select1A(){
    this.pregunta1A = true;
    this.pregunta1B = false;
    this.pregunta1C = false;
  }
  select1B(){
    this.pregunta1A = false;
    this.pregunta1B = true;
    this.pregunta1C = false;
  }
  select1C(){
    this.pregunta1A = false;
    this.pregunta1B = false;
    this.pregunta1C = true;
  }

  //P2
  select2A(){
    this.pregunta2A = true;
    this.pregunta2B = false;
    this.pregunta2C = false;
  }
  select2B(){
    this.pregunta2A = false;
    this.pregunta2B = true;
    this.pregunta2C = false;
  }
  select2C(){
    this.pregunta2A = false;
    this.pregunta2B = false;
    this.pregunta2C = true;
  }

  //P3

  select3A(){
    this.pregunta3A = true;
    this.pregunta3B = false;
    this.pregunta3C = false;
  }
  select3B(){
    this.pregunta3A = false;
    this.pregunta3B = true;
    this.pregunta3C = false;
  }
  select3C(){
    this.pregunta3A = false;
    this.pregunta3B = false;
    this.pregunta3C = true;
  }

  //comprobar

  comprobar(){
    if(this.pregunta1B && this.pregunta2C && this.pregunta3A){
      this.step=1
    }else{
      this.step=2
    }
  }

  recargar(){
   this.step=0
   this.pregunta1A = false;
   this.pregunta1B = false;
   this.pregunta1C = false;
   
   this.pregunta2A = false;
   this.pregunta2B = false;
   this.pregunta2C = false;
 
   this.pregunta3A = false;
   this.pregunta3B = false;
   this.pregunta3C = false;
  }
  
}
