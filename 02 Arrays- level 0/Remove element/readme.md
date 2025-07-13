## 🧹 Problem: Remove Element from an Array (In-Place)

### 🔍 Description  
Write a function `removeElement(nums, val)` that removes all occurrences of `val` from the array `nums` **in-place**, and returns the count of elements remaining.

You must:
- Modify the array directly without using extra space.
- Return the number of elements that are **not equal** to `val`.
- The order of remaining elements **does not matter**.

---

### 💡 Approach

We use a **two-pointer technique**:
- One pointer `i` iterates through the entire array.
- Another pointer `x` keeps track of the position to store the next valid element (not equal to `val`).

#### 🛠️ Steps:

1. Initialize a pointer `x = 0` to track position for keeping valid elements.
2. Loop over each element with index `i` from `0` to `nums.length - 1`:
   - If `nums[i] !== val`, assign it to `nums[x]`, then increment `x`.
   - Otherwise, skip the element (don’t store it).
3. After the loop, return `x` as the new length of the filtered array.

---

### 📈 Time and Space Complexity

- **Time Complexity:** O(n) — One full pass through the array.
- **Space Complexity:** O(1) — In-place operation, no extra memory used.

---

### ✅ Example

```js
Input:  nums = [3, 2, 2, 3], val = 3
Output: 2
Modified nums: [2, 2, _, _]  // First two elements are valid

Input:  nums = [0,1,2,2,3,0,4,2], val = 2
Output: 5
Modified nums: [0, 1, 3, 0, 4, _, _, _]  // First 5 elements are valid
