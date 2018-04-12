import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: 'body.component.html' 
})
export class BodyComponent {
  frase:any = {
    message:  "Un gran poder conlleva una gran responsabilidad",
    author:"Ben Parker"
  }

  show:boolean = false;

  people:string[] = ["Spider Man","Venon","Octopus"]

}
