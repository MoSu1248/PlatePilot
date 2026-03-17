import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class Api {
  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  get(endpoint: string, params: any = {}) {
    params.apiKey = environment.spoonacularApiKey;

    let httpParams = new HttpParams();

    Object.keys(params).forEach((key) => {
      httpParams = httpParams.set(key, params[key]);
    });

    return this.http.get(`${this.baseUrl}${endpoint}`, {
      params: httpParams,
    });
  }
}
