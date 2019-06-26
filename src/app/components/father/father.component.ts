import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { reset } from '../../store/counter/counter.actions';


@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.css']
})

export class FatherComponent implements OnInit {
	count$: Observable<number>;
  constructor(private route: ActivatedRoute,
    private _router: Router,
    private store: Store<{count : number}>) {
        this.count$ = store.pipe(select('count'));
    }

  ngOnInit() {
  }

	reset() {
		this.store.dispatch(reset());
	}
}