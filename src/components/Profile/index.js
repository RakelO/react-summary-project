import React, { Component } from 'react';

import Styles from './styles.scss';
import { shape, string } from 'prop-types';
import HighCharts from 'react-highcharts';

const yearMax = 9000;
const monthMax = 750;
const weekMax = 150;

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
        const config = {
            xAxis: {
                categories: []
            },
            series: [{
                data: user.income.last10Days
            }]
        };
        console.log(user.income.yearly);
        console.log(yearMax);

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
                        <div>
                            <div className = { Styles.chart }>
                                <div className = { Styles.chartsFill } style = { { height: `${user.income.yearly*100/yearMax}%` } } />
                            </div>
                            <h6>Year</h6>
                        </div>
                        <div>
                            <div className = { Styles.chart }>
                                <div className = { Styles.chartsFill } style = { { height: `${user.income.monthly*100/monthMax}%` } } />
                            </div>
                            <h6>Monthly</h6>
                        </div>
                        <div>
                            <div className = { Styles.chart }>
                                <div className = { Styles.chartsFill } style = { { height: `${user.income.weekly*100/weekMax}%` } } />
                            </div>
                            <h6>Weekly</h6>
                        </div>
                    </div>
                    <div className = { Styles.monthDif }>
                        <h4>+{user.income.monthDif}</h4>
                        <h6>LAST MONTH</h6>
                    </div>
                </div>
                <HighCharts config = { config } />
            </section>
        );
    }
}
