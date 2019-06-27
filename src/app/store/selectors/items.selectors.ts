import {AppState} from '../state/app-state';
import {ItemsState} from '../state/items-state';
import { createSelector } from '@ngrx/store';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';


export const selectItems = createFeatureSelector<AppState, ItemsState>('itemsState');
export const selectItemsFromState = (state: AppState) => state.itemsState.items;

export const selectAllItems = createSelector(
	selectItems,
	(state : ItemsState) => {
		if(state) {
			return state.items;
		}
		else {
			return null;
		}
	}
);

export const selectItemById = (id) => createSelector(
	selectItemsFromState, 
	(items) =>  {
		if(items) {
			return items['payments'].find(item => {
				return item.id === id + 1;
			});
		}
		else {
			return [];
		}
});