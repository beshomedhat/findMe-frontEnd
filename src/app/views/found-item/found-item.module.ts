import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoundItemRoutingModule } from './found-item-routing.module';
import { FoundItemAddComponent } from './found-item-add/found-item-add.component';
import { FoundItemEditComponent } from './found-item-edit/found-item-edit.component';
import { FoundItemListComponent } from './found-item-list/found-item-list.component';
import { FoundItemShowComponent } from './found-item-show/found-item-show.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [FoundItemAddComponent, FoundItemEditComponent, FoundItemListComponent, FoundItemShowComponent],
  imports: [
    CommonModule,
    FoundItemRoutingModule,
    ReactiveFormsModule, 
    FormsModule
  ]
})
export class FoundItemModule { }
