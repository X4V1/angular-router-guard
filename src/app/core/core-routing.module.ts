import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CoreComponent} from './core.component';

const routes: Routes = [
  { path: '', component: CoreComponent, children: [
      {
        path        : 'overview',
        loadChildren: () => import('src/app/overview/overview.module').then(m => m.OverviewModule)
      }
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
