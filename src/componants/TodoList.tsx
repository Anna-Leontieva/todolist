import { title } from 'process';
import React, { ChangeEvent, KeyboardEvent, useState } from 'react';
import AddItemForm from '../AddItemForm';
import EditableSpan from '../EditableSpan';
import { FilterValuesType, TaskType } from './../App';
import {IconButton,Checkbox,Button} from '@material-ui/core';
import {Delete} from '@material-ui/icons';
type TodoListType = {
    id: string;
    title: string;
    tasks: Array<TaskType>;
    removeTask: (taskID: string, todoListID: string) => void;
    changeFilter: (filterValue: FilterValuesType, todoListID: string) => void;
    addTask: (title: string, todoListID: string) => void;
    changeStatus: (taskID: string, isDone: boolean, todoListID: string) => void;
    filter: FilterValuesType;
    changeTaskTitle: (taskID: string, title: string, todoListID: string) => void;
    changeTodoListTitle:(title:string,todoListID: string)=>void
    removeTodoList:(todoListID:string)=>void
};

function TodoList(props: TodoListType) {
    const addTask=(title:string)=>{
        props.addTask(title,props.id)
    }

    const onAllClickHandler = () => { props.changeFilter("all",props.id) }
    const onActiveClickHandler = () => { props.changeFilter("active",props.id) }
    const onComplitedClickHandler = () => { props.changeFilter("complited",props.id) }
    const removeTodoList=()=>{props.removeTodoList(props.id)}
    const changeTitle=(title:string)=>{
        props.changeTodoListTitle(title,props.id)
    }
    return (
        <div className="App">

            <div>
                <h3><EditableSpan title={props.title} changeTitle={changeTitle}/><IconButton  onClick={removeTodoList}><Delete/></IconButton></h3>
         
               <AddItemForm addItem={addTask}/>
                <ul style={{listStyle:"none",padding:"0px"}}>
                    {
                        props.tasks.map(task => {
                            const removeTask = () => { props.removeTask(task.id,props.id) }
                            const changeStatus = (e: ChangeEvent<HTMLInputElement>) => { props.changeStatus(task.id, e.currentTarget.checked,props.id) }
                            const changeTaskTitle=(title:string)=>{props.changeTaskTitle(task.id,title,props.id)}
                            return (
                                <li key={task.id}
                                    className={task.isDone ? "is-done" : ""}>
                                    {/* // kеу нужно для того чтоби Реакт отличал одну Ли-шку от другой */}
                                    <Checkbox
                                        color={"primary"}
                                        checked={task.isDone}
                                        onChange={changeStatus}
                                     />
                                    <EditableSpan title={task.title} changeTitle={changeTaskTitle}/>
                                    <IconButton onClick={removeTask}><Delete/></IconButton>

                                </li>)
                        })

                    }
                </ul>
                <div>
                    <Button 
                    style={{marginRight:"3px"}}
                    size={"small"}
                    variant={props.filter==="all"?"outlined":"contained"}
                    color={"primary"}
                        // className={props.filter === "all" ? "active-filter" : ""}
                        onClick={onAllClickHandler}>All</Button>
                    <Button
                    style={{marginRight:"3px"}}
                    size={"small"}
                    variant={props.filter==="active"?"outlined":"contained"}
                    color={"primary"}
                        // className={props.filter === "active" ? "active-filter" : ""}
                        onClick={onActiveClickHandler}>Active</Button>
                    <Button
                    size={"small"}
                    variant={props.filter==="complited"?"outlined":"contained"}
                    color={"primary"}
                        // className={props.filter === "complited" ? "active-filter" : ""}
                        onClick={onComplitedClickHandler}>Completed</Button>
                </div>
            </div>
        </div>
    );
}
export default TodoList;