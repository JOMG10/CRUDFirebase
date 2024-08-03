import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CRUDLayoutComponent } from './crudlayout.component';

describe('CRUDLayoutComponent', () => {
  let component: CRUDLayoutComponent;
  let fixture: ComponentFixture<CRUDLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CRUDLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CRUDLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
