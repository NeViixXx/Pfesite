import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartiformComponent } from './partiform.component';

describe('PartiformComponent', () => {
  let component: PartiformComponent;
  let fixture: ComponentFixture<PartiformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartiformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartiformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
