import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SystemComponent} from './system/system.component';
import {AdminPageComponent} from './admin-page/admin-page.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'system',
      },
      {
        path: 'system',
        component: SystemComponent,
      },
      {
        path: 'admin',
        component: AdminPageComponent,
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
