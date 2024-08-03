import {Component, OnInit} from '@angular/core';
import {CRUDLayoutComponent} from "../crudlayout/crudlayout.component";
import {CrudFireBaseService} from "../../services/crud-fire-base.service";
import {NgIf} from "@angular/common";



@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    CRUDLayoutComponent,
    NgIf
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit{


  variable:any

  constructor(private compartirDatosService: CrudFireBaseService) {}

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
