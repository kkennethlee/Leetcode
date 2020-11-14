const {serialize, deserialize} = require('./serialize-and-deserialize-binary-tree');

test("example 1", () => {
  let expected = [1,2,3,null,null,4,5];
  let copy = expected.slice();

  let tree = deserialize(copy);
  let array = serialize(tree);

  expect(array).toEqual(expected);
});
test("example 2", () => {
  let expected = [];
  let copy = expected.slice();

  let tree = deserialize(copy);
  let array = serialize(tree);

  expect(array).toEqual(expected);
});
test("example 3", () => {
  let expected = [1];
  let copy = expected.slice();

  let tree = deserialize(copy);
  let array = serialize(tree);

  expect(array).toEqual(expected);
});
test("example 4", () => {
  let expected = [1,2];
  let copy = expected.slice();

  let tree = deserialize(copy);
  let array = serialize(tree);

  expect(array).toEqual(expected);
});