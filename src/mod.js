import * as engine from "./objects/engine.js";
import * as stageLavaMountain from "./objects/02-stages/lava-mountain.js";
import * as characterRandomGuy from "./objects/03-characters/random-guy.js";

export const init = () => {
  const e = new engine.Engine();

  globalThis.addEventListener("DOMContentLoaded", () => {
    e.refs.root = globalThis;

    e.refs.canvas = document.getElementById("canvas");
    e.refs.canvas.width = 1920;
    e.refs.canvas.height = 1080;

    e.refs.ctx = e.refs.canvas.getContext("2d");
    // e.refs.ctx.imageSmoothingEnabled = true;

    e.init();
  });

  const stage = new stageLavaMountain.LavaMountainStage();
  const playerOne = new characterRandomGuy.RandomGuyCharacter();

  e.registry.register(
    stage,
    playerOne,
  );
};
