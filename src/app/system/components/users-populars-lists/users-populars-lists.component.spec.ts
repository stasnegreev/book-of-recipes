import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersPopularsListsComponent } from './users-populars-lists.component';

describe('UsersPopularsListsComponent', () => {
  let component: UsersPopularsListsComponent;
  let fixture: ComponentFixture<UsersPopularsListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersPopularsListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersPopularsListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
