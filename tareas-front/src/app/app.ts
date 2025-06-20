import { Component, OnInit } from '@angular/core';
import { TareasService } from './servicios/tareas';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common'; // <-- Agrega esta línea

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, NgFor], // <-- Agrega NgFor aquí
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  tareas: any[] = [];
  nuevaTarea = '';

  constructor(private tareasService: TareasService) {}

  ngOnInit() {
    this.cargarTareas();
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

  eliminar(id: number) {
    this.tareasService.eliminarTarea(id).subscribe(() => this.cargarTareas());
  }
}