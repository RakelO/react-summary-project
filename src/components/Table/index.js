import React, { Component } from 'react';
import { array, func } from 'prop-types';

import Styles from './styles.scss';
import Row from '../Row';

export default class Table extends Component {
    static propTypes = {
        deleteUser: func.isRequired,
        users:      array.isRequired
    };
    // constructor () {
    //     super();
    //     this.deleteUser = ::this._deleteUser;
    // }

    render () {
        const { users, deleteUser } = this.props;
        const row = users.map((user, index) => (
            <Row
                deleteUser = { deleteUser }
                index = { index }
                key = { user.id }
                { ...user }
            />
        ));

        return (
            <div className = { Styles.table }>
                <table>
                    <thead>
                        <tr>
                            <td>#</td>
                            <td>Avatar</td>
                            <td>Full fullName</td>
                            <td>Username</td>
                            <td>Total items</td>
                            <td>User status</td>
                            <td>Total income</td>
                            <td />
                        </tr>
                    </thead>
                    <tbody>{row}</tbody>
                </table>
            </div>
        );
    }
}
