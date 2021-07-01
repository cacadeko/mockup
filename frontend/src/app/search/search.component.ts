import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';
import { FormControl } from '@angular/forms';
import { Observable, of, Subscription } from 'rxjs';
import { tap, startWith, debounceTime, distinctUntilChanged, switchMap, map } from 'rxjs/operators';

export interface User {
  farmer: string;
}


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  myControl = new FormControl();
  options = [];
  filteredOptions: Observable<any>;
  
  constructor(private src: SearchService) { 
    this.filteredOptions = this.myControl.valueChanges.pipe(
        startWith(''),
        debounceTime(400),
        distinctUntilChanged(),
        switchMap(val => {
          return this.filter(val || '')
        })
      )
  }

  ngOnInit() {

  }

    // Filter and return the values
    filter(val: string): Observable<any[]> {
      // Call the service whitch makes the http-request
      return this.src.getData()
        .pipe(
          map(response => response.filter(option => {
            return option.name.toLowerCase().indexOf(val.toLocaleLowerCase()) === 0
          }))
        )
    }


  //   this.filteredOptions = this.myControl.valueChanges
  //   .pipe(
  //     startWith(''),
  //     map(value => typeof value === 'string' ? value : value.farmer),
  //     map(farmer => farmer ? this._filter(farmer) : this.options.slice())
  //   );

  // }

  // displayFn(user: User): string {
  //   return user && user.farmer ? user.farmer : '';
  // }

  // private _filter(farmer: string): User[] {
  //   const filterValue = farmer.toLowerCase();

  //   return this.options.filter(option => option.farmer.toLowerCase().includes(filterValue));
  }
