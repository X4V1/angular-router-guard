import {ActionTypes, SetValueAction} from './core.action';

export interface State {
  value?: string;
}

export const reducer = (state: State = {}, action: SetValueAction): State => {
  if (action.type === ActionTypes.SET_VALUE) {
    return {value: action.payload};
  }
  return state;
};
