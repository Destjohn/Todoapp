import React, { useState } from 'react';
import Form from './Form'
import List from './List'
import { nanoid } from 'nanoid';

const App = () => {
    const [todos, setTodos] = useState([])

    //追加機能
    const addTodo = (value) => {
        setTodos([
            ...todos,
            {
                content: value,
                id: nanoid()
            }
        ])
    }

    //削除機能
    const deleteTodo = ( id ) => {
        const newTodos = setTodos(todos.filter(todo => todo.id !== id))
        //条件に合致するもののみを取り出すfilter関数（削除したいモノ以外を取り出す処理）
        setTodos(newTodos)
    }

    return (
        <div>
            <h1>Todo App</h1>
            <Form addTodo={addTodo}></Form>
            <List todos={todos} deleteTodo={deleteTodo}></List>
        </div>
    )    
}

export default App

//deleteTodoが動かない