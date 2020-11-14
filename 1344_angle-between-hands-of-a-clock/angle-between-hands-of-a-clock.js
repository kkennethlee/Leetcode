/*
#1344 https://leetcode.com/problems/angle-between-hands-of-a-clock (verified)
Time: O(1)
Space: O(1)
*/

function angleClock(hour, minutes) {
  const degreeCircle = 360;
  const minsInHour = 60;
  const degreesPerMin = degreeCircle / minsInHour;

  const minuteHandDegree = degreesPerMin * minutes;

  const minutesProgress = minutes / minsInHour;

  let hourStartPoint = null;
  if(hour === 12) {
    hourStartPoint = 0;
  } else {
    hourStartPoint = hour * degreesPerMin * 5
  }

  const hourHandDegree = hourStartPoint + minutesProgress * degreesPerMin * 5;

  if(minuteHandDegree === hourHandDegree) return 0;

  const greaterHand = Math.max(minuteHandDegree, hourHandDegree);
  const lesserHand = Math.min(minuteHandDegree, hourHandDegree);

  const angle1 = greaterHand - lesserHand;
  const angle2 = degreeCircle - angle1;

  return Math.min(angle1, angle2);
}

module.exports = {angleClock};