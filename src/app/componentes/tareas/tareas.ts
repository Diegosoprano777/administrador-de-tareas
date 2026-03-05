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

  @Input() usuario: any;

}
