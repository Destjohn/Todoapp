import React from "react";
import Item from './Item'

const List = ({ todos }) => {
    return (
        <ul>
            {
                todos.map((todo) => {
                    return (
                        <Item content={todo.content}></Item>
                    )
                })
            }
        </ul>
    )
}

export default List