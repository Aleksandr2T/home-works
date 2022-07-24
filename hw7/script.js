// const makeASchedule = () =>{
//   let end = false
//   const timetable ={};
//   do{
//     let addTime = prompt('Add time');
//     let addTask = prompt('Add Task:');
//     if((addTask == null || addTime == null) || !addTask || !addTime){
//       end = true
//     }else{
//       timetable[addTime] = addTask
//       alert('task added')
//     }
//   }while (!end) 
//   console.log(timetable);
// }


let salaries = {
  John: "4300.00",
  Ann: "5700.40",
  Pete: "4900.95",
};
const totalAmount = (salaries) =>{

  let sum = 0;
  for (let key in salaries) {
     sum += +salaries[key];
    
  }
  let result = sum.toFixed(2)
  return result
}  
const sum = +totalAmount(salaries)
console.log(sum) 