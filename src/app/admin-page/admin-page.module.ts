import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPageComponent } from './admin-page.component';
import { NewRecipeFormComponent } from './components/new-recipe-form/new-recipe-form.component';
import { SharedModule } from '../shared/shared.module';
import {ReactiveFormsModule} from '@angular/forms';
import {AdminPageService} from './services/admin-page.service';


@NgModule({
  declarations: [
    AdminPageComponent,
    NewRecipeFormComponent
  ],
  imports: [
      CommonModule,
      SharedModule,
      ReactiveFormsModule
  ],
  providers: [
    AdminPageService
  ]
})

export class AdminPageModule { }
