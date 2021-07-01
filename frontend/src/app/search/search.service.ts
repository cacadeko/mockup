import { Injectable } from '@angular/core';
import { Observable, of, Subscription } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  url = environment.baseApiUrl

  constructor(private http: HttpClient) { }

  // search(value: string): Observable<any>{
  //   const search = { farmer:value};
  //   return this.http.get<any>(this.url+"?search="+ encodeURIComponent(JSON.stringify(search)));
  // }

  opts = [];

  getData() {
    return this.opts.length ?
      of(this.opts) :
      this.http.get<any>(this.url+'?search').pipe(tap(data => this.opts = data))
  }

}

