import * as entity from "./entity.js";

export const PersonState = {
  IDLE: 0,
  JUMPING_UP: 1,
  JUMPING_FORWARD: 2,
  WALKING_FORWARD: 3,
  LEANING_FORWARD: 4,
  CROUCHING_DOWN: 5,
  LEANING_BACKWARD: 6,
  WALKING_BACKWARD: 7,
  JUMPING_BACKWARD: 8,
};

export const Person = class extends entity.Entity {
  /** @type {string} */
  name = "Unknown";
  /** @type {PersonState[keyof PersonState]} */
  state = PersonState.IDLE;
  boundary = {
    /** @type {number} */
    top: 0,
    /** @type {number} */
    right: 0,
    /** @type {number} */
    bottom: 0,
    /** @type {number} */
    left: 0,
  };

  constructor() {
    super();
  }

  onThink(e) {
    super.onThink(e);
  }

  changeState(state) {
    this.state = state;
  }
};
