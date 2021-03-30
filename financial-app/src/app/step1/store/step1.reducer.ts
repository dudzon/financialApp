import { Action, createReducer, on } from '@ngrx/store';
import * as Step1Actions from './step1.actions';
import { Step1State } from '../models/step1State';

const initialState: Step1State = {
  creditPurpose: '',
  comments: '',
  loanAmount: 0,
  duration: 0,
};

const step1Reducer = createReducer(
  initialState,
  on(Step1Actions.updateStore, (state, action) => ({
    ...state,
    creditPurpose: action.payload.creditPurpose,
    comments: action.payload.comments,
    loanAmount: action.payload.loanAmount,
    duration: action.payload.duration,
  })),
  on(Step1Actions.dataSent, (state, action) => {
    console.log('data sent');
    return { ...state };
  }),
  on(Step1Actions.error, (state, action) => {
    return { ...state };
  })
);

// tslint:disable-next-line:typedef
export function reducer(state: Step1State | undefined, action: Action) {
  return step1Reducer(state, action);
}
