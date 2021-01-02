/*
#274 https://leetcode.com/problems/h-index (verified)
*/

/*
Linear search
Time: O(NLog(N) + N) N: number of citations
Space: O(1);
*/
function hIndex(citations) {
  const n = citations.length;
  citations.sort((a, b) => b - a);
  let h = 0;
  for (let i = 0; i < n; i++) {
    const c = citations[i];
    if (c >= i + 1) {
      h = i + 1;
    } else{
      break;
    }
  }
  return h;
}

/*
Todo: Binary search
Time: O(NLog(N) + log(N)) N: number of citations
Space: O(1);
*/

module.exports = {hIndex};