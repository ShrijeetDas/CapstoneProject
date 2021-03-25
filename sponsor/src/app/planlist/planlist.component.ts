import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'
import { UserService } from '../services/user.service';
import{ Router } from '@angular/router';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-planlist',
  templateUrl: './planlist.component.html',
  styleUrls: ['./planlist.component.css']
})
export class PlanlistComponent implements OnInit {
  userId: number=undefined;
  public account: Account[];
  accountService: any;
  plan_name=[];
  currentValue=[];
  constructor( private router:Router,
    private httpClient: HttpClient,
    private _service : UserService,private _activatedRoute : ActivatedRoute) { }

  ngOnInit():void{
    this._activatedRoute.params.subscribe((key : Params) => this.userId = key.userId);
    this.getAccount(this.userId);

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
  }