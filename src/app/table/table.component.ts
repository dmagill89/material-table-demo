import { Component, OnInit } from '@angular/core';
import { Student } from '../interfaces/student';
import { CdkDragDrop } from '@angular/cdk/drag-drop';

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

  public columnDrop(event: CdkDragDrop<any>): void {
    console.log();
    this.swapColumns(event.previousIndex, event.currentIndex);
  }

  private swapColumns(previousIndex: number, currentIndex: number): void {
    const previous = this.displayedColumns[previousIndex];

    this.displayedColumns[previousIndex] = this.displayedColumns[currentIndex];
    this.displayedColumns[currentIndex] = previous;
  }
}
