import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IBeer } from '../interfaces/ibeer';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private BEER_URL = 'https://api.punkapi.com/v2/beers';

  constructor(private httpClient: HttpClient) { }

  async get(): Promise<IBeer[]> {
    return await this.httpClient.get<IBeer[]>(this.BEER_URL).toPromise();
  }

  async getCount(path) {
    return await this.httpClient.get<IBeer[]>(this.BEER_URL + path).toPromise();
  }
}
