import { Action ,createAction, props } from '@ngrx/store';

export const saveObjects = createAction(
    '[List] SaveObjects',
    props<{ items : Object[] }>()
);
