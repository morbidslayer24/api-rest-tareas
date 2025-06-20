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

  getTareaPorId(id: number): Observable<any> {
  return this.http.get(`${this.apiUrl}/${id}`);
}

  crearTarea(nombre: string): Observable<any> {
    return this.http.post(this.apiUrl, { nombre });
  }

  eliminarTarea(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  editarTarea(id: number, nombre: string): Observable<any> {
  return this.http.put(`${this.apiUrl}/${id}`, { nombre });
}

contarTareas(): Observable<any> {
  return this.http.get('https://api-rest-tareas-ekv1.onrender.com/api/tareas-contar');
}

buscarTareas(texto: string): Observable<any> {
  return this.http.get(`https://api-rest-tareas-ekv1.onrender.com/api/tareas-buscar?q=${encodeURIComponent(texto)}`);
}

resetTareas(): Observable<any> {
  return this.http.post('https://api-rest-tareas-ekv1.onrender.com/api/tareas-reset', {});
}

}