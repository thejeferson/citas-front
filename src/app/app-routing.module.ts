import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { AgendarCitaComponent } from './feature/agendar-cita/agendar-cita.component';
import { PacienteComponent } from './feature/paciente/paciente.component';
import { TratamientoComponent } from './feature/tratamiento/tratamiento.component';

const routes: Routes = [
  {path: 'login', component:LoginComponent},
  { path: 'agendar-cita', component: AgendarCitaComponent}, //crear
  { path: 'editar-cita/:id', component: AgendarCitaComponent},
  { path: 'paciente', component:PacienteComponent },
  { path: 'paciente/:id' , component:PacienteComponent},
  
  //{ path: '**', redirectTo: '', pathMatch: 'full' }, //redirecciona ruta raiz
  {path: 'tratamiento', component:TratamientoComponent},
  {path: 'tratamiento/:id', component:TratamientoComponent},
  {path: 'layout', loadChildren:() => import('./layout/layout.module').then(m => m.LayoutModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
