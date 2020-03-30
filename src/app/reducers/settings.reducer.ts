import { Action, createReducer, on } from '@ngrx/store';
import { update } from '../actions/settings.actions';

export const settingsInitialState: {[key: string]: any} = {
    columnOrder: ['firstName', 'lastName', 'age', 'email']
};

const _settingsReducer = createReducer(settingsInitialState, 
    on(update, (state, action) => {
        return Object.assign({}, state, {columnOrder: action.order});
    }));

export function SettingsReducer(state: any, action: Action) { 
    return _settingsReducer(state, action)
}