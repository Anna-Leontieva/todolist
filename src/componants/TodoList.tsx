import React, { ChangeEvent, KeyboardEvent, useState} from 'react';
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
        setTitle("");   //обнуление поля вода после введения таски
    };

    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>)=>{setTitle(e.currentTarget.value)}
    const onKeyPressHandler = (e:KeyboardEvent<HTMLInputElement>)=>{if(e.key === "Enter")addTask()}
    const onAllClickHandler = () => {props.changeFilter("all")}
    const onActiveClickHandler = () => {props.changeFilter("active")}
    const onComplitedClickHandler = () => {props.changeFilter("complited")}
    return (
        <div className="App">

            <div>
                <h3>{props.title}</h3>
                <div>
  {/* локальный импут   */}   <input value={title} 
                               onChange={onChangeHandler}
                               onKeyPress={onKeyPressHandler}/>  {/*При нажатиии Enter будет вводиться  Task */}
  {/* e.currentTarget ==== input */}
                    <button onClick={addTask}>+</button>
                </div>
                <ul>
           {
                props.tasks.map(task =>{
                    const removeTask = () => {props.removeTask(task.id)}
                    return(
                    <li>
                    <input type="checkbox" checked={task.isDone} /> 
                    <span>{task.title}</span>
                    <button onClick={removeTask}>x</button>
                    </li>)
                })
           
              }
                </ul>
                <div>
                    <button  onClick={onAllClickHandler}>All</button>
                    <button onClick={onActiveClickHandler}>Active</button>
                    <button onClick={onComplitedClickHandler}>Completed</button>
                </div>
            </div>
        </div>
    );
}
export default TodoList;