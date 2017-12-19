import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import VerticalChart from './';

configure({ adapter: new Adapter() });

const props = {
    income:     900,
    incomeType: 'yearly'
};

const result = shallow(<VerticalChart { ...props } />);

describe('VerticalCart component ', () => {
    test('should return element with proper height', () => {
        expect(result.find('div[style]').first().prop('style').height).toBe('10%');
    });
    test('should show proper incomeType', () => {
        expect(result.find('h6').first().text()).toBe(props.incomeType);
    });
});
