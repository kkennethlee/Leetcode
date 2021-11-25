/*
#11 https://leetcode.com/problems/container-with-most-water (verified)
Time: O(N)
Space: O(1)
*/

function maxArea(height) {
  let area = 0;

  let l = 0;
  let r = height.length - 1;

  while (l < r) {
    const distance = r - l;
    const lesserHeight = Math.min(height[l], height[r]);

    area = Math.max(area, distance * lesserHeight);
    if (height[l] < height[r]) {
      l++;
    } else {
      r--;
    }
  }

  return area;

}

module.exports = {maxArea}