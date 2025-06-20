import { Component, OnInit } from '@angular/core';
import { TareasService } from './servicios/tareas';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf, 
    MatButtonModule, MatInputModule, MatListModule, MatCardModule, MatToolbarModule, MatIconModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  tareas: any[] = [];
  nuevaTarea = '';
  editandoId: number | null = null;
  nombreEditado = '';
  idActualizar: number | null = null;
  nombreActualizar = '';
  idEliminar: number | null = null;
  seccion: string = ''; 
  totalTareas: number | null = null;
  textoBusqueda: string = '';
  resultadoBusqueda: any[] = [];
  mensajeReset: string = '';

  constructor(private tareasService: TareasService) {}

  ngOnInit() {
    // Por defecto, no se muestra ninguna sección
  }

  mostrarSeccion(seccion: string) {
    this.seccion = seccion;
    if (seccion === 'listar') {
      this.cargarTareas();
    }
  }

  cargarTareas() {
    this.tareasService.getTareas().subscribe(data => this.tareas = data);
  }

  agregar() {
    if (!this.nuevaTarea) return;
    this.tareasService.crearTarea(this.nuevaTarea).subscribe(() => {
      this.nuevaTarea = '';
      this.cargarTareas();
    });
  }

  eliminar(id: number | null) {
    if (id == null) return;
    this.tareasService.eliminarTarea(id).subscribe(() => {
      this.idEliminar = null;
      this.cargarTareas();
    });
  }

  actualizarTarea() {
    if (this.idActualizar == null || !this.nombreActualizar) return;
    this.tareasService.editarTarea(this.idActualizar, this.nombreActualizar).subscribe(() => {
      this.idActualizar = null;
      this.nombreActualizar = '';
      this.cargarTareas();
    });
  }

  contarTareas() {
  this.tareasService.contarTareas().subscribe(data => this.totalTareas = data.total);
}

buscarTareas() {
  if (!this.textoBusqueda) return;
  this.tareasService.buscarTareas(this.textoBusqueda).subscribe(data => this.resultadoBusqueda = data);
}

resetTareas() {
  this.tareasService.resetTareas().subscribe(data => {
    this.mensajeReset = data.mensaje;
    this.cargarTareas();
    setTimeout(() => this.mensajeReset = '', 2000);
  });
}
}