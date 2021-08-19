import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductOverviewComponent} from './product-overview.component';

const routes: Routes = [
  { path: '', component: ProductOverviewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductOverviewRoutingModule { }
