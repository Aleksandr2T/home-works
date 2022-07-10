

let userName
let userLastName
let userPassword

const upperCaseString = (userString)=>{
  const firstSymbolString = (userString[0]).toUpperCase();
  const symbolsString = (userString.slice(1)).toLowerCase();
  return firstSymbolString + symbolsString;
};
const userRegistrationName = ()=>{
  do{
    userName = prompt('Введите ваше имя:');
    if(!userName){
      alert('Введите хотябы один символ')
    }else{
      break
    }
  }while (true);
    console.log(userName)
  const upperCaseName = upperCaseString(userName)
  return upperCaseName
}