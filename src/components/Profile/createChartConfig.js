const createChartConfig = (last10Days) => ({
    yAxis: {
        title: {
            text: null
        },
        tickInterval: 5
    },
    xAxis: {
        categories: []
    },

    series: [{
        data:         last10Days,
        showInLegend: false,
        marker:       {
            fillColor: '#FFFFFF',
            lineWidth: 2,
            lineColor: null // inherit from series
        },
        animation: {
            duration: 500
        }
    }],
    colors: ['#2cc55e'],
    chart:  {
        height: 200
    },
    title: {
        text: null
    }
});

export default createChartConfig;
