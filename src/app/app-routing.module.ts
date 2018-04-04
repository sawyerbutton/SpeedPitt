import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IntroductionComponent } from './introduction/introduction.component'
import {TestComponent} from './test/test.component';
import {QuestionnaireComponent} from './questionnaire/questionnaire.component';
import {ViewComponent} from './view/view.component';

export const appRoutes = [
  {
    path: '',
    redirectTo: 'introduction',
    pathMatch: 'full'
  },
  {
    path:'introduction',
    component:IntroductionComponent
  },
  {
    path:'test',
    component:TestComponent
  },
  {
    path:'questionnaire',
    component:QuestionnaireComponent
  },
  {
    path:'view',
    component:ViewComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

