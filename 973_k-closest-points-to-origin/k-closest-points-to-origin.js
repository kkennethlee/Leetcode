/*
#973 https://leetcode.com/problems/k-closest-points-to-origin
*/


const getDistance = (point) => {

  const x2 = Math.pow(point[0], 2);
  const y2 = Math.pow(point[1], 2);

  return Math.sqrt(x2 + y2);

}

/*
Brute force solution w/ Sort
Time: O(N*Log(N)) number of points in coordinates
Space: O(1);
*/
function _kClosest(points, K) {

  points.sort((a, b) =>  getDistance(a) - getDistance(b));

  return points.splice(0, K);
}

/*
Solution using Heap
Time: O(N*Log(K))
Space: O(1);
*/
function kClosest(points, K) {
  const distances = [];
  const coordinates = [];
  coordinates.push(points[0]);
  distances.push(getDistance(points[0]));

  for(let i = 1; i < points.length; i++) {
    minHeapify(coordinates, distances, points[i]);
  }

  return distances;
}

function minHeapify(coordinates, distances, points) {
  const d = getDistance(points);
  coordinates.push(points)
  distances.push(d);

  let index = coordinates.length -1;
  let loop = true;
  let parentIndex = null;
  while(loop) {

    if(index <= 2) {
      parentIndex = 0;
    } else if(index > 2) {
      parentIndex = Math.floor((index-1)/2);
    }

    if(coordinates[index] < coordinates[parentIndex]) {
      let temp = coordinates[index];
      coordinates[index] = coordinates[parentIndex];
      coordinates[parentIndex] = temp;

      temp = distances[index];
      distances[index] = distances[parentIndex];
      distances[parentIndex] = temp;

      index = parentIndex;

      if(index === 0) {
        loop = false;
      }

    } else {
      loop = false;
    }

  }

}

module.exports = {kClosest};