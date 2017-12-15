import React, { Component } from 'react';

import Styles from './styles.scss';

export default class Header extends Component {
    render () {
        return (
            <section classfullName = { Styles.header }>
                <h1>User Activity</h1>
                <div>
                    <input placeholder = 'Search' type = 'search' />
                    <button>V</button>
                    <button>S</button>
                    <button>X</button>
                </div>
            </section>
        );
    }
}
