function validation(value: string, el: HTMLElement) {
  if (!value || isNaN(+value)) {
    (window as any).currentView.watchers.errorMessage = "Wrong value";
    return false;
  }
//   hideValidationError(el);
  return true;
}

export function dataToValidate(values: string[], el: HTMLElement): boolean {
  const validateArr: boolean[] = [];
  values.forEach((value) => {
    validateArr.push(validation(value, el));
  });
  return validateArr.every((item) => item === true);
}

// function hideValidationError(el: HTMLElement): void {
//     const id = el.id;

//   debugger;
//   const section = document.getElementById(id);
//   debugger;
//   console.log(section, "section");
//   const errorEl = Array.from(
//     section.querySelectorAll("span[v-model=errorMessage]")
//   );
//   console.log(errorEl, "errorEl");
//   errorEl.forEach((el: HTMLInputElement) => {
//     if (!el.value || isNaN(+el.value)) {
//       el.style.display = "none";
//     }
//   });
// }
