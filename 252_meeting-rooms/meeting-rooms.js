/*
#252 https://leetcode.com/problems/meeting-rooms
Time: O(NLog(N))
Space: O(1)
*/

function canAttendMeetings(intervals) {
  intervals.sort( (a, b) => a[0] > b[0] );
  for(let i = 0; i < intervals.length; i++) {
    if(intervals[i][1] > intervals[i+1][0]) {
      return false;
    }
  }

  return true;


}
module.exports = {canAttendMeetings};