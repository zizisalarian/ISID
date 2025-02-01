for (let i = 1; i < 9; i++) {


    Highcharts.chart(`chart-${i}`, {
        chart: {
            type: 'column',
            backgroundColor: '#ffffff00', // رنگ پس‌زمینه
            spacing: [10, 10, 10, 10]
        },
        title: {
            text: null // بدون عنوان
        },
        xAxis: {
            categories: Array.from({ length: 20 }, (_, i) => `Year ${2023 - i}`), // ایجاد ۵۰ دسته (سال‌ها)
            labels: {
                enabled: false // حذف لیبل‌های محور X
            },
            reversed: true // معکوس کردن جهت محور
        },
        yAxis: {
            visible: false, // مخفی کردن محور عمودی
            labels: {
                enabled: false // حذف لیبل‌های محور Y
            }
        },
        series: [{
            name: 'Data',
            data: Array.from({ length: 20 }, () => Math.floor(Math.random() * 100)), // تولید ۵۰ مقدار تصادفی
            color: '#aaa', // رنگ پیش‌فرض میله‌ها
            states: {
                hover: {
                    color: '#ff8f0e' // رنگ قرمز هنگام هاور
                }
            }
        }],
        exporting: {
            enabled: false
        },
        credits: {
            enabled: false // حذف کپی‌رایت
        },
        legend: {
            enabled: false // مخفی کردن راهنما
        },
        tooltip: {
            enabled: false // حذف Tooltip
        },
        plotOptions: {
            column: {
                borderWidth: 0,
                pointPadding: 0.05, // تنظیم فاصله بین میله‌ها
                groupPadding: 0.05 // کم کردن فاصله گروهی
            }
        }
    });
}


const text =
    'Knowleas done, what was found, and the clarity of' + 'Consideration of prior, relevant literature is essential for all research disciplines and all research projects. When reading an article, independent of discipline, the author begins by describing previous research to map and assess the research area to motivate the aim of the study and justify the research question and hypotheses',

    lines = text.replace(/[():'?0-9]+/g, '').split(/[,\. ]+/g),
    data = lines.reduce((arr, word) => {
        let obj = Highcharts.find(arr, obj => obj.name === word);
        if (obj) {
            obj.weight += 1;
        } else {
            obj = {
                name: word,
                weight: 1
            };
            arr.push(obj);
        }
        return arr;
    }, []);

Highcharts.chart('word-chart', {
    accessibility: {
        screenReaderSection: {
            beforeChartFormat: '<h5>{chartTitle}</h5>' +
                '<div>{chartSubtitle}</div>' +
                '<div>{chartLongdesc}</div>' +
                '<div>{viewTableButton}</div>'
        }
    },
    chart: {
        backgroundColor: '#ffffff00'
    },
    series: [{
        type: 'wordcloud',
        data,
        name: 'Occurrences',
        colors: ['hsl(11, 90%, 10%)', 'hsl(11, 90%, 20%)', 'hsl(11, 90%, 30%)', 'hsl(11, 90%, 40%)', 'hsl(11, 90%, 50%)', 'hsl(11, 90%, 60%)', 'hsl(11, 90%, 70%)', 'hsl(11, 90%, 80%)', 'hsl(11, 90%, 90%)']
    }],
    title: {
        text: ''
    },
    subtitle: {
        enabled: false
    },
    tooltip: {
        headerFormat: '<span style="font-size: 16px"><b>{point.name}</b>' +
            '</span><br>'
    }, exporting: {
        enabled: false
    },
    credits: {
        enabled: false // حذف کپی‌رایت
    },
    legend: {
        enabled: false // مخفی کردن راهنما
    },
});




window.addEventListener('scroll', () => {
    let body = document.querySelector('body')
    body.classList.toggle("scroll", window.scrollY > 200)
})

let links = document.querySelectorAll('.menu li a')
links.forEach(link => {
    link.addEventListener('click', () => {
        links.forEach(l=> l.classList.remove('active'))
        setTimeout(()=>{
            let windowURL = window.location.href
            console.log(windowURL);
            console.log(link.getAttribute('href'));
            if (windowURL.includes(link.getAttribute('href'))) {
                link.classList.add('active')
            }
        },100)
        
    })
})
