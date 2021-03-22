import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Step1State } from '../step1/models/step1State';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  // tslint:disable-next-line:typedef
  postStep1Data(data: Step1State) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.post<Step1State>(
      'http://localhost:3000/api/step1',
      {
        creditPurpose: data.creditPurpose,
        comments: data.comments,
        loanAmount: data.loanAmount,
        duration: data.duration,
      },
      httpOptions
    );
  }
}
