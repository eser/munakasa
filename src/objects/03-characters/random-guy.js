import * as character from "../00-primitives/character.js";

export const RandomGuyCharacter = class extends character.Character {
  /** @type {string} */
  name = "A Random Guy";

  constructor() {
    super();
  }

  onThink(e) {
    super.onThink(e);
  }
};
