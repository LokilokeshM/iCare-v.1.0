import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultLayoutComponent } from '../Common/Components/default-layout/default-layout.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';

const routes: Routes = [{
  path:'',
  component:DefaultLayoutComponent,
  children:[{
    path:'',
    component:DashboardComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReceptionRoutingModule { }
