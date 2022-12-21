import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCard, MatCardModule} from '@angular/material/card';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { QuestionsComponent } from './components/questions/questions.component';
import { QuestionCounterComponent } from './components/questions/question-counter/question-counter.component';
import { QuestionFilterComponent } from './components/questions/question-filter/question-filter.component';
import { BoxStyleComponent } from './components/questions/question-filter/box-style/box-style.component';
import { GridStyleComponent } from './components/questions/question-filter/grid-style/grid-style.component';
import { ListStyleComponent } from './components/questions/question-filter/list-style/list-style.component';
import { ResultsComponent } from './components/results/results.component';
import { ResultsDoughnutComponent } from './components/charts/results-doughnut/results-doughnut.component';
import { HomeComponent } from './components/pages/home/home.component';
import { AdminComponent } from './components/pages/admin/admin.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent,
    QuestionCounterComponent,
    QuestionFilterComponent,
    BoxStyleComponent,
    GridStyleComponent,
    ListStyleComponent,
    ResultsComponent,
    ResultsDoughnutComponent,
    HomeComponent,
    AdminComponent,
    NavigationBarComponent,
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatButtonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    NgbModule,
    MatIconModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
