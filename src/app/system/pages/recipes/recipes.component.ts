import { Component, OnInit } from '@angular/core';
import { SystemService } from '../../services/system.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { RecipeModel } from '../../../shared/models/recipe.model';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})

export class RecipesComponent implements OnInit {

  public type: string;
  public recipes$: Observable<RecipeModel[]>;

  constructor(
    private systemService: SystemService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.subscribeRecipes();
  }

  private subscribeRecipes(): void {
    this.route.paramMap.subscribe((params => {
      this.type = params.get('type');
    }));
    this.recipes$ = this.route.params.pipe(
      switchMap(params => {
        this.type = params['type'] || 'bbb' ;
        return this.systemService.getRecipesListsByType(this.type);
      })
    );
  }
}
