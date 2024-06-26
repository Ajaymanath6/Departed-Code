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
          color: [[1, "#CCECF2"]],//bg path color
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
        roundCap: true, //ring foreground path round
      },

      pointer: {
        show: false,
      },
      axisLine: {
        lineStyle: {
          width: 10, //ring bg thickness
          color: [[1, "#CCECF2"]], ////ring bg path color
        },
        roundCap: true,
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
    //trigger: "item",
    trigger: "axis", //(smooth animation will get)
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
