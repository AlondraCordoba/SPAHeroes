import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {
// hidden = active (pipe.html y pipe.ts)
  transform(salida: string, hidden: boolean = true): any {

    if (hidden) {
      salida = salida.replace(/[a-zA-Z1-9]/gi, '*');
    }
    /*
    transform(salida: string, mostrar:  boolean = false){
      return(hidden) ? '*'.repeat(salida.length) : salida;
      // ? = condicional.
    }
    */
    return salida;
  }

}
