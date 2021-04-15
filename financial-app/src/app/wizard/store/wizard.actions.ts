import { createAction, props } from '@ngrx/store';

export const getConfig = createAction('[Wizard Component] Get Config');

export const error = createAction(
  '[Wizard Component] Error',
  props<{ payload: { error: string } }>()
);

export const configLoaded = createAction(
  '[Wizard Component] Config Loaded',
  props<{ payload: { config: any } }>()
);

export const getConfigTest = createAction(
  '[Wizard Component] Get Config',
  props<any>()
);
