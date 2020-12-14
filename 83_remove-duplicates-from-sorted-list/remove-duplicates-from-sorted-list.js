

function deleteDuplicates(head) {
  if(!head) return head;

  let prev = head;
  let pointer = head;

  while(pointer) {

    pointer = pointer.next;

    if(!pointer || pointer.value !== prev.value) {
      prev.next = pointer;
      prev = pointer;
    }

  }

  return head;

}


module.exports = {deleteDuplicates}