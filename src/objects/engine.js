import * as registry from "./registry.js";

export const EngineStatus = {
  NOT_INITIATED: 0,
  LOADING: 1,
  LOADED: 2,
};

export const AssetType = {
  IMAGE: {
    object: Image,
    loadEvent: "load",
  },
  AUDIO: {
    object: Audio,
    loadEvent: "canplaythrough", // loadeddata
  },
};

export const Engine = class {
  static instance = null;
  assets = new Map();
  status = EngineStatus.NOT_INITIATED;
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
      ? EngineStatus.LOADED
      : EngineStatus.LOADING;

    if (this.status === EngineStatus.LOADING) {
      this.refs.root?.addEventListener?.("load", () => {
        this.status = EngineStatus.LOADED;
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

  loadAsset(assetType, path, fn) {
    let asset = this.assets.get(path);
    let resource = asset?.resource?.deref();

    if (resource === undefined) {
      resource = new (assetType.object)();

      asset = {
        resource: new WeakRef(resource),
        isLoaded: false,
      };

      resource.addEventListener(
        assetType.loadEvent,
        () => {
          asset.isLoaded = true;
          fn(resource);
        },
      );
      resource.src = path;

      this.assets.set(path, asset);
    }

    if (asset.isLoaded) {
      fn(resource);
      return;
    }

    resource.addEventListener(
      assetType.loadEvent,
      () => {
        fn(resource);
      },
    );
  }

  playBackgroundMusic(audioObject) {
    audioObject.loop = true;

    this.refs.root.addEventListener("click", () => {
      if (audioObject.paused && audioObject.loop) {
        audioObject.play();
      }
    });
    audioObject.play();
  }
};
