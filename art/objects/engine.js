import * as registry from "./registry.js";

const STATUS_NOT_INITIATED = 0;
const STATUS_LOADING = 1;
const STATUS_LOADED = 2;

export const Engine = class {
  static instance = null;
  status = STATUS_NOT_INITIATED;
  registry = new registry.Registry();
  runFrameRef = this.runFrame.bind(this);

  frametime = -1;
  refs = {
    root: null,
    canvas: null,
    ctx: null,
  };

  constructor() {
  }

  setAsDefaultInstance() {
    Engine.instance = this;
  }

  init() {
    if (Engine.instance !== null) {
      this.setAsDefaultInstance();
    }

    this.status = (this.refs.root?.document?.readyState === "complete")
      ? STATUS_LOADED
      : STATUS_LOADING;

    if (this.status === STATUS_LOADING) {
      this.refs.root?.addEventListener?.("load", () => {
        this.status = STATUS_LOADED;
      });
    }

    this.refs.root?.requestAnimationFrame?.(this.runFrameRef);
  }

  runFrame(time) {
    this.refs.root?.requestAnimationFrame?.(this.runFrameRef);

    this.frametime = time;

    this.registry.entities.forEach((object, i) => {
      if (object.nextThink !== null && this.frametime > object.nextThink) {
        object.nextThink = null;
        object.onThink(this);
      }

      if (object.willBeRemoved) {
        this.registry.entities.splice(i, 1);
        // console.log(`Object "${object.constructor.name}" is removed.`);
      }
    });
  }
};
