import {ItemsState} from '../state/items-state';
import {AddItemsActionTypes, ItemsAction} from '../actions/items-state.actions';


const initialItemsState : ItemsState = {
    items: []
};

export function itemsActionReducer(state: ItemsState = initialItemsState, action:ItemsAction) : ItemsState {
	switch (action.type) {
		case AddItemsActionTypes.ADD:
			state.items = {...action.payload};
		return {
			items: state.items
		}
	}
}
