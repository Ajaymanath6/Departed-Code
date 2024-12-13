(function (root, factory) {
    if (typeof define === "function" && define.amd) {
        // AMD. Register as an anonymous module.
        define(["exports", "echarts"], factory);
    } else if (typeof exports === "object" && typeof exports.nodeName !== "string") {
        // CommonJS
        factory(exports, require("echarts"));
    } else {
        // Browser globals
        factory({}, root.echarts);
    }
})(this, function (exports, echarts) {
    var log = function (msg) {
        if (typeof console !== "undefined") {
            console && console.error && console.error(msg);
        }
    };
    if (!echarts) {
        log("ECharts is not Loaded");
        return;
    }
    echarts.registerTheme("Apollo", {
        color: [
            "#3fb1e3",
            //"#82E9FF",
            "#6be6c1",
            "#626c91",
            "#a0a7e6",
            "#c4ebad",
            "#96dee8",
        ],
        textStyle: {},
        title: {
            textStyle: {
                color: "#666666",
            },
            subtextStyle: {
                color: "#999999",
            },
        },
        line: {
            //line chart properties
            itemStyle: {
                borderWidth: "2",
            },
            lineStyle: {
                width: "3",
            },
            symbolSize: "15",
            symbol: "circle",
            smooth: false,
        },
        bar: {
            itemStyle: {
                barBorderWidth: 0,
                barBorderColor: "#ccc",
                //"barWidth": "30",
                // "itemStyle": {
                //     "normal": {
                //         "label": {
                //             "show": "true",
                //             "color": "#fff",
                //             "position": "inside"
                //         }
                //     }
                // }
            },
            toolbox: {
                iconStyle: {
                    color: "#3fb1e3",
                },
            },
        },
        categoryAxis: {
            axisLine: {
                show: false, // x,y axis line hide, horizontal line hidden on x axis bottom
                lineStyle: {
                    color: "#FFBF00", //color for x and y axis line
                },
            },
            axisTick: {
                show: false,
                lineStyle: {
                    color: "#333",
                },
            },
            axisLabel: {
                show: true,
                color: "#A1A2BC",
                interval: "0", //displays all label on x-axis
                overflow: "breakAll",
                //"overflow": "truncate",
                rotate: "50",
                width: "80",
                height: "auto",
            },
            splitLine: {
                // xy grid
                show: true,
                lineStyle: {
                    color: ["#eeeeee"],
                },
            },
        },
        valueAxis: {
            axisLine: {
                show: true, // x,y axis line hide, vertical line hidden
                lineStyle: {
                    color: "#cccccc",
                },
            },
            axisLabel: {
                show: true, // vertical value hidden, on left corner y axis
                color: "#999999",
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: ["#eeeeee"],
                },
            },
        },
        toolbox: {
            //takes only color, no download image etc
            iconStyle: {
                color: "#3fb1e3",
            },
        },
        tooltip: {
            //doesnot take color,padding, borderwidth
            axisPointer: {
                lineStyle: {
                    color: "#cccccc",
                    width: 1,
                },
                crossStyle: {
                    color: "#cccccc",
                    width: 1,
                },
            },
            title: {
                textStyle: {
                    width: "20%",
                },
            },
            className: "echarts-tooltip",
        },
        visualMap: {
            // Variation Color Palette for horizontal bars
            color: ["#2a99c9", "#afe8ff"],
        },
    });
});
