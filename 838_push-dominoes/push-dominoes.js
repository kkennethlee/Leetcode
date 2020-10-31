/*
#838 https://leetcode.com/problems/push-dominoes (verified)/

Time: O(3N) -> O(N)
Space: O(3N) -> O(N)
*/

function pushDominoes(dominoes) {
  dominoes = dominoes.split('');
  
  let dominoesR = dominoes.slice();

  //iterate to the right
  let rIndex = null;
  for(let i = 0; i < dominoesR.length; i++) {
    if(dominoesR[i] === "L") {
      rIndex = null;
    }

    if(dominoesR[i] === 'R') {
      rIndex = i;
    }

    if(rIndex !== null) {
      dominoesR[i] = i - rIndex;
    }
  }

  let dominoesL = dominoes.slice();

  //iterate to the right
  let lIndex = null;
  for(let i = dominoesL.length - 1; i > -1; i--) {
    if(dominoesL[i] === "R") {
      lIndex = null;
    }

    if(dominoesL[i] === 'L') {
      lIndex = i;
    }

    if(lIndex !== null) {
      dominoesL[i] = lIndex - i;
    }
  }

  for(let i = 0; i < dominoes.length; i++) {
    if(dominoes[i] === "L" || dominoes[i] === "R") {
      continue;
    }

    if(dominoesR[i] === '.') {
      dominoesR[i] = 0;
    }
    if(dominoesL[i] === '.') {
      dominoesL[i] = 0;
    }

    if(dominoesR[i] === 0 && dominoesL[i] > 0) {
      dominoes[i] = 'L'
    } else if(dominoesR[i] > 0 && dominoesL[i] === 0) {
      dominoes[i] = 'R'
    } else if(dominoesR[i] > dominoesL[i]){
      dominoes[i] = "L";
    } else if(dominoesR[i] < dominoesL[i]) {
      dominoes[i] = "R";
    } else {
      dominoes[i] = "."
    }
  }

  return dominoes.join('');
}

module.exports = {pushDominoes}