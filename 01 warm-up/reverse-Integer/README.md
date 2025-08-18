# 🔄 Problem: Reverse Integer  

### 🔍 Description  
Write a function `reverseInteger(num)` that reverses the digits of an integer.  

> If the integer is negative, keep the sign intact.  
> If the reversed integer goes out of 32-bit signed integer range (`[-2^31, 2^31 - 1]`), return `0`.  

---

## 💡 Approaches  

### 🥇 Approach 1: Mathematical (Modulus & Division)  
We extract digits one by one and build the reversed number.  

#### 🛠️ Steps:  
1. Initialize `rev = 0`.  
2. While `num !== 0`:  
   - Extract last digit → `digit = num % 10`  
   - Update reversed number → `rev = rev * 10 + digit`  
   - Remove last digit → `num = Math.floor(num / 10)`  
3. Handle negative by keeping sign or using `Math.sign(num)`.  
4. If result overflows 32-bit signed integer → return `0`.  

#### 📈 Time and Space Complexity  
- **Time Complexity:** O(log n) — proportional to number of digits  
- **Space Complexity:** O(1) — constant space  
