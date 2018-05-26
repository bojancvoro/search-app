import React from "react";
import List from "../../components/presentation/list";
import Search from "../../components/presentation/search";

class DisplaySearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = { users: [], displayData: [] }
    }

    componentDidMount() {
        this.handleGetUsers();
    }

    handleGetUsers() {
        const url = "https://jsonplaceholder.typicode.com/users";
        fetch(url)
            .then(response => response.json())
            .then(data => this.setState({ users: data, displayData: data }));
    }

    handleSearch(e) {
        const searchTerm = e.target.value;
        const searchResults = this.state.users.filter((user) => {
            return user.name.toLowerCase().includes(searchTerm);
        });
        this.setState({ displayData: searchResults });
    }

    render() {
        return (
            <div>
                <Search handleSearch={(e) => this.handleSearch(e)} />
                <List displayData={this.state.displayData} />
            </div>
        );
    }
}

export default DisplaySearch;