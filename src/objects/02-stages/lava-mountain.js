import * as engine from "../engine.js";
import * as stage from "../00-primitives/stage.js";

export const LavaMountainStage = class extends stage.Stage {
  /** @type {string} */
  name = "Lava Mountain";
  /** @type {string} */
  backgroundImage = "assets/stages/lava-mountain/background.png";
  /** @type {string} */
  backgroundMusic = "assets/stages/lava-mountain/bgm.mp3";

  constructor() {
    super();

    this.nextThink = 0;
  }

  onThink(e) {
    super.onThink(e);

    e.loadAsset(engine.AssetType.IMAGE, this.backgroundImage, (image) => {
      e.refs.ctx.drawImage(image, 0, 0);
    });

    e.loadAsset(engine.AssetType.AUDIO, this.backgroundMusic, (audio) => {
      e.playBackgroundMusic(audio);
    });
  }
};
