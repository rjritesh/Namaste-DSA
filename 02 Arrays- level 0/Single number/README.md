## ❓ Problem: Single Number

### 🔍 Description  
Given a **non-empty array of integers** `nums`, every element appears **twice** except for one. Find that **single one**.

> You must implement a solution with **linear runtime complexity** and use **only constant extra space**.

---

### 💡 Approach: Bit Manipulation (XOR)

We use the **XOR (^) operator** because:

- `a ^ a = 0`
- `a ^ 0 = a`
- XOR is **commutative and associative**

So, if we XOR all elements, the duplicates will cancel out and we’ll be left with the single number.

---

### 📈 Time and Space Complexity

- **Time Complexity:** O(n) — Loop through the array once.
- **Space Complexity:** O(1) — No extra space used.

---

### ✅ Example

```js
Input:  [4, 1, 2, 1, 2]
Output: 4

Input:  [2, 2, 3]
Output: 3
