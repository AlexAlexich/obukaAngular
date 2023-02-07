
import { Component, OnInit } from '@angular/core';
import { ConfirmPopupService } from '../services/dialogs/confirmPopup.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  text: string;
  constructor(private confirmPopupService: ConfirmPopupService) { }

  ngOnInit(): void {
  }
  openDialog(): void {
    this.confirmPopupService.openPopup().subscribe(result => {
      if (result) {
        this.text = 'yes'
        return
      }
      this.text = 'no'
    })
  }

}
