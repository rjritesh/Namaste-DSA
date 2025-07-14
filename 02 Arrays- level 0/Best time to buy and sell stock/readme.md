## 📈 Problem: Best Time to Buy and Sell Stock

### 🔍 Description  
Write a function `maxProfit(prices)` that takes an array of stock prices, where `prices[i]` is the price of a given stock on the `i`-th day.  

You may choose to **buy one stock and sell one stock later**, but only once.  
Return the **maximum profit** you can achieve. If no profit is possible, return `0`.

---

### 💡 Approach

We keep track of:
- The **minimum price** seen so far (best day to buy),
- And calculate the **maximum profit** by checking how much we would earn if we sold on the current day.

#### 🛠️ Steps:

1. Initialize `minPrice = Infinity` to track the lowest price so far.
2. Initialize `maxProfit = 0` to store the best possible profit.
3. Loop through the prices array:
   - If `prices[i]` is less than `minPrice`, update `minPrice`.
   - Else, calculate profit = `prices[i] - minPrice` and update `maxProfit` if it's better.
4. After the loop ends, return `maxProfit`.

---

### 📈 Time and Space Complexity

- **Time Complexity:** O(n) — Single pass through the array.
- **Space Complexity:** O(1) — No extra space used.

---

### ✅ Example

```js
Input:  [7, 1, 5, 3, 6, 4]
Output: 5
// Buy at 1, Sell at 6 → Profit = 6 - 1 = 5

Input:  [7, 6, 4, 3, 1]
Output: 0
// No profitable transaction → return 0
