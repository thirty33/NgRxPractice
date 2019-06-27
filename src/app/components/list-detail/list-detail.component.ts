import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import { increment, decrement, reset } from '../../store/counter/counter.actions';
import { saveObjects } from '../../store/list/list.actions';
import {AppState} from '../../store/state/app-state';
import {selectAllItems, selectItemById} from '../../store/selectors/items.selectors'; 

@Component({
  selector: 'app-list-detail',
  templateUrl: './list-detail.component.html',
  styleUrls: ['./list-detail.component.css']
})

export class ListDetailComponent implements OnInit {
  item_id: any;
  items: Object[] = [];
  current_item: Object;
  // objects$: Observable<Object[]> = this.store.select(state => state.list);
  objects$: Observable<Object[]>;
  // objects$: Array<Object>;
  count$: Observable<number>;

	constructor(private route: ActivatedRoute,
    private _router: Router,
    private store: Store<AppState>) {}

  ngOnInit() {
    this.item_id = this.route.snapshot.paramMap.get('id');
    // this.store.pipe(select(selectAllItems))
    //   .subscribe(res => this.items = Object.values(res));
    // console.log('selector implementation', this.items);
    this.store.pipe(select(selectItemById(this.item_id)))
      .subscribe(item => this.current_item = item);
    //   .subscribe(item => this.current_item = Object.values(item));
    console.log('this is current item', this.current_item);
  }
}