import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Row from './';
import { users } from '../../containers/App/data';


configure({ adapter: new Adapter() });
const user = users[0];
const props = {
    deleteUser: jest.fn(),
    index:      0,
    selected:   true,
    selectUser: jest.fn(),
    ...user
};

const result = shallow(<Row { ...props } />);

describe('Row component ', () => {
    test(`should invoke 'deleteUser' func when 'Delete' button is clicked`, () => {
        const deleteButton = result.find('button').first();

        deleteButton.simulate('click', {
            stopPropagation: () => null
        });
        expect(props.deleteUser).toHaveBeenCalledWith(props.id);
    });
    test(`should invoke 'selectUser' func when row is clicked`, () => {
        result.find('tr').first().simulate('click');
        expect(props.selectUser).toHaveBeenCalledWith(props.id);
    });
});
