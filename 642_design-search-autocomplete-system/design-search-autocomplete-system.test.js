const {autocomplete} = require('./design-search-autocomplete-system');

test("example 1", () => {
  expect(autocomplete(['dog', 'dark', 'cat', 'door', 'dodge'], 'do')).toEqual(['dog', 'door', 'dodge']);
});