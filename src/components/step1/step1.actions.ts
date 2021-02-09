import { Action } from "../../../store/model";

export const DETERMINATE_LOAN_RATE = "[Step1] Determinate Loan Rate";

export class DeterminateLoanRate implements Action {
  readonly type = DETERMINATE_LOAN_RATE;

  constructor(
    public payload: {
      creditPurpose: string;
      comments: string;
      loanAmount: string;
      duration: string;
    }
  ) {
    console.log(payload.duration, "payload duration in class step1");
  }
}

export type Step1Actions = DeterminateLoanRate;
