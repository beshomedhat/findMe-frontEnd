import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FoundItemAddComponent } from './found-item-add/found-item-add.component';
import { FoundItemEditComponent } from './found-item-edit/found-item-edit.component';
import { FoundItemListComponent } from './found-item-list/found-item-list.component';
import { FoundItemShowComponent } from './found-item-show/found-item-show.component';

const routes: Routes = [
  {
    path: 'foundItems',
    component:FoundItemListComponent
  },
  {
    path: 'foundItem/:id',
    component:FoundItemShowComponent
  },
  {
    path: 'editFoundItem/:id',
    component:FoundItemEditComponent
  },
  {
    path: 'addFoundItem',
    component:FoundItemAddComponent
  }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoundItemRoutingModule { }
