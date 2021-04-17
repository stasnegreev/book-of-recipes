import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRecipePageComponent } from './create-recipe-page.component';

describe('CreateRecipePageComponent', () => {
  let component: CreateRecipePageComponent;
  let fixture: ComponentFixture<CreateRecipePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateRecipePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRecipePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
