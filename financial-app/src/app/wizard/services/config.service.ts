import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  constructor(private http: HttpClient) {}

  private getConfigNameSubject = new BehaviorSubject<string | null>('');
  getId$: Observable<string | null> = this.getConfigNameSubject.asObservable();
  getConfig(): Observable<any> {
    return this.http.get('http://localhost:3000/api');
  }

  updateConfigNameSubject(name: string): void {
    this.getConfigNameSubject.next(name);
  }

  getConfigNameSubjectValue(): string | null {
    return this.getConfigNameSubject.value;
  }
}
