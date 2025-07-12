## 🧮 Problem: Find Second Largest Element in an Array

### 🔍 Description
Given an array of integers, find the **second largest unique element**.  
If such an element does not exist (e.g., all elements are equal or only one element exists), return `-1`.

---

### 💡 Approach

We solve this problem using a **single-pass traversal** and two tracking variables:

- `largest`: stores the largest number seen so far
- `secondLargest`: stores the second largest number

#### 🛠️ Logic:

1. Initialize both variables to `-Infinity`.
2. Traverse the array:
   - If the current element is greater than `largest`:
     - Assign `secondLargest = largest` **before** updating `largest`.  
       ✅ **Reason:** This stores the old largest value which is now the second largest.
     - Then update `largest = current number`.
   - Else if the current element is between `largest` and `secondLargest`, and not equal to `largest`, update `secondLargest`.
3. After the loop:
   - If `secondLargest` is still `-Infinity`, return `-1` (no valid second largest).

---

### 📈 Time and Space Complexity

- **Time Complexity:** O(n) – Single pass through the array.
- **Space Complexity:** O(1) – No extra space used, just variables.

---

### ✅ Example

```js
Input:  [12, 10, 30, 203]
Output: 30
