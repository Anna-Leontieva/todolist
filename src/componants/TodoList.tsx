import React from 'react';
import {FilterValuesType, TaskType} from './../App';
type TodoListType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskID:number)=>void
    changeFilter:(filterValue:FilterValuesType)=>void
}

function TodoList(props: TodoListType) {
    return (
        <div className="App">

            <div>
                <h3>{props.title}</h3>
                <div>
                    <input />
                    <button>+</button>
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