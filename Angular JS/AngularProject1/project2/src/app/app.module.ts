import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ClgModule } from './clg/clg.module';
import { StdModule } from './std/std.module';
import { StdRegisterComponent } from './std/std-register/std-register.component';
import { ClgInfosComponent } from './clg/clg-infos/clg-infos.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ClgModule,
    StdModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
