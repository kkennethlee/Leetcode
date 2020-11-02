/*
#79 https://leetcode.com/problems/word-search/ (verified)
Time: O(N^2 * W) N: number of grid, W: length of word
Space: O(N^2 + W) N: number of grid, W: number of call stack
*/

function search(index, word, row, col, visited, board) {
  if(word.length - 1 === index) {
    return true;
  }

  visited[[row, col]] = true;

  //see if there's a path if 4 directions:
  if(row > 0 && !visited.hasOwnProperty([row-1, col])) {
    //search top
    if(word[index+1] === board[row - 1][col]) {
      if(search(index + 1, word, row - 1, col, visited, board)) {
        return true;
      }
    }
  }
  
  if(col < board[row].length - 1 && !visited.hasOwnProperty([row, col+1])) {
    //search right
    if(word[index+1] === board[row][col + 1]) {
      if(search(index + 1, word, row, col + 1, visited, board)){
        return true;
      }
    }
  }

  if(row < board.length - 1 && !visited.hasOwnProperty([row+1, col])) {
    //search bottom
    if(word[index+1] === board[row + 1][col]) {
      if(search(index + 1, word, row + 1, col, visited, board)) {
        return true;
      }
    }
  }

  if(col > 0 && !visited.hasOwnProperty([row, col-1])) {
    //search left
    if(word[index+1] === board[row][col - 1]) {
      if(search(index + 1, word, row, col - 1, visited, board)) {
        return true;
      }
    }
  }

  delete visited[[row, col]];
  //return false if there's no path;
  return false;
}

function exist(board, word) {
  
  //iterate through all the grids in board
  for(let row = 0; row < board.length; row++) {
    //traverse vertical
    for(let col = 0; col < board[row].length; col++) {
      //traverse horizontal

      //match first letter.
      if(board[row][col] === word[0]) {
        const visited = {};

        if(search(0, word, row, col, visited, board)) {
          return true;
        }
      }
    }

  }

  return false;
}

module.exports = {exist};