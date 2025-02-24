import React, { useState } from 'react';

const Form = ({ todos, setTodos }) => {
    const [value, setValue] = useState('')

    const handleSubmit = () => {
        e.preventDefault() //ページのリロードをキャンセル
        console.log(value)

        setTodos([
            ...todos, //スプレッド構文
            {
                content: value
            }
        ])
    }

    return (
        <form onSubmit={handleSubmit}>
            <imput
                type="text"
                onChange={e => {
                    setValue(e.target.value)
                }}
            />
        </form>
    )
}

export default Form