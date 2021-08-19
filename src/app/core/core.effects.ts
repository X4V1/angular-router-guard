import {Actions, createEffect} from '@ngrx/effects';
import {of} from 'rxjs';
import {tap} from 'rxjs/operators';
import {Injectable} from '@angular/core';

@Injectable()
export class CoreEffects {

  constructor(private actions$: Actions) {
  }

  log$ = createEffect(() => of(true).pipe(
    tap(() => {
      console.log('Core Effect Init');
    })
  ), {dispatch: false});
}
