import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {

  constructor(public http: HttpClient){}

ngOnInit(): void{
this.http.get<any>("https://pruebamw.vivaair.com/availability/markets/").subscribe(data => {
console.log(data)
})
}
}


