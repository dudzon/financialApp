import { AppState } from '@app/store/app.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CalcState } from '../models/calcState';

export const selectMinRate = (state: AppState) => state.calc;
export const selectMaxRate = (state: AppState) => state.calc;

export const getMinRate = createSelector(selectMinRate, (state: CalcState) => {
  return state.resultMin;
});

export const getMaxRate = createSelector(selectMinRate, (state: CalcState) => {
  return state.resultMax;
});
