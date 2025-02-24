import React, { useState } from 'react';
import Form from './Form'
import List from './List'

const App = () => {
    const [todos, setTodos] = useState([
        {
            content: '課題をする'
        },
        {
            content: '選択をする'
        },
        {
            content: '電話をする'
        }
    ])
    return (
        <div>
            <h1>Todo App</h1>
            <Form todos={todos} setTodos={setTodos}></Form>
            <List todos={todos}></List>
        </div>
    )    
}

export default App