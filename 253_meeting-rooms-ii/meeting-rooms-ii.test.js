const {minMeetingRooms} = require('./meeting-rooms-ii');


test("example 1", () => {
  expect(minMeetingRooms([[0, 30], [5, 10], [15, 20] ])).toEqual(2);
})

test("example 2", () => {
  expect(minMeetingRooms([[7, 10], [2, 4]])).toEqual(1);
})

test("example 3", () => {
  expect(minMeetingRooms([[0, 30], [5, 10], [15, 20], [17, 25], [30, 40]])).toEqual(3);
})

test("example 4", () => {
  expect(minMeetingRooms([[0, 6], [5, 10], [8, 20]])).toEqual(2);
})
