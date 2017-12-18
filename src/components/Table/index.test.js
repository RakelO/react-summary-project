import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Table from './';
import Row from '../Row';

configure({ adapter: new Adapter() });

const props = {
    deleteUser: jest.fn(),
    selectedId: '',
    selectUser: jest.fn(),
    users:      new Array(5).fill({})
};

const result = mount(<Table { ...props } />);

describe('Table component', () => {
    test(`should have one 'table'`, () => {
        expect(result.find('table')).toHaveLength(1);
    });
    test(`should have one 'thead'`, () => {
        expect(result.find('thead')).toHaveLength(1);
    });
    test(`should have one 'tbody'`, () => {
        expect(result.find('tbody')).toHaveLength(1);
    });
    test(`should have 'row' elements to be equal users length`, () => {
        const userLength = props.users.length;

        expect(result.find('Row')).toHaveLength(userLength);
    });
});
