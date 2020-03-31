import { Component, OnInit, OnDestroy, ViewChild, AfterViewInit } from '@angular/core';
import { Student } from '../interfaces/student';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Observable, Subscription } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { update } from '../actions/settings.actions';
import { loadStudentData } from '../actions/student.actions';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild(MatSort) sort: MatSort;

  public displayHeaders: any = {
    firstName: 'First Name',
    lastName: 'Last Name',
    age: 'Age',
    email: 'Email'
  }
  public settings$: Observable<any>;
  public studentData$: Observable<Student[]>;
  public studentDataSubscription: Subscription;
  public students: MatTableDataSource<Student[]>;

  constructor(private store: Store<any>) {
    this.settings$ = store.pipe(select(state => state.settings.columnOrder));
    this.studentData$ = store.pipe(select(state => state.students));
  }

  ngOnInit(): void {
    this.store.dispatch(loadStudentData());

    this.studentDataSubscription = this.studentData$.subscribe((students: any) => {
      this.students = new MatTableDataSource<Student[]>(students);
    });
  }

  ngAfterViewInit(): void {
    this.students.sort = this.sort;
  }

  ngOnDestroy(): void {
    this.studentDataSubscription.unsubscribe();
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

  filterStudents(event: Event): void {
    const filterQuery = (event.target as HTMLInputElement).value;
    this.students.filter = filterQuery.trim().toLowerCase();
  }
}
