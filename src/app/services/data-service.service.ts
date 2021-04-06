import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';


//create http options
//
const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
}

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  public Data: any;

  private Url: string = environment.api;
  // we will create api later
  //now it's happy
  //

  //fill to get access
  constructor(private http:HttpClient, private router:Router) { }
}
