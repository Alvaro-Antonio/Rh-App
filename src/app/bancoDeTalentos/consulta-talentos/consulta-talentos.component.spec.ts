import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaTalentosComponent } from './consulta-talentos.component';

describe('ConsultaTalentosComponent', () => {
  let component: ConsultaTalentosComponent;
  let fixture: ComponentFixture<ConsultaTalentosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaTalentosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaTalentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
