import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroTreinamentoComponent } from './cadastro-treinamento.component';

describe('CadastroTreinamentoComponent', () => {
  let component: CadastroTreinamentoComponent;
  let fixture: ComponentFixture<CadastroTreinamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroTreinamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroTreinamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
