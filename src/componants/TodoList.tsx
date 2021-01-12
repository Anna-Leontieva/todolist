import { title } from 'process';
import React, { ChangeEvent, KeyboardEvent, useState } from 'react';
import AddItemForm from '../AddItemForm';
import EditableSpan from '../EditableSpan';
import { FilterValuesType, TaskType } from './../App';
type NewType = {
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
};

type TodoListType = NewType

function TodoList(props: TodoListType) {
    const addTask=(title:string)=>{
        props.addTask(title,props.id)
    }

    const onAllClickHandler = () => { props.changeFilter("all",props.id) }
    const onActiveClickHandler = () => { props.changeFilter("active",props.id) }
    const onComplitedClickHandler = () => { props.changeFilter("complited",props.id) }
    const changeTitle=(title:string)=>{
        props.changeTodoListTitle(title,props.id)
    }
    return (
        <div className="App">

            <div>
                <h3><EditableSpan title={props.title} changeTitle={changeTitle}/></h3>
               <AddItemForm addItem={addTask}/>
                <ul>
                    {
                        props.tasks.map(task => {
                            const removeTask = () => { props.removeTask(task.id,props.id) }
                            const changeStatus = (e: ChangeEvent<HTMLInputElement>) => { props.changeStatus(task.id, e.currentTarget.checked,props.id) }
                            const changeTitle=(title:string)=>{props.changeTaskTitle(task.id,title,props.id)}
                            return (
                                <li key={task.id}
                                    className={task.isDone ? "is-done" : ""}>
                                    {/* // kеу нужно для того чтоби Реакт отличал одну Ли-шку от другой */}
                                    <input
                                        type="checkbox"
                                        checked={task.isDone}
                                        onChange={changeStatus}
                                     />
                                    <EditableSpan title={task.title} changeTitle={changeTitle}/>
                                    <button onClick={removeTask}>x</button>

                                </li>)
                        })

                    }
                </ul>
                <div>
                    <button
                        className={props.filter === "all" ? "active-filter" : ""}
                        onClick={onAllClickHandler}>All</button>
                    <button
                        className={props.filter === "active" ? "active-filter" : ""}
                        onClick={onActiveClickHandler}>Active</button>
                    <button
                        className={props.filter === "complited" ? "active-filter" : ""}
                        onClick={onComplitedClickHandler}>Completed</button>
                </div>
            </div>
        </div>
    );
}
export default TodoList;