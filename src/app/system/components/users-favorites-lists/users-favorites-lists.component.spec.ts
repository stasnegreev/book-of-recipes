import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersFavoritesListsComponent } from './users-favorites-lists.component';

describe('UsersFavoritesListsComponent', () => {
  let component: UsersFavoritesListsComponent;
  let fixture: ComponentFixture<UsersFavoritesListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersFavoritesListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersFavoritesListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
