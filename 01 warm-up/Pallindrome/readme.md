## 🔁 Problem: Check if a Number is a Palindrome

### 🔍 Description  
Write a function `isPalindrome(x)` that checks whether an integer is a palindrome.

A **palindrome number** is a number that reads the same forward and backward.

The function should work for:
- Positive numbers  
- Zero  
- Negative numbers (should return `false`, as `-121` ≠ `121-`)

---

### 💡 Approach

We reverse the given number using digit-wise processing and compare it to the original number.

#### 🛠️ Steps:

1. If `x` is negative, return `false` immediately.
2. Store the original number in a variable `xCopy`.
3. Initialize `rev = 0` to hold the reversed number.
4. Use a `while` loop until `x` becomes 0:
   - Extract the last digit using `x % 10`  
     ❌ `Math.floor()` is **not needed** here because `%` gives an integer.
   - Append it to `rev`: `rev = rev * 10 + rem`
   - Remove the last digit from `x` using `Math.floor(x / 10)`  
     ✅ Required because `/` in JavaScript gives a decimal.
5. Finally, return whether `rev === xCopy`.

---

### 📈 Time and Space Complexity

- **Time Complexity:** O(log₁₀(n)) — Each step removes one digit.
- **Space Complexity:** O(1) — Uses only fixed number of variables.

---

### ✅ Example

```js
Input:  121
Output: true

Input:  -121
Output: false

Input:  123
Output: false

Input:  0
Output: true
