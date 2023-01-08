import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: 'profile',
  loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfileModule)
}, {
  path: 'home',
  loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
  canActivate: [() => true]
}, {
  path: 'message',
  loadChildren: () => import('./pages/message/message.module').then(m => m.MessageModule),
  canActivate: [() => true]
}, {
  path: 'login',
  loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule),
  canActivate: [() => true]
}, {
  path: '**',
  redirectTo: 'profile',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
