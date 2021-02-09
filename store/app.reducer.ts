import * as Store from "./store";
// import * as Login from "../src/components/login/login.reducer";
// import * as Calc from "../src/components/calc/calc.reducer";
// import * as Step1 from "../src/components/step1/step1.reducer";
import * as AppActions from "./app.actions";
import * as AppState from "./appStore";

// export const appReducer = Store.combineReducers({
//   login: Login.loginReducer,
//   calc: Calc.calcReducer,
//   step1: Step1.step1Reducer,
// });

const RATE = {
  minimumRate: 5.67,
  maximumRate: 9.8,
};

export const appReducer = function (
  state = AppState.AppState,
  action: AppActions.AppActions
) {
  switch (action.type) {
    case AppActions.LOGIN:
      console.log("jestem w loginRedcuer");
      return {
        ...state,
        user: action.payload.user,
        password: action.payload.password,
      };
    case AppActions.AUTH:
      return {
        ...state,
        isAuthenticated: action.payload.isAuthenticated,
      };
    case AppActions.CALCULATE_LOAN_EXAMPLE:
      return {
        ...state,
        creditExampleAmount: action.payload.creditExampleAmount,
        creditExampleDuration: action.payload.creditExampleDuration,
        monthlyRateMin: Math.round(action.payload.resultMin),
        monthlyRateMax: Math.round(action.payload.resultMax),
      };
    case AppActions.DETERMINATE_LOAN_RATE:
      return {
        ...state,
        creditPurpose: action.payload.creditPurpose,
        comments: action.payload.comments,
        loanAmount: action.payload.loanAmount,
        loanDuration: action.payload.loanDuration,
      };
    case AppActions.APPLICANT_DATA:
      return {
        ...state,
        applicant: action.payload.applicant,
        maritalStatus: action.payload.maritalStatus,
        sameHouseholdStatus: action.payload.sameHouseholdStatus,
      };
    case AppActions.APPLICANT_PERSONAL_DATA:
      return {
        ...state,
        applicantTitle: action.payload.applicantTitle,
        partnerTitle: action.payload.partnerTitle,
        applicantFirstName: action.payload.applicantFirstName,
        applicantLastName: action.payload.applicantLastName,
        partnerFirstName: action.payload.partnerFirstName,
        partnerLastName: action.payload.partnerLastName,
      };
    case AppActions.APPLICANT_ADDITIONAL_DATA:
      return {
        ...state,
        dateOfBirth: action.payload.dateOfBirth,
        nationality: action.payload.nationality,
        residence: action.payload.residence,
        residentPeriod: action.payload.residentPeriod,
      };
  }
};
