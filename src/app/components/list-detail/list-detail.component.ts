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
  current_item: Object;

	constructor(private route: ActivatedRoute,
    private _router: Router,
    private store: Store<AppState>) {}

  ngOnInit() {
    this.item_id = this.route.snapshot.paramMap.get('id');
    this.store.pipe(select(selectItemById(+this.item_id)))
      .subscribe(item => {
        console.log("enter in suscribe");
        if(item) {
          this.current_item = item;
          console.log('this is current item', item);
        }
      });
  }
}