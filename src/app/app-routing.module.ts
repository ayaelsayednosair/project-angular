import { HomeComponent } from './home/home.component';
import { EditeComponent } from './edite/edite.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddempComponent } from './addemp/addemp.component';
import { EmployessComponent } from './employess/employess.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  { path: '', component: EmployessComponent},
  { path: 'addemp', component: AddempComponent},
  { path: 'edite/:id', component: EditeComponent},
  { path: 'view/:id', component: ViewComponent},




  { path: '**', component: HomeComponent},





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
