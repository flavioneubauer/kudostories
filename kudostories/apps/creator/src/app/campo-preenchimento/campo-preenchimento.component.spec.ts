import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampoPreenchimentoComponent } from './campo-preenchimento.component';

describe('CampoPreenchimentoComponent', () => {
  let component: CampoPreenchimentoComponent;
  let fixture: ComponentFixture<CampoPreenchimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CampoPreenchimentoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CampoPreenchimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
