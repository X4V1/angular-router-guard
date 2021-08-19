import {NgModule} from '@angular/core';

import {OverviewRoutingModule} from './overview-routing.module';
import {OverviewComponent} from './overview.component';

@NgModule({
  imports: [OverviewRoutingModule],
  exports: [],
  declarations: [OverviewComponent],
  providers: [],
})
export class OverviewModule {
  constructor() {
    console.log('Overview Module Constructor');
  }
}
