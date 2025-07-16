## 🔀 Problem: Merge Sorted Arrays (In-Place)

### 🔍 Description  
Write a function `merge(nums1, m, nums2, n)` that merges two sorted arrays `nums1` and `nums2` into one sorted array **in-place** inside `nums1`.

- `nums1` has a size of `m + n`, with the first `m` elements filled, and the rest set to 0.
- `nums2` has `n` elements.
- Merge `nums2` into `nums1` so that `nums1` becomes a single sorted array of size `m + n`.

---

### 💡 Approach

We use a **three-pointer technique**, starting from the end of both arrays and inserting the largest element at the end of `nums1`.

#### 🛠️ Steps:

1. Set three pointers:
   - `i = m - 1` (last valid element in `nums1`)
   - `j = n - 1` (last element in `nums2`)
   - `k = m + n - 1` (last index of `nums1`)
2. While both `i >= 0` and `j >= 0`:
   - If `nums1[i] > nums2[j]`, place `nums1[i]` at `nums1[k]`, and move `i--`
   - Else place `nums2[j]` at `nums1[k]`, and move `j--`
   - Move `k--` after each step
3. After the loop, if any elements remain in `nums2`, copy them to `nums1` (i.e., when `j >= 0`)
4. No need to copy from `nums1` — they’re already in place.

---

### 📈 Time and Space Complexity

- **Time Complexity:** O(m + n) — One pass through both arrays
- **Space Complexity:** O(1) — Merged in-place

---

### ✅ Example

```js
Input:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3

Output:
nums1 = [1,2,2,3,5,6]
