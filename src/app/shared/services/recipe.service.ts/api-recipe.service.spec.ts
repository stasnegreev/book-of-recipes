import { TestBed } from '@angular/core/testing';

import { ApiRecipeService } from './api-recipe.service';

describe('ApiRecipeService', () => {
  let service: ApiRecipeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiRecipeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
