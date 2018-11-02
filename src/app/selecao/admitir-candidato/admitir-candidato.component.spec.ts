import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmitirCandidatoComponent } from './admitir-candidato.component';

describe('AdmitirCandidatoComponent', () => {
  let component: AdmitirCandidatoComponent;
  let fixture: ComponentFixture<AdmitirCandidatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmitirCandidatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmitirCandidatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
