import * as scene from "./scene.js";

export const Stage = class extends scene.Scene {
  /** @type {string} */
  name = "Unknown";

  constructor() {
    super();
  }

  onThink(e) {
    super.onThink(e);
  }
};
