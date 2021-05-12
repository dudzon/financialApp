import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  postLoginData(data: any): Observable<any> {
    console.log(data, 'from post Login');
    return this.http.post<any>(
      'http://localhost:3000/api/login',
      {
        username: data.Username,
        password: data.Password,
        // isAuthenticated: data.isAuthenticated,
      },
      httpOptions
    );
  }
}
