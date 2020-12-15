import React from 'react';
import './App.css';
import Footer from './componants/Footer';
import Header from './componants/Header';
import List from './componants/List';
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
            <Header/>
            <List/>
            <TodoList title={"What to learn"} tasks={tasks1} />
            <TodoList title={"Movies"} tasks={tasks2} />
            <Footer/>
        </div>
    )
}

export default App;
