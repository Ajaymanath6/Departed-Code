//bar chart vertical start
var dom = document.getElementById("container1");
var myChart = echarts.init(dom, "Apollo");

var app = {};

var option;

option = {
    //responsive: true,
    //maintainAspectRatio: false,
    tooltip: {
        // axisPointer: { // width not working
        //   label: {
        //     width: 50
        //   }
        // }
        confine: true,
        // formatter: 'This is a very very very very very very very very very very very very very very long text '
    },
    toolbox: {
        //menu with save as options (doesnot work if added in apollothemejs)
        show: true,
        orient: "vertical",
        right: "0",
        top: "0",
        showTitle: "true",
        feature: {
            mark: { show: true },
            saveAsImage: { show: true },
        },
    },
    xAxis: {
        // splitLine: { show: false },// xy grid
        type: "category",
        //show: false,
        data: [
            "1 2014 KELLER AND LLER A 2014KELLER AND LLER A 2014KELLER AND LLER A 2014KELLER AND LLER A 2014KELLER AND LLER A 2014KELLER AND LLER A 2014KELLER AND LLER A first",
            "2 2013 cvo Associates",
            "3 Wed KELLER ANL.P",
            "4 Thu fourt fourt fourt",
            "5 Fritestt esttes kfjj",
            "6Sat",
            "7Suntestt esttes kfjj",
            "82014testt esttes kfjj",
            "92013 testt esttes kfjj",
            "10Wed testt esttes kfjj",
            "11Thu ",
            "12Fritestt esttes kfjj",
            "13Sat",
            "14Suntestt esttes kfjj",
        ],
        axisLabel: {
            // width: "50",
            overflow: "truncate",
            showMinLabel: true,
            hideOverlap: true,
        },
    },
    yAxis: {
        // splitLine: { show: false },// xy grid
        type: "value",
        //show: false,
    },
    series: [
        {
            data: [120, 200, 150, 80, 70, 110, 130, 120, 200, 150, 80, 70, 110, 130],
            type: "bar",
            // barWidth: "35%"
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        position: "top",
                    },
                },
            },
        },
    ],
};

if (option && typeof option === "object") {
    myChart.setOption(option);
}
//bar chart vertical end

//line chart start
var dom = document.getElementById("container2");
var myChart = echarts.init(dom, "Apollo");
var app = {};

var option;
option = {
    tooltip: {
        trigger: "item",
    },
    xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
        type: "value",
    },
    series: [
        {
            data: [10, 230, 224, 218, 135, 147, 260],
            type: "line",
        },
    ],
};

if (option && typeof option === "object") {
    myChart.setOption(option);
}
//line chart end

//Horizontal Normal Bar start
var dom = document.getElementById("container3");
var myChart = echarts.init(dom, "Apollo");
var app = {};

var option;

option = {
    tooltip: {},
    dataset: {
        source: [
            ["score", "amount", "product"],
            [89.3, 58212, "Matcha Latte"],
            [57.1, 78254, "Milk Tea"],
            [74.4, 41032, "Cheese Cocoa"],
            [50.1, 12755, "Cheese Brownie kfhgkj fgkfgk fkgh"],
            [89.7, 20145, "Matcha Cocoa"],
            [68.1, 79146, "Tea"],
            [19.6, 91852, "Orange Juice"],
            [10.6, 101852, "Lemon Juice"],
            [32.7, 20112, "Walnut Brownie"],
        ],
    },
    grid: { containLabel: true },
    xAxis: {
        name: "amount",
    },
    yAxis: {
        type: "category",
        axisLabel: {
            inside: true, // y axis horizontal text
            fontSize: 14,
            color: "white",
            show: true,
            width: "auto",
            rotate: 0,
        },
        zlevel: 100,
    },
    // visualMap: {// Variation Color Palette for bars
    //   orient: 'horizontal',
    //   left: 'center',
    //   min: 10,
    //   max: 100,
    //   text: ['High Score', 'Low Score'],
    //   dimension: 0,
    // },
    series: [
        {
            type: "bar",
            encode: {
                // Map the "amount" column to X axis.
                x: "amount",
                // Map the "product" column to Y axis
                y: "product",
            },
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        position: "right",
                    },
                },
            },
        },
    ],
};

if (option && typeof option === "object") {
    myChart.setOption(option);
}

//Horizontal Normal Bar end

//Vertical Stacked Bar start
var dom = document.getElementById("container4");
var myChart = echarts.init(dom, "Apollo");
var app = {};

var option;

