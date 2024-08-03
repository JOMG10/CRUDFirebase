import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CrudFireBaseService {

  constructor() { }

  private variableSource = new BehaviorSubject<any>(null);
  variable$ = this.variableSource.asObservable();

  cambiarVariable(nuevaVariable: any) {
    this.variableSource.next(nuevaVariable);
  }
}
