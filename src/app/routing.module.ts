import { Routes, RouterModule } from '@angular/router';
import {SomeSubpageComponent} from "./components/some-subpage/some-subpage.component";
import {NgModule} from "@angular/core";
import {LoginComponent} from "./components/login/login.component";

const routes: Routes = [
  { path: "", redirectTo: "/", pathMatch: "full"},
  { path: "some-subpage", component: SomeSubpageComponent },
  { path: "login", component: LoginComponent },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
