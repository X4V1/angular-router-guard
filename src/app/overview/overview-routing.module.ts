import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OverviewComponent} from './overview.component';

const routes: Routes = [
  { path: '', component: OverviewComponent, children: [
      {
        path        : 'product-overview',
        loadChildren: () => import('src/app/product-overview/product-overview.module').then(m => m.ProductOverviewModule)
      }
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OverviewRoutingModule { }
