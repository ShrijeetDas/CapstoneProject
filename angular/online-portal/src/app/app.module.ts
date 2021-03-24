import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import{HttpClientModule} from '@angular/common/http';
import { AccountlistComponent } from './accountlist/accountlist.component';
import { TransactionComponent } from './transaction/transaction.component';
import { FooterComponent } from './footer/footer.component';
import { ChartsComponent } from './charts/charts.component';
let routes : Routes = [
  {path : "",component:LoginComponent},
  {path : "login/:userId",component:LoginComponent},
  {path:"success/:userId", component:AccountlistComponent},
  {path:"transactions/:userId", component:TransactionComponent},
  {path: "bar-chart",component:ChartsComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AccountlistComponent,
    TransactionComponent,
    FooterComponent,
    ChartsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ChartsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
