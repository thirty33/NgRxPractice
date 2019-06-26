import { Component, OnInit } from '@angular/core';
import {InformationService} from '../../services/information.service'; 
import { from } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { saveObjects } from '../../store/list/list.actions';

@Component({
  selector: 'app-payment-history',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private informationService : InformationService,
    private store : Store<any>) { }

  response:Object[];
  tableHeaders: Object[];
  ngOnInit() {
    this.getPaymentItems();
  }

  getPaymentItems() {
    this.informationService.getPaymentItems()
      .subscribe(resp =>  {
        this.response = resp['data'];
        this.store.dispatch(saveObjects({item : 4}));
    });
  }
}