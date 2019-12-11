import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private username='sammymwangangi';

  constructor(private _http: Http) { 
    console.log('Github service started');
    
  }
  getUser() {
    return this._http.get('https://api.github.com/users/'+this.username)
    .pipe(map(res => res.json()));
  }
  
  getRepos() {
    return this._http.get('https://api.github.com/users/'+this.username+'/repos')
    .pipe(map(res => res.json()));
  }
}
