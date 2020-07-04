import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MediaMatcher} from '@angular/cdk/layout';
import axios from 'axios';
import {AxiosInstance} from 'axios';
import {Router} from '@angular/router';

@Component({
  selector: 'app-find-internship',
  templateUrl: './find-internship.component.html',
  styleUrls: ['./find-internship.component.css']
})
export class FindInternshipComponent implements OnInit {

  constructor( changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private router: Router) {

    this.axiosClient = axios.create({
      timeout: 3000,
      headers: {
        'X-Initialized-At': Date.now().toString()
      }
    });

    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  private axiosClient: AxiosInstance;
  checked = false;
  mobileQuery: MediaQueryList;
  fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);
  fillerContent = Array.from({length: 50}, () =>
    `no repitas`);
  private _mobileQueryListener: () => void;

  showFiller = false;
  @ViewChild('dashboard-student', {static: false} )
  dashboardStudentForm: NgForm;
  dataSource = new MatTableDataSource();
  list: string[] = ['id', 'jobTitle', 'state', 'description', 'publicationDate', 'startingDate', 'finishingDate', 'salary', 'location'];
  interships = [];

  @ViewChild(MatPaginator, {static: true})
  paginator: MatPaginator;

  isEditMode = false;




  getInternship() {
    axios.get('https://interlab.azurewebsites.net/api/internships')
      .then(response => {
        this.interships = response.data.content;
        console.log(response.data.content);
        console.log(response.data.content[0].jobTitle);
        console.log(this.interships);
        console.log(this.interships[0].description);
      });
  }
  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.getInternship();
  }

  //localStorage.setItem("internshipID",)
  Llamada(id){
   localStorage.setItem('internshipId', id);
   axios.post('https://interlab.azurewebsites.net/api/users/' + localStorage.getItem('userId') + '/internships/' +
      localStorage.getItem('internshipId'))
    .then(response => {
      console.log('Aplicado' , response.data);
      axios.get('https://interlab.azurewebsites.net/api/users/' + localStorage.getItem('userId') + '/internships/').then(response2 => {
        localStorage.setItem('internshipId', id);
      });
    });
  }
}
