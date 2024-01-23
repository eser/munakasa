import * as entity from "./entity.js";

export const Person = class extends entity.Entity {
  /** @type {string} */
  name = "Unknown";
  /** @type {number} */
  positionX = 0;
  /** @type {number} */
  positionY = 0;

  constructor() {
    super();
  }

  onFrame(context) {
    super.onFrame(context);
  }
};
