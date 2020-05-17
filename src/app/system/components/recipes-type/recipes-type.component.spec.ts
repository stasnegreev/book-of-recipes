import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesTypeComponent } from './recipes-type.component';

describe('RecipesTypeComponent', () => {
  let component: RecipesTypeComponent;
  let fixture: ComponentFixture<RecipesTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipesTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipesTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
