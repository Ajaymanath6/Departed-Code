//gauge ring start
var dom = document.getElementById("gaugeRing");
var dom2 = document.getElementById("gaugeRing2");
var dom3 = document.getElementById("gaugeRing3");
var dom4 = document.getElementById("gaugeRing4");
var dom5 = document.getElementById("gaugeRing5");
var dom6 = document.getElementById("gaugeRing6");
var dom7 = document.getElementById("gaugeRing7");
var dom8 = document.getElementById("gaugeRing8");
var dom9 = document.getElementById("gaugeRing9");
var dom10 = document.getElementById("gaugeRing10");

var myChart = echarts.init(dom, "Apollo");
var myChart2 = echarts.init(dom2, "Apollo");
var myChart3 = echarts.init(dom3, "Apollo");
var myChart4 = echarts.init(dom4, "Apollo");
var myChart5 = echarts.init(dom5, "Apollo");
var myChart6 = echarts.init(dom6, "Apollo");
var myChart7 = echarts.init(dom7, "Apollo");
var myChart8 = echarts.init(dom8, "Apollo");
var myChart9 = echarts.init(dom9, "Apollo");
var myChart10 = echarts.init(dom10, "Apollo");

var app = {};

var option;
var option2;
var option3;

//color1
const gaugeData = [
    {
        value: 20,
        //name: "Perfect",
        title: {
            offsetCenter: ["0%", "-20%"],
        },
        detail: {
            valueAnimation: true,
            offsetCenter: ["0%", "0%"],
        },
    },
];
//color2
const gaugeData2 = [
    {
        value: 90,
        //name: "Perfect",
        title: {
            offsetCenter: ["0%", "-20%"],
        },
        detail: {
            valueAnimation: true,
            offsetCenter: ["0%", "0%"],
        },
    },
];
//color3
const gaugeData3 = [
    {
        value: 60,
        //name: "Perfect",
        title: {
            offsetCenter: ["0%", "-20%"],
        },
        detail: {
            valueAnimation: true,
            offsetCenter: ["0%", "0%"],
        },
    },
];

//color1
option = {
    series: [
        {
            type: "gauge",
            color: "#009EBD", //added new
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
                    //borderColor: "#464646",
                },
            },
            axisLine: {
                lineStyle: {
                    width: 10, //thikness of circle
                    color: [[1, "#CCECF2"]],
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
                fontSize: 24,
                color: "inherit",
                // borderColor: "inherit",
                // borderRadius: 20,
                // borderWidth: 1,
                formatter: "{value}%",
            },
        },
    ],
};
//color2
option2 = {
    series: [
        {
            type: "gauge",
            color: "#A71042", //added new
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
                    //borderColor: "#464646",
                },
            },

            axisLine: {
                lineStyle: {
                    width: 10, //thikness of circle
                    color: [[1, "#EDCFD9"]],
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
            data: gaugeData2,
            title: {
                fontSize: 14,
            },
            detail: {
                width: 50,
                height: 14,
                fontSize: 24,
                color: "inherit",
                // borderColor: "inherit",
                // borderRadius: 20,
                // borderWidth: 1,
                formatter: "{value}%",
            },
        },
    ],
};
//color3
option3 = {
    series: [
        {
            type: "gauge",
            color: "#DD8332", //added new
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
                    //borderColor: "#464646",
                },
            },

            axisLine: {
                lineStyle: {
                    width: 10, //thikness of circle
                    color: [[1, "#F8E6D6"]],
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
            data: gaugeData3,
            title: {
                fontSize: 14,
            },
            detail: {
                width: 50,
                height: 14,
                fontSize: 24,
                color: "inherit",
                // borderColor: "inherit",
                // borderRadius: 20,
                // borderWidth: 1,
                formatter: "{value}%",
            },
        },
    ],
};

//color1
if (option && typeof option === "object") {
    myChart.setOption(option);
    myChart2.setOption(option);
    myChart3.setOption(option);
    myChart4.setOption(option);
    myChart5.setOption(option);
    myChart6.setOption(option);
    myChart7.setOption(option);
    myChart8.setOption(option);
    myChart9.setOption(option);
    myChart10.setOption(option);
}
//color2
if (option2 && typeof option2 === "object") {
    myChart2.setOption(option2);
}
//color3
if (option3 && typeof option3 === "object") {
    myChart3.setOption(option3);
}

