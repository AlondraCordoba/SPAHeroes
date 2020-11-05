import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/services/Hero.services';
import { Router } from '@angular/router';

// Decorador:
@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {

  constructor( private heroService: HeroService, private _aRouter: Router) { }

  ArrayHeros: any = [];

  // Se ejecuta cuando se termina de renderizar el componente.
  ngOnInit(): void {
    this.ArrayHeros = this.heroService.getHeros();
  }

  // El componente padre ya tiene la informacion que el componente hijo necesita, sin necesidad de ejecutar otro servicio en el hijo.
  // Importado desde angular Router
  Navegar(index){
    console.log(index);
    this._aRouter.navigate(['../hero',index])
  }

}