import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TareasService {
  private apiUrl = 'https://api-rest-tareas-ekv1.onrender.com/api/tareas';

  constructor(private http: HttpClient) {}

  getTareas(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  crearTarea(nombre: string): Observable<any> {
    return this.http.post(this.apiUrl, { nombre });
  }

  eliminarTarea(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}