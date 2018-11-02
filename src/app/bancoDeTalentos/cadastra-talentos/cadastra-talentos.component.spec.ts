import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastraTalentosComponent } from './cadastra-talentos.component';

describe('CadastraTalentosComponent', () => {
  let component: CadastraTalentosComponent;
  let fixture: ComponentFixture<CadastraTalentosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastraTalentosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastraTalentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
