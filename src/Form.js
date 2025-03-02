import React, { useState } from 'react';

const Form = ({ addTodo }) => {
    const [value, setValue] = useState('')

    const handleSubmit = ( e ) => {
        e.preventDefault() //ページのリロードをキャンセル
        if (value.trim() === '') return alert('文字を入力してください')
        addTodo(value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                onChange={e => {
                    setValue(e.target.value)
                }}
                placeholder='タスクを入力...'
            />
            <button disabled={value.trim() === ''}>送信</button>
        </form>
    )
}

export default Form