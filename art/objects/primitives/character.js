import * as person from "./person.js";

export const Character = class extends person.Person {
  constructor() {
    super();
  }

  onFrame(context) {
    super.onFrame(context);
  }
};