option = {
    tooltip: {},

    xAxis: [
        {
            type: "category",
            data: ["2009", "2011", "2012", "2014", "2015", "2016", "2017", "2019"],
        },
    ],
    yAxis: [
        {
            type: "value",
        },
    ],
    series: [
        {
            name: "Civil",
            type: "bar",
            // barWidth: "35%",
            stack: "Ad",
            data: [3, 4, 3, 4, 3, 3, 3, 3],
        },
        {
            name: "Contract",
            type: "bar",
            stack: "Ad",
            data: [220, 182, 191, 234, 290, 330, 310, 7],
        },
        {
            name: "Labour",
            type: "bar",
            stack: "Ad",
            data: [150, 232, 201, 154, 190, 330, 410, 8],
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        position: "top",
                    },
                },
            },
        },
    ],
};

if (option && typeof option === "object") {
    myChart.setOption(option);
}

//Vertical Stacked Bar end

//horizontal Stacked Bar start
var dom = document.getElementById("container8");
var myChart = echarts.init(dom, "Apollo");
var app = {};

var option;

option = {
    tooltip: {},
    legend: {}, //switch
    xAxis: [
        {
            type: "value",
        },
    ],
    yAxis: [
        {
            type: "category",
            data: ["2009", "2011", "2012", "2014", "2015", "2016", "2017", "2019"],
        },
    ],
    series: [
        {
            name: "Civil",
            type: "bar",
            // barWidth: "35%",
            stack: "Ad",
            data: [3, 4, 3, 4, 3, 3, 3, 3],
        },
        {
            name: "Contract",
            type: "bar",
            stack: "Ad",
            data: [220, 182, 191, 234, 290, 330, 310, 7],
        },
        {
            name: "Labour",
            type: "bar",
            stack: "Ad",
            data: [150, 232, 201, 154, 190, 330, 410, 8],
        },
    ],
};

if (option && typeof option === "object") {
    myChart.setOption(option);
}

//horizontal Stacked Bar end

// Pie start
var dom = document.getElementById("container5");
var myChart = echarts.init(dom, "Apollo");
var app = {};

var option;
option = {
    title: {
        text: "Referer of a Website",
        subtext: "Fake Data",
        left: "center",
    },
    tooltip: {
        // trigger: 'item'
    },
    legend: {
        orient: "vertical",
        left: "left",
    },
    series: [
        {
            name: "Access From",
            type: "pie",
            radius: "50%",
            data: [
                { value: 160, name: "Motor Vehicle" },
                { value: 110, name: "Contract" },
                { value: 57, name: "Construction Defect" },
                { value: 41, name: "Judicial Review" },
                { value: 31, name: "Null" },
                { value: 25, name: "Not Yet Classified" },
                { value: 24, name: "Asbestos Product Liability" },
                { value: 21, name: "Business" },
                { value: 3, name: "Null" },
                { value: 13, name: "Wrongful Termination" },
            ],
            labelLine: {
                show: false, // label line hidden
            },
            itemStyle: {
                normal: {
                    label: {
                        show: false, // line label hidden
                    },
                },
            },
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: "rgba(0, 0, 0, 0.5)",
                },
            },
        },
    ],
};

if (option && typeof option === "object") {
    myChart.setOption(option);
}
// Pie end

// Donut start
var dom = document.getElementById("container6");
var myChart = echarts.init(dom, "Apollo");
var app = {};

var option;
option = {
    tooltip: {
        trigger: "item",
    },
    legend: {
        top: "5%",
        left: "center",
    },
    series: [
        {
            name: "Access From",
            type: "pie",
            radius: ["40%", "70%"],
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: "center",
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: "40",
                    fontWeight: "bold",
                },
            },
            labelLine: {
                show: false,
            },
            data: [
                { value: 1048, name: "Search Engine" },
                { value: 735, name: "Direct" },
                { value: 580, name: "Email" },
                { value: 484, name: "Union Ads" },
                { value: 300, name: "Video Ads" },
            ],
        },
    ],
};

if (option && typeof option === "object") {
    myChart.setOption(option);
}
// Donut end

//gauge ring start
var dom = document.getElementById("gaugeRing");
var myChart = echarts.init(dom, "Apollo");
var app = {};

var option;

