import { Component, OnInit } from '@angular/core';
import { Student } from '../interfaces/student';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { update } from '../actions/settings.actions';

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

  public columnDrop(event: CdkDragDrop<any>, columnOrder: string[]): void {
    const previousIndex = columnOrder.indexOf(event.previousContainer.data);
    const currentIndex = columnOrder.indexOf(event.container.data);
    const newColumnOrder = this.swapColumns(columnOrder, previousIndex, currentIndex);

    this.store.dispatch(update({order: newColumnOrder}));
  }

  private swapColumns(columnOrder: string[], previousIndex: number, currentIndex: number): string[] {
    const newColumnOrder = [...columnOrder];
    const previous = newColumnOrder[previousIndex];

    newColumnOrder[previousIndex] = newColumnOrder[currentIndex];
    newColumnOrder[currentIndex] = previous;

    return newColumnOrder;
  }
}
