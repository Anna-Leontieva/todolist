import React, { useState } from 'react';
import { v1 } from 'uuid';//авто импорт id
import './App.css';
import TodoList from './componants/TodoList';
export type TaskType = {
    title: string
    isDone: boolean
    id: string
}
type TodoListType={
    id:string
    title:string
    filter:FilterValuesType
}


export type FilterValuesType = "all" | "active" | "complited";
type TaskStateType={
    [key:string]:Array<TaskType>
}
function App() {
    const todoListID1=v1();
    const todoListID2=v1();

    const [todoLists,setTodoLists]=useState<Array<TodoListType>>([
        {id:todoListID1,title:"What to learn", filter:"active"},
        {id:todoListID2,title:"What to buy",filter:"all"}
    ])


    const [tasks, setTask] = useState<TaskStateType>({
        [todoListID1]:[ { id: v1(), title: "HTML&CSS", isDone: true },
        { id: v1(), title: "JS", isDone: true },
        { id: v1(), title: "ReactJS", isDone: false }],
        [todoListID2]:[ { id: v1(), title: "HTML&CSS", isDone: true },
        { id: v1(), title: "JS", isDone: true },
        { id: v1(), title: "ReactJS", isDone: false },
        ]
    })


    // const [filter, setFilter] = useState<FilterValuesType>("all")

    function removeTask(taskID: string,todoListID:string) {
        const todoListTasks=tasks[todoListID];    
        tasks[todoListID] = todoListTasks.filter(task => task.id !== taskID) // setTasks({...tasks}, [todoListID]:tasks[todoListID]..filter(task => task.id !== taskID))  одно и тоже
        setTask({...tasks});
    }

    function changeFilter(filterValue: FilterValuesType,todoListID:string) {
        const todoList=todoLists.find(tl=>tl.id===todoListID);
        if(todoList){
            todoList.filter=filterValue;
            setTodoLists([...todoLists])
        }
    }
    function addTask(title: string,todoListID:string) {      //Добавлять новую таску,новый массив
        const newTask: TaskType = {
            id: v1(),
            title: title,
            isDone: false
        }
        tasks[todoListID]=[newTask,...tasks[todoListID]]
        setTask({...tasks})//setTask типо переменная const
    }

    function changeStatus(taskID: string, isDone: boolean,todoListID:string) {
        const todoListTasks =tasks[todoListID];
        const task = todoListTasks.find(t => t.id === taskID)      ///find помогает найти нужный єлемент по ID и віходит из массива (достает 1 єлемент)
        if (task) {
            task.isDone = isDone
            setTask({...tasks})
        }

    }

    return (
        <div className="App">
            {
                todoLists.map(tl=>{
                    let tasksForTodoList=tasks[tl.id];//tasks[tl.id]-oбьект,кторый имеет ключ-значение(обращение к обьекту)
                    if (tl.filter === "active") {
                   tasksForTodoList = tasks[tl.id].filter(t => t.isDone === false);}
                   
                   if (tl.filter === "complited") {
                    tasksForTodoList = tasks[tl.id].filter(t => t.isDone === true);
                   }

                    return(
                    <TodoList 
                    key={tl.id}
                    id={tl.id}
                    title={tl.title}
                    filter={tl.filter}
                    tasks={tasksForTodoList}
                    removeTask={removeTask}
                    changeFilter={changeFilter}
                    addTask={addTask}
                    changeStatus={changeStatus}
                />)
                })
            }
            
        </div>
    )
}

export default App;
