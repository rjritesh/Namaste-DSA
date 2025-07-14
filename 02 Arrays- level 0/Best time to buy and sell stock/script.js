function maxProfit(prices){
  let minPrice = Infinity;
  let maxProfit = 0;

  for(let i = 0; i < prices.length; i++){
    if(prices[i] < minPrice){
      minPrice = prices[i];
    }
    else{
      maxProfit = Math.max(maxProfit, prices[i] - minPrice)
    }
  }
  return maxProfit;
}

let array = [7,1,5,3,6,4];
console.log(maxProfit(array))