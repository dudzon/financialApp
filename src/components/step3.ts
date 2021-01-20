import { myFramework } from "./../../framework/framework";

export class Step3 {
  init(): myFramework {
    const step3 = new myFramework({
      el: "three",
      data() {
        return {};
      },
      methods: {},
    });

    return step3;
  }
}
