import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import { increment, decrement, reset } from '../../store/counter/counter.actions';
import { saveObjects } from '../../store/list/list.actions';
import {AppState} from '../../store/state/app-state';

@Component({
  selector: 'app-list-detail',
  templateUrl: './list-detail.component.html',
  styleUrls: ['./list-detail.component.css']
})

export class ListDetailComponent implements OnInit {
  item_id: any;
  items: Object[] = [];
  // objects$: Observable<Object[]> = this.store.select(state => state.list);
  objects$: Observable<any>;
  // objects$: Array<Object>;
  count$: Observable<number>;

	constructor(private route: ActivatedRoute,
    private _router: Router,
    private store: Store<AppState>) {}

  ngOnInit() {
    this.item_id = this.route.snapshot.paramMap.get('id');
    this.store.pipe(select(state => state.itemsState))
    .subscribe(items => {
      console.log('entering in suscribe');
      if(items){
        console.log('this is items', items);
        console.log('current id', this.item_id);
        // console.log('this is currentItem', items[1]);
      }
    });
  }
}