import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { SomeSubpageComponent } from './components/some-subpage/some-subpage.component';
import {AppRoutingModule} from "./routing.module";
import {LoginComponent} from "./components/login/login.component";
import {MenuComponent} from "./components/menu/menu.component";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    SomeSubpageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
