import * as registry from "./registry.js";

import * as stageDefault from "./objects/base/stage-default.js";
import * as characterDefault from "./objects/base/character-default.js";

const context = {
  canvas: null,
  ctx: null,

  frametime: -1,
};

const onFrame = (time) => {
  globalThis.requestAnimationFrame(onFrame);

  context.frametime = time;

  registry.entities.forEach((object, i) => {
    if (object.nextThink !== null && context.frametime > object.nextThink) {
      object.nextThink = null;
      object.onThink(context);
    }

    if (object.willBeRemoved) {
      registry.entities.splice(i, 1);
      // console.log(`Object "${object.constructor.name}" is removed.`);
    }
  });
};

const onLoad = () => {
  context.canvas = document.getElementById("canvas");
  context.ctx = context.canvas.getContext("2d");

  globalThis.requestAnimationFrame(onFrame);
};

export const init = () => {
  globalThis.addEventListener("DOMContentLoaded", onLoad);

  const stage = new stageDefault.StageDefault();
  registry.register(stage);

  const playerOne = new characterDefault.CharacterDefault();
  registry.register(playerOne);
};
