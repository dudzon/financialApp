import { Action } from "../../../store/model";

export const CALCULATE_LOAN_EXAMPLE = "[Calc] Calculate Loan Example";

export class CalculateLoanExample implements Action {
  readonly type = CALCULATE_LOAN_EXAMPLE;

  constructor(
    public payload: {
      amount: number;
      duration: number;
      resultMin: number;
      resultMax: number;
    }
  ) {
    console.log(payload.duration, "payload duration in class");
  }
}

export type CalcActions = CalculateLoanExample;
