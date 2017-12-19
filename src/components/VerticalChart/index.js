import React from 'react';

import Styles from './styles.scss';
import { number, string } from 'prop-types';

const MaxValue = {
    yearly:  9000,
    monthly: 750,
    weekly:  150
};

const VerticalChart = (props) => {
    const { income, incomeType } = props;

    return (
        <div>
            <div className = { Styles.chart }>
                <div className = { Styles.chartsFill } style = { { height: `${income*100/MaxValue[incomeType]}%` } } />
            </div>
            <h6>{incomeType}</h6>
        </div>
    );
};

VerticalChart.propTypes = {
    income:     number.isRequired,
    incomeType: string.isRequired
};

export default VerticalChart;
