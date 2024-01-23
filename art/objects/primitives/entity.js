export const Entity = class {
  /** @type number | null */
  nextThink = null;
  /** @type bool */
  willBeRemoved = false;

  constructor() {
  }

  onThink(_context) {
  }
};
