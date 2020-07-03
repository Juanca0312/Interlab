import {Component, OnInit, ViewChild} from '@angular/core';
import axios from 'axios';
import {AxiosInstance} from 'axios';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private axiosClient: AxiosInstance;
  hide1 = true;
  username = '';
  password = '';
  companyId = null;
  userId = null;
  auth = false;
  constructor(private router: Router) {
    this.axiosClient = axios.create({
      timeout: 3000,
      headers: {
        'X-Initialized-At': Date.now().toString()
      }
    });
  }
  ngOnInit(): void {

  }

  getUsers() {
    console.log('BUTTON WORKING');
    console.log(this.username);
    console.log(this.password);
    axios.get('https://interlab.azurewebsites.net/api/users')
      .then(response => {
        console.log(response.data.content);
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < response.data.content.length; i++) {
            console.log(response.data.content[i].username);
            if (response.data.content[i].username === this.username &&
            response.data.content[i].password === this.password ||
            response.data.content[i].email === this.username &&
            response.data.content[i].password === this.password) {
            this.userId = response.data.content[i].id;
            this.auth = true;
            break;
          }
        }
        if (this.auth){
          console.log(this.userId);
          axios.get('https://interlab.azurewebsites.net/api/users/' + this.userId + '/profiles')
            .then(response2 => {
              console.log(response2.data.content[0].role);
              if (response2.data.content[0].role === 'student'){
                alert('Welcome Student');
                localStorage.setItem('userId', this.userId);
                // router push student dashboard
              }
              else if (response2.data.content[0].role === 'company'){
                axios.get('https://interlab.azurewebsites.net/api/users/' + this.userId + '/companies')
                  .then(response3 => {
                    this.companyId = response3.data.content[0].id;
                    console.log(this.companyId);
                    alert('Welcome Company');
                    localStorage.setItem('userId', this.userId);
                    localStorage.setItem('companyId', this.companyId);
                    this.router.navigateByUrl('/dashboardCompany');
                  });
              }
              else{
                alert('Role not found');
              }
            });

        }
        if (!this.auth){
          alert('Please register');
        }
      });
  }
  getUsername(event: any) { // without type info
    this.username = event.target.value;
  }
  getPassword(event: any) { // without type info
    this.password = event.target.value;
  }
}
