# 919 · Meeting Rooms II
# https://www.lintcode.com/problem/919/

# Making the intervals sort in a different style so that we increase or decrease count by 1 and returning the max
def minMeetingRooms(intervals):
    time = []
    for start, end in intervals:
        time.append((start, 1))
        time.append((end, -1))

    time.sort(key=lambda x: (x[0], x[1]))
    print(time)

    count = 0
    max_count = 0
    for t in time:
        count += t[1]
        max_count = max(max_count, count)
    return max_count

intervals = [(0,30), (5,10), (15,20)]
print(minMeetingRooms(intervals))