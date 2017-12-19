import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from './';

configure({ adapter: new Adapter() });

const result = shallow(<App />);

describe('App component ', () => {
    test(`should return 1 'Wrapper' element`, () => {
        expect(result.find('Wrapper')).toHaveLength(1);
    });
});
