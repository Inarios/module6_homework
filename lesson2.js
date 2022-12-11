function numIsPrime(number){
    let result;
    let primeNum = true;
   if(number < 2 || number > 1000 || isNaN(number)) {
        result = "Ошибка"
   }
   else {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
        primeNum = false;
        }
    }
    result = primeNum? `Число ${number} - простое`: `Число ${number} - Сложное`;
   }
   console.log(result)
}
numIsPrime(25)