var mergeKLists = function(lists) {
    if (lists.length === 0) return null;
    return mergeRange(lists, 0, lists.length - 1);
};

function mergeRange(lists, start, end) {
    if (start === end) return lists[start];
    if (start + 1 === end) return mergeTwoLists(lists[start], lists[end]);
    let mid = Math.floor((start + end) / 2);
    let left = mergeRange(lists, start, mid);
    let right = mergeRange(lists, mid + 1, end);
    return mergeTwoLists(left, right);
}

function mergeTwoLists(l1, l2) {
    let dummy = new ListNode(0);
    let current = dummy;
    while (l1 !== null && l2 !== null) {
        if (l1.val <= l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }
    current.next = l1 !== null ? l1 : l2;
    return dummy.next;
}