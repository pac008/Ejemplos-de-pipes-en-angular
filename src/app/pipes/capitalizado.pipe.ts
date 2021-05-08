import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {

  transform(value:string, todos:boolean=true):string{
    
    value = value.toLocaleLowerCase();
   

   let nombres = value.split(' ');

   if(todos){
     nombres = nombres.map ( nombre => {
       return nombre[0].toUpperCase() + nombre.substr(1);

     })
       }else {
    nombres[0]= nombres[0][0].toUpperCase() + nombres[0].substr(1);
    nombres[2]= nombres[2][0].toUpperCase() + nombres[2].substr(1);
   }
   return nombres.join(' ');


  }

}
