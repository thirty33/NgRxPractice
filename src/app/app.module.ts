import { BrowserModule } from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import {ListBoardModule} from './modules/listboard.module' 
import {CountModule} from './modules/count.module' 


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FatherComponent} from './components/father/father.component'; 
import {ChildComponent} from './components/child/child.component'; 
import {ListComponent} from './components/list/list.component'; 
import {ListDetailComponent} from './components/list-detail/list-detail.component'; 
import { AppComponent } from './app.component';

const appRoutes: Routes = [
  { path: 'father', component: FatherComponent },
  { path: 'child',  component: ChildComponent },
  { path: 'list',  component: ListComponent },
  { path: 'list-detail/:id',  component: ListDetailComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    FatherComponent,
    ChildComponent,
    ListComponent,
    ListDetailComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    // StoreModule.forRoot({ count : counterReducer, list : fromScoreboard.reducer })
    // StoreModule.forRoot({ count : counterReducer })
    StoreModule.forRoot({}),
    ListBoardModule,
    CountModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
