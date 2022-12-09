import {Injectable} from '@angular/core';
import {HttpClient, HttpHandler} from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private http: HttpClient) {
  }

  getProducts(query: string) {
    return this.http.get('http://localhost:8080/api/search?value=' + query);
  }
}
