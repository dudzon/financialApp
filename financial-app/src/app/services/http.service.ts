import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Step2State } from '@app/step2/models/step2State';
import { Step3State } from '@app/step3/models/step3State';
import { Step4State } from '@app/step4/models/step4State';
import { Observable } from 'rxjs';
import { Step1State } from '../step1/models/step1State';

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

  postStep1Data(data: Step1State): Observable<Step1State> {
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

  postStep2Data(data: Step2State): Observable<Step2State> {
    return this.http.post<Step2State>(
      'http://localhost:3000/api/step2',
      {
        applicant: data.applicant,
        maritalStatus: data.maritalStatus,
        sameHouseholdStatus: data.sameHouseholdStatus,
      },
      httpOptions
    );
  }

  postStep3Data(data: Step3State): Observable<Step3State> {
    return this.http.post<Step3State>(
      'http://localhost:3000/api/step3',
      {
        applicantTitle: data.applicantTitle,
        partnerTitle: data.partnerTitle,
        applicantFirstName: data.applicantFirstName,
        applicantLastName: data.applicantLastName,
        partnerFirstName: data.partnerFirstName,
        partnerLastName: data.partnerLastName,
      },
      httpOptions
    );
  }

  postStep4Data(data: Step4State): Observable<Step4State> {
    return this.http.post<Step4State>(
      'http://localhost:3000/api/step4',
      {
        dateOfBirth: data.dateOfBirth,
        nationality: data.nationality,
        residence: data.residence,
        residentPeriod: data.residentPeriod,
      },
      httpOptions
    );
  }
}
