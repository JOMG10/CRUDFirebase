import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CRUDDatosComponent } from './cruddatos.component';

describe('CRUDDatosComponent', () => {
  let component: CRUDDatosComponent;
  let fixture: ComponentFixture<CRUDDatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CRUDDatosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CRUDDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
