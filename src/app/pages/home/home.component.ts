import { Component } from '@angular/core';
import { NavComponent } from "../../components/nav/nav.component";
import { MyImgComponent } from "../../components/my-img/my-img.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavComponent, MyImgComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
