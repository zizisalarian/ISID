Highcharts.chart("container-WOS", {
    chart: {
        type: "column",
    },
    xAxis: {
        type: "category",
        labels: {
            enabled: false
        },
    },
    yAxis: {
        min:0 ,
        labels: {
            enabled: false
        },
    },
    legend: {
        enabled: false,
    },
    plotOptions: {
        series: {
            pointWidth:10,
            borderRadius: {
                radius: 1
            },
            pointerPadding: 0
        }
    },
    series: [
        {
            name: "تعداد مقالات",
            colors: [
                "#999"
            ],
            colorByPoint: true,
            groupPadding: 0,
            data: [
                [37],
                [38],
                [38],
                [38],
                [39],
                [40],
                [51],
                [65],
                [80],
                [83]
            ],
            dataLabels: {
                enabled: false,
                rotation: -90,
                color: 'red',
                inside: true,
                verticalAlign: "top",
                y: 5, // 10 pixels down from the top
                style: {
                    fontSize: "10px",
                    fontFamily: "Verdana, sans-serif",
                },
            },
        },
    ],
})
Highcharts.chart("container-scholar", {
    chart: {
        type: "column",
    },

    xAxis: {
        type: "category",
        labels: {
            enabled: false
        },
    },
    yAxis: {
        min:0 ,
        labels: {
            enabled: false
        },
    },
    legend: {
        enabled: false,
    },
    plotOptions: {
        series: {
            pointWidth:10,
            borderRadius: {
                radius: 1
            },
            pointerPadding: 0
        }
    },
    series: [
        {
            name: "Population",
            colors: [
                "#999"
            ],
            colorByPoint: true,
            groupPadding: 0,
            data: [
                [37],
                [38],
                [38],
                [38],
                [39],
                [80],
                [83],
                [83],
                [83],
                [83],
            ],
            dataLabels: {
                enabled: false,
                rotation: -90,
                color: "#FFFFFF",
                inside: true,
                verticalAlign: "top",
                y: 5, // 10 pixels down from the top
                style: {
                    fontSize: "13px",
                    fontFamily: "Verdana, sans-serif",
                },
            },
        },
    ],
})
Highcharts.chart("container-scopus", {
    chart: {
        type: "column",
    },

    xAxis: {
        type: "category",
        labels: {
            enabled: false
        },
    },
    yAxis: {
        min:0 ,
        labels: {
            enabled: false
        },
    },
    legend: {
        enabled: false,
    },
    plotOptions: {
        series: {
            pointWidth:10,
            borderRadius: {
                radius: 1
            },
            pointerPadding: 0
        }
    },
    series: [
        {
            name: "تعداد مقالات ",
            colors: [
                "#999"
            ],
            colorByPoint: true,
            groupPadding: 0,
            data: [
                [37],
                [38],
                [38],
                [38],
                [38],
                [39],
                [90],
                [80],
                [83],
                [83],
                [83],
                [83],
            ],
            dataLabels: {
                enabled: false,
                rotation: -90,
                color: "#FFFFFF",
                inside: true,
                verticalAlign: "top",
                y: 5, // 10 pixels down from the top
                style: {
                    fontSize: "13px",
                    fontFamily: "Verdana, sans-serif",
                },
            },
        },
    ],
})


Highcharts.chart('card-scopus', {
    chart: {
        type: 'column',
        backgroundColor: '#00000000'
    },
    xAxis: {

        lineWidth: 0,
        minorGridLineWidth: 0,
        labels: {
            enabled: false
        },
        minorTickLength: 0,
        tickLength: 0
    },
    yAxis: {
        lineColor: 'transparent',
        labels: {
            enabled: false
        },
       
    },
    legend: {
        enabled: false
    },
    tooltip: {
        
        pointFormat: 'تعداد مقالات در سال{point.key}  این مقدار است {point.y:.1f}'
    },
    plotOptions:{
        series: {
            pointWidth:8,
            borderRadius: {
                radius: 2
            },
            pointerPadding: 0
        }
    },
    series: [{
        name: 'Population',
        colors: [
            '#999'
        ],
        colorByPoint: true,
        groupPadding: 0,
        data: [
            ['1990', 37.33],
            ['1991', 31.18],
            ['1992', 27.79],
            ['1993', 22.23],
            ['1994', 21.91],
            ['1995', 21.74],
            ['1996', 21.32],
            ['1997', 20.89],
            ['1998', 20.67],
            ['1999', 19.11],
            ['2000', 16.45],
            ['2001', 16.38],
            ['2002', 15.41],
            ['2010', 15.25],
            ['2011', 14.974],
            ['2012', 14.970],
            ['2013', 14.86],
            ['2014', 14.16],
            ['2015', 13.79],
            ['2016', 13.64]
        ],
        dataLabels: {
            enabled: false,
            
        }
    }]
});
