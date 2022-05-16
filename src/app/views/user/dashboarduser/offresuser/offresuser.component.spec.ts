import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffresuserComponent } from './offresuser.component';

describe('OffresuserComponent', () => {
  let component: OffresuserComponent;
  let fixture: ComponentFixture<OffresuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffresuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffresuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
