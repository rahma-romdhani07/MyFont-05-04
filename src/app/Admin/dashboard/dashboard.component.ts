import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import * as echarts from 'echarts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(){
    $('.counter').each(function() {
      var $this = $(this),
          countTo = $this.attr('data-count');
      
      $({countNum: $this.text()}).animate({
        countNum: countTo
      },
    
      {
    
        duration: 3000,
        easing:'linear',
        step: function() {
          $this.text(Math.floor(parseInt(this.countNum)));
        },
        complete: function() {
          $this.text(this.countNum);
          //alert('finished');
        }
    
      });  
      
      
    
    }); 
  
    type EChartsOption = echarts.EChartsOption;

    var chartDom = document.getElementById('main')!;
    var myChart = echarts.init(chartDom, 'dark');
    var option: EChartsOption;
    
    option = {
      backgroundColor:'rgb(25,28,36)',
      title: {
//text: 'Stacked Area Chart'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        }
      },
      legend: {
        data: ['Patients', 'Age Patient']
      },
      toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            //dataView : {readOnly:false},
            magicType : {show: true, type: ['line', 'bar'/*, 'stack'*/]},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: ['Janv.', 'Févr.', 'Mars', 'Avril', 'Mai', 'Juin', 'Juil.', 'Août', 'Sept.', 'Oct.', 'Nov.', 'Déc.']
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [

        
        {
          name: 'Patients',
          type: 'line',
          stack: 'Total',
          areaStyle: {},
          emphasis: {
            focus: 'series'
          },
          data: [100, 258, 181, 230, 188, 127,150, 256, 151, 200, 106, 198]
        },
         
        {
          name: 'Age Patient',
          type: 'line',
          stack: 'Total',
          areaStyle: {},
          emphasis: {
           focus: 'series'
          },
          data: [15, 20, 25, 30,35,40,45,50,55,60,65,70]
        }
        
      ]
    };
    
    option && myChart.setOption(option);
    
} }


