import React from 'react';
import './App.css';
import TodoList from './TodoList';

function App() {
    let tasks1 = [
        { id: 1, title: "HTML&CSS", isDone: true },
        { id: 2, title: "JS", isDone: true },
        { id: 3, title: "ReactJS", isDone: false }
    ]
    let tasks2 = [
        { id: 1, title: "Hello World", isDone: true },
        { id: 2, title: "I am happy", isDone: false },
        { id: 3, title: "Yo!", isDone: false }
    ]
    return (
        <div className="App">
            <TodoList title="What to learn" tasks={tasks1} />
            <TodoList title="Movies" tasks={tasks2} />
        </div>
    )
}
export default App;
