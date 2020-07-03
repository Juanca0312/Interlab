import {Component, OnInit, ViewChild} from '@angular/core';
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
  displayedColumns: string[] = ['jobTitle', 'location', 'salary', 'created_at'];
  requests = [];

  getRequests() {
    axios.get('https://interlab.azurewebsites.net/users/2/requests')
      .then(response => {
        this.requests = response.data.content;
        console.log(response.data.content);
        console.log(response.data.content[0].jobTitle);
        console.log(this.requests);
      });
  }

  ngOnInit(): void{
    console.log('hola');
    this.getRequests();
  }

}

