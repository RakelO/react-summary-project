import React from 'react';
import { bool } from 'prop-types';

const _createStyle = (rotate) =>
    rotate ? { transform: 'rotate(180deg)' } : null;

const Chevron = ({ rotate }) => (
    <svg height = '8' style = { _createStyle(rotate) } viewBox = '0 0 11 7' width = '16'>
        <g fillRule = 'evenodd'>
            <path
                d = 'M5.4 4.117L1.55.266A.906.906 0 0 0 .267.267.904.904 0 0 0 .266 1.55L4.76 6.044a.901.901 0 0 0 .64.264.899.899 0 0 0 .64-.264l4.495-4.495a.906.906 0 0 0-.001-1.282.904.904 0 0 0-1.282-.001L5.4 4.117z'
                fillRule = 'nonzero'
            />
        </g>
    </svg>
);

Chevron.propTypes = {
    rotate: bool
};

export default Chevron;
