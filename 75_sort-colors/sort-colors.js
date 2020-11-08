/*
#75 https://leetcode.com/problems/sort-colors
*/


/*
Time: O(N + N) -> O(N) N: length of nums
Space: O(N)
*/
function _sortColors(nums) {

  if(nums.length === 1) return nums;

  const colors = {};

  let minColor = Infinity;
  let maxColor = -Infinity;
  for(let i = 0; i < nums.length; i++) {
    const color = nums[i];

    minColor = Math.min(color, minColor);
    maxColor = Math.max(color, maxColor);

    if(!colors.hasOwnProperty(color)) {
      colors[color] = 0;
    }
    colors[color]++;;
  }

  let sorted = []

  for(minColor; minColor <= maxColor; minColor++) {
    if(colors.hasOwnProperty(minColor)) {
      
      for(let i = 0; i < colors[minColor]; i++) {
        sorted.push(minColor);
      }

    }

  }

  return sorted;

}

/*
Time: O(N) N: length of nums
Space: O(1)
*/
function sortColors(nums) {

  if(nums.length === 1) return nums;

  let start = 0;
  let current = 0;
  let end = nums.length - 1;

  while(current <= end) {

    if( nums[current] === 2 ) {
      let temp = nums[current];
      nums[current] = nums[end];
      nums[end] = temp;

      end--;
    } else if( nums[current] === 0 ) {
      let temp = nums[current];
      nums[current] = nums[start]
      nums[start] = temp;
      current++;
      start++;
    } else {
      current++;
    }

  }

  return nums;
}

module.exports = {sortColors}