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

// export const updateLoanAmount = createAction(
//   '[Wizard Input Component] Update Loan Amount',
//   props<{ payload: { value: string } }>()
// );

// export const updateLoanDuration = createAction(
//   '[Wizard Input Component] Update Loan Duration',
//   props<{ payload: { value: string } }>()
// );
export const updateState1 = createAction(
  '[Wizard] Update step 1',
  props<{
    payload: {
      'Credit Purpose': string;
      Comments: string;
      'Loan Amount': string;
      'Loan Duration': string;
    };
  }>()
);
export const updateState2 = createAction(
  '[Wizard] Update step 2',
  props<{
    payload: {
      Applicant: string;
      'Household Status': string;
      'Marital Status': string;
    };
  }>()
);
export const updateState3 = createAction(
  '[Wizard] Update step 3',
  props<{
    payload: {
      'Applicant Title': string;
      'Applicant First Name': string;
      'Applicant Last Name': string;
      'Partner Title': string;
      'Partner First Name': string;
      'Partner Last Name': string;
    };
  }>()
);
export const updateState4 = createAction(
  '[Wizard] Update step 4',
  props<{
    payload: {
      'Date of Birth': string;
      Nationality: string;
      Residence: string;
      'Residence Period': string;
    };
  }>()
);
