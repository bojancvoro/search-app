import React from "react";

const List = (props) => {
    return (
        <ul>
            {props.displayData && props.displayData.map((user, i) => {
                return <li key={i}>{user.name}</li>
            })}
        </ul>
    )
}

export default List;