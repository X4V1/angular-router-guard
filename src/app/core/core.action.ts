export const ActionTypes = {
  SET_VALUE: 'SET_VALUE',
};

export class SetValueAction {
  public readonly type = ActionTypes.SET_VALUE;

  constructor(public payload: string) {
  }
}
