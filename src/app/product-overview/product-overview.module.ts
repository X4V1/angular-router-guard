import {NgModule} from '@angular/core';

import {ProductOverviewRoutingModule} from './product-overview-routing.module';
import {ProductOverviewComponent} from './product-overview.component';

@NgModule({
  imports: [ProductOverviewRoutingModule],
  exports: [],
  declarations: [ProductOverviewComponent],
  providers: [],
})
export class ProductOverviewModule {

  constructor() {
    console.log('Product Overview Constructor');
  }
}
