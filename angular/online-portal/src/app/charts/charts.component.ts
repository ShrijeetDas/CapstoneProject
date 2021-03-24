import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  userId:number = 0;

  public barChartOptions = {
    scaleShowVerticalLines:false,
    responsive : true
  };
  public barChartLabels = ['2006','2007','2008','2009','2010'];
  public barChartType='bar';
  public barChartLegend = true;

  public barChartData = [
   { data: [6, 7, 5, 8, 7], label: 'Interest Rate'}
  ];
  public barChartColors = [
    {backgroundColor : 'blue'}
  ]
  constructor(
    private httpClient: HttpClient,
 private _activatedRoute : ActivatedRoute 
  ) {
 }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe((key : Params) => this.userId = key.userId);
  }

}
