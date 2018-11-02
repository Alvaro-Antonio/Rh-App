import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaTreinamentoComponent } from './consulta-treinamento.component';

describe('ConsultaTreinamentoComponent', () => {
  let component: ConsultaTreinamentoComponent;
  let fixture: ComponentFixture<ConsultaTreinamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaTreinamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaTreinamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
