import { Component } from '@angular/core';
import 'flowbite';
import { Directive, ElementRef, Renderer2, Input, OnChanges } from '@angular/core';
import {NgClass} from "@angular/common";
import {Productos} from "../../models/produtos.models";


@Component({
  selector: 'app-crudlayout',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './crudlayout.component.html',
  styleUrl: './crudlayout.component.css'
})
export class CRUDLayoutComponent {


  isModalOpen = false;

   productos: Productos[] = [];

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

}
