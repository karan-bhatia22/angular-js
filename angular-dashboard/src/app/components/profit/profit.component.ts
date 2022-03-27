import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-profit',
  templateUrl: './profit.component.html',
  styleUrls: ['./profit.component.css'],
})
export class ProfitComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public lineChartOptions: ChartConfiguration['options'] = {
    scales: {
      x: {
        display: false,
        grid: {
          display: false,
        },
      },
      y: {
        display: false,
        grid: {
          display: false,
        },
      },
    },
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  public lineChartType: ChartType = 'line';

  public lineChartData: ChartData<'line'> = {
    labels: ['yr1', 'yr2', 'yr3', 'yr4', 'yr5', 'yr6'],
    datasets: [
      {
        data: [0, 100, 30, 140, 90, 190],
        borderColor: '#06b6d4',
        pointBackgroundColor: '#06b6d7',
        pointBorderColor: '#06b6d7',
      },
    ],
  };
  constructor() {}

  ngOnInit(): void {}
}
