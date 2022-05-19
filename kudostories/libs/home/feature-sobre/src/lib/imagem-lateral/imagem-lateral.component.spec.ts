import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagemLateralComponent } from './imagem-lateral.component';

describe('ImagemLateralComponent', () => {
  let component: ImagemLateralComponent;
  let fixture: ComponentFixture<ImagemLateralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImagemLateralComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagemLateralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
