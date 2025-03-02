import React, { useState } from "react";

const Item = ( props, id, deleteTodo ) => {
    const [isDone, setIsDone] = useState(false)
    //分割代入構文　const [stateName, setStateName] = React.useState(初期値)
    //               [現在の状態の参照, 状態を更新する関数]

    const handleDelete = () => {
        //Appのもつtodosから特定のIDをもつものを取り除いてほしい
        deleteTodo(id)
    }

    return (
        <li>
            <input type='checkbox' onChange={() => {
                setIsDone(!isDone)
            }}
            />
            <span 
                style={
                    {textDecoration: isDone ? 'line-through' : 'none'}
                }
            >{props.content}</span>
            <button onClick={() => deleteTodo(id)}>削除</button>
        </li>
    )
}

export default Item