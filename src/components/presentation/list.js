import React from "react";

const List = (props) => {
    return (
        <ul>
            {props.users.map((user, i) => {
                return <li key={i}>{user.name}</li>
            })}
        </ul>
    )
}

export default List;