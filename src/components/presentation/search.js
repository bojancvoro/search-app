import React from "react";

const Search = (props) => {
    return (
            <input 
                name="input" placeholder="Search the list" onChange={props.handleSearch}>
            </input>
    );
}

export default Search;