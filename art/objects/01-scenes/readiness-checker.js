import * as scene from "../00-primitives/scene.js";

export const ReadinessCheckerScene = class extends scene.Scene {
  constructor() {
    super();

    this.nextThink = 0;
  }

  onThink(e) {
    super.onThink(e);

    if (e.refs.ctx.strokeStyle === "#ff00ff") {
      e.refs.ctx.strokeStyle = "#00ffff";
    } else {
      e.refs.ctx.strokeStyle = "#ff00ff";
    }

    e.refs.ctx.clearRect(
      0,
      0,
      e.refs.canvas.clientWidth,
      e.refs.canvas.clientHeight,
    );

    e.refs.ctx.moveTo(0, 0);
    e.refs.ctx.lineTo(e.refs.canvas.clientWidth, e.refs.canvas.clientHeight);
    e.refs.ctx.stroke();

    this.nextThink = e.frametime + 3000;
    console.log("nextThink", this.nextThink);

    // if (this.nextThink > 10000) {
    //   this.willBeRemoved = true;
    // }
  }
};
