
/*
https://leetcode.com/problems/merge-intervals/
Time: O(NLog(N) + N) N: number of intervals
Space: O(1)
*/

//[1,3],[5,8],[4,10],[20,25]
function merge(intervals) {
  if(intervals.length <= 1) return intervals;

  intervals.sort((a, b) => a[0] > b[0]);

  let merged = [ intervals[0] ];

  for(let i = 1; i < intervals.length; i++) {

    const currentOpening = intervals[i][0];
    const currentClosing = intervals[i][1];

    //completely separate
    if( currentOpening > merged[merged.length-1][1] ) {
      merged.push( [currentOpening, currentClosing] );
    //merge
    } else if( currentClosing > merged[merged.length-1][1] ) {
      merged[merged.length-1][1] = currentClosing;
    }
  }

  return merged;

}

module.exports = {merge}