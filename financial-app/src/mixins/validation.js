export const validationMixin = {
    methods: {
        validate(value, el) {
            if (!value || isNaN(+value)) {
                el.textContent = "Wrong value";
                return false;
            }
            return true
        },
        clearErrors(elements) {
            const elementsArr = Array.from(elements);
            elementsArr.forEach(element => element.textContent = "");
        }
    }

}