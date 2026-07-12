class Solution:
    def triangleNumber(self, nums: List[int]) -> int:
        arr = sorted(nums)
        n = len(arr)
        count = 0

        for k in range(n-1, 1, -1):
            left = 0
            right = k - 1
            while left < right: 
                if arr[left] + arr[right] > arr[k]:
                    count+= right - left
                    right-=1
                else:
                    left+=1
        return count
