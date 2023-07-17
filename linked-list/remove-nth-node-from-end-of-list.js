// 19. Remove Nth Node From End of List
// https://leetcode.com/problems/remove-nth-node-from-end-of-list/

// Solution with using reverseList 2 times


// Two Pointer
// O(n)

var removeNthFromEnd = (head, n) => {
    var dummy = new ListNode(0, head)
    var left = dummy
    var right = head
    while (n > 0) {
        right = right.next
        n--
    }
    while(right){
        left = left.next
        right = right.next
    }
    left.next = left.next.next

    return dummy.next
}