import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainCalculatorsDashboardComponent } from './main-calculators-dashboard/main-calculators-dashboard.component';
import { BodyModule } from './body/body.module';
import { HomeComponent } from './home/home.component';
import { AccountsModule } from './accounts/accounts.module';

@NgModule({
  declarations: [
    AppComponent,
    MainCalculatorsDashboardComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BodyModule,
    AccountsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
