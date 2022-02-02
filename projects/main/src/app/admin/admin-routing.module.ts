import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
      // {
      //   path: 'basic-ui',
      //   loadChildren: () =>
      //     import('./basic-ui/basic-ui.module').then((m) => m.BasicUiModule),
      // },
      // {
      //   path: 'charts',
      //   loadChildren: () =>
      //     import('./charts/charts.module').then((m) => m.ChartsDemoModule),
      // },
      // {
      //   path: 'forms',
      //   loadChildren: () =>
      //     import('./forms/form.module').then((m) => m.FormModule),
      // },
      // {
      //   path: 'tables',
      //   loadChildren: () =>
      //     import('./tables/tables.module').then((m) => m.TablesModule),
      // },
      // {
      //   path: 'icons',
      //   loadChildren: () =>
      //     import('./icons/icons.module').then((m) => m.IconsModule),
      // },
      // {
      //   path: 'user-pages',
      //   loadChildren: () =>
      //     import('./user-pages/user-pages.module').then(
      //       (m) => m.UserPagesModule
      //     ),
      // },
      // {
      //   path: 'error-pages',
      //   loadChildren: () =>
      //     import('./error-pages/error-pages.module').then(
      //       (m) => m.ErrorPagesModule
      //     ),
      // },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
