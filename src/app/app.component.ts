import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CRUDLayoutComponent} from "./components/crudlayout/crudlayout.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CRUDLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CrudFirebase';
}
