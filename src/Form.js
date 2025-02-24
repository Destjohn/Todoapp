import React, { useState } from 'react';

const Form = ({ todos, setTodos }) => {
    const [value, setValue] = useState('')

    const handleSubmit = ( e ) => {
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
            <input
                type="text"
                onChange={e => {
                    setValue(e.target.value)
                }}
            />
        </form>
    )
}

export default Form