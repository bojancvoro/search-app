import React from "react";
import List from "../../components/presentation/list";

class ListContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { users: [] }
    }

    componentWillMount() {
        this.getUsers();
    }

    getUsers() {
        const url = "https://jsonplaceholder.typicode.com/users";
        fetch(url)
            .then(response => response.json())
            .then(data => this.setState({ users: data }));
    }

    render() {
        return (
            <div>
                <List users={this.state.users} />
            </div>
        );
    }
}

export default ListContainer;