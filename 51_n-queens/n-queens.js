/*
#51 https://leetcode.com/problems/n-queens (verified)
Time: O(N!) N: number of queens. We are basically trying out every possible combinations
Space: O(N^2) call stack and copy of row to check valid placement of Queen
*/

function solveNQueens(n) {

  let combinations = [];
  let board = [];

  const traverse = (validQPositions) => {

    let nextRow = new Array(n).fill('.');

    //define nextRow;
    for(let i = 0; i < n; i++) {
      //from top to bottom -- vertically
      if(validQPositions[i] === 'Q' || validQPositions[i].includes('V')) {
        if(nextRow[i] === '.') {
          nextRow[i] = "V";
        } else {
          nextRow[i] += "V";
        }
      }

      //from top right to bottom left
      if((validQPositions[i] === 'Q' || validQPositions[i].includes('R')) && i > 0) {
        if(nextRow[i - 1] === '.') {
          nextRow[i - 1] = "R";
        } else {
          nextRow[i - 1] += "R";
        }
      }

      //from top left to bottom right
      if((validQPositions[i] === 'Q' || validQPositions[i].includes('L')) && i < n - 1) {
        if(nextRow[i + 1] === '.') {
          nextRow[i + 1] = "L";
        } else {
          nextRow[i + 1] += "L";
        }
      }
    }

    let nextQPlacement = new Array(n).fill('.');
    for(let i = 0; i < n; i++) {

      if(nextRow[i] === '.') {
        nextRow[i] = 'Q';
        nextQPlacement[i] = 'Q';
        board.push(nextQPlacement.join(''));

        traverse(nextRow);

        //after recursion, don't forget to revert strings back to where it was
        if(board.length === n) {
          combinations.push(board.slice()); //create copy of the board array so no memory address is shared
        }

        //back tracking
        board.pop();
        nextQPlacement[i] = '.';
        nextRow[i] = '.';
      }

    }

  }

  let qPositions = new Array(n).fill('.');

  if(n === 0) return [];
  if(n === 1) return [["Q"]];

  for(let i = 0; i < n; i++) {
    qPositions[i] = 'Q';
    board.push(qPositions.join(''));

    traverse(qPositions);

    //back tracking
    qPositions[i] = '.';
    board.pop();
  }

  return combinations;
}

module.exports = {solveNQueens};