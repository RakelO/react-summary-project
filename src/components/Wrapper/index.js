import React, { Component } from 'react';
import { array } from 'prop-types';
import Header from '../Header';
import Table from '../Table';
import Profile from '../Profile';
import Styles from './styles.scss';

export default class Wrapper extends Component {
    static propTypes = {
        users: array.isRequired
    };
    constructor (props) {
        super(props);
        this.deleteUser = ::this._deleteUser;
        this.toggleContent = ::this._toggleContent;
        this.handleSearch = ::this._handleSearch;
        this.selectUser = ::this._selectUser;
    }
    state = {
        users:       [],
        openContent: true,
        searchInput: '',
        selectedId:  ''
    };

    componentWillMount () {
        const { users } = this.props;

        this.setState({
            users,
            selectedId: users[0].id
        });
    }

    _deleteUser (id) {
        this.setState({
            users: this.state.users.filter((item) => item.id !== id)
        });
    }

    _toggleContent () {
        this.setState({ openContent: !this.state.openContent });
    }

    _handleSearch (input) {
        this.setState({ searchInput: input });
    }

    _selectUser (id) {
        this.setState({ selectedId: id });
    }

    render () {
        const { openContent, searchInput, users, selectedId } = this.state;
        const foundSelectedUser = users.find((item) => item.id === selectedId);
        const selectedUser = foundSelectedUser ? foundSelectedUser : users[0];
        const filteredUsers = users.filter((item) =>
            item.fullName
                .toLocaleLowerCase()
                .includes(searchInput.toLocaleLowerCase())
        );

        return (
            <div className = { Styles.wrapper }>
                <Header
                    handleSearch = { this.handleSearch }
                    openContent = { openContent }
                    toggleContent = { this.toggleContent }
                />
                {openContent &&
                    (filteredUsers.length ?
                        <main>
                            <Profile user = { selectedUser } />
                            <Table
                                deleteUser = { this.deleteUser }
                                selectedId = { selectedUser.id }
                                selectUser = { this.selectUser }
                                users = { filteredUsers }
                            />
                        </main>
                        : <div className = { Styles.error }>Sorry! No users left</div>
                    )}
            </div>
        );
    }
}
