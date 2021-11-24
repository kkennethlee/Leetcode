
/*
#56 https://leetcode.com/problems/merge-intervals
Time: O(NLog(N) + N) N: number of intervals
Space: O(N)
*/

function merge(intervals) {
  if(intervals.length <= 1) return intervals;

  intervals.sort((a, b) => a[0] > b[0]);

  let merged = [ intervals[0] ];

  for (let i = 1; i < intervals.length; i++) {

    // is mergeable
    let latestMerged = merged[merged.length - 1];
    let current = intervals[i];

    if (latestMerged[1] >= current[0]) {
      merged.pop();
      merged.push([
        latestMerged[0], 
        Math.max(latestMerged[1], current[1])
      ]); 
    } else {
      merged.push(current);
    }


  }

  return merged;

}

module.exports = {merge}