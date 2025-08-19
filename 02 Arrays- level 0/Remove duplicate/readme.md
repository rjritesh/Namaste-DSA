## 🧹 Problem: Remove Duplicates from a Sorted Array

### 🔍 Description  
Write a function `removeDuplicates(nums)` that removes duplicates **in-place** from a **sorted array** and returns the number of unique elements.

The function should:
- Modify the array directly.
- Return the count of unique elements.
- Work without using any extra space (O(1) space complexity).

---
### 💡 Intution
Array is sorted , it means if the consecutive elements are duplicate then the next elem is not greater than previous elem.

### 💡 Approach

We use the **two-pointer technique** to overwrite duplicates with unique values.

#### 🛠️ Steps:

1. Initialize a pointer `x = 0` to track the position of the last unique element.
2. Loop through the array using index `i` from `0` to `nums.length - 1`:
   - If `nums[i] > nums[x]`, it means we found a **new unique number**.
   - Increment `x` and set `nums[x] = nums[i]` to store this new number.
3. After the loop, return `x + 1`, which represents the **count of unique elements**.

---

### 📈 Time and Space Complexity

- **Time Complexity:** O(n) — We traverse the array once.
- **Space Complexity:** O(1) — The array is modified in-place using two pointers.

---

### ✅ Example

```js
Input:  [1, 1, 2, 2, 3, 3, 4]
Output: 4

Modified Array: [1, 2, 3, 4, _, _, _]
// Only the first 4 elements are valid (unique)
