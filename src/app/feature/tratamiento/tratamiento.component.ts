import { Component, OnInit } from '@angular/core';
import {Tratamiento} from './tratamiento'
import { TratamientoService } from './tratamiento.service';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-tratamiento',
  templateUrl: './tratamiento.component.html',
 
})
export class TratamientoComponent {


  currentTratamiento: Tratamiento = {
    id: 0+1,
    nombre: "",
    descripcion: "",
    fecha: new Date(),
  };

  constructor(
    private tratamientoService: TratamientoService,
    private activedRoute:  ActivatedRoute,
  ) {  }

  ngOnInit(): void {
    this.activedRoute.paramMap.subscribe(
      (params)=> {
        let id:string = "";
          if (params.get("id")){
            id = params.get("id")!;
            this.findById(parseInt(id));

          }
      }

    )
  }

  save():void{
    this.tratamientoService.save(this.currentTratamiento)
    .subscribe(
      (response) => {
        console.log("registro guardado");
        this.currentTratamiento = {
          id: 0+1,
          nombre: "",
          descripcion: "",
          fecha: new Date(),
        };


      }
    )
  } 

  findById(id: number): void{
    this.tratamientoService.findById(id)
    .subscribe(
      (response: Tratamiento)=> {
        this.currentTratamiento = response;
      }

    )
  }

  delete():void{
    this.tratamientoService.deleteById(this.currentTratamiento.id)
    .subscribe(
      () => {
        console.log("Registro eliminado exitosamente");
        this.currentTratamiento = {
          id: 0+1,
          nombre: "",
          descripcion: "",
          fecha: new Date(),
        };
      
      }

    )
  }

}
