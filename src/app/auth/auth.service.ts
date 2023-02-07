import { RoutesConst } from 'src/const/const';
import { CheckConst } from './../../const/const';
import { ShowMessageService } from './../services/show-message.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private msgToCheck:ShowMessageService,private router:Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(this.msgToCheck.message!==CheckConst.Cile){
      this.router.navigate([`/${RoutesConst.Contact}`])
      return false;
    }
    return true;
  }
}
