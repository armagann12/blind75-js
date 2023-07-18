// 143. Reorder List
// https://leetcode.com/problems/reorder-list/

// Using a array



// Reversing second part of the list
// First find the half way of the list with two pointer (even or odd)
// Than reverse thwe second half and put it together

var reorderList = function(head) {
    var slow = head
    var fast = head.next
    while(fast && fast.next){
        slow = slow.next
        fast = fast.next.next
    }
    var second = slow.next
    slow.next = null

    // Reverse second part
    var prev = null
    while(second){
        var tmp = second.next
        second.next = prev
        prev = second
        second = tmp
    }
    second = prev

    var first = head

    // Merge two lists
    while(second){
        var temp1 = first.next
        var temp2 = second.next
        first.next = second
        second.next = temp1
        first = temp1
        second = temp2
    }
};


