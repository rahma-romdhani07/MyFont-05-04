import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stat-app',
  templateUrl: './stat-app.component.html',
  styleUrls: ['./stat-app.component.css']
})
export class StatAppComponent implements OnInit {

  constructor() { }
ngOnInit(){
  var echarts = require('echarts');

var chartDom = document.getElementById('main');
var myChart = echarts.init(chartDom, 'dark');
var option;

option = {
  backgroundColor:'#1A202E',
  tooltip: {
    trigger: 'axis'
  },
  legend: {},
  toolbox: {
    show: true,
    feature: {
      dataZoom: {
        yAxisIndex: 'none'
      },
      dataView: { readOnly: false },
      magicType: { type: ['line', 'bar'] },
      restore: {},
      saveAsImage: {}
    }
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: [
      'Jan',
      'Fev',
      'Mar',
      'Avr',
      'Mai',
      'Jui',
      'Juil',
      'Aou',
      'Oct',
      'Nov',
      'Dec'
    ]
  },
  yAxis: {
    type: 'value',
    axisLabel: {
      formatter: '{value}'
    }
  },
  series: [
    {
      name: 'Nombre des télechargements',
      type: 'line',
      color: '',
      data: [155, 100, 80, 250, 220, 260, 240, 369, 485, 122],
      markPoint: {
        data: [
          { type: 'max', name: 'Max' },
          { type: 'min', name: 'Min' }
        ]
      },
      markLine: {
        data: [{ type: 'average', name: 'Avg' }]
      }
    }
  ]
};

option && myChart.setOption(option);
}
}
