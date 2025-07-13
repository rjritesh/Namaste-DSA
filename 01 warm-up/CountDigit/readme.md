## 🔢 Problem: Count Digits in an Integer

### 🔍 Description
Write a function `countDigits(n)` that takes an integer `n` and returns the number of digits it contains.

The function should work for:
- Positive numbers
- Zero
- Negative numbers (by counting digits without the sign)

---

### 💡 Approach

We use a simple **loop-based approach** to count how many times the number can be divided by 10 before it becomes 0.

#### 🛠️ Steps:

1. Convert `n` to positive using `Math.abs(n)` so negative sign doesn't count.
2. If `n` is 0, return 1 (since 0 has 1 digit).
3. Initialize a counter to 0.
4. Use a `while` loop:
   - Divide `n` by 10 using `Math.floor(n / 10)`
   - Increment the counter on each iteration
5. Return the counter as the result.

---

### 📈 Time and Space Complexity

- **Time Complexity:** O(log₁₀(n)) — Each division by 10 removes one digit.
- **Space Complexity:** O(1) — No extra space used.

---

### ✅ Example

```js
Input:  12345
Output: 5

Input:  -789
Output: 3

Input:  0
Output: 1
