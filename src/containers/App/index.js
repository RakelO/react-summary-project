import React, { Component } from 'react';

import users from './data';
import { getUniqueID } from '../../helpers';
import Wrapper from '../../components/Wrapper';

const usersWithId = users.map((user) => ({
    id: getUniqueID(),
    ...user
}));

export default class App extends Component {
    render () {
        return <Wrapper users = { usersWithId } />;
    }
}
