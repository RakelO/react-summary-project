import React, { Component } from 'react';
import { bool, func, number, string } from 'prop-types';
import classNames from 'classnames';

import Styles from './styles.scss';
import Check from '../Icon/Check';
import Delete from '../Icon/Delete';

export default class Row extends Component {
    static propTypes = {
        avatar:      string.isRequired,
        deleteUser:  func.isRequired,
        fullName:    string.isRequired,
        id:          string.isRequired,
        index:       number.isRequired,
        selected:    bool.isRequired,
        selectUser:  func.isRequired,
        totalIncome: number.isRequired,
        totalItems:  number.isRequired,
        userName:    string.isRequired,
        userStatus:  bool.isRequired
    };
    constructor () {
        super();
        this.deleteUser = ::this._deleteUser;
        this.selectUser = ::this._selectUser;
    }
    _deleteUser (e) {
        e.stopPropagation();

        const { deleteUser, id } = this.props;

        deleteUser(id);
    }
    _selectUser () {
        const { selectUser, id } = this.props;

        selectUser(id);
    }
    render () {
        const {
            avatar,
            index,
            fullName,
            selected,
            userName,
            totalItems,
            userStatus,
            totalIncome
        } = this.props;
        const classSet = classNames(Styles.row, selected && Styles.selected);

        return (
            <tr className = { classSet } key = { index } onClick = { this.selectUser }>
                <td>{index + 1}.</td>
                <td>
                    <div className = { Styles.imageWrap }>
                        <img alt = { fullName } src = { avatar } />
                    </div>
                </td>
                <td>{fullName}</td>
                <td>{userName}</td>
                <td>{totalItems}</td>
                <td>
                    <Check check = { userStatus } />
                </td>
                <td>{totalIncome}</td>
                <td>
                    <button onClick = { this.deleteUser }>
                        <Delete />
                    </button>
                </td>
            </tr>
        );
    }
}
