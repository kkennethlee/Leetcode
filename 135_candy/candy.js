/*
#135 https://leetcode.com/problems/candy (verified)
Time: O(2N) -> O(N) N: number of ratings
Space: O(2N) -> O(N)
*/

function candy(ratings) {

  let fromLeft = new Array(ratings.length).fill(1);
  let fromRight = new Array(ratings.length).fill(1);

  let rewards = 0;

  //iterate fromLeft
  for(let i = 1; i < ratings.length; i++) {

    if(ratings[i] > ratings[i - 1]) {
      fromLeft[i] = fromLeft[i - 1] + 1;
    }

  }

  //iterate fromRight
  for(let i = ratings.length - 2; i >= 0; i--) {

    if(ratings[i] > ratings[i + 1]) {
      fromRight[i] = fromRight[i + 1] + 1;
    }

    //add up all the sums
    let sum = Math.max(fromLeft[i], fromRight[i])

    rewards += sum;

  }

  //add the max value of the rightmost element
  rewards += Math.max(fromLeft[fromLeft.length - 1], fromRight[fromRight.length - 1]);

  return rewards;

}

module.exports = {candy}
