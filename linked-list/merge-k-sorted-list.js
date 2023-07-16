// 23. Merge k Sorted Lists
// https://leetcode.com/problems/merge-k-sorted-lists/

// Using merge-two-sorted list
// And merging first two lists than using the calculated one to calculate with 3rd list
// This problem uses both Array and L-list solution
// O(n)
var mergeKLists = function (lists) {
    if (lists.length === 0) {
        return null
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


// O(n*logk)
// Using MergeSort
// Select two lists and order them than do the same for rest
// After that do it until there is only one
var mergeKLists = function (lists) {
    if (lists.length === 0) {
        return null
    }
    while (lists.length > 1) {
        var mergedLists = []

        for (var i = 0; i < lists.length; i += 2) {
            var list1 = lists[i]
            if ((i + 1) < lists.length) {
                var list2 = lists[i + 1]
            } else {
                var list2 = null
            }
            mergedLists.push(mergeTwoLists(list1, list2))
        }
        lists = mergedLists
    }
    return lists[0]
}

var mergeTwoLists = function (list1, list2) {
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

    return res.next
};

//Using heap