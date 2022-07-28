import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GravadorComponent } from './gravador.component';

describe('GravadorComponent', () => {
  let component: GravadorComponent;
  let fixture: ComponentFixture<GravadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GravadorComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GravadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
