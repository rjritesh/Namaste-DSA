## 🔁 Problem: Reverse a String (In-Place)

### 🔍 Description  
Write a function `reverseString(s)` that reverses the characters in an array `s` **in-place**, using O(1) extra space.

The function should:
- Modify the input array directly.
- Not return anything — just reverse the string in-place.

---

### 💡 Approach

We use the **two-pointer technique** to swap characters from both ends of the array moving inward.

#### 🛠️ Steps:

1. Find the length of the array.
2. Calculate the half-length using `Math.floor(len / 2)`.
3. Loop from `i = 0` to `i < half`:
   - Store `s[i]` in a temporary variable.
   - Set `s[i] = s[len - 1 - i]` (mirror element from the end).
   - Set `s[len - 1 - i] = temp` (swap).
4. This swaps all elements symmetrically and reverses the array.

---

### 📈 Time and Space Complexity

- **Time Complexity:** O(n) — Each element is visited once.
- **Space Complexity:** O(1) — Swapping is done in-place without using extra memory.

---

### ✅ Example

```js
Input:  ["h", "e", "l", "l", "o"]
Output: ["o", "l", "l", "e", "h"]

Input:  ["H", "a", "n", "n", "a", "h"]
Output: ["h", "a", "n", "n", "a", "H"]
