import { Component, OnInit } from '@angular/core';
import { Student } from '../interfaces/student';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { update } from '../actions/settings.actions';
import { loadStudentData } from '../actions/student.actions';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  public displayHeaders: any = {
    firstName: 'First Name',
    lastName: 'Last Name',
    age: 'Age',
    email: 'Email'
  }
  public settings$: Observable<any>;
  public studentData$: Observable<Student[]>;

  constructor(private store: Store<any>) {
    this.settings$ = store.pipe(select(state => state.settings.columnOrder));
    this.studentData$ = store.pipe(select(state => state.students));
    store.dispatch(loadStudentData());
  }

  ngOnInit(): void {
    this.store.dispatch(loadStudentData());
  }

  public columnDrop(event: CdkDragDrop<any>, columnOrder: string[]): void {
    const previousIndex = columnOrder.indexOf(event.previousContainer.data);
    const currentIndex = columnOrder.indexOf(event.container.data);
    const newColumnOrder = this.swapColumns(columnOrder, previousIndex, currentIndex);

    this.store.dispatch(update({ order: newColumnOrder }));
  }

  private swapColumns(columnOrder: string[], previousIndex: number, currentIndex: number): string[] {
    const newColumnOrder = [...columnOrder];
    const previous = newColumnOrder[previousIndex];

    newColumnOrder[previousIndex] = newColumnOrder[currentIndex];
    newColumnOrder[currentIndex] = previous;

    return newColumnOrder;
  }
}
