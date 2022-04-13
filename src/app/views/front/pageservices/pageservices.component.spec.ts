import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageservicesComponent } from './pageservices.component';

describe('PageservicesComponent', () => {
  let component: PageservicesComponent;
  let fixture: ComponentFixture<PageservicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageservicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
