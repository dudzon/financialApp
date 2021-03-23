import { Action, createReducer, on } from '@ngrx/store';
import { Step2State } from '../models/step2State';
import * as Step2Actions from './step2.actions';

const initialState: Step2State = {
  applicant: '',
  maritalStatus: '',
  sameHouseholdStatus: '',
};

const step2Reducer = createReducer(
  initialState,
  on(Step2Actions.updateStore, (state, action) => ({
    ...state,
    applicant: action.payload.applicant,
    maritalStatus: action.payload.maritalStatus,
    sameHouseholdStatus: action.payload.sameHouseholdStatus,
  })),
  on(Step2Actions.dataSent, (state, action) => {
    console.log('data sent');
    return { ...state };
  }),
  on(Step2Actions.error, (state, action) => {
    return { ...state };
  })
);

// tslint:disable-next-line:typedef
export function reducer(state: Step2State | undefined, action: Action) {
  return step2Reducer(state, action);
}
