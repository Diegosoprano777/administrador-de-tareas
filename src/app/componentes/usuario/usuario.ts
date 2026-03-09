import { Component, EventEmitter, Input, Output } from '@angular/core';

interface Usuario {
  id: number;
  imagen: string;
  nombre: string;
}

@Component({
  selector: 'app-usuario',
  standalone: true,
  templateUrl: './usuario.html',
  styleUrl: './usuario.css'
})
export class UsuarioComponent {

  @Input({ required: true }) usuario!: Usuario;

  @Output() seleccion = new EventEmitter<number>();

  seleccionarUsuario() {
    this.seleccion.emit(this.usuario.id);
  }

}