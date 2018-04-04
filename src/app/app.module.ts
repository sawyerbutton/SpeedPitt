import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
//material module
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

//components
import { AppComponent } from './app.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { TestComponent } from './test/test.component';


@NgModule({
  declarations: [
    AppComponent,
    IntroductionComponent,
    TestComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    RouterModule,
    BrowserModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
