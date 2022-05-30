// function calculate(operation, a = 12, b = 8){
//   console.log(`a`, a);
//   console.log(`b`, b);
//   console.log(`operation`, operation);
 
//   if (operation === 'plus'){
//     return a + b;
//   }else if(operation === 'minus'){
//     return a - b;
//   }
// }
// calculate  ('minus');


// function getSum(){
//   const num1 = +prompt('Введите первое число');
//   const num2 = +prompt('Второе');
//   const sum = num1 + num2;
//   alert (`Сумма:` sum);
// }
// getSum()
// getSum()

// function identification(){
//   let userName = prompt('Введите ваше имя');
//   let userAge = +prompt('Введите ваш возраст');

//     if(userAge > 30 ){
//       alert ('Здравствуйте'+ ' '+ userName );
//     }else if(userAge < 30 ){
//       alert ('Привет'+ ' '+ userName );
//     }
// }
// identification()



function pow(a, b) {
   let result = a;
   for (let i = 1; i < b; i++) {
     result *= a;
     console.log(result)
   }
   return result;
 }
 pow (5,2);
 