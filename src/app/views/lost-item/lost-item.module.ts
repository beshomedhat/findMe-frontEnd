import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LostItemRoutingModule } from './lost-item-routing.module';
import { LostItemAddComponent } from './lost-item-add/lost-item-add.component';
import { LostItemEditComponent } from './lost-item-edit/lost-item-edit.component';
import { LostItemShowComponent } from './lost-item-show/lost-item-show.component';
import { LostItemListComponent } from './lost-item-list/lost-item-list.component';


@NgModule({
  declarations: [LostItemAddComponent, LostItemEditComponent, LostItemShowComponent, LostItemListComponent],
  imports: [
    CommonModule,
    LostItemRoutingModule
  ]
})
export class LostItemModule { }
