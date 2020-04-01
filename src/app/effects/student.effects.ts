import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { StudentService } from '../services/student/student.service';
import { loadStudentData } from '../actions/student.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';

@Injectable()
export class StudentEffects {

  constructor(private actions$: Actions, private studentService: StudentService) { }

  loadStudentData$ = createEffect(() => this.actions$.pipe(
      ofType(loadStudentData),
      mergeMap(() => this.studentService.loadStudentData().pipe(
          map(students => ({type: '[Student] Store Students', studentData: students }))
      )))
  );
}