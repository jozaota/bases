import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcumulardorComponent } from './acumulardor.component';

describe('AcumulardorComponent', () => {
  let component: AcumulardorComponent;
  let fixture: ComponentFixture<AcumulardorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcumulardorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcumulardorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
