import React from 'react';
import { bool } from 'prop-types';

const Check = ({ check }) =>
    check ? (
        <svg height = '9' viewBox = '0 0 13 9' width = '13'>
            <g fill = 'none' fillRule = 'evenodd'>
                <path d = 'M-2-5h18v18H-2z' />
                <path
                    d = 'M1.347 4.02a.5.5 0 0 0-.694.719l3.75 3.62a.5.5 0 0 0 .694 0l7.25-7a.5.5 0 0 0-.694-.719L4.75 7.305 1.347 4.02z'
                    fill = '#2cc55e'
                    fillRule = 'nonzero'
                    stroke = '#2cc55e'
                />
            </g>
        </svg>
    ) : (
        <svg height = '10' viewBox = '0 0 10 10' width = '10'>
            <g fillRule = 'evenodd'>
                <path
                    d = 'M5 4.293L1.354.646a.5.5 0 0 0-.708.708L4.293 5 .646 8.646a.5.5 0 0 0 .708.708L5 5.707l3.646 3.647a.5.5 0 1 0 .708-.708L5.707 5l3.647-3.646a.5.5 0 1 0-.708-.708L5 4.293z'
                    fill = '#D34A4D'
                    fillRule = 'nonzero'
                    stroke = '#D34A4D'
                />
            </g>
        </svg>
    );

Check.propTypes = {
    check: bool
};

export default Check;
