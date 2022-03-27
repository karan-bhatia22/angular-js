import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-revenue-report',
  templateUrl: './revenue-report.component.html',
  styleUrls: ['./revenue-report.component.css'],
})
export class RevenueReportComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  public lineChartOptions: ChartConfiguration['options'] = {
    elements: {
      line: {
        tension: 0.5,
      },
      point: {
        radius: 0,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
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
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  public barChartOptions: ChartConfiguration['options'] = {
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      title: {
        display: true,
        text: 'Revenue Report',
        position: 'top',
        align: 'start',
        font: {
          size: 22,
        },
      },
      legend: {
        display: true,
        position: 'top',
        align: 'end',
        labels: {
          usePointStyle: true,
          padding: 25,
        },
      },
    },
  };

  public barChartType: ChartType = 'bar';
  public lineChartType: ChartType = 'line';

  public lineChartData: ChartData<'line'> = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Sep'],
    datasets: [
      {
        data: [0, -10, 20, 1, 4, -15, 30, 10, 8],
        borderColor: '#8b5cf6',
      },
    ],
  };
  public barChartData: ChartData<'bar'> = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Sep'],
    datasets: [
      {
        data: [100, 175, 285, 280, 100, 70, 150, 200, 50],
        label: 'Earning',
        stack: 'profit',
        backgroundColor: '#8b5cf6',
        hoverBackgroundColor: 'rgb(112, 60, 255)',
        barThickness: 8,
        borderRadius: 5,
      },
      {
        data: [-170, -100, -40, -200, -100, -30, -50, -40, -60],
        label: 'Expense',
        stack: 'profit',
        backgroundColor: 'orange',
        hoverBackgroundColor: 'orange',
        barThickness: 8,
        borderRadius: 5,
      },
    ],
  };
  constructor() {}

  ngOnInit(): void {}
}
