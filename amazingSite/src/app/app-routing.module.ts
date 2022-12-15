import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: 'profile',
  loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfileModule)
},{
  path: 'home',
  loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
},{
  path: '**',
  redirectTo: 'profile',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
