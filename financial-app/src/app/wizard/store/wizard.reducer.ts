import { createReducer, Action, on } from '@ngrx/store';
import * as WizardActions from './wizard.actions';

// tslint:disable-next-line:no-empty-interface
export interface State {}

const initialState: State = {};

const wizardReducer = createReducer(
  initialState,
  on(WizardActions.getConfig, (state) => {
    return {
      ...state,
    };
  }),
  on(WizardActions.configLoaded, (state, action) => {
    const newState = action.payload.config;

    return {
      ...state,
      ...newState,
    };
  }),
  on(WizardActions.error, (state, action) => {
    return { ...state };
  })
);

// tslint:disable-next-line:typedef
export function reducer(state: State | undefined, action: Action) {
  return wizardReducer(state, action);
}
