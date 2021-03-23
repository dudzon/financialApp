import { Action, createReducer, on } from '@ngrx/store';
import { Step3State } from '../models/step3State';
import * as Step3Actions from './step3.actions';

const initialState: Step3State = {
  applicantTitle: '',
  partnerTitle: '',
  applicantFirstName: '',
  applicantLastName: '',
  partnerFirstName: '',
  partnerLastName: '',
};

const step3Reducer = createReducer(
  initialState,
  on(Step3Actions.updateStore, (state, action) => ({
    ...state,
    applicantTitle: action.payload.applicantTitle,
    partnerTitle: action.payload.partnerTitle,
    applicantFirstName: action.payload.applicantFirstName,
    applicantLastName: action.payload.applicantLastName,
    partnerFirstName: action.payload.partnerFirstName,
    partnerLastName: action.payload.partnerLastName,
  })),
  on(Step3Actions.dataSent, (state, action) => {
    console.log('data sent');
    return { ...state };
  }),
  on(Step3Actions.error, (state, action) => {
    return { ...state };
  })
);

// tslint:disable-next-line:typedef
export function reducer(state: Step3State | undefined, action: Action) {
  return step3Reducer(state, action);
}
