import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './blank-layout/blank-layout.component';

import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [UserLayoutComponent, AuthLayoutComponent, BlankLayoutComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LayoutsModule { }
