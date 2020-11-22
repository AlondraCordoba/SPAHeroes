import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy} from '@angular/core';
import { HeroService } from 'src/app/services/Hero.services';
import { Router } from '@angular/router';

// Decorador:
// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{

  // tslint:disable-next-line: variable-name
  constructor( private heroService: HeroService, private _aRouter: Router) {
    console.log('Constructor de la clase(heros)');
  }
  Heros: any[] = [];
  ArrayHeros: any = [];

  // Se ejecuta cuando se termina de renderizar el componente.
  ngOnInit(): void {
    this.ArrayHeros = this.heroService.getHeros();
    console.log('Evento ngOnInit (ubicado en hero)');
  }
      // tslint:disable-next-line: typedef
    ngDoCheck(){
      console.log('Evento ngDoCheck (ubicado en hero)');
    }
    // tslint:disable-next-line: typedef
    ngAfterContentInit(){
      console.log('Evento AfterContentInit (ubicado en hero)');
    }

    // tslint:disable-next-line: typedef
    ngAfterContentChecked(){
      console.log('Evento AfterContentChecked (ubicado en hero)');
    }

     // tslint:disable-next-line: typedef
     ngAfterViewInit(){
      console.log('Evento AfterViewInit (ubicado en hero)');
    }

    // tslint:disable-next-line: typedef
    ngAfterViewChecked(){
      console.log('Evento AfterViewChecked (ubicado en hero)');
    }

     // tslint:disable-next-line: typedef
     ngOnDestroy(){
      console.log('Evento ngOnDestroy (ubicado en hero)');
    }

  // El componente padre ya tiene la informacion que el componente hijo necesita, sin necesidad de ejecutar otro servicio en el hijo.
  // Importado desde angular Router
  // tslint:disable-next-line: typedef
  Navegar(index){
    console.log(index);
    this._aRouter.navigate(['../hero', index]);
  }



}