import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Profile from './';
import { users } from '../../containers/App/data';

configure({ adapter: new Adapter() });
const user = users[0];

const props = {
    user
};

const result = shallow(<Profile { ...props } />);

describe('Profile component ', () => {
    test('should show proper fullName', () => {
        expect(result.find('h3').first().text()).toBe(props.user.fullName);
    });
    test('should show proper userName', () => {
        expect(result.find('h4').first().text()).toBe(props.user.userName);
    });
});
