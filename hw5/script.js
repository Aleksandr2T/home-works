
// const LOGIN =  'ADMIN';
// const PASSWORD = '654321';
// const authorize = () =>{
 
//  let isAuthSuccess = false;
//  let userAttempts = 3;

//  while(userAttempts !== 0){
//    let userLogin = prompt('Логин:');
    
//    if(!userLogin) {
//      alert('Введите логин:');
//      continue;
//    }
//    let userPassword = prompt('Пароль:');
//    if(!userPassword){
//      alert('Введите пароль');
//      continue;
//    }
//    if(userPassword === PASSWORD || userLogin === LOGIN){
//       isAuthSuccess = true;
//       break;

     
     
//    }else{
//     userAttempts--
//      alert(`Данные не верны! , Колличество оставшихся попыток: ${userAttempts}`);
     
//    }
  
   
//  }
//     if(isAuthSuccess){
//      alert('Welcome!');
//     }
// };


// authorize();
const primeNember = (a, b)=>{
  if(a <= 1){
    alert('Ошибка, число меньше или равно 1')
  };
nextPrime:
 for(let i = a; i <= b; i++){
  for(let j = 2; j < i; j++){
    if (i % j === 0){
      continue nextPrime;
    }
  }
  console.log(i)

 }
}; 

 primeNember(3, 11)
