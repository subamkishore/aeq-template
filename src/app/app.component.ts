import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userList:any = [];

  formConfiguration = [
    { key: 'firstName', label: 'First Name' },
    { key: 'lastName', label: 'Last Name' },
    { key: 'phoneNumber', label: 'Phone Number' },
    { key: 'email', label: 'Email' },
    { key: 'address', label: 'Address' }
  ]
  
  formValue = [
    { key: 'firstName', value: 'John' },
    { key: 'lastName', value: 'Wilmar' },
    { key: 'phoneNumber', value: '+91 9345345433' },
    { key: 'email', value: 'john@gmail.com' },
    { key: 'address', value: 'Street No 21' }
  ]
  

  constructor(private http: HttpClient){
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((data)=>{
      this.userList = data;
    })
  }
  
}
