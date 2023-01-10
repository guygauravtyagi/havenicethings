import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [{
  path: 'profile',
  loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfileModule),
  canActivate: [LoginGuard],
}, {
  path: 'home',
  loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
  canActivate: [LoginGuard],
}, {
  path: 'message',
  loadChildren: () => import('./pages/message/message.module').then(m => m.MessageModule),
  canActivate: [LoginGuard],
}, {
  path: 'login',
  loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule),
}, {
  path: '**',
  redirectTo: 'login',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
