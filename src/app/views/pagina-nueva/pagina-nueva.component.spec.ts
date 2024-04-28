import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaNuevaComponent } from './pagina-nueva.component';

describe('PaginaNuevaComponent', () => {
  let component: PaginaNuevaComponent;
  let fixture: ComponentFixture<PaginaNuevaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaNuevaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaNuevaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
