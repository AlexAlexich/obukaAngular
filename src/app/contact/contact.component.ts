import { AuthGuard } from './../auth/auth.service';
import { CheckConst } from './../../const/const';
import { Component, OnInit } from '@angular/core';
import { ShowMessageService } from '../services/show-message.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  message: string;
  constructor(private a: ShowMessageService,private auth: AuthGuard) { }
  ngOnInit(): void {
  }

  forwardMessage(): void {
    this.a.message = this.message
  }
}
