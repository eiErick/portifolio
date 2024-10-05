import { Component } from '@angular/core';
import { MyImgComponent } from "../../components/my-img/my-img.component";

@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [MyImgComponent],
  templateUrl: './sobre.component.html',
  styleUrl: './sobre.component.css'
})
export class SobreComponent {

}
