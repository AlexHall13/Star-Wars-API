import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Result } from './result';

@Injectable({
  providedIn: 'root'
})
export class StarwarsData {
  constructor(public http: HttpClient) { }

  resultsUrl = `https://swapi.co/api` 

  getResults(selection, find) {
    return this.http.get<Result[]>(`${this.resultsUrl}/${selection}/?search=${find}`)
  }
}
