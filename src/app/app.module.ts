import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { SaludoComponent } from './components/saludo/saludo.component';

// Nuestro modulo personalizado que exporta componentes de tipo Lista.
import { ListsModule } from './modules/lists/lists.module';

@NgModule({
  declarations: [
    AppComponent, 
    SaludoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    ReactiveFormsModule,
    CommonModule,
    // importamos nuestro modulo personalizado.
    ListsModule
  ], 
  bootstrap: [AppComponent],
})
export class AppModule {}