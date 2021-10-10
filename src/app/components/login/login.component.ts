import {Component, Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable, Subject} from "rxjs";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ErrorModalService {

  constructor() { }

  private errorSubject = new Subject<string>();

  //for components reacting to changes
  getErrorUpdates(){
    return this.errorSubject.asObservable();
  }

  //for invoking the changes
  pushError(message: string){
    this.errorSubject.next(message);
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  jwt = 'XDDDD';
  badLoginOrPasswordMessage = '';

  constructor(
    private http: HttpClient,
    private errorService: ErrorModalService,
    private router: Router) {
  }

  ngOnInit(): void {
  }

  someMethod(){
    this.http.post<string>("http://localhost:8080/login", {username: this.username, password: this.password})
      .subscribe(resp => {
        this.jwt = resp;
        this.goToComponent();
      }, (error: HttpErrorResponse) => {
        console.log(error);
        this.errorService.pushError(error.error);
        this.badLoginOrPassword();
      });
  }

  badLoginOrPassword(){
    this.badLoginOrPasswordMessage = "No coś złe te passy";
  }

  goToComponent(){
    this.router.navigate(['../some-subpage'], {state: {jwt: this.jwt}});
  }
}
