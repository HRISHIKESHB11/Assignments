import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StdRegisterComponent } from './std-register/std-register.component';



@NgModule({
  declarations: [StdRegisterComponent],
  imports: [
    CommonModule,
  ],
  exports:[StdRegisterComponent]
})
export class StdModule { }
