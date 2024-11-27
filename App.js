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
                [40],
                [51],
                [65],
                [80],
                [83]
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
