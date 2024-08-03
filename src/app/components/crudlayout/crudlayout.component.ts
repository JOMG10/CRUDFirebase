import { Component } from '@angular/core';
import 'flowbite';
import { Directive, ElementRef, Renderer2, Input, OnChanges } from '@angular/core';
import {NgClass} from "@angular/common";


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
  isModalDelete=false

  ismodal=false

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  openModalDelete() {
    this.isModalDelete = true
  }

  closeModalDelete() {
    this.isModalDelete = false
  }

  openM() {
    this.ismodal=true
  }

  closeM(){
    this.ismodal=false
  }
}
