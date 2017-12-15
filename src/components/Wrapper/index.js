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
        const user = this.state.users[0];

        return (
            <div className = { Styles.wrapper }>
                <Header />
                <main>
                    <Profile user = { user } />
                    <Table
                        deleteUser = { this.deleteUser }
                        users = { this.state.users }
                    />
                </main>
            </div>
        );
    }
}
