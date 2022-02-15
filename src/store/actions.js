export const ActionType = {
  ACTION: `action/action`,
};

export const ActionCreator = {
  action: (data) => ({
    type: ActionType.ACTION,
    payload: data,
  }),
};
