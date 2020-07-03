import { Component, OnInit } from '@angular/core';
import axios, {AxiosInstance} from "axios";

@Component({
  selector: 'app-register-company',
  templateUrl: './register-company.component.html',
  styleUrls: ['./register-company.component.css']
})
export class RegisterCompanyComponent implements OnInit {
  private axiosClient: AxiosInstance;
  hide1 = true;
  hide2 = true;
  username = '';
  firstName = '';
  lastName = '';
  companyId = null;
  password = '';
  password2 = '';

  userId = null;
  auth = false;
  constructor() {
    this.axiosClient = axios.create({
      timeout: 3000,
      headers: {
        'X-Initialized-At': Date.now().toString()
      }
    });
  }
  ngOnInit(): void {

  }

  createUser(){
    axios.post('https://interlab.azurewebsites.net/api/users', {
      username: this.username,
      password: this.password,
      email: this.username,
    }).then(response => {
      console.log(response.data);
      console.log('New user id: ', response.data.id);
      this.userId = response.data.id;
      console.log(this.firstName, this.lastName);
      axios.post('https://interlab.azurewebsites.net/api/users/' + this.userId + '/profiles' , {
        "role": "company",
        "firstName": this.firstName,
        "lastName": this.lastName,
        "field": "Companies",
        "phone": "+51 ",
        "description": "Interlab user",
        "country": "Peru",
        "city": "Lima",
        "university": "MIT",
        "degree": "SWE",
        "semester": null
      })
        .then(response2 => {
          console.log(response2.data);
        }).catch(error => {
        console.log(error);
      });
    });
  }
  getUsername(event: any) { // without type info
    this.username = event.target.value;
  }
  getFirstName(event: any) { // without type info
    this.firstName = event.target.value;
  }
  getLastName(event: any) { // without type info
    this.lastName = event.target.value;
  }
  getPassword(event: any) { // without type info
    this.password = event.target.value;
  }
  getPassword2(event: any) { // without type info
    this.password2 = event.target.value;
  }
}
