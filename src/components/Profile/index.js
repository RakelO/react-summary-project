import React, { Component } from 'react';

import Styles from './styles.scss';
import { shape, string } from 'prop-types';

export default class Profile extends Component {
    static propTypes = {
        user: shape({
            avatar:   string.isRequired,
            fullName: string.isRequired,
            userName: string.isRequired
        })
    };
    render () {
        const { user } = this.props;

        return (
            <section className = { Styles.profile }>
                <div className = { Styles.personal }>
                    <div className = { Styles.imageWrap }>
                        <img alt = { user.fullName } src = { user.avatar } />
                    </div>
                    <div>
                        <h3>{user.fullName}</h3>
                        <h4>{user.userName}</h4>
                    </div>
                </div>
            </section>
        );
    }
}
