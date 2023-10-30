import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalculatorRoutingModule } from './calculator-routing.module';
import { CalculatorComponent } from './calculator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CalculatorComponent
  ],
  imports: [
    CommonModule,
    CalculatorRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CalculatorModule { }
