import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {GreeterComponent} from './greeter.component';

const routes: Routes = [
  {
    path: '',
    component: GreeterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GreeterRoutingModule {
}
