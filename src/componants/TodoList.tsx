import React, { ChangeEvent, KeyboardEvent, useState } from 'react';
import { FilterValuesType, TaskType } from './../App';
type TodoListType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskID: string) => void
    changeFilter: (filterValue: FilterValuesType) => void
    addTask: (title: string) => void
    changeStatus: (taskID: string, isDone: boolean) => void
    filter: FilterValuesType
}

function TodoList(props: TodoListType) {
    const [title, setTitle] = useState<string>("dddeeeeeedd");
    const [error, setError] = useState<string | null>(null);

    const addTask = () => {
        const taskTitle = title.trim()
        if (taskTitle) {
            props.addTask(taskTitle) //обнуление поля вода после введения таски
        } else {
            setError("Title is reqiured")
        }
        setTitle("");
    };

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setError(null)
        setTitle(e.currentTarget.value)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => { if (e.key === "Enter") addTask() }
    const onAllClickHandler = () => { props.changeFilter("all") }
    const onActiveClickHandler = () => { props.changeFilter("active") }
    const onComplitedClickHandler = () => { props.changeFilter("complited") }
    return (
        <div className="App">

            <div>
                <h3>{props.title}</h3>
                <div>
                    {/* локальный импут   */}   <input value={title}
                        onChange={onChangeHandler}
                        onKeyPress={onKeyPressHandler} />  {/*При нажатиии Enter будет вводиться  Task */}
                    {/* e.currentTarget ==== input */}
                    <button onClick={addTask}>+</button>
                    {error && <div className={"error-message"}>{error}</div>}
                </div>
                <ul>
                    {
                        props.tasks.map(task => {
                            const removeTask = () => { props.removeTask(task.id) }
                            const changeStatus = (e: ChangeEvent<HTMLInputElement>) => { props.changeStatus(task.id, e.currentTarget.checked) }
                            return (
                                <li key={task.id}
                                    className={task.isDone ? "is-done" : ""}>
                                    {/* // kеу нужно для того чтоби Реакт отличал одну Ли-шку от другой */}
                                    <input
                                        type="checkbox"
                                        checked={task.isDone}
                                        onChange={changeStatus}
                                        className={error ? "error" : ""} />
                                    <span>{task.title}</span>
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