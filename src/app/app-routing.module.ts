import { ViewChildComponent } from './viewChild/viewChild.component';
import { TablePageComponent } from './table-page/table-page.component';
import { LeaveGuardService } from './leaveGuard/leave-guard.service';
import { AuthGuard } from './auth/auth.service';
import { MessagesComponent } from './messages/messages.component';
import { ContactComponent } from './contact/contact.component';
import { UsersComponent } from './users/users.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutesConst } from 'src/const/const';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  { path: RoutesConst.Home, component: HomeComponent },
  { path: RoutesConst.Users, component: UsersComponent },
  { path: RoutesConst.Contact, component: ContactComponent },
  {
    path: RoutesConst.Messages,
    component: MessagesComponent,
    canActivate: [AuthGuard],
    canDeactivate: [LeaveGuardService],
  },
  {
    path: 'lazyLoading',
    loadChildren: () =>
      import('./lazy-loading/lazy-loading.module').then(
        (m) => m.LazyLoadingModule
      ),
  },
  {
    path: 'lazyLoadingSecond',
    loadChildren: () =>
      import('./lazy-loading-second/lazy-loading-second.module').then(
        (m) => m.LazyLoadingSecondModule
      ),
  },
  { path: RoutesConst.Table, component: TablePageComponent },
  { path: RoutesConst.ViewChild, component: ViewChildComponent },
  { path: '**', redirectTo: RoutesConst.Home },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
