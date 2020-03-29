import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private students = [
    {
      firstName: 'Ron',
      lastname: 'Burgandy',
      dateOfBirth: '01-20-1950',
      email: 'rburgandy@kwn.com',
      address: '123 Burgandy Rd'
    }
  ];

  constructor() { }

  
}
