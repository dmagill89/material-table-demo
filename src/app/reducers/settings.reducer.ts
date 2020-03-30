import { Action, createReducer } from '@ngrx/store';

export const settingsInitialState: {[key: string]: any} = {
    columnOrder: ['firstName', 'lastName', 'age', 'email']
};

const _settingsReducer = createReducer(settingsInitialState);

export function SettingsReducer(state: any, action: Action) { 
    return _settingsReducer(state, action)
}