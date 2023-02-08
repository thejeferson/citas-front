import { Component, OnInit } from '@angular/core';
import { AgendarCita } from './agendarCita'; 
import { AgendarCitaService } from './agendar-cita.service';

@Component({
  selector: 'app-agendar-cita',
  templateUrl: './agendar-cita.component.html',
  styleUrls: ['./agendar-cita.component.css']
})
export class AgendarCitaComponent implements OnInit {

  agendarCitaActual: AgendarCita = new AgendarCita(0,0,"","");

  listadoAgendarCitas: AgendarCita[] =[];

  constructor(
    private agendarCitaService: AgendarCitaService
  ) { }

  ngOnInit(): void {

    this.findAll();

  }

  save(agendarCita: AgendarCita):void
  {
    console.log("ingresando al metodo save")
    this.agendarCitaService.save(agendarCita).subscribe(
      (respuesta) =>{
        this.agendarCitaActual = new AgendarCita(0,0,"","");
        this.findAll();

      }
    );
  }

  findAll():void
  {
    this.agendarCitaService.findAll().subscribe(
      respuesta => this.listadoAgendarCitas = respuesta
    );
  }

  seleccionaragendarCita(agendarCita: AgendarCita):void
  {
    this.agendarCitaActual = agendarCita;
  }

  deleteById(id: number):void
  {
    this.agendarCitaService.deleteById(id).subscribe(
      ()=>{
      this.listadoAgendarCitas = this.listadoAgendarCitas
      .filter( item => item.citaId != id);
      this.agendarCitaActual = new AgendarCita(0,0,"","",);
      }
    );
  }

}
