import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultLayoutComponent } from '../Common/Components/default-layout/default-layout.component';
import { PageNotFoundComponent } from '../Common/Components/page-not-found/page-not-found.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { PatientRegistrationComponent } from './Components/patient-registration/patient-registration.component';

const routes: Routes = [{
  path:'',
  component:DefaultLayoutComponent,
  children:[
    {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'PatientRegistration',
    component:PatientRegistrationComponent
  },{
    path:'',
    redirectTo:'dashboard',
    pathMatch:'full'
  },
  {
    path:'**',
    component:PageNotFoundComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReceptionRoutingModule { }
