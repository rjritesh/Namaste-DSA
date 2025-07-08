## Problem---> Given an integer array nums and an integer val, remove all occurrences of val in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.


### Approach--
> Two pointer approach--- x will keep the track of last unique element's position

> First we initialize x = 0 because first element is alway unique in sorted array.

> if nums[i] == nums[x] → duplicate → skip

> if nums[i] > nums[x] → new unique value → move forward and update

> if nums[i] > nums[x] then  x = x + 1 & nums[x] = nums[i] means if nums[i] > nums[x] then x will move forward to next index.
