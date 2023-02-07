import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazyLoadingSecondComponent } from './lazy-loading-second.component';

const routes: Routes = [{ path: '', component: LazyLoadingSecondComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyLoadingSecondRoutingModule { }
