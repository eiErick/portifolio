import { Component } from '@angular/core';
import { MyImgComponent } from "../../components/my-img/my-img.component";

@Component({
  selector: 'app-tecnologias',
  standalone: true,
  imports: [MyImgComponent],
  templateUrl: './tecnologias.component.html',
  styleUrl: './tecnologias.component.css'
})
export class TecnologiasComponent {

}
