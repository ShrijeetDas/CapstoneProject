import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import {LoginComponent} from './login/login.component';
import { AccountbalanceComponent} from './accountbalance/accountbalance.component';
import { PlanlistComponent} from './planlist/planlist.component';
import { BreadcrumbsComponent} from './breadcrumbs/breadcrumbs.component';

const routes: Routes = [
  {path : "",component:LoginComponent},
  {path : "login/:userId",component:LoginComponent},
  {path:"success/:userId", component:AccountbalanceComponent},
  {path: "planlist/:userId", component: PlanlistComponent},
  {path: "breadcrumbs", component: BreadcrumbsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
