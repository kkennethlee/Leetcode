
/*
https://leetcode.com/problems/merge-intervals/
Time: O(NLog(N) + N) N: number of intervals
Space: O(1)
*/

function merge(intervals) {
  if(intervals.length <= 1) return intervals;

  intervals.sort((a, b) => a[0] > b[0]);

  const merged = [];

  for(let i = 1; i < intervals.length; i++) {
    const prevOpening = intervals[i-1][0];
    const prevClosing = intervals[i-1][1];

    const currentOpening = intervals[i][0];
    const currentClosing = intervals[i][1];

    if( prevClosing >= currentOpening ) {
      if(prevClosing >= currentClosing) {
        merged.push( [prevOpening, prevClosing] );
      } else {
        merged.push( [prevOpening, currentClosing] );
      }
    } else {
      if(i === 1) {
        merged.push( [prevOpening, prevClosing]);
      }
      merged.push( [currentOpening, currentClosing] );
    }
  }

  return merged;

}

module.exports = {merge}