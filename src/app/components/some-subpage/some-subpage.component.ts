import { Component, OnInit } from '@angular/core';
import {ISomeDataModel} from "./ISomeDataModel";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Component({
  selector: 'app-some-subpage',
  templateUrl: './some-subpage.component.html',
  styleUrls: ['./some-subpage.component.css']
})
export class SomeSubpageComponent implements OnInit {
  jwt: string = '';
  someDataList?: Array<ISomeDataModel> = [];


  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.jwt = history.state.jwt.jwt;
    console.log(this.jwt)
    this.getAllSomeDataList();
  }

  getAllSomeDataList(){
    this.http.get<ISomeDataModel[]>("http://localhost:8080/data/getSomeData", {headers: {
        'Authorization': 'Bearer ' + this.jwt
      }})
      .subscribe(data => {
        console.log(data);
        this.someDataList = data;
      });
  }

}
