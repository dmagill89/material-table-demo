import { Action, createReducer, on } from '@ngrx/store';
import { storeStudentData } from '../actions/student.actions';
import { Student } from '../interfaces/student';

export const studentInitialState: Student[] = [];

const _studentReducer = createReducer(studentInitialState,
    on(storeStudentData, (state, action) => {
        return Object.assign([], state, action.studentData)
    })
);

export function StudentReducer(state: any[], action: Action) {
    return _studentReducer(state, action)
}