import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Wrapper from './';
import { users } from '../../containers/App/data';


configure({ adapter: new Adapter() });

const props = { users };

describe('Wrapper component ', () => {
    test(`should have one 'Header', one 'Table', one 'Profile' components`, () => {
        const result = mount(<Wrapper { ...props } />);

        expect(result.find('Header')).toHaveLength(1);
        expect(result.find('Table')).toHaveLength(1);
        expect(result.find('Profile')).toHaveLength(1);
    });
    test(`should hide 'Table' and 'Profile' when toggleButton is clicked`, () => {
        const result = mount(<Wrapper { ...props } />);

        result.find('.toggle-content').first().simulate('click');
        expect(result.find('Table')).toHaveLength(0);
        expect(result.find('Profile')).toHaveLength(0);
    });
    test(`when clicking on 'deleteUser' button to delete user`, () => {
        const result = mount(<Wrapper { ...props } />);

        result.find('tr button').first().simulate('click');
        expect(result.find('Row')).toHaveLength(users.length-1);
    });
    test(`when clicking on row select correct user`, () => {
        const result = mount(<Wrapper { ...props } />);
        const selectedUser = props.users[2].fullName;

        result.find('tbody tr').at(2).simulate('click');
        expect(result.find('Profile h3').text()).toBe(selectedUser);
    });
    test(`should filter rows by input value`, () => {
        const result = mount(<Wrapper { ...props } />);
        const search = result.find('input').first();
        const inputText = users[0].fullName;

        search.simulate('change', {
            target: {
                value: inputText
            }
        });
        expect(result.find('Row')).toHaveLength(1);
    });
});
