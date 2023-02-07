import { Component, NgModule, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailsComponent implements OnInit {
  isChecked: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
}
