import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TratamientoComponent } from './feature/tratamiento/tratamiento.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgendarCitaComponent } from './feature/agendar-cita/agendar-cita.component';
import { PacienteComponent } from './feature/paciente/paciente.component';
import { LoginComponent } from './auth/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    TratamientoComponent,
    AgendarCitaComponent,
    PacienteComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
