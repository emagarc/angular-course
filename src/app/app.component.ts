import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  miFormulario: FormGroup;
  title = 'Mi aplicación en Angular';
  user = '@egarmino';

  // Esta funcion se ejecuta cuando en el hijo (Saludo Component) se pulse un boton
  recibirMenssajeDelHijo(evento: string) {
    alert(evento);
  }

  constructor(private fb: FormBuilder) {
    this.miFormulario = this.fb.group({
      name: new FormControl('Anonimo'), // Cambiado a 'Anonimo' como valor predeterminado
    });
  }
}
