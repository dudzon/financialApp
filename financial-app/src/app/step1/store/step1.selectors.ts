import { AppState } from '@app/store/app.reducer';

export const selectCreditAmount = (state: AppState) =>
  state.calc.creditAmount as number;
export const selectCreditDuration = (state: AppState) =>
  state.calc.duration as number;
