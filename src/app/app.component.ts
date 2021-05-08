import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre     :string   ='Miguel';
  nombres    :string   ='miguel angel herrera';
  arreglo    :number[] = [1,2,3,4,5,6,7,8,9,10];
  pi         :number   = Math.PI;
  porcentaje :number   = 0.456;
  salario    :number   =1234.5;
  fecha      : Date    =new Date();
  idioma     :string   ='en';
  videourl   :string   ='https://www.youtube.com/embed/qep7nxq8zHY';
  password   :boolean  =true;

  miguel = {
    apellido:'herrera',
    direccion:'Oviedo',
    edad:23,
  }

  valorpromesa = new Promise<string>( (resolve) => {
      setTimeout(() => {
      resolve('Buenas tardes!');
      }, 1000);
  })


}
