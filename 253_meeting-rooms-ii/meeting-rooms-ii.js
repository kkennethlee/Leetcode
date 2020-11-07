/*
#253 https://leetcode.com/problems/meeting-rooms
*/

/*
Time: O(NLog(N) + N^2) -> O(N^2)
Space: O(N)
*/
function _minMeetingRooms(intervals) {  
  if(intervals.length === 0) return 0;
  if(intervals.length === 1) return 1;


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

/*
Time: O(N + 2 * NLog(N) + N) -> O(NLog(N))
Space: O(2N) -> O(N)
*/
function minMeetingRooms(intervals) {
  if(intervals.length <= 1) return intervals.length;

  const startTime = [];
  const endTime = [];

  for(let i = 0; i < intervals.length; i++) {

    startTime.push( intervals[i][0] );
    endTime.push( intervals[i][1] );

  }

  startTime.sort( (a, b) => a > b );
  endTime.sort( (a, b) => a > b );

  let startIndex = 0;
  let endIndex = 0;
  let rooms = 0;
  let concurrentMeetings = 0;
  while( startIndex < intervals.length ) {

    if(startTime[startIndex] < endTime[endIndex]) {
      concurrentMeetings++;
      startIndex++;
    } else {
      concurrentMeetings--;
      endIndex++;
    }

    if(concurrentMeetings > rooms) {
      rooms = concurrentMeetings;
    }
  }

  return rooms;


}
module.exports = {minMeetingRooms};