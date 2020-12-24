/*
#96 https://leetcode.com/problems/unique-binary-search-trees (verified)
Time: O(N^2) N: number of n
Space: O(N)
*/

/*
  This is the formula for Nth Catalan Number

  G(2) = F(1, 2) +  F(2, 2)
          /   \      /   \ 
        G(0)  G(1) G(1) G(0)

  G(3) = F(1, 3) +  F(2, 3) +  F(3, 3)
          /   \      /   \      /   \
        G(0)  G(2) G(1) G(1)  G(2)  G(0)

  G(4) = F(1, 4) +  F(2, 4) +  F(3, 4)  +  F(4, 4)
          /   \      /   \      /   \       /   \
        G(0)  G(3) G(1) G(2)  G(2)  G(1)  G(3)  G(0)
*/

function numTrees(n) {
  let G = [1, 1];

  //fill out G up until n
  for(let g = 2; g <= n; g++) {
    let sum = 0;
    for(let f = 1; f <= g; f++) {
      sum += G[f - 1] * G[g - f];
    }
    G[g] = sum;
    sum = 0;
  }

  return G[n];
}

module.exports = {numTrees}