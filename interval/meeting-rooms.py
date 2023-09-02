# 920 · Meeting Rooms
# https://www.lintcode.com/problem/920/

# Sort than compare, end value of first and start value of second interval
class Solution:
    def canAttendMeetings(self, intervals):
        intervals.sort(key=lambda i: i[0])

        for i in range(1, len(intervals)):
            i1 = intervals[i - 1]
            i2 = intervals[i]

            if i1[1] > i2[0]:
                return False
        return True
