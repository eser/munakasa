export const entities = [];

export const register = (object) => {
  console.log(`Object "${object.constructor.name}" is registered.`);
  entities.push(object);
};
