import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  url = environment.baseApiUrl

  constructor(private http: HttpClient) { }

  search(name: string, doc: number): Observable<any>{
    const search = { name:name, doc:doc};
    return this.http.get<any>(this.url+"?search="+ encodeURIComponent(JSON.stringify(search)));
  }

}
