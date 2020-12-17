const {Trie} = require('./implement-trie-prefix-tree');

test("example 1", () => {
  const trie = new Trie();
  trie.insert("apple");
  expect(trie.search("apple")).toEqual(true);
  expect(trie.search("app")).toEqual(false);
  expect(trie.startsWith("app")).toEqual(true);
  trie.insert("app");   
  expect(trie.search("app")).toEqual(true);
});