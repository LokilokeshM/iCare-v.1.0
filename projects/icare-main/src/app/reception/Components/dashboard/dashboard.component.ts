import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  keyword = 'name';
  public countries = [
    {
      id: 1,
      name: 'Albania',
    },
    {
      id: 2,
      name: 'Belgium',
    },
    {
      id: 3,
      name: 'Denmark',
    },
    {
      id: 4,
      name: 'Montenegro',
    },
    {
      id: 5,
      name: 'Turkey',
    },
    {
      id: 6,
      name: 'Ukraine',
    },
    {
      id: 7,
      name: 'Macedonia',
    },
    {
      id: 8,
      name: 'Slovenia',
    },
    {
      id: 9,
      name: 'Georgia',
    },
    {
      id: 10,
      name: 'India',
    },
    {
      id: 11,
      name: 'Russia',
    },
    {
      id: 12,
      name: 'Switzerland',
    }
  ];
  selectEvent(item:any) {
    console.log(item);
  }

  onChangeSearch(search: string) {
  }

  onFocused(e:any) {
  }

 
  public PatientVisitLable: string[] = ['Age(0-10)', 'Age(10-25)', 'Age(25-50)','Age(50-75)','Age(75-100)'];
  public PatientVisitData: number[] = [10, 50, 10, 10 ,10];
  public AppointmentStatusLable: string[] = ['Booked', 'Completed', 'Cancelled','Ongoing'];
  public AppointmentStatusData: number[] = [30, 50, 22, 20];
  public doughnutChartLabels: string[] = [this.dateForamt(new Date()), 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData: number[] = [350, 450, 100];
  chartOptions = {
    responsive: true
  };
  public doughnutChartColors: any[] = [{
      backgroundColor: [
         'rgba(110, 114, 20, 1)',
         'rgba(118, 183, 172, 1)',
         'rgba(142, 148, 97, 1)',
         'rgba(129, 78, 40, 1)'
         ]
    }]
    public doughnutChartColors1: any[] = [{
      backgroundColor: [
         'rgba(452, 200, 20, 1)',
         'rgba(178, 413, 172, 1)',
         'rgba(186, 458, 97, 1)',
         'rgba(134, 245, 40, 1)'
         ]
    }]
  dateForamt(date: Date) {
    return `${date.getFullYear()}-${date.getMonth() - 1}-${date.getDate()}\n ${date.getHours()}:${date.getMinutes()} `;
  }

  constructor() {
    
   }

  ngOnInit(): void {
  }

}
