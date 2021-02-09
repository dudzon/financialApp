import * as Step1Actions from "./step1.actions";

interface State {
  creditPurpose: string;
  comments: string;
  loanAmount: string;
  duration: string;
}

export const initialState: State = {
  creditPurpose: "",
  comments: "",
  loanAmount: "",
  duration: "",
};

export const step1Reducer = function (
  state = initialState,
  action: Step1Actions.Step1Actions
) {
  switch (action.type) {
    case Step1Actions.DETERMINATE_LOAN_RATE:
      console.log("jestem w step1Redcuer");
      return {
        ...state,
        creditPurpose: action.payload.creditPurpose,
        comments: action.payload.comments,
        loanAmount: action.payload.loanAmount,
        duration: action.payload.duration,
      };
  }
};
