function sum_Of_Digits(n) {
    if (n < 0) 
    n = -n
     if (n < 10) 
     return n
     return (n % 10) + sum_Of_Digits(Math.floor(n / 10))
  }
  console.log(sum_Of_Digits(88))