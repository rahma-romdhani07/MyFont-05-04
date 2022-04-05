import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-espace-stockage',
  templateUrl: './espace-stockage.component.html',
  styleUrls: ['./espace-stockage.component.css']
})
export class EspaceStockageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var echarts = require('echarts');

var chartDom = document.getElementById('main');
var myChart = echarts.init(chartDom, 'dark');
var option;

option = {
  backgroundColor:'#1A202E',
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      // Use axis to trigger tooltip
      type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
    }
  },
  legend: {},
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'value',
     axisLabel: {
        formatter: '{value} %'
      }
  },
  yAxis: {
    type: 'category',
    data: ['Dr1', 'Dr2', 'Dr3', 'Dr4', 'Dr5', 'Dr6', 'Dr7']
  },
  series: [
    {
      name: 'Espace de stockage ',
      type: 'bar',
      color:"#DB5959",
     
      label: {
        show: true  ,
        color :"#fff",
        borderRadius:15,
      },
      emphasis: {
        focus: 'series'
      },
      data: [60, 42, 34, 33, 30, 30, 20]
    },

  ]
};

option && myChart.setOption(option);

  }

}
