import { Component, OnInit } from '@angular/core';
import { Student } from '../interfaces/student';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

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

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  public students: Student[] = STUDENTS_DATA;
  public displayedColumns: string[] = ['firstName', 'lastName', 'age', 'email'];
  public displayHeaders: any = {
    firstName: 'First Name',
    lastName: 'Last Name',
    age: 'Age',
    email: 'Email'
  }
  public settings$: Observable<any>;

  constructor(private store: Store<any>) {
    this.settings$ = store.pipe(select(state => state.settings.columnOrder));
  }

  ngOnInit(): void {
  }

  public columnDrop(event: CdkDragDrop<any>): void {
    console.log();
    const previousIndex = this.displayedColumns.indexOf(event.previousContainer.data);
    const currentIndex = this.displayedColumns.indexOf(event.container.data);

    this.swapColumns(previousIndex, currentIndex);
  }

  private swapColumns(previousIndex: number, currentIndex: number): void {
    const previous = this.displayedColumns[previousIndex];

    this.displayedColumns[previousIndex] = this.displayedColumns[currentIndex];
    this.displayedColumns[currentIndex] = previous;
  }
}
