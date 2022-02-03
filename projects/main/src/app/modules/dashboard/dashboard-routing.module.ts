import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../../shared/layout/layout.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '', /** default */
    component: LayoutComponent,
    children:[
      {
        path:'',
        component: DashboardComponent
      } 

    ]
  }, 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
