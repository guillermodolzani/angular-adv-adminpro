import { Component, Input,  } from '@angular/core';
import { MultiDataSet, Label,Color } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {
  @Input() title: string='Sin titulo'



  @Input('labels') doughnutChartLabels: Label[] = [ 'Label1', 'Label2', 'Label3'  ];
  @Input('data') doughnutChartData: MultiDataSet = 
    [
      [ 350, 450, 100 ] ,
      // [ 50, 150, 120 ] ,
      // [ 250, 130, 70 ] ,
    ]
  
  // public doughnutChartType: ChartType = 'doughnut';
  public colors:Color[]=[
    {backgroundColor: ['#9E120E','#FF5800','#FFB414']}
  ]

}
