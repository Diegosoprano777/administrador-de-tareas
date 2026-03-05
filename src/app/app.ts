import { Component } from '@angular/core';
import { EncabezadoComponent } from './componentes/encabezado/encabezado';
import { UsuarioComponent } from './componentes/usuario/usuario';
import { TareasComponent } from './componentes/tareas/tareas';

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

  usuarioActual: any = null;

  recibirUsuario(usuario: any) {
    this.usuarioActual = usuario;
  }

}
