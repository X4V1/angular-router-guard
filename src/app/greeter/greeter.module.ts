import { NgModule } from '@angular/core';

import {GreeterComponent} from './greeter.component';
import {GreeterRoutingModule} from './greeter-routing.module';


@NgModule({
  imports     : [
    GreeterRoutingModule,
  ],
  exports: [
  ],
  declarations: [GreeterComponent],
  providers   : [
  ],
})
export class GreeterModule {

}
