import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BmiDashbaordComponent } from './bmi-dashbaord/bmi-dashbaord.component';
import { RouterModule } from '@angular/router';
import { IndexCalcComponent } from './index-calc/index-calc.component';
import { KidsCalcComponent } from './kids-calc/kids-calc.component';
import { WeightLossCalcComponent } from './weight-loss-calc/weight-loss-calc.component';
import { BmiRoutingModule } from './bmi-routing.module';



@NgModule({
  declarations: [
    BmiDashbaordComponent,
    IndexCalcComponent,
    KidsCalcComponent,
    WeightLossCalcComponent
  ],
  imports: [
    CommonModule,
    BmiRoutingModule
  ]
})
export class BmiModule { }
