import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CRUDLayoutComponent} from "./pages/crudlayout/crudlayout.component";
import {SidebarComponent} from "./components/sidebar/sidebar.component";
import {NavComponent} from "./components/nav/nav.component";
import {MainComponent} from "./components/main/main.component";
import {LayoutComponent} from "./components/layout/layout.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CRUDLayoutComponent, SidebarComponent, NavComponent, MainComponent, LayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  {
  title = 'web-app';


}
