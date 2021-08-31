import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {delay, map, startWith} from 'rxjs/operators';
import {State} from './core.reducer';

@Injectable()
export class RejectionGuard implements CanActivate {


  constructor(private store: Store<State>) {
  }

  canActivate(): Observable<boolean> {
    return this.store.pipe(
      startWith(null),
      delay(2000),
      map(() => false)
    );
  }
}
