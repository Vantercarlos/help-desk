import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFOG } from '../config/api.config';
import { Tecnico } from '../models/tecnico';

@Injectable({
  providedIn: 'root'
})
export class TecnicoService {

  constructor(private http: HttpClient) { }

  findById(id: any): Observable<Tecnico>{
    return this.http.get<Tecnico>(`${API_CONFOG.baseUrl}/tecnicos/${id}`);
  }

  findAll(): Observable<Tecnico[]>{
    return this.http.get<Tecnico[]>(`${API_CONFOG.baseUrl}/tecnicos`);
  }

  create(tecnico: Tecnico): Observable<Tecnico> {
    return this.http.post<Tecnico>(`${API_CONFOG.baseUrl}/tecnicos`, tecnico);
  }

  update(tecnico: Tecnico): Observable<Tecnico> {
    return this.http.put<Tecnico>(`${API_CONFOG.baseUrl}/tecnicos/${tecnico.id}`, tecnico);
  }

  delete(id: any): Observable<Tecnico>{
    return this.http.delete<Tecnico>(`${API_CONFOG.baseUrl}/tecnicos/${id}`);
  }
}
