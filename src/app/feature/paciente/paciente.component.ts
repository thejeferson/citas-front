import { Component, OnInit } from '@angular/core';
import { PacienteService } from './paciente.service';
import { Paciente } from './paciente';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent implements OnInit {

  currentPaciente: Paciente ={

    id: 0,
    nombre:"",
    apellido:"",
    identificacion:"",
    curso: "",
    carrera:""
  };

  constructor(
    private pacienteService: PacienteService,
    private activeRoute : ActivatedRoute
  ) { }

  //Entra en la ruta localhost:4200/paciente/3 trayendo el id solicitado para leer
  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(
      (params)=>{
        let id:string ="";
        if (params.get("id")){
          id = params.get("id") !;
          this.findById(parseInt(id));
        }
      }
    )
  }

  save(): void{
    this.pacienteService.save(this.currentPaciente)
    .subscribe(
      (response) =>{
       console.log("registro guardar");
       this.currentPaciente ={
        id: 0,
        nombre:"",
        apellido:"",
        identificacion:"",
        curso: "",
        carrera:""
      };
    }
  )
  }

  findById(id: number):void
  {
    this.pacienteService.findById(id).subscribe(
      (response: Paciente) =>{
        this.currentPaciente = response;
      }
    )
  }

  delete():void{
    this.pacienteService.deleteById(this.currentPaciente.id)
    .subscribe(
      () =>{
        console.log("Registro eliminado");
        this.currentPaciente ={
          id: 0,
          nombre:"",
          apellido:"",
          identificacion:"",
          curso: "",
          carrera:""
        }; 
      }
    )

  }

}
