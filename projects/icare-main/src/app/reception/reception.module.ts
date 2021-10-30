import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { ReceptionRoutingModule } from './reception-routing.module';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { PatientRegistrationComponent } from './Components/patient-registration/patient-registration.component';
import { PatientSearchComponent } from './Components/patient-search/patient-search.component';
import { HttpClientModule } from '@angular/common/http';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { DataTablesModule } from 'angular-datatables';
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
    HttpClientModule,MatTabsModule,
    DataTablesModule.forRoot(),
    TabsModule.forRoot(),
    SweetAlert2Module.forRoot()
  ]
})
export class ReceptionModule { }
