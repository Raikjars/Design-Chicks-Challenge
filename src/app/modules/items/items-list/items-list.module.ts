import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemsListRoutingModule } from './items-list-routing.module';
import { ItemsListComponent } from './page/items-list.component';
import { ConsultModule } from 'src/app/shared/components/consult/consult.module';

@NgModule({
  declarations: [
    ItemsListComponent
  ],
  imports: [
    CommonModule,
    ItemsListRoutingModule,
    ConsultModule
  ]
})
export class ItemsListModule { }
