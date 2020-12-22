/*
#621 https://leetcode.com/problems/task-scheduler (verified)
Time: O(26 * log(26) + N) -> O(N) N: length of tasks
Space: O(26) 
*/


//partial answer
function _leastInterval(tasks, n) {

  let hash = {};

  //get freq of all the characters
  for(const ch of tasks) {
    if(!hash[ch]) hash[ch] = 0;
    hash[ch]++;
  }

  let sorted = [];
  for(let key in hash) {
    sorted.push( [key, hash[key]] );
  }
  
  //sort by frequency; greatest to least
  sorted.sort( (a, b) => b[1] - a[1] ); //Time: O(26 * Log (26)) -> O(1);


  let schedule = [];
  for(let task of sorted) {
    if(!schedule.length) {
      //task[1] = 6
      for(let i = 0; i < task[1]; i++) {
        schedule[i * (n + 1)] = task[0];
      }

    } else {
      //find earliest open slot
      let index = 0;
      while( schedule[index] ) {
        index++;
      }

      for(let i = 0; i < task[1]; i++) {
        schedule[i * (n + 1) + index] = task[0];
      }
    }

  }

  let index = schedule.length -1;
  while(true) {
    if(schedule[index]) break;

    schedule.pop();
  }

  return schedule.length;

}

//full answer
function leastInterval(tasks, n) {

  let hash = {};

  //get freq of all the characters
  for(const ch of tasks) {
    if(!hash[ch]) hash[ch] = 0;
    hash[ch]++;
  }

  let taskArray = Object.values(hash).sort((a, b) => b - a);

  let gaps = taskArray[0] - 1;
  let emptySpaces = gaps * n;

  for(let i = 1; i < taskArray.length; i++) {
    emptySpaces -= Math.min(gaps, taskArray[i]); 
  }

  if(emptySpaces < 0) emptySpaces = 0;

  return tasks.length + emptySpaces;

}

module.exports = {leastInterval};