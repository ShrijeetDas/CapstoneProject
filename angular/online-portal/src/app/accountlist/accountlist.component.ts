import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'
import { UserService } from '../user.service';
import{ Router } from '@angular/router';

@Component({
  selector: 'app-accountlist',
  templateUrl: './accountlist.component.html',
  styleUrls: ['./accountlist.component.css']
})
export class AccountlistComponent implements OnInit {

  userId: number=undefined;
  public account: Account[];
  accountService: any;
  plan_name=[];
  bal=[];
  public barChartOptions = {
    responsive : true
  };
  public barChartLabels = this.plan_name;
  public barChartType='pie';
  public barChartLegend = true;

  public barChartData = [
   { data: this.bal, label: 'balance'}
  ];
  
  constructor(
    private router:Router,
    private httpClient: HttpClient,
    private _service : UserService,private _activatedRoute : ActivatedRoute) { }
  //constructor(private _service : UsersService){}
  ngOnInit(): void{
    this._activatedRoute.params.subscribe((key : Params) => this.userId = key.userId);
    this.getAccount(this.userId);

  }
  
  getAccount(userId:number){
    this.httpClient.get<any>(`http://localhost:8080/listOfAccount/${this.userId}`).subscribe(
      response => {
        console.log(response);
        this.account = response;
        this.account.forEach(x => {
          this.plan_name.push(x.plan_name);
          this.bal.push(x.acc_bal);
        });
      }
    )
  }
  }

