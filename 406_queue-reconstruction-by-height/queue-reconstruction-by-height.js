/*
https://leetcode.com/problems/queue-reconstruction-by-height/ (verified)

Time: O(NLogN + N^2) -> 
Space: O(N);
*/

function reconstructQueue(people) {

  //Time: O(NLogN);
  //Sort by descending height: tallest to shortest
  //if same height, sort by ascending people in front
  people.sort((a, b) => (a[0] === b[0]) ? a[1] - b[1] : b[0] - a[0]);
  
  const newOrder = [];

  //Time: N^2  iteration x array insertion
  while(people.length) {
    let person = people.shift();
    let i = person[1];

    newOrder.splice(i, 0, person);
  }

  return newOrder;
}

module.exports = {reconstructQueue};