import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  miFormulario: FormGroup;
  title = 'Mi aplicación en Angular';
  user = "@egarmino";  

  constructor(private fb: FormBuilder) {
    this.miFormulario = this.fb.group({
      name: new FormControl("Emanuel")
    });
  }


}