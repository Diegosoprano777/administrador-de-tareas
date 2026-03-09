import { Component } from '@angular/core';
import { EncabezadoComponent } from './componentes/encabezado/encabezado';
import { UsuarioComponent } from './componentes/usuario/usuario';
import { TareasComponent } from './componentes/tareas/tareas';
import { USUARIOS_FALSOS } from './usuario-falsos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    EncabezadoComponent,
    UsuarioComponent,
    TareasComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {

  usuarios: {
    id: number;
    nombre: string;
    imagen: string;
  }[] = USUARIOS_FALSOS;

  idUsuarioSeleccionado: number | null = null;

  get usuarioSeleccionado() {
    return this.usuarios.find(
      (usuario) => usuario.id === this.idUsuarioSeleccionado
    );
  }

  seleccionarUsuario(id: number) {
    this.idUsuarioSeleccionado = id;
  }

}