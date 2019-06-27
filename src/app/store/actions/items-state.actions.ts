import { Action ,createAction, props } from '@ngrx/store';

export namespace AddItemsActionTypes {
    export const ADD = '[Items] add';
    export const REMOVE = '[Items] remove';
}

export class AddItemsAction implements Action {
    readonly type = AddItemsActionTypes.ADD;
    public payload: Object[];

    constructor(public items: Object[]){
        this.payload = items;
    }
}

export type ItemsAction = AddItemsAction;