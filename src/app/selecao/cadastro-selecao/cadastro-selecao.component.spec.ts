import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroSelecaoComponent } from './cadastro-selecao.component';

describe('CadastroSelecaoComponent', () => {
  let component: CadastroSelecaoComponent;
  let fixture: ComponentFixture<CadastroSelecaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroSelecaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroSelecaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
