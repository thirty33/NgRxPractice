import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from '../../store/counter/counter.actions';
import { saveObjects } from '../../store/list/list.actions';
import {AppState} from '../../store/state/app-state';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})

export class ChildComponent implements OnInit {

  count$: Observable<number>;
  constructor(private route: ActivatedRoute,
    private _router: Router,
    private store: Store<AppState>) {
      // this.count$ = store.pipe(select('count'));
      this.store.pipe(select(state => state.itemsState))
        .subscribe(items => {
          if(items){
            console.log('this is items', items);
          }
        });
    }

  ngOnInit() {
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }

}