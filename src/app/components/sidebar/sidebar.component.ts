import { Component } from '@angular/core';
import {CrudFireBaseService} from "../../services/crud-fire-base.service";
import 'flowbite';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  home: string="home"
  page2="pagina2"
  dashboard="dashboard"


  constructor(private crudService: CrudFireBaseService) {
  }

  cambiarVariable(pagina: string){
    this.crudService.cambiarVariable(pagina)
  }

}