//color1
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
//color2
setInterval(function () {
    gaugeData2[0].value = +(Math.random() * 100).toFixed(2);
    gaugeData2[1].value = +(Math.random() * 100).toFixed(2);
    gaugeData2[2].value = +(Math.random() * 100).toFixed(2);
    myChart.setOption({
        series: [
            {
                data: gaugeData2,
                pointer: {
                    show: false,
                },
            },
        ],
    });
}, 2000);
//color3
setInterval(function () {
    gaugeData3[0].value = +(Math.random() * 100).toFixed(2);
    gaugeData3[1].value = +(Math.random() * 100).toFixed(2);
    gaugeData3[2].value = +(Math.random() * 100).toFixed(2);
    myChart.setOption({
        series: [
            {
                data: gaugeData3,
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

//line chart start
var dom = document.getElementById("container2");
var myChart = echarts.init(dom, "Apollo");
var app = {};

var option;
option = {
    tooltip: {
        // trigger: "item",
        trigger: "axis",
        axisPointer: {
            type: "line",
        },
    },
    xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
        type: "value",
    },
    lineStyle: {
        color: "#3258dd",
        //width: 2,
         type: 'Solid', // Line type (e.g., dashed, dotted, solid)
          width: 1, // Line width
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

//line chart artemis start
var dom = document.getElementById("line-artemis");
var myChart = echarts.init(dom, "Apollo");
var app = {};

var option;
option = {
  xAxis: {
    type: "category",
    data: [
      "2006",
      "2008",
      "2010",
      "2012",
      "2014",
      "2016",
      "2018",
      "2020",
      "2022",
      "2024",
    ],
  },
  yAxis: {
    type: "value",
    min: 0,
    max: 100,
    interval: 25,
  },
  series: [
    {
      data: [10, 100, 20, 15, 30, 80, 70, 60, 75, 50],
      type: "line",
      smooth: false,
      markLine: {
        data: [
          { xAxis: "2006" },
          { xAxis: "2008" },
          { xAxis: "2010" },
          { xAxis: "2012" },
          { xAxis: "2014" },
          { xAxis: "2016" },
          { xAxis: "2018" },
          { xAxis: "2020" },
          { xAxis: "2022" },
          { xAxis: "2024" },
        ],
        lineStyle: {
          color: "#ABBDD1", // Solid line color
          type: "solid", // Solid line
          width: 1, // Line width
        },
        symbol: "none", // No arrows or markers
      },
    },
  ],
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "line",
    },
    extraCssText: "z-index: 10;",
  },
  // grid: {
  //     top: "10%",
  //     bottom: "15%",
  //     left: "10%",
  //     right: "10%",
  // },
};

if (option && typeof option === "object") {
    myChart.setOption(option);
}
//line chart artemis end

//horizontal bar chart start
var dom = document.getElementById("barchart");
var myChart = echarts.init(dom, "null");
var option = {
  dataset: {
    source: [
      // Expanded to 10 bars with unique names and values
      ["amount", "product"],
      [84, "Henry Jones"],
      [194, "Catherine James"],
      [62, "Edgar Clerk"],
      [85, "Maria Stevens"],
      [64, "James Ruskin"],
      [122, "Elizabeth Brown"],
      [76, "Michael Thompson"],
      [156, "Sarah Anderson"],
      [95, "David Wilson"],
      [43, "Jennifer Lee"],
    ],
  },
  grid: {
    containLabel: true,
    left: "25%", // Increased spacing for more labels
    right: "10%",
    top: "10%",
    bottom: "10%",
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
  },
  xAxis: {
    type: "value",
    position: "top",
    axisLabel: {
      fontSize: 12,
      color: "#333",
    },
    splitLine: {
      lineStyle: {
        color: "#e0e0e0",
        type: "dashed",
      },
    },
  },
  yAxis: {
    type: "category",
    axisLabel: {
      fontSize: 12,
      color: "#005C87",
      fontWeight: "bold",
    },
  },
  series: [
    {
      type: "bar",
      label: {
        show: true,
        position: "right",
        color: "#000",
        fontSize: 11,
        fontWeight: "bold",
      },
      itemStyle: {
        color: function (params) {
          // Expanded color palette with more unique colors
          const colors = [
            "#A71042", // Deep Crimson
            "#009EBD", // Teal Blue
            "#001A31", // Dark Navy
            "#DD8332", // Burnt Orange
            "#005C87", // Steel Blue
            "#ABBDD1", // Deep Orchid
            "#D0CFCD", // Sea Green
            "#F8E00B", // Crimson
            "#4B0082", // Indigo
            "#B541FC", // Tomato Red
          ];
          return colors[params.dataIndex];
        },
        borderRadius: [0, 5, 5, 0], // Slightly rounded right corners
      },
      barWidth: "70%", // Reduced bar thickness to prevent overlap
      barGap: "30%", // Add gap between bars
      encode: {
        x: "amount",
        y: "product",
      },
    },
  ],
};
if (option && typeof option === "object") {
  myChart.setOption(option);
}
//horizontal bar chart end




// Donut start
var dom = document.getElementById("container6");
var myChart = echarts.init(dom, "Apollo");
var app = {};

var option;
option = {
    tooltip: {
        //trigger: "item",
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
                    fontSize: "20",
                    fontWeight: "bold",
                },
            },
            labelLine: {
                show: true,
            },
            itemStyle: {
                normal: {
                    label: {
                        show: true, // line label hidden
                    },
                },
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

//artemis donut start
var dom = document.getElementById("artemis-donut");
var myChart = echarts.init(dom, "Apollo");
var app = {};

var option;
option = {
  tooltip: {
    trigger: "item",
  },
  legend: {
    show: false, // Hiding the legend
  },
  series: [
    {
      name: "Case Distribution",
      type: "pie",
      radius: ["40%", "70%"], // Donut chart
      avoidLabelOverlap: true,
      label: {
        show: true,
        position: "outside",
        formatter: "{b} \n {c} cases ({d}%)", // Label format
        fontSize: 12,
        color: "#001A31",
      },
      labelLine: {
        show: true, // Show arrow lines for labels
        length: 10,
        length2: 20,
        color: "##EAEEF2",
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 13,
          fontWeight: "bold",
        },
      },
      data: [
        { value: 4, name: "Category A", itemStyle: { color: "#A71042" } },
        { value: 2, name: "Category B", itemStyle: { color: "#B541FC" } },
        { value: 1, name: "Category C", itemStyle: { color: "#F8E00B" } },
        { value: 5, name: "Category D", itemStyle: { color: "#009EBD" } },
        { value: 54, name: "Category A", itemStyle: { color: "#A71042" } },
        { value: 62, name: "Category B", itemStyle: { color: "#B541FC" } },
        { value: 20, name: "Category C", itemStyle: { color: "#F8E00B" } },
        { value: 104, name: "Category D", itemStyle: { color: "#009EBD" } },
        { value: 54, name: "Category A", itemStyle: { color: "#A71042" } },
        { value: 62, name: "Category B", itemStyle: { color: "#B541FC" } },
        { value: 20, name: "Category C", itemStyle: { color: "#F8E00B" } },
        { value: 104, name: "Category D", itemStyle: { color: "#009EBD" } },
      ],
    },
  ],
};


if (option && typeof option === "object") {
    myChart.setOption(option);
}
//artemis donut end

// Pie start
var dom = document.getElementById("container5");
var myChart = echarts.init(dom, "Apollo");
var app = {};

var option;
option = {
    title: {
        text: "",
        subtext: "",
        left: "center",
    },
    tooltip: {
        // trigger: 'item'
    },
    legend: {
        //show:false,
        orient: "horizontal",
        left: "center",
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
                show: true, // label line hidden
            },
            itemStyle: {
                normal: {
                    label: {
                        show: true, // line label hidden
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
