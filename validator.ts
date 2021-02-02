function validation(value: string, el: HTMLElement) {
  if (!value || isNaN(+value)) {
    (window as any).currentView.watchers.errorMessage = "Wrong value";
    return false;
  }
  hideValidationError(el);
  return true;
}

export function dataToValidate(values: string[], el: HTMLElement): boolean {
  const validateArr: boolean[] = [];
  values.forEach((value) => {
    validateArr.push(validation(value, el));
  });
  return validateArr.every((item) => item === true);
}

function hideValidationError(el: HTMLElement): void {
  const id = el.id;
  const section = document.getElementById(id);
  const errorEl = Array.from(
    section.querySelectorAll("span[v-html='errorMessage']")
  );
  errorEl.forEach((el: HTMLInputElement) => {
    const input: HTMLInputElement = el.previousElementSibling as HTMLInputElement;
    if (!isNaN(+input.value) || !input.value) {
      el.style.visibility = "hidden";
    } else {
      el.style.visibility = "visible";
    }
  });
}
