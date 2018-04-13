import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AgmCoreModule} from "@agm/core";
import { HttpClientModule }    from '@angular/common/http';
//material module
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatStepperModule} from '@angular/material/stepper';
import {MatIconModule} from '@angular/material/icon';
import {MatChipsModule} from '@angular/material/chips';
import {MatTableModule} from '@angular/material/table';
//import { MatMomentDateModule } from '@angular/material-moment-adapter';
import {MatNativeDateModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

//components
import { AppComponent } from './app.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { TestComponent } from './test/test.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { ViewComponent } from './view/view.component';
import { HeaderComponent } from './header/header.component';

//services
import { QuestionnaireService } from './questionnaire/questionnaire.service'
import { question} from './questionnaire/question';

@NgModule({
  declarations: [
    AppComponent,
    IntroductionComponent,
    TestComponent,
    QuestionnaireComponent,
    ViewComponent,
    HeaderComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    RouterModule,
    BrowserModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDTjceIJNbQ0_F8Y7oujpvMOn5CXP7i3A4'
    }),
    MatCardModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatStepperModule,
    MatIconModule,
    MatChipsModule,
    MatTableModule
    //MatMomentDateModule
  ],
  providers: [QuestionnaireService,question],
  bootstrap: [AppComponent]
})
export class AppModule { }
