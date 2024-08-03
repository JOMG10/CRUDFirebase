import {Component, OnInit} from '@angular/core';
import {CRUDLayoutComponent} from "../../pages/crudlayout/crudlayout.component";
import {CrudFireBaseService} from "../../services/crud-fire-base.service";
import {NgClass, NgIf} from "@angular/common";
import 'flowbite';
import {DashboardComponent} from "../../pages/dashboard/dashboard.component";
import {RouterOutlet} from "@angular/router";
import {DatosCompartidosService} from "../../services/datos-compartidos.service";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    CRUDLayoutComponent,
    NgIf,
    DashboardComponent,
    NgClass,
    RouterOutlet
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit{


  variable:any

  constructor(private compartirDatosService: DatosCompartidosService) {}

  ngOnInit() {
    this.compartirDatosService.variable$.subscribe(valor => {

      if (valor===null){
        this.variable = "dashboard";
      }else if(valor==="home"){
        this.variable = "home";
      }else if(valor==="dashboard"){
        this.variable = "dashboard";
      }

    });
    }



}
