import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-page',
  templateUrl: './table-page.component.html',
  styleUrls: ['./table-page.component.css']
})
export class TablePageComponent implements OnInit {
  myDataArray: Array<object> = [{ id: 1, name: 'Aleks' }, { id: 2, name: 'Sale' }, { id: 3, name: 'Dragan' }]

  displayedColumns: Array<string> = ['id', 'name']
  constructor() { }

  ngOnInit(): void {
  }

}
