import * as entity from "./entity.js";

export const Background = class extends entity.Entity {
  constructor() {
    super();

    this.nextThink = 0;
  }

  onThink(context) {
    super.onThink(context);

    if (context.ctx.strokeStyle === "#ff00ff") {
      context.ctx.strokeStyle = "#00ffff";
    } else {
      context.ctx.strokeStyle = "#ff00ff";
    }

    context.ctx.clearRect(
      0,
      0,
      context.canvas.clientWidth,
      context.canvas.clientHeight,
    );

    context.ctx.moveTo(0, 0);
    context.ctx.lineTo(context.canvas.clientWidth, context.canvas.clientHeight);
    context.ctx.stroke();

    this.nextThink = context.frametime + 3000;
    console.log("nextThink", this.nextThink);

    // if (this.nextThink > 10000) {
    //   this.willBeRemoved = true;
    // }
  }
};
