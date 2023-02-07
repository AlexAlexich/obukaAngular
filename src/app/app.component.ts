import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  param = { value: 'world' }
  constructor(public translate: TranslateService) {

  }
  ngOnInit(): void {
  }
  item = ''
  changeItem(newItem: string) {
    this.item = newItem;
  }
}
