/*
#54 https://leetcode.com/problems/spiral-matrix (verified)
Time: O(W * H) W: length of Width, H: length of height
Space: O(1)
*/

function spiralOrder(matrix) {
  if(!matrix.length) return [];

  let topRow = 0;
  let bottomRow = matrix.length -1;
  let leftColumn = 0;
  let rightColumn = matrix[0].length - 1;

  let output = [];

  while(topRow <= bottomRow && leftColumn <= rightColumn) {
    for(let i = leftColumn; i <= rightColumn; i++) {
      if(matrix[topRow][i] !== null) {
        output.push( matrix[topRow][i] );
      }
      matrix[topRow][i] = null
    }
    topRow++;

    for(let i = topRow; i <= bottomRow; i++) {
      if(matrix[i][rightColumn] !== null) {
        output.push( matrix[i][rightColumn] );
      }
      matrix[i][rightColumn] = null;
    }
    rightColumn--;

    for(let i = rightColumn; i >= leftColumn; i--) {
      if(matrix[bottomRow][i] !== null) {
        output.push( matrix[bottomRow][i] );
      }
      matrix[bottomRow][i] = null;
    }
    bottomRow--;

    for(let i = bottomRow; i >= topRow; i--) {
      if(matrix[i][leftColumn] !== null) {
        output.push( matrix[i][leftColumn] );
      }
      matrix[i][leftColumn] = null;
    }
    leftColumn++;
  }

  return output;
}

module.exports = {spiralOrder}