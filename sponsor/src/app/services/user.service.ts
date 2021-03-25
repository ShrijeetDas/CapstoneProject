import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    users : any = []
    constructor(private _http : HttpClient) {}
  
    authenticate(userId: number, password : String) : Observable<any>{
      let uri = `http://localhost:8082/login/objectKey/${userId}/${password}`;
      return this._http.get(uri,{})
    }
  
    Register(name: String, password : String, mob_no : number) : Observable<any>{
      let uri = 'http://localhost:8082/user';
      return this._http.post(uri,{name,password,mob_no});
    }

    getAccount(accId: number): Observable<Account[]>{
      let uri = `http://localhost:8082/listOfAccount/${accId}`;
      return this._http.get<Account[]>(uri);
    }
    login(userId: number, password: String) :boolean {
      if((userId==1000) && password =='angular'){
        return true;
      }
      else{
        return false;
      }
     }
  }