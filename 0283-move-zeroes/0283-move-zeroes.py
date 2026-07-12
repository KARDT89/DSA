class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        aux = [0] * len(nums)
        write = 0
        for i in range(len(nums)):
            if nums[i] != 0:
                aux[write] = nums[i]
                write += 1
        nums[:] = aux