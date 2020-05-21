import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { UserLayoutComponent } from './shared/components/layouts/user-layout/user-layout.component';
import { AuthLayoutComponent } from './shared/components/layouts/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './shared/components/layouts/blank-layout/blank-layout.component';

const routes: Routes = [

  {
    path: 'user',
    component: UserLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import ('./views/found-item/found-item.module').then(m => m.FoundItemModule)
      }
    ]
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import ('./views/auth/auth.module').then(m => m.AuthModule)
      }
    ]
  },
  {
    path: 'home',
    component: BlankLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import ('./views/pages/pages.module').then(m => m.PagesModule)
      }
    ]
  },
  {path:'' , redirectTo: 'home' , pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
