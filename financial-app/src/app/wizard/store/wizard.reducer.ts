import { createReducer, Action, on } from '@ngrx/store';
import * as WizardActions from './wizard.actions';

// tslint:disable-next-line:no-empty-interface
export interface State {}

const initialState: State = {};

const wizardReducer = createReducer(
  initialState,
  on(WizardActions.getConfig, (state) => {
    console.log(state, 'getConfig');
    return {
      ...state,
    };
  }),
  on(WizardActions.configLoaded, (state, action) => {
    console.log(action, 'action');
    console.log(state, 'state configLoaded');
    // const newState = action.payload.config;

    return {
      ...state,
      //   state: newState,
    };
  }),
  on(WizardActions.error, (state, action) => {
    return { ...state };
  })
);

// tslint:disable-next-line:typedef
export function reducer(state: object | undefined, action: Action) {
  return wizardReducer(state, action);
}
