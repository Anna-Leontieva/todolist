import React,{useState} from 'react';
import { v1 } from 'uuid';//авто импорт id
import './App.css';
import TodoList from './componants/TodoList';
export type TaskType = {
    title: string
    isDone: boolean
    id:string
}
export type FilterValuesType = "all" |"active" |"complited";
function App() {
    console.log(v1());
    const[tasks, setTask] = useState<Array<TaskType>>(
        [
            {id: v1(), title: "HTML&CSS", isDone: true },
            { id: v1(), title: "JS", isDone: true },
            { id: v1(), title: "ReactJS", isDone: false },
            { id: v1(), title: "AAAAA", isDone: true },
            { id: v1(), title: "BBBB", isDone: true },
            { id: v1(), title: "GGGG", isDone: false},
            { id: v1(), title: "VVVVVV", isDone: false}
        ])


const[filter,setFilter]=useState<FilterValuesType>("all")

  function removeTask(taskID:string){
     const newTasks=tasks.filter(task=>task.id !== taskID)
     setTask(newTasks)
    }

    function changeFilter(filterValue:FilterValuesType){
        setFilter(filterValue);
    }
    function addTask(title:string){      //Добавлять новую таску,новый массив
        const newTask:TaskType={
            id:v1(),
            title: title,
            isDone:false
        }
        setTask([newTask,...tasks])//setTask типо переменная const
    }



    function changeStatus(taskID:string, isDone:boolean){
        const task=tasks.find(t=>t.id === taskID)      ///find помогает найти нужный єлемент по ID и віходит из массива (достает 1 єлемент)
        if(task){
            task.isDone = isDone
            setTask([...tasks])
        }

    }

    let tasksForTodoList = tasks;
    if(filter==="active"){
        tasksForTodoList =tasks.filter(t=>t.isDone === false);
    }
    if(filter==="complited"){
        tasksForTodoList=tasks.filter(t=>t.isDone===true);
    }
    //UI:
    return (
        <div className="App">
            <TodoList title={"What to learn"} 
            filter={filter}
            tasks={tasksForTodoList} 
            removeTask={removeTask}
            changeFilter={changeFilter}
            addTask={addTask}
            changeStatus={changeStatus}
             />
        </div>
    )
}

export default App;
