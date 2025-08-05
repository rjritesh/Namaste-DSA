## ❓ Problem: Find the Missing Number

### 🔍 Description  
Given an array containing `n` distinct numbers from `0` to `n`, find the **one number missing** from the range.

> Input array will have all numbers from `0` to `n` except one.  
> Your task is to return the missing number.

---

### 💡 Approach

We use the **mathematical formula** to calculate the expected sum of first `n` natural numbers:
- Formula: `totalSum = n * (n + 1) / 2`
- Then, subtract the **actual sum** of elements in the array from `totalSum` to find the missing number.

#### 🛠️ Steps:

1. Calculate expected total using the formula.
2. Calculate the actual sum by looping through the array.
3. Return the difference `totalSum - actualSum`.

---

### 📈 Time and Space Complexity

- **Time Complexity:** O(n) — One loop to calculate sum.
- **Space Complexity:** O(1) — No extra space used.

---

### ✅ Imagination

```js
result = 0 ^ 4 ^ (1 ^ 1) ^ (2 ^ 2)
       = 0 ^ 4 ^ 0 ^ 0
       = 4
