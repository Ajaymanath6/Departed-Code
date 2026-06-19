//multi color gauge start
var dom11 = document.getElementById("gaugeRing11");
var dom12 = document.getElementById("gaugeRing12");

var myChart11 = echarts.init(dom11);
var myChart12 = echarts.init(dom12);

var gaugeData11 = [
    {
        value: 0,
        detail: {
            valueAnimation: false,
            offsetCenter: ["0%", "0%"],
        },
    },
];

var option11;
var option12;

option11 = {
    animationDuration: 4000,
    animationDurationUpdate: 4000,
    series: [
        {
            type: "gauge",
            color: "#028831",
            animation: true,
            animationDurationUpdate: 4000,
            startAngle: 90,
            endAngle: -270,
            pointer: {
                show: false,
            },
            progress: {
                show: true,
                overlap: false,
                roundCap: true,
                clip: false,
                itemStyle: {
                    borderWidth: 1,
                },
            },
            axisLine: {
                roundCap: true,
                lineStyle: {
                    width: 10,
                    color: [[1, "#DEE9E7"]],
                },
            },
            splitLine: {
                show: false,
                distance: 0,
                length: 10,
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                show: false,
                distance: 50,
            },
            data: gaugeData11,
            title: {
                show: false,
            },
            detail: {
                width: 52,
                height: 40,
                fontSize: 14,
                fontWeight: 600,
                color: "#000000",
                fontFamily: '"IBM Plex Sans", sans-serif',
                lineHeight: 19.6,
                formatter: "2\nMotions",
            },
        },
    ],
};

option12 = {
    animationDuration: 4000,
    animationDurationUpdate: 4000,
    series: [
        {
            type: "pie",
            radius: ["61.5%", "75%"],
            center: ["50%", "50%"],
            startAngle: 90,
            clockwise: true,
            silent: true,
            animation: true,
            animationDuration: 4000,
            animationDurationUpdate: 4000,
            label: {
                show: false,
            },
            labelLine: {
                show: false,
            },
            emphasis: {
                disabled: true,
            },
            data: [
                {
                    value: 1,
                    itemStyle: {
                        color: "#C20205",
                        borderWidth: 0,
                    },
                },
                {
                    value: 1,
                    itemStyle: {
                        color: "#C5C5C5",
                        borderWidth: 0,
                    },
                },
                {
                    value: 1,
                    itemStyle: {
                        color: "#028831",
                        borderWidth: 0,
                    },
                },
            ],
        },
    ],
    graphic: [
        {
            type: "text",
            left: "center",
            top: "center",
            style: {
                text: "3\nMotions",
                textAlign: "center",
                textVerticalAlign: "middle",
                fill: "#000000",
                font: '600 14px "IBM Plex Sans", sans-serif',
                lineHeight: 19.6,
            },
        },
    ],
};

function animateGaugeLoad(chart, gaugeData) {
    requestAnimationFrame(function () {
        requestAnimationFrame(function () {
            gaugeData[0].value = 100;
            chart.setOption({
                series: [
                    {
                        data: gaugeData,
                        pointer: {
                            show: false,
                        },
                    },
                ],
            });
        });
    });
}

if (option11 && typeof option11 === "object") {
    myChart11.setOption(option11);
    animateGaugeLoad(myChart11, gaugeData11);
}

if (option12 && typeof option12 === "object") {
    myChart12.setOption(option12);
}

window.addEventListener("resize", function () {
    myChart11.resize();
    myChart12.resize();
});
//multi color gauge end
