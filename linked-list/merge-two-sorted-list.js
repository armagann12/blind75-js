// 21. Merge Two Sorted Lists
// https://leetcode.com/problems/merge-two-sorted-lists/

// Solution by creating another linked list
// O(n)
var mergeTwoLists = function(list1, list2) {
    var res = new ListNode()
    var tail = res
    while(list1 && list2){
        if(list1.val <= list2.val){
            tail.next = list1
            list1 = list1.next
        }else{
            tail.next = list2
            list2 = list2.next
        }
        tail = tail.next
    }

    // We add this because if one of them is still has items we just add them to end
    tail.next = list1 || list2;

    return res.next
};