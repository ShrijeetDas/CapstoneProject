import{ Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AccountService {

    constructor(private http: HttpClient){}

    getAccount(accId: number): Observable<Account[]>{
        let uri = 'http://localhost:8080/listOfAccount/${id}';
        return this.http.get<Account[]>(uri);
      }
}