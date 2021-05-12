import { ValidatorFn, Validators, FormControl } from '@angular/forms';

export abstract class BaseValidator {
  protected setValidator(validatorName: string): ValidatorFn {
    let validator: ValidatorFn;
    switch (validatorName) {
      case 'required':
        validator = Validators.required;
        break;
      default:
        throw new Error('No Validator found');
    }
    return validator;
  }
  protected setValidatorsForControl(field: any): ValidatorFn[] {
    let validators = field.valid;
    const newValidators: any[] = [];
    validators = validators.map((validatorName: string) => {
      const newValidator = this.setValidator(validatorName);
      newValidators.push(newValidator);
    });

    return newValidators;
  }

  protected setValidationMessages(control: FormControl): string {
    let errorMessage: string;
    if (control.hasError('required')) {
      errorMessage = 'This field is required';
      return errorMessage;
    }
    return 'Not valid control';
  }
}
