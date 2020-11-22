import { Component, OnInit, Input, Output, EventEmitter, OnChanges, DoCheck} from '@angular/core';
import { Router } from '@angular/router';

// Se importa de la misma manera la propiedad Input, ya que este prepara al componente para prepararse (renderizarse), el componente padre lo manda llamar mediante el selector.
// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.css']
})
export class HeroCardComponent implements OnInit, OnChanges, DoCheck{

  // Hero: any = [];
  // Recibir la infromacion de un componente padre.
  // El input vendra de un elemento externo.

  @Input() PadreHero: any = [];
  @Input() Index: number;

  // Mandar informacion del hijo a un padre se necesita Output y este EventEmitter
  @Output() selectorHero: EventEmitter<number>;

  // tslint:disable-next-line: variable-name
  constructor( private _aRouter: Router) {
    // console.log(this.PadreHero);
    this.selectorHero = new EventEmitter();
    console.log('Constructor de hero-card');
   }

  ngOnInit(): void {
    console.log('Evento ngOnInit de hero-card');
  }

  // tslint:disable-next-line: typedef
  ngOnChanges(){
    console.log('Evento ngOnChanges de hero-card');
  }
    // tslint:disable-next-line: typedef
  ngDoCheck(){
    console.log('Evento ngDoCheck de hero-card');
  }
  // tslint:disable-next-line: typedef
  Navegar(){
    // Se pasara el index con el input y se agregara la propiedad index con un tipo number.
    // Esto vendra desde el padre (HerosComponent)
    this._aRouter.navigate(['../hero', this.Index]);

  }

}
