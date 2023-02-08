import { Injectable } from '@angular/core';
import { AgendarCita } from './agendarCita';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/enviroments/environment'; 

@Injectable({
  providedIn: 'root'
})
export class AgendarCitaService {

  private httpOptions =  {
    headers: new HttpHeaders({"Content-Type" : "application/json"})
  }

  private url = environment.API_URL + "/agendarCita";

  constructor(
    private http: HttpClient
  ) { }

  //Create
  public save(agendarCita: AgendarCita): Observable<AgendarCita>
  {
    return this.http.post<AgendarCita>(this.url+"/",agendarCita,this.httpOptions);
  }
  //Read
  public findById(id:number):Observable<AgendarCita>
  {
    return this.http.get<AgendarCita>(this.url+"/"+id+"/", this.httpOptions);
  }
  //Update
  public update(agendarCita: AgendarCita): Observable<AgendarCita>
  {
    return this.http.put<AgendarCita>(this.url+"/", agendarCita, this.httpOptions);
  }
  //Delete
  public deleteById(id:number):Observable<AgendarCita>
  {
    return this.http.delete<AgendarCita>(this.url+"/id/"+id, this.httpOptions);
  }
  //findAll
  public findAll(): Observable<AgendarCita[]>
  {
    return this.http.get<AgendarCita[]>(this.url+"/", this.httpOptions);
  }

  public findAllByName(termino: string): Observable<AgendarCita[]>
  {
    return this.http.get<AgendarCita[]>(this.url+"/findByName/"+termino, this.httpOptions);
  }



}
