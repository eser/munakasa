import * as entity from "./entity.js";

export const PersonAnimationState = {
  IDLE: 0x00,

  // up
  JUMPING_UP: 0x01,

  // forward
  JUMPING_FORWARD: 0x02,
  WALKING_FORWARD: 0x03,
  DASHING_FORWARD: 0x04,
  LEANING_FORWARD: 0x05,

  // down
  CROUCHING_DOWN: 0x06,

  // backward
  LEANING_BACKWARD: 0x07,
  WALKING_BACKWARD: 0x08,
  DASHING_BACKWARD: 0x09,
  JUMPING_BACKWARD: 0x0A,
};

export const Person = class extends entity.Entity {
  /** @type {string} */
  name = "Unknown";
  /** @type {PersonState[keyof PersonState]} */
  animationState = PersonAnimationState.IDLE;
  /** @type {number} */
  animationFrame = 0;
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
