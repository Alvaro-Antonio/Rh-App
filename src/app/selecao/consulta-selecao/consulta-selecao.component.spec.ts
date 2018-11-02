import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaSelecaoComponent } from './consulta-selecao.component';

describe('ConsultaSelecaoComponent', () => {
  let component: ConsultaSelecaoComponent;
  let fixture: ComponentFixture<ConsultaSelecaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaSelecaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaSelecaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
