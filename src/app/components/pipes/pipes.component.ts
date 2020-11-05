import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styles: [
  ]
})
export class PipesComponent implements OnInit {

  Nombre = 'Alondra Cordoba';
  ArrayPrueba = ['A', ' B', ' C', ' D', ' E', ' F', ' G', ' H', ' I', ' J', ' K'];
  NombreAlterno = 'wEnDy AlOnDrA cOrDoBa EsPaRzA';
  VideoUrl = 'https://www.youtube.com/embed/P2XEx4YScoQ';
  PI = Math.PI;
  Fecha = new Date();
  Precio = 199.99;
  active = true;

  constructor() { }

  ngOnInit(): void {
  }

}
