import { Injectable } from '@angular/core';
import { Paciente} from './paciente';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/enviroments/environment'; 

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  private httpOptions =  {
    headers: new HttpHeaders({"Content-Type" : "application/json"})
  }

  private url = environment.API_URL + "/paciente";

  constructor(
    private http: HttpClient
  ) { }

   //Create
   public save(paciente: Paciente): Observable<Paciente>{
     return this.http.post<Paciente>(this.url+"/",paciente,this.httpOptions);
   }

   //Read
  public findById(id:number):Observable<Paciente>
  {
    return this.http.get<Paciente>(this.url+"/"+id, this.httpOptions);
  }

  public deleteById(id:number):Observable<void>
  {
    return this.http.delete<void>(this.url+"/id/"+id, this.httpOptions);
  }

}
