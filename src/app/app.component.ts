import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userList:any = [];

  constructor(private http: HttpClient){
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((data)=>{
      this.userList = data;
    })
  }
  
}
