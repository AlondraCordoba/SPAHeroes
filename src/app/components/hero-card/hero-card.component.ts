import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';

// Se importa de la misma manera la propiedad Input, ya que este prepara al componente para prepararse (renderizarse), el componente padre lo manda llamar mediante el selector.
@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.css']
})
export class HeroCardComponent implements OnInit {

  // Hero: any = [];
  // Recibir la infromacion de un componente padre.
  // El input vendra de un elemento externo.

  @Input() PadreHero: any = [];
  @Input() Index: number;

  // Mandar informacion del hijo a un padre se necesita Output y este EventEmitter
  @Output() selectorHero: EventEmitter<number>;

  constructor( private _aRouter: Router) {
    // console.log(this.PadreHero);
    this.selectorHero = new EventEmitter();
   }

  ngOnInit(): void {
  }

  Navegar(){
    // Se pasara el index con el input y se agregara la propiedad index con un tipo number.
    // Esto vendra desde el padre (HerosComponent)
    this._aRouter.navigate(['../hero', this.Index]);

  }

}
