import {createAction, props} from '@ngrx/store';

export const update = createAction('[Settings] Update Settings', props<{order: string[]}>());