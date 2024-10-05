import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-container-projetos',
  standalone: true,
  imports: [],
  templateUrl: './container-projetos.component.html',
  styleUrl: './container-projetos.component.css'
})
export class ContainerProjetosComponent {
  @Input() img: string = '';
  @Input() name: string = '';
  @Input() description: string = '';
  @Input() technology: string = '';
  @Input() link: string = '';
  @Input() github: string = '';
}
