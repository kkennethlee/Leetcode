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
Space: O(N + K);
*/
function kClosest(points, K) {
  const distances = new Heap();

  for(let i = 0; i < points.length; i++) {
    const point = points[i];
    const d = getDistance(point);
    distances.insert([d, i]);
  }

  const coordinates = [];
  for(let i = 0; i < K; i++) {
    const removed = distances.remove();
    coordinates.push(points[removed[1]]);
  }

  return coordinates;
}

class Heap {
  constructor() {
    this.arr = [];
  }

  parent(i) {
    return Math.floor((i - 1) / 2);
  }

  hasParent(i) {
    return (i > 0 && i < this.arr.length) ? true : false;
  }

  leftChild(i) {
    return 2 * i + 1;
  }

  hasLeftChild(i) {
    const child = this.leftChild(i);
    if(child >= 0 && child <= this.arr.length - 1) {
      return true;
    }
    return false;
  }

  rightChild(i) {
    return 2 * i + 2;
  }

  hasRightChild(i) {
    const child = this.rightChild(i);
    if(child >= 0 && child <= this.arr.length - 1) {
      return true;
    }
    return false;
  }

  swap(i1, i2) {
    const temp = this.arr[i1];
    this.arr[i1] = this.arr[i2];
    this.arr[i2] = temp;
  }

  insert(n) {
    this.arr.push(n);
    
    //heap up
    let index = this.arr.length - 1;
    while(this.hasParent(index) && this.arr[this.parent(index)][0] > this.arr[index][0]) {
      this.swap(this.parent(index), index);
      index = this.parent(index);
    }
  }

  remove() {
    const toRemove = this.arr[0];
    const popped = this.arr.pop();
    this.arr[0] = popped;

    //heap down
    let index = 0;

    while(this.hasLeftChild(index) || this.hasRightChild(index)) {
      const l = this.hasLeftChild(index);
      const r = this.hasRightChild(index);
      const lIndex = this.leftChild(index);
      const rIndex = this.rightChild(index);

      if(l && r) {
        if(this.arr[lIndex][0] <= this.arr[rIndex][0] && this.arr[index][0] >= this.arr[lIndex][0]) {
          this.swap(index, lIndex);
          index = lIndex;
        } else if(this.arr[lIndex][0] > this.arr[rIndex][0] && this.arr[index][0] > this.arr[rIndex][0]) {
          this.swap(index, rIndex);
          index = rIndex;
        } else {
          break;
        }
      } else if(l) {
        if(this.arr[index][0] >= this.arr[lIndex][0]) {
          this.swap(index, lIndex);
          index = lIndex;
        } else {
          break;
        }
      } else if(r) {
        if(this.arr[index][0] > this.arr[rIndex][0]) {
          this.swap(index, rIndex);
          index = rIndex;
        } else {
          break;
        }
      }
    }

    return toRemove;
  }

}

module.exports = {kClosest};