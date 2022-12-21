import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { QuizDataService } from 'src/app/service/quiz-data.service';


@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit{
  constructor(public quizData: QuizDataService){}
  areQuestionsCompleted = false;
  results = {}
  quesitonSet: any
  ngOnInit(): void {
    this.quesitonSet = this.quizData.getData()
    console.log("From  `app-questions-component, Question Set:", this.quesitonSet)
  }

  handleAnswers(e: any){
    console.log("From `app-questions-component: ", e)
    e.results.length == this.quesitonSet.length? this.areQuestionsCompleted = true : false
    this.results = e
  }
}
