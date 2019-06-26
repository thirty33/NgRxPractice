import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';


@Component({
  selector: 'app-list-detail',
  templateUrl: './list-detail.component.html',
  styleUrls: ['./list-detail.component.css']
})

export class ListDetailComponent implements OnInit {
  item_id: any;
  // objects$: Observable<Object[]> = this.store.select(state => state.list);
  objects$: Observable<any>;
  // objects$: Array<Object>;
  count$: Observable<number>;

	constructor(private route: ActivatedRoute,
    private _router: Router,
    private store: Store<{count:number,list: any}>) {
      // this.objects$ = store.pipe(select('list'));
      // this.objects$ = this.store.select(state => state.list.list);
      console.log("those is objects", this.objects$);
      this.count$ = store.pipe(select('count'));
  }

  ngOnInit() {
		this.item_id = this.route.snapshot.paramMap.get('id');
  }
}