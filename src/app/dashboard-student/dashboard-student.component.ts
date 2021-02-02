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
  colors: string[];
  yaxis: ApexYAxis;
  grid: ApexGrid;
  title: ApexTitleSubtitle;
  tooltip: ApexTooltip,
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
          data: [10, 24, 15, 35, 11, 19, 23, 28, 20]
        }
      ],
      colors: ["#4B7BFF"],
      chart: {
        height: 350,
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
        text: "Profile visits by Month",
        align: "center"
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5
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
          "Sep"
        ],
        title: {
          text: "Month"
        }
      },
      yaxis: {
        title: {
          text: "Profile Visits"
        },
        min: 5,
        max: 40
      },
      tooltip : {
        enabled: false,
      },
    };
  }

  ngOnInit(): void {}

  toggleDropdown(){
    this.showDropdown = !this.showDropdown;
  }
}