export const Registry = class {
  entities = [];

  register(...objects) {
    for (const object of objects) {
      console.log(`Object "${object.constructor.name}" is being registered.`);
      this.entities.push(object);
    }
  }

  unregister(...objects) {
    for (const object of objects) {
      const idx = this.entities.indexOf(object);

      if (idx === -1) {
        console.log(`Object "${object.constructor.name}" is not registered.`);
        continue;
      }

      console.log(`Object "${object.constructor.name}" is being unregistered.`);
      this.entities.splice(idx, 1);
    }
  }
};
