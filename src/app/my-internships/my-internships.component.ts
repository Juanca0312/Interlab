import { Component, OnInit } from '@angular/core';
import axios from 'axios';






@Component({
  selector: 'app-my-internships',
  templateUrl: './my-internships.component.html',
  styleUrls: ['./my-internships.component.css']
})
export class MyInternshipsComponent implements OnInit{

  displayedColumns: string[] = ['id', 'jobTitle', 'description', 'state'];
  Pasantias: [];


  getInternships() {
    axios.get('https://interlab.azurewebsites.net/api/companies/' + localStorage.getItem('companyId') +'/internships')
      .then(response => {
         this.Pasantias = response.data.content;
         console.log(response.data.content);
         console.log(response.data.content[0].jobTitle);
         console.log(this.Pasantias);
      });
  }

  ngOnInit(): void {
    console.log('hola');
    this.getInternships();
  }



}
