import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'
import { HttpClient } from '@angular/common/http';
import { Transaction } from './transaction';
import { transition } from '@angular/animations';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  constructor(
    private httpClient: HttpClient,
 private _activatedRoute : ActivatedRoute 
  ) {
 }
 transaction: Transaction[] | undefined;
  userId:number = 0;
  total:number | undefined;
  ngOnInit(): void {
    this._activatedRoute.params.subscribe((key : Params) => this.userId = key.userId);
    this.getTransaction(this.userId);
  }
  getTransaction(userId:number){
    this.httpClient.get<any>(`http://localhost:8080//transaction/${this.userId}`).subscribe(
      response => {
        console.log(response);
        this.transaction = response;
        this.total = 45000;
      }

    )
  }
}
