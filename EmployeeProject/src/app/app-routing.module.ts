import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartListComponent } from './depart-list/depart-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { DepartmentContactComponent } from './department-contact/department-contact.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';

const routes: Routes = [
  {path:'',redirectTo:'/department',pathMatch:'full'},
  {path:'department',component:DepartListComponent},
  {
    path:'department/:id',
    component:DepartmentDetailsComponent,
    children:[
      {path:'overview',component:DepartmentOverviewComponent},
      {path:'contact',component:DepartmentContactComponent}
    ]
  },
  {path:'employee',component:EmployeeListComponent},
  {path:"**",component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[DepartListComponent,EmployeeListComponent,PagenotfoundComponent,DepartmentDetailsComponent,
  DepartmentOverviewComponent,DepartmentContactComponent]