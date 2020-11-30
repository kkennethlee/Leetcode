/*
#71 https://leetcode.com/problems/simplify-path (verified)
Time: O(N) N: size of path
Space: O(N)
*/

function simplifyPath(path) {
  path = path.split('/');
  let stack = [];

  for(const p of path) {

    if(p === '..') {
      if(stack.length > 0) stack.pop();
    } else if(p === '.' || p === '') {
      //do nothing
    } else {
      stack.push(p);
    }

  }

  return '/' + stack.join('/');
}

module.exports = {simplifyPath};