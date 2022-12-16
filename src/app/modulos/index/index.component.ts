import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})


export class IndexComponent implements OnInit {
  data = [];

  constructor(
    private http : HttpClient
  ){ } 

  ngOnInit(): void {
    this.getUsers();
  }

  public getUsers() {
    this.http.get<any>('https://reqres.in/api/users?page=1').subscribe(
      response => {
        console.log(response)
        this.data= response;
          }
      )
  }
}