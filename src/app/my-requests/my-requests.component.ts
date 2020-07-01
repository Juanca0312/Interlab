import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import axios from 'axios';
import { AxiosInstance } from 'axios';

@Component({
  selector: 'app-my-requests',
  templateUrl: './my-requests.component.html',
  styleUrls: ['./my-requests.component.css']
})
export class MyRequestsComponent implements OnInit {
  private axiosClient: AxiosInstance;
  constructor() {
    this.axiosClient = axios.create({
      timeout: 3000,
      headers: {
        'X-Initialized-At': Date.now().toString()
      }
    });
  }
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit(): void{
    this.dataSource.paginator = this.paginator;
  }

}

export interface UserData {
  location: string;
  jobTitle: string;
  salary: number;
  created_at: string;
}

const ELEMENT_DATA: UserData[] = [
  {jobTitle: 'Research intern', location: 'Redmond, Washington, USA', salary: 2000, created_at: '9/1/2020 0:00'},
];
