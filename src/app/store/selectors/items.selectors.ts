import {AppState} from '../state/app-state';
import {ItemsState} from '../state/items-state';
import { createSelector } from '@ngrx/store';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';


// export const getAllItems = (state: AppState) => state.itemsState;

// export const selectAllItems = createSelector(
//     getAllItems,
//     (state : ItemsState) => state.items
// );


export const selectItems = createFeatureSelector<AppState, ItemsState>('itemsState');
export const selectItemsFromState = (state: AppState) => state.itemsState.items;

export const selectAllItems = createSelector(
	selectItems,
	(state : ItemsState) => state.items
);

export const selectItemById = (id) => createSelector(
	selectItemsFromState, 
	(items) =>  items[id]
);