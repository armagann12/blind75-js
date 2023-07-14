// 141. Linked List Cycle
// https://leetcode.com/problems/linked-list-cycle/

//TODO do a cycle linked list

// Using a hashSet
// O(n) runtime O(n) space
var hasCycle = (head) => {
    var hash = new Set()
    while (head) {
        if (hash.has(head)) {
            return true
        }
        hash.add(head)
        head = head.next
    }
    return false
};

// Floyd's Tortoise and Hare -> Cycle finding algorithm
//  O(n) runtime O(1) space
var hasCycle = (head) => {
    var slow = head
    var fast = head

    while(fast && fast.next){ // we have to check for fast.next as well otherwise it will throw error because it will be out of bond
        slow = slow.next
        fast = fast.next.next
        if(slow === fast){
            return true
        }
    }
    return false
};
