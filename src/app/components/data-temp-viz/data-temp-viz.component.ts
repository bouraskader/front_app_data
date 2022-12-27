import { TemperatureData } from './../../models/temperature-data.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { TemperatureDataService } from '../../services/temperature-data.service';
import {Chart} from 'angular-highcharts';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-data-temp-viz',
  templateUrl: './data-temp-viz.component.html',
  styleUrls: ['./data-temp-viz.component.scss']
})
export class DataTempVizComponent implements OnInit, OnDestroy {

  chart?: Chart

  temperatureDatas: TemperatureData[] = []
  temperatureDataSubscription?: Subscription

  constructor(private service: TemperatureDataService) { }


  ngOnInit(): void {
    //get data from back service
    this.temperatureDataSubscription = this.service.getTemperatureData().subscribe((data) => {
      this.temperatureDatas = data
      // create chart after get data
      this.buildChart()
     })
  }

  buildChart(): void {
    this.chart = new Chart({
      chart: {
        type: 'line'
      },
      title: {
        text: 'Nancy Temperature'
      },
      credits: {
        enabled: false
      },
      xAxis: {
        categories: this.temperatureDatas.length ? this.temperatureDatas.map(t => t.date!) : [],
        title:{
          text:'Date'
        }
      },
      yAxis: {
        title:{
          text:'Temperature'
        }
      },
      series: [
        {
          name: 'Temperature Evolution',
          type: 'line',
          data: this.temperatureDatas.length ? this.temperatureDatas.map(t => t.temperature!) : []
        }
      ]
    });
  }

  ngOnDestroy(): void {
    this.temperatureDataSubscription?.unsubscribe();
  }
}
