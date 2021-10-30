import { Component,OnInit } from '@angular/core';
import * as $ from 'jquery';
import { SweetAlertOptions } from 'sweetalert2';
@Component({
  selector: 'app-patient-search',
  templateUrl: './patient-search.component.html',
  styleUrls: ['./patient-search.component.css']
})
export class PatientSearchComponent implements OnInit {
  public data = [
    {name: 'test', email: 'test@gmail.com', website:'test.com'},
    {name: 'test', email: 'test@gmail.com', website:'test.com'},
    {name: 'test', email: 'test@gmail.com', website:'test.com'},
    {name: 'test', email: 'test@gmail.com', website:'test.com'},
];
 
  title = 'angulardatatables';
  dtOptions: any = {};
  alertOpt:SweetAlertOptions = {};
  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 3,
      processing: true,
      // dom: 'Bfrtip',
      //   buttons: [
      //       'copy', 'csv', 'excel', 'print'
      //   ]
    };
    this.alertOpt = {
      title: 'Success!',
      text: 'Saved successfuly',
      toast: false,
      allowOutsideClick: false
    };
}

sample(d:any){
  console.log(d);
}


}
