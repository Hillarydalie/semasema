import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeSemaComponent } from './like-sema.component';

describe('LikeSemaComponent', () => {
  let component: LikeSemaComponent;
  let fixture: ComponentFixture<LikeSemaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LikeSemaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LikeSemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
