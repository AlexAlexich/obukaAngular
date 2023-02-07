import { SharedModulesModule } from './../shared-modules/shared-modules.module';
import { DetailsComponent } from './../details/details.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyLoadingRoutingModule } from './lazy-loading-routing.module';
import { LazyLoadingComponent } from './lazy-loading.component';


@NgModule({
  declarations: [
    LazyLoadingComponent
  ],
  imports: [
    CommonModule,
    LazyLoadingRoutingModule,
    SharedModulesModule
  ]
})
export class LazyLoadingModule { }
