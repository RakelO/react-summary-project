import React, { Component } from 'react';
import { bool, func } from 'prop-types';

import Styles from './styles.scss';
import Chevron from '../Icon/Chevron';
import Gear from '../Icon/Gear';
import Delete from '../Icon/Delete';

export default class Header extends Component {
    static propTypes = {
        handleSearch:  func.isRequired,
        openContent:   bool.isRequired,
        toggleContent: func.isRequired
    };
    constructor () {
        super();
        this.handleSearch = ::this._handleSearch;
    }

    _handleSearch (e) {
        const { handleSearch } = this.props;

        handleSearch(e.target.value);
    }

    render () {
        const { openContent, toggleContent } = this.props;

        return (
            <header className = { Styles.header }>
                <h1>User Activity</h1>
                <div>
                    <input
                        placeholder = 'Search'
                        type = 'search'
                        onChange = { this.handleSearch }
                    />
                    <button onClick = { toggleContent }>
                        <Chevron rotate = { openContent } />
                    </button>
                    <button>
                        <Gear />
                    </button>
                    <button>
                        <Delete />
                    </button>
                </div>
            </header>
        );
    }
}
