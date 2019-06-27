import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { itemsActionReducer } from '../store/reducers/items-state.reducer';

@NgModule({
	imports: [
		StoreModule.forFeature('itemsState', itemsActionReducer)
	],
})

export class ItemsModule {}