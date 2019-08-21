import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SemaFormComponent } from './sema-form.component';

describe('SemaFormComponent', () => {
  let component: SemaFormComponent;
  let fixture: ComponentFixture<SemaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SemaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SemaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
