import { Action, createReducer, on } from '@ngrx/store';
import * as ListActions from './list.actions';

export interface State {
    list: any;
    item: number;
}

export const initialState: State = {
    list: null,
    item: 0,
};

const listReducer = createReducer(
    initialState,
    on(ListActions.saveObjects, state => ({ ...state, item: state.item + 1 })),
);

export function reducer(state: State | undefined, action: Action) {
    return listReducer(state,action)
}
