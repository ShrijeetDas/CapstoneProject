import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountbalanceService {

  constructor(private http: HttpClient){}

  getAccount(accId: number): Observable<Account[]>{
      let uri = 'http://localhost:8082/listOfAccount/${id}';
      return this.http.get<Account[]>(uri);
    }
}
