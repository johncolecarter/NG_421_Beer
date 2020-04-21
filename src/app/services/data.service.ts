import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { IBeer } from '../interfaces/ibeer';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private apiService: ApiService) { }

  async getBeers() {
    return await this.apiService.get();
  }

  async save(count: number) {
    const data = await this.apiService.getCount('?per_page=' + count);

    // this.count++;

    return data;
  }
}
