/*
#42 https://leetcode.com/problems/trapping-rain-water (verified)
*/

/*
Bruteforce method (verified)
Time: O(N^2)
Space: O(1)
*/

function __trap(height) {
  let area = 0;
  for(let i = 0; i < height.length; i++) {
    //iterate to left of i to find the maxLeft
    let maxLeft = 0;
    for(let l = i-1; l > -1; l--) {
      maxLeft = Math.max(maxLeft, height[l]);
    }

    //iterate to the right of i to find the maxRight
    let maxRight = 0;
    for(let r = i+1; r < height.length; r++) {
      maxRight = Math.max(maxRight, height[r]);
    }

    //find the amount of water for the current element
    
    //find the MIN of maxLeft and maxRight to get MAX water level possible
    let h = Math.min(maxLeft, maxRight) - height[i];

    if (h < 0) {
      h = 0;
    }

    area += h;

  }

  return area;
}

/*
Dynamic programming method (verified)
Time: O(3N) -> O(N)
Space: O(2N) -> O(N)
*/

function _trap(height) {
  //iterate from left to right, calculate the possible water level in respect to maxLeft
  let maxLeft = 0;
  let fromLeft = [];
  for(let i = 0; i < height.length; i++) {
    maxLeft = Math.max(maxLeft, height[i]);
    fromLeft[i] = maxLeft - height[i];
  }

  //iterate from right to left, calculate the possible water level in respect to maxRight
  let maxRight = 0;
  let fromRight = [];
  for(let i = height.length-1; i > -1; i--) {
    maxRight = Math.max(maxRight, height[i]);
    fromRight[i] = maxRight - height[i];
  }

  //compare the two water levels and calculate the smaller water level to total area
  let area = 0;
  for(let i = 0; i < height.length; i++) {
    const currentWater = Math.min(fromLeft[i], fromRight[i]);
    area += currentWater;
  }

  return area;
}

/*
Two pointer method (verified)
Time: O(N)
Space: O(1)
*/

function trap(height) {
  //iterate from left to right, calculate the possible water level in respect to maxLeft
  let maxLeft = 0;
  let maxRight = 0;
  let area = 0;

  let p1 = 0;
  let p2 = height.length - 1;

  while(p1 < p2) {
    if (height[p1] <= height[p2]) {
      //calculate p1
      maxLeft = Math.max(maxLeft, height[p1]);
      area += maxLeft - height[p1];
      p1++;
    } else {
      //calculate p2
      maxRight = Math.max(maxRight, height[p2]);
      area += maxRight - height[p2];
      p2--;
    }
  }

  return area;
}



module.exports = {trap}