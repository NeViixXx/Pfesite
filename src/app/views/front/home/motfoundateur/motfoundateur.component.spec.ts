import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotfoundateurComponent } from './motfoundateur.component';

describe('MotfoundateurComponent', () => {
  let component: MotfoundateurComponent;
  let fixture: ComponentFixture<MotfoundateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotfoundateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MotfoundateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