const gaugeData = [
    {
        value: 80,
        name: "Perfect",
        title: {
            offsetCenter: ["0%", "-20%"],
        },
        detail: {
            valueAnimation: true,
            offsetCenter: ["0%", "0%"],
        },
    },
    // {
    //   value: 40,
    //   name: "Good",
    //   title: {
    //     offsetCenter: ["0%", "0%"],
    //   },
    //   detail: {
    //     valueAnimation: true,
    //     offsetCenter: ["0%", "10%"],
    //   },
    // },
    // {
    //   value: 60,
    //   name: "Commonly",
    //   title: {
    //     offsetCenter: ["0%", "30%"],
    //   },
    //   detail: {
    //     valueAnimation: true,
    //     offsetCenter: ["0%", "40%"],
    //   },
    // },
];
option = {
    series: [
        {
            type: "gauge",
            color: "#009EBD", //added new
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
                    //borderColor: "#464646",
                },
            },
            axisLine: {
                lineStyle: {
                    width: 10, //thikness of circle
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
            data: gaugeData,
            title: {
                fontSize: 14,
            },
            detail: {
                width: 50,
                height: 14,
                fontSize: 14,
                color: "inherit",
                borderColor: "inherit",
                borderRadius: 20,
                borderWidth: 1,
                formatter: "{value}%",
            },
        },
    ],
};
if (option && typeof option === "object") {
    myChart.setOption(option);
}
setInterval(function () {
    gaugeData[0].value = +(Math.random() * 100).toFixed(2);
    gaugeData[1].value = +(Math.random() * 100).toFixed(2);
    gaugeData[2].value = +(Math.random() * 100).toFixed(2);
    myChart.setOption({
        series: [
            {
                data: gaugeData,
                pointer: {
                    show: false,
                },
            },
        ],
    });
}, 2000);
//gauge ring end

//half gauge start
var dom = document.getElementById("halfgauge");
var myChart = echarts.init(dom, "Apollo");
var app = {};

var option;

option = {
    series: [
        {
            type: "gauge",
            center: ["50%", "60%"],
            startAngle: 200,
            endAngle: -20,
            min: 0,
            max: 60,
            splitNumber: 12,
            itemStyle: {
                color: "#009EBD",
            },
            progress: {
                show: true,
                width: 10, //ring foreground thickness
            },
            pointer: {
                show: false,
            },
            axisLine: {
                lineStyle: {
                    width: 10, //ring bg thickness
                },
            },
            axisTick: {
                distance: -45,
                splitNumber: 5,
                lineStyle: {
                    width: 2,
                    color: "#999",
                },
                show: false,
            },
            splitLine: {
                distance: -52,
                length: 14,
                lineStyle: {
                    width: 3,
                    color: "#999",
                },
                show: false,
            },
            axisLabel: {
                distance: -20,
                color: "#999",
                fontSize: 20,
                show: false,
            },
            anchor: {
                show: false,
            },
            title: {
                show: false,
            },
            detail: {
                valueAnimation: true,
                width: "60%",
                lineHeight: 40,
                borderRadius: 8,
                offsetCenter: [0, "-15%"],
                // fontSize: 60,
                fontSize: 20,
                fontWeight: "bolder",
                formatter: "{value} °C",
                color: "inherit",
            },
            data: [
                {
                    value: 20,
                },
            ],
        },

        // {
        //   type: "gauge",
        //   center: ["50%", "60%"],
        //   startAngle: 200,
        //   endAngle: -20,
        //   min: 0,
        //   max: 60,
        //   itemStyle: {
        //     color: "#FD7347",
        //   },
        //   progress: {
        //     show: true,
        //     width: 8,
        //   },
        //   pointer: {
        //     show: false,
        //   },
        //   axisLine: {
        //     show: false,
        //   },
        //   axisTick: {
        //     show: false,
        //   },
        //   splitLine: {
        //     show: false,
        //   },
        //   axisLabel: {
        //     show: false,
        //   },
        //   detail: {
        //     show: false,
        //   },
        //   data: [
        //     {
        //       value: 20,
        //     },
        //   ],
        // },
    ],
};
if (option && typeof option === "object") {
    myChart.setOption(option);
}

//half gauge end

//state map start

var dom = document.getElementById("container7");
var myChart = echarts.init(dom);
var app = {};

var option;

var ROOT_PATH = "https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples";

