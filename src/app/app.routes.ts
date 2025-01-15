import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ParamsComponent } from './params/params.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "params/:params",
    component: ParamsComponent
  },
  {
    path: "not-found",
    component: NotFoundComponent
  },
  {
    path: "**",
    redirectTo: "not-found",
    pathMatch: "full"
  }
];
