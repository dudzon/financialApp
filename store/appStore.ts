import * as Store from "./store";
import * as Reducer from "./app.reducer";
import * as Login from "../src/components/login/login.reducer";
import * as Calc from "../src/components/calc/calc.reducer";
import * as Step1 from "../src/components/step1/step1.reducer";

// const AppState = {
//   login: Login.initialState,
//   calc: Calc.initialState,
//   step1: Step1.initialState,
// };

export const AppState: any = {
  user: "",
  password: "",
  isAuthenticated: null,
  creditExampleAmount: 0,
  creditExampleDuration: 0,
  monthlyRateMin: null,
  monthlyRateMax: null,
  creditPurpose: "",
  comments: "",
  loanAmount: "",
  loanDuration: "",
  applicant: "",
  maritalStatus: "",
  sameHouseholdStatus: "",
  applicantTitle: "",
  partnerTitle: "",
  applicantFirstName: "",
  applicantLastName: "",
  partnerFirstName: "",
  partnerLastName: "",
  dateOfBirth: "",
  nationality: "",
  residence: "",
  residentPeriod: "",
};

export const appStore = Store.createStore(Reducer.appReducer, AppState);
