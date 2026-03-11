import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tareas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tareas.html',
  styleUrls: ['./tareas.css']
})
export class TareasComponent {

  @Input({required:true}) nombre!: string;
 @Input({required:true}) idUsuario!: number;

 tareas = [

  // Usuario 1
  {
    id: 't1',
    idUsuario: 1,
    titulo: 'Diseñar interfaz',
    resumen: 'Crear diseño principal de la aplicación',
    tiempo: '2 horas'
  },
  {
    id: 't2',
    idUsuario: 1,
    titulo: 'Crear menú navegación',
    resumen: 'Diseñar barra superior',
    tiempo: '1 hora'
  },
  {
    id: 't3',
    idUsuario: 1,
    titulo: 'Prototipo visual',
    resumen: 'Realizar primer prototipo del sistema',
    tiempo: '3 horas'
  },

  // Usuario 2
  {
    id: 't4',
    idUsuario: 2,
    titulo: 'Crear base de datos',
    resumen: 'Diseñar tablas principales',
    tiempo: '3 horas'
  },
  {
    id: 't5',
    idUsuario: 2,
    titulo: 'Configurar servidor',
    resumen: 'Preparar backend del proyecto',
    tiempo: '2 horas'
  },
  {
    id: 't6',
    idUsuario: 2,
    titulo: 'Probar API',
    resumen: 'Verificar conexión con frontend',
    tiempo: '1 hora'
  },

  // Usuario 3
  {
    id: 't7',
    idUsuario: 3,
    titulo: 'Diseñar página inicio',
    resumen: 'Crear estructura de la página principal',
    tiempo: '2 horas'
  },
  {
    id: 't8',
    idUsuario: 3,
    titulo: 'Optimizar imágenes',
    resumen: 'Reducir peso de imágenes',
    tiempo: '1 hora'
  },
  {
    id: 't9',
    idUsuario: 3,
    titulo: 'Agregar animaciones',
    resumen: 'Agregar efectos visuales',
    tiempo: '2 horas'
  },

  // Usuario 4
  {
    id: 't10',
    idUsuario: 4,
    titulo: 'Probar aplicación',
    resumen: 'Buscar errores en el sistema',
    tiempo: '2 horas'
  },
  {
    id: 't11',
    idUsuario: 4,
    titulo: 'Corregir bugs',
    resumen: 'Arreglar errores encontrados',
    tiempo: '3 horas'
  },
  {
    id: 't12',
    idUsuario: 4,
    titulo: 'Mejorar rendimiento',
    resumen: 'Optimizar velocidad del sitio',
    tiempo: '2 horas'
  },

  // Usuario 5
  {
    id: 't13',
    idUsuario: 5,
    titulo: 'Crear documentación',
    resumen: 'Documentar el proyecto',
    tiempo: '2 horas'
  },
  {
    id: 't14',
    idUsuario: 5,
    titulo: 'Revisar código',
    resumen: 'Revisar buenas prácticas',
    tiempo: '1 hora'
  },
  {
    id: 't15',
    idUsuario: 5,
    titulo: 'Actualizar dependencias',
    resumen: 'Actualizar librerías del proyecto',
    tiempo: '1 hora'
  },

  // Usuario 6
  {
    id: 't16',
    idUsuario: 6,
    titulo: 'Preparar despliegue',
    resumen: 'Configurar producción',
    tiempo: '2 horas'
  },
  {
    id: 't17',
    idUsuario: 6,
    titulo: 'Subir proyecto',
    resumen: 'Publicar en servidor',
    tiempo: '1 hora'
  },
  {
    id: 't18',
    idUsuario: 6,
    titulo: 'Pruebas finales',
    resumen: 'Verificar funcionamiento completo',
    tiempo: '2 horas'
  }

];


  get tareasUsuarioSeleccionado() {
    return this.tareas.filter(
      (tarea) => tarea.idUsuario === this.idUsuario
    );
  }

}