import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Header from './';

configure({ adapter: new Adapter() });

const props = {
    toggleContent: jest.fn(),
    handleSearch:  jest.fn(),
    openContent:   true
};
const result = shallow(<Header { ...props } />);

describe('Header ', () => {
    test(`should invoke 'toggleContent' func when 'Chevron' button is clicked`, () => {
        const chevronButton = result.find('button').first();

        chevronButton.simulate('click');
        expect(props.toggleContent).toHaveBeenCalledTimes(1);
    });
    test(`should invoke 'handleSearch' func when search input is changed`, () => {
        const search = result.find('input').first();
        const inputText = 'test';

        search.simulate('change', {
            target: {
                value: inputText
            }
        });
        expect(props.handleSearch).toHaveBeenCalledWith(inputText);
    });
});
