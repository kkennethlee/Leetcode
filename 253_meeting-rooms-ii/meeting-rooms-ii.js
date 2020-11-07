/*
#253 https://leetcode.com/problems/meeting-rooms
Time: O(NLog(N) + N^2) -> O(N^2)
Space: O(N)
*/

function _minMeetingRooms(intervals) {

  intervals.sort( (a, b) => a[0] > b[0] );

  let rooms = [ intervals[0] ];

  for(let current = 1; current < intervals.length; current++) {

    for(let prev = 0; prev < rooms.length; prev++) {

      if(rooms[prev][1] <= intervals[current][0]) {
        rooms[prev][1] = intervals[current][1];
        break;
      }

      if(prev === rooms.length - 1) {
        rooms.push( intervals[current] );
        break;
      }
    }
  }


  return rooms.length;

}
module.exports = {minMeetingRooms};