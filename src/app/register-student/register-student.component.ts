import { Component, OnInit } from '@angular/core';
import axios, {AxiosInstance} from "axios";

@Component({
  selector: 'app-register-student',
  templateUrl: './register-student.component.html',
  styleUrls: ['./register-student.component.css']
})
export class RegisterStudentComponent implements OnInit {
  private axiosClient: AxiosInstance;
  hide1 = true;
  hide2 = true;
  username = "";
  firstName = "";
  lastName = "";
  password = "";
  password2 = "";

  userId = null;
  auth = false;
  constructor() {
    this.axiosClient = axios.create({
      timeout: 3000,
      headers: {
        "X-Initialized-At": Date.now().toString()
      }
    });
  }
  ngOnInit(): void {

  }

  createUser(){
    axios.post('https://interlab.azurewebsites.net/api/users',{
      username: this.username,
      password: this.password,
      email: this.username,
      createdAt: new Date(),
      updateAt: new Date(),
      dateCreated: new Date(),
    }).then(response=>{
        console.log(response.data.content);
        console.log("New user id: ", response.data.content.id);
        axios.post('https://interlab.azurewebsites.net/api/users/' + this.userId + '/profiles',{
          firstName: this.firstName,
          lastName: this.lastName,
          password: this.password,
          field: '',
          phone: '',
          description: '',
          country: '',
          city: '',
          university: '',
          degree: '',
          semester: null,
          createdAt: new Date(),
          updateAt: new Date(),
          role: 'company',
        })
          .then(response2=>{
              console.log(response2.data.content);
          });
    });

    console.log(this.username, this.firstName, this.lastName, this.password, this.password2);

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
