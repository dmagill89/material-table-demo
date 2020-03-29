import { Component, OnInit } from '@angular/core';
import { Student } from '../interfaces/student';

const STUDENTS_DATA: Student[] = [
  {
    firstName: 'Ron',
    lastName: 'Burgandy',
    age: 57,
    email: 'rburgandy@kwn.com'
  }
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  public students: Student[] = STUDENTS_DATA;
  public displayedColumns: string[] = ['firstName', 'lastName', 'age', 'email']

  constructor() { }

  ngOnInit(): void {
  }

}
