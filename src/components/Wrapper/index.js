import React, { Component } from 'react';

import Header from '../Header';
import Table from '../Table';
import { array } from 'prop-types';

export default class Wrapper extends Component {
    static propTypes = {
        users: array.isRequired
    };
    constructor (props) {
        super(props);
        this.deleteUser = ::this._deleteUser;
    }
    state = {
        users: this.props.users
    };

    _deleteUser (id) {
        this.setState({
            users: this.state.users.filter((item) => item.id !== id)
        });
    }

    render () {
        console.log(this.state.users);

        return (
            <div>
                <Header />
                {/*<Proile />*/}
                <Table deleteUser = { this.deleteUser } users = { this.state.users } />
            </div>
        );
    }
}
