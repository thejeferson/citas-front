import { Injectable } from '@angular/core';
import { Tratamiento } from './tratamiento';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TratamientoService {
    findByName(term: string) {
        throw new Error('Method not implemented.');
    }
    findAll() {
        throw new Error('Method not implemented.');
    }

private httpOptions = {
  headers: new HttpHeaders({"Content-Type":"application/json"})
}

private url = "http://localhost:8088/api/tratamiento";


  constructor(
    private http: HttpClient


  ) { }

    //Crud

    //Create

    public save(tratamiento: Tratamiento):  Observable<Tratamiento>{
          return this.http.post<Tratamiento>(this.url+"/add", tratamiento, this.httpOptions);

    }

    //Read

    public findById(id: number): Observable<Tratamiento>{

      return this.http.get<Tratamiento>(this.url+"/"+id, this.httpOptions);
    }


    public deleteById(id: number): Observable<void>{
      return this.http.delete<void>(this.url+"/deleteById/"+id, this.httpOptions);
    }
    

}
