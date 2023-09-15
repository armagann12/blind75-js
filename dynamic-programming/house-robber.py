# 198. House Robber
# https://leetcode.com/problems/house-robber

# Important question for DP in general
class Solution(object):
    def rob(self, nums):
        rob1, rob2 = 0, 0

        for n in nums:
            temp = max(n + rob1, rob2)
            rob1 = rob2
            rob2 = temp
        return rob2
