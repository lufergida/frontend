import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    name!: string;
    email!: string;
    password!: string;

  constructor(public http: HttpClient, private router: Router){}

  ngOnInit(): void{
  }

  crearcuenta(){
    console.log(this.name),
    console.log(this.email),
    console.log(this.password);
    this.http.post<RegisterComponent>('http://127.0.0.1:8000/api/user/create/',{
        "name":this.name,
      "email":this.email,
      "password":this.password
    }).subscribe(data=>{
      this.router.navigate(["login"])
    })
  }
  }

