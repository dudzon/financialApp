import { Action } from "./model";

export const LOGIN = "[Login] Login";
export const AUTH = "[Login] Auth";
export const CALCULATE_LOAN_EXAMPLE = "[Calc] Calculate Loan Example";
export const DETERMINATE_LOAN_RATE = "[Step1] Determinate Loan Rate";
export const APPLICANT_DATA = "[Step2] Applicant Data";
export const APPLICANT_PERSONAL_DATA = "[Step3] Applicant Personal Data";
export const APPLICANT_ADDITIONAL_DATA = "[Step4] Applicant Additional Data";

export class LoginSuccess implements Action {
  readonly type = LOGIN;

  constructor(
    public payload: { user: string; password: string; isAuthenticated: boolean }
  ) {}
}

export class Auth implements Action {
  readonly type = AUTH;
  constructor(public payload: { isAuthenticated: boolean }) {}
}

export class CalculateLoanExample implements Action {
  readonly type = CALCULATE_LOAN_EXAMPLE;

  constructor(
    public payload: {
      creditExampleAmount: number;
      creditExampleDuration: number;
      resultMin: number;
      resultMax: number;
    }
  ) {}
}

export class DeterminateLoanRate implements Action {
  readonly type = DETERMINATE_LOAN_RATE;

  constructor(
    public payload: {
      creditPurpose: string;
      comments: string;
      loanAmount: number;
      loanDuration: number;
    }
  ) {}
}

export class ApplicantData implements Action {
  readonly type = APPLICANT_DATA;

  constructor(
    public payload: {
      applicant: string;
      maritalStatus: string;
      sameHouseholdStatus: string;
    }
  ) {}
}

export class ApplicantPersonalData implements Action {
  readonly type = APPLICANT_PERSONAL_DATA;

  constructor(
    public payload: {
      applicantTitle: string;
      partnerTitle: string;
      applicantFirstName: string;
      applicantLastName: string;
      partnerFirstName: string;
      partnerLastName: string;
    }
  ) {}
}

export class ApplicantAdditionalData implements Action {
  readonly type = APPLICANT_ADDITIONAL_DATA;

  constructor(
    public payload: {
      dateOfBirth: string;
      nationality: string;
      residence: string;
      residentPeriod: string;
    }
  ) {}
}

export type AppActions =
  | LoginSuccess
  | Auth
  | CalculateLoanExample
  | DeterminateLoanRate
  | ApplicantData
  | ApplicantPersonalData
  | ApplicantAdditionalData;
