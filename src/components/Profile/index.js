import React, { Component } from 'react';

import Styles from './styles.scss';

export default class Profile extends Component {
    render () {
        const { user } = this.props;

        return (
            <section className = { Styles.profile }>
                <div className = { Styles.personal }>
                    <div className = { Styles.imageWrap }>
                        <img src = { user.avatar } alt = { user.fullName } />
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
