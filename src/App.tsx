import React,{useState} from 'react';
import './App.css';
import TodoList from './componants/TodoList';
export type TaskType = {
    title: string
    isDone: boolean
    id:number
}
function App() {
    
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
  function removeTask(taskID:number){
     const newTasks=tasks.filter(task=>task.id !== taskID)
     setTask(newTasks)
    }
    //UI:
    return (
        <div className="App">
            <TodoList title={"What to learn"} 
            tasks={tasks} 
            removeTask={removeTask}
             />
        </div>
    )
}

export default App;
