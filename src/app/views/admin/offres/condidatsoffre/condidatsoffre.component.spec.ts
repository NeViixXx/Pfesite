import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CondidatsoffreComponent } from './condidatsoffre.component';

describe('CondidatsoffreComponent', () => {
  let component: CondidatsoffreComponent;
  let fixture: ComponentFixture<CondidatsoffreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CondidatsoffreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CondidatsoffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
