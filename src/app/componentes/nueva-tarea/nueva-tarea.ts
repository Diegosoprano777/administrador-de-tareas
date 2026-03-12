import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nueva-tarea',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './nueva-tarea.html',
  styleUrls: ['./nueva-tarea.css']
})
export class NuevaTareaComponent {

  titulo = '';
  resumen = '';
  fecha = '';

  @Output() cancelar = new EventEmitter<void>();
  @Output() crear = new EventEmitter<any>();

  cerrar() {
    this.cancelar.emit();
  }

  crearTarea() {

    const nueva = {
      titulo: this.titulo,
      resumen: this.resumen,
      fecha: this.fecha
    };

    this.crear.emit(nueva);

    // limpiar inputs
    this.titulo = '';
    this.resumen = '';
    this.fecha = '';
  }

}