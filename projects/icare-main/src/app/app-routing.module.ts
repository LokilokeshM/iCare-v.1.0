import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Common/Components/login/login.component';
import { PageNotFoundComponent } from './Common/Components/page-not-found/page-not-found.component';

const routes: Routes = [
{
  path:'login',
  component:LoginComponent,
}, 
{
  path: 'Admin',
  loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
},
{
  path:'Doctor',
  loadChildren:() =>import('./doctor/doctor.module').then(m=>m.DoctorModule)
},
{
  path:'Reception',
  loadChildren:() =>import('./reception/reception.module').then(m=>m.ReceptionModule)
},
{
  path:'',
  redirectTo:'/login',
  pathMatch:'full'
},
{
  path:'**',
  component:PageNotFoundComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
