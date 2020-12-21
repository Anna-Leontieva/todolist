import React,{useState} from 'react';
import { v1 } from 'uuid';
import './App.css';
import TodoList from './componants/TodoList';
export type TaskType = {
    title: string
    isDone: boolean
    id:number
}
export type FilterValuesType = "all" |"active" |"complited";
function App() {
    console.log(v1());
    const[tasks, setTask] = useState<Array<TaskType>>(
        [
            {id: 1, title: "HTML&CSS", isDone: true },
            { id: 2, title: "JS", isDone: true },
            { id: 3, title: "ReactJS", isDone: false },
            { id: 9, title: "AAAAA", isDone: true },
            { id: 6, title: "BBBB", isDone: true },
            { id: 8, title: "GGGG", isDone: false},
            { id: 5, title: "VVVVVV", isDone: false}
        ])
const[filter,setFilter]=useState<FilterValuesType>("all")

  function removeTask(taskID:number){
     const newTasks=tasks.filter(task=>task.id !== taskID)
     setTask(newTasks)
    }

    function changeFilter(filterValue:FilterValuesType){
        setFilter(filterValue);
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
            tasks={tasksForTodoList} 
            removeTask={removeTask}
            changeFilter={changeFilter}
             />
        </div>
    )
}

export default App;
