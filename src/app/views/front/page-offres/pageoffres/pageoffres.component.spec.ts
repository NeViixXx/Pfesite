import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageoffresComponent } from './pageoffres.component';

describe('PageoffresComponent', () => {
  let component: PageoffresComponent;
  let fixture: ComponentFixture<PageoffresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageoffresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageoffresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
