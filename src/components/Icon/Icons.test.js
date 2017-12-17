import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Check from './Check';
import Chevron from './Chevron';
import Delete from './Delete';
import Gear from './Gear';

const icons = [Check, Chevron, Delete, Gear];

configure({ adapter: new Adapter() });

describe('Icons components ', () => {
    test(`should return 'svg' element`, () => {
        icons.forEach((Icon) => {
            const result = shallow(<Icon />);

            expect(result.find('svg')).toHaveLength(1);
        });
    });
});

describe('Chevron component ', () => {
    test(`should rotate if rotate prop is true`, () => {
        const result = shallow(<Chevron rotate />);
        const svgStyle = result.find('svg').first().prop('style');

        expect(svgStyle).toEqual({ transform: 'rotate(180deg)' });
    });
});
