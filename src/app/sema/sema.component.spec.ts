import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SemaComponent } from './sema.component';

describe('SemaComponent', () => {
  let component: SemaComponent;
  let fixture: ComponentFixture<SemaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SemaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
