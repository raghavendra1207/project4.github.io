const todoList = () => {
  all = []
  const add = (todoItem) => {
    all.push(todoItem)
  }
  const markAsComplete = (index) => {
    all[index].completed = true
  }

  const overdue=()=>{
    all1=[]

    for(let i=0;i<all.length;i++){
    let duedate1=all[i].dueDate;
    let duedate2=duedate1.slice(8,10);
    let today1=today.slice(8,10);
  
    if(duedate2<today1){
        all1.push(all[i]);
    }
    

    }
    return all1;
}

  const dueToday = () => {
    // Write the date check condition here and return the array of todo items that are due today accordingly.
    // FILL YOUR CODE HERE
    // ..
    // ..
    all1=[]

    for(let i=0;i<all.length;i++){
    let duedate1=all[i].dueDate;
    let duedate2=duedate1.slice(8,10);
    let today1=today.slice(8,10);
    a112=[]
    if(duedate2==today1){
      all1.push(all[i]);
    }
    

    }
    return all1;
    // ..
  }

  const dueLater = () => {
    // Write the date check condition here and return the array of todo items that are due later accordingly.
    // FILL YOUR CODE HERE
    // ..
    all1=[]

    for(let i=0;i<all.length;i++){
    let duedate1=all[i].dueDate;
    let duedate2=duedate1.slice(8,10);
    let today1=today.slice(8,10);

    if(duedate2>today1){
      all1.push(all[i]);
    }
    

    }
    return all1;
    // ..
    // ..
  }

  const toDisplayableList = (list) => {
    // Format the To-Do list here, and return the output string as per the format given above.
    // FILL YOUR CODE HERE
    // ..
    // ..
    // ..
    // return OUTPUT_STRING
    let overdue1=overdue();
    let dueToday1=dueToday();
    let dueLater1=dueLater();
    
    
    if(JSON.stringify(list)==JSON.stringify(overdue1)){
      let result="";
        for(let i=0;i<overdue1.length;i++)
        {
          
            if(overdue1[i].completed==true){
                
                result=result+"[x] "+overdue1[i].title+" "+overdue1[i].dueDate;
                
            }
            else{
                result=result+ "[] "+overdue1[i].title+" "+overdue1[i].dueDate;
            }
            if(i!=dueLater1.length){
              result=result+"\n";
            }
        }
        return result;
    }
    else if(JSON.stringify(list)==JSON.stringify(dueToday1)){
      let result="";
        for(let i=0;i<dueToday1.length;i++)
        {
            if(dueToday1[i].completed==true){
                result=result+"[x] "+dueToday1[i].title;
            }
            else{
                result=result+"[] "+dueToday1[i].title;
            }
            if(i!=dueLater1.length){
              result=result+"\n";
            }
        }
        return result;

    }
    else if(JSON.stringify(list)==JSON.stringify(dueLater1)){
      let result="";
        for(let i=0;i<dueLater1.length;i++)
        {
            if(dueLater1[i].completed==true){
                result=result+ "[x] "+dueLater1[i].title+" "+dueLater1[i].dueDate;
            }
            else{
               result=result+ "[] "+dueLater1[i].title+" "+dueLater1[i].dueDate;
            }
            if(i!=dueLater1.length){
              result=result+"\n";
            }
        }
        return result;
    }

    }
  

  return { all, add, markAsComplete, overdue, dueToday, dueLater, toDisplayableList };
}

// ####################################### #
// DO NOT CHANGE ANYTHING BELOW THIS LINE. #
// ####################################### #

const todos = todoList();

const formattedDate = d => {
  return d.toISOString().split("T")[0]
}

var dateToday = new Date()
const today = formattedDate(dateToday)
const yesterday = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() - 1))
)
const tomorrow = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() + 1))
)

todos.add({ title: 'Submit assignment', dueDate: yesterday, completed: false })
todos.add({ title: 'Pay rent', dueDate: today, completed: true })
todos.add({ title: 'Service Vehicle', dueDate: today, completed: false })
todos.add({ title: 'File taxes', dueDate: tomorrow, completed: false })
todos.add({ title: 'Pay electric bill', dueDate: tomorrow, completed: false })

console.log("My Todo-list\n\n")

console.log("Overdue")
var overdues = todos.overdue()
var formattedOverdues = todos.toDisplayableList(overdues)
console.log(formattedOverdues)
console.log()

console.log("Due Today")
let itemsDueToday = todos.dueToday()
let formattedItemsDueToday = todos.toDisplayableList(itemsDueToday)
console.log(formattedItemsDueToday)
console.log()

console.log("Due Later")
let itemsDueLater = todos.dueLater()
let formattedItemsDueLater = todos.toDisplayableList(itemsDueLater)
console.log(formattedItemsDueLater)
console.log()