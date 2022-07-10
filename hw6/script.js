

// const getRGBFromHex = (hexCode) =>{
//   const red = hexCode.slice(1, 3);
//   const green = hexCode.slice(3, 5);
//   const blue = hexCode.slice(5, 7);

//   // console.log(`red`, red)
//   // console.log(`green`, green)
//   // console.log(`blue`, blue)
  
//   const decimalRed = parseInt(red, 16);
//   const decimalGreen = parseInt(green, 16);
//   const decimalBlue = parseInt(blue, 16);

//   return `rgb(${decimalRed}, ${decimalGreen}, ${decimalBlue})`
   

// }
//  const rgbResult = getRGBFromHex('#ffffff');
//  console.log(`rgbResult`, rgbResult)



// const maskCreditCard = (cardNumber)=>{
//  const MASK = '****';
//  let result = '';
 

//  for(let i = 0, j = 1; i < cardNumber.length; i += 4, j++){
//   const numbers = cardNumber.slice(i, i + 4);
//   let maskingResult;
//   console.log(`numbers`, numbers);

//   if(j === 2 || j === 3){
//     maskingResult = MASK
//   }else{
//     maskingResult = numbers
//   }
//   if (j !== 4){
//     result += `${maskingResult} `
//   }else{
//     result += maskingResult
//   }
//  }
//  return result
// }
// const res = maskCreditCard('2541369874541236');

// console.log(`res`, res);

  



let userName
let userLastName
let userPassword

// const caseCorrection = (userCorrection) =>{
//   const firstLetter = (userCorrection[0]).toUpperCase();
//   const otherLetters = (userCorrection(1)).toLowerCase();
//   return firstLetter + otherLetters;
// }


const userRegName = () =>{
  do{
    userName = prompt('Ваше имя:');
    if(!userName){
      alert('Имя должно содержат хотя бы 1 символ')
    }else{
      break
    }
  }while(true);
  console.log(userName) 

  const upperCaseCorrection = caseCorrection(userName)
  return upperCaseCorrection
};


