const biophony = {
  birds: false,
  frogs: false,
  insects: false,
  mammals: false,
};

const emotion = {
  curious: false,
  happy: false,
  relax: false,
  stress: false,
};

const geophony = {
  rain: false,
  thunder: false,
  water: false,
  wind: false,
};

const anthrophony = {
  alarms: false,
  machines: false,
  talking: false,
  vehicles: false,
};

const TagsSchema = Object.assign(
  Object.create(null),
  { biophony },
  { emotion },
  { geophony },
  { anthrophony },
);

export { TagsSchema };
