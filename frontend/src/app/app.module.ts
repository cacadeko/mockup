import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';


/**
 * Search module
 */

import { SearchComponent } from './search/search.component';
import { SearchRoutingModule } from './search/search-routing.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent
  ],
  imports: [
    MatCardModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    FormsModule, 
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    SearchRoutingModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
