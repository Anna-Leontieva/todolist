import React from 'react';
import './App.css';
import TodoList from './componants/TodoList';

function App() {
    let tasksOne = [
        { id: 1, title: "HTML&CSS", isDone: true },
        { id: 2, title: "JS", isDone: true },
        { id: 3, title: "ReactJS", isDone: false }
    ]
    let tasksTwo = [
        { id: 1, title: "Hello World", isDone: true },
        { id: 2, title: "I am happy", isDone: false },
        { id: 3, title: "Yo!", isDone: false }
    ]
    return (
        <div className="App">
            <TodoList title={"What to learn"} tasks={tasksOne} />
            <TodoList title={"Movies"} tasks={tasksTwo} />
        </div>
    )
}

export default App;
