const ledgendary: Level = {
  name: `ledgendary`,
  mcguffin: [-1, 0],
  switches: [],
  rooms: [
    [0, 0],
    [0, -1],
    [1, -1],
    [0, 1],
    [1, 1],
    [1, 0]
  ],
  corridors: [{
    type: `empty`,
    x: -1,
    y: 0,
    facing: `east`
  }, {
    type: `empty`,
    x: 0,
    y: 0,
    facing: `north`
  }, {
    type: `ledge`,
    x: 1,
    y: -1,
    facing: `west`
  }, {
    type: `empty`,
    x: 1,
    y: 0,
    facing: `north`
  }, {
    type: `empty`,
    x: 0,
    y: 0,
    facing: `south`
  }, {
    type: `ledge`,
    x: 0,
    y: 1,
    facing: `east`
  }, {
    type: `empty`,
    x: 1,
    y: 0,
    facing: `south`
  }, {
    type: `goal`,
    x: 1,
    y: 0,
    facing: `east`
  }]
}
