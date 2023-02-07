import { MessagesComponent } from './../messages/messages.component';
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonComponent } from '../common.component';

@Injectable({
  providedIn: 'root',
})
export class LeaveGuardService implements CanDeactivate<CommonComponent> {
  constructor() {}

  canDeactivate(
    component: CommonComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    return component.canDeactivate();
  }
}
