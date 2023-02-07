import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CanLeaveService {
  canLeave:boolean=false;
  constructor() { }
}
