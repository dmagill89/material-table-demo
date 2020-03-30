import { Injectable } from '@angular/core';
import { Student } from 'src/app/interfaces/student';
import { Observable, of } from 'rxjs';

const STUDENTS_DATA: Student[] = [
  {
    firstName: 'Kenny',
    lastName: 'McCormick',
    age: 10,
    email: 'kmccormick@southpark.edu'
  },
  {
    firstName: 'Kyle',
    lastName: 'Broflovski',
    age: 10,
    email: 'kbroflovski@southpark.edu'
  },
  {
    firstName: 'Stan',
    lastName: 'Marsh',
    age: 10,
    email: 'stan.marsh@southpark.edu'
  },
  {
    firstName: 'Wendy',
    lastName: 'Testaburger',
    age: 10,
    email: 'wtestaburger@southpark.edu'
  }
];

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }

  public loadStudentData(): Observable<Student[]> {
    return of(STUDENTS_DATA);
  }
  
}
