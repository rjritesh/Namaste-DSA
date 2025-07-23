## ❓ Problem: Max Consecutive Ones

### 🔍 Description  
Given a binary array `nums`, return the **maximum number of consecutive 1s** in the array.

> The array only contains `0`s and `1`s.  
> Your task is to return the length of the longest sequence of `1`s that appear together.

---

### 💡 Approach

We use a **simple loop** to track consecutive `1`s:
- Maintain two counters `count` for current streak of 1s and `maxCount`.
- Update `maxCount` whenever a `0` is encountered or at the end of the loop.

#### 🛠️ Steps:

1. Loop through the array.
2. If `nums[i] === 1`, increment `count`.
3. If `nums[i] === 0`, update `maxCount` and reset `count` to 0.
4. Return the maximum of `count` and `maxCount`.

---

### 📈 Time and Space Complexity

- **Time Complexity:** O(n) — One pass through the array.
- **Space Complexity:** O(1) — No extra space used.

---

### ✅ Example

```js
Input:  [1, 1, 1, 1, 1, 0, 1, 1, 1]
Output: 5

Input:  [1, 0, 1, 1, 0, 1]
Output: 2
