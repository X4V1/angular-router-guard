import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CoreComponent} from './core.component';
import {RejectionGuard} from './rejection-guard';

const routes: Routes = [
  { path: '', component: CoreComponent, children: [
      { path: '', loadChildren: () => import('src/app/greeter/greeter.module').then(m => m.GreeterModule) },
      {
        path        : 'overview',
        loadChildren: () => import('src/app/overview/overview.module').then(m => m.OverviewModule),
        canActivate : [ RejectionGuard ]
      }
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
