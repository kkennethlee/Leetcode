function searchTarget(node, target, depth) {

  if(node.value === target) {
    return depth;
  } else {

    if(node.left) {
      return searchTarget(node.left, target, depth + 1);
    }

    if(node.right) {
      return searchTarget(node.left, target, depth + 1);
    }

  }

}

function findKfromTarget(array, node, currentDepth, targetDepth, K) {
  if(K) {
    if(currentDepth === targetDepth + K || currentDepth === targetDepth - K) {
      array.push(node.value);
    }
  } else {
    if(currentDepth === targetDepth) {
      array.push(node.value);
    }
  }

  if(node.left) {
    findKfromTarget(array, node.left, currentDepth + 1, targetDepth, K);
  }

  if(node.right) {
    findKfromTarget(array, node.right, currentDepth + 1, targetDepth, K)
  }

}

function distanceK(root, target, K) {
  //1. find the target. search left and right separately, return the depth of target using dfs
  //2 using the depth of target, we need to find the K nodes from the target (both left and right)
  //3 once K from target nodes are found, push into array;

  let output = [];

  let targetDepthLeft = searchTarget(root.left, target, 1); //1
  let targetDepthRight = searchTarget(root.right, target, 1); //undefined

  if(K - targetDepthLeft === 0 || K - targetDepthRight === 0) {
    output.push(root.value);
  }

  if(targetDepthLeft) {
    
    if(K > targetDepthLeft) {// 2 > 1

      targetDepthRight = K - targetDepthLeft; //2 - 1 = 1;
      targetDepthLeft += K; // 2 + 1 = 3;

      findKfromTarget(output, root.left, 1, targetDepthLeft, null);
      findKfromTarget(output, root.right, 1, targetDepthRight, null); 
      
    } else {
      findKfromTarget(output, root.left, 1, targetDepthLeft, K);
    }


  } else if(targetDepthRight) {

    if(K > targetDepthRight) {

      targetDepthLeft = K - targetDepthRight;
      targetDepthRight += K;

      findKfromTarget(output, root.left, 1, targetDepthLeft, null);
      findKfromTarget(output, root.right, 1, targetDepthRight, null); 

    } else {
      findKfromTarget(output, root.right, 1, targetDepthRight, K);
    }

  }

  return output;
}

module.exports = {distanceK};