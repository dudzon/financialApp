import { act } from '@ngrx/effects';
import { Action, createReducer, on } from '@ngrx/store';
import { Step4State } from '../models/step4State';
import * as Step4Actions from './step4.actions';

const initialState: Step4State = {
  dateOfBirth: '',
  nationality: '',
  residence: '',
  residentPeriod: '',
};

const step4Reducer = createReducer(
  initialState,
  on(Step4Actions.updateStore, (state, action) => ({
    ...state,
    dateOfBirth: action.payload.dateOfBirth,
    nationality: action.payload.nationality,
    residence: action.payload.residence,
    residentPeriod: action.payload.residentPeriod,
  })),
  on(Step4Actions.dataSent, (state, action) => {
    console.log('data sent');
    return { ...state };
  }),
  on(Step4Actions.error, (state, action) => {
    return { ...state };
  })
);

// tslint:disable-next-line:typedef
export function reducer(state: Step4State | undefined, action: Action) {
  return step4Reducer(state, action);
}
