import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import{Router} from '@angular/router'

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent {
  userId: number = undefined;
  password: String = "";
  constructor(private _service : UserService, private _router : Router){}

  handleFormValues(formValues : any){
    this._service.authenticate(formValues.userId,formValues.password)
    .subscribe(response =>{
      console.log(response);
      if(response.id != undefined){
        this._router.navigate(["success",formValues.userId]);
      }
      })
  }
}