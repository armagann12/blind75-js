// 23. Merge k Sorted Lists
// https://leetcode.com/problems/merge-k-sorted-lists/

// Using merge-two-sorted list
// And merging first two lists than using the calculated one to calculate with 3rd list
var mergeKLists = function (lists) {
    // This part is for -> lists = [] testcase
    if(lists.length=== 0){
        var res = new ListNode()
        return res.next
    }

    var list1 = lists[0]
    for (var i = 1; i < lists.length; i++) {
        var list2 = lists[i]
        var res = new ListNode()
        var tail = res
        while (list1 && list2) {
            if (list1.val <= list2.val) {
                tail.next = list1
                list1 = list1.next
            } else {
                tail.next = list2
                list2 = list2.next
            }
            tail = tail.next
        }
        tail.next = list1 || list2;
        list1 = res.next
    }
    return list1
};