import {createAction, props} from '@ngrx/store';
import {Student} from '../interfaces/student'; 

export const loadStudentData = createAction('[Student] Load Students');
export const storeStudentData = createAction('[Student] Store Students', props<{studentData: Student[]}>());