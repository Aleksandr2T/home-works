const makeASchedule = () =>{
  let end = false
  const timetable ={};
  do{
    let addTime = prompt('Add time');
    let addTask = prompt('Add Task:');
    if((addTask == null || addTime == null) || !addTask || !addTime){
      end = true
    }else{
      timetable[addTime] = addTask
      alert('task added')
    }
  }while (!end) 
  console.log(timetable);
}