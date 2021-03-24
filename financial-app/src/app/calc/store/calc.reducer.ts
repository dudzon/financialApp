import { Action, createReducer, on } from '@ngrx/store';
import { CalcState } from '../models/calcState';
import * as CalcActions from './calc.actions';

const initialState: CalcState = {
  creditAmount: 0,
  duration: 0,
  resultMin: 0,
  resultMax: 0,
};

const RATE = {
  minimumRate: 5.67,
  maximumRate: 9.8,
};
const calcReducer = createReducer(
  initialState,
  on(CalcActions.calculateRate, (state, action) => {
    const amount = action.payload.creditAmount as number;
    const duration = action.payload.duration as number;
    const interestMin = (amount * RATE.minimumRate) / 100;
    const interestMax = (amount * RATE.maximumRate) / 100;
    const resultMin = (amount + interestMin) / duration;
    const resultMax = (amount + interestMax) / duration;
    return {
      ...state,
      creditAmount: action.payload.creditAmount,
      duration: action.payload.duration,
      resultMin: Math.round(resultMin),
      resultMax: Math.round(resultMax),
    };
  }),
  on(CalcActions.dataSent, (state, action) => {
    console.log('data sent');
    return { ...state };
  }),
  on(CalcActions.error, (state, action) => {
    return { ...state };
  })
);

// tslint:disable-next-line:typedef
export function reducer(state: CalcState | undefined, action: Action) {
  return calcReducer(state, action);
}
