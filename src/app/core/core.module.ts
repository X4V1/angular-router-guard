import {NgModule} from '@angular/core';
import {CoreComponent} from './core.component';
import {CoreRoutingModule} from './core-routing.module';
import {EffectsModule} from '@ngrx/effects';
import {CoreEffects} from './core.effects';
import {RejectionGuard} from './rejection-guard';

@NgModule({
  imports: [
    CoreRoutingModule,
    EffectsModule.forFeature([CoreEffects])
  ],
  exports: [],
  declarations: [CoreComponent],
  providers: [RejectionGuard],
})
export class CoreModule {

  constructor() {
    console.log('Core Module Constructor');
  }
}
