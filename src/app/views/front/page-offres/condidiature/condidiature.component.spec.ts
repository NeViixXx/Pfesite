import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CondidiatureComponent } from './condidiature.component';

describe('CondidiatureComponent', () => {
  let component: CondidiatureComponent;
  let fixture: ComponentFixture<CondidiatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CondidiatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CondidiatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
