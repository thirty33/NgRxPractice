import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import * as Listboard from '../store/list/list.reducer';

@NgModule({
	imports: [
			StoreModule.forFeature('list', Listboard.reducer)
	],
})

export class ListBoardModule {}