$.get(ROOT_PATH + "/data/asset/geo/Sicily_prehellenic_topographic_map.svg", function (svg) {
    echarts.registerMap("sicily", { svg: svg });
    option = {
        tooltip: {
            formatter: function (params) {
                console.log(params);
                return [params.name + ":", "sjjgsjdjsdjsjd g", "djshj jhsshkhs ", "erueyruyeuy"].join("<br>");
            },
        },
        geo: [
            {
                map: "sicily",
                roam: true,
                layoutCenter: ["50%", "50%"],
                layoutSize: "100%",
                selectedMode: "single",
                tooltip: {
                    show: true,
                    confine: true,
                    formatter: function (params) {
                        return [
                            "This is the introduction:",
                            "xxxxxxxxxxxxxxxxxxxxx",
                            "xxxxxxxxxxxxxxxxxxxxx",
                            "xxxxxxxxxxxxxxxxxxxxx",
                            "xxxxxxxxxxxxxxxxxxxxx",
                            "xxxxxxxxxxxxxxxxxxxxx",
                            "xxxxxxxxxxxxxxxxxxxxx",
                            "xxxxxxxxxxxxxxxxxxxxx",
                            "xxxxxxxxxxxxxxxxxxxxx",
                            "xxxxxxxxxxxxxxxxxxxxx",
                            "xxxxxxxxxxxxxxxxxxxxx",
                        ].join("<br>");
                    },
                },
                itemStyle: {
                    color: undefined,
                },
                emphasis: {
                    label: {
                        show: false,
                    },
                },
                select: {
                    itemStyle: {
                        color: "#b50205",
                    },
                    label: {
                        show: false,
                    },
                },
                regions: [
                    {
                        name: "route1",
                        itemStyle: {
                            borderWidth: 0,
                        },
                        select: {
                            itemStyle: {
                                color: "#b5280d",
                                borderWidth: 0,
                            },
                        },
                        tooltip: {
                            position: "right",
                            alwaysShowContent: true,
                            enterable: true,
                            extraCssText: "user-select: text",
                            formatter: [
                                "Route 1:",
                                "route map",
                                "the information of the",
                                "xxxxxxxxxxxxxxxxxxxxxxxxxxx",
                                "xxxxxxxxxxxxxxxxxxxxxxxxxxx",
                                "xxxxxxxxxxxxxxxxxxxxxxxxxxx",
                            ].join("<br>"),
                        },
                    },
                    {
                        name: "route2",
                        itemStyle: {
                            borderWidth: 0,
                        },
                        select: {
                            itemStyle: {
                                color: "#b5280d",
                                borderWidth: 0,
                            },
                        },
                        tooltip: {
                            position: "left",
                            alwaysShowContent: true,
                            enterable: true,
                            extraCssText: "user-select: text",
                            formatter: [
                                "Route 2:",
                                "xxxxxxxxxxxxxx",
                                "xxxxxxxxxxxxxx",
                                "xxxxxxxxxxxxxx",
                                "xxxxxxxxxxxxxx",
                                "xxxxxxxxxxxxxx",
                                "xxxxxxxxxxxxxx",
                                "xxxxxxxxxxxxxx",
                                "xxxxxxxxxxxxxx",
                            ].join("<br>"),
                        },
                    },
                ],
            },
        ],
        // -------------
        // Make buttons
        grid: {
            top: 10,
            left: "center",
            width: 80,
            height: 20,
        },
        xAxis: {
            axisLine: { show: false },
            splitLine: { show: false },
            axisLabel: { show: false },
            axisTick: { show: false },
        },
        yAxis: {
            axisLine: { show: false },
            splitLine: { show: false },
            axisLabel: { show: false },
            axisTick: { show: false },
        },
        series: {
            type: "scatter",
            itemStyle: {},
            label: {
                show: true,
                borderColor: "#999",
                borderWidth: 1,
                borderRadius: 2,
                backgroundColor: "#fff",
                padding: [3, 5],
                fontSize: 18,
                opacity: 1,
                color: "#333",
            },
            encode: {
                label: 2,
            },
            symbolSize: 10,
            tooltip: { show: false },
            selectedMode: "single",
            select: {
                label: {
                    color: "#fff",
                    borderColor: "#555",
                    backgroundColor: "#555",
                },
            },
            data: [
                [0, 0, "route1"],
                [1, 0, "route2"],
            ],
        },
        // Make buttons end
        // -----------------
    };
    myChart.setOption(option);
    myChart.on("selectchanged", function (params) {
        if (!params.selected.length) {
            myChart.dispatchAction({
                type: "hideTip",
            });
            myChart.dispatchAction({
                type: "geoSelect",
                geoIndex: 0,
                // Use no name to unselect.
            });
        } else {
            var btnDataIdx = params.selected[0].dataIndex[0];
            var name = option.series.data[btnDataIdx][2];
            myChart.dispatchAction({
                type: "geoSelect",
                geoIndex: 0,
                name: name,
            });
            myChart.dispatchAction({
                type: "showTip",
                geoIndex: 0,
                name: name,
            });
        }
    });
});

if (option && typeof option === "object") {
    myChart.setOption(option);
}

//state map end
