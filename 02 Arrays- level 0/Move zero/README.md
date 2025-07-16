## 0️⃣ Problem: Move All Zeros to the End of the Array

### 🔍 Description  
Write a function `removeZero(nums)` that moves all `0`s to the end of the array **in-place**, while maintaining the relative order of the non-zero elements.

> Do not return a new array. Modify the input array directly.

---

### 💡 Approach

We use a **two-pointer technique**:
- One pointer `i` scans every element.
- Another pointer `j` keeps track of the position to place non-zero values.

#### 🛠️ Steps:

1. Initialize `j = 0` to track where the next non-zero should go.
2. Traverse the array from left to right:
   - If `nums[i] !== 0`, copy `nums[i]` to `nums[j]`, then increment `j`.
3. After this loop, all non-zero elements are at the start, and `j` points to where zeros should begin.
4. Fill the rest of the array with 0s using a `while(j < nums.length)` loop.

---

### 📈 Time and Space Complexity

- **Time Complexity:** O(n) — One pass for non-zeros, one pass to fill zeros.
- **Space Complexity:** O(1) — Modified in-place without extra space.

---

### ✅ Example

```js
Input:  [0, 1, 0, 3, 12]
Output: [1, 3, 12, 0, 0]

Input:  [0, 0, 0, 1]
Output: [1, 0, 0, 0]
