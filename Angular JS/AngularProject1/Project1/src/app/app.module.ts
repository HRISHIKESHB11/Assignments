import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Practise1Component } from './practise1/practise1.component';
import { FormsModule } from '@angular/forms';
import { TableComponent } from './table/table.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { DirectivesComponent } from './directives/directives.component';
import { FormPracticeComponent } from './form-practice/form-practice.component';
import { Assignment1Component } from './assignment1/assignment1.component';

@NgModule({
  declarations: [
    AppComponent,
    Practise1Component,
    TableComponent,
    TwowaybindingComponent,
    DirectivesComponent,
    FormPracticeComponent,
    Assignment1Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
