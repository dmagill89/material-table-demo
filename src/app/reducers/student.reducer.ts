import { Action, createReducer, on } from '@ngrx/store';
import { load } from '../actions/student.actions';

export const studentInitialState = [];

const _studentReducer = createReducer(studentInitialState,
    on(load, state => state)
);

export function StudentReducer(state: any[], action: Action) { 
    return _studentReducer(state, action)
}