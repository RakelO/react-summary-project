import React, { Component } from 'react';
import HighCharts from 'react-highcharts';

import Styles from './styles.scss';
import { shape, string } from 'prop-types';
import VerticalChart from '../VerticalChart';
import createChartConfig from './createChartConfig';

export default class Profile extends Component {
    static propTypes = {
        user: shape({
            avatar:   string.isRequired,
            fullName: string.isRequired,
            userName: string.isRequired
        })
    };
    render () {
        const { user } = this.props;

        return (
            <section className = { Styles.profile }>
                <div className = { Styles.personal }>
                    <div className = { Styles.imageWrap }>
                        <img alt = { user.fullName } src = { user.avatar } />
                    </div>
                    <div>
                        <h3>{user.fullName}</h3>
                        <h4>{user.userName}</h4>
                    </div>
                </div>
                <div className = { Styles.chartsWrap }>
                    <div className = { Styles.verticalCharts }>
                        <VerticalChart income = { user.income.yearly } incomeType = { 'yearly' } />
                        <VerticalChart income = { user.income.monthly } incomeType = { 'monthly' } />
                        <VerticalChart income = { user.income.weekly } incomeType = { 'weekly' } />
                    </div>
                    <div className = { Styles.monthDif }>
                        <h4>+{user.income.monthDif}</h4>
                        <h6>LAST MONTH</h6>
                    </div>
                </div>
                <HighCharts config = { createChartConfig(user.income.last10Days) } />
            </section>
        );
    }
}
