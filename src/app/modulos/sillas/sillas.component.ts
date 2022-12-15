import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-sillas',
  templateUrl: './sillas.component.html',
  styleUrls: ['./sillas.component.scss']
})
export class SillasComponent {
  constructor(public http: HttpClient){}

  ngOnInit(): void{
  this.http.get<any>("https://pruebamw.vivaair.com/availability/markets/").subscribe(data => {
  console.log(data)
  })
  }
  }

