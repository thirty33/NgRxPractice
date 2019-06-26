import { createAction, props } from '@ngrx/store';

export const saveObjects = createAction(
    '[List] SaveObjects',
    props<{ item : number }>()
);