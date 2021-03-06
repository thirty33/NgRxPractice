import { Component, OnInit } from '@angular/core';
import {InformationService} from '../../services/information.service'; 
import { from } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { saveObjects } from '../../store/list/list.actions';
import {AddItemsAction} from '../../store/actions/items-state.actions';
import {AppState} from '../../store/state/app-state';

@Component({
  selector: 'app-payment-history',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
	response:Object[];
	tableHeaders: Object[];
  constructor(private informationService : InformationService,
    private store : Store<AppState>) { }
    
  ngOnInit() {
    this.getPaymentItems();
  }

  getPaymentItems() {
    this.informationService.getPaymentItems()
      .subscribe(resp => {
				this.response = resp['data'];
				this.store.dispatch(new AddItemsAction(this.response));
			});
  }
}