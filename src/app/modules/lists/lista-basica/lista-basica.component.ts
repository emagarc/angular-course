import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

// Creamos un tipo base para el ejemplo

export type Producto = {
  nombre: string;
  precio: number;
  descripcion: string;
}

@Component({
  selector: 'app-lista-basica',
  templateUrl: './lista-basica.component.html',
  styleUrls: ['./lista-basica.component.scss']
})
export class ListaBasicaComponent implements OnInit {

  listaElementos: Producto[] = [
    {
      nombre: "Leche",
      precio: 10,
      descripcion: "Leche entera"
    },
    {
      nombre: "Huevo",
      precio: 2,
      descripcion: "Mapple de 12 huevos"
    },
    {
      nombre: "Carne",
      precio: 25,
      descripcion: "Carne de cerdo"
    }
  ];
  
  cargando: boolean = false;

  opcion: number = 0;

  // Define 'elsetemplate' como una propiedad de clase
  elsetemplate: any; // Puedes ajustar el tipo según tus necesidades

  constructor () {}

  ngOnInit(): void {
    
  }

  cambiarCargando() {
    this.cargando = !this.cargando;
  }

  escogerOpcion(opcionEscogida: number) {
    this.opcion = opcionEscogida; // el valor cambia, implica un cambio en los elementos renderizados
  }

}
