import {Component, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexStroke,
  ApexMarkers,
  ApexYAxis,
  ApexGrid,
  ApexTitleSubtitle,
  ApexTooltip,
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  markers: ApexMarkers;
  yaxis: ApexYAxis;
  grid: ApexGrid;
  title: ApexTitleSubtitle;
  tooltip: ApexTooltip,
  colors: string[],
};

@Component({
  selector: 'app-dashboard-student',
  templateUrl: './dashboard-student.component.html',
  styleUrls: ['./dashboard-student.component.css']
})
export class DashboardStudentComponent implements OnInit {
  showDropdown = false;
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor(private router: Router) {
    
    this.chartOptions = {
      series: [
        {
          name: "Profile Visits",
          data: [10, 24, 15, 35, 11, 19, 23, 28, 31, 37, 35, 30]
        }
      ],
      colors:['#4B7BFF'],
      chart: {
        height: 320,
        type: "line",
        dropShadow: {
          enabled: true,
          color: "#000",
          top: 18,
          left: 7,
          blur: 10,
          opacity: 0.2
        },
        toolbar: {
          show: true
        }
      },
      stroke: {
        curve: "straight",
        width: 1.2,
        colors: ['#4B7BFF'],
      },
      markers: {
        size: 4,
        showNullDataPoints: true,
        colors: ['#4B7BFF'],
        strokeWidth: 0,
        strokeOpacity: 0.9,
        strokeDashArray: 0,
        fillOpacity: 1,
        discrete: [],
        shape: "circle",
        radius: 2,
      },
      title: {
        text: "Profile visits in the last year",
        align: "center"
      },
      grid: {
        show: false,
        row: {
          colors: ["transparent", '#ffffff'], // takes an array which will be repeated on columns
          opacity: 0.5
        },
        column: {
          colors: ['transparent', 'transparent'],
          opacity: 0.2
        }
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
        ],
        title: {
          text: "Month"
        }
      },
      yaxis: {
        title: {
          text: "Profile Visits",
        },
        min: 5,
        max: 40
      },
      tooltip : {
        enabled: true,
        fillSeriesColor: false,
      },
    };
  }

  ngOnInit(): void {}

  toggleDropdown(){
    this.showDropdown = !this.showDropdown;
  }
}