const {canAttendMeetings} = require('./meeting-rooms');


test("example 1", () => {
  expect(canAttendMeetings([[0, 30], [5, 10], [15, 20] ])).toEqual(false);
})