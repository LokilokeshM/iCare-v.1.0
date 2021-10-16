import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import { ReceptionRoutingModule } from './reception-routing.module';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { PatientRegistrationComponent } from './Components/patient-registration/patient-registration.component';
import { PatientSearchComponent } from './Components/patient-search/patient-search.component';
import { DataTablesModule } from 'angular-datatables';
import { HttpClientModule } from '@angular/common/http';
import { TabsModule } from 'ngx-bootstrap/tabs';


@NgModule({
  declarations: [
    DashboardComponent,
    PatientRegistrationComponent,
    PatientSearchComponent,
  ],
  imports: [
    CommonModule,
    ReceptionRoutingModule, 
    ChartsModule,
    DataTablesModule,
    HttpClientModule,
    TabsModule.forRoot()
  ]
})
export class ReceptionModule { }
