import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'
import { UserService } from '../services/user.service';
import{ Router } from '@angular/router';
import { HttpClient} from '@angular/common/http';
import { PieSeriesService, AccumulationLegendService, AccumulationTooltipService, AccumulationAnnotationService,
  AccumulationDataLabelService } from '@syncfusion/ej2-angular-charts';

@Component({
  selector: 'app-accountbalance',
  templateUrl: './accountbalance.component.html',
  styleUrls: ['./accountbalance.component.css'],
  providers:[PieSeriesService,AccumulationLegendService, AccumulationTooltipService, AccumulationAnnotationService,
    AccumulationDataLabelService]
})
export class AccountbalanceComponent implements OnInit {
  userId: number=undefined;
  public account: Account[];
  accountService: any;
  plan_name=[];
  currentValue=[];

  public piedata: Object[];
  public legendSettings: Object;
  public map: Object = 'fill';
  public datalabel: Object;
  constructor( private router:Router,
    private httpClient: HttpClient,
    private _service : UserService,private _activatedRoute : ActivatedRoute) { }

  ngOnInit():void{
    this._activatedRoute.params.subscribe((key : Params) => this.userId = key.userId);
    this.getAccount(this.userId);
    this.datalabel = { visible: true, name: 'currentValue', position: 'Outside' };
    this.legendSettings = {
        visible: true,
        title: 'MONEY SOURCE', position: 'Right'
    };
  }
  
  getAccount(userId:number){
    this.httpClient.get<any>(`http://localhost:8082/listOfAccount/${this.userId}`).subscribe(
      response => {
        console.log(response);
        this.account = response;
        this.account.forEach(x => {
          this.plan_name.push(this.plan_name);
          this.currentValue.push(this.currentValue);
        });
      }
    )
  }
  next(userId:number){
        return this.router.navigate(['planlist',userId]);
  }

  }
  