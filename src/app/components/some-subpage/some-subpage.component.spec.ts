import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeSubpageComponent } from './some-subpage.component';

describe('SomeSubpageComponent', () => {
  let component: SomeSubpageComponent;
  let fixture: ComponentFixture<SomeSubpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SomeSubpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SomeSubpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
