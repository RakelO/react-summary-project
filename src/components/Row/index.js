import React, { Component } from 'react';
// import React, { Component } from 'react';

export default class Row extends Component {
    static propTypes = {};
    constructor () {
        super();
        this.deleteUser = ::this._deleteUser;
    }
    _deleteUser () {
        const { deleteUser, id } = this.props;

        deleteUser(id);
    }
    render () {
        const {
            avatar,
            index,
            fullName,
            userName,
            totalItems,
            userStatus,
            totalIncome
        } = this.props;

        return (
            <tr key = { index }>
                <td>{index + 1}</td>
                <td>
                    <div>
                        <img alt = { fullName } src = { avatar } />
                    </div>
                </td>
                <td>{fullName}</td>
                <td>{userName}</td>
                <td>{totalItems}</td>
                <td>{userStatus}</td>
                <td>{totalIncome}</td>
                <td>
                    <button onClick = { this.deleteUser }>X</button>
                </td>
            </tr>
        );
    }
}
