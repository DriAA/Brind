import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { QuestionsComponent } from './components/questions/questions.component';

const routes: Routes = [
  { path: '', component:  HomeComponent},
  { path: 'quiz', component: QuestionsComponent },
  { path: 'admin', component: QuestionsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
