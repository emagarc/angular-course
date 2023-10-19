import { Component, OnInit, Input, Output, EventEmitter, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.scss']
})
export class SaludoComponent implements OnInit, OnDestroy, OnChanges {

  @Input() nombre: string = "Anonimo";
  @Output() mensajeEmiter: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }
  ngOnInit(): void {
    //intrucciones previas a la renderizacion del componente
    console.log("ngOnInit del componente Saludo");
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['nombre']) {
      console.log("CAMBIO: valor anterior:", changes['nombre'].previousValue);
      console.log("CAMBIO: valor actual:", changes['nombre'].currentValue);
    }
  }
  ngOnDestroy(): void {
    console.log("ngOnDestroy el componente va a desaparecer");
  }


  // Ejemplo para gestionar un evento de tipo click en el DOM
  alertaSaludo(): void{
    alert(`Hola, ${this.nombre}. Alerta despachada desde un click de boton`);
  }

  // Ejemplo para gestionar un evento de tipo click en el DOM y enviar un texto al padre.
  enviarMensajeAlPadre(): void{
    this.mensajeEmiter.emit(`Hola, ${this.nombre}. Alerta despachada desde un click de boton`)
  }
  
};

// Orden de ciclo de vida de los componentes:

// 1- ngOnChanges
// 2- ngOnInit
// 3- ngAfterContentInit
// 4- ngAfterContentChecked
// 5- ngAfterViewInit
// 6- ngAfterViewChecked
// 7- ngAfterContentChecked
// 8- ngAfterViewChecked
// 9- ngOnDestroy

