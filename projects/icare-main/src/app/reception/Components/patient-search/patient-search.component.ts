import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TabsetComponent } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'app-patient-search',
  templateUrl: './patient-search.component.html',
  styleUrls: ['./patient-search.component.css']
})
export class PatientSearchComponent implements OnInit {
  @ViewChild('registrationTabs', { static: false })registrationTabs!: TabsetComponent;
  dob:Date=new Date();
  // opNo:TextBoxAutoComplete={
  //   placeholder:'Enter the Country Name',
  //   keyword:'name',
  //   data:['Albania', 'Andorra', 'Armenia', 'Austria', 'Azerbaijan', 'Belarus',
  //   'Belgium', 'Bosnia & Herzegovina', 'Bulgaria', 'Croatia', 'Cyprus',
  //   'Czech Republic', 'Denmark', 'Estonia', 'Finland', 'France', 'Georgia',
  //   'Germany', 'Greece', 'Hungary', 'Iceland', 'India', 'Ireland', 'Italy', 'Kosovo',
  //   'Latvia', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macedonia', 'Malta',
  //   'Moldova', 'Monaco', 'Montenegro', 'Netherlands', 'Norway', 'Poland',
  //   'Portugal', 'Romania', 'Russia', 'San Marino', 'Serbia', 'Slovakia', 'Slovenia',
  //   'Spain', 'Sweden', 'Switzerland', 'Turkey', 'Ukraine', 'United Kingdom', 'Vatican City']
  //   }
  addEvent(event:any) {
      this.dob =event.target.value;
      console.log(this.dob);
  }
  patientForm:FormGroup = new FormGroup({
    
  })
  

  constructor() {
  }
  
  ngOnInit() {
  }


}
