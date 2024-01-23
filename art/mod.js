import * as engine from "./objects/engine.js";
import * as sceneReadinessChecker from "./objects/01-scenes/readiness-checker.js";
import * as characterRandomGuy from "./objects/03-characters/random-guy.js";

export const init = () => {
  const e = new engine.Engine();

  globalThis.addEventListener("DOMContentLoaded", () => {
    e.refs.canvas = document.getElementById("canvas");
    e.refs.ctx = e.refs.canvas.getContext("2d");

    e.init();
  });

  const scene = new sceneReadinessChecker.ReadinessCheckerScene();
  const playerOne = new characterRandomGuy.RandomGuyCharacter();

  e.registry.register(
    scene,
    playerOne,
  );
};
