

//let a = prompt("введите любое числo ");
//let b = prompt("еще одно ");

//console.log(`a`, a);
//console.log(`b`, b);


//if (a > b){
// alert("первое число больше второго");
//} else if (a < b){
//alert("второе число больше первого");
//} else if (a = b){
//  alert(" они равны");
//}

const num1 = +prompt("введите первое числo");
const num2 = +prompt("второе");
const operation = prompt("Какое действие провести + - / * ?");
let result;

switch (operation) {
  case '+':
    result = num1 + num2;
    break;
  case '-':
    result = num1 - num2;
    break;
  case '*':
    result = num1 * num2;
    break;
  case '/':
    result = num1 / num2;
    break;
}
alert(`${result}`);




