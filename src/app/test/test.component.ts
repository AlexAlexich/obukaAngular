import { Component, OnInit,Input,Output,EventEmitter  } from '@angular/core';

@Component({
  selector: 'cile-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  @Input() title = '';
  constructor() { }
  @Output() newItemEvent = new EventEmitter<string>();

  ngOnInit(): void {
  }
  sale(){
    // this.title='Promena'
    this.newItemEvent.emit(this.title)
  }
}
