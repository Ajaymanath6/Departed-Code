import { Component } from '@angular/core';
import { AfterViewInit, OnInit, ElementRef } from '@angular/core';
import theme from '../../utils/echart-theme.json';

declare var echarts: any;

@Component({
  selector: 'app-semanticsearch',
  templateUrl: './semanticsearch.component.html',
  styleUrls: ['./semanticsearch.component.scss'],
})
export class SemanticsearchComponent implements AfterViewInit {
  // //col hide start
  // firstcol: boolean = true;
  // secondcol: boolean = true;

  // hidefirstcol() {
  //   // this.firstcol= false;
  // }

  // //col hide end

  constructor(private elementRef: ElementRef) {}
  title = 'echarts-angular';

  ngAfterViewInit() {
    this.initChart();
  }
  initChart() {
    //bar chart start
    var dom = document.getElementById('container1');
    echarts.registerTheme('Apollo-theme', theme);
    var myChart = echarts.init(dom, 'Apollo-theme');

    window.addEventListener('resize', function () {
      myChart.resize();
    });
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
        orient: 'vertical',
        right: '0',
        top: '0',
        showTitle: 'true',
        feature: {
          mark: { show: true },
          saveAsImage: { show: true },
        },
      },
      xAxis: {
        // splitLine: { show: false },// xy grid
        type: 'category',
        //show: false,
        data: [
          '1 2014 KELLER AND LLER A 2014KELLER AND LLER A 2014KELLER AND LLER A 2014KELLER AND LLER A 2014KELLER AND LLER A 2014KELLER AND LLER A 2014KELLER AND LLER A first',
          '2 2013 cvo Associates',
          '3 Wed KELLER ANL.P',
          '4 Thu fourt fourt fourt',
          '5 Fritestt esttes kfjj',
          '6 Sat',
          '7 Suntestt esttes kfjj',
          '8 2014testt esttes kfjj',
          '9 2013 testt esttes kfjj',
          '10 Wed testt esttes kfjj',
          '11 Thu ',
          '12 Fritestt esttes kfjj',
          '13 Sat',
          '14 Suntestt esttes kfjj',
        ],
        axisLabel: {
          // width: "50",
          overflow: 'truncate',
          showMinLabel: true,
          hideOverlap: true,
        },
      },
      yAxis: {
        // splitLine: { show: false },// xy grid
        type: 'value',
        //show: false,
      },
      series: [
        {
          data: [
            120, 200, 150, 80, 70, 110, 130, 120, 200, 150, 80, 70, 110, 130,
          ],
          type: 'bar',
          // barWidth: "35%"
          itemStyle: {
            normal: {
              label: {
                show: true,
                position: 'top',
              },
            },
          },
        },
      ],
    };

    if (option && typeof option === 'object') {
      myChart.setOption(option);
    }
    //bar chart end

    //line chart start
    var dom = document.getElementById('container2');
    echarts.registerTheme('Apollo-theme', theme);
    var myChart2 = echarts.init(dom, 'Apollo-theme');
    window.addEventListener('resize', function () {
      myChart2.resize();
    });
    var app = {};

    var option;
    option = {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: [150, 230, 224, 218, 135, 147, 260],
          type: 'line',
        },
      ],
    };

    if (option && typeof option === 'object') {
      myChart2.setOption(option);
    }
    //line chart end
  }
}
