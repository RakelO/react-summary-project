import React, { Component } from 'react';

import { users } from './data.json';
import Wrapper from '../../components/Wrapper';

export default class App extends Component {
    render () {
        return <Wrapper users = { users } />;
    }
}
