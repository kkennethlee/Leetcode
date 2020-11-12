const {groupAnagrams} = require('./group-anagrams');

function compareArrays(outcome, expected) {

  outcome = outcome.sort((a, b) => a - b);
  expected = expected.sort((a, b) => a - b);

  for(let i = 0; i < outcome.length; i++) {
    outcome[i] = JSON.stringify(outcome[i].sort());
    expected[i] = JSON.stringify(expected[i].sort());
  }

  outcome = JSON.stringify(outcome.sort());
  expected = JSON.stringify(expected.sort());

  return {outcome, expected};

}

test("example 1", () => {
  let strings = ["eat","tea","tan","ate","nat","bat"];
  let grouped = groupAnagrams(strings);
  let expected = [["bat"],["nat","tan"],["ate","eat","tea"]];

  const pair = compareArrays(grouped, expected);

  expect(pair.outcome).toEqual(pair.expected);
});