import { ShowMessageService } from './../services/show-message.service';
import { Component, OnInit } from '@angular/core';
import { CommonComponent } from '../common.component';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
})
export class MessagesComponent extends CommonComponent implements OnInit {
  message: string;
  isChecked: boolean;
  constructor(private servMessage: ShowMessageService) {
    super()
  }
  ngOnInit(): void {
    this.message = this.servMessage.message;
  }

  override canDeactivate(): boolean {
    return this.isChecked;
  }
}
