import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgChartsModule } from 'ng2-charts';
import { ChartjsComponent } from './chartjs/chartjs.component';
import { ChartistModule } from 'ng-chartist';
import { ChartistComponent } from './chartist/chartist.component';

const routes: Routes = [
  { path: 'chartjs', component: ChartjsComponent },
  { path: 'chartist', component: ChartistComponent }
]

@NgModule({
  declarations: [ChartjsComponent, ChartistComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ChartistModule,
    NgChartsModule
  ]
})
export class ChartsDemoModule { }
