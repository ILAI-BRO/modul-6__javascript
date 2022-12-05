function isSumm(number) {
  
    let BolTrue = 'число простое';
    let BolFalse = 'Ответ не верный';
   
  
  
   if (number == 2) return BolTrue;
   if (number < 1 && number > 1000) return "Ошибка";
  
  
    for (let i = 2; i <= number / 2; i++) {
   
    if (number % i == 0) {
      return BolFalse;
    }
      
    }
    return BolTrue;
    }

console.log(isSumm(1001));
console.log(isSumm(23)); 
