/*
#223 https://leetcode.com/problems/rectangle-area (verified)
Time: O(1)
Space: O(1)
*/

function computeArea(A, B, C, D, E, F, G, H) {
  const getArea = (p1, p2) => {
    const x = Math.abs(p1[0] - p2[0]);
    const y = Math.abs(p1[1] - p2[1]);
    return x * y;
  }

  const lowerLeft1 = [A, B];
  const upperRight1 = [C, D];

  //find area of 1st rectangle
  const area1 = getArea(lowerLeft1, upperRight1);

  const lowerLeft2 = [E, F];
  const upperRight2 = [G, H];

  //find area of 2nd rectangle
  const area2 = getArea(lowerLeft2, upperRight2);

  //get total area
  const totalArea = area1 + area2;

  let overlapArea = null;
  if(
      lowerLeft2[0] >= upperRight1[0] || //compare square1's right and square2's left
      lowerLeft2[1] >= upperRight1[1] || //compare square1's top to square2's bottom
      lowerLeft1[0] >= upperRight2[0] || //compare square1's left and square2's right 
      lowerLeft1[1] >= upperRight2[1] //compare square2's top to square1's bottom
    ) {
    overlapArea = 0;
  } else {

    //compare lowerleft points, return greater x, y coordinates
    const ll = [Math.max(lowerLeft1[0], lowerLeft2[0]), Math.max(lowerLeft1[1], lowerLeft2[1])];

    //compare upperRight points, return lesser x, y coordnates
    const ur = [Math.min(upperRight1[0], upperRight2[0]), Math.min(upperRight1[1], upperRight2[1])];

    //compute the area of the rectangle
    overlapArea = getArea(ll, ur);

  }

  return totalArea - overlapArea;
}

module.exports = {computeArea};