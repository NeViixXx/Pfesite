import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageaboutComponent } from './pageabout.component';

describe('PageaboutComponent', () => {
  let component: PageaboutComponent;
  let fixture: ComponentFixture<PageaboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageaboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageaboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
