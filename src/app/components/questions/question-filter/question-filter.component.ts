import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';




@Component({
  selector: 'app-question-filter',
  templateUrl: './question-filter.component.html',
  styleUrls: ['./question-filter.component.scss'],
})
export class QuestionFilterComponent  implements OnInit{
  @Input()  question!: any;
  @Output() answer =  new EventEmitter<object>();
  constructor(){}




  ngOnInit(): void {
  }

  resultHandler(e: any){
    console.log("From `app-question-filter-component`: ", e)
    this.answer.emit(e)
  }
}
