var reverseKGroup = function(head, k) {
    let cursor = head;
    let count = 0;
    while (cursor !== null && count < k) {
        cursor = cursor.next;
        count++;
    }
    if (count === k) {
        let curr = head;
        let prev = null;
        let next = null;
        for (let i = 0; i < k; i++) {
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        head.next = reverseKGroup(curr, k);
        return prev;
    }
    return head;
};