import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClgInfosComponent } from './clg-infos/clg-infos.component';
import { StdModule } from '../std/std.module';
import { StdRegisterComponent } from '../std/std-register/std-register.component';



@NgModule({
  declarations: [ClgInfosComponent],
  imports: [
    CommonModule,
    StdModule
  ],
  exports:[ClgInfosComponent]
  
})
export class ClgModule { }
