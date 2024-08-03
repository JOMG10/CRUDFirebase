import { Component } from '@angular/core';
import {MainComponent} from "../main/main.component";
import {NavComponent} from "../nav/nav.component";
import {SidebarComponent} from "../sidebar/sidebar.component";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    MainComponent,
    NavComponent,
    SidebarComponent,
    RouterOutlet
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export  class LayoutComponent {

}
