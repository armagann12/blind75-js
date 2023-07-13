// 206. Reverse Linked List
// https://leetcode.com/problems/reverse-linked-list/

//Singly-linked list
class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

var val5 = new ListNode(5)
var val4 = new ListNode(4, val5)
var val3 = new ListNode(3, val4)
var val2 = new ListNode(2, val3)
var head = new ListNode(1, val2)

console.log(head, "Before")

// Iterative 
// O(n)

var reverseList = function (head) {
    var prev = null
    var current = head

    while (current !== null) {
        var oldNext = current.next
        current.next = prev
        prev = current
        current = oldNext
    }
    return prev
};

console.log(head, "After")


var res = reverseList(head)
console.log(res)