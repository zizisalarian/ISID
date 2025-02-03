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
        min: 0,
        labels: {
            enabled: false
        },
    },
    legend: {
        enabled: false,
    },
    plotOptions: {
        series: {
            pointWidth: 10,
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
                    fontFamily: "IRANSans",
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
        min: 0,
        labels: {
            enabled: false
        },
    },
    legend: {
        enabled: false,
    },
    plotOptions: {
        series: {
            pointWidth: 10,
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
        min: 0,
        labels: {
            enabled: false
        },
    },
    legend: {
        enabled: false,
    },
    plotOptions: {
        series: {
            pointWidth: 10,
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


Highcharts.chart('card-scopus-article', {
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
    plotOptions: {
        series: {
            pointWidth: 8,
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


Highcharts.chart('card-scopus-document', {
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
    plotOptions: {
        series: {
            pointWidth: 8,
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
            ['1990', 10],
            ['1991', 38],
            ['1992', 29],
            ['1993', 23],
            ['1994', 21],
            ['1995', 24],
            ['1996', 22],
            ['1997', 29],
            ['1998', 27],
            ['1999', 11],
            ['2000', 15],
            ['2001', 18],
            ['2002', 11],
            ['2010', 15],
            ['2011', 14],
            ['2012', 10],
            ['2013', 16],
            ['2014', 16],
            ['2015', 13],
            ['2016', 14]
        ],
        dataLabels: {
            enabled: false,

        }
    }]
});

Highcharts.chart('card-scopus-g-index', {
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
    plotOptions: {
        series: {
            pointWidth: 8,
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
            ['1990', 10],
            ['1991', 16],
            ['1992', 27.79],
            ['1993', 22.23],
            ['1994', 21.91],
            ['1995', 21.74],
            ['1996', 21.32],
            ['1997', 20.89],
            ['1998', 20.67],
            ['1999', 19.11],
            ['2000', 20],
            ['2001', 16.38],
            ['2002', 25],
            ['2010', 15],
            ['2011', 4],
            ['2012', 50],
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


Highcharts.chart('card-wos-article', {
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
    plotOptions: {
        series: {
            pointWidth: 8,
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


Highcharts.chart('card-wos-document', {
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
    plotOptions: {
        series: {
            pointWidth: 8,
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
            ['1990', 10],
            ['1991', 38],
            ['1992', 29],
            ['1993', 23],
            ['1994', 21],
            ['1995', 24],
            ['1996', 22],
            ['1997', 29],
            ['1998', 27],
            ['1999', 11],
            ['2000', 15],
            ['2001', 18],
            ['2002', 11],
            ['2010', 15],
            ['2011', 14],
            ['2012', 10],
            ['2013', 16],
            ['2014', 16],
            ['2015', 13],
            ['2016', 14]
        ],
        dataLabels: {
            enabled: false,

        }
    }]
});

Highcharts.chart('card-wos-g-index', {
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
    plotOptions: {
        series: {
            pointWidth: 8,
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
            ['1990', 10],
            ['1991', 16],
            ['1992', 27.79],
            ['1993', 22.23],
            ['1994', 21.91],
            ['1995', 21.74],
            ['1996', 21.32],
            ['1997', 20.89],
            ['1998', 20.67],
            ['1999', 19.11],
            ['2000', 20],
            ['2001', 16.38],
            ['2002', 25],
            ['2010', 15],
            ['2011', 4],
            ['2012', 50],
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


Highcharts.chart('card-scholar-article', {
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
    plotOptions: {
        series: {
            pointWidth: 8,
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


Highcharts.chart('card-scholar-document', {
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
    plotOptions: {
        series: {
            pointWidth: 8,
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
            ['1990', 10],
            ['1991', 38],
            ['1992', 29],
            ['1993', 23],
            ['1994', 21],
            ['1995', 24],
            ['1996', 22],
            ['1997', 29],
            ['1998', 27],
            ['1999', 11],
            ['2000', 15],
            ['2001', 18],
            ['2002', 11],
            ['2010', 15],
            ['2011', 14],
            ['2012', 10],
            ['2013', 16],
            ['2014', 16],
            ['2015', 13],
            ['2016', 14]
        ],
        dataLabels: {
            enabled: false,

        }
    }]
});

Highcharts.chart('card-scholar-g-index', {
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
    plotOptions: {
        series: {
            pointWidth: 8,
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
            ['1990', 10],
            ['1991', 16],
            ['1992', 27.79],
            ['1993', 22.23],
            ['1994', 21.91],
            ['1995', 21.74],
            ['1996', 21.32],
            ['1997', 20.89],
            ['1998', 20.67],
            ['1999', 19.11],
            ['2000', 20],
            ['2001', 16.38],
            ['2002', 25],
            ['2010', 15],
            ['2011', 4],
            ['2012', 50],
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


window.addEventListener('scroll', () => {
    let body = document.querySelector('body')
    body.classList.toggle("scroll", window.scrollY > 400)
})

const text =
    "sociations.  Professional articles are typically widely accessible  the public, but on industry-specific topics Some knowledge of the topic is usually presupposed, but you will also note that the author does take the time to explain some of the more fundamental " +
    "sociations.  Professional articles are typically widely accessible  the public, but on industry-specific topics Some knowledge of the topic is usually presupposed, but you will also note that the author does take the time to explain some of the more fundamental " +
    "sociations.  Professional articles are typically widely accessible  the public, but on industry-specific topics Some knowledge of the topic is usually presupposed, but you will also note that the author does take the time to explain some of the more fundamental " +
    "sociations.  Professional articles are typically widely accessible  the public, but on industry-specific topics Some knowledge of the topic is usually presupposed, but you will also note that the author does take the time to explain some of the more fundamental " +
    "sociations.  Professional articles are typically widely accessible  the public, but on industry-specific topics Some knowledge of the topic is usually presupposed, but you will also note that the author does take the time to explain some of the more fundamental "

lines = text.replace(/[():'?0-9]+/g, "").split(/[,\. ]+/g),
    data = lines.reduce((arr, word) => {
        let obj = Highcharts.find(arr, (obj) => obj.name === word)
        if (obj) {
            obj.weight += 1
        } else {
            obj = {
                name: word,
                weight: 1,
            }
            arr.push(obj)
        }
        return arr
    }, [])

Highcharts.chart("research-topics-chart", {
    accessibility: {
        screenReaderSection: {
            beforeChartFormat:
                "<h5>{chartTitle}</h5>" +
                "<div>{chartSubtitle}</div>" +
                "<div>{chartLongdesc}</div>" +
                "<div>{viewTableButton}</div>",
        },
    },
    series: [
        {
            type: "wordcloud",
            data,
            name: "Occurrences",
        },
    ],
    title: {
        text: "Wordcloud of Alice's Adventures in Wonderland",
        align: "left",
    },
    subtitle: {
        enabled: false
    },
    tooltip: {
        headerFormat:
            '<span style="font-size: 16px"><b>{point.name}</b>' + "</span><br>",
    },
})
Highcharts.chart('article-category-chart', {
    chart: {
        type: 'pie'
    },
    title: {
        text: 'Browser market shares. January, 2022',
        align: 'left'
    },
    subtitle: {
        enabled: false
    },

    accessibility: {
        announceNewData: {
            enabled: true
        },
        point: {
            valueSuffix: '%'
        }
    },

    plotOptions: {
        series: {
            borderRadius: 5,
            dataLabels: [{
                enabled: true,
                distance: 15,
                format: '{point.name}'
            }, {
                enabled: true,
                distance: '-30%',
                filter: {
                    property: 'percentage',
                    operator: '>',
                    value: 5
                },
                format: '{point.y:.1f}%',
                style: {
                    fontSize: '0.9em',
                    textOutline: 'none'
                }
            }]
        }
    },

    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: ' +
            '<b>{point.y:.2f}%</b> of total<br/>'
    },

    series: [
        {
            name: 'Browsers',
            colorByPoint: true,
            data: [
                {
                    name: 'Pharmacology, Toxicology and Pharmaceutics',
                    y: 61.04,
                    drilldown: 'Chrome'
                },
                {
                    name: 'Biochemistry, Genetics and Molecular Biology',
                    y: 9.47,
                    drilldown: 'Safari'
                },
                {
                    name: 'Energy',
                    y: 9.32,
                    drilldown: 'Edge'
                },
                {
                    name: 'Chemical Engineering',
                    y: 8.15,
                    drilldown: 'Firefox'
                },
                {
                    name: 'Chemistry',
                    y: 11.02,
                    drilldown: null
                },
                {
                    name: 'Physics and Astronomy',
                    y: 11.02,
                    drilldown: null
                },
                {
                    name: 'Engineering',
                    y: 11.02,
                    drilldown: null
                }
            ]
        }
    ],
    drilldown: {
        series: [
            {
                name: 'Chrome',
                id: 'Chrome',
                data: [
                    [
                        'v97.0',
                        36.89
                    ],
                    [
                        'v96.0',
                        18.16
                    ],
                    [
                        'v95.0',
                        0.54
                    ],
                    [
                        'v94.0',
                        0.7
                    ],
                    [
                        'v93.0',
                        0.8
                    ],
                    [
                        'v92.0',
                        0.41
                    ],
                    [
                        'v91.0',
                        0.31
                    ],
                    [
                        'v90.0',
                        0.13
                    ],
                    [
                        'v89.0',
                        0.14
                    ],
                    [
                        'v88.0',
                        0.1
                    ],
                    [
                        'v87.0',
                        0.35
                    ],
                    [
                        'v86.0',
                        0.17
                    ],
                    [
                        'v85.0',
                        0.18
                    ],
                    [
                        'v84.0',
                        0.17
                    ],
                    [
                        'v83.0',
                        0.21
                    ],
                    [
                        'v81.0',
                        0.1
                    ],
                    [
                        'v80.0',
                        0.16
                    ],
                    [
                        'v79.0',
                        0.43
                    ],
                    [
                        'v78.0',
                        0.11
                    ],
                    [
                        'v76.0',
                        0.16
                    ],
                    [
                        'v75.0',
                        0.15
                    ],
                    [
                        'v72.0',
                        0.14
                    ],
                    [
                        'v70.0',
                        0.11
                    ],
                    [
                        'v69.0',
                        0.13
                    ],
                    [
                        'v56.0',
                        0.12
                    ],
                    [
                        'v49.0',
                        0.17
                    ]
                ]
            },
            {
                name: 'Safari',
                id: 'Safari',
                data: [
                    [
                        'v15.3',
                        0.1
                    ],
                    [
                        'v15.2',
                        2.01
                    ],
                    [
                        'v15.1',
                        2.29
                    ],
                    [
                        'v15.0',
                        0.49
                    ],
                    [
                        'v14.1',
                        2.48
                    ],
                    [
                        'v14.0',
                        0.64
                    ],
                    [
                        'v13.1',
                        1.17
                    ],
                    [
                        'v13.0',
                        0.13
                    ],
                    [
                        'v12.1',
                        0.16
                    ]
                ]
            },
            {
                name: 'Edge',
                id: 'Edge',
                data: [
                    [
                        'v97',
                        6.62
                    ],
                    [
                        'v96',
                        2.55
                    ],
                    [
                        'v95',
                        0.15
                    ]
                ]
            },
            {
                name: 'Firefox',
                id: 'Firefox',
                data: [
                    [
                        'v96.0',
                        4.17
                    ],
                    [
                        'v95.0',
                        3.33
                    ],
                    [
                        'v94.0',
                        0.11
                    ],
                    [
                        'v91.0',
                        0.23
                    ],
                    [
                        'v78.0',
                        0.16
                    ],
                    [
                        'v52.0',
                        0.15
                    ]
                ]
            }
        ]
    }
});
Highcharts.chart('colleague-chart', {
    chart: {
        type: 'column'
    },
    xAxis: {
        type: 'category',
        labels: {
            autoRotation: [-45, -90],
            style: {
                fontSize: '11px',
                fontWeight: '500',
                fontFamily: 'IRANSans'
            }
        }
    },
    yAxis: {
        enabled: false

    },
    legend: {
        enabled: false
    },
    tooltip: {
        pointFormat: 'همکاری در  <b>{point.y} مقاله</b>',
        style: {
            fontSize: '11px',
            fontWeight: '500',
            fontFamily: 'IRANSans'
        }

    },
    series: [{
        name: 'Population',
        colors: [
            // '#9b20d9', '#9215ac', '#861ec9', '#7a17e6', '#7010f9', '#691af3',
            // '#6225ed', '#5b30e7', '#533be1', '#4c46db', '#4551d5', '#3e5ccf',
            // '#3667c9', '#2f72c3', '#277dbd', '#1f88b7', '#1693b1', '#0a9eaa',
            // '#03c69b',  '#00f194'
            '	hsl(221, 79%, 20%)', '	hsl(221, 79%, 25%)', '	hsl(221, 79%, 30%)', '	hsl(221, 79%, 35%)', '	hsl(221, 79%, 40%)', '	hsl(221, 79%, 45%)', '	hsl(221, 79%, 50%)', '	hsl(221, 79%, 55%)', '	hsl(221, 79%, 60%)', '	hsl(221, 79%, 65%)', '	hsl(221, 79%, 70%)'
        ],
        colorByPoint: true,
        groupPadding: 0,
        data: [
            ['وحیده احراری', 589],
            ['لیما ایمانی راد', 589],
            ['حامد بخشیان سهی', 588],
            ['مجتبی محمدی نجف آبادی', 586],
            ['سید محسن اعتصامی', 560],
            ['محسن خاکزاد', 559],
            ['سعید پاک نیت مهدی آبادی', 499],
            ['حسام الدین ارفعی', 325],
            ['مجید هاشمی', 243],
            ['احمد مشایی', 24]

        ],
        dataLabels: {
            enabled: true,
            // rotation: -90,
            color: '#FFFFFF',
            inside: true,
            verticalAlign: 'top',
            // format: '{point.y:.1f}', // one decimal
            y: 10, // 10 pixels down from the top
            style: {
                fontSize: '13px',
                fontFamily: 'IRANSans'
            }
        }
    }]
});
