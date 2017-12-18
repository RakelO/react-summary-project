import React, { Component } from 'react';
import { array, func, string } from 'prop-types';

import Styles from './styles.scss';
import Row from '../Row';

export default class Table extends Component {
    static propTypes = {
        deleteUser: func.isRequired,
        selectedId: string.isRequired,
        selectUser: func.isRequired,
        users:      array.isRequired
    };

    render () {
        const { users, deleteUser, selectedId, selectUser } = this.props;
        const row = users.map((user, index) => (
            <Row
                deleteUser = { deleteUser }
                index = { index }
                key = { user.id }
                selected = { selectedId === user.id }
                selectUser = { selectUser }
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
