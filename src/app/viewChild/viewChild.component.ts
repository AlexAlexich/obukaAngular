import { Component, OnInit, ViewChild, ElementRef, ViewChildren, QueryList } from '@angular/core';

@Component({
  selector: 'app-viewChild',
  templateUrl: './viewChild.component.html',
  styleUrls: ['./viewChild.component.css']
})
export class ViewChildComponent implements OnInit {
  scorllElement:string;
  @ViewChild('cile', { static: true }) cile: ElementRef
  @ViewChildren('cile') public allCile: QueryList<ElementRef>;
  constructor() { }

  ngOnInit() {
  }
  changeFont(operator): void {
    if (operator === '+') {
      this.handleOperator('+')
    }
    else{
      this.handleOperator('-');
    }
  }

  scrollTo(){
    let element = +this.scorllElement
    // this.allCile[element].nativeElement.scrollIntoView()
   this.allCile.toArray()[element].nativeElement.scrollIntoView()
  }
  private handleOperator(operator) {
    this.allCile.forEach(cile => {
      let el = cile.nativeElement;
      let font = parseInt(window.getComputedStyle(el).fontSize);
      operator==='-'? font--:font++
      el.style.fontSize = font + 'px';
    });
  }
}
