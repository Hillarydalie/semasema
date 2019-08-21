import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SemaDescriptionComponent } from './sema-description.component';

describe('SemaDescriptionComponent', () => {
  let component: SemaDescriptionComponent;
  let fixture: ComponentFixture<SemaDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SemaDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SemaDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
