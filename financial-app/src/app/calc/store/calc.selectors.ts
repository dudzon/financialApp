import { AppState } from '@app/store/app.reducer';

export const selectMinRate = (state: AppState) => state.calc.resultMin;
export const selectMaxRate = (state: AppState) => state.calc.resultMax;
