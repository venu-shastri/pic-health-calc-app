import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainCalculatorsDashboardComponent } from './main-calculators-dashboard/main-calculators-dashboard.component';
import { BodyDashboardComponent } from './body/body-dashboard/body-dashboard.component';
import { HomeComponent } from './home/home.component';
//import { activateIfUserAuthenticated } from './route-guards/authenticateGuard';

const routes: Routes = [
  //http://localhost:4200/
   {path:"" , redirectTo:"home",pathMatch:"full"},
   {path:"home",component:HomeComponent},
   //http://localhost:4200/health
   {path:"health", component:MainCalculatorsDashboardComponent, canActivate:[]},
   //http://localhost:4200/body
   {path:"body",component:BodyDashboardComponent},
  //http://localhost:4200/bmi
  {path:"bmi",loadChildren:()=>import("./bmi/bmi.module").then(m=>m.BmiModule)}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
