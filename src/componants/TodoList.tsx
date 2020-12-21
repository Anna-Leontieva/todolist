import React, { useState} from 'react';
import {FilterValuesType, TaskType} from './../App';
type TodoListType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskID:string)=>void
    changeFilter:(filterValue:FilterValuesType)=>void
    addTask:(title:string)=>void
}

function TodoList(props: TodoListType) {
    const[title,setTitle] = useState<string>("dddeeeeeedd");
    const addTask =()=>{props.addTask(title)
        setTitle("");   //щбнуление поля вода после введения таски
    };
    return (
        <div className="App">

            <div>
                <h3>{props.title}</h3>
                <div>
  {/* локальный импут   */}   <input value={title} 
                               onChange={(e)=>{setTitle(e.currentTarget.value)}}
                               onKeyPress={(e)=>{if(e.key === "Enter")addTask()}}/>  {/*При нажатиии Enter будет вводиться  Task */}
  {/* e.currentTarget ==== input */}
                    <button onClick={addTask}>+</button>
                </div>
                <ul>
           {
                props.tasks.map(task =>{
                    return(
                    <li>
                    <input type="checkbox" checked={task.isDone} /> 
                    <span>{task.title}</span>
                    <button onClick={()=>{props.removeTask(task.id)}}>x</button>
                    </li>)
                })
           
              }
                </ul>
                <div>
                    <button  onClick={()=>{props.changeFilter("all")}}>All</button>
                    <button onClick={()=>{props.changeFilter("active")}}>Active</button>
                    <button onClick={()=>{props.changeFilter("complited")}}>Completed</button>
                </div>
            </div>
        </div>
    );
}
export default TodoList;