import { Component } from '@angular/core';
import 'flowbite';
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {Productos} from "../../models/produtos.models";
import {FormsModule} from "@angular/forms";


@Component({
  selector: 'app-crudlayout',
  standalone: true,
  imports: [
    NgClass,
    NgForOf,
    FormsModule,
    NgIf
  ],
  templateUrl: './crudlayout.component.html',
  styleUrl: './crudlayout.component.css'
})
export class CRUDLayoutComponent {


  isModalOpen = false;

   productos: Productos[] = [];

   agregarNuevo(){
     console.log("entrando al metodo")
     const nuevoProducto={
       name:"jose",
       category:"Martinez",
       brand:"fwefew",
       description:"string",
       price:"string"
     }
     this.productos.push(nuevoProducto);
     console.log(this.productos)
   }

  openModal() {
    this.isModalOpen = true;
    console.log("modal abierto")
  }

  closeModal() {
    this.isModalOpen = false;
    console.log("modal cerrado")

  }

}
