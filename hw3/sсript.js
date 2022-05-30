

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

// const num1 = +prompt("введите первое числo");
// const num2 = +prompt("второе");
// const operation = prompt("Какое действие провести + - / * ?");
// let result;

// switch (operation) {
//   case '+':
//     result = num1 + num2;
//     break;
//   case '-':
//     result = num1 - num2;
//     break;
//   case '*':
//     result = num1 * num2;
//     break;
//   case '/':
//     result = num1 / num2;
//     break;
// }
// alert(`${result}`);




const visitorAge = +prompt('Сколько вам лет?');
const isWithParents = confirm('Вы с родителями?');


if (visitorAge < 12 || visitorAge > 80){
  console.log('Проход запрещен');
}else if(visitorAge >= 18 && visitorAge <= 60){
  console.log('Проход разрешен *');
}else if((visitorAge >=12 && visitorAge <=18)||(visitorAge >=60 && visitorAge <=80) && (isWithParents)){
  console.log('Проход разрешен ');
};
