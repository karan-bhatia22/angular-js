import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-earnings',
  templateUrl: './earnings.component.html',
  styleUrls: ['./earnings.component.css'],
})
export class EarningsComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public donutChartOptions: ChartConfiguration['options'] = {
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
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  public donutChartType: ChartType = 'doughnut';

  public donutChartData: ChartData<'doughnut'> = {
    labels: ['FY1', 'FY2', 'FY3'],
    datasets: [
      {
        data: [50, 10, 40],
        backgroundColor: ['#86efac', '#4ade80', '#22c55e'],
      },
    ],
  };

  constructor() {}

  ngOnInit(): void {}
}
