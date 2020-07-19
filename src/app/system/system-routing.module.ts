import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartPageComponent } from './pages/start-page/start-page.component';
import { BasketPageComponent } from './pages/basket-page/basket-page.component';

const routes: Routes = [
  {
    path: 'start-page',
    component: StartPageComponent,
  },
  {
    path: 'basket',
    component: BasketPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SystemRoutingModule { }
