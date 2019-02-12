import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TodolistComponent } from './todolist/todolist.component';
import { AutoInputWidthDirective } from './auto-input-width.directive';
import { MovieListComponent } from './movie-list/movie-list.component';
import { ListboxComponent } from './listbox/listbox.component';

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    AutoInputWidthDirective,
    MovieListComponent,
    ListboxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
