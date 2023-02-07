import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyLoadingSecondRoutingModule } from './lazy-loading-second-routing.module';
import { LazyLoadingSecondComponent } from './lazy-loading-second.component';


@NgModule({
  declarations: [
    LazyLoadingSecondComponent
  ],
  imports: [
    CommonModule,
    LazyLoadingSecondRoutingModule
  ]
})
export class LazyLoadingSecondModule { }
