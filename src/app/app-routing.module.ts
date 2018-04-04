import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IntroductionComponent } from './introduction/introduction.component'
import {TestComponent} from './test/test.component';

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
  // {
  //   path:'view',
  // }
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

