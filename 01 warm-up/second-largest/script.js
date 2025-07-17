## 🥈 Problem: Find the Second Largest Element in an Array

### 🔍 Description  
Write a function `secondLargest(arr)` that returns the **second largest** number from the input array.

> If the array has less than 2 distinct elements, return an appropriate message.

---

### 💡 Approach

We use a **single-pass linear scan**:
- Keep track of both the **largest** and the **second largest** elements during traversal.

#### 🛠️ Steps:

1. Initialize `largest = -Infinity` and `secondLargest = -Infinity`.
2. Loop through each element:
   - If current element > `largest`:  
     - Set `secondLargest = largest`
     - Update `largest` to current element
   - Else if current element > `secondLargest` **and not equal** to `largest`:
     - Update `secondLargest` to current element
3. Return `secondLargest` at the end.

---

### 📈 Time and Space Complexity

- **Time Complexity:** O(n) — Only one loop through the array.
- **Space Complexity:** O(1) — No extra space used.

---

### ✅ Example

```js
Input:  [122, 324, 56, 78]
Output: 122

Input:  [99, 99, 99]
Output: -Infinity or message (no second largest)
