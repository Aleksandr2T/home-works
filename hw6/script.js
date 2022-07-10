

let userName
let userLastName
let userPassword

const upperCaseString = (userString)=>{

  const firstSymbolString = (userString[0]).toUpperCase();
    
  const symbolsString = (userString.slice(1)).toLowerCase();
     
  return firstSymbolString + symbolsString;
}
const userRegistrationName = ()=>{
  do{
    userName = prompt('Введите ваше имя:');
    if(!userName){
      alert('Введите хотябы один символ')
    }else{
      break
    }
  }while (true);
    // console.log(userName)
  const upperCaseName = upperCaseString(userName)
  console.log(upperCaseName)
  return upperCaseName
  
}
const userRegistrationLastName = ()=>{
  do{
    userLastName = prompt('Введите вашу фамилию:');
    if(!userLastName){
      alert('Введите хотябы один символ')
    }else{
      break
    }
  }while (true);
    // console.log(userLastName)
  const upperCaseLastName = upperCaseString(userLastName)
  console.log(upperCaseLastName)
  return upperCaseLastName
}
const userRegistrationPassword =()=>{
  do{
    userPassword = prompt('Придумайте пароль:');

    if(!userPassword || userPassword.length <6){
      alert('Введите не менее 6 чисел')
    }else if(!isNaN(userPassword) || userPassword.toLowerCase() === userPassword || userPassword.toUpperCase === userPassword){
      alert('Не коректный пароль')
    }else{
      alert('Регистрация прошла успешно!')
      break
    }
  }while(true)  
  return userPassword;
}
 const resName = userRegistrationName();
 const resLastName = userRegistrationLastName();
 const resPassword = userRegistrationPassword();

  alert(`Вы зарегестрированы как: ${resName} ${resLastName} Ваш пароль: ${resPassword}`);