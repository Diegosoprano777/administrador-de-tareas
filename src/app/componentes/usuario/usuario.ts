import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { USUARIOS_FALSOS } from '../../usuario-falsos';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './usuario.html',
  styleUrls: ['./usuario.css']
})
export class UsuarioComponent {

  usuarios = USUARIOS_FALSOS;

  @Output() usuarioSeleccionado = new EventEmitter<any>();

  seleccionarUsuario(usuario: any) {
    console.log("Usuario seleccionado:", usuario);
    this.usuarioSeleccionado.emit(usuario); // 🔥 ESTA LÍNEA ES LA CLAVE
  }

}
