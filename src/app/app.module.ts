import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Cambia ReactiveFormsModule por FormsModule

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule], // Cambia ReactiveFormsModule por FormsModule
  bootstrap: [AppComponent],
})
export class AppModule {}