import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultLayoutComponent } from '../Common/Components/default-layout/default-layout.component';
import { PageNotFoundComponent } from '../Common/Components/Error/page-not-found/page-not-found.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { PatientRegistrationComponent } from './Components/patient-registration/patient-registration.component';
import { PatientSearchComponent } from './Components/patient-search/patient-search.component';

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
  },{path:'PatientSearch',component:PatientSearchComponent},
  {
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
