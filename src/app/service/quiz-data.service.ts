import { Injectable } from '@angular/core';
import { quizData } from '../../environments/quizData'
@Injectable({
  providedIn: 'root'
})
export class QuizDataService {

  constructor() { }

  getData(){
    return quizData
  }
}
