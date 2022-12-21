import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-question-counter',
  templateUrl: './question-counter.component.html',
  styleUrls: ['./question-counter.component.scss'],
})

export class QuestionCounterComponent implements OnInit{
  @Input()  questions!: any;
  @Output() answer =  new EventEmitter<object>();
  display = true
  index = 0;
  resultsArr: any = {
    results: []
  }
  ngOnInit(): void {
    console.log(this.questions[this.index])
  }


  answerHandler(e:object){
    this.resultsArr.results.push(e)
    this.display = false;
    console.log("From `app-quesiton-counter-component: ", e, this.resultsArr);
    this.index++;
    console.log("Index: ", this.index)
    this.answer.emit(this.resultsArr)
  }
}
