import { Component, ValueProvider } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
nombre!: string;
password!: string;

constructor(public http: HttpClient){}

ngOnInit(): void{
this.http.get<any>("https://pruebamw.vivaair.com/availability/markets/").subscribe(data => {
console.log(data)
})
}
}
