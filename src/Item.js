import React, { useState } from "react";

const Item = ( props ) => {
    const [isDone, setIsDone] = useState(false)
    //分割代入構文　const [stateName, setStateName] = React.useState(初期値)
    //               [現在の状態の参照, 状態を更新する関数]

    return (
        <li>
            <imput type='checkbox' onChange={() => {
                setIsDone(!isDone)
            }}
            />
            <span style={
                {textDecoration: isDone ? 'line-through' : 'none'}
            }>{props.content}</span>
        </li>
    )
}

export default Item